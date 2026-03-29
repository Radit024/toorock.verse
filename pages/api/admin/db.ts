import type { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerClient } from "@/server/supabaseServer";
import { getAdminAccessToken } from "@/server/adminSession";

const ARTICLE_IMAGE_BUCKET = "article-images";

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

function getErrorMessage(error: unknown, fallback: string): string {
  return error instanceof Error ? error.message : fallback;
}

function isRecoverableRpcError(message: string, fnName: string) {
  const lower = message.toLowerCase();
  return (
    lower.includes(fnName.toLowerCase()) ||
    lower.includes("schema cache") ||
    lower.includes("structure of query does not match function result type")
  );
}

function extractStoragePathFromUrl(url: string, bucket = ARTICLE_IMAGE_BUCKET): string | null {
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
}

async function getAuthedClient(req: NextApiRequest) {
  const token = getAdminAccessToken(req);
  if (!token) {
    return { error: "Unauthorized" as const };
  }

  const authClient = createSupabaseServerClient();
  const { data, error } = await authClient.auth.getUser(token);

  if (error || !data.user) {
    return { error: "Unauthorized" as const };
  }

  const client = createSupabaseServerClient(token);
  return {
    client,
    user: data.user,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const action = String(req.body?.action ?? "") as DbAction;
  const payload = req.body?.payload ?? {};

  if (!action) {
    res.status(400).json({ error: "Missing action" });
    return;
  }

  try {
    if (action === "fetchPublishedArticles") {
      const includeContent = Boolean(payload?.includeContent);
      const selectColumns = includeContent ? FULL_ARTICLE_COLUMNS : LIST_ARTICLE_COLUMNS;
      const client = createSupabaseServerClient();
      const { data, error } = await client
        .from("articles")
        .select(selectColumns)
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ data: data ?? [] });
      return;
    }

    if (action === "fetchArticleBySlug") {
      const slug = String(payload?.slug ?? "");
      if (!slug) {
        res.status(400).json({ error: "Missing slug" });
        return;
      }

      const client = createSupabaseServerClient();
      const { data, error } = await client
        .from("articles")
        .select(FULL_ARTICLE_COLUMNS)
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) {
        res.status(200).json({ data: null });
        return;
      }

      res.status(200).json({ data });
      return;
    }

    const authed = await getAuthedClient(req);
    if ("error" in authed) {
      res.status(401).json({ error: authed.error });
      return;
    }

    const { client, user } = authed;

    if (action === "fetchAllArticles") {
      const { data: collabRows, error: collabError } = await client
        .from("article_collaborators")
        .select("article_id")
        .eq("collaborator_id", user.id);

      if (collabError) {
        res.status(400).json({ error: collabError.message });
        return;
      }

      const collaboratorArticleIds = Array.from(
        new Set((collabRows ?? []).map((row) => row.article_id).filter(Boolean))
      );

      const collaboratorIdClause =
        collaboratorArticleIds.length > 0
          ? `,id.in.(${collaboratorArticleIds.join(",")})`
          : "";

      const { data, error } = await client
        .from("articles")
        .select("*")
        .or(`owner_id.eq.${user.id}${collaboratorIdClause}`)
        .order("created_at", { ascending: false });

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ data: data ?? [] });
      return;
    }

    if (action === "createArticle") {
      const article = payload?.article ?? {};
      const articleData = {
        ...article,
        owner_id: user.id,
      };

      const { data, error } = await client
        .from("articles")
        .insert(articleData)
        .select()
        .single();

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ data });
      return;
    }

    if (action === "updateArticle") {
      const id = String(payload?.id ?? "");
      const updates = payload?.updates ?? {};
      if (!id) {
        res.status(400).json({ error: "Missing article id" });
        return;
      }

      const safeUpdates = { ...updates } as Record<string, unknown>;
      delete safeUpdates.owner_id;

      const { data, error } = await client
        .from("articles")
        .update(safeUpdates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ data });
      return;
    }

    if (action === "deleteArticle") {
      const id = String(payload?.id ?? "");
      if (!id) {
        res.status(400).json({ error: "Missing article id" });
        return;
      }

      const { error } = await client.from("articles").delete().eq("id", id);
      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ ok: true });
      return;
    }

    if (action === "deleteStorageFilesByUrls") {
      const urls: string[] = Array.isArray(payload?.urls)
        ? payload.urls.filter((url): url is string => typeof url === "string")
        : [];
      const extractedPaths: string[] = [];
      for (const url of urls) {
        const path = extractStoragePathFromUrl(url);
        if (path) extractedPaths.push(path);
      }

      const uniquePaths: string[] = Array.from(new Set(extractedPaths));

      if (uniquePaths.length === 0) {
        res.status(200).json({ ok: true });
        return;
      }

      const { error } = await client.storage.from(ARTICLE_IMAGE_BUCKET).remove(uniquePaths);
      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ ok: true });
      return;
    }

    if (action === "uploadImage") {
      const dataUrl = String(payload?.dataUrl ?? "");
      const extension = String(payload?.extension ?? "jpg").replace(/[^a-z0-9]/gi, "").toLowerCase() || "jpg";

      const match = dataUrl.match(/^data:(.+);base64,(.+)$/);
      if (!match) {
        res.status(400).json({ error: "Invalid image payload" });
        return;
      }

      const contentType = match[1] || "image/jpeg";
      const base64Data = match[2];
      const buffer = Buffer.from(base64Data, "base64");
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;

      const { error } = await client.storage
        .from(ARTICLE_IMAGE_BUCKET)
        .upload(path, buffer, { contentType });

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      const { data } = client.storage.from(ARTICLE_IMAGE_BUCKET).getPublicUrl(path);
      res.status(200).json({ data: { publicUrl: data.publicUrl } });
      return;
    }

    if (action === "fetchArticleCollaborators") {
      const articleId = String(payload?.articleId ?? "");
      const { data, error } = await client.rpc("list_article_collaborators", {
        p_article_id: articleId,
      });

      if (!error) {
        res.status(200).json({ data: data ?? [] });
        return;
      }

      const recoverableRpc = isRecoverableRpcError(error.message, "list_article_collaborators");
      if (!recoverableRpc) {
        res.status(400).json({ error: error.message });
        return;
      }

      const { data: fallbackData, error: fallbackError } = await client
        .from("article_collaborators")
        .select("collaborator_id, created_at")
        .eq("article_id", articleId)
        .order("created_at", { ascending: false });

      if (fallbackError) {
        res.status(400).json({ error: fallbackError.message });
        return;
      }

      const normalized = (fallbackData ?? []).map((item) => ({
        collaborator_id: item.collaborator_id,
        email: item.collaborator_id,
        added_at: item.created_at,
      }));

      res.status(200).json({ data: normalized });
      return;
    }

    if (action === "addCollaborator") {
      const articleId = String(payload?.articleId ?? "");
      const email = String(payload?.email ?? "");
      const { error } = await client.rpc("add_article_collaborator", {
        p_article_id: articleId,
        p_email: email,
      });
      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }
      res.status(200).json({ ok: true });
      return;
    }

    if (action === "removeCollaborator") {
      const articleId = String(payload?.articleId ?? "");
      const collaboratorId = String(payload?.collaboratorId ?? "");
      const { error } = await client.rpc("remove_article_collaborator", {
        p_article_id: articleId,
        p_collaborator_id: collaboratorId,
      });
      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }
      res.status(200).json({ ok: true });
      return;
    }

    if (action === "inviteCollaborator") {
      const articleId = String(payload?.articleId ?? "");
      const inviteeId = String(payload?.inviteeId ?? "");
      const { error } = await client.rpc("invite_article_collaborator", {
        p_article_id: articleId,
        p_invitee_id: inviteeId,
      });
      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }
      res.status(200).json({ ok: true });
      return;
    }

    if (action === "fetchArticleCollaborationInvites") {
      const articleId = String(payload?.articleId ?? "");
      const { data, error } = await client.rpc("list_article_collaboration_invites", {
        p_article_id: articleId,
      });

      if (!error) {
        res.status(200).json({ data: data ?? [] });
        return;
      }

      const recoverableRpc = isRecoverableRpcError(error.message, "list_article_collaboration_invites");
      if (!recoverableRpc) {
        res.status(400).json({ error: error.message });
        return;
      }

      const { data: fallbackData, error: fallbackError } = await client
        .from("article_collaboration_invites")
        .select("id, invitee_id, status, created_at, responded_at")
        .eq("article_id", articleId)
        .order("created_at", { ascending: false });

      if (fallbackError) {
        res.status(400).json({ error: fallbackError.message });
        return;
      }

      const normalized = (fallbackData ?? []).map((item) => ({
        invite_id: item.id,
        invitee_id: item.invitee_id,
        invitee_email: item.invitee_id,
        status: item.status,
        created_at: item.created_at,
        responded_at: item.responded_at,
      }));

      res.status(200).json({ data: normalized });
      return;
    }

    if (action === "fetchMyCollaborationInvites") {
      const { data, error } = await client.rpc("list_my_collaboration_invites");
      if (!error) {
        res.status(200).json({ data: data ?? [] });
        return;
      }

      const recoverableRpc = isRecoverableRpcError(error.message, "list_my_collaboration_invites");
      if (!recoverableRpc) {
        res.status(400).json({ error: error.message });
        return;
      }

      const { data: fallbackData, error: fallbackError } = await client
        .from("article_collaboration_invites")
        .select("id, article_id, inviter_id, created_at, status, articles(id, slug, title)")
        .eq("invitee_id", user.id)
        .eq("status", "pending")
        .order("created_at", { ascending: false });

      if (fallbackError) {
        res.status(400).json({ error: fallbackError.message });
        return;
      }

      type InviteRow = {
        id: string;
        article_id: string;
        inviter_id: string;
        created_at: string;
        status: string;
        articles: { id: string; slug: string; title: string } | { id: string; slug: string; title: string }[] | null;
      };

      const normalized = ((fallbackData ?? []) as InviteRow[]).map((item) => {
        const article = Array.isArray(item.articles) ? item.articles[0] : item.articles;
        return {
          invite_id: item.id,
          article_id: item.article_id,
          article_slug: article?.slug ?? item.article_id,
          article_title: article?.title ?? "Untitled Article",
          inviter_id: item.inviter_id,
          inviter_email: item.inviter_id,
          created_at: item.created_at,
          status: item.status,
        };
      });

      res.status(200).json({ data: normalized });
      return;
    }

    if (action === "respondToCollaborationInvite") {
      const inviteId = String(payload?.inviteId ?? "");
      const nextAction = String(payload?.action ?? "");
      const { error } = await client.rpc("respond_article_collaboration_invite", {
        p_invite_id: inviteId,
        p_action: nextAction,
      });
      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }
      res.status(200).json({ ok: true });
      return;
    }

    if (action === "fetchAdminUploadLeaderboard") {
      const { data, error } = await client.rpc("admin_upload_leaderboard");

      if (!error) {
        const normalized = ((data ?? []) as Array<{
          user_id: string;
          display_name?: string | null;
          email?: string | null;
          registered_at: string;
          total_articles?: number | string | null;
          published_articles?: number | string | null;
          draft_articles?: number | string | null;
          last_upload_at?: string | null;
        }>).map((row) => ({
          user_id: row.user_id,
          display_name: row.display_name ?? row.email ?? row.user_id,
          registered_at: row.registered_at,
          total_articles: Number(row.total_articles ?? 0),
          published_articles: Number(row.published_articles ?? 0),
          draft_articles: Number(row.draft_articles ?? 0),
          last_upload_at: row.last_upload_at ?? null,
        }));

        const sorted = [...normalized].sort((a, b) => {
          if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
          if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
          if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
          return (a.registered_at ?? "").localeCompare(b.registered_at ?? "");
        });

        res.status(200).json({ data: sorted });
        return;
      }

      const missingRpc =
        error.message.includes("admin_upload_leaderboard") ||
        error.message.includes("schema cache");

      if (!missingRpc) {
        res.status(400).json({ error: error.message });
        return;
      }

      const { data: articleRows, error: articleError } = await client
        .from("articles")
        .select("owner_id, published, created_at, author_name");

      if (articleError) {
        res.status(400).json({ error: articleError.message });
        return;
      }

      const grouped = new Map<string, {
        user_id: string;
        display_name: string;
        registered_at: string;
        total_articles: number;
        published_articles: number;
        draft_articles: number;
        last_upload_at: string | null;
      }>();

      for (const row of (articleRows ?? []) as Array<{
        owner_id: string | null;
        published: boolean;
        created_at: string;
        author_name: string | null;
      }>) {
        if (!row.owner_id) continue;
        const existing = grouped.get(row.owner_id);
        const inferredDisplay = row.author_name?.trim() || `Editor ${row.owner_id.slice(0, 8)}`;

        if (!existing) {
          grouped.set(row.owner_id, {
            user_id: row.owner_id,
            display_name:
              row.owner_id === user.id
                ? ((user.user_metadata?.name as string) || (user.email?.split("@")[0] ?? inferredDisplay))
                : inferredDisplay,
            registered_at: row.owner_id === user.id ? user.created_at : row.created_at,
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

      if (!grouped.has(user.id)) {
        grouped.set(user.id, {
          user_id: user.id,
          display_name: (user.user_metadata?.name as string) || (user.email?.split("@")[0] ?? user.id),
          registered_at: user.created_at,
          total_articles: 0,
          published_articles: 0,
          draft_articles: 0,
          last_upload_at: null,
        });
      }

      const fallback = [...grouped.values()].sort((a, b) => {
        if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
        if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
        if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
        return (a.registered_at ?? "").localeCompare(b.registered_at ?? "");
      });

      res.status(200).json({ data: fallback });
      return;
    }

    if (action === "fetchAdminUploaderCategoryOverview") {
      const userId = String(payload?.userId ?? "");

      const { data, error } = await client
        .from("articles")
        .select("category, published, created_at")
        .eq("owner_id", userId);

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      const grouped = new Map<string, {
        category: string;
        total_articles: number;
        published_articles: number;
        draft_articles: number;
        last_upload_at: string | null;
      }>();

      for (const row of (data ?? []) as Array<{ category: string | null; published: boolean; created_at: string }>) {
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

      const sorted = [...grouped.values()].sort((a, b) => {
        if (b.total_articles !== a.total_articles) return b.total_articles - a.total_articles;
        if (b.published_articles !== a.published_articles) return b.published_articles - a.published_articles;
        if ((b.last_upload_at ?? "") !== (a.last_upload_at ?? "")) return (b.last_upload_at ?? "").localeCompare(a.last_upload_at ?? "");
        return a.category.localeCompare(b.category);
      });

      res.status(200).json({ data: sorted });
      return;
    }

    if (action === "fetchMyProfile") {
      res.status(200).json({
        data: {
          id: user.id,
          email: user.email ?? "",
          name: (user.user_metadata?.name as string) ?? "",
          role: (user.user_metadata?.role as string) ?? "Editor",
          avatar: (user.user_metadata?.avatar as string) ?? "",
          bio: (user.user_metadata?.bio as string) ?? "",
        },
      });
      return;
    }

    if (action === "updateMyProfile") {
      const profile = payload?.profile ?? {};
      const { error } = await client.auth.updateUser({
        data: {
          name: profile?.name ?? "",
          role: profile?.role ?? "Editor",
          avatar: profile?.avatar ?? "",
          bio: profile?.bio ?? "",
        },
      });

      if (error) {
        res.status(400).json({ error: error.message });
        return;
      }

      res.status(200).json({ ok: true });
      return;
    }

    res.status(400).json({ error: `Unknown action: ${action}` });
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error, "Unexpected server error") });
  }
}
