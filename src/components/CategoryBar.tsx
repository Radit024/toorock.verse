import { Gamepad2, Tv, Swords, Trophy, Film, BookOpen } from "lucide-react";

const categories = [
  { name: "Games", icon: Gamepad2 },
  { name: "Anime", icon: Tv },
  { name: "Esports", icon: Swords },
  { name: "Reviews", icon: BookOpen },
  { name: "Film", icon: Film },
  { name: "Tournaments", icon: Trophy },
];

const CategoryBar = () => {
  return (
    <section className="border-b border-border">
      <div className="container py-6">
        <h2 className="font-heading text-xl text-foreground mb-4 tracking-widest">
          BROWSE BY CATEGORY
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="border border-border p-4 flex flex-col items-center gap-2 hover:bg-secondary hover:border-primary transition-colors group cursor-pointer"
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-meta text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
