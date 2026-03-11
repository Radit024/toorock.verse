import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb } from "../_db";
import { verifyToken, getTokenFromRequest } from "../_auth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Missing article id" });
  }

  const token = getTokenFromRequest(req);
  if (!token || !verifyToken(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "PUT") {
    const body = req.body as Record<string, unknown>;
    const { slug, title, category, image_url, author_name, author_role,
      author_avatar, read_time, is_breaking, content, published } = body;

    try {
      const sql = getDb();
      const rows = await sql`
        UPDATE articles SET
          slug          = ${slug as string},
          title         = ${title as string},
          category      = ${category as string},
          image_url     = ${(image_url as string) || null},
          author_name   = ${(author_name as string) || ""},
          author_role   = ${(author_role as string) || "Editor"},
          author_avatar = ${(author_avatar as string) || ""},
          read_time     = ${(read_time as string) || "3 min read"},
          is_breaking   = ${Boolean(is_breaking)},
          content       = ${JSON.stringify(content || [])},
          published     = ${Boolean(published)},
          updated_at    = NOW()
        WHERE id = ${id}
        RETURNING *
      `;
      if (rows.length === 0) return res.status(404).json({ error: "Article not found" });
      return res.status(200).json(rows[0]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("unique") || msg.includes("duplicate")) {
        return res.status(409).json({ error: "Slug already exists" });
      }
      return res.status(500).json({ error: "Failed to update article" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const sql = getDb();
      await sql`DELETE FROM articles WHERE id = ${id}`;
      return res.status(204).end();
    } catch {
      return res.status(500).json({ error: "Failed to delete article" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
