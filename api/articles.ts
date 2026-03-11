import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb } from "./_db";
import { verifyToken, getTokenFromRequest } from "./_auth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    // ?all=1 — admin only: returns all including unpublished
    if (req.query.all) {
      const token = getTokenFromRequest(req);
      if (!token || !verifyToken(token)) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      try {
        const sql = getDb();
        const rows = await sql`SELECT * FROM articles ORDER BY created_at DESC`;
        return res.status(200).json(rows);
      } catch {
        return res.status(500).json({ error: "Failed to fetch articles" });
      }
    }

    // Public: published only
    try {
      const sql = getDb();
      const rows = await sql`
        SELECT * FROM articles
        WHERE published = true
        ORDER BY created_at DESC
      `;
      return res.status(200).json(rows);
    } catch {
      return res.status(500).json({ error: "Failed to fetch articles" });
    }
  }

  if (req.method === "POST") {
    const token = getTokenFromRequest(req);
    if (!token || !verifyToken(token)) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const body = req.body as Record<string, unknown>;
    const { slug, title, category, image_url, author_name, author_role,
      author_avatar, read_time, is_breaking, content, published } = body;

    if (!slug || !title || !category) {
      return res.status(400).json({ error: "Missing required fields: slug, title, category" });
    }

    try {
      const sql = getDb();
      const rows = await sql`
        INSERT INTO articles
          (slug, title, category, image_url, author_name, author_role, author_avatar,
           read_time, is_breaking, content, published)
        VALUES
          (${slug as string}, ${title as string}, ${category as string},
           ${(image_url as string) || null}, ${(author_name as string) || ""},
           ${(author_role as string) || "Editor"}, ${(author_avatar as string) || ""},
           ${(read_time as string) || "3 min read"}, ${Boolean(is_breaking)},
           ${JSON.stringify(content || [])}, ${Boolean(published)})
        RETURNING *
      `;
      return res.status(201).json(rows[0]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("unique") || msg.includes("duplicate")) {
        return res.status(409).json({ error: "Slug already exists" });
      }
      return res.status(500).json({ error: "Failed to create article" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
