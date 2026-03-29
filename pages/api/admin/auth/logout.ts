import type { NextApiRequest, NextApiResponse } from "next";
import { clearAdminAccessToken } from "@/server/adminSession";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  clearAdminAccessToken(res);
  res.status(200).json({ ok: true });
}
