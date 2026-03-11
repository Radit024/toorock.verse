import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb } from "../_db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Missing slug" });
  }

  try {
    const sql = getDb();
    const rows = await sql`
      SELECT * FROM articles
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `;
    if (rows.length === 0) return res.status(404).json({ error: "Article not found" });
    return res.status(200).json(rows[0]);
  } catch {
    return res.status(500).json({ error: "Failed to fetch article" });
  }
}
