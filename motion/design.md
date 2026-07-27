# Делопуск — design.md

## Brand idea

Делопуск помогает не ждать идеальных условий: сначала сформировать идею и рабочий бренд, затем запустить регистрацию ИП и использовать время обработки документов для подготовки материалов.

## Brand promise

**Запуск без паузы.**

## Sequence

1. Идея и рабочий бренд.
2. Подача заявки на ИП у официального партнёра.
3. Две параллельные линии: документы обрабатываются, материалы готовятся.
4. ИП, бренд и материалы сходятся к старту.

## Logo

Знак — короткий маршрут с одним подъёмом и точкой назначения:

- фиолетовая линия означает управляемый путь;
- мятная точка — исходная идея;
- коралловая точка — запуск;
- знак не имитирует банковскую айдентику и не использует букву или абстрактную декоративную монограмму.

## Palette

- Paper: `#F7F4EE`
- Ink: `#151623`
- Primary violet: `#4E46C8`
- Coral: `#FF6B4A`
- Mint: `#C9F3DB`
- Lavender: `#EBE9FF`

## Typography

- Display and UI: Geologica.
- Headings: bold, compact leading, tight tracking.
- Body: regular, generous line height.
- Avoid banking-style numeric dashboards and generic fintech typography.

## Shape language

- Large rounded rectangles, but not uniform pills everywhere.
- Route lines, paired tracks and endpoint dots.
- White surfaces over warm paper.
- Color has semantic roles: violet = direction, coral = action, mint = readiness.

## Motion principle

Motion explains sequence and parallel work. It never exists only to decorate.

- Reveal distance: 24 px maximum.
- Blur: 7–8 px maximum.
- Standard reveal: 700 ms.
- Stagger: 70–120 ms.
- Primary easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Infinite motion is restricted to slow ambient drift and progress lines.
- All essential meaning remains visible with `prefers-reduced-motion`.
