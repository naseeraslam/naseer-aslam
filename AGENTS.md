# AGENTS.md

Architecture reference for AI agents and developers working on this codebase.

## Project Overview

Personal portfolio for Muhammad Naseer Aslam — Senior Magento Developer, Adobe Commerce Professional & Expert Certified. Built with TanStack Start on Netlify.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (SSR) |
| Routing | TanStack Router v1 (file-based, `src/routes/`) |
| Frontend | React 19, Tailwind CSS 4 |
| UI Primitives | Radix UI + `src/components/ui/` |
| Content | Content Collections (`content-collections.ts`) |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 strict |
| Deployment | Netlify |

## Directory Structure

```
content/           # Markdown content files (jobs, education, projects, blog)
public/            # Static assets (headshot, favicon)
src/
  components/
    ui/            # Radix-based UI primitives (Badge, Card, etc.)
  routes/          # File-based pages (__root.tsx is the shell + nav)
  lib/             # Hooks and utilities
  styles.css       # Tailwind + CSS custom properties (oklch, orange brand)
content-collections.ts  # Zod schemas for all content types
```

## Key Conventions

### Routing
- `src/routes/__root.tsx` — shell layout: renders `<SiteHeader>`, `<main>`, `<SiteFooter>`. Navigation is defined here.
- Routes are files under `src/routes/`. `index.tsx` = `/`, `resume.tsx` = `/resume`, etc.
- API routes follow `api.*.ts` naming (e.g. `api.resume-chat.ts`).

### Brand / Design
- Primary accent: **orange-400 / orange-500** (`oklch(0.65 0.22 41)` in CSS vars)
- Dark background: `#0f172a` (slate-900) — used for header, hero, footer, dark cards
- Light background: `bg-gray-50` — used for page backgrounds
- Rounded cards with `border-l-4 border-l-orange-400` used for resume entries

### Content Collections
All content is type-safe via `content-collections`. Do not access markdown files directly — use the exported `allJobs`, `allEducations`, `allBlogs`, `allProjects` arrays from `content-collections`.

### Adding Content
- New job: add `content/jobs/<slug>.md` with frontmatter matching the `jobs` schema in `content-collections.ts`
- New blog post: add `content/blog/<slug>.md` — the slug becomes the URL (`/blog/<slug>`)

### Forms
Contact form uses Netlify Forms. The form `name="contact"` attribute must match the hidden `contact.html` in `public/` for Netlify to detect it at build time.

### Styling
- Tailwind utility classes throughout; no CSS modules
- `cn()` helper from `@/lib/utils` for conditional class merging
- CSS custom properties in `src/styles.css` control the design token system

### TypeScript
- Strict mode; `@/` alias maps to `src/`
- Use `import type` for type-only imports
- Zod for runtime validation of content frontmatter

## Non-Obvious Decisions

- `__root.tsx` acts as the full page shell (header, footer, `<html>/<body>` tags). Changes to global layout go here.
- The `SiteHeader` in `__root.tsx` uses `activeProps` on TanStack Router `<Link>` for active nav styling — not CSS `:active`.
- Content Collections compiles markdown at build time; runtime `marked()` is only used for rendering `job.content` / `education.content` rich text bodies inside components.
