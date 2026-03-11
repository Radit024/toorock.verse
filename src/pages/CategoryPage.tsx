import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import { articles as fallbackArticles } from "@/data/articles";
import { fetchPublishedArticles, dbToArticle } from "@/lib/api";
import type { Article } from "@/data/articles";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = decodeURIComponent(category || "");
  const [allArticles, setAllArticles] = useState<Article[]>(fallbackArticles);

  useEffect(() => {
    const load = async () => {
      try {
        const dbArticles = await fetchPublishedArticles();
        setAllArticles(dbArticles.length > 0 ? dbArticles.map(dbToArticle) : fallbackArticles);
      } catch {}
    };
    load();
  }, []);

  const filtered = allArticles.filter(
    (a) => a.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  const categoryTitle = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);
  const canonicalUrl = `https://toorock.verse/category/${encodeURIComponent(decodedCategory)}`;

  return (
    <PageTransition>
      <Helmet>
        <title>{categoryTitle} News — TooRock Verse</title>
        <meta name="description" content={`Browse the latest ${categoryTitle} news, reviews, and articles on TooRock Verse. ${filtered.length} article${filtered.length !== 1 ? "s" : ""} available.`} />
        <meta property="og:title" content={`${categoryTitle} — TooRock Verse`} />
        <meta property="og:description" content={`Latest ${categoryTitle} news and articles on TooRock Verse.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <TickerBar />

        <main className="container py-6">
          <div className="flex items-center gap-2 mb-6 font-meta text-[10px] uppercase tracking-wider">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">TooRock Verse</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{decodedCategory}</span>
          </div>

          <div className="flex items-center gap-3 mb-6 border-b border-border pb-3">
            <h1 className="font-heading text-3xl text-foreground tracking-widest">{decodedCategory.toUpperCase()}</h1>
            <div className="flex-1 h-px bg-border" />
            <span className="font-meta text-[10px] uppercase text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "ARTICLE" : "ARTICLES"}
            </span>
          </div>

          {filtered.length === 0 ? (
            <p className="font-body text-sm text-muted-foreground py-12 text-center">No articles found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {filtered.map((article) => (
                <ArticleCard key={article.id} {...article} size="medium" />
              ))}
            </div>
          )}

          <Link to="/" className="inline-flex items-center gap-2 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mt-8">
            ← Back to dispatches
          </Link>
        </main>

        <footer className="border-t border-border mt-12">
          <div className="container py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl text-primary tracking-widest">TooRock Verse</h2>
                <p className="font-meta text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Games & Anime Intelligence Archive</p>
              </div>
              <p className="font-meta text-[10px] text-muted-foreground">© 2026 TooRock Verse. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CategoryPage;
