import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, ArrowLeft, Zap,
  Search, Filter, BarChart3, FileText, CheckCircle2, AlertCircle,
  RefreshCw, ExternalLink, ChevronDown, ChevronUp, X, Copy,
  ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Activity, Globe, AlignLeft, Menu, Image as ImageIcon,
  Heading1, Heading2, Quote, Pilcrow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
import ImageUpload from "@/components/ImageUpload";
import { supabase } from "@/integrations/supabase/client";
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

type BlockType = "text" | "heading" | "subheading" | "quote" | "image";
interface ContentBlock { id: string; type: BlockType; value: string; }

function contentToBlocks(content: string[]): ContentBlock[] {
  const items = content.filter((s) => s !== undefined);
  if (items.length === 0) return [{ id: crypto.randomUUID(), type: "text", value: "" }];
  return items.map((item) => {
    const id = crypto.randomUUID();
    if (item.startsWith("## ")) return { id, type: "heading" as BlockType, value: item.slice(3) };
    if (item.startsWith("### ")) return { id, type: "subheading" as BlockType, value: item.slice(4) };
    if (item.startsWith("> ")) return { id, type: "quote" as BlockType, value: item.slice(2) };
    if (/^https?:\/\//.test(item)) return { id, type: "image" as BlockType, value: item };
    return { id, type: "text" as BlockType, value: item };
  });
}

function blocksToContent(blockList: ContentBlock[]): string[] {
  return blockList.map((b) => {
    if (b.type === "heading") return `## ${b.value}`;
    if (b.type === "subheading") return `### ${b.value}`;
    if (b.type === "quote") return `> ${b.value}`;
    return b.value;
  }).filter((s) => s.trim() !== "");
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/admin/login", { replace: true });
      } else {
        setAuthed(true);
      }
      setChecked(true);
    });
  }, [navigate]);

  if (!checked || !authed) return null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return <AdminDashboardContent onLogout={handleLogout} />;
};

const AdminDashboardContent = ({ onLogout }: { onLogout: () => void }) => {
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
  const [blocks, setBlocks] = useState<ContentBlock[]>([{ id: crypto.randomUUID(), type: "text", value: "" }]);

  // list filters
  const [menuOpen, setMenuOpen] = useState(false);

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
    const perBlock = blocks.map((b) =>
      b.type !== "image" && b.value.trim() ? b.value.trim().split(/\s+/).length : 0
    );
    return { perBlock, total: perBlock.reduce((a, b) => a + b, 0) };
  }, [blocks]);

  // --- Form handlers ---
  const handleNew = () => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Start a new article anyway?")) return;
    }
    setForm(emptyForm);
    setBlocks([{ id: crypto.randomUUID(), type: "text", value: "" }]);
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
    setBlocks(contentToBlocks(article.content.length > 0 ? article.content : [""]));
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
    setBlocks(contentToBlocks(article.content));
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
        content: blocksToContent(blocks),
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

  const updateBlock = (index: number, value: string) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], value };
    setBlocks(newBlocks);
    markDirty();
  };

  const addBlock = (type: BlockType) => {
    setBlocks([...blocks, { id: crypto.randomUUID(), type, value: "" }]);
    markDirty();
  };

  const removeBlock = (index: number) => {
    if (blocks.length <= 1) return;
    setBlocks(blocks.filter((_, i) => i !== index));
    markDirty();
  };

  const moveBlock = (index: number, dir: -1 | 1) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= blocks.length) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    setBlocks(newBlocks);
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
                {blocks.filter((b) => b.value.trim()).length === 0 ? (
                  <p className="font-body text-sm text-muted-foreground italic">No content yet...</p>
                ) : blocks.filter((b) => b.value.trim()).map((block) => {
                  if (block.type === "image") return (
                    <img key={block.id} src={block.value} alt="" className="w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  );
                  if (block.type === "heading") return (
                    <h2 key={block.id} className="font-heading text-3xl text-foreground tracking-widest leading-tight">{block.value}</h2>
                  );
                  if (block.type === "subheading") return (
                    <h3 key={block.id} className="font-heading text-xl text-foreground tracking-widest leading-tight">{block.value}</h3>
                  );
                  if (block.type === "quote") return (
                    <blockquote key={block.id} className="border-l-2 border-primary pl-4 font-body text-base text-muted-foreground italic leading-relaxed">{block.value}</blockquote>
                  );
                  return <p key={block.id} className="font-body text-base text-foreground leading-relaxed">{block.value}</p>;
                })}
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
                    {blocks.find((b) => b.type === "text" && b.value.trim())?.value || "Article description preview will appear here based on your first paragraph..."}
                  </p>
                </div>
              </div>

              {/* Content stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Words", value: wordCount.total },
                  { label: "Blocks", value: blocks.filter((b) => b.value.trim()).length },
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

        {/* ── MOBILE DRAWER ── */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 sm:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer panel */}
            <div className="absolute top-0 left-0 bottom-0 w-72 bg-background border-r border-border flex flex-col">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-14 border-b border-border shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-2xl text-primary tracking-widest">TooRock</span>
                  <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-0.5">ADMIN</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 py-3 overflow-y-auto">
                <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground px-5 mb-2">Navigation</p>
                {([
                  ["overview", BarChart3, "Overview", activityLog.length > 0 ? String(activityLog.length) : null],
                  ["articles", FileText, "Articles", articles.length > 0 ? String(articles.length) : null],
                  ["form", Plus, editingId ? "Edit Article" : "New Article", null],
                ] as const).map(([v, Icon, label, badge]) => (
                  <button
                    key={v}
                    onClick={() => {
                      if (v === "form") handleNew();
                      else switchView(v as View);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider transition-colors ${
                      view === v
                        ? "text-primary bg-primary/8 border-r-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{label}</span>
                    {badge && (
                      <span className="font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5">{badge}</span>
                    )}
                  </button>
                ))}

                <div className="border-t border-border mt-3 pt-3 mx-5">
                  <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground mb-2">Actions</p>
                </div>
                <button
                  onClick={() => { loadArticles(true); setMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <RefreshCw className={`h-4 w-4 shrink-0 ${refreshing ? "animate-spin" : ""}`} />
                  Refresh data
                </button>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0" />
                  Back to site
                </Link>
              </div>

              {/* Drawer footer */}
              {isDirty && view === "form" && (
                <div className="border-t border-border px-5 py-3 shrink-0">
                  <span className="font-meta text-[10px] uppercase tracking-wider text-primary animate-pulse flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    Unsaved changes
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── HEADER ── */}
        <div className="border-b border-border bg-background sticky top-0 z-40">
          <div className="container flex items-center justify-between h-14 gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen(true)}
                className="sm:hidden p-2 -ml-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <Link to="/" className="font-heading text-xl sm:text-3xl text-primary tracking-widest truncate">TooRock Verse</Link>
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 shrink-0">ADMIN</span>
              {isDirty && view === "form" && (
                <span className="font-meta text-[10px] uppercase tracking-wider text-primary animate-pulse shrink-0 hidden sm:inline">&#9679; Unsaved</span>
              )}
            </div>
            <div className="flex items-center gap-1 sm:gap-3 shrink-0">
              {isDirty && view === "form" && (
                <span className="font-meta text-[10px] text-primary animate-pulse sm:hidden">&#9679;</span>
              )}
              <button
                onClick={() => loadArticles(true)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors hidden sm:block"
                title="Refresh"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              </button>
              <Link to="/" className="hidden sm:flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" /><span>Back to site</span>
              </Link>
              <button
                onClick={onLogout}
                className="hidden sm:flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors"
                title="Sign out"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* ── NAV TABS (desktop) ── */}
        <div className="border-b border-border bg-background hidden sm:block">
          <div className="container flex gap-0 overflow-x-auto scrollbar-none">
            {([
              ["overview", BarChart3, "Overview", activityLog.length > 0 ? String(activityLog.length) : null],
              ["articles", FileText, "Articles", articles.length > 0 ? String(articles.length) : null],
              ["form", Plus, editingId ? "Edit Article" : "New Article", null],
            ] as const).map(([v, Icon, label, badge]) => (
              <button
                key={v}
                onClick={() => { if (v === "form") handleNew(); else switchView(v as View); }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-3 font-meta text-xs uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap shrink-0 ${
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

        {/* ── ACTIVE VIEW BREADCRUMB (mobile) ── */}
        <div className="sm:hidden border-b border-border bg-secondary/30">
          <div className="container flex items-center gap-2 h-9">
            {view === "overview" && <BarChart3 className="h-3.5 w-3.5 text-primary" />}
            {view === "articles" && <FileText className="h-3.5 w-3.5 text-primary" />}
            {view === "form" && <Plus className="h-3.5 w-3.5 text-primary" />}
            <span className="font-meta text-[10px] uppercase tracking-wider text-primary">
              {view === "overview" && "Overview"}
              {view === "articles" && "Articles"}
              {view === "form" && (editingId ? "Edit Article" : "New Article")}
            </span>
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
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="bg-secondary border border-border pl-8 pr-8 py-1.5 text-xs font-meta text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary w-full sm:w-52"
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
                <div className="flex flex-wrap items-center gap-3 px-4 py-2 border border-primary bg-primary/5">
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
                          className={`hover:bg-secondary/50 transition-colors ${selected.has(article.id) ? "bg-primary/5" : ""}`}
                        >
                          {/* ── Mobile card ── */}
                          <div className="md:hidden flex items-start gap-3 px-4 py-3">
                            <input
                              type="checkbox"
                              checked={selected.has(article.id)}
                              onChange={() => toggleSelect(article.id)}
                              className="accent-primary mt-1 shrink-0"
                            />
                            {article.image_url ? (
                              <img src={article.image_url} alt="" className="w-16 h-12 object-cover border border-border shrink-0" />
                            ) : (
                              <div className="w-16 h-12 bg-muted border border-border flex items-center justify-center shrink-0">
                                <span className="font-meta text-[7px] text-muted-foreground">NO IMG</span>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-body text-sm text-foreground leading-snug line-clamp-2">{article.title}</p>
                              <span className="font-meta text-[9px] text-muted-foreground block truncate">/{article.slug}</span>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{article.category}</span>
                                <button
                                  onClick={() => handleTogglePublish(article)}
                                  className={`font-meta text-[9px] uppercase tracking-wider ${article.published ? "text-green-500" : "text-muted-foreground"}`}
                                >
                                  {article.published ? "● Live" : "○ Draft"}
                                </button>
                                {article.is_breaking && (
                                  <span className="font-meta text-[9px] uppercase tracking-wider text-primary border border-primary px-1">Breaking</span>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col gap-0.5 shrink-0">
                              <button onClick={() => handleEdit(article)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Edit">
                                <Pencil className="h-3.5 w-3.5" />
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

                          {/* ── Desktop table row ── */}
                          <div className="hidden md:grid grid-cols-[24px_60px_1fr_90px_110px_80px_130px] gap-3 items-center px-4 py-3">
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
                            <div className="min-w-0">
                              <p className="font-body text-sm text-foreground truncate">{article.title}</p>
                              <span className="font-meta text-[9px] text-muted-foreground">/{article.slug}</span>
                            </div>
                            <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{article.category}</span>
                            <div className="flex items-center gap-2">
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
                            <span className="font-meta text-[9px] text-muted-foreground">
                              {new Date(article.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" })}
                            </span>
                            <div className="flex items-center gap-0.5 justify-end shrink-0">
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
            <div className="space-y-5 pb-24 lg:pb-6">

              {/* ── Form header ── */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-border">
                <div className="min-w-0">
                  <h1 className="font-heading text-2xl sm:text-3xl text-foreground tracking-widest truncate">
                    {editingId ? "EDIT ARTICLE" : "NEW ARTICLE"}
                  </h1>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    {editingId && (
                      <span className="font-meta text-[9px] text-muted-foreground uppercase tracking-wider border border-border px-1.5 py-0.5 truncate max-w-[180px]">
                        {editingId}
                      </span>
                    )}
                    <span className="font-meta text-[9px] border border-border px-1.5 py-0.5 uppercase tracking-wider text-muted-foreground hidden sm:inline">Ctrl+S</span>
                    <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground hidden sm:inline">to save</span>
                    {isDirty && (
                      <span className="font-meta text-[9px] uppercase tracking-wider text-primary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
                        Unsaved
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setPreviewOpen(true)}
                    className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary border border-border hover:border-primary px-2.5 py-2 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" /><span className="hidden sm:inline ml-1">Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => switchView("articles")}
                    className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground border border-border px-2.5 py-2 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" /><span className="hidden sm:inline ml-1">Cancel</span>
                  </button>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">

                {/* ── RIGHT COLUMN — sidebar metadata (comes first on mobile) ── */}
                <div className="space-y-4 order-first lg:order-last">

                  {/* Cover image */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Cover Image</span>
                    </div>
                    <div className="p-3">
                      <ImageUpload
                        value={form.image_url}
                        onChange={(url) => { setForm({ ...form, image_url: url }); markDirty(); }}
                      />
                    </div>
                  </div>

                  {/* Publish status — most prominent */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Publish Settings</span>
                    </div>
                    <div className="divide-y divide-border">
                      {/* Published toggle */}
                      <div
                        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-secondary/50 transition-colors"
                        onClick={() => { setForm((f) => ({ ...f, published: !f.published })); markDirty(); }}
                      >
                        <div>
                          <p className="font-meta text-xs uppercase tracking-wider text-foreground">Published</p>
                          <p className="font-meta text-[9px] text-muted-foreground mt-0.5">Visible on the site</p>
                        </div>
                        <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${form.published ? "bg-green-500" : "bg-muted-foreground/30"}`}>
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.published ? "translate-x-4" : "translate-x-0.5"}`} />
                        </div>
                      </div>
                      {/* Breaking toggle */}
                      <div
                        className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-secondary/50 transition-colors"
                        onClick={() => { setForm((f) => ({ ...f, is_breaking: !f.is_breaking })); markDirty(); }}
                      >
                        <div>
                          <p className="font-meta text-xs uppercase tracking-wider text-foreground">Breaking News</p>
                          <p className="font-meta text-[9px] text-muted-foreground mt-0.5">Shows red BREAKING badge</p>
                        </div>
                        <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${form.is_breaking ? "bg-primary" : "bg-muted-foreground/30"}`}>
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.is_breaking ? "translate-x-4" : "translate-x-0.5"}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category + Read time */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Categorisation</span>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Category</label>
                        <select
                          value={form.category}
                          onChange={(e) => { setForm({ ...form, category: e.target.value }); markDirty(); }}
                          className="w-full bg-background border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                        >
                          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Read Time</label>
                        <input
                          value={form.read_time}
                          onChange={(e) => { setForm({ ...form, read_time: e.target.value }); markDirty(); }}
                          className="w-full bg-background border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Author</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Name</label>
                        <input
                          value={form.author_name}
                          onChange={(e) => { setForm({ ...form, author_name: e.target.value }); markDirty(); }}
                          className="w-full bg-background border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          placeholder="Full name..."
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Role</label>
                          <input
                            value={form.author_role}
                            onChange={(e) => { setForm({ ...form, author_role: e.target.value }); markDirty(); }}
                            className="w-full bg-background border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Initials</label>
                          <input
                            value={form.author_avatar}
                            onChange={(e) => { setForm({ ...form, author_avatar: e.target.value.toUpperCase().slice(0, 2) }); markDirty(); }}
                            className="w-full bg-background border border-border px-3 py-2 font-heading text-lg text-foreground focus:outline-none focus:border-primary text-center"
                            maxLength={2}
                            placeholder="AB"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content stats — horizontal strip */}
                  <div className="grid grid-cols-3 divide-x divide-border border border-border">
                    {[
                      { label: "Words", value: wordCount.total },
                      { label: "Blocks", value: blocks.filter((b) => b.value.trim()).length },
                      { label: "Min Read", value: Math.max(1, Math.ceil(wordCount.total / 200)) },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center py-3">
                        <p className="font-heading text-xl text-foreground">{value}</p>
                        <p className="font-meta text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Save button — visible on desktop sidebar */}
                  <div className="hidden lg:flex gap-2">
                    <Button type="submit" disabled={saving} className="flex-1 font-meta text-xs uppercase tracking-wider h-10">
                      {saving ? "Saving..." : editingId ? "Update Article" : "Publish / Save"}
                    </Button>
                  </div>
                </div>

                {/* ── LEFT COLUMN — main content ── */}
                <div className="space-y-5">

                  {/* Article details panel */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Article Details</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Title *</label>
                        <input
                          value={form.title}
                          onChange={(e) => handleTitleChange(e.target.value)}
                          className="w-full bg-background border border-border px-3 py-2.5 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                          placeholder="Article title..."
                        />
                      </div>
                      <div>
                        <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">
                          Slug * <span className="normal-case tracking-normal">(auto-generated, URL-safe)</span>
                        </label>
                        <div className="flex gap-2">
                          <input
                            value={form.slug}
                            onChange={(e) => { setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") }); markDirty(); }}
                            className="flex-1 min-w-0 bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                            placeholder="article-slug"
                          />
                          <button
                            type="button"
                            onClick={() => { setForm({ ...form, slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") }); markDirty(); }}
                            className="shrink-0 px-3 py-2.5 border border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors"
                          >
                            Regen
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content block editor */}
                  <div className="border border-border">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Content</span>
                      <span className="font-meta text-[9px] text-muted-foreground flex items-center gap-1.5">
                        <AlignLeft className="h-3 w-3" /> {wordCount.total} words · {blocks.length} block{blocks.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      {blocks.map((block, i) => (
                        <div key={block.id} className="border border-border hover:border-primary/40 transition-colors">
                          {/* Block toolbar */}
                          <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-secondary/20">
                            <select
                              value={block.type}
                              onChange={(e) => {
                                const newType = e.target.value as BlockType;
                                const newBlocks = [...blocks];
                                newBlocks[i] = { ...block, type: newType, value: newType === "image" ? "" : block.value };
                                setBlocks(newBlocks);
                                markDirty();
                              }}
                              className="bg-transparent font-meta text-[9px] uppercase tracking-wider text-muted-foreground hover:text-primary focus:outline-none cursor-pointer"
                            >
                              <option value="text">¶ Paragraph</option>
                              <option value="heading">H1 Heading</option>
                              <option value="subheading">H2 Subheading</option>
                              <option value="quote">❝ Quote</option>
                              <option value="image">⬛ Image</option>
                            </select>
                            <div className="flex items-center gap-0.5">
                              {block.type !== "image" && wordCount.perBlock[i] > 0 && (
                                <span className="font-meta text-[9px] text-muted-foreground mr-2">{wordCount.perBlock[i]}w</span>
                              )}
                              <button type="button" onClick={() => moveBlock(i, -1)} disabled={i === 0} className="p-1 text-muted-foreground hover:text-primary disabled:opacity-20 transition-colors" title="Move up">
                                <ArrowUp className="h-3 w-3" />
                              </button>
                              <button type="button" onClick={() => moveBlock(i, 1)} disabled={i === blocks.length - 1} className="p-1 text-muted-foreground hover:text-primary disabled:opacity-20 transition-colors" title="Move down">
                                <ArrowDown className="h-3 w-3" />
                              </button>
                              {blocks.length > 1 && (
                                <button type="button" onClick={() => removeBlock(i)} className="p-1 text-muted-foreground hover:text-destructive transition-colors ml-1" title="Remove block">
                                  <X className="h-3 w-3" />
                                </button>
                              )}
                            </div>
                          </div>
                          {/* Block content */}
                          {block.type === "image" ? (
                            <div className="p-3">
                              <ImageUpload
                                value={block.value}
                                onChange={(url) => {
                                  const newBlocks = [...blocks];
                                  newBlocks[i] = { ...block, value: url };
                                  setBlocks(newBlocks);
                                  markDirty();
                                }}
                              />
                            </div>
                          ) : block.type === "heading" ? (
                            <textarea
                              value={block.value}
                              onChange={(e) => updateBlock(i, e.target.value)}
                              rows={2}
                              className="w-full bg-background px-3 py-2.5 font-heading text-2xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-none"
                              placeholder="Heading text..."
                            />
                          ) : block.type === "subheading" ? (
                            <textarea
                              value={block.value}
                              onChange={(e) => updateBlock(i, e.target.value)}
                              rows={2}
                              className="w-full bg-background px-3 py-2.5 font-heading text-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-none"
                              placeholder="Subheading text..."
                            />
                          ) : block.type === "quote" ? (
                            <div className="flex">
                              <div className="w-1 bg-primary/60 shrink-0 m-2 mr-0 rounded-sm" />
                              <textarea
                                value={block.value}
                                onChange={(e) => updateBlock(i, e.target.value)}
                                rows={3}
                                className="flex-1 bg-background px-3 py-2.5 font-body text-sm text-foreground italic placeholder:text-muted-foreground/40 focus:outline-none resize-y"
                                placeholder="Quote text..."
                              />
                            </div>
                          ) : (
                            <textarea
                              value={block.value}
                              onChange={(e) => updateBlock(i, e.target.value)}
                              rows={4}
                              className="w-full bg-background px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-y"
                              placeholder={`Write paragraph ${i + 1}...`}
                            />
                          )}
                        </div>
                      ))}
                      {/* Add block toolbar */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <button type="button" onClick={() => addBlock("text")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <Pilcrow className="h-3.5 w-3.5" /> Text
                        </button>
                        <button type="button" onClick={() => addBlock("heading")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <Heading1 className="h-3.5 w-3.5" /> Heading
                        </button>
                        <button type="button" onClick={() => addBlock("subheading")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <Heading2 className="h-3.5 w-3.5" /> Subheading
                        </button>
                        <button type="button" onClick={() => addBlock("quote")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <Quote className="h-3.5 w-3.5" /> Quote
                        </button>
                        <button type="button" onClick={() => addBlock("image")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <ImageIcon className="h-3.5 w-3.5" /> Image
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SEO preview panel */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Search Engine Preview</span>
                    </div>
                    <div className="p-4">
                      <div className="bg-secondary/40 border border-border p-4 space-y-1.5">
                        <p className="font-meta text-[10px] text-green-600 dark:text-green-400 truncate">
                          toorock.verse/article/{form.slug || "article-slug"}
                        </p>
                        <p className="font-body text-sm text-blue-400 line-clamp-1">
                          {form.title || "Article Title — TooRock Verse"}
                        </p>
                        <p className="font-body text-xs text-muted-foreground line-clamp-2">
                          {blocks.find((b) => b.type === "text" && b.value.trim())?.value || "Article preview text will appear here based on your first paragraph..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* ── Sticky save bar — mobile only ── */}
              <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-background border-t border-border px-4 py-3 flex gap-2">
                <Button
                  type="button"
                  onClick={() => formRef.current?.requestSubmit()}
                  disabled={saving}
                  className="flex-1 font-meta text-xs uppercase tracking-wider h-10"
                >
                  {saving ? "Saving..." : editingId ? "Update Article" : "Publish / Save"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => switchView("articles")}
                  className="font-meta text-xs uppercase tracking-wider h-10 px-4"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

        </main>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
