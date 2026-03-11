import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import LiveScorePanel from "@/components/LiveScorePanel";
import SectionBlock from "@/components/SectionBlock";
import BottomNav from "@/components/BottomNav";
import PullToRefresh from "@/components/PullToRefresh";
import { articles as fallbackArticles } from "@/data/articles";
import { fetchPublishedArticles, dbToArticle } from "@/lib/api";
import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/data/articles";

const Index = () => {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles);

  const loadArticles = useCallback(async () => {
    try {
      const dbArticles = await fetchPublishedArticles();
      setArticles(dbArticles.length > 0 ? dbArticles.map(dbToArticle) : fallbackArticles);
    } catch {
      setArticles(fallbackArticles);
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  useEffect(() => {
    const channel = supabase
      .channel("articles-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "articles" }, () => {
        loadArticles();
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
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

              {/* Row 1: Hero left + 2 medium cards right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border mb-0">
                {/* Hero card */}
                {latestArticles[0] && (
                  <Link to={`/article/${latestArticles[0].id}`} className="block relative overflow-hidden group article-card md:row-span-2 border-r border-border">
                    <img
                      src={latestArticles[0].image}
                      alt={latestArticles[0].title}
                      className="article-card-image w-full h-full min-h-[260px] md:min-h-[380px] object-cover"
                    />
                    <div className="scanline-overlay absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    {latestArticles[0].isBreaking && (
                      <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest z-10">BREAKING</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{latestArticles[0].category}</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">•</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">{latestArticles[0].date}</span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl leading-tight text-foreground group-hover:text-primary transition-colors">
                        {latestArticles[0].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* Card 2 */}
                {latestArticles[1] && (
                  <Link to={`/article/${latestArticles[1].id}`} className="block group article-card border-b border-border">
                    <div className="relative overflow-hidden">
                      <img src={latestArticles[1].image} alt={latestArticles[1].title} className="article-card-image w-full h-36 md:h-44 object-cover" />
                      <div className="scanline-overlay absolute inset-0" />
                      {latestArticles[1].isBreaking && (
                        <span className="absolute top-2 left-2 bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest">BREAKING</span>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{latestArticles[1].category}</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">•</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">{latestArticles[1].date}</span>
                      </div>
                      <h3 className="font-heading text-sm md:text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {latestArticles[1].title}
                      </h3>
                    </div>
                  </Link>
                )}

                {/* Card 3 */}
                {latestArticles[2] && (
                  <Link to={`/article/${latestArticles[2].id}`} className="block group article-card">
                    <div className="relative overflow-hidden">
                      <img src={latestArticles[2].image} alt={latestArticles[2].title} className="article-card-image w-full h-36 md:h-44 object-cover" />
                      <div className="scanline-overlay absolute inset-0" />
                      {latestArticles[2].isBreaking && (
                        <span className="absolute top-2 left-2 bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest">BREAKING</span>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{latestArticles[2].category}</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">•</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">{latestArticles[2].date}</span>
                      </div>
                      <h3 className="font-heading text-sm md:text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {latestArticles[2].title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>

              {/* Row 2: 3 small cards */}
              <div className="grid grid-cols-3 border border-t-0 border-border divide-x divide-border">
                {latestArticles.slice(3, 6).map((article) => (
                  <Link key={article.id} to={`/article/${article.id}`} className="block group article-card">
                    <div className="relative overflow-hidden">
                      <img src={article.image} alt={article.title} className="article-card-image w-full h-28 md:h-36 object-cover" />
                      <div className="scanline-overlay absolute inset-0" />
                      {article.isBreaking && (
                        <span className="absolute top-2 left-2 bg-primary text-primary-foreground font-heading text-[10px] px-1.5 py-0.5 tracking-widest">BREAKING</span>
                      )}
                    </div>
                    <div className="p-2 md:p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{article.category}</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">•</span>
                        <span className="font-meta text-[9px] text-muted-foreground/70">{article.date}</span>
                      </div>
                      <h3 className="font-heading text-xs md:text-sm leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
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

          {/* Category Sections */}
          <SectionBlock title="GAMES" category="Games" articles={gamesArticles} />
          <SectionBlock title="ANIME" category="Anime" articles={animeArticles} />
          <SectionBlock title="ESPORTS" category="Esports" articles={esportsArticles} />
          <SectionBlock title="CULTURE & FILM" category="Culture" articles={cultureArticles} />

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
