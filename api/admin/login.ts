import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createToken, verifyPassword } from "../_auth";

async function validateTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password, turnstileToken } = req.body as {
    password?: string;
    turnstileToken?: string;
  };

  if (!password || !turnstileToken) {
    return res.status(400).json({ error: "Missing password or turnstile token" });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || "unknown";

  const turnstileValid = await validateTurnstile(turnstileToken, ip);
  if (!turnstileValid) {
    return res.status(401).json({ error: "Turnstile verification failed" });
  }

  if (!verifyPassword(password)) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = createToken();
  return res.status(200).json({ token });
}
