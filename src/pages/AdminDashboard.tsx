import { useState, useEffect, useMemo, useCallback, useRef, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, ArrowLeft, Zap,
  Search, Filter, BarChart3, FileText, CheckCircle2, AlertCircle,
  RefreshCw, ExternalLink, ChevronDown, ChevronUp, X, Copy,
  ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Activity, Globe, AlignLeft, Menu, Image as ImageIcon, Bell,
  Heading1, Heading2, Quote, Pilcrow, LogOut, UserCircle2, User, UserPlus, Bold, Table2, Italic, Underline, Strikethrough, Code2, List, GripVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";
import ImageUpload from "@/components/ImageUpload";
import { supabase } from "@/integrations/supabase/client";
import {
  fetchAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  fetchArticleCollaborators,
  fetchArticleCollaborationInvites,
  fetchMyCollaborationInvites,
  inviteCollaborator,
  addCollaborator,
  removeCollaborator,
  respondToCollaborationInvite,
  deleteStorageFilesByUrls,
  fetchAdminUploadLeaderboard,
  type AdminLeaderboardEntry,
  type ArticleCollaborationInvite,
  type IncomingCollaborationInvite,
  type ArticleCollaborator,
  type DbArticle,
} from "@/lib/api";

const CATEGORIES = ["Anime", "Games", "Esports", "Culture", "Movies", "Tech", "Reviews"];
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
  categories: ["Anime"],
  image_url: "",
  author_name: "",
  author_role: "Editor",
  author_avatar: "",
  author_bio: "",
  read_time: "3 min read",
  is_breaking: false,
  owner_id: null as string | null,
  content: [""],
  published: false,
};

type View = "overview" | "articles" | "form" | "notifications" | "profile";
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

type BlockType = "text" | "heading" | "subheading" | "quote" | "image" | "table" | "bullets";
interface ContentBlock { id: string; type: BlockType; value: string; }

const TABLE_BLOCK_PREFIX = "::table::";
const BULLETS_BLOCK_PREFIX = "::bullets::";
const BLOCK_HISTORY_LIMIT = 80;

type InlineFormat = "bold" | "italic" | "underline" | "strike" | "code";

const INLINE_WRAPPERS: Record<InlineFormat, { open: string; close: string; sample: string }> = {
  bold: { open: "**", close: "**", sample: "bold" },
  italic: { open: "*", close: "*", sample: "italic" },
  underline: { open: "__", close: "__", sample: "underline" },
  strike: { open: "~~", close: "~~", sample: "strike" },
  code: { open: "`", close: "`", sample: "code" },
};

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function parseInlineFormatting(text: string): ReactNode[] {
  const withLineBreaks = (value: string, keyPrefix: string): ReactNode[] => {
    const lines = value.split("\n");
    return lines.flatMap((line, idx) => {
      if (idx === 0) return [line];
      return [<br key={`${keyPrefix}-br-${idx}`} />, line];
    });
  };

  const chunks = text.split(/(\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|`[^`]+`|\*[^*]+\*)/g);
  return chunks.map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**") && chunk.length > 4) {
      return <strong key={i} className="font-semibold text-foreground">{withLineBreaks(chunk.slice(2, -2), `b-${i}`)}</strong>;
    }
    if (chunk.startsWith("__") && chunk.endsWith("__") && chunk.length > 4) {
      return <span key={i} className="underline decoration-2 underline-offset-2">{withLineBreaks(chunk.slice(2, -2), `u-${i}`)}</span>;
    }
    if (chunk.startsWith("~~") && chunk.endsWith("~~") && chunk.length > 4) {
      return <span key={i} className="line-through opacity-80">{withLineBreaks(chunk.slice(2, -2), `s-${i}`)}</span>;
    }
    if (chunk.startsWith("`") && chunk.endsWith("`") && chunk.length > 2) {
      return <code key={i} className="font-mono text-[0.92em] px-1 py-0.5 bg-secondary border border-border">{withLineBreaks(chunk.slice(1, -1), `c-${i}`)}</code>;
    }
    if (chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2) {
      return <em key={i} className="italic">{withLineBreaks(chunk.slice(1, -1), `i-${i}`)}</em>;
    }
    return <span key={i}>{withLineBreaks(chunk, `p-${i}`)}</span>;
  });
}

function parseTableRows(raw: string): string[][] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split("|").map((cell) => cell.trim()));
}

function contentToBlocks(content: string[]): ContentBlock[] {
  const items = content.filter((s) => s !== undefined);
  if (items.length === 0) return [{ id: crypto.randomUUID(), type: "text", value: "" }];
  return items.map((item) => {
    const id = crypto.randomUUID();
    if (item.startsWith(TABLE_BLOCK_PREFIX)) return { id, type: "table" as BlockType, value: item.slice(TABLE_BLOCK_PREFIX.length) };
    if (item.startsWith(BULLETS_BLOCK_PREFIX)) return { id, type: "bullets" as BlockType, value: item.slice(BULLETS_BLOCK_PREFIX.length) };
    if (item.startsWith("## ")) return { id, type: "heading" as BlockType, value: item.slice(3) };
    if (item.startsWith("### ")) return { id, type: "subheading" as BlockType, value: item.slice(4) };
    if (item.startsWith("> ")) return { id, type: "quote" as BlockType, value: item.slice(2) };
    if (/^https?:\/\//.test(item)) return { id, type: "image" as BlockType, value: item };
    return { id, type: "text" as BlockType, value: item };
  });
}

function blocksToContent(blockList: ContentBlock[]): string[] {
  return blockList.map((b) => {
    if (b.type === "table") return `${TABLE_BLOCK_PREFIX}${b.value}`;
    if (b.type === "bullets") return `${BULLETS_BLOCK_PREFIX}${b.value}`;
    if (b.type === "heading") return `## ${b.value}`;
    if (b.type === "subheading") return `### ${b.value}`;
    if (b.type === "quote") return `> ${b.value}`;
    return b.value;
  }).filter((s) => s.trim() !== "");
}

function cloneBlocks(blockList: ContentBlock[]): ContentBlock[] {
  return blockList.map((b) => ({ ...b }));
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
  const [collaboratorsMap, setCollaboratorsMap] = useState<Record<string, ArticleCollaborator[]>>({});
  const [invitesMap, setInvitesMap] = useState<Record<string, ArticleCollaborationInvite[]>>({});
  const [incomingInvites, setIncomingInvites] = useState<IncomingCollaborationInvite[]>([]);
  const [availableEditors, setAvailableEditors] = useState<AdminLeaderboardEntry[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [collabArticle, setCollabArticle] = useState<DbArticle | null>(null);
  const [collabOpen, setCollabOpen] = useState(false);
  const [collabEmailInput, setCollabEmailInput] = useState("");
  const [collabLoading, setCollabLoading] = useState(false);
  const [inviteActionId, setInviteActionId] = useState<string | null>(null);
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
  const blockEditorRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const blockPreviewRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const draggedBlockIdRef = useRef<string | null>(null);
  const sessionUploadedImageUrlsRef = useRef<Set<string>>(new Set());
  const [blocks, setBlocks] = useState<ContentBlock[]>([{ id: crypto.randomUUID(), type: "text", value: "" }]);
  const blockHistoryRef = useRef<{ undo: ContentBlock[][]; redo: ContentBlock[][] }>({ undo: [], redo: [] });
  const [dragOverBlockId, setDragOverBlockId] = useState<string | null>(null);
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);

  // profile
  const [profileOpen, setProfileOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profile, setProfile] = useState({ name: "", role: "Editor", avatar: "", bio: "" });
  const [profileSaving, setProfileSaving] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      setCurrentUserId(data.user.id);
      setUserEmail(data.user.email ?? "");
      const m = data.user.user_metadata ?? {};
      setProfile({
        name: m.name ?? "",
        role: m.role ?? "Editor",
        avatar: m.avatar ?? "",
        bio: m.bio ?? "",
      });
    });
  }, []);

  const saveProfile = async () => {
    setProfileSaving(true);
    const { error } = await supabase.auth.updateUser({ data: profile });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Profile saved" });
    }
    setProfileSaving(false);
  };

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

  const isOwner = useCallback((article: DbArticle) => {
    return !!currentUserId && article.owner_id === currentUserId;
  }, [currentUserId]);

  const getArticleCategories = useCallback((article: DbArticle) => {
    return article.categories && article.categories.length > 0 ? article.categories : [article.category];
  }, []);

  const loadCollaborators = useCallback(async (articleId: string) => {
    const list = await fetchArticleCollaborators(articleId);
    setCollaboratorsMap((prev) => ({ ...prev, [articleId]: list }));
  }, []);

  const loadArticleInvites = useCallback(async (articleId: string) => {
    const list = await fetchArticleCollaborationInvites(articleId);
    setInvitesMap((prev) => ({ ...prev, [articleId]: list }));
  }, []);

  const loadIncomingInvites = useCallback(async () => {
    try {
      const list = await fetchMyCollaborationInvites();
      setIncomingInvites(list.filter((item) => item.status === "pending"));
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[AdminDashboard] fetchMyCollaborationInvites error:", msg);
    }
  }, []);

  const loadInviteCandidates = useCallback(async () => {
    try {
      const list = await fetchAdminUploadLeaderboard();
      setAvailableEditors(list);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[AdminDashboard] fetchAdminUploadLeaderboard error:", msg);
      setAvailableEditors([]);
    }
  }, []);

  const handleManageCollaborators = async (article: DbArticle) => {
    if (!isOwner(article)) {
      toast({ title: "Owner only", description: "Only article owner can manage collaborators.", variant: "destructive" });
      return;
    }

    try {
      setCollabArticle(article);
      setCollabEmailInput("");
      setCollabOpen(true);
      setCollabLoading(true);
      await Promise.all([
        loadCollaborators(article.id),
        loadArticleInvites(article.id),
        loadInviteCandidates(),
      ]);
    } catch (error) {
      toast({ title: "Failed to load collaborators", description: getErrorMessage(error), variant: "destructive" });
    } finally {
      setCollabLoading(false);
    }
  };

  const handleInviteCollaborator = async (inviteeId: string) => {
    if (!collabArticle) return;
    try {
      setInviteActionId(inviteeId);
      await inviteCollaborator(collabArticle.id, inviteeId);
      await loadArticleInvites(collabArticle.id);
      toast({ title: "Invite sent", description: "Collaboration invitation has been sent." });
    } catch (error) {
      toast({ title: "Failed to invite", description: getErrorMessage(error), variant: "destructive" });
    } finally {
      setInviteActionId(null);
    }
  };

  const handleRespondInvite = async (inviteId: string, action: "accepted" | "rejected") => {
    try {
      setInviteActionId(inviteId);
      await respondToCollaborationInvite(inviteId, action);
      await Promise.all([loadIncomingInvites(), loadArticles(true)]);
      toast({ title: action === "accepted" ? "Invite accepted" : "Invite rejected" });
    } catch (error) {
      toast({ title: "Failed to respond invite", description: getErrorMessage(error), variant: "destructive" });
    } finally {
      setInviteActionId(null);
    }
  };

  const handleAddCollaborator = async () => {
    if (!collabArticle) return;
    const email = collabEmailInput.trim();
    if (!email) {
      toast({ title: "Email required", description: "Please input collaborator email.", variant: "destructive" });
      return;
    }

    try {
      setCollabLoading(true);
      await addCollaborator(collabArticle.id, email);
      await loadCollaborators(collabArticle.id);
      setCollabEmailInput("");
      toast({ title: "Collaborator added" });
    } catch (error) {
      toast({ title: "Failed to add collaborator", description: getErrorMessage(error), variant: "destructive" });
    } finally {
      setCollabLoading(false);
    }
  };

  const handleRemoveCollaborator = async (collaboratorId: string) => {
    if (!collabArticle) return;
    try {
      setCollabLoading(true);
      await removeCollaborator(collabArticle.id, collaboratorId);
      await loadCollaborators(collabArticle.id);
      toast({ title: "Collaborator removed" });
    } catch (error) {
      toast({ title: "Failed to remove collaborator", description: getErrorMessage(error), variant: "destructive" });
    } finally {
      setCollabLoading(false);
    }
  };

  const handleOpenFormCollaborators = async () => {
    if (!editingId) {
      toast({ title: "Save article first", description: "You can add collaborators after the article is created." });
      return;
    }

    const article = articles.find((a) => a.id === editingId);
    if (!article) {
      toast({ title: "Article not found", description: "Please refresh and try again.", variant: "destructive" });
      return;
    }

    await handleManageCollaborators(article);
  };

  const markDirty = () => setIsDirty(true);

  const registerUploadedImage = useCallback((url: string) => {
    if (!url) return;
    sessionUploadedImageUrlsRef.current.add(url);
  }, []);

  const extractImageUrlsFromBlocks = useCallback((blockList: ContentBlock[]) => {
    return blockList
      .filter((b) => b.type === "image")
      .map((b) => b.value)
      .filter((url) => /^https?:\/\//.test(url));
  }, []);

  const extractImageUrlsFromArticle = useCallback((article: DbArticle) => {
    const cover = article.image_url ? [article.image_url] : [];
    const body = (article.content ?? []).filter((item) => /^https?:\/\//.test(item));
    return [...cover, ...body];
  }, []);

  const cleanupTemporaryUploads = useCallback(async () => {
    const urls = Array.from(sessionUploadedImageUrlsRef.current);
    if (urls.length === 0) return;
    try {
      await deleteStorageFilesByUrls(urls);
    } catch (err) {
      console.error("[AdminDashboard] failed to cleanup temporary uploads:", err);
    } finally {
      sessionUploadedImageUrlsRef.current.clear();
    }
  }, []);

  const switchView = async (newView: View) => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Leave anyway?")) return;
      await cleanupTemporaryUploads();
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
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[AdminDashboard] fetchAllArticles error:", msg);
      toast({ title: "Failed to load articles", description: msg, variant: "destructive" });
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    loadIncomingInvites();
  }, [loadIncomingInvites]);

  useEffect(() => {
    const channel = supabase
      .channel("admin-dashboard-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "articles" }, () => {
        loadArticles(true);
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "article_collaborators" }, () => {
        loadArticles(true);
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "article_collaboration_invites" }, () => {
        loadArticles(true);
        loadIncomingInvites();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadIncomingInvites]);

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
      byCategory: CATEGORIES.map((c) => ({ name: c, count: articles.filter((a) => getArticleCategories(a).includes(c)).length })),
      latestPublish: articles.filter((a) => a.published).sort((a, b) => b.updated_at.localeCompare(a.updated_at))[0] ?? null,
    };
  }, [articles, getArticleCategories]);

  // --- Filtered & sorted list ---
  const filtered = useMemo(() => {
    let list = [...articles];
    if (searchQuery.trim())
      list = list.filter((a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (filterCategory !== "All") list = list.filter((a) => getArticleCategories(a).includes(filterCategory));
    if (filterStatus === "Published") list = list.filter((a) => a.published);
    if (filterStatus === "Draft") list = list.filter((a) => !a.published);
    if (filterStatus === "Breaking") list = list.filter((a) => a.is_breaking);
    list.sort((a, b) => {
      const va = a[sortField] as string;
      const vb = b[sortField] as string;
      return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return list;
  }, [articles, searchQuery, filterCategory, filterStatus, sortField, sortDir, getArticleCategories]);

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
  const handleNew = async () => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Start a new article anyway?")) return;
      await cleanupTemporaryUploads();
    }
    setForm({
      ...emptyForm,
      author_name: profile.name,
      author_role: profile.role,
      author_avatar: profile.avatar,
      author_bio: profile.bio,
    });
    setBlocks([{ id: crypto.randomUUID(), type: "text", value: "" }]);
    blockHistoryRef.current = { undo: [], redo: [] };
    sessionUploadedImageUrlsRef.current.clear();
    setEditingId(null);
    setIsDirty(false);
    setView("form");
  };

  const handleEdit = async (article: DbArticle) => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Switch to this article?")) return;
      await cleanupTemporaryUploads();
    }
    setForm({
      slug: article.slug,
      title: article.title,
      category: article.category,
      categories: getArticleCategories(article),
      image_url: article.image_url || "",
      author_name: article.author_name,
      author_role: article.author_role,
      author_avatar: article.author_avatar,
      author_bio: article.author_bio ?? "",
      read_time: article.read_time,
      is_breaking: article.is_breaking,
      owner_id: article.owner_id,
      content: article.content.length > 0 ? article.content : [""],
      published: article.published,
    });
    setEditingId(article.id);
    setBlocks(contentToBlocks(article.content.length > 0 ? article.content : [""]));
    blockHistoryRef.current = { undo: [], redo: [] };
    sessionUploadedImageUrlsRef.current.clear();
    setIsDirty(false);
    setView("form");
  };

  const handleDuplicate = async (article: DbArticle) => {
    if (view === "form" && isDirty) {
      if (!confirm("You have unsaved changes. Duplicate this article?")) return;
      await cleanupTemporaryUploads();
    }
    setForm({
      slug: `copy-of-${article.slug}`,
      title: `Copy of ${article.title}`,
      category: article.category,
      categories: getArticleCategories(article),
      image_url: article.image_url || "",
      author_name: article.author_name,
      author_role: article.author_role,
      author_avatar: article.author_avatar,
      author_bio: article.author_bio ?? "",
      read_time: article.read_time,
      is_breaking: false,
      owner_id: article.owner_id,
      content: [...article.content],
      published: false,
    });
    setEditingId(null);
    setBlocks(contentToBlocks(article.content));
    blockHistoryRef.current = { undo: [], redo: [] };
    sessionUploadedImageUrlsRef.current.clear();
    setIsDirty(true);
    setView("form");
    toast({ title: "Duplicated", description: "Edit and save as a new article." });
  };

  const handleDelete = async (id: string) => {
    const art = articles.find((a) => a.id === id);
    if (!confirm("Delete this article?")) return;
    try {
      await deleteArticle(id);
      if (art) {
        const imageUrls = extractImageUrlsFromArticle(art);
        if (imageUrls.length > 0) {
          try {
            await deleteStorageFilesByUrls(imageUrls);
          } catch (imgErr) {
            console.error("[AdminDashboard] failed to delete article images:", imgErr);
          }
        }
      }
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
      const selectedArticles = articles.filter((a) => selected.has(a.id));
      await Promise.all([...selected].map((id) => deleteArticle(id)));
      const allImageUrls = selectedArticles.flatMap((article) => extractImageUrlsFromArticle(article));
      if (allImageUrls.length > 0) {
        try {
          await deleteStorageFilesByUrls(allImageUrls);
        } catch (imgErr) {
          console.error("[AdminDashboard] failed to delete some bulk article images:", imgErr);
        }
      }
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
      const normalizedCategories = Array.from(new Set((form.categories || []).filter(Boolean)));
      const primaryCategory = normalizedCategories[0] || form.category || CATEGORIES[0];
      const payload = {
        ...form,
        category: primaryCategory,
        categories: normalizedCategories.length > 0 ? normalizedCategories : [primaryCategory],
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

      const referencedUrls = new Set<string>([
        ...(payload.image_url ? [payload.image_url] : []),
        ...extractImageUrlsFromBlocks(blocks),
      ]);

      const uploadedUrls = Array.from(sessionUploadedImageUrlsRef.current);
      const removable = uploadedUrls.filter((url) => !referencedUrls.has(url));
      if (removable.length > 0) {
        try {
          await deleteStorageFilesByUrls(removable);
        } catch (cleanupErr) {
          console.error("[AdminDashboard] failed to cleanup unreferenced uploads after save:", cleanupErr);
        }
      }
      sessionUploadedImageUrlsRef.current.clear();

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

  const toggleFormCategory = (category: string) => {
    setForm((prev) => {
      const exists = prev.categories.includes(category);
      const nextCategories = exists
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];

      const guaranteed = nextCategories.length > 0 ? nextCategories : [category];
      return {
        ...prev,
        categories: guaranteed,
        category: guaranteed[0],
      };
    });
    markDirty();
  };

  const updateBlock = (index: number, value: string) => {
    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], value };
    setBlocks(newBlocks);
    markDirty();
  };

  const addBlock = (type: BlockType) => {
    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];
    setBlocks([...blocks, { id: crypto.randomUUID(), type, value: "" }]);
    markDirty();
  };

  const removeBlock = (index: number) => {
    if (blocks.length <= 1) return;
    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];
    setBlocks(blocks.filter((_, i) => i !== index));
    markDirty();
  };

  const moveBlock = (index: number, dir: -1 | 1) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= blocks.length) return;
    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    setBlocks(newBlocks);
    markDirty();
  };

  const moveBlockById = useCallback((fromId: string, toId: string) => {
    if (fromId === toId) return;

    const fromIndex = blocks.findIndex((b) => b.id === fromId);
    const toIndex = blocks.findIndex((b) => b.id === toId);
    if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;

    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];

    const reordered = [...blocks];
    const [moved] = reordered.splice(fromIndex, 1);
    reordered.splice(toIndex, 0, moved);
    setBlocks(reordered);
    markDirty();
  }, [blocks, markDirty]);

  const undoBlocks = useCallback(() => {
    const prev = blockHistoryRef.current.undo.pop();
    if (!prev) return;
    blockHistoryRef.current.redo.push(cloneBlocks(blocks));
    setBlocks(cloneBlocks(prev));
    markDirty();
  }, [blocks, markDirty]);

  const redoBlocks = useCallback(() => {
    const next = blockHistoryRef.current.redo.pop();
    if (!next) return;
    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    setBlocks(cloneBlocks(next));
    markDirty();
  }, [blocks, markDirty]);

  const applyInlineFormat = useCallback((blockId: string, format: InlineFormat) => {
    const textarea = blockEditorRefs.current[blockId];
    const block = blocks.find((b) => b.id === blockId);
    if (!textarea || !block || block.type === "image") return;

    const wrapper = INLINE_WRAPPERS[format];

    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const source = block.value;
    const hasSelection = end > start;

    let nextValue = source;
    let nextStart = start;
    let nextEnd = end;

    if (hasSelection) {
      const selected = source.slice(start, end);
      nextValue = `${source.slice(0, start)}${wrapper.open}${selected}${wrapper.close}${source.slice(end)}`;
      nextStart = start + wrapper.open.length;
      nextEnd = end + wrapper.open.length;
    } else {
      const insert = `${wrapper.open}${wrapper.sample}${wrapper.close}`;
      nextValue = `${source.slice(0, start)}${insert}${source.slice(start)}`;
      nextStart = start + wrapper.open.length;
      nextEnd = start + wrapper.open.length + wrapper.sample.length;
    }

    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];
    setBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, value: nextValue } : b)));
    markDirty();

    requestAnimationFrame(() => {
      const el = blockEditorRefs.current[blockId];
      if (!el) return;
      el.focus();
      el.setSelectionRange(nextStart, nextEnd);
    });
  }, [blocks, markDirty]);

  const applyBulletsToBlock = useCallback((blockId: string) => {
    const textarea = blockEditorRefs.current[blockId];
    const block = blocks.find((b) => b.id === blockId);
    if (!textarea || !block || block.type === "image") return;

    const source = block.value;
    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const lineStart = source.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
    const rawLineEnd = source.indexOf("\n", end);
    const lineEnd = rawLineEnd === -1 ? source.length : rawLineEnd;
    const selectedLines = source.slice(lineStart, lineEnd);
    const lines = selectedLines.split("\n");

    const allBulleted = lines.every((line) => line.trim() === "" || /^\s*(?:[-*]|•)\s+/.test(line));
    const transformed = lines.map((line) => {
      if (line.trim() === "") return line;
      if (allBulleted) return line.replace(/^(\s*)(?:[-*]|•)\s+/, "$1");
      return /^\s*(?:[-*]|•)\s+/.test(line) ? line : `• ${line}`;
    }).join("\n");

    const nextValue = `${source.slice(0, lineStart)}${transformed}${source.slice(lineEnd)}`;
    blockHistoryRef.current.undo.push(cloneBlocks(blocks));
    if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
    blockHistoryRef.current.redo = [];
    setBlocks((prev) => prev.map((b) => (b.id === blockId ? { ...b, value: nextValue } : b)));
    markDirty();

    requestAnimationFrame(() => {
      const el = blockEditorRefs.current[blockId];
      if (!el) return;
      el.focus();
      el.setSelectionRange(lineStart, lineStart + transformed.length);
    });
  }, [blocks, markDirty]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      const active = document.activeElement;
      if (!(active instanceof HTMLTextAreaElement)) return;
      const blockId = active.dataset.blockId;
      if (!blockId) return;

      const key = e.key.toLowerCase();
      if (key === "b") {
        e.preventDefault();
        applyInlineFormat(blockId, "bold");
      } else if (key === "i") {
        e.preventDefault();
        applyInlineFormat(blockId, "italic");
      } else if (key === "u") {
        e.preventDefault();
        applyInlineFormat(blockId, "underline");
      } else if (e.shiftKey && key === "x") {
        e.preventDefault();
        applyInlineFormat(blockId, "strike");
      } else if (e.shiftKey && key === "k") {
        e.preventDefault();
        applyInlineFormat(blockId, "code");
      } else if (e.shiftKey && (key === "8" || key === "l")) {
        e.preventDefault();
        applyBulletsToBlock(blockId);
      } else if (key === "z" && !e.shiftKey) {
        e.preventDefault();
        undoBlocks();
      } else if ((key === "y" && !e.shiftKey) || (key === "z" && e.shiftKey)) {
        e.preventDefault();
        redoBlocks();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [applyInlineFormat, applyBulletsToBlock, undoBlocks, redoBlocks]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });
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

  const syncFormattedEditorScroll = useCallback((blockId: string) => {
    const editor = blockEditorRefs.current[blockId];
    const preview = blockPreviewRefs.current[blockId];
    if (!editor || !preview) return;
    preview.scrollTop = editor.scrollTop;
    preview.scrollLeft = editor.scrollLeft;
  }, []);

  const renderInlineOverlayContent = useCallback((block: ContentBlock, placeholder: string) => {
    if (!block.value) {
      return <span className="text-muted-foreground/40">{placeholder}</span>;
    }

    return (
      <span className="whitespace-pre-wrap break-words">
        {parseInlineFormatting(block.value)}
      </span>
    );
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">

        {/* ── COLLABORATION MODAL ── */}
        {collabOpen && collabArticle && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xl border border-border bg-background">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div>
                  <p className="font-heading text-lg tracking-widest text-foreground">COLLABORATION</p>
                  <p className="font-body text-xs text-muted-foreground line-clamp-1">{collabArticle.title}</p>
                </div>
                <button
                  onClick={() => setCollabOpen(false)}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex gap-2">
                  <input
                    value={collabEmailInput}
                    onChange={(e) => setCollabEmailInput(e.target.value)}
                    placeholder="admin@email.com"
                    className="flex-1 bg-background border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  />
                  <Button
                    type="button"
                    onClick={handleAddCollaborator}
                    disabled={collabLoading}
                    className="font-meta text-xs uppercase tracking-wider"
                  >
                    Add
                  </Button>
                </div>

                <div className="border border-border">
                  <div className="px-3 py-2 border-b border-border bg-secondary/40">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Collaborators</p>
                  </div>
                  <div className="divide-y divide-border max-h-64 overflow-y-auto">
                    {collabLoading && (
                      <p className="font-body text-xs text-muted-foreground px-3 py-3">Loading...</p>
                    )}
                    {!collabLoading && (collaboratorsMap[collabArticle.id] ?? []).length === 0 && (
                      <p className="font-body text-xs text-muted-foreground px-3 py-3">No collaborators yet.</p>
                    )}
                    {!collabLoading && (collaboratorsMap[collabArticle.id] ?? []).map((collab) => (
                      <div key={collab.collaborator_id} className="flex items-center justify-between px-3 py-2.5">
                        <div className="min-w-0">
                          <p className="font-body text-sm text-foreground truncate">{collab.email}</p>
                          <p className="font-meta text-[9px] text-muted-foreground">Added {new Date(collab.added_at).toLocaleDateString("en-GB")}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveCollaborator(collab.collaborator_id)}
                          className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-border">
                  <div className="px-3 py-2 border-b border-border bg-secondary/40">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Pending Invites</p>
                  </div>
                  <div className="divide-y divide-border max-h-40 overflow-y-auto">
                    {((invitesMap[collabArticle.id] ?? []).filter((invite) => invite.status === "pending")).length === 0 && (
                      <p className="font-body text-xs text-muted-foreground px-3 py-3">No pending invites.</p>
                    )}
                    {(invitesMap[collabArticle.id] ?? [])
                      .filter((invite) => invite.status === "pending")
                      .map((invite) => (
                        <div key={invite.invite_id} className="px-3 py-2.5">
                          <p className="font-body text-sm text-foreground truncate">{invite.invitee_email}</p>
                          <p className="font-meta text-[9px] text-muted-foreground">
                            Invited {new Date(invite.created_at).toLocaleDateString("en-GB")}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="border border-border">
                  <div className="px-3 py-2 border-b border-border bg-secondary/40">
                    <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Invite Editors</p>
                  </div>
                  <div className="divide-y divide-border max-h-56 overflow-y-auto">
                    {availableEditors.length === 0 && (
                      <p className="font-body text-xs text-muted-foreground px-3 py-3">No editors available.</p>
                    )}
                    {availableEditors.map((editor) => {
                      const existingCollaborators = new Set((collaboratorsMap[collabArticle.id] ?? []).map((item) => item.collaborator_id));
                      const pendingInvites = new Set(
                        (invitesMap[collabArticle.id] ?? [])
                          .filter((invite) => invite.status === "pending")
                          .map((invite) => invite.invitee_id)
                      );
                      const isSelf = editor.user_id === currentUserId;
                      const isAlreadyCollaborator = existingCollaborators.has(editor.user_id);
                      const isPending = pendingInvites.has(editor.user_id);
                      const disabled = isSelf || isAlreadyCollaborator || isPending || !!inviteActionId;

                      return (
                        <div key={editor.user_id} className="flex items-center justify-between px-3 py-2.5 gap-2">
                          <div className="min-w-0">
                            <p className="font-body text-sm text-foreground truncate">{editor.display_name || editor.user_id}</p>
                            <p className="font-meta text-[9px] text-muted-foreground truncate">{editor.user_id}</p>
                          </div>
                          <button
                            type="button"
                            disabled={disabled}
                            onClick={() => handleInviteCollaborator(editor.user_id)}
                            className="font-meta text-[10px] uppercase tracking-wider border px-2.5 py-1.5 transition-colors border-border text-muted-foreground hover:text-primary hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            {isSelf ? "You" : isAlreadyCollaborator ? "Added" : isPending ? "Invited" : "Invite"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
                  if (block.type === "table") {
                    const rows = parseTableRows(block.value);
                    if (rows.length === 0) return null;
                    const [head, ...body] = rows;
                    return (
                      <div key={block.id} className="overflow-x-auto border border-border">
                        <table className="w-full border-collapse">
                          <thead className="bg-secondary/40">
                            <tr>
                              {head.map((cell, ci) => (
                                <th key={ci} className="border border-border px-3 py-2 text-left font-meta text-[10px] uppercase tracking-wider text-foreground">
                                  {parseInlineFormatting(cell)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {body.map((row, ri) => (
                              <tr key={ri} className="hover:bg-secondary/20">
                                {head.map((_, ci) => (
                                  <td key={ci} className="border border-border px-3 py-2 font-body text-sm text-foreground/90">
                                    {parseInlineFormatting(row[ci] ?? "")}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (block.type === "bullets") {
                    const points = block.value
                      .split("\n")
                      .map((line) => line.replace(/^\s*(?:[-*]|•)\s?/, "").trim())
                      .filter(Boolean);
                    if (points.length === 0) return null;
                    return (
                      <ul key={block.id} className="list-disc pl-6 space-y-1">
                        {points.map((point, pi) => (
                          <li key={pi} className="font-body text-base text-foreground leading-relaxed">{parseInlineFormatting(point)}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "heading") return (
                    <h2 key={block.id} className="font-heading text-3xl text-foreground tracking-widest leading-tight">{parseInlineFormatting(block.value)}</h2>
                  );
                  if (block.type === "subheading") return (
                    <h3 key={block.id} className="font-heading text-xl text-foreground tracking-widest leading-tight">{parseInlineFormatting(block.value)}</h3>
                  );
                  if (block.type === "quote") return (
                    <blockquote key={block.id} className="border-l-2 border-primary pl-4 font-body text-base text-muted-foreground italic leading-relaxed">{parseInlineFormatting(block.value)}</blockquote>
                  );
                  return <p key={block.id} className="font-body text-base text-foreground leading-relaxed">{parseInlineFormatting(block.value)}</p>;
                })}
              </div>

              {/* SEO snippet preview */}
              <div className="mt-12 pt-6 border-t border-border">
                <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Globe className="h-3 w-3" /> Search Engine Preview
                </p>
                <div className="border border-border p-4 space-y-1 bg-secondary/30">
                  <p className="font-meta text-[10px] text-green-600 dark:text-green-400">
                    ToRock.verse/article/{form.slug || "article-slug"}
                  </p>
                  <p className="font-body text-sm text-blue-400 hover:underline cursor-pointer">
                    {form.title || "Article Title — ToRock Verse"}
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
                  <span className="font-heading text-2xl text-primary tracking-widest">ToRock</span>
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
                  ["notifications", Bell, "Notifications", incomingInvites.length > 0 ? String(incomingInvites.length) : null],
                  ["form", Plus, editingId ? "Edit Article" : "New Article", null],
                ] as const).map(([v, Icon, label, badge]) => (
                  <button
                    key={v}
                    onClick={() => {
                      if (v === "form") handleNew();
                      else switchView(v as View);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider transition-colors ${view === v
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
                <Link
                  to="/admin/leaderboard"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <BarChart3 className="h-4 w-4 shrink-0" />
                  Leaderboard
                </Link>

                <div className="border-t border-border mt-3 pt-3 mx-5">
                  <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground mb-2">Account</p>
                </div>
                <button
                  onClick={() => { switchView("profile"); setMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider transition-colors ${view === "profile" ? "text-primary bg-primary/8 border-r-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                >
                  <UserCircle2 className="h-4 w-4 shrink-0" />
                  Profile
                </button>
                <button
                  onClick={() => { setMenuOpen(false); onLogout(); }}
                  className="w-full flex items-center gap-3 px-5 py-3 font-meta text-sm uppercase tracking-wider text-muted-foreground hover:text-destructive hover:bg-secondary/60 transition-colors"
                >
                  <LogOut className="h-4 w-4 shrink-0" />
                  Sign out
                </button>
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
              <Link to="/" className="font-heading text-xl sm:text-3xl text-primary tracking-widest truncate">ToRock Verse</Link>
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 shrink-0">ADMIN</span>
              {isDirty && view === "form" && (
                <span className="font-meta text-[10px] uppercase tracking-wider text-primary animate-pulse shrink-0 hidden sm:inline">&#9679; Unsaved</span>
              )}
            </div>
            <div className="flex items-center gap-1 sm:gap-3 shrink-0">
              {isDirty && view === "form" && (
                <span className="font-meta text-[10px] text-primary animate-pulse sm:hidden">&#9679;</span>
              )}
              <ThemeToggle />
              <button
                onClick={() => switchView("notifications")}
                className="hidden sm:flex items-center gap-1.5 border border-border px-2.5 py-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary transition-colors relative"
                title="Notifications"
              >
                <Bell className="h-3.5 w-3.5" />
                <span>Notifications</span>
                {incomingInvites.length > 0 && (
                  <span className="font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5">{incomingInvites.length}</span>
                )}
              </button>
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
              <Link to="/admin/leaderboard" className="hidden sm:flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                <BarChart3 className="h-3.5 w-3.5" /><span>Leaderboard</span>
              </Link>
              {/* Profile dropdown */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setProfileOpen((v) => !v)}
                  className="flex items-center gap-2 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border border-border px-2.5 py-1.5"
                >
                  <div className="w-5 h-5 bg-primary flex items-center justify-center font-heading text-[10px] text-primary-foreground">
                    {profile.avatar || <User className="h-3 w-3" />}
                  </div>
                  <span className="max-w-[80px] truncate">{profile.name || userEmail.split("@")[0] || "Admin"}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                {profileOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                    <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-border shadow-lg z-50">
                      <div className="px-4 py-3 border-b border-border">
                        <p className="font-body text-sm text-foreground truncate">{profile.name || "Admin"}</p>
                        <p className="font-meta text-[10px] text-muted-foreground truncate">{userEmail}</p>
                      </div>
                      <button
                        onClick={() => {
                          setProfileOpen(false);
                          switchView("notifications");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
                      >
                        <Bell className="h-3.5 w-3.5" />
                        <span>Notifications</span>
                        {incomingInvites.length > 0 && (
                          <span className="ml-auto font-meta text-[9px] bg-primary/15 text-primary px-1.5 py-0.5">
                            {incomingInvites.length}
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => { setProfileOpen(false); switchView("profile"); }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
                      >
                        <UserCircle2 className="h-3.5 w-3.5" /> Profile
                      </button>
                      <button
                        onClick={() => { setProfileOpen(false); onLogout(); }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive hover:bg-secondary/60 transition-colors"
                      >
                        <LogOut className="h-3.5 w-3.5" /> Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── NAV TABS (desktop) ── */}
        <div className="border-b border-border bg-background hidden sm:block">
          <div className="container flex gap-0 overflow-x-auto scrollbar-none">
            {([
              ["overview", BarChart3, "Overview", activityLog.length > 0 ? String(activityLog.length) : null],
              ["articles", FileText, "Articles", articles.length > 0 ? String(articles.length) : null],
              ["notifications", Bell, "Notifications", incomingInvites.length > 0 ? String(incomingInvites.length) : null],
              ["form", Plus, editingId ? "Edit Article" : "New Article", null],
            ] as const).map(([v, Icon, label, badge]) => (
              <button
                key={v}
                onClick={() => { if (v === "form") handleNew(); else switchView(v as View); }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-3 font-meta text-xs uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap shrink-0 ${view === v ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
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
            {view === "notifications" && <Bell className="h-3.5 w-3.5 text-primary" />}
            {view === "form" && <Plus className="h-3.5 w-3.5 text-primary" />}
            <span className="font-meta text-[10px] uppercase tracking-wider text-primary">
              {view === "overview" && "Overview"}
              {view === "articles" && "Articles"}
              {view === "notifications" && "Notifications"}
              {view === "form" && (editingId ? "Edit Article" : "New Article")}
            </span>
          </div>
        </div>

        <main className="container py-6 max-w-6xl">
          {view === "notifications" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="font-heading text-3xl text-foreground tracking-widest">NOTIFICATIONS</h1>
                <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                  {incomingInvites.length} pending
                </span>
              </div>

              {incomingInvites.length === 0 ? (
                <div className="border border-border p-10 text-center">
                  <Bell className="h-8 w-8 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground">No collaboration invitations right now.</p>
                </div>
              ) : (
                <div className="border border-primary/40 bg-primary/5">
                  <div className="px-4 py-3 border-b border-primary/30 flex items-center justify-between">
                    <h2 className="font-heading text-lg tracking-widest text-foreground">INVITATION NOTIFICATIONS</h2>
                    <span className="font-meta text-[10px] uppercase tracking-wider text-primary">{incomingInvites.length} pending</span>
                  </div>
                  <div className="divide-y divide-primary/20">
                    {incomingInvites.map((invite) => (
                      <div key={invite.invite_id} className="px-4 py-3 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-body text-sm text-foreground truncate">
                            Invite to collaborate on: <span className="font-semibold">{invite.article_title}</span>
                          </p>
                          <p className="font-meta text-[10px] text-muted-foreground truncate">
                            From {invite.inviter_email} • {new Date(invite.created_at).toLocaleDateString("en-GB")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleRespondInvite(invite.invite_id, "accepted")}
                            disabled={inviteActionId === invite.invite_id}
                            className="font-meta text-[10px] uppercase tracking-wider border border-green-500 text-green-500 hover:bg-green-500/10 px-2.5 py-1.5 transition-colors disabled:opacity-40"
                          >
                            Accept
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRespondInvite(invite.invite_id, "rejected")}
                            disabled={inviteActionId === invite.invite_id}
                            className="font-meta text-[10px] uppercase tracking-wider border border-destructive text-destructive hover:bg-destructive/10 px-2.5 py-1.5 transition-colors disabled:opacity-40"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

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
                        {isOwner(a) && (
                          <button onClick={() => handleManageCollaborators(a)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Manage Collaborators">
                            <UserPlus className="h-3.5 w-3.5" />
                          </button>
                        )}
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
                              {isOwner(article) && (
                                <button onClick={() => handleManageCollaborators(article)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Manage Collaborators">
                                  <UserPlus className="h-3.5 w-3.5" />
                                </button>
                              )}
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
                    onClick={handleOpenFormCollaborators}
                    disabled={!editingId}
                    className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary border border-border hover:border-primary px-2.5 py-2 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    title={editingId ? "Add collaborator" : "Save article first"}
                  >
                    <UserPlus className="h-3.5 w-3.5" /><span className="hidden sm:inline ml-1">Add Collaborator</span>
                  </button>
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
                        onUploaded={registerUploadedImage}
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

                  {/* Categories + Read time */}
                  <div className="border border-border">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                      <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Categorisation</span>
                    </div>
                    <div className="p-4 grid grid-cols-1 gap-3">
                      <div>
                        <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Categories</label>
                        <div className="grid grid-cols-2 gap-2">
                          {CATEGORIES.map((c) => {
                            const selected = form.categories.includes(c);
                            return (
                              <button
                                key={c}
                                type="button"
                                onClick={() => toggleFormCategory(c)}
                                className={`px-2 py-1.5 border font-meta text-[10px] uppercase tracking-wider transition-colors text-left ${selected ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:text-foreground hover:border-primary"}`}
                              >
                                {c}
                              </button>
                            );
                          })}
                        </div>
                        <p className="font-meta text-[9px] text-muted-foreground mt-2">
                          Primary: {form.categories[0] || form.category}
                        </p>
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

                  {/* Publish toggle */}
                  <div className="border border-border p-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-meta text-[10px] uppercase tracking-wider text-foreground">
                        {form.published ? "Published" : "Draft"}
                      </p>
                      <p className="font-body text-[11px] text-muted-foreground mt-0.5">
                        {form.published ? "Visible on main page" : "Not visible to readers"}
                      </p>
                    </div>
                    <Switch
                      checked={form.published}
                      onCheckedChange={(v) => { setForm({ ...form, published: v }); markDirty(); }}
                    />
                  </div>

                  {/* Save button — visible on desktop sidebar */}
                  <div className="hidden lg:flex gap-2">
                    <Button type="submit" disabled={saving} className="flex-1 font-meta text-xs uppercase tracking-wider h-10">
                      {saving ? "Saving..." : editingId ? "Update" : "Save"}
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
                    <div className="px-4 py-2 border-b border-border bg-secondary/20 font-meta text-[9px] uppercase tracking-wider text-muted-foreground">
                      Shortcuts: Ctrl+B Bold · Ctrl+I Italic · Ctrl+U Underline · Ctrl+Shift+X Strike · Ctrl+Shift+K Code · Ctrl+Shift+8 Bullets · Ctrl+Z Undo · Ctrl+Y / Ctrl+Shift+Z Redo
                    </div>
                    <div className="p-4 space-y-2">
                      {blocks.map((block, i) => (
                        <div
                          key={block.id}
                          className={`border transition-colors ${dragOverBlockId === block.id ? "border-primary" : "border-border hover:border-primary/40"}`}
                          onDragOver={(e) => {
                            e.preventDefault();
                            if (draggedBlockIdRef.current && draggedBlockIdRef.current !== block.id) {
                              e.dataTransfer.dropEffect = "move";
                              setDragOverBlockId(block.id);
                            }
                          }}
                          onDragLeave={() => {
                            if (dragOverBlockId === block.id) setDragOverBlockId(null);
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            const draggedId = draggedBlockIdRef.current || e.dataTransfer.getData("text/plain");
                            if (draggedId) moveBlockById(draggedId, block.id);
                            draggedBlockIdRef.current = null;
                            setDragOverBlockId(null);
                          }}
                        >
                          {/* Block toolbar */}
                          <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-secondary/20">
                            <select
                              value={block.type}
                              onChange={(e) => {
                                const newType = e.target.value as BlockType;
                                blockHistoryRef.current.undo.push(cloneBlocks(blocks));
                                if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
                                blockHistoryRef.current.redo = [];
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
                              <option value="bullets">• Bullets</option>
                              <option value="table">▦ Table</option>
                              <option value="image">⬛ Image</option>
                            </select>
                            <div className="flex items-center gap-0.5">
                              <button
                                type="button"
                                draggable
                                onDragStart={(e) => {
                                  draggedBlockIdRef.current = block.id;
                                  e.dataTransfer.effectAllowed = "move";
                                  e.dataTransfer.setData("text/plain", block.id);
                                }}
                                onDragEnd={() => {
                                  draggedBlockIdRef.current = null;
                                  setDragOverBlockId(null);
                                }}
                                className="p-1 text-muted-foreground hover:text-primary transition-colors cursor-grab active:cursor-grabbing"
                                title="Drag to reorder"
                              >
                                <GripVertical className="h-3 w-3" />
                              </button>
                              {block.type !== "image" && wordCount.perBlock[i] > 0 && (
                                <span className="font-meta text-[9px] text-muted-foreground mr-2">{wordCount.perBlock[i]}w</span>
                              )}
                              {block.type !== "image" && (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => applyInlineFormat(block.id, "bold")}
                                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                    title="Bold (**text**)"
                                  >
                                    <Bold className="h-3 w-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => applyInlineFormat(block.id, "italic")}
                                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                    title="Italic (*text*)"
                                  >
                                    <Italic className="h-3 w-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => applyInlineFormat(block.id, "underline")}
                                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                    title="Underline (__text__)"
                                  >
                                    <Underline className="h-3 w-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => applyInlineFormat(block.id, "strike")}
                                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                    title="Strikethrough (~~text~~)"
                                  >
                                    <Strikethrough className="h-3 w-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => applyInlineFormat(block.id, "code")}
                                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                    title="Code (`text`)"
                                  >
                                    <Code2 className="h-3 w-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => applyBulletsToBlock(block.id)}
                                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                    title="Bullets (Ctrl+Shift+8)"
                                  >
                                    <List className="h-3 w-3" />
                                  </button>
                                </>
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
                                onUploaded={registerUploadedImage}
                                onChange={(url) => {
                                  blockHistoryRef.current.undo.push(cloneBlocks(blocks));
                                  if (blockHistoryRef.current.undo.length > BLOCK_HISTORY_LIMIT) blockHistoryRef.current.undo.shift();
                                  blockHistoryRef.current.redo = [];
                                  const newBlocks = [...blocks];
                                  newBlocks[i] = { ...block, value: url };
                                  setBlocks(newBlocks);
                                  markDirty();
                                }}
                              />
                            </div>
                          ) : block.type === "bullets" ? (
                            <div className="p-3 space-y-2">
                              <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">One bullet per line (otomatis pakai •)</p>
                              <textarea
                                ref={(el) => { blockEditorRefs.current[block.id] = el; }}
                                data-block-id={block.id}
                                value={block.value}
                                onChange={(e) => updateBlock(i, e.target.value)}
                                rows={5}
                                className="w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary resize-y"
                                placeholder={"• Point pertama\n• Point kedua\n• Point ketiga"}
                              />
                            </div>
                          ) : block.type === "table" ? (
                            <div className="p-3 space-y-2">
                              <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">Use separator "|" per column and new line per row</p>
                              <textarea
                                ref={(el) => { blockEditorRefs.current[block.id] = el; }}
                                data-block-id={block.id}
                                value={block.value}
                                onChange={(e) => updateBlock(i, e.target.value)}
                                rows={5}
                                className="w-full bg-background border border-border px-3 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary resize-y"
                                placeholder={"Category | Total | Published\nAnime | 12 | 10\nGames | 8 | 7"}
                              />
                            </div>
                          ) : block.type === "heading" ? (
                            <div className="relative">
                              <div
                                ref={(el) => { blockPreviewRefs.current[block.id] = el; }}
                                className={`pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-heading text-2xl text-foreground ${focusedBlockId === block.id ? "hidden" : ""}`}
                              >
                                {renderInlineOverlayContent(block, "Heading text...")}
                              </div>
                              <textarea
                                ref={(el) => { blockEditorRefs.current[block.id] = el; }}
                                data-block-id={block.id}
                                value={block.value}
                                onChange={(e) => updateBlock(i, e.target.value)}
                                onFocus={() => setFocusedBlockId(block.id)}
                                onBlur={() => setFocusedBlockId((prev) => (prev === block.id ? null : prev))}
                                onScroll={() => syncFormattedEditorScroll(block.id)}
                                rows={2}
                                className={`relative z-10 w-full bg-transparent px-3 py-2.5 font-heading text-2xl caret-foreground selection:bg-primary/20 focus:outline-none resize-none ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`}
                                placeholder="Heading text..."
                              />
                            </div>
                          ) : block.type === "subheading" ? (
                            <div className="relative">
                              <div
                                ref={(el) => { blockPreviewRefs.current[block.id] = el; }}
                                className={`pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-heading text-lg text-foreground ${focusedBlockId === block.id ? "hidden" : ""}`}
                              >
                                {renderInlineOverlayContent(block, "Subheading text...")}
                              </div>
                              <textarea
                                ref={(el) => { blockEditorRefs.current[block.id] = el; }}
                                data-block-id={block.id}
                                value={block.value}
                                onChange={(e) => updateBlock(i, e.target.value)}
                                onFocus={() => setFocusedBlockId(block.id)}
                                onBlur={() => setFocusedBlockId((prev) => (prev === block.id ? null : prev))}
                                onScroll={() => syncFormattedEditorScroll(block.id)}
                                rows={2}
                                className={`relative z-10 w-full bg-transparent px-3 py-2.5 font-heading text-lg caret-foreground selection:bg-primary/20 focus:outline-none resize-none ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`}
                                placeholder="Subheading text..."
                              />
                            </div>
                          ) : block.type === "quote" ? (
                            <div className="flex">
                              <div className="w-1 bg-primary/60 shrink-0 m-2 mr-0 rounded-sm" />
                              <div className="relative flex-1">
                                <div
                                  ref={(el) => { blockPreviewRefs.current[block.id] = el; }}
                                  className={`pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-body text-sm text-foreground italic ${focusedBlockId === block.id ? "hidden" : ""}`}
                                >
                                  {renderInlineOverlayContent(block, "Quote text...")}
                                </div>
                                <textarea
                                  ref={(el) => { blockEditorRefs.current[block.id] = el; }}
                                  data-block-id={block.id}
                                  value={block.value}
                                  onChange={(e) => updateBlock(i, e.target.value)}
                                  onFocus={() => setFocusedBlockId(block.id)}
                                  onBlur={() => setFocusedBlockId((prev) => (prev === block.id ? null : prev))}
                                  onScroll={() => syncFormattedEditorScroll(block.id)}
                                  rows={3}
                                  className={`relative z-10 w-full bg-transparent px-3 py-2.5 font-body text-sm caret-foreground selection:bg-primary/20 italic focus:outline-none resize-y ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`}
                                  placeholder="Quote text..."
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="relative">
                              <div
                                ref={(el) => { blockPreviewRefs.current[block.id] = el; }}
                                className={`pointer-events-none absolute inset-0 overflow-hidden px-3 py-2.5 font-body text-sm text-foreground ${focusedBlockId === block.id ? "hidden" : ""}`}
                              >
                                {renderInlineOverlayContent(block, `Write paragraph ${i + 1}...`)}
                              </div>
                              <textarea
                                ref={(el) => { blockEditorRefs.current[block.id] = el; }}
                                data-block-id={block.id}
                                value={block.value}
                                onChange={(e) => updateBlock(i, e.target.value)}
                                onFocus={() => setFocusedBlockId(block.id)}
                                onBlur={() => setFocusedBlockId((prev) => (prev === block.id ? null : prev))}
                                onScroll={() => syncFormattedEditorScroll(block.id)}
                                rows={4}
                                className={`relative z-10 w-full bg-transparent px-3 py-2.5 font-body text-sm caret-foreground selection:bg-primary/20 focus:outline-none resize-y ${focusedBlockId === block.id ? "text-foreground placeholder:text-muted-foreground/40 selection:text-foreground" : "text-transparent placeholder:text-transparent selection:text-transparent"}`}
                                placeholder={`Write paragraph ${i + 1}...`}
                              />
                            </div>
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
                        <button type="button" onClick={() => addBlock("bullets")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <Pilcrow className="h-3.5 w-3.5" /> Bullets
                        </button>
                        <button type="button" onClick={() => addBlock("table")} className="flex items-center gap-1.5 py-2 px-3 border border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary font-meta text-[10px] uppercase tracking-wider transition-colors">
                          <Table2 className="h-3.5 w-3.5" /> Table
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
                          ToRock.verse/article/{form.slug || "article-slug"}
                        </p>
                        <p className="font-body text-sm text-blue-400 line-clamp-1">
                          {form.title || "Article Title — ToRock Verse"}
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
              <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-background border-t border-border px-4 py-3 flex items-center gap-2">
                <label className="flex items-center gap-2 flex-1 min-w-0">
                  <Switch
                    checked={form.published}
                    onCheckedChange={(v) => { setForm({ ...form, published: v }); markDirty(); }}
                  />
                  <span className="font-meta text-[10px] uppercase tracking-wider text-foreground truncate">
                    {form.published ? "Published" : "Draft"}
                  </span>
                </label>
                <Button
                  type="button"
                  onClick={() => formRef.current?.requestSubmit()}
                  disabled={saving}
                  className="font-meta text-xs uppercase tracking-wider h-10 px-5"
                >
                  {saving ? "Saving..." : "Save"}
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

          {/* ── PROFILE VIEW ── */}
          {view === "profile" && (
            <div className="container py-8 max-w-lg">
              <div className="border border-border">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                  <UserCircle2 className="h-4 w-4 text-muted-foreground" />
                  <h2 className="font-heading text-lg tracking-widest text-foreground">ADMIN PROFILE</h2>
                </div>

                <div className="p-6 space-y-5">
                  {/* Email (read-only) */}
                  <div>
                    <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Email (account)</label>
                    <div className="w-full bg-secondary/40 border border-border px-3 py-2.5 font-body text-sm text-muted-foreground">
                      {userEmail || "—"}
                    </div>
                  </div>

                  {/* Avatar preview */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary border border-border flex items-center justify-center font-heading text-xl text-primary-foreground shrink-0">
                      {profile.avatar || <User className="h-6 w-6" />}
                    </div>
                    <div>
                      <p className="font-body text-sm text-foreground">{profile.name || "—"}</p>
                      <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">{profile.role}</p>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Display Name</label>
                    <input
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                      placeholder="Full name..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Role */}
                    <div>
                      <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Role / Title</label>
                      <input
                        value={profile.role}
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                        className="w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-primary"
                        placeholder="Editor"
                      />
                    </div>
                    {/* Initials */}
                    <div>
                      <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Initials (2 chars)</label>
                      <input
                        value={profile.avatar}
                        onChange={(e) => setProfile({ ...profile, avatar: e.target.value.toUpperCase().slice(0, 2) })}
                        className="w-full bg-background border border-border px-3 py-2.5 font-heading text-lg text-foreground focus:outline-none focus:border-primary text-center"
                        maxLength={2}
                        placeholder="AB"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground block mb-1.5">Bio <span className="normal-case tracking-normal">(shown on article pages)</span></label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="w-full bg-background border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                      rows={4}
                      placeholder="Short bio about this author..."
                    />
                  </div>

                  <div className="flex gap-3 pt-1">
                    <Button onClick={saveProfile} disabled={profileSaving} className="font-meta text-xs uppercase tracking-wider h-10 flex-1">
                      {profileSaving ? "Saving..." : "Save Profile"}
                    </Button>
                    <Button variant="outline" onClick={() => onLogout()} className="font-meta text-xs uppercase tracking-wider h-10 flex items-center gap-2">
                      <LogOut className="h-3.5 w-3.5" /> Sign out
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
