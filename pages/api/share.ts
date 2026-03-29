import type { NextApiRequest, NextApiResponse } from "next";

type ArticlePayload = {
  slug: string;
  title: string;
  image_url: string | null;
  category: string | null;
  content?: string[];
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
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  const endpoint = `${supabaseUrl}/rest/v1/articles?select=slug,title,image_url,category,content,published&slug=eq.${encodeURIComponent(articleId)}&published=eq.true&limit=1`;

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = typeof req.query.id === "string" ? req.query.id : "";

  const protocol = (req.headers["x-forwarded-proto"] as string) || "https";
  const host = req.headers.host || "ToRock.verse";
  const siteOrigin = `${protocol}://${host}`;

  if (!id) {
    res.redirect(302, `${siteOrigin}/`);
    return;
  }

  const articleUrl = `${siteOrigin}/article/${encodeURIComponent(id)}`;
  const article = await fetchArticle(id);

  if (!article) {
    res.redirect(302, articleUrl);
    return;
  }

  const title = escapeHtml(article.title);
  const description = escapeHtml(extractDescription(article));
  const imageUrl = normalizeImageUrl(article.image_url, siteOrigin);
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
