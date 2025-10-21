# Bun + Next.js Boilerplate — Static and Standalone

Lightweight Next.js boilerplate optimized for Bun. It demonstrates static export (SSG) today and documents how to switch the same app to a standalone server build when you need server features.

## Requirements
- Bun 1.1+ (`bun --version`)
- Node.js optional (only needed if you prefer `node` to run the standalone server)

## Repository Layout
- `bun-next-static/` — Example Next.js App Router project configured for static export (`output: "export"`). Includes an MDX blog, simple components, and Bun-friendly scripts.

## Quick Start (Static)
1) Install deps
   - `cd bun-next-static`
   - `bun install`
2) Develop
   - `bun run dev` → http://localhost:3000 (Turbopack)
3) Build static site
   - `bun run build` → exports to `out/`
4) Preview the export
   - `bun run serve` → serves the `out/` folder locally
5) Deploy
   - Upload the `out/` directory to any static host (GitHub Pages, Netlify, S3, Cloudflare Pages, etc.)

Scripts (inside `bun-next-static`):
- `dev` — Next dev with Turbopack
- `build` — Production build; when `output: "export"` it emits static files to `out/`
- `serve` — `bunx serve out` to preview the exported site
- `start` — Next server mode (not used for static hosting, but useful if you switch to server/standalone)
- `lint` — ESLint

## Build Outputs
- Static export: `out/` (pure static files; no server needed)
- Next build cache: `.next/` (transient)

## Standalone Build (How-To)
You can convert the same app to a minimal server build for environments where SSR/Route Handlers or dynamic data is required.

1) Update Next config
   - In `bun-next-static/next.config.ts`, change:
     - `output: "export"` → `output: "standalone"`
2) Build the app
   - `bun run build`
3) Collect deployable artifacts
   - Copy `.next/standalone/` and `.next/static/` and the `public/` directory to your server image or host
4) Run the server
   - With Bun: `bun .next/standalone/server.js`
   - With Node: `node .next/standalone/server.js`
5) Configure the port
   - Respect standard Next.js env: `PORT=3000`, `HOSTNAME=0.0.0.0` (set as needed)

Notes:
- Static export removes server runtime; avoid server-only APIs. Use `generateStaticParams`, `fetch` with `cache` options, and `NEXT_PUBLIC_*` env for client exposure.
- Standalone keeps server features but ships a minimal runtime (faster cold starts and smaller deployments than full `next start`).

## Included Example (Static + MDX)
The `bun-next-static` app ships with:
- MDX posts with YAML frontmatter (title, date, excerpt)
- Custom MDX element mappings (`mdx-components.tsx`)
- App Router routes for a blog index and post pages

Open `bun-next-static/README.md` for project-specific details and examples.

## Troubleshooting
- Using `output: "export"` and seeing missing data? Ensure pages are pre-renderable during build (no server-only code paths) and use `generateStaticParams` for dynamic segments.
- Image optimization with `next/image` requires a server. For pure static hosting, set `unoptimized` on the Next Image component or use static `<img />`.
- If your host doesn’t support Bun, you can still develop/build with Bun and run the standalone server with Node.

## License
No license specified. Add one if you plan to distribute.
