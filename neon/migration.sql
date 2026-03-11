-- Neon Database Migration
-- Run this SQL in your Neon project via: https://console.neon.tech → SQL Editor

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS articles (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          TEXT NOT NULL UNIQUE,
  title         TEXT NOT NULL,
  category      TEXT NOT NULL,
  image_url     TEXT,
  author_name   TEXT NOT NULL DEFAULT '',
  author_role   TEXT NOT NULL DEFAULT 'Editor',
  author_avatar TEXT NOT NULL DEFAULT '',
  read_time     TEXT NOT NULL DEFAULT '3 min read',
  is_breaking   BOOLEAN NOT NULL DEFAULT false,
  content       JSONB NOT NULL DEFAULT '[]',
  published     BOOLEAN NOT NULL DEFAULT false,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles (slug);
CREATE INDEX IF NOT EXISTS idx_articles_published_created ON articles (published, created_at DESC);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS articles_updated_at ON articles;
CREATE TRIGGER articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Admin credentials table (store your password in plain text)
CREATE TABLE IF NOT EXISTS admins (
  id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  password TEXT NOT NULL
);

-- Session tokens table (24-hour expiry)
CREATE TABLE IF NOT EXISTS admin_sessions (
  token      TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sessions_expires ON admin_sessions (expires_at);

-- Insert your admin password (replace 'your_password_here' with your actual password)
-- Only run this once. Delete this line after inserting.
-- INSERT INTO admins (password) VALUES ('your_password_here');
