import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPublishedArticles } from "@/lib/api";

interface TickerItem {
  id: string;
  text: string;
  isBreaking: boolean;
}

const LATEST_BROWN_CLASS = "text-[#8B5E3C]";

const FALLBACK: TickerItem[] = [
  { id: "f1", text: "Welcome to ToRock Verse — Your pop-culture intelligence hub", isBreaking: false },
  { id: "f2", text: "Coverage across Games · Anime · Esports · Film", isBreaking: false },
];

const TickerBar = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<TickerItem[]>(FALLBACK);

  const loadItems = async () => {
    try {
      const articles = await fetchPublishedArticles();
      if (articles.length === 0) { setItems(FALLBACK); return; }
      // Breaking first, then latest, max 20
      const sorted = [
        ...articles.filter((a) => a.is_breaking),
        ...articles.filter((a) => !a.is_breaking),
      ].slice(0, 20);
      setItems(
        sorted.map((a) => ({
          id: a.slug || a.id,
          text: a.title,
          isBreaking: a.is_breaking,
        }))
      );
    } catch {
      setItems(FALLBACK);
    }
  };

  useEffect(() => {
    loadItems();

    const interval = window.setInterval(() => {
      loadItems();
    }, 30000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="border-b border-border bg-secondary overflow-hidden">
      <div className="flex items-center">
        <div className="bg-primary px-3 py-2 font-heading text-sm text-primary-foreground tracking-widest shrink-0 z-10">
          Breaking
        </div>
        <div className="overflow-hidden relative flex-1">
          <div className="ticker-scroll flex items-center gap-8 whitespace-nowrap py-2 px-4">
            {doubled.map((item, i) => (
              <span
                key={`${item.id}-${i}`}
                onClick={() => navigate(`/article/${item.id}`)}
                className="font-body text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <span
                  className={`mr-2 font-meta text-[9px] uppercase tracking-wider ${
                    item.isBreaking ? "text-destructive" : LATEST_BROWN_CLASS
                  }`}
                >
                  {item.isBreaking ? "TRENDING" : "LATEST"}
                </span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
