# AGENT GUIDELINES

## Project Snapshot
- Framework: [Astro](https://astro.build/) with Tailwind CSS v4 utilities.
- Primary configuration lives in `src/config.ts`; prefer data edits there before touching components.
- Components reside under `src/components`; layout entry point is `src/pages/index.astro`.

## Contribution Principles
- Preserve the minimalist visual style—keep typography scales and spacing aligned with existing components.
- Avoid adding dependencies unless absolutely required and already vetted for Astro/Tailwind compatibility.
- Keep code comments sparse and purposeful; rely on clear naming and structure instead.
- Do not modify docs (README, CHANGELOG, LICENSE) unless explicitly requested.

## Workflow Expectations
- Install dependencies with `npm install` and use `npm run dev` for local verification.
- Run `npm run build` before completing work to confirm the static build succeeds.
- Match existing TypeScript, Astro, and Tailwind conventions when extending components.
- Favor utility classes already in use; introduce new Tailwind tokens only when necessary.

## Content & Data Updates
- Update profile content, skills, projects, experience, and education via `src/config.ts` to keep sections consistent.
- Ensure external links and project metadata remain accurate and use HTTPS where possible.
- When adjusting styles, prefer modifying shared utilities or `src/styles/global.css` instead of scattering inline overrides.

## Review Checklist
- Verify generated HTML remains accessible (semantic headings, alt text on imagery).
- Confirm navigation and section anchors continue to work after edits.
- Remove unused imports and data to keep the bundle lean.
