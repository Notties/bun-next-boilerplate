# Repository Guidelines

## Project Structure & Module Organization
- `app/`: App Router (routes, layouts, pages). Segment folders kebab-case; example: `app/[locale]/blog/[slug]/page.tsx`.
- `components/`: Reusable UI (PascalCase), e.g., `Navbar.tsx`, `HomeTitle.tsx`.
- `public/`: Static assets at site root (`/images/...`).
- `app/globals.css`: Global styles; prefer component-scoped styles when possible.
- Build output: `.next/` (transient), `out/` (static export). `next.config.ts` uses `output: "export"`.

## Build, Test, and Development Commands
- `bun run dev` — Start dev server (Turbopack) on `http://localhost:3000`.
- `bun run build` — Production build; generates static site in `out/`.
- `bun run serve` — Serve `out/` locally (`bunx serve out`).
- `bun run lint` — ESLint (Next config).  
Tip: `npm run dev` / `pnpm dev` work if not using Bun.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Use `.tsx` for React components.
- Indentation: 2 spaces; keep lines concise and self-documenting.
- Naming: Components/hooks in PascalCase/CamelCase (`Navbar`, `useThing`); route folders in kebab-case.
- Imports: Prefer `@/*` path alias defined in `tsconfig.json`.
- Lint and fix warnings before PRs (`next/core-web-vitals`).

## Testing Guidelines
- No runner configured yet. Recommended: Vitest + React Testing Library (unit) and Playwright (e2e).
- Test files: `*.test.ts` / `*.test.tsx` near source or under `tests/`.
- Suggested scripts to add: `test`, `test:watch`, `coverage`.

## Commit & Pull Request Guidelines
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`). Example: `feat(blog): add MDX rendering`.
- PRs: Include summary, screenshots for UI changes, and linked issues. Ensure `lint` and `build` pass locally.

## Security & Configuration Tips
- Static export constraints: Avoid request-bound APIs (`next/headers`, `cookies`) in statically rendered routes. Use build-time data, `generateStaticParams`, and consider `export const dynamic = "force-static"` where applicable.
- Environment: Build-time env only; client env via `NEXT_PUBLIC_`.
- Never commit `.next/` or `out/` artifacts.

## i18n & Routing Notes (next-intl)
- Locales: `en`, `th` via `[locale]` segment. Wrap pages with `NextIntlClientProvider` and load messages from `messages/*.json`.
- Links: Preserve locale. From `/[locale]/blog`, use absolute paths like `/${locale}/blog/${slug}` to avoid duplicate locale prefixes.

