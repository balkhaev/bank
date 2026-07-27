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

import { AiStudioCanvas, DeliverablesChart } from "@/components/ai-visuals";
import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";
import { segments } from "@/lib/site-content";

const aiModules = [
  {
    icon: LayoutTemplate,
    title: "Карточки товара",
    description: "Три направления: главная польза, преимущества и конкретное предложение.",
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
    description: "Три коротких захода для объявлений, соцсетей и первого теста трафика.",
    status: "готово",
    tone: "bg-[var(--brand-coral-soft)]",
  },
  {
    icon: Camera,
    title: "Визуальные сценарии",
    description: "Packshot, lifestyle и детальный кадр с готовым брифом для съёмки или генерации.",
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
  { number: "01", title: "Короткий бриф", description: "Три вопроса: что запускаете, что продаёте и кому." },
  { number: "02", title: "AI‑пакет", description: "Карточки, тексты, хуки и визуальные сценарии." },
  { number: "03", title: "Открытие ИП", description: "Официальный следующий шаг на сайте партнёра." },
] as const;

const faqs = [
  ["Что AI создаёт прямо сейчас?", "Название, позиционирование, три карточки, заголовок и описание, рекламные хуки, визуальные сценарии и план запуска."],
  ["Можно скачать результат?", "Тексты можно скопировать целиком, а карточки — скачать как редактируемые SVG-заготовки."],
  ["Модельная примерка уже работает?", "Она отмечена как beta. Сейчас AI создаёт точный сценарий примерки; финальная генерация изображения будет отдельным модулем."],
  ["Нужно загружать фото или оставлять телефон?", "Нет. Для базового AI‑пакета достаточно трёх ответов без телефона, e-mail и паспортных данных."],
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
              За три ответа создадим название, оффер, карточки, текст каталога, рекламные хуки и визуальные сценарии. Затем поможем перейти к открытию ИП за 0 ₽ у партнёра.
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
              {["без телефона", "результат за минуты", "карточки можно скачать", "AI‑примерка · beta"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/75 px-3.5 py-2" key={item}>
                  <Check className="size-3.5 text-[var(--brand-primary)]" strokeWidth={3} />{item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-flow relative mx-auto w-full max-w-[43rem]" data-reveal data-reveal-delay="320">
            <AiStudioCanvas />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/65 py-20 sm:py-28" id="ai-power">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">что делает AI</p>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Не один текст. Стартовый контент‑отдел.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <p className="text-base leading-8 text-[var(--brand-muted)]">Пакет адаптируется под товар, услугу, локальный бизнес или B2B. Мы показываем конкретную рабочую версию до банковского перехода.</p>
              <DeliverablesChart compact />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <article className={`motion-flow-stage min-h-[18rem] rounded-[2.1rem] border border-[var(--brand-ink)]/8 p-6 ${module.tone}`} data-reveal data-reveal-delay={String(index * 70)} key={module.title}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)] shadow-sm"><Icon className="size-5" /></span>
                    <span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] ${module.status === "beta" ? "bg-[var(--brand-coral)] text-white" : "bg-white text-[var(--brand-muted)]"}`}>{module.status}</span>
                  </div>
                  <h3 className="mt-14 text-2xl font-bold tracking-[-0.045em]">{module.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${module.tone.includes("text-white") ? "text-white/55" : "text-[var(--brand-muted)]"}`}>{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div className="lg:sticky lg:top-28" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">воронка без холодного банка</p>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-6xl">Сначала показываем силу AI. Потом предлагаем ИП.</h2>
              <p className="mt-6 text-base leading-8 text-[var(--brand-muted)]">Пользователь получает ценность, видит результат для своего бизнеса и только затем переходит к официальному оформлению.</p>
            </div>
            <div className="grid gap-4">
              {funnelSteps.map((step, index) => (
                <article className={cn("motion-flow-stage grid min-h-[14rem] gap-8 rounded-[2.3rem] p-7 sm:grid-cols-[8rem_1fr] sm:items-center", index === 0 ? "bg-[var(--brand-lavender)]" : index === 1 ? "bg-[var(--brand-ink)] text-white" : "bg-[var(--brand-mint)]")} data-reveal data-reveal-delay={String(index * 100)} key={step.number}>
                  <span className="text-6xl font-bold tracking-[-0.08em] opacity-20">{step.number}</span>
                  <div>
                    <h3 className="text-3xl font-bold tracking-[-0.05em]">{step.title}</h3>
                    <p className={cn("mt-4 text-sm leading-7", index === 1 ? "text-white/55" : "text-[var(--brand-muted)]")}>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-[var(--brand-paper-deep)] py-20 sm:py-28" id="segments">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">точный оффер под рекламу</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Для каждого сегмента — свой AI‑результат.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => (
              <Link className="motion-flow-stage rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 70)} href={`/for/${slug}`} key={slug}>
                <span className="text-xs font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-bold tracking-[-0.035em]">{segment.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{segment.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">Посмотреть пример <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">без скрытых обещаний</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Что готово, а что пока beta.</h2>
            <p className="mt-6 text-base leading-8 text-[var(--brand-muted)]">Мы не подменяем демонстрацию выдуманными кейсами. Текстовый AI‑пакет работает сейчас. Финальная генерация изображений и примерка честно отмечены как следующие модули.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-reveal data-reveal-delay="100">
            <article className="rounded-[2.2rem] bg-[var(--brand-mint)] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-muted)]">доступно сейчас</p>
              <ul className="mt-7 grid gap-4 text-sm font-semibold">
                {["Название и позиционирование", "3 карточки и SVG-заготовки", "Текст каталога", "3 рекламных хука", "3 визуальных брифа"].map((item) => <li className="flex gap-3" key={item}><Check className="size-5 shrink-0 text-[var(--brand-primary)]" />{item}</li>)}
              </ul>
            </article>
            <article className="rounded-[2.2rem] bg-[var(--brand-ink)] p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">следующие модули</p>
              <ul className="mt-7 grid gap-4 text-sm font-semibold">
                {["Готовый packshot из фото", "Lifestyle‑сцена", "Модельная примерка", "Серия визуалов для A/B‑теста"].map((item) => <li className="flex gap-3" key={item}><Sparkles className="size-5 shrink-0 text-[var(--brand-coral)]" />{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/65 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">частые вопросы</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.06em] sm:text-6xl">До трёх ответов.</h2>
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

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[var(--brand-primary)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14" data-reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">AI‑команда уже готова</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Дайте три ответа. Получите материалы для старта.</h2>
            <p className="mt-5 text-base leading-7 text-white/60">Без телефона, длинной анкеты и регистрации на Делопуске.</p>
          </div>
          <Link className="mt-8 inline-flex h-[3.35rem] shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)] lg:mt-0" href="/start">
            Создать AI‑пакет <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
