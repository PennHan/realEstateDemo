# Repository Guidelines

## Project Structure & Module Organization
- `index.tsx` bootstraps the React app; `App.tsx` controls slide flow and touch navigation.
- UI lives in `components/SlideLayout.tsx` and `components/slides/*` (Intro, Data, Chart, Persona).
- Shared data/constants: `constants.ts`; shared types/enums: `types.ts`; API helpers: `services/geminiService.ts`.
- Static assets are under `public/assets/images`; Vite outputs to `dist/`. Path alias `@/*` maps to the repo root (see `tsconfig.json`).

## Build, Test, and Development Commands
- Install deps: `npm install`.
- Local dev server: `npm run dev` (Vite on port 3000, base `/`).
- Production build: `npm run build` (uses base `/realEstateDemo/`).
- Preview built bundle: `npm run preview` (run after `build` to sanity-check deploy artifacts).

## Coding Style & Naming Conventions
- TypeScript + React 19; prefer functional components with hooks.
- 2-space indentation, single quotes, trailing semicolons, arrow functions for handlers.
- File/component names in PascalCase (`DataSlide.tsx`); functions/vars in camelCase; enums TitleCase (`SlideDirection`).
- Keep slide copy/data in `constants.ts`; keep side effects and network calls in `services/`.
- Motion/animation config stays near its JSX; use `framer-motion` variants for readability. Keep chart config (`recharts`) minimal and typed.

## Testing Guidelines
- No automated test suite yet; rely on `npm run build` plus manual checks.
- Manual pass: desktop + mobile swipe interactions, slide sequencing, motion timing, chart rendering, and Gemini requests using `.env.local`.
- Future tests: add React Testing Library + Vitest; place files as `ComponentName.test.tsx` beside components.

## Commit & Pull Request Guidelines
- Follow observed convention: `feat: ...`, `fix: ...`, `config: ...` (lowercase scope prefixes).
- Keep commits small and scoped; include a brief rationale in the body when behavior changes.
- PRs should include a summary, linked issue/task, before/after screenshots for UI changes, and a short checklist of manual verifications (`dev/build/preview`).
- Call out any changes affecting deployment base paths or environment variables.

## Security & Configuration
- Create `.env.local` with `GEMINI_API_KEY=...`; do not commit secrets. Vite injects the key via `define` in `vite.config.ts`, so rebuild after env changes.
- Production base path is `/realEstateDemo/`; keep asset links and routes relative to the Vite base.
