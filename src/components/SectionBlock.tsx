import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import SwipeableCards from "@/components/SwipeableCards";
import type { Article } from "@/data/articles";

interface SectionBlockProps {
  title: string;
  category: string;
  articles: Article[];
}

const SectionBlock = ({ title, category, articles }: SectionBlockProps) => {
  if (articles.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/20">
        <h2 className="font-heading text-xl text-foreground tracking-widest">{title}</h2>
        <div className="flex-1 h-px bg-border" />
        <Link
          to={`/category/${encodeURIComponent(category)}`}
          className="flex items-center gap-1 font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group"
        >
          View All
          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Desktop grid — cards merged together with dividers */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 divide-x divide-border border-b border-border">
        {articles.slice(0, 4).map((article) => (
          <ArticleCard key={article.id} {...article} size="small" merged />
        ))}
      </div>

      {/* Mobile swipeable */}
      <div className="md:hidden border-b border-border">
        <SwipeableCards articles={articles.slice(0, 6)} />
      </div>
    </section>
  );
};

export default SectionBlock;
