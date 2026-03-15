-- Migration: 20260315110000_allow_article_image_delete_for_uploader.sql
-- Allow authenticated uploaders to delete their own temporary article images.

DROP POLICY IF EXISTS "Authenticated users can upload article images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update own article images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete own article images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read article images" ON storage.objects;

CREATE POLICY "Public can read article images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'article-images');

CREATE POLICY "Authenticated users can upload article images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'article-images' AND owner = auth.uid());

CREATE POLICY "Authenticated users can update own article images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'article-images' AND owner = auth.uid())
WITH CHECK (bucket_id = 'article-images' AND owner = auth.uid());

CREATE POLICY "Authenticated users can delete own article images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'article-images' AND owner = auth.uid());
