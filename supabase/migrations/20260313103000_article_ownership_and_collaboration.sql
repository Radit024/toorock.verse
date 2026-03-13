-- Migration: 20260313103000_article_ownership_and_collaboration.sql

-- 1. Add owner_id to articles
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS owner_id uuid REFERENCES auth.users(id);

-- Set existing articles to the first admin user, or leave null if no users exist
-- Note: Depending on existing setup, defaulting to current user or a specific admin might be needed.
-- We'll leave it null for legacy and just ensure new ones get the uid if inserted by an authed user.
-- To strictly enforce, you could set NOT NULL in the future.

-- 2. Create article_collaborators table
-- Drop it if it exists to ensure the schema is correct, since it's a new feature and has no existing data
DROP TABLE IF EXISTS public.article_collaborators CASCADE;

CREATE TABLE public.article_collaborators (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id uuid REFERENCES public.articles(id) ON DELETE CASCADE NOT NULL,
    collaborator_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(article_id, collaborator_id)
);

-- 3. Enable RLS
ALTER TABLE public.article_collaborators ENABLE ROW LEVEL SECURITY;

-- Helper functions to avoid infinite recursion in RLS policies
CREATE OR REPLACE FUNCTION public.is_article_owner(p_article_id uuid)
RETURNS boolean AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.articles
        WHERE id = p_article_id AND owner_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.is_article_collaborator(p_article_id uuid)
RETURNS boolean AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.article_collaborators
        WHERE article_id = p_article_id AND collaborator_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Policies for article_collaborators
DROP POLICY IF EXISTS "Owners can manage collaborators" ON public.article_collaborators;
DROP POLICY IF EXISTS "Collaborators can view their collaborations" ON public.article_collaborators;

-- Owners of the article can manage collaborators (using the security definer function to avoid RLS loops)
CREATE POLICY "Owners can manage collaborators" ON public.article_collaborators
    FOR ALL
    USING (public.is_article_owner(article_id));

-- Collaborators can see their own collaborations
CREATE POLICY "Collaborators can view their collaborations" ON public.article_collaborators
    FOR SELECT
    USING (collaborator_id = auth.uid());

-- 5. Policies for articles
-- We drop old permissive authenticated policies if they exist (they usually allow seeing/editing all)
DROP POLICY IF EXISTS "Authenticated users can read all articles" ON public.articles;
DROP POLICY IF EXISTS "Authenticated users can update articles" ON public.articles;
DROP POLICY IF EXISTS "Authenticated users can delete articles" ON public.articles;
DROP POLICY IF EXISTS "Authed can read published or owned or collaborated" ON public.articles;
DROP POLICY IF EXISTS "Authed can insert" ON public.articles;
DROP POLICY IF EXISTS "Authed can update owned or collaborated" ON public.articles;
DROP POLICY IF EXISTS "Authed can delete owned" ON public.articles;

-- Create comprehensive policies
-- 1. Anyone (or just authenticated) can select if it's published, OR if they own it, OR if they are a collaborator.
-- NOTE: anon users can already read published articles (assuming an existing anon policy). But for authenticated:
CREATE POLICY "Authed can read published or owned or collaborated" ON public.articles
    FOR SELECT
    TO authenticated
    USING (
        published = true OR 
        owner_id = auth.uid() OR
        public.is_article_collaborator(id)
    );

CREATE POLICY "Authed can insert" ON public.articles
    FOR INSERT
    TO authenticated
    WITH CHECK (true); -- owner_id is set by frontend or trigger

CREATE POLICY "Authed can update owned or collaborated" ON public.articles
    FOR UPDATE
    TO authenticated
    USING (
        owner_id = auth.uid() OR
        public.is_article_collaborator(id)
    );

CREATE POLICY "Authed can delete owned" ON public.articles
    FOR DELETE
    TO authenticated
    USING (
        owner_id = auth.uid() OR
        public.is_article_collaborator(id)
    );

-- 6. RPCs for adding/removing collaborators via email
CREATE OR REPLACE FUNCTION public.add_article_collaborator(p_article_id uuid, p_email text)
RETURNS void AS $$
DECLARE
    v_target_user_id uuid;
    v_is_owner boolean;
BEGIN
    -- Check if the current user is the owner of the article
    SELECT (owner_id = auth.uid()) INTO v_is_owner
    FROM public.articles
    WHERE id = p_article_id;

    IF NOT v_is_owner THEN
        RAISE EXCEPTION 'Only the article owner can add collaborators.';
    END IF;

    -- Find the user by email (from auth.users view or similar, might need to rely on a public users table if auth.users isn't heavily exposed, but assuming we have access or we can create a SECURE definer)
    -- NOTE: auth.users is not accessible by default to authenticated users, so we must use SECURITY DEFINER
    SELECT id INTO v_target_user_id
    FROM auth.users
    WHERE email = p_email;

    IF v_target_user_id IS NULL THEN
        RAISE EXCEPTION 'User with email % not found.', p_email;
    END IF;

    INSERT INTO public.article_collaborators (article_id, collaborator_id)
    VALUES (p_article_id, v_target_user_id)
    ON CONFLICT DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.remove_article_collaborator(p_article_id uuid, p_collaborator_id uuid)
RETURNS void AS $$
DECLARE
    v_is_owner boolean;
BEGIN
    SELECT (owner_id = auth.uid()) INTO v_is_owner
    FROM public.articles
    WHERE id = p_article_id;

    IF NOT v_is_owner THEN
        RAISE EXCEPTION 'Only the article owner can remove collaborators.';
    END IF;

    DELETE FROM public.article_collaborators
    WHERE article_id = p_article_id AND collaborator_id = p_collaborator_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.list_article_collaborators(p_article_id uuid)
RETURNS TABLE (
    collaborator_id uuid,
    email text,
    added_at timestamp with time zone
) AS $$
BEGIN
    IF NOT (public.is_article_owner(p_article_id) OR public.is_article_collaborator(p_article_id)) THEN
        RAISE EXCEPTION 'You do not have access to this article collaborators list.';
    END IF;

    RETURN QUERY
    SELECT ac.collaborator_id, u.email, ac.created_at
    FROM public.article_collaborators ac
    JOIN auth.users u ON u.id = ac.collaborator_id
    WHERE ac.article_id = p_article_id
    ORDER BY ac.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
