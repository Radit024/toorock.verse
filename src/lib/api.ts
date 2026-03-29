import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/data/articles";

const ARTICLE_IMAGE_BUCKET = "article-images";

export interface DbArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  categories: string[];
  image_url: string | null;
  author_name: string;
  author_role: string;
  author_avatar: string;
  author_bio: string;
  read_time: string;
  is_breaking: boolean;
  owner_id: string | null;
  content?: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

const LIST_ARTICLE_COLUMNS = [
  "id",
  "slug",
  "title",
  "category",
  "categories",
  "image_url",
  "author_name",
  "author_role",
  "author_avatar",
  "author_bio",
  "read_time",
  "is_breaking",
  "owner_id",
  "published",
  "created_at",
  "updated_at",
].join(",");

const FULL_ARTICLE_COLUMNS = `${LIST_ARTICLE_COLUMNS},content`;

const isRecoverableRpcError = (message: string, fnName: string) => {
  const lower = message.toLowerCase();
  return (
    lower.includes(fnName.toLowerCase()) ||
    lower.includes("schema cache") ||
    lower.includes("structure of query does not match function result type")
  );
};

export interface ArticleCollaborator {
  collaborator_id: string;
  email: string;
  added_at: string;
}

export type CollaborationInviteStatus = "pending" | "accepted" | "rejected" | "cancelled";

export interface ArticleCollaborationInvite {
  invite_id: string;
  invitee_id: string;
  invitee_email: string;
  status: CollaborationInviteStatus;
  created_at: string;
  responded_at: string | null;
}

export interface IncomingCollaborationInvite {
  invite_id: string;
  article_id: string;
  article_slug: string;
  article_title: string;
  inviter_id: string;
  inviter_email: string;
  created_at: string;
  status: CollaborationInviteStatus;
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

export const fetchPublishedArticles = async (options?: { includeContent?: boolean }): Promise<DbArticle[]> => {
  const selectColumns = options?.includeContent ? FULL_ARTICLE_COLUMNS : LIST_ARTICLE_COLUMNS;
  const { data, error } = await supabase
    .from("articles")
    .select(selectColumns)
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data as unknown as DbArticle[]) ?? [];
};

export const fetchAllArticles = async (): Promise<DbArticle[]> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not logged in");

  const { data: collabRows, error: collabError } = await supabase
    .from("article_collaborators")
    .select("article_id")
    .eq("collaborator_id", user.id);

  if (collabError) throw new Error(collabError.message);

  const collaboratorArticleIds = Array.from(
    new Set((collabRows ?? []).map((row) => row.article_id).filter(Boolean))
  );

  const collaboratorIdClause = collaboratorArticleIds.length > 0
    ? `,id.in.(${collaboratorArticleIds.join(",")})`
    : "";

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .or(`owner_id.eq.${user.id}${collaboratorIdClause}`)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return (data as unknown as DbArticle[]) ?? [];
};

export const fetchArticleBySlug = async (slug: string): Promise<DbArticle | null> => {
  const { data, error } = await supabase
    .from("articles")
    .select(FULL_ARTICLE_COLUMNS)
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error) return null;
  return data as unknown as DbArticle;
};

export const createArticle = async (
  article: Omit<DbArticle, "id" | "created_at" | "updated_at">
): Promise<DbArticle> => {
  const { data: { user } } = await supabase.auth.getUser();
  // Never trust incoming owner_id from caller.
  const articleData: Omit<DbArticle, "id" | "created_at" | "updated_at"> = {
    ...article,
    owner_id: user?.id || null,
  };
  const { data, error } = await supabase
    .from("articles")
    .insert(articleData)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as unknown as DbArticle;
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
  return data as unknown as DbArticle;
};

export const deleteArticle = async (id: string): Promise<void> => {
  const { error } = await supabase.from("articles").delete().eq("id", id);
  if (error) throw new Error(error.message);
};

export const extractStoragePathFromUrl = (url: string, bucket = ARTICLE_IMAGE_BUCKET): string | null => {
  try {
    const parsed = new URL(url);
    const marker = `/storage/v1/object/public/${bucket}/`;
    const idx = parsed.pathname.indexOf(marker);
    if (idx === -1) return null;
    const encodedPath = parsed.pathname.slice(idx + marker.length);
    if (!encodedPath) return null;
    return decodeURIComponent(encodedPath);
  } catch {
    return null;
  }
};

export const deleteStorageFilesByUrls = async (urls: string[]): Promise<void> => {
  const uniquePaths = Array.from(
    new Set(
      urls
        .map((url) => extractStoragePathFromUrl(url))
        .filter((p): p is string => !!p)
    )
  );

  if (uniquePaths.length === 0) return;

  const { error } = await supabase.storage.from(ARTICLE_IMAGE_BUCKET).remove(uniquePaths);
  if (error) throw new Error(error.message);
};

export const fetchArticleCollaborators = async (articleId: string): Promise<ArticleCollaborator[]> => {
  const { data, error } = await supabase.rpc("list_article_collaborators", {
    p_article_id: articleId,
  });

  if (!error) {
    return (data ?? []) as unknown as ArticleCollaborator[];
  }

  const recoverableRpc = isRecoverableRpcError(error.message, "list_article_collaborators");

  if (!recoverableRpc) {
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

export const inviteCollaborator = async (articleId: string, inviteeId: string) => {
  const { error } = await supabase.rpc("invite_article_collaborator", {
    p_article_id: articleId,
    p_invitee_id: inviteeId,
  });
  if (error) throw new Error(error.message);
};

export const fetchArticleCollaborationInvites = async (articleId: string): Promise<ArticleCollaborationInvite[]> => {
  const { data, error } = await supabase.rpc("list_article_collaboration_invites", {
    p_article_id: articleId,
  });

  if (!error) {
    return (data ?? []) as unknown as ArticleCollaborationInvite[];
  }

  const recoverableRpc = isRecoverableRpcError(error.message, "list_article_collaboration_invites");
  if (!recoverableRpc) throw new Error(error.message);

  const { data: fallbackData, error: fallbackError } = await supabase
    .from("article_collaboration_invites")
    .select("id, invitee_id, status, created_at, responded_at")
    .eq("article_id", articleId)
    .order("created_at", { ascending: false });

  if (fallbackError) throw new Error(fallbackError.message);

  return (fallbackData ?? []).map((item) => ({
    invite_id: item.id,
    invitee_id: item.invitee_id,
    invitee_email: item.invitee_id,
    status: item.status as CollaborationInviteStatus,
    created_at: item.created_at,
    responded_at: item.responded_at,
  }));
};

export const fetchMyCollaborationInvites = async (): Promise<IncomingCollaborationInvite[]> => {
  const { data, error } = await supabase.rpc("list_my_collaboration_invites");

  if (!error) {
    return (data ?? []) as unknown as IncomingCollaborationInvite[];
  }

  const recoverableRpc = isRecoverableRpcError(error.message, "list_my_collaboration_invites");
  if (!recoverableRpc) throw new Error(error.message);

  const { data: fallbackData, error: fallbackError } = await supabase
    .from("article_collaboration_invites")
    .select("id, article_id, inviter_id, created_at, status, articles(id, slug, title)")
    .eq("invitee_id", (await supabase.auth.getUser()).data.user?.id ?? "")
    .eq("status", "pending")
    .order("created_at", { ascending: false });

  if (fallbackError) throw new Error(fallbackError.message);

  type InviteRow = {
    id: string;
    article_id: string;
    inviter_id: string;
    created_at: string;
    status: string;
    articles: { id: string; slug: string; title: string } | { id: string; slug: string; title: string }[] | null;
  };

  return ((fallbackData ?? []) as InviteRow[]).map((item) => {
    const article = Array.isArray(item.articles) ? item.articles[0] : item.articles;
    return {
      invite_id: item.id,
      article_id: item.article_id,
      article_slug: article?.slug ?? item.article_id,
      article_title: article?.title ?? "Untitled Article",
      inviter_id: item.inviter_id,
      inviter_email: item.inviter_id,
      created_at: item.created_at,
      status: item.status as CollaborationInviteStatus,
    };
  });
};

export const respondToCollaborationInvite = async (
  inviteId: string,
  action: "accepted" | "rejected"
) => {
  const { error } = await supabase.rpc("respond_article_collaboration_invite", {
    p_invite_id: inviteId,
    p_action: action,
  });
  if (error) throw new Error(error.message);
};

export const fetchAdminUploadLeaderboard = async (): Promise<AdminLeaderboardEntry[]> => {
  const { data, error } = await supabase.rpc("admin_upload_leaderboard");
  if (!error) {
    type LeaderboardRpcRow = {
      user_id: string;
      display_name?: string | null;
      email?: string | null;
      registered_at: string;
      total_articles?: number | string | null;
      published_articles?: number | string | null;
      draft_articles?: number | string | null;
      last_upload_at?: string | null;
    };

    const normalized = ((data ?? []) as LeaderboardRpcRow[]).map((row) => ({
      user_id: row.user_id,
      display_name: row.display_name ?? row.email ?? row.user_id,
      registered_at: row.registered_at,
      total_articles: Number(row.total_articles ?? 0),
      published_articles: Number(row.published_articles ?? 0),
      draft_articles: Number(row.draft_articles ?? 0),
      last_upload_at: row.last_upload_at ?? null,
    }));
    return sortLeaderboardRows(normalized as unknown as AdminLeaderboardEntry[]);
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
  id: db.slug || db.id,
  image: db.image_url || "",
  title: db.title,
  category: db.categories?.[0] || db.category,
  categories: db.categories?.length ? db.categories : [db.category],
  date: formatRelativeDate(db.created_at),
  isBreaking: db.is_breaking,
  author: { name: db.author_name, role: db.author_role, avatar: db.author_avatar, bio: db.author_bio },
  readTime: db.read_time,
  content: db.content ?? [],
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
