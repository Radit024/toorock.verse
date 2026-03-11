import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Eye, EyeOff, ArrowLeft, Zap } from "lucide-react";
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

const CATEGORIES = ["Anime", "Games", "Esports", "Culture", "Film"];

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

const AdminDashboard = () => {
  const [articles, setArticles] = useState<DbArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadArticles = async () => {
    setLoading(true);
    try {
      const data = await fetchAllArticles();
      setArticles(data);
    } catch {
      toast({ title: "Error", description: "Failed to load articles", variant: "destructive" });
    }
    setLoading(false);
  };

  useEffect(() => { loadArticles(); }, []);

  const handleNew = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (article: DbArticle) => {
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
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article?")) return;
    try {
      await deleteArticle(id);
      toast({ title: "Deleted", description: "Article removed." });
      loadArticles();
    } catch {
      toast({ title: "Error", description: "Failed to delete", variant: "destructive" });
    }
  };

  const handleTogglePublish = async (article: DbArticle) => {
    try {
      await updateArticle(article.id, { published: !article.published });
      toast({ title: article.published ? "Unpublished" : "Published" });
      loadArticles();
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
        toast({ title: "Updated", description: "Article saved." });
      } else {
        await createArticle(payload);
        toast({ title: "Created", description: "New article added." });
      }
      setShowForm(false);
      loadArticles();
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to save", variant: "destructive" });
    }
    setSaving(false);
  };

  const updateContent = (index: number, value: string) => {
    const updated = [...form.content];
    updated[index] = value;
    setForm({ ...form, content: updated });
  };

  const addParagraph = () => setForm({ ...form, content: [...form.content, ""] });
  const removeParagraph = (index: number) => {
    if (form.content.length <= 1) return;
    setForm({ ...form, content: form.content.filter((_, i) => i !== index) });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-background sticky top-0 z-50">
          <div className="container flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link to="/" className="font-heading text-3xl text-primary tracking-widest">SIGNAL//</Link>
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
                ADMIN PANEL
              </span>
            </div>
            <Link to="/" className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to site
            </Link>
          </div>
        </div>

        <main className="container py-6 max-w-5xl">
          {!showForm ? (
            <>
              {/* Article list */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="font-heading text-3xl text-foreground tracking-widest">MANAGE ARTICLES</h1>
                  <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                    {articles.length} total articles
                  </p>
                </div>
                <Button onClick={handleNew} className="font-meta text-xs uppercase tracking-wider gap-2">
                  <Plus className="h-4 w-4" /> New Article
                </Button>
              </div>

              {loading ? (
                <p className="font-body text-sm text-muted-foreground py-12 text-center">Loading...</p>
              ) : articles.length === 0 ? (
                <div className="border border-border p-12 text-center">
                  <Zap className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground">No articles yet. Create your first one!</p>
                </div>
              ) : (
                <div className="border border-border divide-y divide-border">
                  {articles.map((article) => (
                    <div key={article.id} className="flex items-center gap-4 px-4 py-3 hover:bg-secondary/50 transition-colors">
                      {article.image_url ? (
                        <img src={article.image_url} alt="" className="w-16 h-12 object-cover border border-border shrink-0" />
                      ) : (
                        <div className="w-16 h-12 bg-muted border border-border shrink-0 flex items-center justify-center">
                          <span className="font-meta text-[8px] text-muted-foreground">NO IMG</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-meta text-[9px] uppercase tracking-wider text-primary">{article.category}</span>
                          {article.is_breaking && (
                            <span className="font-meta text-[9px] uppercase tracking-wider bg-primary text-primary-foreground px-1.5 py-0.5">BREAKING</span>
                          )}
                          {!article.published && (
                            <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-0.5">DRAFT</span>
                          )}
                        </div>
                        <p className="font-body text-sm text-foreground truncate">{article.title}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => handleTogglePublish(article)} className="p-2 text-muted-foreground hover:text-primary transition-colors" title={article.published ? "Unpublish" : "Publish"}>
                          {article.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </button>
                        <button onClick={() => handleEdit(article)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleDelete(article.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {/* Article form */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-heading text-3xl text-foreground tracking-widest">
                  {editingId ? "EDIT ARTICLE" : "NEW ARTICLE"}
                </h1>
                <button onClick={() => setShowForm(false)} className="font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                  ← Cancel
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Title *</label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    placeholder="Article title..."
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Slug * (URL-friendly)</label>
                  <input
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })}
                    className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    placeholder="article-slug"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Category</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                    >
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Read time */}
                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Read Time</label>
                    <input
                      value={form.read_time}
                      onChange={(e) => setForm({ ...form, read_time: e.target.value })}
                      className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div>
                  <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Image URL</label>
                  <input
                    value={form.image_url}
                    onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                    className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    placeholder="https://..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Author name */}
                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Author Name</label>
                    <input
                      value={form.author_name}
                      onChange={(e) => setForm({ ...form, author_name: e.target.value })}
                      className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Author Role</label>
                    <input
                      value={form.author_role}
                      onChange={(e) => setForm({ ...form, author_role: e.target.value })}
                      className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Avatar Initials</label>
                    <input
                      value={form.author_avatar}
                      onChange={(e) => setForm({ ...form, author_avatar: e.target.value.toUpperCase().slice(0, 2) })}
                      className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                      maxLength={2}
                    />
                  </div>
                </div>

                {/* Flags */}
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.is_breaking}
                      onChange={(e) => setForm({ ...form, is_breaking: e.target.checked })}
                      className="accent-primary"
                    />
                    <span className="font-meta text-[10px] uppercase tracking-wider text-foreground">Breaking News</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.published}
                      onChange={(e) => setForm({ ...form, published: e.target.checked })}
                      className="accent-primary"
                    />
                    <span className="font-meta text-[10px] uppercase tracking-wider text-foreground">Published</span>
                  </label>
                </div>

                {/* Content paragraphs */}
                <div>
                  <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block mb-2">Content Paragraphs</label>
                  <div className="space-y-2">
                    {form.content.map((para, i) => (
                      <div key={i} className="flex gap-2">
                        <textarea
                          value={para}
                          onChange={(e) => updateContent(i, e.target.value)}
                          rows={3}
                          className="flex-1 bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-y"
                          placeholder={`Paragraph ${i + 1}...`}
                        />
                        {form.content.length > 1 && (
                          <button type="button" onClick={() => removeParagraph(i)} className="p-2 text-muted-foreground hover:text-destructive self-start">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addParagraph} className="mt-2 font-meta text-[10px] uppercase tracking-wider text-primary hover:underline flex items-center gap-1">
                    <Plus className="h-3 w-3" /> Add paragraph
                  </button>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button type="submit" disabled={saving} className="font-meta text-xs uppercase tracking-wider">
                    {saving ? "Saving..." : editingId ? "Update Article" : "Create Article"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="font-meta text-xs uppercase tracking-wider">
                    Cancel
                  </Button>
                </div>
              </form>
            </>
          )}
        </main>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
