import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import CategoryBar from "@/components/CategoryBar";
import LiveScorePanel from "@/components/LiveScorePanel";
import Pagination from "@/components/Pagination";

import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";

const articles = [
  { image: article1, title: "Gundam: Requiem for Vengeance Season 2 Confirmed with Unreal Engine 5.5", category: "Anime", date: "2 hours ago", isBreaking: true },
  { image: article2, title: "Elden Ring Nightreign — Everything We Know About the Standalone Expansion", category: "Games", date: "5 hours ago" },
  { image: article3, title: "Solo Leveling Season 3 Announced — Arise Arc Gets Anime Adaptation", category: "Anime", date: "8 hours ago" },
  { image: article4, title: "Cyberpunk 2077 Sequel 'Project Orion' First Details Leak from CD Projekt Red", category: "Games", date: "12 hours ago", isBreaking: true },
  { image: article5, title: "Macross Delta Movie Trilogy Finale Drops Stunning New Trailer", category: "Anime", date: "1 day ago" },
  { image: article6, title: "Your Name Producer Announces New Original Anime Film for 2027", category: "Film", date: "1 day ago" },
];

const Index = () => {
  return (
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
                <ArticleCard {...articles[0]} size="large" />
              </div>
              {/* Two stacked on right */}
              <ArticleCard {...articles[1]} size="medium" />
              <ArticleCard {...articles[2]} size="medium" />
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-0">
              {articles.slice(3).map((article, i) => (
                <ArticleCard key={i} {...article} size="small" />
              ))}
            </div>

            <Pagination />
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
  );
};

export default Index;
