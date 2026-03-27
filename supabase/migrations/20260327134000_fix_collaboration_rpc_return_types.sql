-- Migration: 20260327134000_fix_collaboration_rpc_return_types.sql
-- Ensure collaboration RPC return query types exactly match RETURNS TABLE signatures.

CREATE OR REPLACE FUNCTION public.list_article_collaborators(p_article_id uuid)
RETURNS TABLE (
  collaborator_id uuid,
  email text,
  added_at timestamp with time zone
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  IF NOT (public.is_article_owner(p_article_id) OR public.is_article_collaborator(p_article_id)) THEN
    RAISE EXCEPTION 'You do not have access to this article collaborators list.';
  END IF;

  RETURN QUERY
  SELECT
    ac.collaborator_id::uuid,
    COALESCE(u.email, ac.collaborator_id::text)::text AS email,
    ac.created_at::timestamptz AS added_at
  FROM public.article_collaborators ac
  LEFT JOIN auth.users u ON u.id = ac.collaborator_id
  WHERE ac.article_id = p_article_id
  ORDER BY ac.created_at DESC;
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
    i.id::uuid AS invite_id,
    i.invitee_id::uuid,
    COALESCE(u.email, i.invitee_id::text)::text AS invitee_email,
    i.status::text,
    i.created_at::timestamptz,
    i.responded_at::timestamptz
  FROM public.article_collaboration_invites i
  LEFT JOIN auth.users u ON u.id = i.invitee_id
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
    i.id::uuid AS invite_id,
    a.id::uuid AS article_id,
    a.slug::text AS article_slug,
    a.title::text AS article_title,
    i.inviter_id::uuid,
    COALESCE(u.email, i.inviter_id::text)::text AS inviter_email,
    i.created_at::timestamptz,
    i.status::text
  FROM public.article_collaboration_invites i
  JOIN public.articles a ON a.id = i.article_id
  LEFT JOIN auth.users u ON u.id = i.inviter_id
  WHERE i.invitee_id = auth.uid()
    AND i.status = 'pending'
  ORDER BY i.created_at DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.list_article_collaborators(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.list_article_collaboration_invites(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.list_my_collaboration_invites() TO authenticated;
