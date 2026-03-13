-- Migration: 20260314100000_remove_remaining_dummy_articles.sql
-- Remove remaining dummy/demo news entries still visible on homepage widgets.

DELETE FROM public.articles
WHERE
  LOWER(slug) IN (
    'gundam-requiem-s2-confirmed-with-unreal-engine-5-5',
    'elden-ring-nightreign-everything-we-know-about-the-co-op-spinoff',
    'valorant-champions-2026-to-be-held-in-seoul-full-schedule-released',
    'solo-leveling-season-2-finale-breaks-crunchyroll-streaming-records',
    'gta-vi-release-date-confirmed-october-2026-for-ps5-and-xbox-series-x'
  )
  OR LOWER(title) IN (
    'gundam: requiem for vengeance s2 confirmed with unreal engine 5.5',
    'elden ring: nightreign - everything we know about the co-op spinoff',
    'valorant champions 2026 to be held in seoul - full schedule released',
    'solo leveling season 2 finale breaks crunchyroll streaming records',
    'gta vi release date confirmed: october 2026 for ps5 and xbox series x'
  )
  OR LOWER(title) LIKE 'gundam:%requiem%vengeance%s2%'
  OR LOWER(title) LIKE 'elden ring:%nightreign%co-op%spinoff%'
  OR LOWER(title) LIKE 'valorant champions 2026%seoul%'
  OR LOWER(title) LIKE 'solo leveling season 2%crunchyroll%'
  OR LOWER(title) LIKE 'gta vi release date confirmed%';
