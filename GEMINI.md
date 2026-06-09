# Timeframe Solutions - GEMINI.md

This file provides the foundational context and instructions for the Timeframe Solutions project.

## Project Overview
Timeframe Solutions is a web development studio based in Nairobi, Kenya, specializing in building high-quality, custom websites for East African SMBs (Small and Medium-sized Businesses). The agency website's primary goal is to convert visitors into WhatsApp inquiries.

- **Stack:** Nuxt 4 (App directory), Tailwind CSS v4, Nuxt Icons, Nuxt SEO, Vercel.
- **Primary Product:** A KES 80,000 fixed-price business website package.
- **Target Verticals:** Real estate, car yards, clinics, SACCOs, and retail.

## Repository Structure
- `/frontend`: The main Nuxt 4 application.
- `Project brief.md`: Detailed business goals, target clients, and portfolio projects.
- `design tokens.md`: Color palette, typography, and spacing definitions.
- `Sitemap.md`: Route tree and page specifications.

## Building and Running
All commands should be run from the `/frontend` directory using `pnpm`.

- **Install dependencies:** `pnpm install`
- **Development server:** `pnpm dev`
- **Production build:** `pnpm build`
- **Preview build:** `pnpm preview`
- **Static generation:** `pnpm generate`

## Development Conventions

### Nuxt 4 Architecture
- Follow the Nuxt 4 directory structure: all source files (pages, components, layouts, assets) must reside within the `frontend/app/` directory.
- Pages are located in `frontend/app/pages/`.
- Components are located in `frontend/app/components/`.

### Styling (Tailwind CSS v4)
- **CSS Custom Properties:** All colors and tokens must use the `--tf-` prefix (e.g., `--tf-primary`, `--tf-accent`).
- **No Hardcoded Hex Values:** Never use raw hex values in components. Use the Tailwind classes mapped to CSS variables (e.g., `bg-tf-primary`, `text-tf-accent`).
- **Tokens:** Refer to `design tokens.md` for the full palette and typography scale.
- **Mobile-First:** Design for 375px (mobile base), then enhance for 768px (md) and 1280px (xl).

### Components & Composables
- **Data Fetching:** Do not use `$fetch` directly in components. Wrap API calls in composables or use `useFetch`/`useAsyncData`.
- **Images:** Always use the `<NuxtImg>` component with WebP format and lazy loading enabled.
- **Icons:** Use the `@nuxt/icon` module (e.g., `<Icon name="..." />`).

### SEO & Meta Tags
- Every page must use `useSeoMeta()` for titles, descriptions, and Open Graph tags. Refer to `Sitemap.md` for specific SEO requirements per page.
- Ensure `@nuxtjs/seo` is configured for sitemaps and robots.txt.

### WhatsApp Integration
- Primary CTA is always WhatsApp.
- **Link Format:** `https://wa.me/254XXXXXXXXX?text=...` (Use encoded text).
- WhatsApp buttons should use the `.btn-accent` style defined in `design tokens.md`.

## Key Commands for LLM
- When asked to add a page, refer to `Sitemap.md` for the route and SEO requirements.
- When asked to style a component, check `design tokens.md` for the correct variables.
- Always check `frontend/nuxt.config.ts` for module configurations before adding new libraries.
