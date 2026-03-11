import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, ArrowLeft, Zap,
  Search, Filter, BarChart3, FileText, CheckCircle2, AlertCircle,
  RefreshCw, ExternalLink, ChevronDown, ChevronUp, X, Copy,
  ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Activity, Globe, AlignLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
import ImageUpload from "@/components/ImageUpload";
import {
  fetchAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  type DbArticle,
} from "@/lib/api";

const CATEGORIES = ["Anime", "Games", "Esports", "Culture", "Film", "Reviews"];
const PAGE_SIZE = 12;

type LogAction = "created" | "updated" | "deleted" | "published" | "unpublished" | "duplicated";
interface ActivityEntry {
  id: string;
  action: LogAction;
  title: string;
  timestamp: Date;
}

const emptyForm = {
  slug: "",
  title: "",
  category: "Anime",
  image_url: "",
  author_name: "",
  author_role: "Editor",
  author_avatar: "",
  read_time: "3 min read",
  is_breaking: false,
  content: [""],
  published: false,
};

type View = "overview" | "articles" | "form";
type SortField = "created_at" | "title" | "category";
type SortDir = "asc" | "desc";

const ACTION_COLOR: Record<LogAction, string> = {
  created: "text-green-500",
  updated: "text-blue-400",
  deleted: "text-destructive",
  published: "text-green-500",
  unpublished: "text-muted-foreground",
  duplicated: "text-primary",
};

const AdminDashboard = () => {
  const [articles, setArticles] = useState<DbArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<View>("overview");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [activityLog, setActivityLog] = useState<ActivityEntry[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [page, setPage] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);

  // list filters
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const logAction = useCallback((action: LogAction, title: string) => {
    setActivityLog((prev) => [
      { id: crypto.randomUUID(), action, title, timestamp: new Date() },
      ...prev.slice(0, 49),
    ]);
  }, []);

  const markDirty = () => setIsDirty(true);

  const switchView = (newView: View) => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Leave anyway?")) return;
    }
    setIsDirty(false);
    setView(newView);
  };

  const loadArticles = async (silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);
    try {
      const data = await fetchAllArticles();
      setArticles(data);
    } catch {
      toast({ title: "Error", description: "Failed to load articles", variant: "destructive" });
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => { loadArticles(); }, []);

  // Ctrl+S saves form
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s" && view === "form") {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view]);

  // --- Stats ---
  const stats = useMemo(() => {
    const published = articles.filter((a) => a.published).length;
    return {
      total: articles.length,
      published,
      drafts: articles.filter((a) => !a.published).length,
      breaking: articles.filter((a) => a.is_breaking).length,
      publishRate: articles.length ? Math.round((published / articles.length) * 100) : 0,
      byCategory: CATEGORIES.map((c) => ({ name: c, count: articles.filter((a) => a.category === c).length })),
      latestPublish: articles.filter((a) => a.published).sort((a, b) => b.updated_at.localeCompare(a.updated_at))[0] ?? null,
    };
  }, [articles]);

  // --- Filtered & sorted list ---
  const filtered = useMemo(() => {
    let list = [...articles];
    if (searchQuery.trim())
      list = list.filter((a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (filterCategory !== "All") list = list.filter((a) => a.category === filterCategory);
    if (filterStatus === "Published") list = list.filter((a) => a.published);
    if (filterStatus === "Draft") list = list.filter((a) => !a.published);
    if (filterStatus === "Breaking") list = list.filter((a) => a.is_breaking);
    list.sort((a, b) => {
      const va = a[sortField] as string;
      const vb = b[sortField] as string;
      return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return list;
  }, [articles, searchQuery, filterCategory, filterStatus, sortField, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 on filter change
  useEffect(() => { setPage(1); }, [searchQuery, filterCategory, filterStatus, sortField, sortDir]);

  // Word count
  const wordCount = useMemo(() => {
    const perPara = form.content.map((p) => (p.trim() ? p.trim().split(/\s+/).length : 0));
    return { perPara, total: perPara.reduce((a, b) => a + b, 0) };
  }, [form.content]);

  // --- Form handlers ---
  const handleNew = () => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Start a new article anyway?")) return;
    }
    setForm(emptyForm);
    setEditingId(null);
    setIsDirty(false);
    setView("form");
  };

  const handleEdit = (article: DbArticle) => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Switch to this article?")) return;
    }
    setForm({
      slug: article.slug,
      title: article.title,
      category: article.category,
      image_url: article.image_url || "",
      author_name: article.author_name,
      author_role: article.author_role,
      author_avatar: article.author_avatar,
      read_time: article.read_time,
      is_breaking: article.is_breaking,
      content: article.content.length > 0 ? article.content : [""],
      published: article.published,
    });
    setEditingId(article.id);
    setIsDirty(false);
    setView("form");
  };

  const handleDuplicate = (article: DbArticle) => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Duplicate this article?")) return;
    }
    setForm({
      slug: `copy-of-${article.slug}`,
      title: `Copy of ${article.title}`,
      category: article.category,
      image_url: article.image_url || "",
      author_name: article.author_name,
      author_role: article.author_role,
      author_avatar: article.author_avatar,
      read_time: article.read_time,
      is_breaking: false,
      content: [...article.content],
      published: false,
    });
    setEditingId(null);
    setIsDirty(true);
    setView("form");
    toast({ title: "Duplicated", description: "Edit and save as a new article." });
  };

  const handleDelete = async (id: string) => {
    const art = articles.find((a) => a.id === id);
    if (!confirm("Delete this article?")) return;
    try {
      await deleteArticle(id);
      logAction("deleted", art?.title ?? id);
      toast({ title: "Deleted", description: "Article removed." });
      setSelected((prev) => { const s = new Set(prev); s.delete(id); return s; });
      loadArticles(true);
    } catch {
      toast({ title: "Error", description: "Failed to delete", variant: "destructive" });
    }
  };

  const handleBulkDelete = async () => {
    if (!confirm(`Delete ${selected.size} selected article(s)?`)) return;
    try {
      await Promise.all([...selected].map((id) => deleteArticle(id)));
      logAction("deleted", `${selected.size} articles`);
      toast({ title: "Deleted", description: `${selected.size} articles removed.` });
      setSelected(new Set());
      loadArticles(true);
    } catch {
      toast({ title: "Error", description: "Bulk delete failed", variant: "destructive" });
    }
  };

  const handleBulkPublish = async (publish: boolean) => {
    try {
      await Promise.all([...selected].map((id) => updateArticle(id, { published: publish })));
      logAction(publish ? "published" : "unpublished", `${selected.size} articles`);
      toast({ title: publish ? "Published" : "Unpublished", description: `${selected.size} articles updated.` });
      setSelected(new Set());
      loadArticles(true);
    } catch {
      toast({ title: "Error", description: "Bulk update failed", variant: "destructive" });
    }
  };

  const handleTogglePublish = async (article: DbArticle) => {
    try {
      await updateArticle(article.id, { published: !article.published });
      logAction(article.published ? "unpublished" : "published", article.title);
      toast({ title: article.published ? "Unpublished" : "Published" });
      loadArticles(true);
    } catch {
      toast({ title: "Error", description: "Failed to update", variant: "destructive" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim()) {
      toast({ title: "Error", description: "Title and slug are required", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        image_url: form.image_url || null,
        content: form.content.filter((p) => p.trim() !== ""),
      };
      if (editingId) {
        await updateArticle(editingId, payload);
        logAction("updated", form.title);
        toast({ title: "Updated", description: "Article saved." });
      } else {
        await createArticle(payload);
        logAction("created", form.title);
        toast({ title: "Created", description: "New article added." });
      }
      setIsDirty(false);
      setView("articles");
      loadArticles(true);
    } catch (err: unknown) {
      toast({ title: "Error", description: (err as Error).message || "Failed to save", variant: "destructive" });
    }
    setSaving(false);
  };

  const handleTitleChange = (title: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    setForm((prev) => ({ ...prev, title, ...(editingId ? {} : { slug }) }));
    markDirty();
  };

  const updateContent = (index: number, value: string) => {
    const updated = [...form.content];
    updated[index] = value;
    setForm({ ...form, content: updated });
    markDirty();
  };

  const addParagraph = () => { setForm({ ...form, content: [...form.content, ""] }); markDirty(); };

  const removeParagraph = (index: number) => {
    if (form.content.length <= 1) return;
    setForm({ ...form, content: form.content.filter((_, i) => i !== index) });
    markDirty();
  };

  const moveParagraph = (index: number, dir: -1 | 1) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= form.content.length) return;
    const updated = [...form.content];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setForm({ ...form, content: updated });
    markDirty();
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  };

  const toggleSelectAll = () => {
    if (selected.size === paginated.length) setSelected(new Set());
    else setSelected(new Set(paginated.map((a) => a.id)));
  };

  const SortIcon = ({ field }: { field: SortField }) => (
    sortField === field
      ? sortDir === "asc" ? <ChevronUp className="h-3 w-3 inline ml-0.5" /> : <ChevronDown className="h-3 w-3 inline ml-0.5" />
      : null
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">

        {/* ── ARTICLE PREVIEW MODAL ── */}
        {previewOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
            <div className="container max-w-3xl py-8">
              <div className="flex items-center justify-between mb-6 sticky top-0 bg-background/90 backdrop-blur-sm py-3 -mx-4 px-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1">PREVIEW MODE</span>
                  {!form.published && (
                    <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1">DRAFT</span>
                  )}
                </div>
                <button
                  onClick={() => setPreviewOpen(false)}
                  className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1.5"
                >
                  <X className="h-3.5 w-3.5" /> Close
                </button>
              </div>

              {form.image_url && (
                <img src={form.image_url} alt="" className="w-full aspect-video object-cover mb-6" />
              )}

              <div className="mb-3 flex items-center gap-2 flex-wrap">
                <span className="font-meta text-[10px] uppercase tracking-wider text-primary border border-primary px-1.5 py-0.5">{form.category}</span>
                {form.is_breaking && (
                  <span className="font-meta text-[10px] uppercase tracking-wider text-destructive border border-destructive px-1.5 py-0.5">Breaking</span>
                )}
              </div>

              <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-widest mb-4 leading-tight">
                {form.title || "Untitled Article"}
              </h1>

              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                <div className="w-9 h-9 bg-primary flex items-center justify-center shrink-0">
                  <span className="font-heading text-sm text-primary-foreground">{form.author_avatar || "??"}</span>
                </div>
                <div>
                  <p className="font-body text-sm text-foreground">{form.author_name || "Anonymous"}</p>
                  <p className="font-meta text-[10px] text-muted-foreground uppercase tracking-wider">
                    {form.author_role} &middot; {form.read_time}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {form.content.filter((p) => p.trim()).map((para, i) => (
                  <p key={i} className="font-body text-base text-foreground leading-relaxed">{para}</p>
                ))}
                {form.content.filter((p) => p.trim()).length === 0 && (
                  <p className="font-body text-sm text-muted-foreground italic">No content yet...</p>
                )}
              </div>

              {/* SEO snippet preview */}
              <div className="mt-12 pt-6 border-t border-border">
                <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Globe className="h-3 w-3" /> Search Engine Preview
                </p>
                <div className="border border-border p-4 space-y-1 bg-secondary/30">
                  <p className="font-meta text-[10px] text-green-600 dark:text-green-400">
                    toorock.verse/article/{form.slug || "article-slug"}
                  </p>
                  <p className="font-body text-sm text-blue-400 hover:underline cursor-pointer">
                    {form.title || "Article Title — TooRock Verse"}
                  </p>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2">
                    {form.content.find((p) => p.trim()) || "Article description preview will appear here based on your first paragraph..."}
                  </p>
                </div>
              </div>

              {/* Content stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Words", value: wordCount.total },
                  { label: "Paragraphs", value: form.content.filter((p) => p.trim()).length },
                  { label: "Est. Read", value: `${Math.max(1, Math.ceil(wordCount.total / 200))} min` },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-border p-3 text-center">
                    <p className="font-heading text-2xl text-foreground">{value}</p>
                    <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── HEADER ── */}
        <div className="border-b border-border bg-background sticky top-0 z-40">
          <div className="container flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link to="/" className="font-heading text-3xl text-primary tracking-widest">TooRock Verse</Link>
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">ADMIN</span>
              {isDirty && view === "form" && (
                <span className="font-meta text-[10px] uppercase tracking-wider text-primary animate-pulse">&#9679; Unsaved</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => loadArticles(true)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              </button>
              <Link to="/" className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" /> Back to site
              </Link>
            </div>
          </div>
        </div>

        {/* ── NAV TABS ── */}
        <div className="border-b border-border bg-background">
          <div className="container flex gap-0">
            {([
              ["overview", BarChart3, "Overview", activityLog.length > 0 ? String(activityLog.length) : null],
              ["articles", FileText, "Articles", articles.length > 0 ? String(articles.length) : null],
              ["form", Plus, editingId ? "Edit Article" : "New Article", null],
            ] as const).map(([v, Icon, label, badge]) => (
              <button
                key={v}
                onClick={() => { if (v === "form") handleNew(); else switchView(v as View); }}
                className={`flex items-center gap-2 px-4 py-3 font-meta text-xs uppercase tracking-wider border-b-2 transition-colors ${
                  view === v ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
                {badge && (
                  <span className="font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5">{badge}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <main className="container py-6 max-w-6xl">

          {/* ── OVERVIEW ── */}
          {view === "overview" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="font-heading text-3xl text-foreground tracking-widest">OVERVIEW</h1>
                {stats.latestPublish && (
                  <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                    Last published: {new Date(stats.latestPublish.updated_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" })}
                  </p>
                )}
              </div>

              {/* Stat cards — 5 cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { label: "Total", value: stats.total, icon: FileText, color: "text-foreground" },
                  { label: "Published", value: stats.published, icon: CheckCircle2, color: "text-green-500" },
                  { label: "Drafts", value: stats.drafts, icon: EyeOff, color: "text-muted-foreground" },
                  { label: "Breaking", value: stats.breaking, icon: AlertCircle, color: "text-primary" },
                  { label: "Publish Rate", value: `${stats.publishRate}%`, icon: Globe, color: "text-blue-400" },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="border border-border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
                      <Icon className={`h-4 w-4 ${color}`} />
                    </div>
                    <span className={`font-heading text-4xl ${color}`}>{value}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-[1fr_360px] gap-6">
                {/* Category breakdown with "View" links */}
                <div className="border border-border">
                  <div className="border-b border-border px-4 py-3">
                    <h2 className="font-heading text-lg tracking-widest text-foreground">ARTICLES BY CATEGORY</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {stats.byCategory.map(({ name, count }) => (
                      <div key={name} className="flex items-center gap-4 px-4 py-3">
                        <span className="font-meta text-xs uppercase tracking-wider text-muted-foreground w-20 shrink-0">{name}</span>
                        <div className="flex-1 bg-secondary h-2 overflow-hidden">
                          <div
                            className="bg-primary h-2 transition-all duration-500"
                            style={{ width: stats.total ? `${(count / stats.total) * 100}%` : "0%" }}
                          />
                        </div>
                        <span className="font-heading text-sm text-foreground w-8 text-right shrink-0">{count}</span>
                        <button
                          onClick={() => { setFilterCategory(name); switchView("articles"); }}
                          className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors shrink-0 w-8"
                        >
                          View
                        </button>
                      </div>
                    ))}
                    {stats.total === 0 && (
                      <p className="font-body text-sm text-muted-foreground px-4 py-6 text-center">No articles yet.</p>
                    )}
                  </div>
                </div>

                {/* Activity Log */}
                <div className="border border-border flex flex-col">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3 shrink-0">
                    <div className="flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-muted-foreground" />
                      <h2 className="font-heading text-lg tracking-widest text-foreground">ACTIVITY LOG</h2>
                    </div>
                    {activityLog.length > 0 && (
                      <button
                        onClick={() => setActivityLog([])}
                        className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="divide-y divide-border overflow-y-auto max-h-72 flex-1">
                    {activityLog.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-10 gap-2">
                        <Activity className="h-6 w-6 text-muted-foreground/40" />
                        <p className="font-body text-xs text-muted-foreground">No activity in this session yet.</p>
                      </div>
                    ) : (
                      activityLog.map((entry) => (
                        <div key={entry.id} className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary/30 transition-colors">
                          <span className={`font-meta text-[9px] uppercase tracking-wider w-20 shrink-0 ${ACTION_COLOR[entry.action]}`}>
                            {entry.action}
                          </span>
                          <span className="font-body text-xs text-foreground flex-1 min-w-0 truncate">{entry.title}</span>
                          <span className="font-meta text-[9px] text-muted-foreground shrink-0">
                            {entry.timestamp.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Recent articles */}
              <div className="border border-border">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <h2 className="font-heading text-lg tracking-widest text-foreground">RECENT ARTICLES</h2>
                  <button onClick={() => switchView("articles")} className="font-meta text-[10px] uppercase tracking-wider text-primary hover:underline">
                    View All
                  </button>
                </div>
                <div className="divide-y divide-border">
                  {articles.slice(0, 5).map((a) => (
                    <div key={a.id} className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors">
                      {a.image_url ? (
                        <img src={a.image_url} alt="" className="w-10 h-8 object-cover border border-border shrink-0" />
                      ) : (
                        <div className="w-10 h-8 bg-muted border border-border shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm text-foreground truncate">{a.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{a.category}</span>
                          <span className={`font-meta text-[9px] uppercase tracking-wider ${a.published ? "text-green-500" : "text-muted-foreground"}`}>
                            {a.published ? "Published" : "Draft"}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <button onClick={() => handleEdit(a)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Edit">
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => handleDuplicate(a)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Duplicate">
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                        <Link to={`/article/${a.slug}`} target="_blank" className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="View live">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                  {loading && <p className="font-body text-sm text-muted-foreground px-4 py-6 text-center">Loading...</p>}
                </div>
              </div>

              <Button onClick={handleNew} className="font-meta text-xs uppercase tracking-wider gap-2">
                <Plus className="h-4 w-4" /> New Article
              </Button>
            </div>
          )}

          {/* ── ARTICLES LIST ── */}
          {view === "articles" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="font-heading text-3xl text-foreground tracking-widest">ARTICLES</h1>
                <Button onClick={handleNew} className="font-meta text-xs uppercase tracking-wider gap-2">
                  <Plus className="h-4 w-4" /> New Article
                </Button>
              </div>

              {/* Filters row */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="bg-secondary border border-border pl-8 pr-8 py-1.5 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary w-52"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Filter className="h-3.5 w-3.5 text-muted-foreground" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="bg-secondary border border-border px-2 py-1.5 text-xs font-meta text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-secondary border border-border px-2 py-1.5 text-xs font-meta text-foreground focus:outline-none focus:border-primary"
                  >
                    {["All", "Published", "Draft", "Breaking"].map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <span className="font-meta text-[10px] text-muted-foreground ml-auto">
                  {filtered.length} of {articles.length} articles
                </span>
              </div>

              {/* Bulk actions */}
              {selected.size > 0 && (
                <div className="flex items-center gap-3 px-4 py-2 border border-primary bg-primary/5">
                  <span className="font-meta text-xs uppercase tracking-wider text-primary">{selected.size} selected</span>
                  <button onClick={() => handleBulkPublish(true)} className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <Eye className="h-3 w-3" /> Publish
                  </button>
                  <button onClick={() => handleBulkPublish(false)} className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <EyeOff className="h-3 w-3" /> Unpublish
                  </button>
                  <button onClick={handleBulkDelete} className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1">
                    <Trash2 className="h-3 w-3" /> Delete
                  </button>
                  <button onClick={() => setSelected(new Set())} className="ml-auto text-muted-foreground hover:text-foreground">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {loading ? (
                <p className="font-body text-sm text-muted-foreground py-12 text-center">Loading...</p>
              ) : filtered.length === 0 ? (
                <div className="border border-border p-12 text-center">
                  <Zap className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground">No articles found.</p>
                </div>
              ) : (
                <>
                  <div className="border border-border">
                    {/* Table header */}
                    <div className="hidden md:grid grid-cols-[24px_60px_1fr_90px_110px_80px_130px] gap-3 px-4 py-2 border-b border-border bg-secondary/50">
                      <input
                        type="checkbox"
                        checked={selected.size === paginated.length && paginated.length > 0}
                        onChange={toggleSelectAll}
                        className="accent-primary mt-0.5"
                      />
                      <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">Image</span>
                      <button onClick={() => toggleSort("title")} className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground text-left flex items-center">
                        Title <SortIcon field="title" />
                      </button>
                      <button onClick={() => toggleSort("category")} className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground text-left flex items-center">
                        Category <SortIcon field="category" />
                      </button>
                      <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">Status</span>
                      <button onClick={() => toggleSort("created_at")} className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground text-left flex items-center">
                        Date <SortIcon field="created_at" />
                      </button>
                      <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground text-right">Actions</span>
                    </div>

                    <div className="divide-y divide-border">
                      {paginated.map((article) => (
                        <div
                          key={article.id}
                          className={`flex md:grid md:grid-cols-[24px_60px_1fr_90px_110px_80px_130px] gap-3 items-center px-4 py-3 hover:bg-secondary/50 transition-colors ${selected.has(article.id) ? "bg-primary/5" : ""}`}
                        >
                          <input
                            type="checkbox"
                            checked={selected.has(article.id)}
                            onChange={() => toggleSelect(article.id)}
                            className="accent-primary shrink-0"
                          />
                          {article.image_url ? (
                            <img src={article.image_url} alt="" className="w-14 h-10 object-cover border border-border" />
                          ) : (
                            <div className="w-14 h-10 bg-muted border border-border flex items-center justify-center shrink-0">
                              <span className="font-meta text-[7px] text-muted-foreground">NO IMG</span>
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-body text-sm text-foreground truncate">{article.title}</p>
                            <span className="font-meta text-[9px] text-muted-foreground">/{article.slug}</span>
                          </div>
                          <span className="font-meta text-[10px] uppercase tracking-wider text-primary hidden md:block">{article.category}</span>

                          {/* Inline publish toggle */}
                          <div className="hidden md:flex items-center gap-2">
                            <button
                              onClick={() => handleTogglePublish(article)}
                              className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none ${article.published ? "bg-green-500" : "bg-muted-foreground/30"}`}
                              title={article.published ? "Unpublish" : "Publish"}
                            >
                              <span className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${article.published ? "translate-x-4" : "translate-x-0.5"}`} />
                            </button>
                            <div className="flex flex-col gap-0">
                              <span className={`font-meta text-[9px] uppercase tracking-wider ${article.published ? "text-green-500" : "text-muted-foreground"}`}>
                                {article.published ? "Live" : "Draft"}
                              </span>
                              {article.is_breaking && (
                                <span className="font-meta text-[9px] uppercase tracking-wider text-primary">Breaking</span>
                              )}
                            </div>
                          </div>

                          <span className="font-meta text-[9px] text-muted-foreground hidden md:block">
                            {new Date(article.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" })}
                          </span>

                          <div className="flex items-center gap-0.5 md:justify-end shrink-0">
                            <button onClick={() => handleEdit(article)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Edit">
                              <Pencil className="h-3.5 w-3.5" />
                            </button>
                            <button onClick={() => handleDuplicate(article)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Duplicate">
                              <Copy className="h-3.5 w-3.5" />
                            </button>
                            {article.published && (
                              <Link to={`/article/${article.slug}`} target="_blank" className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="View live">
                                <ExternalLink className="h-3.5 w-3.5" />
                              </Link>
                            )}
                            <button onClick={() => handleDelete(article.id)} className="p-1.5 text-muted-foreground hover:text-destructive transition-colors" title="Delete">
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-meta text-[10px] text-muted-foreground uppercase tracking-wider">
                        Page {page} of {totalPages} &middot; {filtered.length} articles
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          disabled={page === 1}
                          className="p-1.5 text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                          <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`w-7 h-7 font-meta text-[10px] uppercase tracking-wider transition-colors ${p === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                          >
                            {p}
                          </button>
                        ))}
                        <button
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                          disabled={page === totalPages}
                          className="p-1.5 text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* ── FORM ── */}
          {view === "form" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-heading text-3xl text-foreground tracking-widest">
                    {editingId ? "EDIT ARTICLE" : "NEW ARTICLE"}
                  </h1>
                  {editingId && (
                    <p className="font-meta text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">ID: {editingId}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewOpen(true)}
                    className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary border border-border hover:border-primary px-3 py-1.5 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" /> Preview
                  </button>
                  <button
                    onClick={() => switchView("articles")}
                    className="font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <X className="h-3.5 w-3.5" /> Cancel
                  </button>
                </div>
              </div>

              {/* Shortcut hint */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="font-meta text-[9px] border border-border px-1.5 py-0.5 uppercase tracking-wider">Ctrl+S</span>
                <span className="font-meta text-[9px] uppercase tracking-wider">to save</span>
                {isDirty && (
                  <span className="font-meta text-[9px] uppercase tracking-wider text-primary">&#9679; Unsaved changes</span>
                )}
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                {/* Left column — main content */}
                <div className="space-y-4">
                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Title *</label>
                    <input
                      value={form.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                      placeholder="Article title..."
                    />
                  </div>

                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                      Slug * (auto-generated, URL-safe)
                    </label>
                    <div className="flex gap-2">
                      <input
                        value={form.slug}
                        onChange={(e) => { setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") }); markDirty(); }}
                        className="flex-1 bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                        placeholder="article-slug"
                      />
                      <button
                        type="button"
                        onClick={() => { setForm({ ...form, slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") }); markDirty(); }}
                        className="px-3 border border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors"
                      >
                        Regenerate
                      </button>
                    </div>
                  </div>

                  {/* Content paragraphs */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Content Paragraphs</label>
                      <span className="font-meta text-[9px] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                        <AlignLeft className="h-3 w-3" />
                        {wordCount.total} words total
                      </span>
                    </div>
                    <div className="space-y-2">
                      {form.content.map((para, i) => (
                        <div key={i} className="flex gap-2">
                          {/* Reorder controls */}
                          <div className="flex flex-col items-center gap-0.5 pt-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => moveParagraph(i, -1)}
                              disabled={i === 0}
                              className="text-muted-foreground hover:text-primary disabled:opacity-20 transition-colors"
                              title="Move up"
                            >
                              <ArrowUp className="h-3 w-3" />
                            </button>
                            <span className="font-meta text-[9px] text-muted-foreground">{i + 1}</span>
                            <button
                              type="button"
                              onClick={() => moveParagraph(i, 1)}
                              disabled={i === form.content.length - 1}
                              className="text-muted-foreground hover:text-primary disabled:opacity-20 transition-colors"
                              title="Move down"
                            >
                              <ArrowDown className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="flex-1 relative">
                            <textarea
                              value={para}
                              onChange={(e) => updateContent(i, e.target.value)}
                              rows={3}
                              className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-y"
                              placeholder={`Paragraph ${i + 1}...`}
                            />
                            {wordCount.perPara[i] > 0 && (
                              <span className="absolute bottom-1.5 right-2 font-meta text-[8px] text-muted-foreground pointer-events-none">
                                {wordCount.perPara[i]}w
                              </span>
                            )}
                          </div>
                          {form.content.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeParagraph(i)}
                              className="p-2 text-muted-foreground hover:text-destructive self-start shrink-0 mt-1"
                              title="Remove paragraph"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={addParagraph}
                      className="mt-2 font-meta text-[10px] uppercase tracking-wider text-primary hover:underline flex items-center gap-1"
                    >
                      <Plus className="h-3 w-3" /> Add paragraph
                    </button>
                  </div>

                  {/* SEO / Search Preview */}
                  <div className="border border-border p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                      <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">SEO / Search Preview</p>
                    </div>
                    <div className="bg-secondary/50 p-3 space-y-1">
                      <p className="font-meta text-[10px] text-green-600 dark:text-green-400">
                        toorock.verse/article/{form.slug || "article-slug"}
                      </p>
                      <p className="font-body text-sm text-blue-400 line-clamp-1">
                        {form.title || "Article Title — TooRock Verse"}
                      </p>
                      <p className="font-body text-xs text-muted-foreground line-clamp-2">
                        {form.content.find((p) => p.trim()) || "Article preview text..."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column — metadata */}
                <div className="space-y-4">
                  <ImageUpload
                    value={form.image_url}
                    onChange={(url) => { setForm({ ...form, image_url: url }); markDirty(); }}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Category</label>
                      <select
                        value={form.category}
                        onChange={(e) => { setForm({ ...form, category: e.target.value }); markDirty(); }}
                        className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                      >
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Read Time</label>
                      <input
                        value={form.read_time}
                        onChange={(e) => { setForm({ ...form, read_time: e.target.value }); markDirty(); }}
                        className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Author */}
                  <div className="border border-border p-3 space-y-3">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Author Info</p>
                    <div>
                      <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Name</label>
                      <input
                        value={form.author_name}
                        onChange={(e) => { setForm({ ...form, author_name: e.target.value }); markDirty(); }}
                        className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Role</label>
                        <input
                          value={form.author_role}
                          onChange={(e) => { setForm({ ...form, author_role: e.target.value }); markDirty(); }}
                          className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Initials</label>
                        <input
                          value={form.author_avatar}
                          onChange={(e) => { setForm({ ...form, author_avatar: e.target.value.toUpperCase().slice(0, 2) }); markDirty(); }}
                          className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          maxLength={2}
                          placeholder="AB"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Flags */}
                  <div className="border border-border p-3 space-y-2">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Flags</p>
                    <label className="flex items-center gap-2 cursor-pointer hover:bg-secondary -mx-3 px-3 py-1.5 transition-colors">
                      <input
                        type="checkbox"
                        checked={form.is_breaking}
                        onChange={(e) => { setForm({ ...form, is_breaking: e.target.checked }); markDirty(); }}
                        className="accent-primary"
                      />
                      <div>
                        <span className="font-meta text-xs uppercase tracking-wider text-foreground">Breaking News</span>
                        <p className="font-meta text-[9px] text-muted-foreground">Shows red BREAKING badge</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:bg-secondary -mx-3 px-3 py-1.5 transition-colors">
                      <input
                        type="checkbox"
                        checked={form.published}
                        onChange={(e) => { setForm({ ...form, published: e.target.checked }); markDirty(); }}
                        className="accent-primary"
                      />
                      <div>
                        <span className="font-meta text-xs uppercase tracking-wider text-foreground">Published</span>
                        <p className="font-meta text-[9px] text-muted-foreground">Visible on the site</p>
                      </div>
                    </label>
                  </div>

                  {/* Content stats */}
                  <div className="border border-border p-3">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Content Stats</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <p className="font-heading text-2xl text-foreground">{wordCount.total}</p>
                        <p className="font-meta text-[8px] uppercase tracking-wider text-muted-foreground">Words</p>
                      </div>
                      <div className="text-center">
                        <p className="font-heading text-2xl text-foreground">{form.content.filter((p) => p.trim()).length}</p>
                        <p className="font-meta text-[8px] uppercase tracking-wider text-muted-foreground">Paras</p>
                      </div>
                      <div className="text-center">
                        <p className="font-heading text-2xl text-foreground">{Math.max(1, Math.ceil(wordCount.total / 200))}</p>
                        <p className="font-meta text-[8px] uppercase tracking-wider text-muted-foreground">Min Read</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={saving} className="flex-1 font-meta text-xs uppercase tracking-wider">
                      {saving ? "Saving..." : editingId ? "Update Article" : "Create Article"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => switchView("articles")} className="font-meta text-xs uppercase tracking-wider">
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}

        </main>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
