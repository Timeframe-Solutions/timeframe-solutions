# Design Tokens — Timeframe Solutions

**Document version:** 1.0  
**Extracted from:** Logo (blue square icon, "Timeframe Solutions" wordmark)  
**Tagline:** Fast, Reliable Web Solutions  
**Stack:** Tailwind CSS v4 · CSS custom properties

---

## Design Direction

**Aesthetic:** Precise, confident, Nairobi-grounded. Not a Western SaaS clone.  
**Tone:** A local studio that knows its craft — approachable but not casual.  
**Signature element:** A diagonal speed-line accent used on the hero section only — one deliberate nod to "Fast" in the tagline, nowhere else.

The logo gives us a medium-dark cyan-blue square with a cut corner motif (the bracket/frame shape). The wordmark is set in a clean geometric sans. Design direction follows that: geometric, structured, with one warm accent to prevent the site from reading cold.

---

## Color Palette

```css
/* === Timeframe Solutions — CSS Custom Properties === */
/* Add to app/assets/css/tokens.css and import globally */

:root {
  /* Brand */
  --tf-primary: #1d6fa4; /* Logo blue — primary actions, links, nav accent */
  --tf-primary-dark: #155680; /* Hover state for primary */
  --tf-primary-light: #e8f4fb; /* Tinted backgrounds, badges, highlights */

  /* Accent */
  --tf-accent: #f59e0b; /* Amber — WhatsApp CTA, pricing highlight, speed-line */
  --tf-accent-dark: #d97706; /* Hover on accent */

  /* Neutrals */
  --tf-surface: #ffffff; /* Page background */
  --tf-surface-alt: #f7f9fc; /* Alternate section bg (subtle blue-grey tint) */
  --tf-border: #e2e8f0; /* Card borders, dividers */

  /* Text */
  --tf-text-primary: #0f172a; /* Headings — near-black with blue undertone */
  --tf-text-body: #475569; /* Body copy */
  --tf-text-muted: #94a3b8; /* Captions, metadata, placeholder */
  --tf-text-inverse: #ffffff; /* Text on dark/primary backgrounds */

  /* Semantic */
  --tf-success: #10b981; /* Form success states */
  --tf-error: #ef4444; /* Form error states */
}
```

### Palette rationale

| Token               | Hex       | Usage                                                                                                                                                   |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--tf-primary`      | `#1D6FA4` | Pulled directly from the logo square. Confident mid-blue — professional without being corporate-cold.                                                   |
| `--tf-accent`       | `#F59E0B` | Warm amber. Contrasts cleanly with the blue, gives energy without neon-aggression. Used sparingly — WhatsApp CTA, pricing card border, hero speed-line. |
| `--tf-surface-alt`  | `#F7F9FC` | Very slight blue tint. Sections that use this feel connected to the brand without adding a new color.                                                   |
| `--tf-text-primary` | `#0F172A` | Slate-950. Warmer than pure black, pairs well with the blue palette.                                                                                    |

---

## Typography

```css
:root {
  /* Typefaces */
  --tf-font-display: "Plus Jakarta Sans", sans-serif; /* Headlines, nav, CTAs */
  --tf-font-body: "Inter", sans-serif; /* Body copy, UI text */

  /* Scale (desktop) */
  --tf-text-xs: 0.75rem; /* 12px — labels, badges */
  --tf-text-sm: 0.875rem; /* 14px — captions, metadata */
  --tf-text-base: 1rem; /* 16px — body default */
  --tf-text-lg: 1.125rem; /* 18px — lead paragraphs */
  --tf-text-xl: 1.25rem; /* 20px — card headings */
  --tf-text-2xl: 1.5rem; /* 24px — section subheadings */
  --tf-text-3xl: 1.875rem; /* 30px — section headings */
  --tf-text-4xl: 2.25rem; /* 36px — page headings */
  --tf-text-5xl: 3rem; /* 48px — hero headline (desktop) */
  --tf-text-6xl: 3.75rem; /* 60px — hero headline (large screens) */

  /* Weights */
  --tf-weight-regular: 400;
  --tf-weight-medium: 500;
  --tf-weight-semibold: 600;
  --tf-weight-bold: 700;
  --tf-weight-extrabold: 800;

  /* Line heights */
  --tf-leading-tight: 1.2; /* Large display text */
  --tf-leading-snug: 1.35; /* Subheadings */
  --tf-leading-normal: 1.6; /* Body copy */
  --tf-leading-loose: 1.8; /* Long-form prose */
}
```

### Typeface rationale

**Plus Jakarta Sans (display):** Indonesian-origin geometric sans that reads distinctly non-Western-generic. Clean, modern, slightly condensed at large sizes — works well for "Fast, Reliable" messaging. Free on Google Fonts.

**Inter (body):** The most legible UI typeface at small sizes. Pairs well as a neutral foil to Jakarta Sans's personality. Already familiar to users — reduces cognitive load on body copy.

---

## Spacing Scale

```css
:root {
  --tf-space-1: 0.25rem; /*  4px */
  --tf-space-2: 0.5rem; /*  8px */
  --tf-space-3: 0.75rem; /* 12px */
  --tf-space-4: 1rem; /* 16px */
  --tf-space-5: 1.25rem; /* 20px */
  --tf-space-6: 1.5rem; /* 24px */
  --tf-space-8: 2rem; /* 32px */
  --tf-space-10: 2.5rem; /* 40px */
  --tf-space-12: 3rem; /* 48px */
  --tf-space-16: 4rem; /* 64px */
  --tf-space-20: 5rem; /* 80px */
  --tf-space-24: 6rem; /* 96px */

  /* Section vertical padding */
  --tf-section-py-sm: var(--tf-space-12); /* 48px  — mobile */
  --tf-section-py-lg: var(--tf-space-20); /* 80px  — desktop */
}
```

---

## Border Radius

```css
:root {
  --tf-radius-sm: 0.25rem; /*  4px — badges, tags */
  --tf-radius-md: 0.5rem; /*  8px — inputs, small cards */
  --tf-radius-lg: 0.75rem; /* 12px — cards, panels */
  --tf-radius-xl: 1rem; /* 16px — large cards, modals */
  --tf-radius-2xl: 1.5rem; /* 24px — hero image, feature blocks */
  --tf-radius-full: 9999px; /* Pills, avatar circles */
}
```

---

## Shadows

```css
:root {
  --tf-shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.08);
  --tf-shadow-md: 0 4px 16px rgba(15, 23, 42, 0.1);
  --tf-shadow-lg: 0 8px 32px rgba(15, 23, 42, 0.12);
  --tf-shadow-card: 0 2px 8px rgba(29, 111, 164, 0.08); /* Blue-tinted card shadow */
}
```

---

## Layout

```css
:root {
  --tf-container-max: 1200px; /* Max page width */
  --tf-container-pad: 1.5rem; /* Horizontal padding — mobile */
  --tf-container-pad-lg: 2rem; /* Horizontal padding — desktop */
  --tf-nav-height: 64px; /* Sticky nav height */
  --tf-grid-cols: 12; /* Base grid */
}
```

### Breakpoints (Tailwind v4 defaults used as-is)

| Name | Width  | Usage                  |
| ---- | ------ | ---------------------- |
| `sm` | 640px  | Large phones           |
| `md` | 768px  | Tablets, small laptops |
| `lg` | 1024px | Desktop                |
| `xl` | 1280px | Wide desktop           |

**Design at:** 375px (mobile base) → 768px → 1280px

---

## Component Tokens

### Buttons

```css
/* Primary — used for main page CTAs */
.btn-primary {
  background: var(--tf-primary);
  color: var(--tf-text-inverse);
  border-radius: var(--tf-radius-md);
  font-family: var(--tf-font-display);
  font-weight: var(--tf-weight-semibold);
  padding: 0.75rem 1.5rem;
  transition: background 200ms ease;
}
.btn-primary:hover {
  background: var(--tf-primary-dark);
}

/* Accent — WhatsApp CTA only */
.btn-accent {
  background: var(--tf-accent);
  color: var(--tf-text-primary);
  border-radius: var(--tf-radius-md);
  font-family: var(--tf-font-display);
  font-weight: var(--tf-weight-bold);
  padding: 0.75rem 1.5rem;
}
.btn-accent:hover {
  background: var(--tf-accent-dark);
}

/* Ghost — secondary actions */
.btn-ghost {
  background: transparent;
  color: var(--tf-primary);
  border: 1.5px solid var(--tf-primary);
  border-radius: var(--tf-radius-md);
  font-family: var(--tf-font-display);
  font-weight: var(--tf-weight-semibold);
  padding: 0.75rem 1.5rem;
}
.btn-ghost:hover {
  background: var(--tf-primary-light);
}
```

### Cards

```css
.card {
  background: var(--tf-surface);
  border: 1px solid var(--tf-border);
  border-radius: var(--tf-radius-lg);
  box-shadow: var(--tf-shadow-card);
  padding: var(--tf-space-6);
  transition:
    box-shadow 200ms ease,
    transform 200ms ease;
}
.card:hover {
  box-shadow: var(--tf-shadow-md);
  transform: translateY(-2px);
}
```

### Badges / Industry tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  background: var(--tf-primary-light);
  color: var(--tf-primary);
  border-radius: var(--tf-radius-full);
  font-size: var(--tf-text-xs);
  font-weight: var(--tf-weight-semibold);
  padding: 0.25rem 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

---

## Signature Element — Hero Speed Line

One diagonal amber line, top-right of the hero section only. Rendered as an SVG positioned absolutely behind the headline. 3px stroke, 15° angle, fades from `--tf-accent` to transparent. Appears only on desktop (`hidden md:block`).

This is the single visual risk. It encodes "Fast" from the tagline without being literal. It never appears on any other page section.

```html
<!-- HeroSection.vue — decorative only, aria-hidden -->
<svg aria-hidden="true" class="speed-line hidden md:block" ...>
  <line
    x1="0"
    y1="100%"
    x2="100%"
    y2="0"
    stroke="var(--tf-accent)"
    stroke-width="3"
    stroke-linecap="round"
    opacity="0.35"
  />
</svg>
```

---

## Tailwind v4 CSS Variable Integration

In `app/assets/css/tokens.css`:

```css
@import "tailwindcss";

@theme {
  --color-tf-primary: #1d6fa4;
  --color-tf-primary-dark: #155680;
  --color-tf-primary-light: #e8f4fb;
  --color-tf-accent: #f59e0b;
  --color-tf-accent-dark: #d97706;
  --color-tf-surface: #ffffff;
  --color-tf-surface-alt: #f7f9fc;
  --color-tf-border: #e2e8f0;
  --color-tf-text-primary: #0f172a;
  --color-tf-text-body: #475569;
  --color-tf-text-muted: #94a3b8;
  --color-tf-text-inverse: #ffffff;

  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

This exposes `bg-tf-primary`, `text-tf-accent`, `rounded-lg` etc. as native Tailwind utility classes throughout the project. **Never write a raw hex value in a component.**

---

## Google Fonts Import

In `app/layouts/default.vue` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

Or via `nuxt.config.ts` with `@nuxtjs/google-fonts` module.

---

## Progress

```
✅ project-brief.md
✅ sitemap.md
✅ design-tokens.md         ← you are here
⬜ content.md
⬜ nuxt-project-structure.txt
⬜ component-inventory.md
```
