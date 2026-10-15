# DESIGN.md

Design system for the portfolio. Built on Next.js + Tailwind + shadcn/ui. Every visual decision should trace back to this file.

## Design principles

1. **Quiet confidence.** Near-black canvas, high-contrast white text, one restrained accent. Let the work speak.
2. **Terminal DNA, not terminal cosplay.** Monospace used for labels, metadata, dates and the prompt motif. Body copy stays in a clean sans. No fake window chrome, no blinking-cursor spam.
3. **Content-first single column.** One centered column, generous whitespace, strong hierarchy.
4. **Everything is a list of rows.** Experience, stack, links: consistent rows and tiles, consistent spacing.
5. **Motion is feedback, not decoration.** Short, subtle, and disabled under `prefers-reduced-motion`.

## Layout

- Single page, single column. Container: `max-w-[760px]` on content, centered, `px-6` mobile / `px-0` desktop inside the container.
- Vertical rhythm: sections separated by `py-16` desktop, `py-12` mobile, with a 1px divider between experience entries.
- Page top padding `pt-24`; bottom padding `pb-40` so the floating dock never covers content.
- Section order:
  1. Hero (name, buttons, avatar)
  2. About
  3. GitHub activity
  4. Experience timeline
  5. Stack
  6. Contact CTA + dock

## Color tokens

Define as CSS variables in `globals.css` (shadcn convention, HSL or OKLCH) and map to Tailwind.

| Token                  | Value     | Use                                                                                    |
| ---------------------- | --------- | -------------------------------------------------------------------------------------- |
| `--background`         | `#0b0b0b` | page background                                                                        |
| `--foreground`         | `#fafafa` | headings, primary text                                                                 |
| `--muted-foreground`   | `#a1a1aa` | body secondary, dates, subtitles                                                       |
| `--card`               | `#111111` | tiles, dock, buttons (secondary)                                                       |
| `--border`             | `#222222` | dividers, tile borders                                                                 |
| `--primary`            | `#fafafa` | primary button fill                                                                    |
| `--primary-foreground` | `#0b0b0b` | primary button text                                                                    |
| `--accent`             | `#4ade80` | terminal green, used only for prompt glyph, active heatmap level, link hover underline |
| `--ring`               | `#a1a1aa` | focus ring                                                                             |

Rules:

- One accent only. Do not introduce additional hues.
- Heatmap uses grayscale steps, with the brightest step using `--accent` or white.
- No gradients. No box shadows except a subtle `shadow-[0_0_0_1px_var(--border)]` on the dock.

## Typography

- Sans (body, headings): **Inter** via `next/font`.
- Mono (labels, dates, prompt, handle chip): **JetBrains Mono** via `next/font`.

| Role           | Style                                                        |
| -------------- | ------------------------------------------------------------ |
| H1 hero        | `text-5xl md:text-6xl font-bold tracking-tight`              |
| H2 section     | `text-3xl md:text-4xl font-bold tracking-tight`              |
| H3 entry title | `text-xl font-semibold`                                      |
| Body           | `text-base md:text-[17px] leading-7 text-foreground`         |
| Secondary      | `text-base text-muted-foreground`                            |
| Mono meta      | `font-mono text-sm text-muted-foreground` (dates, `@handle`) |

Section headings carry a shell command label in mono above the H2: accent `$` then the command in muted text (`$ cat about.md`, `$ ls ~/experience`). Commands live in `lib/data/terminal.ts`. Use as a small label above the H2, not inside it.

Terminal touches (the full set, do not add more):

- Hero: a `rudraksh@rudrakshh.live:~$ whoami` prompt line above the H1, so the name reads as its output.
- Footer: an interactive shell (`components/terminal.tsx`) in a `bg-card` bordered box, no window chrome. Commands live in `lib/terminal/commands.ts` and only print data from `lib/data`. It never autofocuses on load.
- Text selection uses the accent background.

Emphasis inside body copy is `font-semibold text-foreground` for key terms (for example the specializations and program names).

## Spacing and shape

- Radius: `rounded-md` for tiles, boxes, dialogs and buttons, `rounded-[1px]` for heatmap cells, `rounded-full` for avatar, dock and chips.
- Border: 1px `--border` everywhere. No thick borders.
- Base spacing scale: Tailwind default (4px). Common gaps: `gap-3` inside rows, `gap-6` between blocks, `gap-12` between sections.

## Components

Use shadcn/ui primitives and style via tokens.

### Hero

- Left: H1 `Hi, I'm Rudraksh`, then a button row.
- Buttons: `Resume / CV` (secondary variant, file icon, links to `/resume.pdf`) and `Get in touch` (primary variant, scrolls to contact).
- Right: circular avatar, 176px desktop / 112px mobile, 1px border, subtle ring. On mobile the avatar sits above the heading.

### About

- 2 to 3 short paragraphs maximum.
- Line 1: role and specialization with bold keywords.
- Line 2: a single inline row of credentials, each as `icon + bold name + "at" + org`, separated by a mid dot. Wraps on mobile.
- Line 3: one sentence linking to the blog (underlined link).

### GitHub activity

- Header row: calendar icon, title `GitHub Activity`, subtitle with total contributions in the last year, and a right-aligned mono chip with the `@username`.
- Grid: 7 rows by ~52 columns of squares (`size-3`, `gap-1`, `rounded-[1px]`), five grayscale levels. Horizontal scroll on mobile with the latest weeks visible.
- Tooltip (shadcn Tooltip) on hover: count and date.
- Loading state: skeleton grid. Error state: hide the grid, keep the header.

### Experience timeline

- A vertical list of entries separated by a 1px divider. No timeline line or dots.
- Entry layout (row): 48px circular org logo on the left with a 2px white border, content on the right.
  - Line 1: org name (H3) left, date range right in muted text (`Mar 2026 - Present`).
  - Line 2: role in muted text.
  - Line 3: 2 to 3 lines of description, muted-foreground at slightly reduced contrast.
  - Line 4: `Click to view featured contributions →` as a muted link; hover turns foreground and nudges the arrow 2px right.
- Clicking opens a shadcn `Dialog` or `Sheet` listing featured PRs (title, repo, link, status badge).
- Mobile: date moves below the org name.

### Stack

- H2 `Stack`.
- Grid of icon tiles: 64px squares (`size-16`), `rounded-md`, `bg-card`, 1px border, 40px centered icon in its native brand color. 12 per row desktop, wrapping to 6 on tablet and 4 on mobile, `gap-3`.
- Hover: border brightens to `--muted-foreground`, tile lifts `-translate-y-0.5`, tooltip shows the technology name.
- Every tile needs an `aria-label` and tooltip.

### Contact CTA

- Centered muted line: `Got a project, idea, or just want to chat? Let's connect.`
- One button: `Book a call` (primary). Opens the booking link in a new tab.

### Floating dock

- Fixed bottom center, `bottom-6`, pill shape, `bg-card/90` with `backdrop-blur-sm`, 1px border.
- Five circular icon buttons (48px): GitHub, LinkedIn, X, Email, Resume. 8px gaps.
- Hover: icon button background `--border`, slight scale to 1.1 (framer-motion spring, 150ms). Tooltip above.
- Always above content with `z-50`. Keyboard focusable with a visible ring.

## Motion

- Entrance: sections fade and rise 8px, 250ms ease-out, staggered once on first view (`whileInView`, `once: true`).
- Hover transitions: 150ms.
- Nothing loops. No parallax. No scroll-jacking.
- Wrap all motion in a `useReducedMotion` check and fall back to no animation.

## Responsive rules

- 375px: single column, stack tiles 4 per row, dock icons 40px, hero avatar above text.
- 768px: stack tiles 6 per row, hero side by side.
- 1280px+: content stays at 760px max width, do not widen.

## Accessibility

- Contrast: text on background must pass WCAG AA (muted text no darker than `#a1a1aa` on `#0b0b0b`).
- Focus rings visible on every interactive element.
- Icon-only buttons have `aria-label`. Decorative icons are `aria-hidden`.
- Heatmap has a visually hidden text summary (`486 contributions in the last year`).
- All external links use `rel="noopener noreferrer"`.

## Voice for UI copy

Short, direct, lowercase for mono labels, sentence case for everything else. No exclamation marks, no emoji, no "passionate", "ninja", "guru".

## Anti-patterns (never ship)

- Gradient or aurora backgrounds, glow effects, glassmorphism cards
- Neon colors, multiple accent hues
- Fake macOS or terminal window chrome with traffic-light dots
- Typing animations that block reading content
- Carousel sliders, cursor trails
- Scrollbar styling beyond the one in `globals.css` (square dark-gray thumb, no arrow buttons)
- Centered text walls longer than 3 lines
