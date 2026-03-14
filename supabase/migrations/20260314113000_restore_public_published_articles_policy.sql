-- Migration: 20260314113000_restore_public_published_articles_policy.sql
-- Restore public read access for published articles on main pages.

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read published articles" ON public.articles;
CREATE POLICY "Public can read published articles"
ON public.articles
FOR SELECT
TO anon
USING (published = true);

-- Optional mirror policy for authenticated users to ensure published articles are always visible.
DROP POLICY IF EXISTS "Authenticated can read published articles" ON public.articles;
CREATE POLICY "Authenticated can read published articles"
ON public.articles
FOR SELECT
TO authenticated
USING (published = true);
