import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/data/articles";

export interface DbArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  image_url: string | null;
  author_name: string;
  author_role: string;
  author_avatar: string;
  author_bio: string;
  read_time: string;
  is_breaking: boolean;
  owner_id: string | null;
  content: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ArticleCollaborator {
  collaborator_id: string;
  email: string;
  added_at: string;
}

export interface AdminLeaderboardEntry {
  user_id: string;
  display_name: string;
  registered_at: string;
  total_articles: number;
  published_articles: number;
  draft_articles: number;
  last_upload_at: string | null;
}

export interface AdminUploaderCategoryOverviewEntry {
  category: string;
  total_articles: number;
  published_articles: number;
  draft_articles: number;
  last_upload_at: string | null;
}

export const fetchPublishedArticles = async (): Promise<DbArticle[]> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data as DbArticle[]) ?? [];
};

export const fetchAllArticles = async (): Promise<DbArticle[]> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not logged in");

  // Preferred query includes collaborator relation so we can show owned + collaborated records.
  const { data, error } = await supabase
    .from("articles")
    .select("*, article_collaborators(collaborator_id)")
    .order("created_at", { ascending: false });

  if (error) {
    const legacyUserIdIssue = error.message.toLowerCase().includes("user_id") && error.message.toLowerCase().includes("does not exist");
    if (!legacyUserIdIssue) throw new Error(error.message);

    // Fallback for legacy DBs where collaborator policies still reference old `user_id`.
    const { data: fallbackData, error: fallbackError } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (fallbackError) throw new Error(fallbackError.message);

    return ((fallbackData as DbArticle[]) ?? []).filter((a) => a.owner_id === user.id);
  }

  let articles = data as (DbArticle & { article_collaborators: any[] })[];
  
  // Filter locally: own or collaborated
  articles = articles.filter(a => {
    if (a.owner_id === user.id) return true;
    if (a.article_collaborators && a.article_collaborators.some(c => c.collaborator_id === user.id)) return true;
    return false;
  });

  return articles ?? [];
};

export const fetchArticleBySlug = async (slug: string): Promise<DbArticle | null> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error) return null;
  return data as DbArticle;
};

export const createArticle = async (
  article: Partial<Omit<DbArticle, "id" | "created_at" | "updated_at">>
): Promise<DbArticle> => {
  const { data: { user } } = await supabase.auth.getUser();
  const articleData = { ...article, owner_id: user?.id || null } as Record<string, unknown>;
  // Never trust incoming owner_id from caller.
  delete articleData.owner_id;
  articleData.owner_id = user?.id || null;
  const { data, error } = await supabase
    .from("articles")
    .insert(articleData as any)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as DbArticle;
};

export const updateArticle = async (
  id: string,
  updates: Partial<Omit<DbArticle, "id" | "created_at" | "updated_at">>
): Promise<DbArticle> => {
  const safeUpdates = { ...updates } as Record<string, unknown>;
  // Ownership is immutable from frontend updates.
  delete safeUpdates.owner_id;

  const { data, error } = await supabase
    .from("articles")
    .update(safeUpdates)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as DbArticle;
};

export const deleteArticle = async (id: string): Promise<void> => {
  const { error } = await supabase.from("articles").delete().eq("id", id);
  if (error) throw new Error(error.message);
};

export const fetchArticleCollaborators = async (articleId: string): Promise<ArticleCollaborator[]> => {
  const { data, error } = await supabase.rpc("list_article_collaborators", {
    p_article_id: articleId,
  });

  if (!error) {
    return (data ?? []) as ArticleCollaborator[];
  }

  const missingRpc = error.message.includes("list_article_collaborators") ||
    error.message.includes("schema cache");

  if (!missingRpc) {
    throw new Error(error.message);
  }

  // Fallback for projects where DB migration is not applied yet.
  const { data: fallbackData, error: fallbackError } = await supabase
    .from("article_collaborators")
    .select("collaborator_id, created_at")
    .eq("article_id", articleId)
    .order("created_at", { ascending: false });

  if (fallbackError) throw new Error(fallbackError.message);

  return (fallbackData ?? []).map((item) => ({
    collaborator_id: item.collaborator_id,
    email: item.collaborator_id,
    added_at: item.created_at,
  }));
};

export const addCollaborator = async (articleId: string, email: string) => {
  const { error } = await supabase.rpc("add_article_collaborator", {
    p_article_id: articleId,
    p_email: email,
  });
  if (error) throw new Error(error.message);
};

export const removeCollaborator = async (articleId: string, collaboratorId: string) => {
  const { error } = await supabase.rpc("remove_article_collaborator", {
    p_article_id: articleId,
    p_collaborator_id: collaboratorId,
  });
  if (error) throw new Error(error.message);
};

export const fetchAdminUploadLeaderboard = async (): Promise<AdminLeaderboardEntry[]> => {
  const { data, error } = await supabase.rpc("admin_upload_leaderboard");
  if (!error) {
    const normalized = (data ?? []).map((row: any) => ({
      user_id: row.user_id,
      display_name: row.display_name ?? row.email ?? row.user_id,
      registered_at: row.registered_at,
      total_articles: Number(row.total_articles ?? 0),
      published_articles: Number(row.published_articles ?? 0),
      draft_articles: Number(row.draft_articles ?? 0),
      last_upload_at: row.last_upload_at ?? null,
    }));
    return sortLeaderboardRows(normalized as AdminLeaderboardEntry[]);
  }

  const missingRpc = error.message.includes("admin_upload_leaderboard") ||
    error.message.includes("schema cache");

  if (!missingRpc) {
    throw new Error(error.message);
  }

  // Fallback for projects where DB migration is not applied yet.
  // We aggregate from visible articles so leaderboard still syncs across accounts
  // (at least for records current user is allowed to read by RLS).
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) throw new Error(userError.message);
  if (!userData.user) return [];

  const { data: articleRows, error: articleError } = await supabase
    .from("articles")
    .select("owner_id, published, created_at, author_name");

  if (articleError) throw new Error(articleError.message);

  type FallbackArticleRow = {
    owner_id: string | null;
    published: boolean;
    created_at: string;
    author_name: string | null;
  };

  const grouped = new Map<string, {
    user_id: string;
    display_name: string;
    registered_at: string;
    total_articles: number;
    published_articles: number;
    draft_articles: number;
    last_upload_at: string | null;
  }>();

  for (const row of (articleRows ?? []) as FallbackArticleRow[]) {
    if (!row.owner_id) continue;
    const existing = grouped.get(row.owner_id);
    const inferredDisplay = row.author_name?.trim() || `Editor ${row.owner_id.slice(0, 8)}`;

    if (!existing) {
      grouped.set(row.owner_id, {
        user_id: row.owner_id,
        display_name: row.owner_id === userData.user.id
          ? ((userData.user.user_metadata?.name as string) || (userData.user.email?.split("@")[0] ?? inferredDisplay))
          : inferredDisplay,
        registered_at: row.owner_id === userData.user.id ? userData.user.created_at : row.created_at,
        total_articles: 1,
        published_articles: row.published ? 1 : 0,
        draft_articles: row.published ? 0 : 1,
        last_upload_at: row.created_at,
      });
      continue;
    }

    existing.total_articles += 1;
    if (row.published) existing.published_articles += 1;
    else existing.draft_articles += 1;
    if (!existing.last_upload_at || row.created_at > existing.last_upload_at) {
      existing.last_upload_at = row.created_at;
    }
  }

  if (!grouped.has(userData.user.id)) {
    grouped.set(userData.user.id, {
      user_id: userData.user.id,
      display_name: (userData.user.user_metadata?.name as string) || (userData.user.email?.split("@")[0] ?? userData.user.id),
      registered_at: userData.user.created_at,
      total_articles: 0,
      published_articles: 0,
      draft_articles: 0,
      last_upload_at: null,
    });
  }

  return sortLeaderboardRows(Array.from(grouped.values()));
};

export const fetchAdminUploaderCategoryOverview = async (userId: string): Promise<AdminUploaderCategoryOverviewEntry[]> => {
  const { data, error } = await supabase
    .from("articles")
    .select("category, published, created_at")
    .eq("owner_id", userId);

  if (error) throw new Error(error.message);

  type Row = {
    category: string | null;
    published: boolean;
    created_at: string;
  };

  const grouped = new Map<string, AdminUploaderCategoryOverviewEntry>();

  for (const row of (data ?? []) as Row[]) {
    const category = row.category?.trim() || "Uncategorized";
    const current = grouped.get(category);
    if (!current) {
      grouped.set(category, {
        category,
        total_articles: 1,
        published_articles: row.published ? 1 : 0,
        draft_articles: row.published ? 0 : 1,
        last_upload_at: row.created_at,
      });
      continue;
    }

    current.total_articles += 1;
    if (row.published) current.published_articles += 1;
    else current.draft_articles += 1;
    if (!current.last_upload_at || row.created_at > current.last_upload_at) {
      current.last_upload_at = row.created_at;
    }
  }

  return [...grouped.values()].sort((a, b) => {
    if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
    if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
    if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
    return a.category.localeCompare(b.category);
  });
};

function sortLeaderboardRows(rows: AdminLeaderboardEntry[]): AdminLeaderboardEntry[] {
  return [...rows].sort((a, b) => {
    if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
    if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
    if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
    return (a.registered_at ?? "").localeCompare(b.registered_at ?? "");
  });
}

export const dbToArticle = (db: DbArticle): Article => ({
  id: db.slug,
  image: db.image_url || "",
  title: db.title,
  category: db.category,
  date: formatRelativeDate(db.created_at),
  isBreaking: db.is_breaking,
  author: { name: db.author_name, role: db.author_role, avatar: db.author_avatar, bio: db.author_bio },
  readTime: db.read_time,
  content: db.content,
});

function formatRelativeDate(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHrs < 1) return "Just now";
  if (diffHrs < 24) return `${diffHrs} hours ago`;
  const diffDays = Math.floor(diffHrs / 24);
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}
