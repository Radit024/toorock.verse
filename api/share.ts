import type { VercelRequest, VercelResponse } from "@vercel/node";

type ArticlePayload = {
  id: string;
  title: string;
  image: string | null;
  excerpt: string | null;
  category: string | null;
  content: string[] | null;
};

const SITE_NAME = "ToRock Verse";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeImageUrl(image: string | null, siteOrigin: string) {
  if (!image) return "";
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  if (image.startsWith("/")) return `${siteOrigin}${image}`;
  return `${siteOrigin}/${image}`;
}

function extractDescription(article: ArticlePayload) {
  if (article.excerpt?.trim()) return article.excerpt.trim();
  const firstParagraph = article.content?.find((segment) => segment && segment.trim());
  if (firstParagraph) {
    const plainText = firstParagraph
      .replace(/^#+\s+/g, "")
      .replace(/^>\s+/g, "")
      .replace(/\*\*|__|~~|`/g, "")
      .trim();
    if (plainText) return plainText.slice(0, 180);
  }
  return `${article.category ?? "News"} from ${SITE_NAME}.`;
}

async function fetchArticle(articleId: string): Promise<ArticlePayload | null> {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const endpoint = `${supabaseUrl}/rest/v1/articles?select=id,title,image,excerpt,category,content,published&id=eq.${encodeURIComponent(articleId)}&published=eq.true&limit=1`;

  const response = await fetch(endpoint, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  const items = (await response.json()) as ArticlePayload[];
  return items[0] ?? null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const id = typeof req.query.id === "string" ? req.query.id : "";

  const protocol = (req.headers["x-forwarded-proto"] as string) || "https";
  const host = req.headers.host || "ToRock.verse";
  const siteOrigin = `${protocol}://${host}`;

  if (!id) {
    res.status(302).setHeader("Location", `${siteOrigin}/`);
    res.end();
    return;
  }

  const articleUrl = `${siteOrigin}/article/${encodeURIComponent(id)}`;
  const article = await fetchArticle(id);

  if (!article) {
    res.status(302).setHeader("Location", articleUrl);
    res.end();
    return;
  }

  const title = escapeHtml(article.title);
  const description = escapeHtml(extractDescription(article));
  const imageUrl = normalizeImageUrl(article.image, siteOrigin);
  const escapedImageUrl = escapeHtml(imageUrl);

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} - ${SITE_NAME}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${articleUrl}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${articleUrl}" />
    ${imageUrl ? `<meta property="og:image" content="${escapedImageUrl}" />` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    ${imageUrl ? `<meta name="twitter:image" content="${escapedImageUrl}" />` : ""}
    <meta http-equiv="refresh" content="0;url=${articleUrl}" />
    <script>window.location.replace(${JSON.stringify(articleUrl)});</script>
  </head>
  <body>
    <p>Redirecting to article...</p>
  </body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}
