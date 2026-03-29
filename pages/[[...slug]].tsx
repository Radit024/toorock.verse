import dynamic from "next/dynamic";

const ClientApp = dynamic(() => import("../src/App"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="font-body text-sm text-muted-foreground">Loading...</p>
    </div>
  ),
});

export default function CatchAllPage() {
  return <ClientApp />;
}
