import type { NextApiRequest, NextApiResponse } from "next";
import { createSupabaseServerClient } from "@/server/supabaseServer";
import { setAdminAccessToken } from "@/server/adminSession";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { email, password } = req.body ?? {};
  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: String(email),
      password: String(password),
    });

    if (error || !data.session?.access_token) {
      res.status(401).json({ error: error?.message ?? "Invalid credentials" });
      return;
    }

    setAdminAccessToken(res, data.session.access_token);
    res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Login failed";
    res.status(500).json({ error: message });
  }
}
