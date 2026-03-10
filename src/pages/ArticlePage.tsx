import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h2 className="font-heading text-4xl text-foreground mb-4">ARTICLE NOT FOUND</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">The requested dispatch does not exist in the archive.</p>
          <Link to="/" className="font-meta text-xs uppercase tracking-wider text-primary hover:underline">
            ← Return to HQ
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // Fill remaining slots with other articles if not enough same-category
  const otherArticles = articles
    .filter((a) => a.id !== article.id && a.category !== article.category)
    .slice(0, 3 - relatedArticles.length);

  const related = [...relatedArticles, ...otherArticles];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TickerBar />

      <main className="container py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 font-meta text-[10px] uppercase tracking-wider">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Signal
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">{article.category}</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Article</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Main content */}
          <article>
            {/* Category & meta */}
            <div className="flex items-center gap-3 mb-4">
              {article.isBreaking && (
                <span className="bg-primary text-primary-foreground font-heading text-xs px-2 py-0.5 tracking-widest">
                  BREAKING
                </span>
              )}
              <span className="font-meta text-[10px] uppercase tracking-wider text-primary">
                {article.category}
              </span>
              <span className="font-meta text-[10px] text-muted-foreground">•</span>
              <span className="font-meta text-[10px] text-muted-foreground">{article.date}</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center justify-between border-y border-border py-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center font-heading text-sm text-primary">
                  {article.author.avatar}
                </div>
                <div>
                  <p className="font-body text-sm text-foreground">{article.author.name}</p>
                  <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                    {article.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-meta text-[10px] uppercase tracking-wider">{article.readTime}</span>
                </div>
                <button className="p-2 border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors">
                  <Share2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative mb-8 overflow-hidden border border-border">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent h-20" />
            </div>

            {/* Article body */}
            <div className="space-y-5 mb-12">
              {article.content.map((paragraph, i) => (
                <p key={i} className="font-body text-sm text-foreground/90 leading-relaxed">
                  {i === 0 && (
                    <span className="font-heading text-4xl text-primary float-left mr-2 mt-1 leading-none">
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? paragraph.slice(1) : paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="border-t border-border pt-4 mb-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground mr-2">Tags:</span>
                {[article.category, "News", "2026", "Featured"].map((tag) => (
                  <span
                    key={tag}
                    className="font-meta text-[10px] uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
              Back to dispatches
            </Link>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author card */}
            <div className="border border-border">
              <div className="border-b border-border px-4 py-3">
                <h2 className="font-heading text-lg tracking-widest text-foreground">ABOUT THE AUTHOR</h2>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center font-heading text-lg text-primary">
                    {article.author.avatar}
                  </div>
                  <div>
                    <p className="font-body text-sm text-foreground">{article.author.name}</p>
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                      {article.author.role}
                    </p>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Covering the latest in {article.category.toLowerCase()} culture, industry news, and community developments for SIGNAL//.
                </p>
              </div>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="border border-border">
                <div className="border-b border-border px-4 py-3">
                  <h2 className="font-heading text-lg tracking-widest text-foreground">RELATED INTEL</h2>
                </div>
                <div className="divide-y divide-border">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/article/${rel.id}`}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors group"
                    >
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-16 h-12 object-cover border border-border shrink-0 grayscale group-hover:grayscale-0 transition-all"
                      />
                      <div>
                        <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{rel.category}</span>
                        <p className="font-body text-xs text-foreground group-hover:text-primary transition-colors leading-snug mt-0.5">
                          {rel.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl text-primary tracking-widest">SIGNAL//</h2>
              <p className="font-meta text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                Games & Anime Intelligence Archive
              </p>
            </div>
            <p className="font-meta text-[10px] text-muted-foreground">© 2026 SIGNAL. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
