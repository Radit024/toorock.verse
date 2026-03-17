-- Migration: 20260317120000_add_article_categories_array.sql
-- Support multiple categories per article while preserving legacy `category`.

ALTER TABLE public.articles
ADD COLUMN IF NOT EXISTS categories text[];

UPDATE public.articles
SET categories = CASE
  WHEN categories IS NULL OR array_length(categories, 1) IS NULL THEN ARRAY[category]
  ELSE categories
END;

ALTER TABLE public.articles
ALTER COLUMN categories SET NOT NULL;

ALTER TABLE public.articles
ALTER COLUMN categories SET DEFAULT ARRAY[]::text[];
