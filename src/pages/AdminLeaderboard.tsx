import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, RefreshCw, Crown, LogOut } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";
import { supabase } from "@/integrations/supabase/client";
import { fetchAdminUploadLeaderboard, type AdminLeaderboardEntry } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const AdminLeaderboard = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [rows, setRows] = useState<AdminLeaderboardEntry[]>([]);

  const loadLeaderboard = async (silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);

    try {
      const data = await fetchAdminUploadLeaderboard();
      setRows(data);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      toast({ title: "Failed to load leaderboard", description: msg, variant: "destructive" });
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
    if (!authed) return;
    loadLeaderboard();

    const channel = supabase
      .channel("admin-leaderboard-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "articles" }, () => {
        loadLeaderboard(true);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [authed]);

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
              <Link to="/admin" className="flex items-center gap-1.5 font-meta text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back</span>
              </Link>
              <span className="font-heading text-xl sm:text-2xl text-primary tracking-widest truncate">ADMIN LEADERBOARD</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => loadLeaderboard(true)}
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

        <main className="container py-6 max-w-4xl">
          <div className="border border-border">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <h1 className="font-heading text-xl tracking-widest text-foreground">TOP UPLOADERS</h1>
              </div>
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">Display name only</span>
            </div>

            {loading ? (
              <p className="font-body text-sm text-muted-foreground px-4 py-8 text-center">Loading leaderboard...</p>
            ) : rows.length === 0 ? (
              <p className="font-body text-sm text-muted-foreground px-4 py-8 text-center">No registered accounts found.</p>
            ) : (
              <div className="divide-y divide-border">
                {rows.map((row, i) => (
                  <Link
                    key={row.user_id}
                    to={`/admin/leaderboard/${row.user_id}`}
                    state={{ row, rank: i + 1 }}
                    className="grid grid-cols-[50px_1fr_80px_90px] items-center gap-3 px-4 py-3 hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-1.5">
                      {i === 0 && <Crown className="h-4 w-4 text-primary" />}
                      <span className={`font-heading text-lg ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-sm text-foreground truncate">{row.display_name}</p>
                      <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">
                        Joined {new Date(row.registered_at).toLocaleDateString("en-GB")}
                        {row.last_upload_at ? ` • Last upload ${new Date(row.last_upload_at).toLocaleDateString("en-GB")}` : " • No uploads yet"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-lg text-foreground">{row.total_articles}</p>
                      <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">Total</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-lg text-green-500">{row.published_articles}</p>
                      <p className="font-meta text-[9px] uppercase tracking-wider text-muted-foreground">Published</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default AdminLeaderboard;
