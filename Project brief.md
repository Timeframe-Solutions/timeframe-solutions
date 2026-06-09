# Project Brief — Timeframe Solutions Agency Website

**Document version:** 1.0  
**Stack:** Nuxt 4 · Tailwind CSS · Nuxt Icons · Nuxt SEO · Vercel  
**Last updated:** 2025

---

## 1. Agency Identity

| Field           | Value                                                                             |
| --------------- | --------------------------------------------------------------------------------- |
| **Name**        | Timeframe Solutions                                                               |
| **Type**        | Web development studio                                                            |
| **Location**    | Nairobi, Kenya                                                                    |
| **Market**      | Kenyan and East African SMBs                                                      |
| **Positioning** | The studio Nairobi businesses call when they want a real website — not a template |

**Tagline candidates (pick one before design-tokens.md):**

- _"Built for Nairobi. Ready for the world."_
- _"Websites that work as hard as your business."_
- _"We build the website. You run the business."_

---

## 2. What Timeframe Sells

### Core Service: Business Website Package

One clearly scoped, clearly priced product — no confusing tiers at the pitch stage.

| Item              | Detail                                                             |
| ----------------- | ------------------------------------------------------------------ |
| **Price**         | KES 80,000                                                         |
| **Deliverable**   | Custom Nuxt 4 website, mobile-first, SEO-ready, deployed on Vercel |
| **Timeline**      | ~2–3 weeks per project                                             |
| **Primary CTA**   | WhatsApp inquiry (Kenyan conversion standard)                      |
| **Secondary CTA** | Email / contact form                                               |

### What's included in KES 80k

- Up to 6 pages (Home, About, Services/Products, Gallery/Listings, Contact + 1 domain-specific page)
- Mobile-first, responsive UI
- WhatsApp integration (click-to-chat on all CTAs)
- Basic SEO setup (meta tags, sitemap, robots.txt, OG tags)
- Contact/inquiry form
- Google Maps embed
- Vercel deployment + domain connection
- 2 rounds of revisions

### What's not included (upsell triggers)

- M-Pesa Daraja integration → quote separately
- Custom backend / database → quote separately
- Ongoing monthly retainer → KES 5,000–10,000/month
- E-commerce with real payments → quote separately

---

## 3. Target Clients

These are the specific Nairobi SMB verticals Timeframe actively targets:

| Vertical                   | Pain point                              | What they need                                  |
| -------------------------- | --------------------------------------- | ----------------------------------------------- |
| **Car yards / car rental** | WhatsApp chaos, no searchable inventory | Vehicle catalog, booking form, WhatsApp CTA     |
| **Real estate / property** | Word-of-mouth only, no listings         | Property search, gallery, lead capture          |
| **Clinics / healthcare**   | Patients can't find them online         | Appointment forms, doctor profiles, local SEO   |
| **SACCOs**                 | No digital presence, member distrust    | Clean professional site, product pages, contact |
| **Retail / electronics**   | Instagram DMs as storefront             | Product catalog, WhatsApp ordering, cart UI     |

---

## 4. Portfolio Projects

These four fictional projects are the proof of work displayed on the agency site. Each is a fully built Nuxt 4 demo that demonstrates capability to the specific vertical.

---

### 4.1 Vanguard Properties

**Industry:** Real Estate  
**One-liner:** Modern real estate portal with advanced property search and WhatsApp lead capture.

**Pages:** Home · Properties · Property Detail · About · Contact  
**Key features:**

- Property search with location and price filters
- Property gallery (image lightbox)
- WhatsApp inquiry on each listing
- Mobile-first design

**Demonstrates to prospects:** Listing systems · Search and filtering · Lead generation

**Target client archetype:** Property agents, estate developers, landlords with 10+ units

---

### 4.2 Apex Rides Nairobi

**Industry:** Car Rental & Airport Transfers  
**One-liner:** Car rental platform featuring booking workflows and dynamic pricing.

**Pages:** Home · Fleet · Booking · About · Contact  
**Key features:**

- Vehicle catalog with specs and photos
- Dynamic price calculator (days × daily rate)
- Booking form with pickup/dropoff
- WhatsApp booking fallback

**Demonstrates to prospects:** Booking workflows · Dynamic calculations · Conversion-focused design

**Target client archetype:** Car hire businesses, airport transfer operators, fleet owners

---

### 4.3 Plaza Dental Clinic

**Industry:** Healthcare  
**One-liner:** Healthcare website with appointment scheduling and local SEO architecture.

**Pages:** Home · Services · Doctors · Appointments · Blog · Contact  
**Key features:**

- Appointment request form
- Doctor profile cards
- Service landing pages (SEO-targeted)
- Branch location with Google Maps

**Demonstrates to prospects:** Professional service sites · Content management · Local SEO · Lead capture

**Target client archetype:** Private clinics, specialist doctors, dental and optical chains

---

### 4.4 Nexus Gadgets Kenya

**Industry:** Electronics Retail  
**One-liner:** E-commerce storefront with search, filtering, and optimised product browsing.

**Pages:** Home · Shop · Product Detail · Cart · Contact  
**Key features:**

- Product search and category filtering
- Product gallery with zoom
- Shopping cart (client-side state)
- WhatsApp ordering

**Demonstrates to prospects:** E-commerce UI · Product catalogs · Customer journeys

**Target client archetype:** Electronics shops, phone dealers, computer accessories retailers

---

## 5. Agency Website Goals

The Timeframe Solutions site has one job: **convert a skeptical Nairobi business owner into a WhatsApp inquiry**.

### Visitor journey

```
Land on Home
  → Understand what Timeframe does in 5 seconds
  → See proof (portfolio work by industry)
  → See the price (KES 80,000, no asterisk)
  → Hit WhatsApp CTA
```

### Conversion hierarchy

1. WhatsApp button (primary — always visible, sticky on mobile)
2. Contact form (secondary)
3. Portfolio case studies (trust-builder, not primary CTA page)

---

## 6. Agency Site Pages

| Route                       | Purpose                                                      |
| --------------------------- | ------------------------------------------------------------ |
| `/`                         | Hero + services overview + portfolio preview + pricing + CTA |
| `/work`                     | Full portfolio grid — all 4 projects                         |
| `/work/vanguard-properties` | Case study — Real Estate                                     |
| `/work/apex-rides-nairobi`  | Case study — Car Rental                                      |
| `/work/plaza-dental-clinic` | Case study — Healthcare                                      |
| `/work/nexus-gadgets-kenya` | Case study — Electronics                                     |
| `/services`                 | Full service breakdown + what's included                     |
| `/pricing`                  | KES 80k package detail + FAQ                                 |
| `/about`                    | Studio story, who builds your site                           |
| `/contact`                  | WhatsApp link + email form + response time                   |

---

## 7. SEO Strategy

Primary keywords Timeframe should rank for:

- `website design nairobi`
- `nuxt developer nairobi`
- `real estate website kenya`
- `clinic website kenya`
- `car rental website nairobi`
- `affordable website design kenya`

Each portfolio case study page doubles as an SEO landing page targeting the vertical (e.g. `/work/plaza-dental-clinic` targets "clinic website kenya").

**Nuxt SEO config required:**

- `useSeoMeta()` on every page
- `nuxt-og-image` for social previews
- `@nuxtjs/sitemap` generating `/sitemap.xml`
- `robots.txt` allowing all, sitemap linked

---

## 8. Tech Stack (Agency Site)

| Layer      | Choice                              | Reason                                      |
| ---------- | ----------------------------------- | ------------------------------------------- |
| Framework  | Nuxt 4                              | App directory, SSR by default, SEO-friendly |
| Styling    | Tailwind CSS v4                     | Utility-first, no design system overhead    |
| Icons      | Nuxt Icons (`@nuxt/icon`)           | Tree-shaken, zero bundle cost               |
| SEO        | Nuxt SEO (`@nuxtjs/seo`)            | Sitemap + robots + OG image in one module   |
| Deployment | Vercel                              | Free tier, edge SSR, instant previews       |
| Content    | Nuxt Content v3 (optional)          | Blog posts as `.md` files if blog added     |
| Forms      | Native `fetch` to Nuxt server route | No third-party dependency                   |
| Analytics  | Vercel Analytics (free)             | Zero config, privacy-friendly               |

---

## 9. Constraints & Rules

- **No hardcoded hex values in components** — all colors via CSS custom properties (`--tf-primary`, etc.)
- **No direct `$fetch` in components** — always through a composable
- **WhatsApp link format:** `https://wa.me/254XXXXXXXXX?text=Hi%20Timeframe...`
- **All images:** use `<NuxtImg>` with WebP + lazy loading
- **Nuxt 4 convention:** all source files inside `app/` directory
- **Mobile-first breakpoints:** design for 375px, enhance for 768px and 1280px

---

## 10. Out of Scope (for agency site MVP)

- Client login / portal
- Payment integration on the agency site itself
- CMS admin panel
- Multi-language (English only for MVP)
- Live chat (WhatsApp replaces this)

---

## Next Documents

```
✅ project-brief.md        ← you are here
⬜ sitemap.md
⬜ design-tokens.md
⬜ content.md
⬜ nuxt-project-structure.txt
⬜ component-inventory.md
```
