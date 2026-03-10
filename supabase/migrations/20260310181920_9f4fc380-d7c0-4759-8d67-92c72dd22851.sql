-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  author_name TEXT NOT NULL DEFAULT 'Admin',
  author_role TEXT NOT NULL DEFAULT 'Editor',
  author_avatar TEXT NOT NULL DEFAULT 'AD',
  read_time TEXT NOT NULL DEFAULT '3 min read',
  is_breaking BOOLEAN NOT NULL DEFAULT false,
  content TEXT[] NOT NULL DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Public can read published articles
CREATE POLICY "Anyone can read published articles"
  ON public.articles FOR SELECT
  USING (published = true);

-- Anyone can insert (no auth for now)
CREATE POLICY "Anyone can insert articles"
  ON public.articles FOR INSERT
  WITH CHECK (true);

-- Anyone can update (no auth for now)
CREATE POLICY "Anyone can update articles"
  ON public.articles FOR UPDATE
  USING (true);

-- Anyone can delete (no auth for now)
CREATE POLICY "Anyone can delete articles"
  ON public.articles FOR DELETE
  USING (true);

-- Create index on category and slug
CREATE INDEX idx_articles_category ON public.articles (category);
CREATE INDEX idx_articles_slug ON public.articles (slug);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();