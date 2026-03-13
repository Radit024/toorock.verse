-- Migration: 20260314090000_remove_seed_dummy_articles.sql
-- Remove legacy dummy/seed articles that were previously hardcoded in src/data/articles.ts.

DELETE FROM public.articles
WHERE slug IN (
  'gundam-requiem-s2',
  'elden-ring-nightreign',
  'solo-leveling-s3',
  'cyberpunk-project-orion',
  'macross-delta-finale',
  'your-name-producer-new-film',
  'mecha-uprising-anime',
  'dark-hero-anime',
  'dragon-siege-rpg',
  'neon-arena-fps',
  'esports-tournament-2026',
  'esports-team-victory',
  'anime-film-premiere',
  'gaming-convention-retro'
);
