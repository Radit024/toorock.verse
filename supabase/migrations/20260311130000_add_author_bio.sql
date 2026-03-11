-- Add author_bio column to articles table
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS author_bio TEXT NOT NULL DEFAULT '';
