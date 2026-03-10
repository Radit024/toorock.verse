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
  read_time: string;
  is_breaking: boolean;
  content: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

export const fetchPublishedArticles = async (): Promise<DbArticle[]> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data || []) as DbArticle[];
};

export const fetchAllArticles = async (): Promise<DbArticle[]> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data || []) as DbArticle[];
};

export const fetchArticleBySlug = async (slug: string): Promise<DbArticle | null> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) throw error;
  return data as DbArticle | null;
};

export const createArticle = async (article: Omit<DbArticle, "id" | "created_at" | "updated_at">) => {
  const { data, error } = await supabase
    .from("articles")
    .insert(article)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateArticle = async (id: string, updates: Partial<Omit<DbArticle, "id" | "created_at" | "updated_at">>) => {
  const { data, error } = await supabase
    .from("articles")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteArticle = async (id: string) => {
  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id);

  if (error) throw error;
};

// Convert DbArticle to the frontend Article format
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
