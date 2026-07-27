import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Image as ImageIcon,
  LayoutTemplate,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";
import { segments } from "@/lib/site-content";

const aiModules = [
  {
    icon: LayoutTemplate,
    title: "Карточки товара",
    description: "Три разных направления: польза, преимущества и конкретное предложение.",
    status: "готово",
    tone: "bg-[var(--brand-lavender)]",
  },
  {
    icon: Search,
    title: "Тексты каталога",
    description: "Заголовок, описание и структура, которую легко адаптировать под площадку.",
    status: "готово",
    tone: "bg-white",
  },
  {
    icon: Megaphone,
    title: "Рекламные хуки",
    description: "Короткие заходы для объявлений, соцсетей и первых тестов трафика.",
    status: "готово",
    tone: "bg-[var(--brand-coral-soft)]",
  },
  {
    icon: Camera,
    title: "Визуальные сценарии",
    description: "Packshot, lifestyle и детальный кадр с понятным брифом для съёмки или генерации.",
    status: "готово",
    tone: "bg-[var(--brand-mint)]",
  },
  {
    icon: ImageIcon,
    title: "AI‑сцены товара",
    description: "Чистый фон, рекламное окружение и серия визуалов из одного исходника.",
    status: "beta",
    tone: "bg-[var(--brand-ink)] text-white",
  },
  {
    icon: ScanFace,
    title: "Модельная примерка",
    description: "Одежда и аксессуары на AI‑модели без организации полноценной съёмки.",
    status: "beta",
    tone: "bg-[var(--brand-primary)] text-white",
  },
] as const;

const funnelSteps = [
  { number: "01", title: "Дайте AI три вводных", description: "Формат бизнеса, продукт и аудитория." },
  { number: "02", title: "Получите готовый пакет", description: "Карточки, тексты, хуки и визуальные брифы." },
  { number: "03", title: "Откройте ИП", description: "Естественный следующий шаг на сайте партнёра." },
] as const;

const faqs = [
  ["Что AI создаёт прямо сейчас?", "Название, позиционирование, три карточки, заголовок и описание, рекламные хуки, визуальные сценарии и план запуска."],
  ["Модельная примерка уже работает?", "Она показана как beta-модуль. Текущий автоматический пакет создаёт точный сценарий примерки, но не генерирует финальное изображение."],
  ["Нужно загружать фото или оставлять телефон?", "Нет. Для базового AI-пакета достаточно трёх коротких ответов без телефона, e-mail и паспортных данных."],
  ["Где оформляется ИП?", "На официальной защищённой странице партнёра после отдельного перехода."],
] as const;

export default function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden" id="top">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-22" />
        <div className="motion-orb pointer-events-none absolute -left-40 top-12 -z-10 size-[36rem] rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />
        <div className="motion-orb pointer-events-none absolute -right-52 top-52 -z-10 size-[32rem] rounded-full bg-[var(--brand-coral)]/10 blur-3xl [animation-delay:2s]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/78 px-3.5 py-2 text-xs font-semibold" data-reveal>
              <Sparkles className="size-4 text-[var(--brand-primary)]" /> Делопуск AI Studio
            </p>
            <h1 className="mt-7 text-balance text-[clamp(4rem,8vw,7.2rem)] font-bold leading-[0.87] tracking-[-0.085em]" data-reveal data-reveal-delay="80">
              Ваша AI‑команда для запуска.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
              Создадим название, оффер, карточки товара, тексты каталога и визуальные сценарии. Для fashion добавим основу модельной примерки. Затем откроете ИП за 0 ₽ у партнёра.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/start">
                Создать AI‑пакет <WandSparkles className="size-4" />
              </Link>
              <TrackedReferralLink className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-lavender)] sm:w-auto" placement="hero-direct-ip">
                Сразу открыть ИП <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5 text-xs font-semibold text-[var(--brand-muted)]" data-reveal data-reveal-delay="300">
              {["без телефона", "результат за минуты", "AI‑примерка · beta"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/75 px-3.5 py-2" key={item}>
                  <Check className="size-3.5 text-[var(--brand-primary)]" strokeWidth={3} />{item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-flow relative mx-auto w-full max-w-[43rem]" data-reveal data-reveal-delay="320">
            <div className="overflow-hidden rounded-[2.8rem] border border-[var(--brand-ink)]/8 bg-[var(--brand-ink)] p-4 text-white shadow-[0_58px_150px_-82px_rgba(20,18,65,0.92)] sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/8 px-2 pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-mint)]">AI‑рабочая сессия</p>
                  <p className="mt-2 text-xl font-bold tracking-[-0.04em]">Льняное платье · новый бренд</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-2 text-[10px] font-semibold text-white/60"><span className="size-2 rounded-full bg-[var(--brand-mint)]" /> AI работает</span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[1.18fr_0.82fr]">
                <div className="relative min-h-[28rem] overflow-hidden rounded-[2.1rem] bg-[linear-gradient(145deg,#f3eee7,#e7e3ff)] p-5 text-[var(--brand-ink)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em]">Карточка 01</span>
                    <span className="text-[10px] font-semibold text-[var(--brand-muted)]">1080 × 1350</span>
                  </div>
                  <div className="mx-auto mt-8 flex h-48 w-40 items-center justify-center rounded-[45%_45%_35%_35%] bg-[linear-gradient(160deg,#ff8d73,#ff6549)] shadow-[0_35px_60px_-34px_rgba(255,107,74,0.85)]">
                    <div className="h-32 w-20 rounded-[50%_50%_18%_18%] border-[10px] border-white/70 border-b-0" />
                  </div>
                  <p className="mt-8 text-4xl font-bold leading-[0.92] tracking-[-0.065em]">Свобода движения. Натуральный лён.</p>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--brand-muted)]">Карточка пользы с готовой иерархией текста и визуальным направлением.</p>
                  <div className="mt-6 flex gap-2"><span className="rounded-full bg-white/70 px-3 py-2 text-[10px] font-semibold">дышащая ткань</span><span className="rounded-full bg-white/70 px-3 py-2 text-[10px] font-semibold">свободный крой</span></div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[1.7rem] bg-white/[0.065] p-4">
                    <div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-2xl bg-[var(--brand-mint)] text-[var(--brand-ink)]"><Search className="size-4" /></span><span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">SEO</span></div>
                    <p className="mt-5 text-sm font-semibold">Заголовок и описание готовы</p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8"><span className="block h-full w-[86%] rounded-full bg-[var(--brand-mint)]" /></div>
                  </div>
                  <div className="rounded-[1.7rem] bg-[var(--brand-primary)] p-4">
                    <div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-2xl bg-white text-[var(--brand-primary)]"><Camera className="size-4" /></span><span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/50">Visual lab</span></div>
                    <p className="mt-5 text-sm font-semibold">3 сценария изображения</p>
                    <p className="mt-2 text-xs leading-5 text-white/55">Packshot, lifestyle и модельная примерка.</p>
                  </div>
                  <div className="rounded-[1.7rem] bg-[var(--brand-coral)] p-4">
                    <div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-2xl bg-white text-[var(--brand-coral-strong)]"><ScanFace className="size-4" /></span><span className="rounded-full bg-[var(--brand-ink)] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em]">beta</span></div>
                    <p className="mt-5 text-sm font-semibold">Модельная примерка</p>
                    <p className="mt-2 text-xs leading-5 text-white/65">Сценарий уже в пакете. Генерация изображения — следующий модуль.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/65 py-20 sm:py-28" id="ai-power">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">что делает AI</p>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Не один текст. Целый стартовый контент‑отдел.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--brand-muted)] lg:justify-self-end">Пакет адаптируется под товар, услугу, локальный бизнес или B2B. На старте важнее быстро увидеть сильную рабочую версию, чем неделями собирать идеальную.</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <article className={`motion-flow-stage min-h-[19rem] rounded-[2.2rem] border border-[var(--brand-ink)]/8 p-6 ${module.tone}`} data-reveal data-reveal-delay={String(index * 70)} key={module.title}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)] shadow-sm"><Icon className="size-5" /></span>
                    <span className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] ${module.status === "beta" ? "bg-[var(--brand-coral)] text-white" : "bg-white/70 text-[var(--brand-muted)]"}`}>{module.status}</span>
                  </div>
                  <h3 className="mt-14 text-3xl font-bold leading-[0.96] tracking-[-0.05em]">{module.title}</h3>
                  <p className="mt-4 text-sm leading-7 opacity-65">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">воронка без лишних шагов</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Сначала покажем силу AI. Потом предложим ИП.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--brand-muted)]">Пользователь получает персональную ценность до перехода на сайт партнёра.</p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {funnelSteps.map((step, index) => (
              <article className={`rounded-[2.2rem] border border-[var(--brand-ink)]/8 p-6 ${index === 0 ? "bg-[var(--brand-lavender)]" : index === 1 ? "bg-[var(--brand-ink)] text-white" : "bg-[var(--brand-mint)]"}`} data-reveal data-reveal-delay={String(index * 90)} key={step.number}>
                <span className="text-xs font-bold opacity-55">{step.number}</span>
                <h3 className="mt-20 text-3xl font-bold leading-[0.96] tracking-[-0.05em]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-60">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-[var(--brand-paper-deep)] py-20 sm:py-28" id="segments">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">точный вход под рекламу</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Один AI‑движок. Разные задачи.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => (
              <Link className="motion-flow-stage rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 70)} href={`/for/${slug}`} key={slug}>
                <span className="text-xs font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-bold tracking-[-0.035em]">{segment.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{segment.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">Запустить AI <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">честно о возможностях</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.06em] sm:text-6xl">Частые вопросы</h2>
          </div>
          <div className="mt-12 grid gap-3">
            {faqs.map(([question, answer]) => (
              <details className="group rounded-[1.5rem] border border-[var(--brand-ink)]/8 bg-white px-5 open:bg-[var(--brand-lavender)]/55" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold [&::-webkit-details-marker]:hidden">{question}<span className="text-[var(--brand-primary)] transition group-open:rotate-45">+</span></summary>
                <p className="border-t border-[var(--brand-ink)]/8 pb-5 pt-4 text-sm leading-7 text-[var(--brand-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[var(--brand-primary)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14" data-reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">AI уже готов</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Дайте три ответа. Получите команду результата.</h2>
            <p className="mt-5 text-base leading-7 text-white/60">Без телефона и длинной анкеты. После выдачи сможете открыть ИП отдельным шагом.</p>
          </div>
          <Link className="mt-8 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)] lg:mt-0" href="/start">
            Создать AI‑пакет <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
