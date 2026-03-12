import { Search, Radio, ChevronRight, Settings, Moon, Sun, ALargeSmall } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Anime", href: "/category/Anime" },
  { label: "Games", href: "/category/Games" },
  { label: "Esports", href: "/category/Esports" },
  { label: "Culture", href: "/category/Culture" },
  { label: "Reviews", href: "/category/Reviews" },
];

type TextSize = "small" | "medium" | "large";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [now, setNow] = useState(new Date());
  const settingsRef = useRef<HTMLDivElement>(null);

  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" : false
  );

  const [textSize, setTextSize] = useState<TextSize>(() =>
    typeof window !== "undefined"
      ? ((localStorage.getItem("text-size") as TextSize) || "medium")
      : "medium"
  );

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("text-size-small", "text-size-medium", "text-size-large");
    root.classList.add(`text-size-${textSize}`);
    localStorage.setItem("text-size", textSize);
  }, [textSize]);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;
    const handler = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [settingsOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const dateStr = now
    .toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();

  return (
    <nav className="sticky top-0 z-50 bg-background">
      {/* Main bar */}
      <div className="border-b border-border">
        <div className="container flex items-center justify-between h-14 gap-4">

          {/* Left: logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-heading text-[1.75rem] text-primary tracking-widest group-hover:opacity-80 transition-opacity">
                ToRock Verse
              </span>
              <span className="font-meta text-[8px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">
                Games &amp; Anime Intelligence
              </span>
            </Link>
            <span className="hidden md:block w-px h-8 bg-border mx-1" />
          </div>

          {/* Center: nav links */}
          <div className="hidden md:flex items-center gap-0 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-3 h-14 flex items-center font-meta text-[11px] uppercase tracking-wider transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Right: search + settings */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Expanding search — visible on all sizes */}
            <div className="flex items-center">
              <form
                onSubmit={handleSearch}
                className={`flex items-center transition-all duration-200 overflow-hidden border ${
                  searchOpen ? "border-primary w-40 md:w-48" : "border-transparent w-8"
                } bg-secondary`}
              >
                <button
                  type="button"
                  onClick={() => setSearchOpen((o) => !o)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
                  aria-label="Toggle search"
                >
                  <Search className="h-3.5 w-3.5" />
                </button>
                {searchOpen && (
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                    placeholder="SEARCH..."
                    className="bg-transparent pr-3 py-1.5 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
                  />
                )}
              </form>
            </div>

            <span className="w-px h-6 bg-border" />

            {/* Settings dropdown */}
            <div ref={settingsRef} className="relative">
              <button
                onClick={() => setSettingsOpen((o) => !o)}
                className={`p-2 border transition-colors ${
                  settingsOpen
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
                aria-label="Settings"
                title="Settings"
              >
                <Settings className="h-3.5 w-3.5" />
              </button>

              {settingsOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-60 bg-background border border-border shadow-lg z-50">
                  <div className="px-4 py-2.5 border-b border-border">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Settings</p>
                  </div>

                  {/* Theme */}
                  <div className="px-4 py-3 flex items-center justify-between border-b border-border">
                    <div className="flex items-center gap-2">
                      {dark
                        ? <Moon className="h-3.5 w-3.5 text-muted-foreground" />
                        : <Sun className="h-3.5 w-3.5 text-muted-foreground" />}
                      <span className="font-meta text-xs uppercase tracking-wider text-foreground">Theme</span>
                    </div>
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => setDark(false)}
                        className={`px-3 py-1.5 font-meta text-[10px] uppercase tracking-wider transition-colors ${
                          !dark ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        Light
                      </button>
                      <button
                        onClick={() => setDark(true)}
                        className={`px-3 py-1.5 font-meta text-[10px] uppercase tracking-wider transition-colors border-l border-border ${
                          dark ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>

                  {/* Text size */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ALargeSmall className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="font-meta text-xs uppercase tracking-wider text-foreground">Text Size</span>
                    </div>
                    <div className="flex items-center border border-border">
                      {(["small", "medium", "large"] as TextSize[]).map((s, i) => (
                        <button
                          key={s}
                          onClick={() => setTextSize(s)}
                          className={`px-3 py-1.5 font-meta text-[10px] uppercase tracking-wider transition-colors ${
                            i > 0 ? "border-l border-border" : ""
                          } ${
                            textSize === s
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {s[0].toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
    </nav>
  );
};

export default Navbar;