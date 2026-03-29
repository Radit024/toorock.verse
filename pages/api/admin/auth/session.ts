import type { NextApiRequest, NextApiResponse } from "next";
import { getAdminAccessToken } from "@/server/adminSession";
import { createSupabaseServerClient } from "@/server/supabaseServer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const accessToken = getAdminAccessToken(req);
    if (!accessToken) {
      res.status(200).json({ authenticated: false });
      return;
    }

    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.auth.getUser(accessToken);

    if (error || !data.user) {
      res.status(200).json({ authenticated: false });
      return;
    }

    res.status(200).json({
      authenticated: true,
      user: {
        id: data.user.id,
        email: data.user.email ?? "",
      },
    });
  } catch {
    res.status(200).json({ authenticated: false });
  }
}
