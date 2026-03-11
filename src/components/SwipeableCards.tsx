import useEmblaCarousel from "embla-carousel-react";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/data/articles";

interface SwipeableCardsProps {
  articles: Article[];
  size?: "small" | "medium";
}

const SwipeableCards = ({ articles, size = "small" }: SwipeableCardsProps) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <div className="md:hidden overflow-hidden" ref={emblaRef}>
      <div className="flex gap-3">
        {articles.map((article) => (
          <div key={article.id} className="flex-none w-[70vw] max-w-[280px]">
            <ArticleCard {...article} size={size} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableCards;
