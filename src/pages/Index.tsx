import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import PageTransition from "@/components/PageTransition";
import CategoryBar from "@/components/CategoryBar";
import LiveScorePanel from "@/components/LiveScorePanel";
import SectionBlock from "@/components/SectionBlock";
import Pagination from "@/components/Pagination";
import { articles, getArticlesByCategory } from "@/data/articles";

const Index = () => {
  const latestArticles = articles.slice(0, 6);
  const animeArticles = getArticlesByCategory("Anime");
  const gamesArticles = getArticlesByCategory("Games");
  const esportsArticles = getArticlesByCategory("Esports");
  const cultureArticles = getArticlesByCategory("Culture");

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <TickerBar />

      <main className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Main article grid */}
          <div>
            <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
              <h2 className="font-heading text-2xl text-foreground tracking-widest">LATEST DISPATCHES</h2>
              <div className="flex-1 h-px bg-border" />
              <span className="font-meta text-[10px] uppercase text-muted-foreground">PAGE 01</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* First large article */}
              <div className="md:row-span-2 border-r-0 md:border-r border-border">
                <ArticleCard {...latestArticles[0]} size="large" />
              </div>
              {/* Two stacked on right */}
              <ArticleCard {...latestArticles[1]} size="medium" />
              <ArticleCard {...latestArticles[2]} size="medium" />
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-0">
              {latestArticles.slice(3).map((article) => (
                <ArticleCard key={article.id} {...article} size="small" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <LiveScorePanel />

            {/* Trending section */}
            <div className="border border-border">
              <div className="border-b border-border px-4 py-3">
                <h2 className="font-heading text-lg tracking-widest text-foreground">TRENDING</h2>
              </div>
              <div className="divide-y divide-border">
                {["Nintendo Switch 2 Full Specs Analysis", "Top 10 Anime Winter 2026", "VALORANT Patch 10.05 Agent Tier List", "Demon Slayer Infinity Castle Review"].map((title, i) => (
                  <div key={i} className="px-4 py-3 flex items-start gap-3 hover:bg-secondary transition-colors cursor-pointer group">
                    <span className="font-heading text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-xs text-foreground group-hover:text-primary transition-colors leading-snug pt-1">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <SectionBlock title="GAMES" category="Games" articles={gamesArticles} />
        <SectionBlock title="ANIME" category="Anime" articles={animeArticles} />
        <SectionBlock title="ESPORTS" category="Esports" articles={esportsArticles} />
        <SectionBlock title="CULTURE & FILM" category="Culture" articles={[...cultureArticles, ...articles.filter(a => a.category === "Film")]} />

        <Pagination />
      </main>

      <CategoryBar />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl text-primary tracking-widest">SIGNAL//</h2>
              <p className="font-meta text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                Games & Anime Intelligence Archive
              </p>
            </div>
            <p className="font-meta text-[10px] text-muted-foreground">
              © 2026 SIGNAL. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default Index;
