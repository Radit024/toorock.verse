import { useState, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import { fetchPublishedArticles, dbToArticle } from "@/lib/api";
import type { Article } from "@/data/articles";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
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
    const interval = window.setInterval(() => {
      loadArticles();
    }, 30000);

    return () => {
      window.clearInterval(interval);
    };
  }, [loadArticles]);

  const filtered = query.trim()
    ? allArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <PageTransition>
      <Helmet>
        <title>{query ? `"${query}" — Search — ToRock Verse` : "Search — ToRock Verse"}</title>
        <meta name="description" content={query ? `Search results for "${query}" on ToRock Verse — ${filtered.length} article${filtered.length !== 1 ? "s" : ""} found.` : "Search for anime, games, esports, and culture articles on ToRock Verse."} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container py-6">
          <div className="flex items-center gap-2 mb-6 font-meta text-[10px] uppercase tracking-wider">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">ToRock Verse</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Search</span>
          </div>

          <div className="flex items-center gap-3 mb-6 border-b border-border pb-3">
            <h1 className="font-heading text-3xl text-foreground tracking-widest">
              SEARCH RESULTS
            </h1>
            <div className="flex-1 h-px bg-border" />
            {query && (
              <span className="font-meta text-[10px] uppercase text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "RESULT" : "RESULTS"} FOR &quot;{query}&quot;
              </span>
            )}
          </div>

          {!query.trim() ? (
            <p className="font-body text-sm text-muted-foreground py-12 text-center">
              Enter a search term to find articles.
            </p>
          ) : filtered.length === 0 ? (
            <p className="font-body text-sm text-muted-foreground py-12 text-center">
              No articles found for &quot;{query}&quot;.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {filtered.map((article) => (
                <ArticleCard key={article.id} {...article} size="medium" />
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default SearchPage;
