import { useEffect, useState } from "react";

type TextSize = "small" | "medium" | "large";

const SIZES: TextSize[] = ["small", "medium", "large"];
const LABELS: Record<TextSize, string> = { small: "S", medium: "M", large: "L" };

const TextSizeToggle = () => {
  const [size, setSize] = useState<TextSize>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("text-size") as TextSize) || "medium";
    }
    return "medium";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("text-size-small", "text-size-medium", "text-size-large");
    root.classList.add(`text-size-${size}`);
    localStorage.setItem("text-size", size);
  }, [size]);

  return (
    <div className="flex items-center border border-border">
      {SIZES.map((s) => (
        <button
          key={s}
          onClick={() => setSize(s)}
          className={`px-2 py-1.5 font-meta text-[10px] uppercase tracking-wider transition-colors ${
            size === s
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
          aria-label={`Text size ${s}`}
          title={`Text size: ${s}`}
        >
          {LABELS[s]}
        </button>
      ))}
    </div>
  );
};

export default TextSizeToggle;
