-- Migration: 20260314110000_fix_legacy_user_id_columns_and_policies.sql
-- Fix legacy schema/policies that still reference `user_id` and cause runtime errors.

-- 1) Ensure articles.owner_id exists.
ALTER TABLE public.articles
ADD COLUMN IF NOT EXISTS owner_id uuid REFERENCES auth.users(id);

-- 2) If legacy articles.user_id exists, backfill owner_id from it.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'articles' AND column_name = 'user_id'
  ) THEN
    EXECUTE 'UPDATE public.articles SET owner_id = COALESCE(owner_id, user_id)';
  END IF;
END $$;

-- 3) Ensure article_collaborators table exists.
CREATE TABLE IF NOT EXISTS public.article_collaborators (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  article_id uuid REFERENCES public.articles(id) ON DELETE CASCADE NOT NULL,
  collaborator_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4) If legacy article_collaborators.user_id exists, migrate/rename to collaborator_id.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'article_collaborators' AND column_name = 'user_id'
  ) AND NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'article_collaborators' AND column_name = 'collaborator_id'
  ) THEN
    EXECUTE 'ALTER TABLE public.article_collaborators RENAME COLUMN user_id TO collaborator_id';
  ELSIF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'article_collaborators' AND column_name = 'user_id'
  ) AND EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'article_collaborators' AND column_name = 'collaborator_id'
  ) THEN
    EXECUTE 'UPDATE public.article_collaborators SET collaborator_id = COALESCE(collaborator_id, user_id)';
  END IF;
END $$;

-- 5) Enforce NOT NULL and FK for collaborator_id.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'article_collaborators' AND column_name = 'collaborator_id'
  ) THEN
    EXECUTE 'ALTER TABLE public.article_collaborators ALTER COLUMN collaborator_id SET NOT NULL';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'article_collaborators_collaborator_id_fkey'
      AND conrelid = 'public.article_collaborators'::regclass
  ) THEN
    ALTER TABLE public.article_collaborators
      ADD CONSTRAINT article_collaborators_collaborator_id_fkey
      FOREIGN KEY (collaborator_id) REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;
END $$;

-- 6) Ensure uniqueness for collaboration pairs.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'article_collaborators_article_id_collaborator_id_key'
      AND conrelid = 'public.article_collaborators'::regclass
  ) THEN
    ALTER TABLE public.article_collaborators
      ADD CONSTRAINT article_collaborators_article_id_collaborator_id_key
      UNIQUE (article_id, collaborator_id);
  END IF;
END $$;

ALTER TABLE public.article_collaborators ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- 7) Drop all existing policies to remove legacy `user_id` references.
DO $$
DECLARE
  p RECORD;
BEGIN
  FOR p IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'articles'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.articles', p.policyname);
  END LOOP;

  FOR p IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'article_collaborators'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.article_collaborators', p.policyname);
  END LOOP;
END $$;

-- 8) Recreate helper functions with canonical column names.
CREATE OR REPLACE FUNCTION public.is_article_owner(p_article_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.articles
    WHERE id = p_article_id AND owner_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.is_article_collaborator(p_article_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.article_collaborators
    WHERE article_id = p_article_id AND collaborator_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 9) Recreate policies.
CREATE POLICY "article_collab_owner_manage"
ON public.article_collaborators
FOR ALL
TO authenticated
USING (public.is_article_owner(article_id))
WITH CHECK (public.is_article_owner(article_id));

CREATE POLICY "article_collab_self_read"
ON public.article_collaborators
FOR SELECT
TO authenticated
USING (collaborator_id = auth.uid());

CREATE POLICY "articles_read_owned_or_collab_or_published"
ON public.articles
FOR SELECT
TO authenticated
USING (
  published = true
  OR owner_id = auth.uid()
  OR public.is_article_collaborator(id)
);

CREATE POLICY "articles_insert_authenticated"
ON public.articles
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "articles_update_owned_or_collab"
ON public.articles
FOR UPDATE
TO authenticated
USING (
  owner_id = auth.uid()
  OR public.is_article_collaborator(id)
)
WITH CHECK (
  owner_id = auth.uid()
  OR public.is_article_collaborator(id)
);

CREATE POLICY "articles_delete_owned_or_collab"
ON public.articles
FOR DELETE
TO authenticated
USING (
  owner_id = auth.uid()
  OR public.is_article_collaborator(id)
);
