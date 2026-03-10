import { Search } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = ["Artikel", "Review", "Anime", "Games", "Esports"];

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <h1 className="font-heading text-3xl text-primary tracking-widest">
            SIGNAL//
          </h1>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-border"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="SEARCH ARCHIVE..."
              className="bg-secondary border border-border pl-8 pr-3 py-1.5 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary w-48"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
