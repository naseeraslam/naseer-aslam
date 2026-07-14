# Naseer Aslam — Personal Portfolio

Personal portfolio and blog for Muhammad Naseer Aslam, Senior Magento Developer and Adobe Commerce Certified Professional & Expert based in Lahore, Pakistan.

## About

This site showcases:
- **Hero landing page** with skills overview and certification badges
- **Resume** with full work history and interactive skill tags
- **Projects** page highlighting open-source Magento 2 modules
- **Blog** with technical articles on Magento, Adobe Commerce, and e-commerce engineering
- **Contact** form (powered by Netlify Forms) and direct LinkedIn/GitHub links

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (SSR) |
| Routing | TanStack Router v1 (file-based) |
| Frontend | React 19, Tailwind CSS 4 |
| UI Components | Radix UI primitives + custom |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 strict |
| Deployment | Netlify |

## Local Development

```bash
npm install
npm run dev        # starts dev server at http://localhost:3000 (port 8888 via Netlify CLI)
npm run build      # production build → dist/client
npm run preview    # preview production build
```

Or using the Netlify CLI for full platform feature emulation (forms, edge functions, etc.):

```bash
netlify dev        # runs on http://localhost:8888
```

## Environment Variables

No environment variables are required for the base portfolio. To enable the AI Resume Assistant add one of:

```
ANTHROPIC_API_KEY=...
OPENAI_API_KEY=...
GEMINI_API_KEY=...
```

## Content

All content is stored as Markdown files with typed frontmatter in `content/`:

- `content/jobs/` — work experience entries
- `content/education/` — certifications and education
- `content/projects/` — project showcases
- `content/blog/` — technical blog posts

Schemas are defined in `content-collections.ts`.
