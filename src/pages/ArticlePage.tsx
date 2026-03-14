import { useState, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Share2, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import { fetchPublishedArticles, dbToArticle } from "@/lib/api";
import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/data/articles";

const TABLE_BLOCK_PREFIX = "::table::";
const BULLETS_BLOCK_PREFIX = "::bullets::";

function renderInlineBold(text: string) {
  const chunks = text.split(/(\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|`[^`]+`|\*[^*]+\*)/g);
  return chunks.map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**") && chunk.length > 4) {
      return <strong key={i} className="font-semibold text-foreground">{chunk.slice(2, -2)}</strong>;
    }
    if (chunk.startsWith("__") && chunk.endsWith("__") && chunk.length > 4) {
      return <span key={i} className="underline decoration-2 underline-offset-2">{chunk.slice(2, -2)}</span>;
    }
    if (chunk.startsWith("~~") && chunk.endsWith("~~") && chunk.length > 4) {
      return <span key={i} className="line-through opacity-80">{chunk.slice(2, -2)}</span>;
    }
    if (chunk.startsWith("`") && chunk.endsWith("`") && chunk.length > 2) {
      return <code key={i} className="font-mono text-[0.92em] px-1 py-0.5 bg-secondary border border-border">{chunk.slice(1, -1)}</code>;
    }
    if (chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2) {
      return <em key={i} className="italic">{chunk.slice(1, -1)}</em>;
    }
    return <span key={i}>{chunk}</span>;
  });
}

function parseTableRows(raw: string): string[][] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split("|").map((cell) => cell.trim()));
}

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const loadArticles = useCallback(async () => {
    try {
      const dbArticles = await fetchPublishedArticles();
      setAllArticles(dbArticles.map(dbToArticle));
    } catch {
      setAllArticles([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  useEffect(() => {
    const channel = supabase
      .channel("article-news-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "articles" }, () => {
        loadArticles();
      })
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadArticles]);

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = { title: article?.title ?? "ToRock Verse", url };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const article = allArticles.find((a) => a.id === id);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="container py-20 text-center">
            <p className="font-body text-sm text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!article) {
    return (
      <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h2 className="font-heading text-4xl text-foreground mb-4">ARTICLE NOT FOUND</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">The requested dispatch does not exist in the archive.</p>
          <Link to="/" className="font-meta text-xs uppercase tracking-wider text-primary hover:underline">← Return to HQ</Link>
        </div>
      </div>
      </PageTransition>
    );
  }

  const related = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);
  const otherArticles = allArticles
    .filter((a) => a.id !== article.id && a.category !== article.category)
    .slice(0, 3 - related.length);
  const relatedAll = [...related, ...otherArticles];

  const description = article.content[0]
    ? article.content[0].slice(0, 155) + (article.content[0].length > 155 ? "..." : "")
    : `${article.category} news from ToRock Verse.`;
  const canonicalUrl = `https://ToRock.verse/article/${article.id}`;

  return (
    <PageTransition>
    <Helmet>
      <title>{article.title} — ToRock Verse</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${article.category}, anime, games, esports, ToRock Verse, ${article.title}`} />
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      {article.image && <meta property="og:image" content={article.image} />}
      <meta property="article:section" content={article.category} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.title} />
      <meta name="twitter:description" content={description} />
      {article.image && <meta name="twitter:image" content={article.image} />}
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "description": description,
        "image": article.image ? [article.image] : [],
        "articleSection": article.category,
        "author": { "@type": "Person", "name": article.author.name },
        "publisher": { "@type": "Organization", "name": "ToRock Verse", "url": "https://ToRock.verse/" },
        "url": canonicalUrl,
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
      })}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-6">
        <div className="flex items-center gap-2 mb-6 font-meta text-[10px] uppercase tracking-wider">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">ToRock Verse</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">{article.category}</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Article</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <article>
            <div className="flex items-center gap-3 mb-4">
              {article.isBreaking && (
                <span className="bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest">BREAKING</span>
              )}
              <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{article.category}</span>
              <span className="font-meta text-[10px] text-muted-foreground">•</span>
              <span className="font-meta text-[10px] text-muted-foreground">{article.date}</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">{article.title}</h1>

            <div className="flex items-center justify-between border-y border-border py-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center font-heading text-sm text-primary">
                  {article.author.avatar}
                </div>
                <div>
                  <p className="font-body text-sm text-foreground">{article.author.name}</p>
                  <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">{article.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-meta text-[10px] uppercase tracking-wider">{article.readTime}</span>
                </div>
                <button
                  onClick={handleShare}
                  className={`flex items-center gap-1.5 px-3 py-2 border transition-colors font-meta text-[10px] uppercase tracking-wider ${
                    copied
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                  title="Share article"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
                  {copied ? "Copied!" : "Share"}
                </button>
              </div>
            </div>

            <div className="relative mb-8 overflow-hidden border border-border">
              <img src={article.image} alt={article.title} className="w-full h-64 md:h-96 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent h-20" />
            </div>

            <div className="space-y-5 mb-12">
              {article.content.map((item, i) => {
                const isImage = item.startsWith("http://") || item.startsWith("https://");
                const isTable = item.startsWith(TABLE_BLOCK_PREFIX);
                const isBullets = item.startsWith(BULLETS_BLOCK_PREFIX);
                if (isImage) {
                  return (
                    <figure key={i} className="my-6">
                      <img
                        src={item}
                        alt=""
                        className="w-full object-cover border border-border"
                      />
                    </figure>
                  );
                }

                if (isTable) {
                  const rows = parseTableRows(item.slice(TABLE_BLOCK_PREFIX.length));
                  if (rows.length === 0) return null;
                  const [head, ...body] = rows;
                  return (
                    <div key={i} className="overflow-x-auto border border-border">
                      <table className="w-full border-collapse">
                        <thead className="bg-secondary/40">
                          <tr>
                            {head.map((cell, ci) => (
                              <th key={ci} className="border border-border px-3 py-2 text-left font-meta text-[10px] uppercase tracking-wider text-foreground">
                                {renderInlineBold(cell)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {body.map((row, ri) => (
                            <tr key={ri} className="hover:bg-secondary/20">
                              {head.map((_, ci) => (
                                <td key={ci} className="border border-border px-3 py-2 font-body text-sm text-foreground/90">
                                  {renderInlineBold(row[ci] ?? "")}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (isBullets) {
                  const points = item
                    .slice(BULLETS_BLOCK_PREFIX.length)
                    .split("\n")
                    .map((line) => line.replace(/^\s*[-*]\s?/, "").trim())
                    .filter(Boolean);

                  if (points.length === 0) return null;

                  return (
                    <ul key={i} className="list-disc pl-6 space-y-1">
                      {points.map((point, pi) => (
                        <li key={pi} className="font-body text-base text-foreground/90 leading-relaxed">
                          {renderInlineBold(point)}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={i} className="font-body text-base text-foreground/90 leading-relaxed">
                    {i === 0 && /^[A-Za-z0-9]/.test(item.charAt(0)) && <span className="font-heading text-4xl text-primary float-left mr-2 mt-1 leading-none">{item.charAt(0)}</span>}
                    {i === 0 && /^[A-Za-z0-9]/.test(item.charAt(0)) ? renderInlineBold(item.slice(1)) : renderInlineBold(item)}
                  </p>
                );
              })}
            </div>

            <div className="border-t border-border pt-4 mb-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground mr-2">Tags:</span>
                {[article.category, "News", "2026", "Featured"].map((tag) => (
                  <span key={tag} className="font-meta text-[10px] uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/" className="inline-flex items-center gap-2 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" /> Back to dispatches
            </Link>
          </article>

          <aside className="space-y-6">
            <div className="border border-border">
              <div className="border-b border-border px-4 py-3">
                <h2 className="font-heading text-lg tracking-widest text-foreground">ABOUT THE AUTHOR</h2>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center font-heading text-lg text-primary">{article.author.avatar}</div>
                  <div>
                    <p className="font-body text-sm text-foreground">{article.author.name}</p>
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {article.author.bio || `Covering the latest in ${article.category.toLowerCase()} culture, industry news, and community developments for ToRock Verse//.`}
                </p>
              </div>
            </div>

            {relatedAll.length > 0 && (
              <div className="border border-border">
                <div className="border-b border-border px-4 py-3">
                  <h2 className="font-heading text-lg tracking-widest text-foreground">RELATED INTEL</h2>
                </div>
                <div className="divide-y divide-border">
                  {relatedAll.map((rel) => (
                    <Link key={rel.id} to={`/article/${rel.id}`} className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors group">
                      <img src={rel.image} alt={rel.title} className="w-16 h-12 object-cover border border-border shrink-0 grayscale group-hover:grayscale-0 transition-all" />
                      <div>
                        <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{rel.category}</span>
                        <p className="font-body text-xs text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5">{rel.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default ArticlePage;
