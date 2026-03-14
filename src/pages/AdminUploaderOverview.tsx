import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Crown, LogOut, RefreshCw } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { supabase } from "@/integrations/supabase/client";
import {
  fetchAdminUploadLeaderboard,
  fetchAdminUploaderCategoryOverview,
  type AdminLeaderboardEntry,
  type AdminUploaderCategoryOverviewEntry,
} from "@/lib/api";
import { toast } from "@/hooks/use-toast";

type NavState = {
  row?: AdminLeaderboardEntry;
  rank?: number;
};

const BAR_COLORS = [
  "bg-sky-400",
  "bg-orange-400",
  "bg-violet-400",
  "bg-lime-400",
  "bg-pink-400",
  "bg-amber-400",
  "bg-cyan-400",
  "bg-rose-400",
];

const AdminUploaderOverview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useParams<{ userId: string }>();
  const navState = (location.state as NavState | null) ?? null;

  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [userRow, setUserRow] = useState<AdminLeaderboardEntry | null>(navState?.row ?? null);
  const [rank, setRank] = useState<number | null>(navState?.rank ?? null);
  const [overview, setOverview] = useState<AdminUploaderCategoryOverviewEntry[]>([]);

  const loadPage = async (silent = false) => {
    if (!userId) return;
    if (!silent) setLoading(true);
    else setRefreshing(true);

    try {
      const [leaderboardRows, categoryRows] = await Promise.all([
        fetchAdminUploadLeaderboard(),
        fetchAdminUploaderCategoryOverview(userId),
      ]);

      setOverview(categoryRows);

      const idx = leaderboardRows.findIndex((x) => x.user_id === userId);
      setRank(idx >= 0 ? idx + 1 : null);
      setUserRow(idx >= 0 ? leaderboardRows[idx] : null);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      toast({ title: "Failed to load uploader overview", description: msg, variant: "destructive" });
    }

    setLoading(false);
    setRefreshing(false);
  };

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

  useEffect(() => {
    if (!authed || !userId) return;
    loadPage();

    const channel = supabase
      .channel("admin-uploader-overview-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "articles" }, () => {
        loadPage(true);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [authed, userId]);

  const totals = useMemo(() => {
    const total = overview.reduce((sum, item) => sum + item.total_articles, 0);
    const published = overview.reduce((sum, item) => sum + item.published_articles, 0);
    const drafts = overview.reduce((sum, item) => sum + item.draft_articles, 0);
    const categories = overview.length;
    const publishRate = total > 0 ? Math.round((published / total) * 100) : 0;
    return { total, published, drafts, categories, publishRate };
  }, [overview]);

  const maxCategoryCount = useMemo(
    () => Math.max(1, ...overview.map((x) => x.total_articles)),
    [overview]
  );

  if (!checked || !authed) return null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-background sticky top-0 z-40">
          <div className="container flex items-center justify-between h-14 gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <Link to="/admin/leaderboard" className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Leaderboard</span>
              </Link>
              <span className="font-heading text-xl sm:text-2xl text-primary tracking-widest truncate">UPLOADER OVERVIEW</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => loadPage(true)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </div>
          </div>
        </div>

        <main className="container py-6 max-w-6xl">
          {loading ? (
            <p className="font-body text-sm text-muted-foreground py-10 text-center">Loading uploader overview...</p>
          ) : !userId ? (
            <p className="font-body text-sm text-destructive py-10 text-center">Invalid uploader id.</p>
          ) : (
            <div className="space-y-4">
              <section className="border border-border overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 via-indigo-700 to-slate-700 p-4 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-meta text-[10px] uppercase tracking-widest text-slate-200/90">Uploader Profile</p>
                      <h1 className="font-heading text-3xl md:text-4xl text-white tracking-widest truncate mt-1">
                        {userRow?.display_name ?? "Unknown Admin"}
                      </h1>
                      <p className="font-meta text-[10px] uppercase tracking-wider text-slate-200/80 mt-1">
                        Joined {userRow ? new Date(userRow.registered_at).toLocaleDateString("en-GB") : "-"}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-center justify-end gap-1.5 text-amber-300 mb-1">
                        <Crown className="h-4 w-4" />
                        <span className="font-meta text-[10px] uppercase tracking-wider">Rank</span>
                      </div>
                      <p className="font-heading text-3xl text-white">{rank ? String(rank).padStart(2, "0") : "--"}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-border bg-secondary/20">
                  {[
                    { label: "Total Uploads", value: totals.total, color: "text-foreground" },
                    { label: "Published", value: totals.published, color: "text-green-500" },
                    { label: "Draft", value: totals.drafts, color: "text-muted-foreground" },
                    { label: "Categories", value: totals.categories, color: "text-blue-400" },
                    { label: "Publish Rate", value: `${totals.publishRate}%`, color: "text-primary" },
                  ].map((item, idx) => (
                    <div key={item.label} className={`p-4 ${idx < 4 ? "md:border-r border-border" : ""} ${idx % 2 === 0 ? "border-r border-border md:border-r" : ""} border-b md:border-b-0 border-border`}>
                      <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">{item.label}</p>
                      <p className={`font-heading text-3xl mt-1 ${item.color}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4">
                <section className="border border-border">
                  <div className="border-b border-border px-4 py-3">
                    <h2 className="font-heading text-lg tracking-widest text-foreground">CATEGORY STATS</h2>
                  </div>
                  {overview.length === 0 ? (
                    <p className="font-body text-sm text-muted-foreground px-4 py-8 text-center">No uploads for this admin yet.</p>
                  ) : (
                    <div className="divide-y divide-border">
                      {overview.map((row) => (
                        <div key={row.category} className="px-4 py-3">
                          <div className="flex items-center justify-between gap-2">
                            <p className="font-body text-sm text-foreground truncate">{row.category}</p>
                            <p className="font-heading text-base text-foreground">{row.total_articles}</p>
                          </div>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="font-meta text-[9px] uppercase tracking-wider text-green-500">Published {row.published_articles}</span>
                            <span className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">Draft {row.draft_articles}</span>
                          </div>
                          <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground mt-1">
                            {row.last_upload_at ? `Last upload ${new Date(row.last_upload_at).toLocaleDateString("en-GB")}` : "No upload date"}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                <section className="border border-border">
                  <div className="border-b border-border px-4 py-3">
                    <h2 className="font-heading text-lg tracking-widest text-foreground">CATEGORY COMPARISON</h2>
                  </div>
                  {overview.length === 0 ? (
                    <p className="font-body text-sm text-muted-foreground px-4 py-8 text-center">No category data to compare.</p>
                  ) : (
                    <div className="px-4 py-3 space-y-2">
                      {overview.map((row, i) => {
                        const pct = Math.max(6, Math.round((row.total_articles / maxCategoryCount) * 100));
                        const color = BAR_COLORS[i % BAR_COLORS.length];
                        return (
                          <div key={row.category} className="grid grid-cols-[120px_1fr_40px] items-center gap-2">
                            <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground truncate">{row.category}</p>
                            <div className="h-5 bg-secondary border border-border relative overflow-hidden">
                              <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
                            </div>
                            <p className="font-meta text-[10px] uppercase tracking-wider text-foreground text-right">{row.total_articles}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              </div>
            </div>
          )}
        </main>
      </div>
    </PageTransition>
  );
};

export default AdminUploaderOverview;
