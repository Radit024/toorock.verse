import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileDrawer from "@/components/MobileDrawer";

const navItems = [
  { label: "Artikel", href: "/" },
  { label: "Review", href: "/category/Reviews" },
  { label: "Anime", href: "/category/Anime" },
  { label: "Games", href: "/category/Games" },
  { label: "Esports", href: "/category/Esports" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <MobileDrawer />
          <Link to="/" className="font-heading text-3xl text-primary tracking-widest">
           TooRock Verse
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-border"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH ARCHIVE..."
              className="bg-secondary border border-border pl-8 pr-3 py-1.5 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary w-48"
            />
          </form>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
