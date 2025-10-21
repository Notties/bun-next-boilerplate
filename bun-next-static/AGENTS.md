# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router (routes, layouts, pages). Keep route segment folders kebab-case (e.g., `blog/posts`).
- `components/`: Reusable React components (PascalCase files, e.g., `Navbar.tsx`).
- `public/`: Static assets served at site root (e.g., `/images/logo.png`).
- `app/globals.css`: Global styles; prefer component-scoped styles when possible.
- `next.config.ts`: Configured for static export (`output: "export"`).
- Build artifacts: `.next/` (transient), static export: `out/` (deployable).

## Build, Test, and Development Commands
- `bun run dev`: Run local dev server with Turbopack at `http://localhost:3000`.
- `bun run build`: Build for production; outputs static site to `out/`.
- `bun run start`: Start Next server mode (not required for static export).
- `bun run serve`: Serve the exported `out/` folder (`bunx serve out`).
- `bun run lint`: Run ESLint using Next’s config.
  
Examples: `npm run dev` or `pnpm dev` work equivalently if not using Bun.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Use `.tsx` for React components.
- Indentation: 2 spaces; keep lines concise and self-documenting.
- Naming: Components and hooks in PascalCase/CamelCase (`Navbar`, `useThing`); route folders in kebab-case; files in `components/` use `PascalCase.tsx`.
- Imports: Prefer path alias `@/*` as configured in `tsconfig.json`.
- Linting: ESLint (`next/core-web-vitals`, TypeScript). Fix issues before PRs.

## Testing Guidelines
- No test runner is configured yet. Recommended: Vitest + React Testing Library for unit tests; Playwright for e2e.
- Naming: `*.test.ts` / `*.test.tsx` near source or under `tests/`.
- Suggested scripts (to add when adopted): `test`, `test:watch`, `coverage`.

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits (e.g., `feat:`, `fix:`, `chore:`). Scope optional (`feat(nav): ...`).
- PRs: Include summary, screenshots for UI changes, and linked issues. Keep diffs focused; pass `lint` and build locally.

## Security & Configuration Tips
- Static export: Avoid server-only APIs and secrets at runtime. Build-time env only; expose client env via `NEXT_PUBLIC_`.
- Do not commit `.next/` or `out/` artifacts.

## Agent-Specific Instructions
- Place new routes under `app/`; reusable UI in `components/`.
- Respect ESLint config and TS strictness. Do not alter `next.config.ts` unless required by a task.
