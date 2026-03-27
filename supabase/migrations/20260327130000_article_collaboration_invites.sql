-- Migration: 20260327130000_article_collaboration_invites.sql
-- Add invitation flow for collaboration with accept/reject notifications.

CREATE TABLE IF NOT EXISTS public.article_collaboration_invites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
  inviter_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  invitee_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'cancelled')),
  created_at timestamptz NOT NULL DEFAULT timezone('utc'::text, now()),
  responded_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_article_collab_invites_article_id
  ON public.article_collaboration_invites(article_id);

CREATE INDEX IF NOT EXISTS idx_article_collab_invites_invitee_id
  ON public.article_collaboration_invites(invitee_id);

CREATE UNIQUE INDEX IF NOT EXISTS uq_article_collab_invites_pending
  ON public.article_collaboration_invites(article_id, invitee_id)
  WHERE status = 'pending';

ALTER TABLE public.article_collaboration_invites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "article_invites_owner_read" ON public.article_collaboration_invites;
DROP POLICY IF EXISTS "article_invites_invitee_read" ON public.article_collaboration_invites;
DROP POLICY IF EXISTS "article_invites_owner_insert" ON public.article_collaboration_invites;
DROP POLICY IF EXISTS "article_invites_invitee_update" ON public.article_collaboration_invites;

CREATE POLICY "article_invites_owner_read"
ON public.article_collaboration_invites
FOR SELECT
TO authenticated
USING (public.is_article_owner(article_id));

CREATE POLICY "article_invites_invitee_read"
ON public.article_collaboration_invites
FOR SELECT
TO authenticated
USING (invitee_id = auth.uid());

CREATE POLICY "article_invites_owner_insert"
ON public.article_collaboration_invites
FOR INSERT
TO authenticated
WITH CHECK (
  public.is_article_owner(article_id)
  AND inviter_id = auth.uid()
);

CREATE POLICY "article_invites_invitee_update"
ON public.article_collaboration_invites
FOR UPDATE
TO authenticated
USING (invitee_id = auth.uid())
WITH CHECK (invitee_id = auth.uid());

CREATE OR REPLACE FUNCTION public.invite_article_collaborator(p_article_id uuid, p_invitee_id uuid)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  v_invite_id uuid;
BEGIN
  IF NOT public.is_article_owner(p_article_id) THEN
    RAISE EXCEPTION 'Only the article owner can send collaboration invites.';
  END IF;

  IF p_invitee_id = auth.uid() THEN
    RAISE EXCEPTION 'You cannot invite yourself.';
  END IF;

  IF EXISTS (
    SELECT 1
    FROM public.article_collaborators ac
    WHERE ac.article_id = p_article_id
      AND ac.collaborator_id = p_invitee_id
  ) THEN
    RAISE EXCEPTION 'This user is already a collaborator.';
  END IF;

  SELECT id
  INTO v_invite_id
  FROM public.article_collaboration_invites i
  WHERE i.article_id = p_article_id
    AND i.invitee_id = p_invitee_id
    AND i.status = 'pending'
  ORDER BY i.created_at DESC
  LIMIT 1;

  IF v_invite_id IS NOT NULL THEN
    RETURN v_invite_id;
  END IF;

  INSERT INTO public.article_collaboration_invites (article_id, inviter_id, invitee_id, status)
  VALUES (p_article_id, auth.uid(), p_invitee_id, 'pending')
  RETURNING id INTO v_invite_id;

  RETURN v_invite_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.list_article_collaboration_invites(p_article_id uuid)
RETURNS TABLE (
  invite_id uuid,
  invitee_id uuid,
  invitee_email text,
  status text,
  created_at timestamptz,
  responded_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  IF NOT public.is_article_owner(p_article_id) THEN
    RAISE EXCEPTION 'Only the article owner can view invite list.';
  END IF;

  RETURN QUERY
  SELECT
    i.id,
    i.invitee_id,
    u.email,
    i.status,
    i.created_at,
    i.responded_at
  FROM public.article_collaboration_invites i
  JOIN auth.users u ON u.id = i.invitee_id
  WHERE i.article_id = p_article_id
  ORDER BY i.created_at DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public.list_my_collaboration_invites()
RETURNS TABLE (
  invite_id uuid,
  article_id uuid,
  article_slug text,
  article_title text,
  inviter_id uuid,
  inviter_email text,
  created_at timestamptz,
  status text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  RETURN QUERY
  SELECT
    i.id,
    a.id,
    a.slug,
    a.title,
    i.inviter_id,
    u.email,
    i.created_at,
    i.status
  FROM public.article_collaboration_invites i
  JOIN public.articles a ON a.id = i.article_id
  JOIN auth.users u ON u.id = i.inviter_id
  WHERE i.invitee_id = auth.uid()
    AND i.status = 'pending'
  ORDER BY i.created_at DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public.respond_article_collaboration_invite(p_invite_id uuid, p_action text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  v_invite public.article_collaboration_invites%ROWTYPE;
  v_status text;
BEGIN
  v_status := lower(trim(p_action));
  IF v_status NOT IN ('accepted', 'rejected') THEN
    RAISE EXCEPTION 'Action must be accepted or rejected.';
  END IF;

  SELECT *
  INTO v_invite
  FROM public.article_collaboration_invites i
  WHERE i.id = p_invite_id
    AND i.invitee_id = auth.uid()
    AND i.status = 'pending';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invite not found or already handled.';
  END IF;

  IF v_status = 'accepted' THEN
    INSERT INTO public.article_collaborators (article_id, collaborator_id)
    VALUES (v_invite.article_id, auth.uid())
    ON CONFLICT (article_id, collaborator_id) DO NOTHING;
  END IF;

  UPDATE public.article_collaboration_invites
  SET status = v_status,
      responded_at = timezone('utc'::text, now())
  WHERE id = p_invite_id;

  UPDATE public.article_collaboration_invites
  SET status = 'cancelled',
      responded_at = timezone('utc'::text, now())
  WHERE article_id = v_invite.article_id
    AND invitee_id = v_invite.invitee_id
    AND status = 'pending'
    AND id <> p_invite_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.invite_article_collaborator(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.list_article_collaboration_invites(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.list_my_collaboration_invites() TO authenticated;
GRANT EXECUTE ON FUNCTION public.respond_article_collaboration_invite(uuid, text) TO authenticated;
