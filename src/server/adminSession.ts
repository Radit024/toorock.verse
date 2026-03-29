import type { NextApiRequest, NextApiResponse } from "next";

const ADMIN_SESSION_COOKIE = "toorock_admin_at";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function parseCookies(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) return {};

  return cookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((acc, item) => {
      const index = item.indexOf("=");
      if (index <= 0) return acc;
      const key = item.slice(0, index).trim();
      const value = item.slice(index + 1).trim();
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
}

function cookieBaseAttributes(maxAge: number): string {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

export function getAdminAccessToken(req: NextApiRequest): string | null {
  const cookies = parseCookies(req.headers.cookie);
  return cookies[ADMIN_SESSION_COOKIE] ?? null;
}

export function setAdminAccessToken(res: NextApiResponse, accessToken: string) {
  const value = encodeURIComponent(accessToken);
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_SESSION_COOKIE}=${value}; ${cookieBaseAttributes(COOKIE_MAX_AGE_SECONDS)}`
  );
}

export function clearAdminAccessToken(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_SESSION_COOKIE}=; ${cookieBaseAttributes(0)}`
  );
}
