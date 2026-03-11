import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  isBreaking?: boolean;
  size?: "large" | "medium" | "small";
}

const ArticleCard = ({ id, image, title, category, date, isBreaking, size = "medium" }: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`}>
      <article className={`article-card border border-border group cursor-pointer h-full flex flex-col ${
        size === "large" ? "row-span-2" : ""
      }`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`article-card-image w-full object-cover ${
              size === "large" ? "h-72 md:h-full" : size === "small" ? "h-36" : "h-48"
            }`}
          />
          <div className="scanline-overlay absolute inset-0" />
          {isBreaking && (
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest">
              BREAKING
            </span>
          )}
        </div>
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{category}</span>
            <span className="font-meta text-[10px] text-muted-foreground">•</span>
            <span className="font-meta text-[10px] text-muted-foreground">{date}</span>
          </div>
          <h3 className={`font-heading leading-tight text-primary transition-colors ${
            size === "large" ? "text-2xl" : size === "small" ? "text-base" : "text-lg"
          }`}>
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
