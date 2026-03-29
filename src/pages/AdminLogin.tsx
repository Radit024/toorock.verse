import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";
import { adminLogin, getAdminSession } from "@/lib/admin-auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAdminSession().then((data) => {
      if (data.authenticated) navigate("/admin", { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await adminLogin(email, password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Top bar */}
        <header className="border-b border-border">
          <div className="container flex items-center justify-between h-14">
            <Link
              to="/"
              className="flex items-center gap-2 font-meta text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to site
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Main */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Brand */}
            <div className="text-center mb-10">
              <Link to="/" className="inline-block">
                <h1 className="font-heading text-4xl text-primary tracking-widest mb-1">
                  ToRock Verse
                </h1>
              </Link>
              <p className="font-meta text-[10px] uppercase tracking-widest text-muted-foreground">
                Admin Dashboard
              </p>
            </div>

            {/* Card */}
            <div className="border border-border bg-background">
              {/* Card header */}
              <div className="border-b border-border px-8 py-5 flex items-center gap-3">
                <div className="p-2 border border-primary/30 text-primary">
                  <Lock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-heading text-base tracking-widest text-foreground">SIGN IN</p>
                  <p className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                    Restricted access
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border border-border px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                      autoComplete="current-password"
                      className="w-full bg-transparent border border-border px-3 py-2.5 pr-10 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="border border-destructive/40 bg-destructive/5 px-3 py-2">
                    <p className="font-meta text-[11px] text-destructive">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !email || !password}
                  className="w-full bg-primary text-primary-foreground font-meta text-[11px] uppercase tracking-wider py-3 flex items-center justify-center gap-2 disabled:opacity-40 hover:bg-primary/90 active:scale-[0.99] transition-all"
                >
                  {loading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Authenticating...</>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminLogin;

