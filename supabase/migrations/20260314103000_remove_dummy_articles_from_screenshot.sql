-- Migration: 20260314103000_remove_dummy_articles_from_screenshot.sql
-- Remove remaining demo articles visible on homepage/trending widgets.

DELETE FROM public.articles
WHERE
  slug IN (
    'chainsaw-man-the-movie-official-teaser-drops-theater-dates-announced',
    'netflixs-play-to-win-docuseries-shines-light-on-southeast-asian-esports',
    'cd-projekt-red-teases-second-cyberpunk-2077-expansion-at-gdc-2026',
    'gundam-requiem-for-vengeance-s2-confirmed-with-unreal-engine-5-5',
    'elden-ring-nightreign-everything-we-know-about-the-co-op-spinoff',
    'valorant-champions-2026-to-be-held-in-seoul-full-schedule-released',
    'solo-leveling-season-2-finale-breaks-crunchyroll-streaming-records',
    'gta-vi-release-date-confirmed-october-2026-for-ps5-and-xbox-series-x'
  )
  OR regexp_replace(lower(title), '[^a-z0-9]+', '-', 'g') IN (
    'chainsaw-man-the-movie-official-teaser-drops-theater-dates-announced-',
    'netflix-s-play-to-win-docuseries-shines-light-on-southeast-asian-esports',
    'cd-projekt-red-teases-second-cyberpunk-2077-expansion-at-gdc-2026',
    'gundam-requiem-for-vengeance-s2-confirmed-with-unreal-engine-5-5',
    'elden-ring-nightreign-everything-we-know-about-the-co-op-spinoff',
    'valorant-champions-2026-to-be-held-in-seoul-full-schedule-released',
    'solo-leveling-season-2-finale-breaks-crunchyroll-streaming-records',
    'gta-vi-release-date-confirmed-october-2026-for-ps5-and-xbox-series-x'
  )
  OR lower(title) IN (
    'chainsaw man: the movie — official teaser drops, theater dates announced',
    'netflix''s "play to win" docuseries shines light on southeast asian esports',
    'cd projekt red teases second cyberpunk 2077 expansion at gdc 2026',
    'gundam: requiem for vengeance s2 confirmed with unreal engine 5.5',
    'elden ring: nightreign - everything we know about the co-op spinoff',
    'valorant champions 2026 to be held in seoul - full schedule released',
    'solo leveling season 2 finale breaks crunchyroll streaming records',
    'gta vi release date confirmed: october 2026 for ps5 and xbox series x'
  );
