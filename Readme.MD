# Portfolio — setup & token reference

Vite · React 19 · TypeScript · Tailwind v4 · Framer Motion

## Install

```bash
npm install
npm run dev
```

That's it. Tailwind v4 runs through the Vite plugin — **there is no `tailwind.config.js` and no `postcss.config.js`**. All theming happens in `src/styles/theme.css`.

## Cheat sheet — what to type

### Colour

| Token           | Hex       | Utilities                                     |
| --------------- | --------- | --------------------------------------------- |
| canvas          | `#0A0B0E` | `bg-canvas`                                   |
| surface / card  | `#0D0F13` | `bg-surface`                                  |
| chrome/elevated | `#101318` | `bg-chrome`                                   |
| hairline        | `#14181E` | `border-hairline` · `.rule`                   |
| border default  | `#1B2027` | `border-line`                                 |
| border hover    | `#2F6F66` | `hover:border-line-hover`                     |
| accent          | `#4FE0D0` | `bg-accent` · `text-accent` · `border-accent` |
| accent hover    | `#7EF0E2` | `hover:bg-accent-hover`                       |
| accent ink      | `#04120F` | `text-accent-ink` (text sitting ON accent)    |
| text primary    | `#F2F5F7` | `text-fg`                                     |
| text secondary  | `#A9AFBA` | `text-fg-dim`                                 |
| text muted      | `#5B6270` | `text-fg-muted`                               |

### Type — use the roles, not raw `text-*`

Each role already carries size, weight, tracking, and line-height **at all three breakpoints**. One class, correct everywhere.

| Class        | Desktop / Tablet / Mobile | Notes                            |
| ------------ | ------------------------- | -------------------------------- |
| `t-display`  | 76 / 52 / 38              | 600 · -0.03em · 1.02             |
| `t-contact`  | 40 / 32 / 27              | 600 · -0.02em                    |
| `t-h2`       | 26 / 23 / 21              | 600 · -0.01em                    |
| `t-lede`     | 20 / 17 / 15.5            | 400 · 1.6 · secondary colour     |
| `t-body`     | 16 / 15 / 15              | 400 · 1.75 (also the `<body>`)   |
| `t-meta`     | 14 / 13.5 / 13.5          | 400 · 1.6 · card + meta text     |
| `t-label`    | 12.5 / 12.5 / 11.5        | mono · 500 · 0.08em · uppercase  |

```tsx
<p className="t-label">Software Engineer · Frontend · Backend</p>
<h1 className="t-display">Teddy-Austin Tobenna</h1>
<p className="t-lede">I design and build web products end to end.</p>
```

Families: `font-display` (Space Grotesk, also the default `font-sans`) and `font-mono` (JetBrains Mono). Both self-hosted via Fontsource — no network request to Google.

### Breakpoints

Tailwind's defaults are **wiped**. Only two exist, matching the spec:

- base = mobile (≤640)
- `tablet:` = 641px+
- `desktop:` = 1025px+

```tsx
<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
```

### Spacing

The spec scale (4 8 12 16 24 32 48 64) is Tailwind's native `1 2 3 4 6 8 12 16`. Use `p-4` for 16px, `gap-6` for 24px, `py-16` for 64px. Nothing extra to learn.

Section rhythm is pre-baked (64/48 → 52/32 → 40/22):

```tsx
<section className="section">        // padding y + x
<section className="section-y">      // padding y only
```

### Layout

```tsx
<div className="page">  // 1152px max-width, centred, clamp(20px,5vw,48px) gutters
```

### Radius & shadow

`rounded-btn` (8) · `rounded-card` (14) · `rounded-pill` (20) · `rounded-window` (14) / `rounded-window-md` (26) / `rounded-window-lg` (44) · `shadow-float`

### Extras

- `.bg-hatch` — the diagonal hatch fill used in the project thumbnails
- `.rule` — 1px hairline divider
- `.tabular` — tabular numerals for the stat row (4+ / 2.6k / 50% / ∞)

## Motion

`src/lib/motion.ts` holds the tokens. Spread `reveal` onto anything that should animate in on scroll:

```tsx
import { motion } from "framer-motion";
import { reveal, stagger, rise } from "@/lib/motion";

<motion.section {...reveal}>…</motion.section>

<motion.ul variants={stagger} initial="hidden" animate="show">
  {items.map((i) => (
    <motion.li key={i.id} variants={rise}>…</motion.li>
  ))}
</motion.ul>;
```

`prefers-reduced-motion` is already respected globally in `theme.css`.

## Imports

`@/` is aliased to `src/` — `import { cn } from "@/lib/cn"`.

## Deploy

`vercel.json` includes the SPA rewrite. Push and import — build command `npm run build`, output `dist`.