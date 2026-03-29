# ToRock Verse

> Independent pop-culture intelligence — Games · Anime · Esports · Film

ToRock Verse is a modern, full-stack news & editorial platform covering the world of games, anime, esports, and film. Built with a terminal-brutalist aesthetic, it delivers breaking news, reviews, live scores, and curated articles in a fast, mobile-first experience.

---

## Features

### Public
- **Homepage** — Hero featured article, breaking news ticker, latest dispatches grid, and per-category section blocks (Games, Anime, Esports, Culture & Film)
- **Article Page** — Full article reader with rich content blocks (text, headings, quotes, inline images), author bio, and related articles
- **Category Page** — Filtered article listing by category with pagination
- **Search Page** — Full-text search across all published articles
- **Live Score Panel** — Real-time esports/gaming score widget
- **Pull-to-Refresh** — Mobile native-feel content refresh
- **Dark / Light theme** — Toggle with persistent preference
- **Swipeable Cards** — Touch-friendly horizontal card carousel on mobile

### Admin Dashboard
- **Secure login** — Supabase Auth (email + password)
- **Article management** — Create, edit, duplicate, delete articles
- **Block-based content editor** — Paragraph, Heading (H1), Subheading (H2), Quote, and Image blocks with reorder (move up/down) controls
- **Image upload** — Cover image + inline content images via Supabase Storage (`article-images` bucket)
- **Publish toggle** — Draft / Published state per article
- **Breaking News flag** — Mark articles as breaking
- **Category & read time** — Metadata per article
- **Slug generation** — Auto-generate from title with manual override
- **SEO preview** — Live preview of title/slug/meta
- **Profile management** — Update name, role, avatar, and bio; auto-fills author info on new articles
- **Realtime sync** — Supabase Realtime pushes article changes to the live frontend instantly

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (Pages Router) + React 18 + TypeScript |
| Build tool | Next.js build system |
| Styling | Tailwind CSS + custom fonts (Bebas Neue, IBM Plex Mono, Inter) |
| UI Components | shadcn/ui (Radix UI primitives) |
| Backend / DB | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Realtime | Supabase Realtime (`postgres_changes`) |
| Routing | Next.js page routing + React Router (client-side app shell) |
| SEO | react-helmet-async + structured data (JSON-LD) |
| Testing | Vitest + Playwright |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx           # Homepage
│   ├── ArticlePage.tsx     # Single article reader
│   ├── CategoryPage.tsx    # Category listing
│   ├── SearchPage.tsx      # Search
│   ├── AdminDashboard.tsx  # Full admin panel
│   ├── AdminLogin.tsx      # Admin auth gate
│   └── NotFound.tsx
├── components/
│   ├── ArticleCard.tsx     # Reusable card (large/medium/small)
│   ├── SectionBlock.tsx    # Category section with swipeable mobile
│   ├── Navbar.tsx          # Top navigation
│   ├── BottomNav.tsx       # Mobile bottom nav
│   ├── TickerBar.tsx       # Breaking news ticker
│   ├── LiveScorePanel.tsx  # Score widget
│   ├── ImageUpload.tsx     # Supabase Storage uploader
│   └── ui/                 # shadcn/ui base components
├── lib/
│   ├── api.ts              # Supabase DB helpers (fetch, create, update, delete)
│   └── utils.ts
├── integrations/
│   └── supabase/client.ts  # Supabase client init
└── data/
    └── articles.ts         # Fallback seed data + Article type
supabase/
└── migrations/             # SQL migration files
```

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- A [Supabase](https://supabase.com) project with the migrations applied

### Environment Variables

Create a `.env` file at the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

### Install & Run

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

### Database Setup

Run the migration files in order via the Supabase SQL Editor:

```
supabase/migrations/20260310181920_...sql   — articles table + RLS
supabase/migrations/20260311022736_...sql   — storage bucket + policies
supabase/migrations/20260311120000_...sql   — secure write RLS
supabase/migrations/20260311130000_...sql   — author_bio column
```

---

## Deployment

The project is configured for **Vercel** deployment via `vercel.json`.

1. Push to GitHub
2. Import into Vercel
3. Set environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)
4. Deploy

---

## License

© 2026 ToRock Verse. All rights reserved.
