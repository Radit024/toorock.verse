import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
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
  const cultureArticles = articles.filter((a) => a.category === "Movies" || a.category === "Movies");

  return (
    <PageTransition>
    <Helmet>
      <title>ToRock Verse — Anime, Games, Esports &amp; Culture News</title>
      <meta name="description" content="ToRock Verse is your ultimate source for the latest anime, games, esports, films, and pop-culture news. Breaking coverage, reviews, and live scores." />
      <meta property="og:title" content="ToRock Verse — Anime, Games, Esports & Culture News" />
      <meta property="og:description" content="Your ultimate source for anime, games, esports, films, and pop-culture news." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ToRock.verse/" />
      <link rel="canonical" href="https://ToRock.verse/" />
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

          {/* Category Sections — merged into one bordered block */}
          <div className="border border-border mt-8">
            <SectionBlock title="GAMES" category="Games" articles={gamesArticles} />
            <SectionBlock title="ANIME" category="Anime" articles={animeArticles} />
            <SectionBlock title="ESPORTS" category="Esports" articles={esportsArticles} />
            <SectionBlock title="CULTURE & FILM" category="Culture" articles={cultureArticles} />
          </div>

        </main>
      </PullToRefresh>

      <BottomNav />

      {/* Footer */}
      <footer className="border-t border-border pb-20 md:pb-0">
        <div className="container py-5">
          <div className="flex flex-row items-center justify-between gap-2">
            {/* Brand */}
            <div>
              <h2 className="font-heading text-xl md:text-2xl text-primary tracking-widest leading-tight">ToRock Verse</h2>
              <p className="font-meta text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                Games · Anime · Esports · Movies
              </p>
            </div>
            {/* Socials + copyright */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-1.5">
                <a href="https://facebook.com/ToRockVerse" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" title="Facebook">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.instagram.com/torockverse.id/" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" title="Instagram">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="https://youtube.com/@ToRockVerse" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" title="YouTube">
                  <Youtube className="h-3.5 w-3.5" />
                </a>
                <a href="https://discord.gg/torockverse" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" title="Discord">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
              <p className="font-meta text-[9px] text-muted-foreground text-right">
                © 2026 ToRock Verse.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default Index;
