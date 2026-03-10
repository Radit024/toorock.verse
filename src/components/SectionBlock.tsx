import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/data/articles";

interface SectionBlockProps {
  title: string;
  category: string;
  articles: Article[];
}

const SectionBlock = ({ title, category, articles }: SectionBlockProps) => {
  if (articles.length === 0) return null;

  return (
    <section className="py-8 border-t border-border">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="font-heading text-2xl text-foreground tracking-widest">{title}</h2>
        <div className="flex-1 h-px bg-border" />
        <Link
          to={viewAllHref}
          className="flex items-center gap-1 font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group"
        >
          View All
          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {articles.slice(0, 4).map((article) => (
          <ArticleCard key={article.id} {...article} size="small" />
        ))}
      </div>
    </section>
  );
};

export default SectionBlock;
