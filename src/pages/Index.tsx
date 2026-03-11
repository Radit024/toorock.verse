import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:row-span-2">
                  <ArticleCard {...latestArticles[0]} size="large" />
                </div>
                <ArticleCard {...latestArticles[1]} size="medium" />
                <ArticleCard {...latestArticles[2]} size="medium" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {latestArticles.slice(3).map((article) => (
                  <ArticleCard key={article.id} {...article} size="small" />
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
