
-- Create storage bucket for article images
INSERT INTO storage.buckets (id, name, public) VALUES ('article-images', 'article-images', true);

-- Allow anyone to upload images
CREATE POLICY "Anyone can upload article images"
ON storage.objects FOR INSERT TO public
WITH CHECK (bucket_id = 'article-images');

-- Allow anyone to read article images
CREATE POLICY "Anyone can read article images"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'article-images');

-- Allow anyone to delete article images
CREATE POLICY "Anyone can delete article images"
ON storage.objects FOR DELETE TO public
USING (bucket_id = 'article-images');
