import { Circle } from "lucide-react";

const matches = [
  { tournament: "VALORANT Masters Santiago 2026", teamA: "G2 Esports", teamB: "Paper Rex", time: "LIVE", scoreA: 2, scoreB: 1 },
  { tournament: "MPL Indonesia S17", teamA: "ONIC", teamB: "RRQ", time: "15:00", scoreA: 0, scoreB: 0 },
  { tournament: "League of Legends LCK Spring", teamA: "T1", teamB: "Gen.G", time: "18:00", scoreA: 0, scoreB: 0 },
];

const LiveScorePanel = () => {
  return (
    <aside className="border border-border">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h2 className="font-heading text-lg tracking-widest text-foreground">LIVE SCORES</h2>
        <span className="font-meta text-[10px] uppercase text-primary cursor-pointer hover:underline">View All</span>
      </div>
      <div className="divide-y divide-border">
        {matches.map((match, i) => (
          <div key={i} className="px-4 py-3 hover:bg-secondary transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              {match.time === "LIVE" && (
                <Circle className="h-2 w-2 fill-primary text-primary animate-pulse" />
              )}
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                {match.tournament}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-body text-xs text-foreground">{match.teamA}</div>
                <div className="font-body text-xs text-foreground">{match.teamB}</div>
              </div>
              <div className="text-right space-y-1">
                {match.time === "LIVE" ? (
                  <>
                    <div className="font-heading text-sm text-primary">{match.scoreA}</div>
                    <div className="font-heading text-sm text-primary">{match.scoreB}</div>
                  </>
                ) : (
                  <span className="font-meta text-[10px] text-muted-foreground">{match.time}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LiveScorePanel;
