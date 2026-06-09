# Sitemap — Timeframe Solutions

**Document version:** 1.0  
**Rendering:** SSR (Nuxt 4 default) unless noted  
**Nuxt 4 convention:** All pages live in `app/pages/`

---

## Route Tree

```
/                                   ← Home (SSR)
├── /work                           ← Portfolio grid (SSR)
│   ├── /work/vanguard-properties   ← Case study: Real Estate (SSR)
│   ├── /work/apex-rides-nairobi    ← Case study: Car Rental (SSR)
│   ├── /work/plaza-dental-clinic   ← Case study: Healthcare (SSR)
│   └── /work/nexus-gadgets-kenya   ← Case study: Electronics (SSR)
├── /services                       ← Services breakdown (SSR)
├── /pricing                        ← Pricing + FAQ (SSR)
├── /about                          ← Studio story (SSR)
└── /contact                        ← Contact form + WhatsApp (SSR)
```

---

## Page Specifications

### `/` — Home

**Job:** Convert a cold visitor into a WhatsApp inquiry in one scroll  
**Rendering:** SSR  
**Layout:** `default`

Sections (in scroll order):

1. `NavBar` — logo + nav links + WhatsApp CTA button
2. `HeroSection` — headline, subheadline, dual CTA (WhatsApp + View Work)
3. `ServicesStrip` — 5 verticals as icon cards (real estate, car yards, clinics, SACCOs, retail)
4. `PortfolioPreview` — 4 portfolio cards (teaser, links to `/work/*`)
5. `WhyTimeframe` — 3–4 proof points (speed, Nairobi-based, mobile-first, fixed price)
6. `PricingSnapshot` — KES 80,000 card + what's included bullets + CTA
7. `CtaBanner` — full-width "Ready to get started?" + WhatsApp button
8. `Footer` — links + contact + copyright

**SEO:**

```ts
useSeoMeta({
  title: "Timeframe Solutions — Web Design Nairobi",
  description:
    "Fast, reliable websites for Nairobi businesses. Real estate, clinics, car yards, SACCOs. Fixed price KES 80,000.",
  ogTitle: "Timeframe Solutions",
  ogDescription: "Nairobi web design studio. KES 80,000 fixed price.",
});
```

---

### `/work` — Portfolio

**Job:** Show range across verticals; push visitor to a case study  
**Rendering:** SSR  
**Layout:** `default`

Sections:

1. `PageHero` — "Our Work" heading + short paragraph
2. `PortfolioGrid` — all 4 `PortfolioCard` components, filterable by vertical
3. `CtaBanner` — "Like what you see? Let's build yours."

**SEO:**

```ts
useSeoMeta({
  title: "Our Work — Timeframe Solutions",
  description:
    "Portfolio of Nairobi business websites: real estate, car rental, clinics, electronics retail.",
});
```

---

### `/work/vanguard-properties` — Case Study

**Job:** Prove Timeframe can build real estate sites; rank for "real estate website kenya"  
**Rendering:** SSR  
**Layout:** `default`

Sections:

1. `CaseStudyHero` — project name, industry badge, one-liner
2. `CaseStudyMeta` — Industry / Pages / Features (3-col grid)
3. `CaseStudyScreenshots` — gallery of demo screenshots
4. `CaseStudyFeatures` — feature list with icons
5. `CaseStudyDemonstrates` — what this proves to the prospect
6. `CtaBanner` — "Need a real estate website? Let's talk."

**SEO:**

```ts
useSeoMeta({
  title:
    "Real Estate Website Kenya — Vanguard Properties | Timeframe Solutions",
  description:
    "Property listing website with advanced search, WhatsApp lead capture, and mobile-first design. Built by Timeframe Solutions, Nairobi.",
});
```

---

### `/work/apex-rides-nairobi` — Case Study

**Job:** Prove car rental / car yard capability  
**Target keyword:** `car rental website nairobi`

**SEO:**

```ts
useSeoMeta({
  title: "Car Rental Website Nairobi — Apex Rides | Timeframe Solutions",
  description:
    "Car rental platform with booking forms, dynamic pricing, and WhatsApp integration. Built for Nairobi car hire businesses.",
});
```

---

### `/work/plaza-dental-clinic` — Case Study

**Job:** Prove healthcare / clinic capability  
**Target keyword:** `clinic website kenya`

**SEO:**

```ts
useSeoMeta({
  title: "Clinic Website Kenya — Plaza Dental | Timeframe Solutions",
  description:
    "Healthcare website with appointment scheduling, doctor profiles, and local SEO. Built for Nairobi clinics.",
});
```

---

### `/work/nexus-gadgets-kenya` — Case Study

**Job:** Prove e-commerce / retail capability  
**Target keyword:** `electronics shop website kenya`

**SEO:**

```ts
useSeoMeta({
  title: "Electronics Shop Website Kenya — Nexus Gadgets | Timeframe Solutions",
  description:
    "E-commerce storefront with product search, filtering, cart, and WhatsApp ordering. Built for Kenyan electronics retailers.",
});
```

---

### `/services` — Services

**Job:** Expand on what KES 80k includes; address objections  
**Rendering:** SSR

Sections:

1. `PageHero` — "What We Build"
2. `ServiceDetail` × 5 — one block per vertical with features list
3. `IncludesList` — everything in the 80k package
4. `UpsellList` — M-Pesa, backend, retainer (handled separately)
5. `CtaBanner`

**SEO:**

```ts
useSeoMeta({
  title: "Web Design Services Nairobi — Timeframe Solutions",
  description:
    "Custom websites for Nairobi businesses. Real estate, clinics, car yards, SACCOs, retail. Fixed price, fast delivery.",
});
```

---

### `/pricing` — Pricing

**Job:** Remove price uncertainty; answer FAQs before they're asked  
**Rendering:** SSR

Sections:

1. `PageHero` — "Simple, Fixed Pricing"
2. `PricingCard` — KES 80,000 full detail
3. `PricingFaq` — accordion, 6–8 questions
4. `CtaBanner`

FAQ items:

- What's included in KES 80,000?
- How long does it take?
- Do I need to buy hosting?
- Can I update the website myself?
- Do you integrate M-Pesa?
- What if I need more pages?
- Do you work with businesses outside Nairobi?
- How do I pay?

**SEO:**

```ts
useSeoMeta({
  title: "Website Pricing Kenya — KES 80,000 | Timeframe Solutions",
  description:
    "Fixed price web design in Kenya. KES 80,000 for a complete business website. No hidden costs.",
});
```

---

### `/about` — About

**Job:** Build trust; humanise the studio  
**Rendering:** SSR

Sections:

1. `PageHero` — "We Build for Nairobi"
2. `AboutStory` — studio origin, mission
3. `AboutStack` — technologies used (Nuxt, Tailwind, Vercel)
4. `CtaBanner`

**SEO:**

```ts
useSeoMeta({
  title: "About Timeframe Solutions — Nairobi Web Studio",
  description:
    "Nairobi-based web development studio building fast, reliable websites for East African businesses.",
});
```

---

### `/contact` — Contact

**Job:** Get the WhatsApp message sent or form submitted  
**Rendering:** SSR (form posts to Nuxt server route)

Sections:

1. `PageHero` — "Let's Build Something"
2. `ContactGrid` — two columns: WhatsApp block (left) + contact form (right)
3. `ContactMeta` — response time, email, location

Server route: `server/api/contact.post.ts`  
Form fields: Name · Business name · Vertical (select) · Message

**SEO:**

```ts
useSeoMeta({
  title: "Contact Timeframe Solutions — Nairobi Web Design",
  description:
    "Get in touch with Timeframe Solutions. WhatsApp or email — we respond within 24 hours.",
});
```

---

## Nuxt 4 File Mapping

```
app/pages/
├── index.vue
├── work/
│   ├── index.vue
│   ├── vanguard-properties.vue
│   ├── apex-rides-nairobi.vue
│   ├── plaza-dental-clinic.vue
│   └── nexus-gadgets-kenya.vue
├── services.vue
├── pricing.vue
├── about.vue
└── contact.vue

server/api/
└── contact.post.ts
```

---

## Navigation Structure

### Primary nav (desktop)

```
Work    Services    Pricing    About    Contact
                                          [WhatsApp →]   ← accent button, always visible
```

### Primary nav (mobile)

Hamburger → slide-down drawer with same links + WhatsApp CTA full-width at bottom

### Footer nav

```
Work · Services · Pricing · About · Contact
© 2025 Timeframe Solutions · Nairobi, Kenya
```

---

## Sitemap.xml (auto-generated by @nuxtjs/seo)

All routes above are public and indexable.  
`/api/*` excluded via robots.txt.

```
Priority assignments:
/                          1.0
/work                      0.9
/work/*                    0.8
/services                  0.8
/pricing                   0.8
/about                     0.6
/contact                   0.7
```

---

## Progress

```
✅ project-brief.md
✅ sitemap.md              ← you are here
⬜ design-tokens.md
⬜ content.md
⬜ nuxt-project-structure.txt
⬜ component-inventory.md
```
