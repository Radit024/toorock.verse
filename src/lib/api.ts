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
  read_time: string;
  is_breaking: boolean;
  content: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

function getAuthHeader(): Record<string, string> {
  const token = localStorage.getItem("adminToken");
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const fetchPublishedArticles = async (): Promise<DbArticle[]> => {
  return apiRequest<DbArticle[]>("/api/articles");
};

export const fetchAllArticles = async (): Promise<DbArticle[]> => {
  return apiRequest<DbArticle[]>("/api/articles?all=1", {
    headers: getAuthHeader(),
  });
};

export const fetchArticleBySlug = async (slug: string): Promise<DbArticle | null> => {
  try {
    return await apiRequest<DbArticle>(`/api/article/${encodeURIComponent(slug)}`);
  } catch {
    return null;
  }
};

export const createArticle = async (
  article: Omit<DbArticle, "id" | "created_at" | "updated_at">
): Promise<DbArticle> => {
  return apiRequest<DbArticle>("/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
    body: JSON.stringify(article),
  });
};

export const updateArticle = async (
  id: string,
  updates: Partial<Omit<DbArticle, "id" | "created_at" | "updated_at">>
): Promise<DbArticle> => {
  return apiRequest<DbArticle>(`/api/articles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
    body: JSON.stringify(updates),
  });
};

export const deleteArticle = async (id: string): Promise<void> => {
  const token = localStorage.getItem("adminToken");
  const res = await fetch(`/api/articles/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token || ""}` },
  });
  if (!res.ok && res.status !== 204) {
    const body = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(body.error || `Delete failed: ${res.status}`);
  }
};

export const dbToArticle = (db: DbArticle): Article => ({
  id: db.slug,
  image: db.image_url || "/placeholder.svg",
  title: db.title,
  category: db.category,
  date: formatRelativeDate(db.created_at),
  isBreaking: db.is_breaking,
  author: { name: db.author_name, role: db.author_role, avatar: db.author_avatar },
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
