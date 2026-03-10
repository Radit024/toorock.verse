import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";
import anime1 from "@/assets/anime-1.jpg";
import anime2 from "@/assets/anime-2.jpg";
import games1 from "@/assets/games-1.jpg";
import games2 from "@/assets/games-2.jpg";
import esports1 from "@/assets/esports-1.jpg";
import esports2 from "@/assets/esports-2.jpg";
import culture1 from "@/assets/culture-1.jpg";
import culture2 from "@/assets/culture-2.jpg";

export interface Article {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  isBreaking?: boolean;
  author: { name: string; role: string; avatar: string };
  readTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: "gundam-requiem-s2",
    image: article1,
    title: "Gundam: Requiem for Vengeance Season 2 Confirmed with Unreal Engine 5.5",
    category: "Anime",
    date: "2 hours ago",
    isBreaking: true,
    author: { name: "Haruki Tanaka", role: "Anime Editor", avatar: "HT" },
    readTime: "4 min read",
    content: [
      "Bandai Namco Filmworks has officially confirmed the second season of Mobile Suit Gundam: Requiem for Vengeance, the groundbreaking CG anime series rendered entirely in Unreal Engine. The new season will upgrade to Unreal Engine 5.5, promising even more photorealistic mecha combat sequences.",
      "The first season, which debuted exclusively on Netflix, stunned audiences with its gritty, Western-front perspective of the One Year War. Director Erasmus Brosdau returns to helm the project, with an expanded team at Safehouse incorporating volumetric capture technology for enhanced character performances.",
      "Season 2 will shift focus to the final months of the One Year War, introducing new mobile suits including a reimagined Gelgoog and the iconic Zeong. The production team has teased that Nanite and Lumen technologies in UE 5.5 will allow for unprecedented detail in the battlefield environments.",
      "Netflix has scheduled the release for Q4 2026, with a special preview screening planned for Anime Expo in July. The series has been credited with opening new possibilities for anime production pipelines, with several studios reportedly exploring similar real-time rendering approaches.",
    ],
  },
  {
    id: "elden-ring-nightreign",
    image: article2,
    title: "Elden Ring Nightreign — Everything We Know About the Standalone Expansion",
    category: "Games",
    date: "5 hours ago",
    author: { name: "Marcus Chen", role: "Games Reporter", avatar: "MC" },
    readTime: "6 min read",
    content: [
      "FromSoftware's next venture into the Lands Between takes a radical departure from the base game. Elden Ring Nightreign is a standalone co-op experience that blends roguelike session-based gameplay with the studio's signature combat design.",
      "Players select from eight unique Nightfarers, each with distinct abilities and playstyles. Unlike the base game's open-world structure, Nightreign condenses the experience into intense 40-minute sessions where the map dynamically shrinks under the encroaching Nightfall.",
      "Director Junya Ishizaki has emphasized that Nightreign is designed for replayability above all else. Procedurally arranged boss encounters, randomized loot tables, and a day-night cycle that alters enemy behavior ensure no two runs feel identical.",
      "The game supports solo play, duo, and trio co-op with seamless matchmaking. Cross-play across all platforms has been confirmed at launch, a first for FromSoftware titles. The June 2026 release date positions it as one of the summer's biggest releases.",
    ],
  },
  {
    id: "solo-leveling-s3",
    image: article3,
    title: "Solo Leveling Season 3 Announced — Arise Arc Gets Anime Adaptation",
    category: "Anime",
    date: "8 hours ago",
    author: { name: "Yuki Sato", role: "Anime Correspondent", avatar: "YS" },
    readTime: "3 min read",
    content: [
      "A-1 Pictures has confirmed Solo Leveling Season 3, covering the highly anticipated Arise arc from the original web novel. The announcement came during a special livestream event that drew over 2 million concurrent viewers worldwide.",
      "The Arise arc represents the turning point where Sung Jinwoo fully embraces his Shadow Monarch powers. Fans can expect massive-scale battles, including the iconic Jeju Island raid that many consider the series' peak moment.",
      "The production committee has confirmed an increased episode count of 16, up from the standard 12-13, to properly adapt the arc's dense narrative. Animation quality is expected to reach new heights with A-1 Pictures allocating their top animators to key action sequences.",
      "Season 3 is projected for a Winter 2027 broadcast window, with Crunchyroll retaining exclusive streaming rights outside Asia.",
    ],
  },
  {
    id: "cyberpunk-project-orion",
    image: article4,
    title: "Cyberpunk 2077 Sequel 'Project Orion' First Details Leak from CD Projekt Red",
    category: "Games",
    date: "12 hours ago",
    isBreaking: true,
    author: { name: "Alex Rivera", role: "Senior Games Editor", avatar: "AR" },
    readTime: "5 min read",
    content: [
      "Leaked internal documents from CD Projekt Red have revealed the first concrete details about Project Orion, the sequel to Cyberpunk 2077. The game is reportedly set in a new American city, moving away from Night City to explore the broader Cyberpunk universe.",
      "Sources indicate the sequel will feature a fully multiplayer-compatible open world, allowing players to seamlessly transition between solo and cooperative gameplay. The new REDengine 2 is being built with multiplayer architecture as a foundational pillar.",
      "Character creation has been dramatically expanded, with cyberware customization now affecting both gameplay mechanics and visual appearance in real-time. The 'style over substance' philosophy of the Cyberpunk universe is being pushed further with a dynamic fashion system.",
      "CD Projekt Red has not officially commented on the leaks, but the studio's Boston office — established specifically for Project Orion — has been actively hiring for key positions, suggesting the game is deep in pre-production with a potential reveal at E3 2027.",
    ],
  },
  {
    id: "macross-delta-finale",
    image: article5,
    title: "Macross Delta Movie Trilogy Finale Drops Stunning New Trailer",
    category: "Anime",
    date: "1 day ago",
    author: { name: "Haruki Tanaka", role: "Anime Editor", avatar: "HT" },
    readTime: "3 min read",
    content: [
      "Big West and Satelight have released the final trailer for Macross Delta the Movie: Walküre Finale, the concluding chapter of the theatrical trilogy. The three-minute preview showcases breathtaking Valkyrie dogfights set against Walküre's new single 'Eternal Song.'",
      "The film promises to resolve the conflict between the Windermere Kingdom and the New United Nations, with Hayate and Freyja's relationship reaching its emotional climax. Director Shoji Kawamori has stated this will be his most personal Macross work to date.",
      "In a historic move, the film will receive a simultaneous worldwide theatrical release — a first for the Macross franchise, made possible by the landmark rights agreement between Big West and Harmony Gold that opened global distribution.",
      "The Japanese premiere is set for August 2026, with international screenings following within the same week across North America, Europe, and Southeast Asia.",
    ],
  },
  {
    id: "your-name-producer-new-film",
    image: article6,
    title: "Your Name Producer Announces New Original Anime Film for 2027",
    category: "Film",
    date: "1 day ago",
    author: { name: "Yuki Sato", role: "Anime Correspondent", avatar: "YS" },
    readTime: "4 min read",
    content: [
      "CoMix Wave Films producer Genki Kawamura has announced an ambitious new original anime film slated for 2027. Titled 'Constellation,' the project will be directed by a yet-to-be-revealed newcomer whom Kawamura describes as 'the next voice of Japanese animation.'",
      "The film is described as a sci-fi romance set across parallel timelines, blending hand-drawn animation with cutting-edge digital effects. The story follows two astronomers in different eras who discover they can communicate through a shared celestial phenomenon.",
      "Kawamura, who produced mega-hits 'Your Name' and 'Weathering With You,' has indicated that 'Constellation' will aim for the same emotional resonance while pushing into more mature thematic territory. A-list composer Ryuichi Sakamoto's final recorded works will be featured in the soundtrack.",
      "The project has already secured international distribution deals with major studios, reflecting the growing global appetite for original anime films. A teaser visual and full staff reveal are expected at the Tokyo International Film Festival in November.",
    ],
  },
  // --- ANIME SECTION ---
  {
    id: "mecha-uprising-anime",
    image: anime1,
    title: "Code Geass: Rozé of the Recapture Part 2 Reveals New Knightmare Frames",
    category: "Anime",
    date: "3 hours ago",
    author: { name: "Haruki Tanaka", role: "Anime Editor", avatar: "HT" },
    readTime: "3 min read",
    content: [
      "Sunrise has unveiled a fresh batch of Knightmare Frame designs for Code Geass: Rozé of the Recapture Part 2, continuing the beloved franchise's legacy with next-generation mechanical design.",
      "The new designs incorporate elements from both the original series and Akito the Exiled, blending classic aesthetics with futuristic weaponry. Lead mechanical designer Eiji Nakada described the process as 'honoring tradition while pushing boundaries.'",
      "Part 2 will expand the conflict into European territories, introducing new factions and pilots. The animation quality has been praised in early previews, with Sunrise reportedly using a hybrid 2D-3D pipeline for the mecha sequences.",
      "The theatrical release is confirmed for Spring 2026 in Japan, with international streaming rights still under negotiation.",
    ],
  },
  {
    id: "dark-hero-anime",
    image: anime2,
    title: "Vinland Saga Author's New Manga Gets Immediate Anime Greenlight",
    category: "Anime",
    date: "6 hours ago",
    author: { name: "Yuki Sato", role: "Anime Correspondent", avatar: "YS" },
    readTime: "4 min read",
    content: [
      "Makoto Yukimura's upcoming manga series has received an anime adaptation greenlight before a single chapter has been published, a testament to the creator's reputation following Vinland Saga's critical and commercial success.",
      "The new series, titled 'Iron Dawn,' is set during the early Industrial Revolution and follows a blacksmith's apprentice drawn into a conspiracy involving forbidden metallurgy and political revolution.",
      "WIT Studio, which animated Vinland Saga's first season, has been confirmed as the production studio. Director Shūhei Yabuta returns, promising the same level of historical authenticity and visceral action.",
      "The manga begins serialization in Monthly Afternoon magazine this summer, with the anime expected to follow in 2027.",
    ],
  },
  // --- GAMES SECTION ---
  {
    id: "dragon-siege-rpg",
    image: games1,
    title: "Dragon's Dogma 3 Reportedly in Development with Full Open-World Co-op",
    category: "Games",
    date: "4 hours ago",
    author: { name: "Marcus Chen", role: "Games Reporter", avatar: "MC" },
    readTime: "5 min read",
    content: [
      "Capcom is reportedly developing Dragon's Dogma 3 with a major focus on cooperative multiplayer, according to multiple industry insiders. The game would allow up to four players to explore the open world together.",
      "The sequel is said to be built on Capcom's RE Engine, inheriting the photorealistic visual quality seen in recent Resident Evil titles. The Pawn system returns but now allows real players to seamlessly fill companion slots.",
      "World design is reportedly three times larger than Dragon's Dogma 2, with dynamic weather and seasonal changes affecting monster spawns and questlines. The vocations system has been overhauled with more hybridization options.",
      "Capcom has not officially announced the project, but job listings for an 'open-world action RPG with online features' have appeared on the company's recruitment page.",
    ],
  },
  {
    id: "neon-arena-fps",
    image: games2,
    title: "Riot's Project K Gameplay Leaked: Tactical Arena Shooter with Hero Abilities",
    category: "Games",
    date: "7 hours ago",
    author: { name: "Alex Rivera", role: "Senior Games Editor", avatar: "AR" },
    readTime: "4 min read",
    content: [
      "Leaked alpha footage of Riot Games' Project K reveals a fast-paced arena shooter that blends classic FPS mechanics with MOBA-inspired hero abilities. The game appears to target the competitive esports market directly.",
      "Gameplay shows 5v5 matches on symmetrical maps with objective-based modes. Each agent has unique abilities on cooldowns, but gunplay appears to be the primary skill expression, similar to VALORANT's design philosophy.",
      "The visual style is distinctly cyberpunk with neon-drenched environments and futuristic weapon designs. Movement mechanics include wall-running and sliding, suggesting a faster pace than VALORANT.",
      "Riot Games has issued takedown notices for the leaked footage but has not confirmed or denied the project's existence.",
    ],
  },
  // --- ESPORTS SECTION ---
  {
    id: "esports-tournament-2026",
    image: esports1,
    title: "VALORANT Champions 2026 Seoul Sells Out 50,000-Seat Stadium in Minutes",
    category: "Esports",
    date: "3 hours ago",
    author: { name: "Jin Park", role: "Esports Writer", avatar: "JP" },
    readTime: "3 min read",
    content: [
      "Tickets for VALORANT Champions 2026 in Seoul sold out within 12 minutes of going on sale, crashing the ticketing platform and prompting Riot Games to consider expanding venue capacity.",
      "The event will be held at the Seoul World Cup Stadium, making it the largest esports event in VALORANT history. Previous Champions events averaged 15,000-seat venues.",
      "Korean teams are heavy favorites after dominating the 2025 competitive season. DRX and T1 are expected to lead the home charge, with international challengers from EMEA and Americas looking to upset.",
      "Riot has announced a record $5 million prize pool, with additional revenue sharing from in-game cosmetic sales during the event window.",
    ],
  },
  {
    id: "esports-team-victory",
    image: esports2,
    title: "LOUD Wins VCT Americas 2026 in Dominant Fashion, Secures Champions Slot",
    category: "Esports",
    date: "10 hours ago",
    author: { name: "Jin Park", role: "Esports Writer", avatar: "JP" },
    readTime: "3 min read",
    content: [
      "Brazilian powerhouse LOUD has claimed the VCT Americas 2026 title with a commanding 3-0 victory over Sentinels in the grand final, booking their ticket to Champions Seoul.",
      "LOUD's run through the tournament was near-flawless, dropping only a single map across the entire playoff bracket. Star player aspas was named tournament MVP with a 1.42 rating across the event.",
      "The victory cements LOUD's position as the Americas' premier team heading into the international stage. Coach Bezn credited the team's boot camp in Korea for their improved tactical depth.",
      "Sentinels, despite the loss, also qualified for Champions through circuit points, setting up a potential rematch on the global stage.",
    ],
  },
  // --- CULTURE SECTION ---
  {
    id: "anime-film-premiere",
    image: culture1,
    title: "Studio Ghibli Theme Park Expansion Adds Howl's Moving Castle Zone",
    category: "Culture",
    date: "1 day ago",
    author: { name: "Yuki Sato", role: "Anime Correspondent", avatar: "YS" },
    readTime: "4 min read",
    content: [
      "Ghibli Park in Aichi Prefecture has announced its most ambitious expansion yet: a fully walkable Howl's Moving Castle zone featuring a life-size replica of the iconic moving castle.",
      "The castle will incorporate mechanical elements that simulate movement, with steam effects and rotating turrets creating an immersive experience. Interior rooms will be faithfully recreated based on the film's production art.",
      "The expansion also includes Sophie's hat shop, the Waste's flower meadow, and a themed restaurant serving dishes from the film. Hayao Miyazaki personally supervised the architectural designs.",
      "The Howl's Moving Castle zone opens in Spring 2027, with ticket reservations expected to begin six months prior.",
    ],
  },
  {
    id: "gaming-convention-retro",
    image: culture2,
    title: "Tokyo Game Show 2026 Announces Retro Gaming Hall with 200+ Playable Classics",
    category: "Culture",
    date: "2 days ago",
    author: { name: "Marcus Chen", role: "Games Reporter", avatar: "MC" },
    readTime: "3 min read",
    content: [
      "Tokyo Game Show 2026 will feature a dedicated Retro Gaming Hall spanning 5,000 square meters, housing over 200 playable classic arcade cabinets and vintage consoles from gaming's golden era.",
      "The hall is curated in partnership with the Japan Game Museum and features rare cabinets from the 1970s through the 2000s. Highlights include original Taito Space Invaders cabinets and a complete Neo Geo library.",
      "Special tournaments will be held on classic titles, with prizes including limited-edition merchandise and signed memorabilia from legendary developers. Shigeru Miyamoto is confirmed as an honorary guest.",
      "TGS 2026 runs September 24-27 at the Makuhari Messe, with the Retro Hall open to all ticket holders throughout the event.",
    ],
  },
];

export const getArticlesByCategory = (category: string) =>
  articles.filter((a) => a.category === category);
