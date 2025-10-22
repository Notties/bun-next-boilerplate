## Bun + Next.js Static Blog (MDX)

Static blog boilerplate using Next.js App Router, MDX content, and static export (SSG). Optimized for Bun, but npm/pnpm/yarn work too.

### Features
- MDX posts with YAML frontmatter (`title`, `date`, `excerpt`)
- SSG via `generateStaticParams` and `output: "export"`
- Local MDX imports with custom MDX elements (`mdx-components.tsx`)
- Zero server runtime; deploy as static files from `out/`

### Commands
```bash
bun run dev     # Start dev server (Turbopack)
bun run lint    # ESLint
bun run build   # Build + static export to out/
bun run serve   # Serve the exported site from out/
```
Equivalents: `npm run <script>` / `pnpm run <script>`.

### Project Structure
- `app/` — routes and layouts (`/blog`, `/blog/[slug]`)
- `content/posts/*.mdx` — blog posts
- `lib/mdx.ts` — load MDX files, read frontmatter (gray-matter)
- `mdx-components.tsx` — MDX element mappings (e.g., headings, links)
- `next.config.ts` — MDX enabled via `@next/mdx`, static export on
- Build artifacts: `.next/`, static output: `out/`

### Add a New Post
Create `content/posts/my-new-post.mdx`:

```mdx
---
title: My New Post
date: 2025-01-20
excerpt: Short summary.
---

# Hello from MDX

Content goes here. You can use Markdown and inline JSX if needed.
```
Slug = file name (`my-new-post`). The blog index reads metadata; the post page dynamically imports the MDX component.

### Build & Deploy
1) `bun run build` → exports to `out/`
2) Serve locally: `bun run serve`
3) Deploy `out/` to any static host (e.g., GitHub Pages, Netlify, S3)

### Notes
- Frontmatter is parsed with `gray-matter` for metadata and is ignored in rendered content via `remark-frontmatter`.
- Avoid server-only APIs; use static-compatible features for SSG.
