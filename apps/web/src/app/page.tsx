import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Gift,
  Image as ImageIcon,
  LayoutTemplate,
  LockKeyhole,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { cn } from "@bank/ui/lib/utils";

import { AiStudioCanvas, DeliverablesChart } from "@/components/ai-visuals";
import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { segments } from "@/lib/site-content";

const aiModules = [
  {
    icon: LayoutTemplate,
    title: "Карточки товара",
    description: "Главная польза, преимущества и конкретное предложение для каталога или объявления.",
    status: "готово",
    tone: "bg-[var(--brand-lavender)]",
  },
  {
    icon: Search,
    title: "Тексты каталога",
    description: "Заголовок, описание, структура и формулировки под площадку.",
    status: "готово",
    tone: "bg-white",
  },
  {
    icon: Megaphone,
    title: "Рекламные крючки",
    description: "Короткие заходы для первого теста рекламы и социальных сетей.",
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
    tone: "bg-[var(--brand-ink-soft)] text-white",
  },
  {
    icon: ScanFace,
    title: "Модельная примерка",
    description: "Одежда и аксессуары на AI‑модели без организации полноценной съёмки.",
    status: "beta",
    tone: "bg-[var(--brand-primary)] text-white",
  },
] as const;

const accessTiers = [
  {
    number: "01",
    badge: "сейчас",
    title: "5 AI‑действий бесплатно",
    description: "Попробуйте карточки, тексты и визуальные сценарии без регистрации и контактов.",
    tone: "border-white/10 bg-white/[0.04]",
    accent: "text-[var(--brand-violet-soft)]",
  },
  {
    number: "02",
    badge: "после заявки",
    title: "+12 AI‑действий",
    description: "Отправьте заявку на ИП у партнёра, вернитесь в Делопуск и продолжайте собирать материалы.",
    tone: "border-[var(--brand-coral)]/35 bg-[var(--brand-coral)]/8",
    accent: "text-[var(--brand-coral)]",
  },
  {
    number: "03",
    badge: "после подтверждения",
    title: "Pro на 30 дней",
    description: "После подтверждённой регистрации ИП и открытия РКО получаете полный стартовый доступ.",
    tone: "border-[var(--brand-mint)]/30 bg-[var(--brand-mint)]/8",
    accent: "text-[var(--brand-mint)]",
  },
] as const;

const proBundle = [
  "до 30 карточек товара или услуги",
  "10 AI‑сцен и рекламных композиций",
  "5 модельных примерок для fashion",
  "тексты каталога и рекламные хуки",
  "экспорт без водяных знаков",
  "хранение проекта 30 дней",
] as const;

const faqs = [
  [
    "Что я получаю до регистрации?",
    "Пять AI‑действий: можно собрать первый пакет, проверить качество текста и увидеть, как Делопуск работает с вашей нишей.",
  ],
  [
    "Как открыть ещё 12 действий?",
    "Перейдите на официальную страницу партнёра, отправьте заявку на ИП и вернитесь в Делопуск. Временный бонус открывается на семь дней.",
  ],
  [
    "Когда откроется полный доступ?",
    "После подтверждения регистрации ИП и открытия расчётного счёта в партнёрской системе. Полный доступ действует 30 дней.",
  ],
  [
    "Кто предоставляет AI‑бонус?",
    "AI‑доступ предоставляет Делопуск за свой счёт. Это не банковская услуга, и партнёр не отвечает за работу AI‑сервиса.",
  ],
  [
    "Где оформляется ИП?",
    "На официальной защищённой странице партнёра. Делопуск не принимает паспортные данные и не оформляет банковские продукты.",
  ],
] as const;

export default function Home() {
  return (
    <SiteShell>
      <section className="premium-hero relative overflow-hidden text-white" id="top">
        <div className="premium-orbits pointer-events-none absolute inset-0" />
        <div className="motion-orb pointer-events-none absolute -left-48 top-12 size-[38rem] rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
        <div className="motion-orb pointer-events-none absolute -right-52 top-48 size-[34rem] rounded-full bg-[var(--brand-coral)]/12 blur-3xl [animation-delay:2s]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-semibold text-[var(--brand-violet-soft)] backdrop-blur" data-reveal>
              <Gift className="size-4" /> AI‑бонус за запуск бизнеса
            </p>
            <h1 className="font-editorial mt-8 text-balance text-[clamp(3.8rem,7.4vw,6.8rem)] leading-[0.94] tracking-[-0.055em]" data-reveal data-reveal-delay="80">
              Откройте ИП. Получите AI‑команду для старта.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/58 sm:text-xl" data-reveal data-reveal-delay="160">
              Попробуйте 5 AI‑действий сейчас. После отправки заявки получите ещё 12. После подтверждённой регистрации ИП и открытия РКО — полный доступ на 30 дней.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/start">
                Попробовать AI бесплатно <WandSparkles className="size-4" />
              </Link>
              <Link className="inline-flex h-[3.35rem] w-full items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/[0.035] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:w-auto" href="/ip">
                Открыть ИП и получить Pro <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-white/44" data-reveal data-reveal-delay="300">
              {["5 действий сейчас", "+12 после заявки", "Pro после подтверждения"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2" key={item}>
                  <Check className="size-3.5 text-[var(--brand-mint)]" strokeWidth={3} />{item}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-5 text-white/30" data-reveal data-reveal-delay="340">
              AI‑бонус предоставляет Делопуск за свой счёт. Регистрация ИП и банковские услуги оформляются отдельно на официальной странице партнёра.
            </p>
          </div>

          <div className="hero-flow relative mx-auto w-full max-w-[43rem]" data-reveal data-reveal-delay="320">
            <AiStudioCanvas className="ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/6 bg-[var(--brand-paper)] py-20 sm:py-28" id="ai-power">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">что делает AI</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Не демо‑текст. Рабочий контент‑отдел.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <p className="text-base leading-8 text-[var(--brand-muted)]">Пакет адаптируется под товар, услугу, локальный бизнес или B2B. Результат появляется до банковского перехода — пользователь сначала видит ценность.</p>
              <DeliverablesChart compact />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiModules.map((module, index) => {
              const Icon = module.icon;
              const dark = module.tone.includes("text-white");
              return (
                <article className={`motion-flow-stage min-h-[18rem] rounded-[2.1rem] border border-black/8 p-6 ${module.tone}`} data-reveal data-reveal-delay={String(index * 70)} key={module.title}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)] shadow-sm"><Icon className="size-5" /></span>
                    <span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] ${module.status === "beta" ? "bg-[var(--brand-coral)] text-white" : "bg-white text-[var(--brand-muted)]"}`}>{module.status}</span>
                  </div>
                  <h3 className="mt-14 text-2xl font-semibold tracking-[-0.045em]">{module.title}</h3>
                  <p className={cn("mt-4 text-sm leading-7", dark ? "text-white/55" : "text-[var(--brand-muted)]")}>{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="premium-dark-section py-20 text-white sm:py-28" id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">доступ открывается поэтапно</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Сначала попробуйте. Потом получите больше.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/52">Никакой слепой регистрации: ценность Делопуска видна до перехода к партнёру.</p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {accessTiers.map((tier, index) => (
              <article className={`relative overflow-hidden rounded-[2.2rem] border p-6 sm:p-7 ${tier.tone}`} data-reveal data-reveal-delay={String(index * 90)} key={tier.number}>
                <div className="flex items-center justify-between gap-4">
                  <span className={`text-sm font-bold ${tier.accent}`}>{tier.number}</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-white/58">{tier.badge}</span>
                </div>
                <h3 className="mt-16 text-3xl font-semibold leading-[1] tracking-[-0.05em]">{tier.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/48">{tier.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-[2rem] border border-white/8 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6" data-reveal>
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-mint)] text-[var(--brand-ink)]"><LockKeyhole className="size-5" /></span>
              <div>
                <p className="font-semibold">Полный доступ открывается только после подтверждения статуса.</p>
                <p className="mt-1 text-sm leading-6 text-white/42">Временные 12 действий можно активировать после отправки заявки; Pro — после подтверждённой регистрации и РКО.</p>
              </div>
            </div>
            <Link className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[var(--brand-ink)]" href="/ip">
              Посмотреть условия <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-20 text-[var(--brand-ink)] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-8">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">Pro на 30 дней</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Всё, что нужно до первых продаж.</h2>
            <ul className="mt-9 grid gap-4">
              {proBundle.map((item) => (
                <li className="flex items-center gap-3 text-sm font-semibold" key={item}>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-lavender)] text-[var(--brand-primary)]"><Check className="size-4" strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link className={`${primaryLinkClassName} mt-9`} href="/ip">
              Открыть ИП и получить Pro <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="rounded-[2.5rem] border border-black/8 bg-white p-5 shadow-[0_32px_90px_-65px_rgba(15,10,35,0.55)] sm:p-8" data-reveal data-reveal-delay="100">
            <DeliverablesChart />
          </div>
        </div>
      </section>

      <section className="premium-dark-section py-20 text-white sm:py-28" id="segments">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">под ваш тип бизнеса</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Один бонус. Разные стартовые пакеты.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => (
              <Link className="motion-flow-stage group rounded-[2rem] border border-white/8 bg-white/[0.045] p-5" data-reveal data-reveal-delay={String(index * 70)} href={`/for/${slug}`} key={slug}>
                <div className={cn("h-40 rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.015]", index === 0 ? "bg-[var(--brand-primary)]" : index === 1 ? "bg-[var(--brand-coral)]" : index === 2 ? "bg-[var(--brand-mint)]" : "bg-[var(--brand-paper-deep)]")} />
                <span className="mt-5 block text-xs font-bold text-[var(--brand-violet-soft)]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em]">{segment.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-white/42">{segment.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">Посмотреть пример <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">условия бонуса</p>
            <h2 className="font-editorial mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Прозрачно до перехода.</h2>
          </div>
          <div className="mt-12 grid gap-3">
            {faqs.map(([question, answer]) => (
              <details className="group rounded-[1.5rem] border border-black/8 bg-white px-5 open:bg-[var(--brand-lavender)]/55" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold [&::-webkit-details-marker]:hidden">{question}<span className="text-[var(--brand-primary)] transition-transform group-open:rotate-45">+</span></summary>
                <p className="border-t border-black/8 pb-5 pt-4 text-sm leading-7 text-[var(--brand-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="premium-cta mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] px-7 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-16" data-reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">пять действий без регистрации</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Проверьте AI на своём бизнесе.</h2>
            <p className="mt-5 text-base leading-8 text-white/52">Понравится результат — откроете ИП и заберёте расширенный доступ.</p>
          </div>
          <Link className="mt-8 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-ink)] lg:mt-0" href="/start">
            Начать бесплатно <Sparkles className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
