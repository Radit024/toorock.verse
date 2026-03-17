import { Link, useLocation } from "react-router-dom";
import { Home, Gamepad2, Tv, Swords, Clapperboard, BookOpen, Cpu } from "lucide-react";

const tabs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Games", icon: Gamepad2, href: "/category/Games" },
  { label: "Anime", icon: Tv, href: "/category/Anime" },
  { label: "Esports", icon: Swords, href: "/category/Esports" },
  { label: "Movies", icon: Clapperboard, href: "/category/Movies" },
  { label: "Tech", icon: Cpu, href: "/category/Tech" },
  { label: "Culture", icon: BookOpen, href: "/category/Culture" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border">
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.label}
              to={tab.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="font-meta text-[9px] uppercase tracking-wider">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
