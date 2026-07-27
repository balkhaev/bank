# Делопуск — frame.md

## Composition model

The page uses a restrained motion system inspired by frame-based composition: each sequence has an entrance, dwell, transition and resting state. Motion must remain deterministic and legible.

## Page load / 0–1400 ms

### 0–120 ms

- Background and static layout are immediately visible.
- No full-page fade from black or white.

### 120–900 ms

- Logo route draws from the mint start point toward the coral endpoint.
- Coral endpoint arrives in two segments, matching the stepped route.
- Header remains stable; only the mark animates.

### 180–1050 ms

- Hero eyebrow, headline, description and actions reveal in reading order.
- Reveal uses `opacity 0→1`, `translateY 24→0`, `blur 7→0`.
- Stagger between groups: 80–120 ms.

### 320–1200 ms

- Hero flow panel enters after the headline.
- Stage 01 and 02 settle sequentially.
- The parallel block appears last.

## Hero ambient loop / 6400 ms

- The complete hero panel drifts vertically by no more than 7 px.
- Document and material progress tracks run simultaneously.
- Both tracks reset together; there is no continuous marquee or rotating carousel.
- Loop begins only after the entrance sequence has completed.

## Scroll reveal

- Intersection threshold: 12%.
- Root margin: bottom −10%.
- Each section reveals only once.
- Default duration: 700 ms.
- Card stagger: 70–90 ms.
- No alternating left/right fly-ins.

## Brand workshop

### Idle

- Form is static.
- Example cards remain visible to explain the output before interaction.

### Generating

- Button receives a single diagonal shimmer.
- Spinner indicates active work.
- Existing preview is not removed, preventing layout collapse.

### Result

- Working name and positioning update immediately.
- Three cards enter with 90 ms stagger.
- Download controls become visible on hover/focus.
- Registration CTA appears only after the brand draft exists.

## Parallel journey

- Stage 01: idea and brand.
- Stage 02: IP application.
- Stage 03: two simultaneous progress tracks.
- The document track and material track use the same duration but different semantic colors.
- The animation must communicate concurrency, not speed or urgency.

## Interaction motion

- Primary buttons rise 3 px on hover.
- Cards rise 5 px with a softer shadow.
- Icon rotation is limited to 3 degrees.
- Arrow movement is limited to 3 px.
- No cursor-following distortion, elastic text or scroll hijacking.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- all reveals render immediately;
- the logo route and endpoint render in their final state;
- ambient drift and progress loops stop;
- interaction feedback remains through color and focus states.
