# CLAUDE.md

Guidance for Claude Code when working in this repository. Read this file first, then read `DESIGN.md` before touching any UI.

## Project

Personal portfolio website for Rudraksh (rudrakshh.live). A single-page, dark, terminal-flavored developer portfolio: hero, about, GitHub activity heatmap, open source experience timeline, tech stack grid, booking CTAs, and a floating social dock.

Goal: look like a senior engineer's site. Fast, clean, restrained. No gimmicks, no template feel.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- shadcn/ui for all UI primitives (Button, Badge, Card, Tooltip, Dialog, Separator, ScrollArea, Sheet)
- lucide-react for UI icons, `react-icons` / simple-icons for brand and tech icons
- framer-motion for animation (sparingly)
- next-themes (dark is default; light optional later)
- pnpm as package manager
- Deploy target: Vercel

## Commands

```bash
pnpm install
pnpm dev          # local dev server
pnpm build        # production build, must pass before any commit
pnpm lint         # eslint
pnpm typecheck    # tsc --noEmit
pnpm format       # prettier
```

Add UI primitives only through the CLI:

```bash
pnpm dlx shadcn@latest add <component>
```

Never hand-write a component that shadcn already provides. Never edit files in `components/ui/` except for design token adjustments described in `DESIGN.md`.

## Project structure

```
app/
  layout.tsx            # fonts, theme provider, metadata, dock
  page.tsx              # composes the sections in order
  globals.css           # CSS variables (tokens from DESIGN.md)
  api/github/route.ts   # contributions proxy (cached)
components/
  ui/                   # shadcn primitives (generated)
  sections/             # hero, about, github-activity, experience, stack, contact
  dock.tsx              # floating social dock
  timeline-item.tsx
  stack-icon.tsx
  contribution-grid.tsx
lib/
  data/                 # ALL content lives here (profile, experience, stack, links)
  utils.ts              # cn() helper
  github.ts             # contributions fetch + transform
public/
  logos/                # org logos for the experience timeline
  resume.pdf
DESIGN.md
CLAUDE.md
```

## Content rules

- All copy, links, dates and lists live in `lib/data/*.ts` as typed objects. Components render data; they never hardcode content.
- Experience entries follow this shape: `{ org, role, logo, start, end | "Present", summary, featuredHref? }`.
- Stack entries: `{ name, icon, href? }`. Order is intentional, do not alphabetize.
- Do not invent achievements, numbers, titles, or dates. If content is missing, leave a clearly marked `TODO` in the data file and tell me.
- Writing style for any copy: plain, specific, first person, no buzzwords, no em-dash chains, no "passionate about".

## Code conventions

- Server Components by default. Add `"use client"` only for interactivity (dock hover, heatmap tooltip, theme toggle, animations).
- Named exports for components, default exports only for `page.tsx` / `layout.tsx`.
- Use `cn()` from `lib/utils` for conditional classes. No inline style objects unless a value is dynamic.
- Use design tokens (CSS variables / Tailwind theme) from `DESIGN.md`. No raw hex values in components.
- Images via `next/image` with explicit width/height. Fonts via `next/font`.
- No `any`. No unused exports. No commented-out code.
- Keep components under ~150 lines; split when larger.
- Accessibility is required: semantic landmarks, visible focus rings, `aria-label` on every icon-only button, alt text on logos, respect `prefers-reduced-motion`.

## Data fetching

- GitHub contributions are fetched server-side in `app/api/github/route.ts` using the GitHub GraphQL API with a server-only `GITHUB_TOKEN`.
- Cache with `revalidate: 3600`. The page must render a graceful empty/skeleton state if the fetch fails.
- Never expose the token to the client.

Environment variables (`.env.local`, never committed):

```
GITHUB_TOKEN=
GITHUB_USERNAME=rudrakshSoni-dev
NEXT_PUBLIC_SITE_URL=https://rudrakshh.live
NEXT_PUBLIC_CAL_URL=  # booking link
```

## Performance and quality bar

- Lighthouse: Performance, Accessibility, Best Practices, SEO all 95+.
- No layout shift. No client JS that isn't needed. No heavy animation libraries beyond framer-motion.
- Set full metadata: title, description, Open Graph image, canonical URL, `robots`, favicon.
- Mobile first. Verify at 375px, 768px, 1280px.

## Workflow

1. Read `DESIGN.md` before building or changing any visual element.
2. Make the smallest change that solves the task. Do not refactor unrelated files.
3. Run `pnpm typecheck && pnpm lint && pnpm build` before declaring a task done.
4. If a request conflicts with `DESIGN.md`, stop and ask instead of improvising.
5. Commit style: conventional commits (`feat:`, `fix:`, `style:`, `chore:`), one logical change per commit.

## Do not

- Do not add UI libraries other than shadcn/ui (no MUI, Chakra, Mantine, etc.).
- Do not add gradients, glows, glassmorphism, or purple-to-blue hero backgrounds.
- Do not add stock illustrations or emoji in headings.
- Do not add analytics, cookie banners, or third-party scripts without asking.
- Do not fabricate testimonials, metrics, or logos.
