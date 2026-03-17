import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Gamepad2, Tv, Swords, Film, Search, Cpu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Games", icon: Gamepad2, href: "/category/Games" },
  { label: "Anime", icon: Tv, href: "/category/Anime" },
  { label: "Esports", icon: Swords, href: "/category/Esports" },
  { label: "Tech", icon: Cpu, href: "/category/Tech" },
  { label: "Culture", icon: Film, href: "/category/Culture" },
];

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-background border-r border-border p-0">
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <h2 className="font-heading text-2xl text-primary tracking-widest">ToRock Verse</h2>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-border">
          <form onSubmit={(e) => { e.preventDefault(); const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement).value.trim(); if (q) { setOpen(false); window.location.href = `/search?q=${encodeURIComponent(q)}`; } }}>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                name="q"
                type="text"
                placeholder="SEARCH ARCHIVE..."
                className="w-full bg-secondary border border-border pl-8 pr-3 py-2 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </form>
        </div>

        {/* Nav Items */}
        <nav className="py-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 font-meta text-sm uppercase tracking-wider text-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-border">
          <p className="font-meta text-[10px] text-muted-foreground uppercase">
            © 2026 ToRock Verse
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
