import { createHmac, createHash, timingSafeEqual } from "crypto";

const getSecret = () => {
  if (!process.env.ADMIN_SECRET) throw new Error("ADMIN_SECRET is not set");
  return process.env.ADMIN_SECRET;
};

export function createToken(): string {
  const exp = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  const payload = Buffer.from(JSON.stringify({ exp })).toString("base64url");
  const sig = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyToken(token: string): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;

  const expected = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  const expectedBuf = Buffer.from(expected);
  const sigBuf = Buffer.from(sig);
  if (expectedBuf.length !== sigBuf.length) return false;
  if (!timingSafeEqual(expectedBuf, sigBuf)) return false;

  try {
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    return Date.now() < exp;
  } catch {
    return false;
  }
}

export function getTokenFromRequest(req: { headers: { authorization?: string } }): string | null {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) return null;
  return auth.slice(7);
}

export function verifyPassword(input: string): boolean {
  const hashInput = createHash("sha256").update(input).digest("hex");
  const expected = process.env.ADMIN_PASSWORD_HASH;
  if (!expected) return false;
  const a = Buffer.from(hashInput);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
