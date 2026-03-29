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

type DbAction =
  | "fetchPublishedArticles"
  | "fetchArticleBySlug"
  | "fetchAllArticles"
  | "createArticle"
  | "updateArticle"
  | "deleteArticle"
  | "deleteStorageFilesByUrls"
  | "fetchArticleCollaborators"
  | "addCollaborator"
  | "removeCollaborator"
  | "inviteCollaborator"
  | "fetchArticleCollaborationInvites"
  | "fetchMyCollaborationInvites"
  | "respondToCollaborationInvite"
  | "fetchAdminUploadLeaderboard"
  | "fetchAdminUploaderCategoryOverview"
  | "fetchMyProfile"
  | "updateMyProfile"
  | "uploadImage";

export interface AdminProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

async function postAdminAction<T>(action: DbAction, payload: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch("/api/admin/db", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ action, payload }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = typeof result?.error === "string" ? result.error : `Request failed (${response.status})`;
    throw new Error(message);
  }

  if ("data" in result) {
    return result.data as T;
  }

  return result as T;
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.readAsDataURL(file);
  });
}

export const fetchPublishedArticles = async (options?: { includeContent?: boolean }): Promise<DbArticle[]> => {
  return postAdminAction<DbArticle[]>("fetchPublishedArticles", {
    includeContent: Boolean(options?.includeContent),
  });
};

export const fetchAllArticles = async (): Promise<DbArticle[]> => {
  return postAdminAction<DbArticle[]>("fetchAllArticles");
};

export const fetchArticleBySlug = async (slug: string): Promise<DbArticle | null> => {
  return postAdminAction<DbArticle | null>("fetchArticleBySlug", { slug });
};

export const createArticle = async (
  article: Omit<DbArticle, "id" | "created_at" | "updated_at">
): Promise<DbArticle> => {
  return postAdminAction<DbArticle>("createArticle", { article });
};

export const updateArticle = async (
  id: string,
  updates: Partial<Omit<DbArticle, "id" | "created_at" | "updated_at">>
): Promise<DbArticle> => {
  return postAdminAction<DbArticle>("updateArticle", { id, updates });
};

export const deleteArticle = async (id: string): Promise<void> => {
  await postAdminAction<{ ok: true }>("deleteArticle", { id });
};

export const uploadArticleImage = async (file: File): Promise<string> => {
  const extension = (file.name.split(".").pop() ?? "jpg").toLowerCase();
  const dataUrl = await fileToDataUrl(file);
  const result = await postAdminAction<{ publicUrl: string }>("uploadImage", {
    dataUrl,
    extension,
  });
  return result.publicUrl;
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
  await postAdminAction<{ ok: true }>("deleteStorageFilesByUrls", { urls });
};

export const fetchArticleCollaborators = async (articleId: string): Promise<ArticleCollaborator[]> => {
  return postAdminAction<ArticleCollaborator[]>("fetchArticleCollaborators", { articleId });
};

export const addCollaborator = async (articleId: string, email: string) => {
  await postAdminAction<{ ok: true }>("addCollaborator", { articleId, email });
};

export const removeCollaborator = async (articleId: string, collaboratorId: string) => {
  await postAdminAction<{ ok: true }>("removeCollaborator", { articleId, collaboratorId });
};

export const inviteCollaborator = async (articleId: string, inviteeId: string) => {
  await postAdminAction<{ ok: true }>("inviteCollaborator", { articleId, inviteeId });
};

export const fetchArticleCollaborationInvites = async (articleId: string): Promise<ArticleCollaborationInvite[]> => {
  return postAdminAction<ArticleCollaborationInvite[]>("fetchArticleCollaborationInvites", { articleId });
};

export const fetchMyCollaborationInvites = async (): Promise<IncomingCollaborationInvite[]> => {
  return postAdminAction<IncomingCollaborationInvite[]>("fetchMyCollaborationInvites");
};

export const respondToCollaborationInvite = async (
  inviteId: string,
  action: "accepted" | "rejected"
) => {
  await postAdminAction<{ ok: true }>("respondToCollaborationInvite", {
    inviteId,
    action,
  });
};

export const fetchAdminUploadLeaderboard = async (): Promise<AdminLeaderboardEntry[]> => {
  return postAdminAction<AdminLeaderboardEntry[]>("fetchAdminUploadLeaderboard");
};

export const fetchAdminUploaderCategoryOverview = async (userId: string): Promise<AdminUploaderCategoryOverviewEntry[]> => {
  return postAdminAction<AdminUploaderCategoryOverviewEntry[]>("fetchAdminUploaderCategoryOverview", { userId });
};

export const fetchMyProfile = async (): Promise<AdminProfile> => {
  return postAdminAction<AdminProfile>("fetchMyProfile");
};

export const updateMyProfile = async (profile: Omit<AdminProfile, "id" | "email">): Promise<void> => {
  await postAdminAction<{ ok: true }>("updateMyProfile", { profile });
};

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
