# Делопуск

`delopusk.ru` — независимый сервис для запуска малого бизнеса: идея и рабочий бренд, переход к онлайн-регистрации ИП у партнёра и подготовка материалов параллельно с оформлением.

Проект создан на Better-T-Stack: Next.js, TypeScript, Tailwind CSS и общие shadcn/ui-компоненты.

## Product

- Бренд: **Делопуск**
- Слоган: **Дело начинается здесь.**
- Production domain: **https://delopusk.ru**
- Основной маршрут: идея и бренд → заявка на ИП → параллельная подготовка материалов
- Страница не собирает паспортные данные и не принимает банковскую заявку самостоятельно

## Routes

```text
/                         Главная
/idea                     Мастерская идеи и бренда
/ip                       Онлайн-регистрация ИП
/materials                Материалы запуска
/guides                   База знаний
/guides/[slug]            Статья
/for/marketplace          Сценарий для маркетплейсов
/for/services             Сценарий для услуг
/for/local                Сценарий для локального бизнеса
/for/b2b                  Сценарий для B2B
```

## Local development

```bash
bun install
cp apps/web/.env.example apps/web/.env
bun run dev:web
```

Web application: [http://localhost:3001](http://localhost:3001).

## AI brand workshop

- `OPENAI_API_KEY` включает генерацию рабочего названия, позиционирования, чек-листа и промо-карточек через Responses API.
- `OPENAI_MODEL` по умолчанию — `gpt-5.6-luna`.
- Без API-ключа endpoint возвращает детерминированные шаблоны.
- Вход и результат валидируются.
- Запросы используют `store: false`.
- Действует базовый rate limit по IP.
- Интерфейс просит не вводить контакты и паспортные данные.

## Analytics

`NEXT_PUBLIC_YANDEX_METRICA_ID` включает счётчик Яндекс Метрики.

Основные события:

```text
tbank_registration_click
brand_draft_generated
brand_card_download
```

Партнёрские CTA передают placement, например `header`, `ip-hero`, `brand-workshop-result`, `final-cta` и `footer`.

## SEO

Next.js metadata использует `https://delopusk.ru` как canonical origin. В проект входят:

```text
/robots.txt
/sitemap.xml
/manifest.webmanifest
/icon.svg
```

Sitemap содержит продуктовые, сегментные и статейные страницы.

## Motion

Motion-спецификации находятся в:

```text
motion/design.md
motion/frame.md
```

Принципы:

- motion объясняет последовательность и параллельность;
- scroll reveal выполняется один раз;
- логотип рисуется как маршрут;
- hover ограничен подъёмом 3–5 px;
- фон использует только медленный ambient drift;
- `prefers-reduced-motion` отображает финальное состояние без анимации.

## UI structure

```text
apps/web/src/app/page.tsx                    Главная
apps/web/src/app/idea/page.tsx               Идея и бренд
apps/web/src/app/ip/page.tsx                 Регистрация ИП
apps/web/src/app/materials/page.tsx          Материалы запуска
apps/web/src/app/guides/**                   Гайды
apps/web/src/app/for/[segment]/page.tsx      Сегментные страницы
apps/web/src/components/site-shell.tsx       Общие header/footer/brand mark
apps/web/src/components/brand-workshop.tsx   Генератор бренда
apps/web/src/components/motion-orchestrator.tsx Scroll reveal
apps/web/src/index.css                       Токены и motion CSS
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
