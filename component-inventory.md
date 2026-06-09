# Component Inventory — Timeframe Solutions

**Document version:** 1.0  
**Total components:** 35  
**Convention:** Props typed in TypeScript. All color via CSS custom properties. Content from app/data/\*.ts, not hardcoded strings.

---

## Reading this file

Each entry lists:

- **File path** relative to `app/components/`
- **Job** — one sentence on what it does
- **Props** — TypeScript interface
- **Slots** — named slots if any
- **Notes** — implementation specifics, gotchas, reuse rules

---

## ui/ — Primitive atoms (shared everywhere)

---

### `ui/AppButton.vue`

**Job:** Single button primitive used for every CTA on the site.

```ts
interface Props {
  variant: "primary" | "accent" | "ghost";
  href?: string; // renders as <a> if provided, <button> otherwise
  target?: "_blank" | "_self";
  size?: "sm" | "md"; // default: 'md'
  disabled?: boolean;
}
```

**Notes:**

- `variant: 'accent'` is reserved exclusively for WhatsApp CTAs. Enforce this by convention, not code.
- When `href` is set, render `<a>` with `rel="noopener noreferrer"` if `target="_blank"`.
- Uses `btn-primary`, `btn-accent`, `btn-ghost` CSS classes from tokens.css — no inline styles.
- Size `sm` reduces padding to `0.5rem 1rem`.

---

### `ui/AppBadge.vue`

**Job:** Small pill label — used for industry tags on portfolio cards and section eyebrows (e.g. "OUR WORK").

```ts
interface Props {
  label: string;
  variant?: "default" | "eyebrow"; // default: 'default'
}
```

**Notes:**

- `variant: 'eyebrow'` renders with `letter-spacing: 0.1em` and `text-transform: uppercase` — used above section headings.
- `variant: 'default'` is the `.badge` class from tokens.css — `--tf-primary-light` background, `--tf-primary` text.

---

### `ui/AppCard.vue`

**Job:** Base card shell with border, shadow, hover lift. Wraps any card content via default slot.

```ts
interface Props {
  hoverable?: boolean; // default: true — enables translateY(-2px) on hover
  padding?: "sm" | "md" | "lg"; // default: 'md' → var(--tf-space-6)
}
```

**Slots:** `default`

**Notes:**

- Uses `.card` class from tokens.css.
- `hoverable: false` for cards inside a grid where hover causes layout shift.

---

### `ui/PageHero.vue`

**Job:** Standard inner-page hero block — eyebrow + heading + subheading. Used on /work, /services, /pricing, /about, /contact.

```ts
interface Props {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean; // default: true
}
```

**Notes:**

- Heading uses `--tf-font-display`, `--tf-text-4xl`, `--tf-weight-bold`.
- Subheading uses `--tf-font-body`, `--tf-text-lg`, `--tf-text-body` color.
- `centered: false` for left-aligned heroes (e.g. case study pages).
- Background: `--tf-surface-alt` with `--tf-section-py-sm` / `--tf-section-py-lg` padding.

---

### `ui/SectionWrapper.vue`

**Job:** Wraps every section with consistent horizontal padding and max-width container.

```ts
interface Props {
  bg?: "surface" | "surface-alt"; // default: 'surface'
  py?: "sm" | "lg"; // default: 'lg'
  id?: string; // for anchor links
}
```

**Slots:** `default`

**Notes:**

- Inner div: `max-width: var(--tf-container-max)`, `margin: 0 auto`, padding from `--tf-container-pad` / `--tf-container-pad-lg`.
- Outer div: background color + vertical padding from props.
- Every section on every page is wrapped by this component. Never add padding directly to a section component.

---

## global/ — Auto-imported across all pages

---

### `global/NavBar.vue`

**Job:** Sticky top navigation with logo, links, and WhatsApp CTA button.

**Props:** none (reads `useWhatsApp()` composable internally)

**Notes:**

- Height: `var(--tf-nav-height)` = 64px. `position: sticky; top: 0; z-index: 50`.
- Background: `--tf-surface` with `--tf-shadow-sm` on scroll (add class via `useScroll`).
- Desktop: logo left, links center, WhatsApp button right.
- Mobile: logo left, hamburger right. Hamburger opens a slide-down drawer with nav links + full-width WhatsApp CTA at bottom.
- Active link: `--tf-primary` color + 2px bottom border.
- WhatsApp button: `AppButton variant="accent"`.

---

### `global/Footer.vue`

**Job:** Site footer with tagline, nav links, contact email, and copyright.

**Props:** none

**Notes:**

- Background: `--tf-text-primary` (dark). Text: `--tf-text-inverse` and `--tf-text-muted`.
- Layout: tagline top, nav links middle, contact + copyright bottom.
- Nav links same as NavBar minus WhatsApp button.

---

### `global/CtaBanner.vue`

**Job:** Reusable full-width CTA strip. Appears at the bottom of every page and most sections.

```ts
interface Props {
  heading: string;
  subheading?: string;
  ctaLabel?: string; // default: 'WhatsApp Us →'
  ctaHref?: string; // default: useWhatsApp().url
  secondaryLabel?: string;
  secondaryHref?: string;
}
```

**Notes:**

- Background: `--tf-primary`. Text: `--tf-text-inverse`.
- CTA button: `AppButton variant="accent"` (amber on blue — high contrast).
- Max-width: `var(--tf-container-max)`. Centered text on mobile, flex row on desktop.

---

## home/ — index.vue only

---

### `home/HeroSection.vue`

**Job:** Above-the-fold hero — headline, subheadline, dual CTAs, social proof line, speed-line SVG.

**Props:** none (all content hardcoded from content.md — hero copy doesn't change)

**Notes:**

- Background: `--tf-surface`. Min-height: `calc(100vh - var(--tf-nav-height))`.
- Headline: `--tf-font-display`, `--tf-text-5xl` desktop / `--tf-text-4xl` mobile, `--tf-weight-extrabold`.
- Speed-line SVG: positioned absolute, top-right, `hidden md:block`, `aria-hidden="true"`. Amber (`--tf-accent`), `opacity: 0.35`, 15° diagonal. This is the **only** place the speed-line appears.
- Primary CTA: `AppButton variant="accent"` (WhatsApp).
- Secondary CTA: `AppButton variant="ghost"` (View Our Work → `/work`).
- Social proof line: 5 vertical names in `--tf-text-muted`, separated by `·`.

---

### `home/ServicesStrip.vue`

**Job:** Five vertical cards with icon, title, and short description.

**Props:** none (renders from `data/services.ts`)

```ts
// data/services.ts shape
interface ServiceVertical {
  id: string;
  icon: string; // Nuxt Icons name e.g. 'lucide:home'
  title: string;
  description: string;
}
```

**Notes:**

- Layout: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` — 5 columns on desktop, stacked on mobile.
- Each card: `AppCard` + icon (32px, `--tf-primary`) + title + description.
- Section uses `SectionWrapper bg="surface-alt"`.

---

### `home/PortfolioPreview.vue`

**Job:** 4-card portfolio teaser grid. Each card links to a case study.

**Props:** none (renders from `data/portfolio.ts`)

```ts
// data/portfolio.ts shape
interface PortfolioProject {
  slug: string; // 'vanguard-properties'
  title: string;
  industry: string;
  oneLiner: string;
  coverImage: string; // path under public/images/portfolio/
  route: string; // '/work/vanguard-properties'
}
```

**Notes:**

- Layout: `grid grid-cols-1 md:grid-cols-2` — 2×2 on desktop.
- Each card: cover image (NuxtImg, aspect-ratio 16/9), industry badge (AppBadge), title, one-liner, "View Project →" link.
- "View all work →" link below grid.

---

### `home/WhyTimeframe.vue`

**Job:** 4 numbered proof points — speed, mobile-first, price, local.

**Props:** none (renders from `data/why-timeframe.ts`)

```ts
// data/why-timeframe.ts shape
interface ProofPoint {
  number: string; // '01', '02', '03', '04'
  title: string;
  body: string;
}
```

**Notes:**

- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.
- Number: `--tf-text-3xl`, `--tf-primary`, `--tf-weight-extrabold` — large, left-aligned.
- Title: `--tf-text-xl`, `--tf-weight-semibold`.
- No card shell — open layout with top border accent in `--tf-primary`.

---

### `home/PricingSnapshot.vue`

**Job:** Single pricing card teaser — KES 80k, included items, CTA. Full pricing detail lives on /pricing.

**Props:** none (all content from content.md — hardcoded is fine here)

**Notes:**

- Card: centered, `max-width: 560px`, `AppCard`, `--tf-shadow-lg`.
- Price: `--tf-text-5xl`, `--tf-primary`, `--tf-font-display`.
- Included items: checkmark list using `--tf-success` color for checkmarks.
- CTA: `AppButton variant="accent"` full-width.
- Muted link below card: "Need M-Pesa? Let's talk →".

---

## work/ — /work and /work/\* pages

---

### `work/PortfolioGrid.vue`

**Job:** Filterable grid of all 4 portfolio projects.

```ts
interface Props {
  projects: PortfolioProject[]; // passed from /work page, loaded from data/portfolio.ts
}
```

**Notes:**

- Filter tabs: All · Real Estate · Car Rental · Healthcare · Electronics.
- Active filter: `--tf-primary` background, white text. Inactive: `--tf-border` border, `--tf-text-body` text.
- Renders `PortfolioCard` for each visible project.
- Filter is client-side: `ref<string>('all')` + `computed` filtered array.

---

### `work/PortfolioCard.vue`

**Job:** Single portfolio item card — image, badge, title, one-liner, link.

```ts
interface Props {
  project: PortfolioProject;
}
```

**Notes:**

- Cover image: `NuxtImg`, aspect-ratio 16/9, `border-radius: var(--tf-radius-lg)` top corners only.
- Industry badge: `AppBadge`.
- On hover: `AppCard` lift + image subtle zoom (transform: scale(1.02), overflow hidden).
- "View Project →" is a `NuxtLink` — entire card is clickable.

---

### `work/CaseStudyHero.vue`

**Job:** Case study top section — badge, project name, one-liner.

```ts
interface Props {
  industry: string;
  title: string;
  oneLiner: string;
}
```

**Notes:**

- Background: `--tf-surface-alt`.
- Industry badge: `AppBadge`.
- Title: `--tf-text-4xl`, `--tf-font-display`, `--tf-weight-bold`.

---

### `work/CaseStudyMeta.vue`

**Job:** 3-column metadata grid — Industry, Pages, Key Features.

```ts
interface Props {
  industry: string;
  pages: string;
  features: string;
}
```

**Notes:**

- Layout: `grid grid-cols-3` on desktop, `grid-cols-1` on mobile.
- Each column: label (`--tf-text-muted`, uppercase) + value (`--tf-text-primary`, semibold).
- Bordered top and bottom with `--tf-border`.

---

### `work/CaseStudyScreenshots.vue`

**Job:** Screenshot gallery for the case study demo.

```ts
interface Props {
  images: string[]; // array of paths under public/images/portfolio/{slug}/
  title: string;
}
```

**Notes:**

- Layout: first image full-width, remaining in a 2-col grid.
- All images: `NuxtImg`, `border-radius: var(--tf-radius-xl)`, `--tf-shadow-md`.
- No lightbox needed for the agency site — keep it simple.

---

### `work/CaseStudyFeatures.vue`

**Job:** Feature list with icons — what this demo project includes.

```ts
interface Props {
  features: string[];
}
```

**Notes:**

- Each item: `--tf-success` checkmark icon (lucide:check-circle-2) + feature text.
- Layout: `grid grid-cols-1 md:grid-cols-2`.

---

### `work/CaseStudyDemonstrates.vue`

**Job:** "What this demonstrates to prospects" block — the sales argument.

```ts
interface Props {
  body: string;
}
```

**Notes:**

- Background: `--tf-primary-light`. Left border accent: 4px solid `--tf-primary`.
- Body text: `--tf-text-lg`, `--tf-text-primary`.
- Heading: "What this means for you" — hardcoded label.

---

## services/ — /services page

---

### `services/ServiceDetail.vue`

**Job:** Full block for one vertical — heading, body paragraph, features list.

```ts
interface Props {
  vertical: ServiceVertical & { body: string; featureList: string[] };
}
```

**Notes:**

- Layout: heading + body left, features list right on desktop. Stacked on mobile.
- Features list same style as `CaseStudyFeatures`.
- Even-indexed verticals: `SectionWrapper bg="surface"`. Odd: `bg="surface-alt"`. Alternating rhythm.

---

### `services/IncludesList.vue`

**Job:** Full list of everything in the KES 80k package.

**Props:** none (content hardcoded from content.md)

**Notes:**

- Layout: 2-column grid on desktop, single column on mobile.
- Each item: `--tf-success` check icon + label.
- Wrapped in `AppCard` with `--tf-primary` top border accent (4px).

---

### `services/UpsellList.vue`

**Job:** List of out-of-scope items that require a separate quote.

**Props:** none

**Notes:**

- Each item: `--tf-accent` lightning bolt icon + label.
- Heading: "Need more? We scope separately."
- Muted styling — these are secondary, not the pitch.

---

## pricing/ — /pricing page

---

### `pricing/PricingCard.vue`

**Job:** Full pricing detail card — name, price, installments, included list.

**Props:** none (content from content.md — hardcoded)

**Notes:**

- Max-width: 600px, centered.
- Price: `--tf-text-6xl`, `--tf-primary`, `--tf-font-display`.
- Top border: 4px solid `--tf-accent` (amber — the one pricing highlight use of accent).
- Installment note: muted text below price.
- Included list: same checkmark style as IncludesList.
- CTA: `AppButton variant="accent"` full-width.

---

### `pricing/PricingFaq.vue`

**Job:** Accordion FAQ — 8 questions from content.md.

```ts
// data/pricing-faq.ts shape
interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}
```

**Notes:**

- One open at a time. Click to toggle. Default: first item open.
- Chevron icon rotates 180° when open (CSS transition).
- Answer text: `--tf-text-body`, `--tf-leading-normal`.
- Border between items: `--tf-border`.
- No external accordion library — implement with `ref<number | null>`.

---

## about/ — /about page

---

### `about/AboutStory.vue`

**Job:** Studio narrative — origin, mission, who we build for.

**Props:** none (content hardcoded)

**Notes:**

- Layout: heading left, body paragraphs right on desktop (2-col). Stacked on mobile.
- Body: `--tf-text-lg`, `--tf-leading-loose`.

---

### `about/AboutStack.vue`

**Job:** Technologies grid — what Timeframe builds with.

**Props:** none

```ts
// Shape (hardcoded inline):
interface StackItem {
  name: string;
  role: string;
  icon?: string; // optional Nuxt Icons name
}
```

**Notes:**

- Layout: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5`.
- Each item: icon or logo + name + one-line role description.
- Background: `--tf-surface-alt`.

---

## contact/ — /contact page

---

### `contact/ContactGrid.vue`

**Job:** Layout shell — WhatsApp block left, form right on desktop.

**Props:** none (renders ContactWhatsApp + ContactForm as children)

**Notes:**

- Layout: `grid grid-cols-1 md:grid-cols-2 gap-12`.
- On mobile: WhatsApp block stacks above form.

---

### `contact/ContactWhatsApp.vue`

**Job:** WhatsApp CTA block — heading, explanatory copy, large WhatsApp button.

**Props:** none (reads `useWhatsApp()`)

**Notes:**

- Button: `AppButton variant="accent"` full-width.
- WhatsApp green icon (lucide:message-circle) next to button label.
- Background: `--tf-primary-light` with `--tf-radius-xl` border-radius.

---

### `contact/ContactForm.vue`

**Job:** Email inquiry form — name, business, industry select, message.

**Props:** none (uses `useContactForm()` composable)

**Notes:**

- Fields: name (text), business name (text), industry (select), message (textarea).
- Validation: all fields required. Inline error messages below each field on blur.
- Submit: POST to `/api/contact` via `useContactForm()`. Never call `$fetch` directly here.
- Success state: replaces form with success message.
- Error state: shows error message + "Try WhatsApp instead" link.
- Input styles: `--tf-border` border, `--tf-radius-md`, focus ring `--tf-primary`.

---

### `contact/ContactMeta.vue`

**Job:** Response time, email, location metadata strip.

**Props:** none

**Notes:**

- Layout: horizontal flex, 3 items — Response Time · Email · Location.
- Icon + label + value for each.
- Stacks vertically on mobile.

---

## Data files summary

| File                    | Shape                | Used by                                                              |
| ----------------------- | -------------------- | -------------------------------------------------------------------- |
| `data/portfolio.ts`     | `PortfolioProject[]` | PortfolioPreview, PortfolioGrid, PortfolioCard, all case study pages |
| `data/services.ts`      | `ServiceVertical[]`  | ServicesStrip, ServiceDetail                                         |
| `data/pricing-faq.ts`   | `FaqItem[]`          | PricingFaq                                                           |
| `data/why-timeframe.ts` | `ProofPoint[]`       | WhyTimeframe                                                         |

---

## Composables summary

### `composables/useWhatsApp.ts`

```ts
// Returns a computed wa.me URL using the public runtime config number
export const useWhatsApp = () => {
  const config = useRuntimeConfig();
  const number = config.public.whatsappNumber;
  const message = encodeURIComponent(
    "Hi Timeframe, I'd like to discuss a website for my business.",
  );
  const url = `https://wa.me/${number}?text=${message}`;
  return { url };
};
```

### `composables/useContactForm.ts`

```ts
// Manages form state, client-side validation, and POST to /api/contact
export const useContactForm = () => {
  const form = reactive({
    name: "",
    businessName: "",
    industry: "",
    message: "",
  });
  const status = ref<"idle" | "loading" | "success" | "error">("idle");
  const errors = reactive<Record<string, string>>({});

  const validate = () => {
    /* required checks */
  };
  const submit = async () => {
    if (!validate()) return;
    status.value = "loading";
    try {
      await $fetch("/api/contact", { method: "POST", body: form });
      status.value = "success";
    } catch {
      status.value = "error";
    }
  };
  return { form, status, errors, submit };
};
```

---

## Server route

### `server/api/contact.post.ts`

- Reads `name`, `businessName`, `industry`, `message` from body.
- Validates presence of all fields.
- Sends notification email using `useRuntimeConfig().contactEmail`.
- Returns `{ success: true }` or throws `createError({ statusCode: 500 })`.
- Implementation: use Node.js `nodemailer` with a transactional provider (Brevo free tier works), or simply `console.log` during development.

---

## Build order recommendation

Build components in this sequence to avoid import errors and enable early visual testing:

```
Phase 1 — Foundation
  tokens.css → SectionWrapper → AppButton → AppBadge → AppCard → PageHero

Phase 2 — Shell
  default.vue (layout) → NavBar → Footer

Phase 3 — Home page (highest conversion value, build first)
  HeroSection → ServicesStrip → PortfolioPreview → WhyTimeframe → PricingSnapshot → CtaBanner → index.vue

Phase 4 — Work pages
  PortfolioCard → PortfolioGrid → work/index.vue
  CaseStudyHero → CaseStudyMeta → CaseStudyScreenshots → CaseStudyFeatures → CaseStudyDemonstrates
  → All 4 case study pages

Phase 5 — Supporting pages
  services.vue → pricing.vue → about.vue → contact.vue

Phase 6 — Server + composables
  useWhatsApp → useContactForm → contact.post.ts
```

---

## Progress

```
✅ project-brief.md
✅ sitemap.md
✅ design-tokens.md
✅ content.md
✅ nuxt-project-structure.txt
✅ component-inventory.md      ← you are here
```
