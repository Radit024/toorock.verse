import { useState, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import { fetchPublishedArticles, dbToArticle } from "@/lib/api";
import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/data/articles";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = decodeURIComponent(category || "");
  const [allArticles, setAllArticles] = useState<Article[]>([]);

  const loadArticles = useCallback(async () => {
    try {
      const dbArticles = await fetchPublishedArticles();
      setAllArticles(dbArticles.map(dbToArticle));
    } catch {}
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  useEffect(() => {
    const channel = supabase
      .channel("category-news-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "articles" }, () => {
        loadArticles();
      })
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadArticles]);

  const filtered = allArticles.filter(
    (a) => {
      const categories = a.categories?.length ? a.categories : [a.category];
      return categories.some((c) => c.toLowerCase() === decodedCategory.toLowerCase());
    }
  );

  const categoryTitle = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);
  const canonicalUrl = `https://ToRock.verse/category/${encodeURIComponent(decodedCategory)}`;

  return (
    <PageTransition>
      <Helmet>
        <title>{categoryTitle} News — ToRock Verse</title>
        <meta name="description" content={`Browse the latest ${categoryTitle} news, reviews, and articles on ToRock Verse. ${filtered.length} article${filtered.length !== 1 ? "s" : ""} available.`} />
        <meta property="og:title" content={`${categoryTitle} — ToRock Verse`} />
        <meta property="og:description" content={`Latest ${categoryTitle} news and articles on ToRock Verse.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container py-6">
          <div className="flex items-center gap-2 mb-6 font-meta text-[10px] uppercase tracking-wider">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">ToRock Verse</Link>
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

        <Footer />
      </div>
    </PageTransition>
  );
};

export default CategoryPage;
