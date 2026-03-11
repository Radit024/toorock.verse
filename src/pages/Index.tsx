import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import CategoryBar from "@/components/CategoryBar";
import LiveScorePanel from "@/components/LiveScorePanel";
import SectionBlock from "@/components/SectionBlock";
import Pagination from "@/components/Pagination";
import BottomNav from "@/components/BottomNav";
import PullToRefresh from "@/components/PullToRefresh";
import { articles as fallbackArticles } from "@/data/articles";
import { fetchPublishedArticles, dbToArticle } from "@/lib/api";
import type { Article } from "@/data/articles";

const Index = () => {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles);

  const loadArticles = useCallback(async () => {
    try {
      const dbArticles = await fetchPublishedArticles();
      if (dbArticles.length > 0) {
        const converted = dbArticles.map(dbToArticle);
        setArticles([...converted, ...fallbackArticles]);
      }
    } catch {
      // Keep fallback data
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const latestArticles = articles.slice(0, 6);
  const trendingArticles = articles.slice(0, 5);
  const gamesArticles = articles.filter((a) => a.category === "Games");
  const animeArticles = articles.filter((a) => a.category === "Anime");
  const esportsArticles = articles.filter((a) => a.category === "Esports");
  const cultureArticles = articles.filter((a) => a.category === "Culture" || a.category === "Film");

  return (
    <PageTransition>
    <Helmet>
      <title>TooRock Verse — Anime, Games, Esports &amp; Culture News</title>
      <meta name="description" content="TooRock Verse is your ultimate source for the latest anime, games, esports, films, and pop-culture news. Breaking coverage, reviews, and live scores." />
      <meta property="og:title" content="TooRock Verse — Anime, Games, Esports & Culture News" />
      <meta property="og:description" content="Your ultimate source for anime, games, esports, films, and pop-culture news." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://toorock.verse/" />
      <link rel="canonical" href="https://toorock.verse/" />
    </Helmet>
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <TickerBar />

      <PullToRefresh onRefresh={loadArticles}>
        <main className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
            {/* Main article grid */}
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                <h2 className="font-heading text-2xl text-foreground tracking-widest">LATEST DISPATCHES</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="font-meta text-[10px] uppercase text-muted-foreground">PAGE 01</span>
              </div>

              {/* Hero feature — full-width cinematic card */}
              {latestArticles[0] && (
                <Link to={`/article/${latestArticles[0].id}`} className="block relative overflow-hidden mb-4 border border-border group article-card">
                  <img
                    src={latestArticles[0].image}
                    alt={latestArticles[0].title}
                    className="article-card-image w-full h-64 md:h-[420px] object-cover"
                  />
                  <div className="scanline-overlay absolute inset-0" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  {/* Breaking badge */}
                  {latestArticles[0].isBreaking && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest z-10">
                      BREAKING
                    </span>
                  )}
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{latestArticles[0].category}</span>
                      <span className="font-meta text-[9px] text-muted-foreground/70">•</span>
                      <span className="font-meta text-[9px] text-muted-foreground/70">{latestArticles[0].date}</span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-4xl leading-tight text-foreground group-hover:text-primary transition-colors">
                      {latestArticles[0].title}
                    </h3>
                  </div>
                </Link>
              )}

              {/* Numbered horizontal strip — articles 2–6 */}
              <div className="border border-border divide-y divide-border">
                {latestArticles.slice(1).map((article, i) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="flex items-center gap-4 px-3 py-3 hover:bg-secondary/40 transition-colors group article-card"
                  >
                    <span className="font-heading text-2xl text-muted-foreground group-hover:text-primary transition-colors shrink-0 w-8 text-center leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="article-card-image w-20 h-14 object-cover shrink-0 border border-border"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{article.category}</span>
                        <span className="font-meta text-[9px] text-muted-foreground">{article.date}</span>
                        {article.isBreaking && (
                          <span className="font-meta text-[9px] uppercase tracking-wider text-primary border border-primary px-1">Breaking</span>
                        )}
                      </div>
                      <h3 className="font-heading text-base md:text-lg leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <LiveScorePanel />

              <div className="border border-border">
                <div className="border-b border-border px-4 py-3">
                  <h2 className="font-heading text-lg tracking-widest text-foreground">TRENDING</h2>
                </div>
                <div className="divide-y divide-border">
                  {trendingArticles.map((article, i) => (
                    <Link key={article.id} to={`/article/${article.id}`} className="px-4 py-3 flex items-start gap-3 hover:bg-secondary transition-colors cursor-pointer group">
                      <span className="font-heading text-2xl text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-xs text-foreground group-hover:text-primary transition-colors leading-snug pt-1">
                        {article.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Browse by Category */}
          <CategoryBar />

          {/* Category Sections */}
          <SectionBlock title="GAMES" category="Games" articles={gamesArticles} />
          <SectionBlock title="ANIME" category="Anime" articles={animeArticles} />
          <SectionBlock title="ESPORTS" category="Esports" articles={esportsArticles} />
          <SectionBlock title="CULTURE & FILM" category="Culture" articles={cultureArticles} />

          <Pagination />
        </main>
      </PullToRefresh>

      <BottomNav />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl text-primary tracking-widest">TooRock Verse</h2>
              <p className="font-meta text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                Games & Anime Intelligence Archive
              </p>
            </div>
            <p className="font-meta text-[10px] text-muted-foreground">
              © 2026 TooRock Verse. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default Index;
