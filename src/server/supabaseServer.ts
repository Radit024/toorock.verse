import { createClient } from "@supabase/supabase-js";

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function createSupabaseServerClient(accessToken?: string) {
  const url = getRequiredEnv("SUPABASE_URL");
  const publishableKey = getRequiredEnv("SUPABASE_PUBLISHABLE_KEY");

  return createClient(url, publishableKey, {
    global: accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : undefined,
  });
}
