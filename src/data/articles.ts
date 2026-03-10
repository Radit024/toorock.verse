import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";

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
];
