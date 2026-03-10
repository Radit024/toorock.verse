const headlines = [
  "BREAKING: Elden Ring Nightreign Release Date Confirmed for June 2026",
  "One Piece Live Action Season 2 Officially Drops March 2026",
  "VALORANT Masters Santiago 2026 — G2 vs Paper Rex Finals Preview",
  "Chainsaw Man Season 3 Announced with New Studio",
  "GTA VI Gameplay Leak Reveals Vice City Map Scale",
  "Jujutsu Kaisen Manga Spinoff Series Confirmed",
  "Nintendo Switch 2 Launch Lineup: 15 Titles Revealed",
  "Demon Slayer Infinity Castle Film Breaks Box Office Records",
  "Riot Games Announces New Tactical FPS Codenamed 'Project K'",
  "Attack on Titan Remake Confirmed by MAPPA Studios",
];

const TickerBar = () => {
  return (
    <div className="border-b border-border bg-secondary overflow-hidden">
      <div className="flex items-center">
        <div className="bg-primary px-3 py-2 font-heading text-sm text-primary-foreground tracking-widest shrink-0 z-10">
          LIVE FEED
        </div>
        <div className="overflow-hidden relative flex-1">
          <div className="ticker-scroll flex items-center gap-8 whitespace-nowrap py-2 px-4">
            {[...headlines, ...headlines].map((headline, i) => (
              <span key={i} className="font-body text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                <span className="text-primary mr-2">■</span>
                {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
