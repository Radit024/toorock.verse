import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="container flex flex-col items-center justify-center py-32 text-center">
          {/* Glitch number */}
          <div className="relative mb-6 select-none">
            <span className="font-heading text-[10rem] leading-none text-border">404</span>
            <span className="font-heading text-[10rem] leading-none text-primary absolute inset-0 opacity-60 blur-[2px]">404</span>
          </div>

          <div className="border border-border mb-8 px-8 py-6 max-w-md w-full">
            <h1 className="font-heading text-2xl tracking-widest text-foreground mb-2">
              SIGNAL LOST
            </h1>
            <div className="h-px bg-border my-3" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              The dispatch you&apos;re looking for doesn&apos;t exist in the archive.
              It may have been moved, removed, or never filed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/"
              className="font-meta text-xs uppercase tracking-wider px-6 py-2.5 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              ← Return to HQ
            </Link>
            <Link
              to="/category/Games"
              className="font-meta text-xs uppercase tracking-wider px-6 py-2.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              Browse Archives
            </Link>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default NotFound;
