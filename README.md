# Делопуск

`delopusk.ru` — партнёрский landing page для онлайн-регистрации ИП через Т‑Банк с бесплатным AI-старт-пакетом бизнеса.

Проект создан на [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), современном TypeScript-стеке на Next.js, Hono, tRPC и общих shadcn/ui-компонентах.

## Product

- Бренд: **Делопуск**
- Production domain: **https://delopusk.ru**
- Основной CTA: регистрация ИП на официальной странице Т‑Банка
- Лид-магнит: позиционирование, три промо-карточки и план первой недели
- Страница не собирает паспортные данные и не принимает банковскую заявку самостоятельно

## Features

- **TypeScript** — type safety and developer experience
- **Next.js** — web application and metadata routes
- **TailwindCSS** — utility-first styling
- **Shared UI package** — shadcn/ui primitives in `packages/ui`
- **Hono + tRPC** — API layer
- **Bun** — runtime and package manager
- **Drizzle + PostgreSQL** — data layer available in the monorepo
- **Better Auth** — authentication package available in the stack
- **Turborepo** — monorepo orchestration
- **Biome / Ultracite** — linting and formatting

## Getting Started

Install dependencies:

```bash
bun install
```

Copy the web environment template:

```bash
cp apps/web/.env.example apps/web/.env
```

Start the web application:

```bash
bun run dev:web
```

Open [http://localhost:3001](http://localhost:3001).

## AI start pack

- `OPENAI_API_KEY` enables generated positioning, launch checklists, and promo cards through the Responses API.
- `OPENAI_MODEL` defaults to `gpt-5.6-luna`.
- Without an API key, the endpoint returns deterministic templates so the landing remains usable.
- Input and output are validated.
- Requests use `store: false`.
- A basic per-IP rate limit protects the endpoint.
- The UI asks visitors not to enter personal or passport data.

## Analytics

`NEXT_PUBLIC_YANDEX_METRICA_ID` enables the optional Yandex Metrica counter.

Tracked events include:

```text
tbank_registration_click
start_pack_generated
start_pack_card_download
```

Referral CTA events contain their placement, for example `hero-primary`, `ai-pack-result`, `final-cta`, and `mobile-sticky`.

## SEO and domain

The Next.js metadata configuration uses `https://delopusk.ru` as the canonical origin. The app also includes:

```text
/robots.txt
/sitemap.xml
/manifest.webmanifest
/icon.svg
```

Before production deployment, point the domain to the hosting platform and confirm HTTPS, redirects from `www`, and Yandex Webmaster ownership.

## Database Setup

The full monorepo includes PostgreSQL with Drizzle ORM.

1. Configure `apps/server/.env`.
2. Start PostgreSQL or use an existing database.
3. Apply the schema:

```bash
bun run db:push
```

## UI Customization

React web apps share shadcn/ui primitives through `packages/ui`.

- Landing styles: `apps/web/src/index.css`
- Landing page: `apps/web/src/app/page.tsx`
- AI generator: `apps/web/src/components/ai-start-pack.tsx`
- Shared tokens: `packages/ui/src/styles/globals.css`
- Shared primitives: `packages/ui/src/components/*`

Add shared components from the repository root:

```bash
npx shadcn@latest add accordion dialog popover sheet table -c packages/ui
```

Import shared components like this:

```tsx
import { Button } from "@bank/ui/components/button";
```

## Deployment

### Docker Compose

- Build: `bun run docker:build`
- Start: `bun run docker:up`
- Logs: `bun run docker:logs`
- Stop: `bun run docker:down`

Environment variables are read from app-level `.env` files and can be overridden in `docker-compose.yml`.

## Project Structure

```text
bank/
├── apps/
│   ├── web/         # Делопуск landing and AI start pack
│   └── server/      # Hono / tRPC API
├── packages/
│   ├── ui/          # Shared shadcn/ui components
│   ├── api/         # API layer
│   ├── auth/        # Better Auth configuration
│   └── db/          # Drizzle schema and queries
```

## Available Scripts

- `bun run dev`: start all applications
- `bun run build`: build all applications
- `bun run dev:web`: start only the web application
- `bun run dev:server`: start only the API server
- `bun run check-types`: run TypeScript checks
- `bun run db:push`: push the database schema
- `bun run db:generate`: generate database artifacts
- `bun run db:migrate`: run migrations
- `bun run db:studio`: open database studio
- `bun run check`: run formatting and linting checks
- `bun run docker:build`: build Docker images
- `bun run docker:up`: start Docker Compose
- `bun run docker:down`: stop Docker Compose
- `bun run docker:logs`: tail Docker logs
