# Repository Guidelines

## Project Structure & Module Organization
- `src/` — application code (Vue 3 + TS).
  - `components/` reusable UI in PascalCase `.vue` files.
  - `views/` route views loaded via `src/router.ts`.
  - `store/` simple reactive stores (no Vuex/Pinia).
  - `main.ts`, `App.vue`, `index.css` (Tailwind entry).
- `public/` — static assets served as‑is.
- Config: `vite.config.ts`, `tsconfig*.json`, `tailwind.config.cjs`, `postcss.config.cjs`.
- HTML entry: `index.html`.

## Build, Test, and Development Commands
- `pnpm i` — install dependencies (preferred; see README).
- `pnpm dev` — start Vite dev server with HMR.
- `pnpm build` — type‑check via `vue-tsc` then build production assets.
- `pnpm preview` — locally serve the production build.

## Coding Style & Naming Conventions
- Language: TypeScript with Vue SFCs (`<script lang="ts">`).
- Indentation: 2 spaces; keep lines focused and small components.
- Components: PascalCase filenames (e.g., `TodoItem.vue`); one component per file.
- Routes: define in `src/router.ts`; names via enum `R`, paths lowercase (`/todo`, `/done`).
- State: colocate simple stores in `src/store/*.ts` using `reactive`.
- CSS: Tailwind utility‑first in templates; avoid global CSS; import via `src/index.css`.
- TS config is `strict`; fix all type errors and unuseds before pushing.

## Testing Guidelines
- No test runner is configured. If adding tests, prefer Vitest + `@vue/test-utils`.
- Place tests under `src/__tests__/` and name `*.spec.ts`.
- Keep tests unit‑focused (components and stores) with jsdom.

## Commit & Pull Request Guidelines
- Commits: imperative and scoped (e.g., `feat(todo): add remove flow`).
- PRs: include a clear description, screenshots for UI changes, and link issues.
- Ensure `pnpm build` passes locally; include any config or README updates.
- Keep PRs small and focused; note any breaking changes in the title.

## Security & Configuration Tips
- Do not commit secrets; runtime config must use `VITE_` env vars (`import.meta.env`).
- `vite.config.ts` sets `base: ''` for static hosting; adjust only if deployment path changes.
