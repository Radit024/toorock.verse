-- Migration: 20260313130000_admin_leaderboard_display_name.sql
-- Ensure leaderboard returns display_name only (no email column).

CREATE OR REPLACE FUNCTION public.admin_upload_leaderboard()
RETURNS TABLE (
    user_id uuid,
    display_name text,
    registered_at timestamp with time zone,
    total_articles bigint,
    published_articles bigint,
    draft_articles bigint,
    last_upload_at timestamp with time zone
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public, auth
AS $$
    SELECT
        u.id AS user_id,
        COALESCE(NULLIF(u.raw_user_meta_data ->> 'name', ''), split_part(COALESCE(u.email, u.id::text), '@', 1)) AS display_name,
        u.created_at AS registered_at,
        COUNT(a.id) AS total_articles,
        COUNT(a.id) FILTER (WHERE a.published = true) AS published_articles,
        COUNT(a.id) FILTER (WHERE COALESCE(a.published, false) = false) AS draft_articles,
        MAX(a.created_at) AS last_upload_at
    FROM auth.users u
    LEFT JOIN public.articles a ON a.owner_id = u.id
    WHERE u.deleted_at IS NULL
    GROUP BY u.id, u.raw_user_meta_data, u.email, u.created_at
    ORDER BY total_articles DESC, published_articles DESC, last_upload_at DESC NULLS LAST, registered_at ASC;
$$;

REVOKE EXECUTE ON FUNCTION public.admin_upload_leaderboard() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_upload_leaderboard() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_upload_leaderboard() TO service_role;
