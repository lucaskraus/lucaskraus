# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Lucas Kraus, built with Next.js 16 (App Router), React 19, and TypeScript. Single-page design with section-based navigation, contact form with email integration, and animations.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

**Next.js App Router** with a single page (`src/app/page.tsx`) that composes section components. Hash-based navigation with smooth scrolling via a sticky header.

### Key Directories

- `src/app/` — Root layout, page, global CSS, and API routes
- `src/components/sections/` — Full-width page sections (AboutMe, Career, GetInTouch, Repositories, etc.)
- `src/components/cards/` — Composed card components (RepositoryCard, TimelineCard, SocialMediaCard)
- `src/components/ui/` — Shadcn/ui primitives (button, input, textarea, field, etc.)
- `src/modules/contact/` — Contact form business logic: Zod schema (`contact.schema.ts`) and email service (`contact.service.ts`)
- `src/hooks/` — Custom hooks (e.g., `useTypewriterLines` for text animation)
- `src/lib/constants.tsx` — All portfolio content data (about tabs, timeline items, repositories, social media)
- `src/lib/utils.ts` — `cn()` utility for merging Tailwind classes
- `src/@types/index.ts` — Shared TypeScript interfaces (ITimelineItem, IRepository)
- `src/assets/` — Images and Lottie animation files

### API Route

`src/app/api/mail/route.ts` — POST endpoint for contact form. Validates with Zod, sends email via Resend, uses Upstash Redis for rate limiting.

### Data Flow

Portfolio content lives in `src/lib/constants.tsx` as exported arrays/objects. Sections import and render this data. To update portfolio content, edit constants — no component changes needed.

## Code Style

- Prettier: no semicolons, single quotes, 2-space indent, trailing commas (es5), 80 char width, no parens on single arrow params
- Path alias: `@/*` maps to `./src/*`
- Styling: Tailwind CSS v4 with OkLCh color variables, dark mode default
- Animations: Motion (Framer Motion) library for transitions, spring physics
- Component variants: Class Variance Authority (CVA)

## Environment Variables

- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` — Rate limiting
- `RESEND_API_KEY` — Email delivery via Resend

## External Services

- **skillicons.dev** — Skill icon images (configured in `next.config.ts` remotePatterns)
- **Resend** — Transactional email
- **Upstash Redis** — Rate limiting for contact form
