# Делопуск

`delopusk.ru` — AI‑студия запуска малого бизнеса и affiliate‑воронка регистрации ИП.

Пользователь сначала получает персональную ценность от AI: рабочее название, позиционирование, три карточки, текст каталога или объявления, рекламные хуки и визуальные сценарии. После результата ему предлагается перейти к официальной онлайн‑заявке на регистрацию ИП у партнёра.

Проект создан на Better‑T‑Stack: Next.js, TypeScript, Tailwind CSS и общие shadcn/ui‑компоненты.

## Product

- Бренд: **Делопуск**
- Позиционирование: **AI‑студия запуска**
- Основной оффер: **Ваша AI‑команда для запуска**
- Production domain: **https://delopusk.ru**
- Коммерческая цель: подтверждённое партнёрское действие по регистрации ИП
- Делопуск не собирает паспортные данные и не принимает банковскую заявку самостоятельно

## Funnel

```text
реклама / сегментный прелендинг
            ↓
/           AI-first landing
            ↓
/start      квиз из трёх вопросов
            ↓
/result     персональный AI-пакет
            ↓
/ip         прямой bridge для горячего трафика
            ↓
официальная партнёрская страница
```

Сегментные входы:

```text
/for/marketplace
/for/services
/for/local
/for/b2b
```

Они меняют рекламный оффер и начальный сегмент квиза, но ведут в одну и ту же воронку.

## AI output

Текущий автоматический пакет включает:

- рабочее название;
- позиционирование;
- три карточки товара или услуги;
- заголовок и описание для каталога, объявления или коммерческой коммуникации;
- три рекламных хука;
- три визуальных сценария;
- план действий на время регистрации ИП.

Для fashion‑товаров AI может создать сценарий модельной примерки. Генерация финальных изображений, чистого packshot, lifestyle‑сцен и модельной примерки обозначена в интерфейсе как **beta** и пока не входит в автоматическую выдачу.

## Local development

```bash
bun install
cp apps/web/.env.example apps/web/.env
bun run dev:web
```

Web application: [http://localhost:3001](http://localhost:3001).

## AI configuration

- `OPENAI_API_KEY` включает генерацию через Responses API.
- `OPENAI_MODEL` по умолчанию — `gpt-5.6-luna`.
- Без API‑ключа endpoint возвращает сегментные детерминированные шаблоны.
- Вход и результат валидируются через Zod и strict JSON Schema.
- Запросы используют `store: false`.
- Действует базовый rate limit по IP.
- Интерфейс просит не вводить контакты и паспортные данные.

## Analytics

`NEXT_PUBLIC_YANDEX_METRICA_ID` включает счётчик Яндекс Метрики.

Основные события:

```text
funnel_quiz_completed
funnel_result_viewed
tbank_registration_click
```

Партнёрские CTA передают placement, включая:

```text
hero-direct-ip
result-above-fold
result-bottom
result-mobile-sticky
ip-hero
ip-bottom
segment-<segment>-direct
```

## SEO

Next.js metadata использует `https://delopusk.ru` как canonical origin. В проект входят:

```text
/robots.txt
/sitemap.xml
/manifest.webmanifest
/icon.svg
```

`/result` закрыт от индексации.

## Motion

Motion‑спецификации находятся в:

```text
motion/design.md
motion/frame.md
```

Принципы:

- motion показывает работу AI и последовательность воронки;
- scroll reveal выполняется один раз;
- логотип рисуется как маршрут;
- карточки результата появляются с коротким stagger;
- hover ограничен подъёмом 3–5 px;
- фон использует только медленный ambient drift;
- `prefers-reduced-motion` отображает финальное состояние без анимации.

## UI structure

```text
apps/web/src/app/page.tsx                       AI-first landing
apps/web/src/app/start/page.tsx                 вход в квиз
apps/web/src/app/result/page.tsx                персональный результат
apps/web/src/app/ip/page.tsx                    партнёрский bridge
apps/web/src/app/for/[segment]/page.tsx         рекламные прелендинги
apps/web/src/app/api/start-pack/route.ts        генерация AI-пакета
apps/web/src/components/funnel-quiz.tsx         трёхшаговый AI-бриф
apps/web/src/components/funnel-result.tsx       AI launch room
apps/web/src/components/funnel-shell.tsx        минимальный shell воронки
apps/web/src/components/motion-orchestrator.tsx scroll reveal
apps/web/src/index.css                          токены и motion CSS
```

## Checks

```bash
bun run check
bun run check-types
bun run build
```

## Deployment

```bash
bun run docker:build
bun run docker:up
bun run docker:logs
bun run docker:down
```
