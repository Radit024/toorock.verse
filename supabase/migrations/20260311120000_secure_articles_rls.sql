-- Secure articles table: only authenticated users can write
-- Drop the permissive "anyone can write" policies
DROP POLICY IF EXISTS "Anyone can insert articles" ON public.articles;
DROP POLICY IF EXISTS "Anyone can update articles" ON public.articles;
DROP POLICY IF EXISTS "Anyone can delete articles" ON public.articles;

-- Allow authenticated users to read ALL articles (including unpublished)
CREATE POLICY "Authenticated users can read all articles"
  ON public.articles FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can insert articles"
  ON public.articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update articles"
  ON public.articles FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete articles"
  ON public.articles FOR DELETE
  TO authenticated
  USING (true);
