import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  FileCheck2,
  Image as ImageIcon,
  LayoutTemplate,
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

const launchPath = [
  {
    number: "01",
    title: "Сформулировать идею",
    description: "Понять, что вы запускаете, для кого и почему это должно быть нужно.",
  },
  {
    number: "02",
    title: "Собрать бренд",
    description: "Получить рабочее название, позиционирование и характер будущего дела.",
  },
  {
    number: "03",
    title: "Подготовить материалы",
    description: "Сделать карточки, тексты, визуальные сценарии и первые рекламные заходы.",
  },
  {
    number: "04",
    title: "Запустить дело",
    description: "Перейти к официальному оформлению, когда продукт и материалы уже собраны.",
  },
] as const;

const launchBundle = [
  "рабочее название и позиционирование",
  "карточки товара или услуги",
  "тексты каталога и объявлений",
  "визуальные сценарии и AI‑сцены",
  "модельная примерка для fashion",
  "план первых действий",
] as const;

const faqs = [
  [
    "Можно начать только с идеи?",
    "Да. Достаточно описать, что вы хотите запустить и для кого. Делопуск поможет превратить сырую задумку в рабочую основу.",
  ],
  [
    "Что создаёт AI?",
    "Название, позиционирование, карточки, тексты, рекламные крючки, визуальные сценарии и план запуска под вашу нишу.",
  ],
  [
    "Нужно ли уже иметь ИП?",
    "Нет. Сначала можно собрать идею, бренд и материалы. К официальному оформлению вы переходите позже, когда понимаете, что именно запускаете.",
  ],
  [
    "Подходит ли Делопуск для услуг?",
    "Да. Сценарии адаптируются под товары, услуги, локальный бизнес и B2B‑предложения.",
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
              <Sparkles className="size-4" /> AI‑студия для запуска своего дела
            </p>
            <h1 className="font-editorial mt-8 text-balance text-[clamp(3.8rem,7.4vw,6.8rem)] leading-[0.94] tracking-[-0.055em]" data-reveal data-reveal-delay="80">
              Запустите своё дело с AI‑командой.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/58 sm:text-xl" data-reveal data-reveal-delay="160">
              Из идеи — в бренд, карточки, тексты и первые материалы для продаж. Делопуск помогает собрать запуск без хаоса и долгой подготовки.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/start">
                Начать свой запуск <WandSparkles className="size-4" />
              </Link>
              <Link className="inline-flex h-[3.35rem] w-full items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/[0.035] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:w-auto" href="#ai-power">
                Посмотреть возможности <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-white/44" data-reveal data-reveal-delay="300">
              {["идея и позиционирование", "карточки и тексты", "визуалы и AI‑примерка", "план запуска"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2" key={item}>
                  <Check className="size-3.5 text-[var(--brand-mint)]" strokeWidth={3} />{item}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-5 text-white/30" data-reveal data-reveal-delay="340">
              Начать можно без телефона, документов и готового бизнес‑плана.
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
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">всё для старта</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Превращаем идею в готовый запуск.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <p className="text-base leading-8 text-[var(--brand-muted)]">Делопуск работает как небольшая команда: помогает сформулировать смысл, упаковать предложение и подготовить материалы под ваш тип бизнеса.</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">от идеи до запуска</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Двигайтесь по делу, а не по списку сервисов.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/52">Вместо десятков разрозненных задач — один понятный маршрут от задумки до первых продаж.</p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {launchPath.map((step, index) => (
              <article className="relative rounded-[2.1rem] border border-white/8 bg-white/[0.04] p-6" data-reveal data-reveal-delay={String(index * 80)} key={step.number}>
                <span className="text-sm font-bold text-[var(--brand-violet-soft)]">{step.number}</span>
                <h3 className="mt-16 text-2xl font-semibold leading-[1.05] tracking-[-0.045em]">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/45">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[2rem] border border-white/8 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6" data-reveal>
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-mint)] text-[var(--brand-ink)]"><FileCheck2 className="size-5" /></span>
              <div>
                <p className="font-semibold">Сначала соберите дело. Оформление станет естественным следующим шагом.</p>
                <p className="mt-1 text-sm leading-6 text-white/42">Вы понимаете, что продаёте, как это выглядит и какие материалы нужны до официального запуска.</p>
              </div>
            </div>
            <Link className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[var(--brand-ink)]" href="/start">
              Начать запуск <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-20 text-[var(--brand-ink)] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-8">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">ваш стартовый комплект</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Всё собрано вокруг вашего дела.</h2>
            <ul className="mt-9 grid gap-4">
              {launchBundle.map((item) => (
                <li className="flex items-center gap-3 text-sm font-semibold" key={item}>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-lavender)] text-[var(--brand-primary)]"><Check className="size-4" strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link className={`${primaryLinkClassName} mt-9`} href="/start">
              Собрать свой запуск <ArrowRight className="size-4" />
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
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">У каждого дела — свой маршрут.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => (
              <Link className="motion-flow-stage group rounded-[2rem] border border-white/8 bg-white/[0.045] p-5" data-reveal data-reveal-delay={String(index * 70)} href={`/for/${slug}`} key={slug}>
                <div className={cn("h-40 rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.015]", index === 0 ? "bg-[var(--brand-primary)]" : index === 1 ? "bg-[var(--brand-coral)]" : index === 2 ? "bg-[var(--brand-mint)]" : "bg-[var(--brand-paper-deep)]")} />
                <span className="mt-5 block text-xs font-bold text-[var(--brand-violet-soft)]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em]">{segment.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-white/42">{segment.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">Посмотреть сценарий <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">перед стартом</p>
            <h2 className="font-editorial mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Главное о Делопуске.</h2>
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">ваше дело начинается здесь</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Сделайте первый шаг сегодня.</h2>
            <p className="mt-5 text-base leading-8 text-white/52">Расскажите, что хотите запустить. AI‑команда соберёт первую рабочую версию.</p>
          </div>
          <Link className="mt-8 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-ink)] lg:mt-0" href="/start">
            Начать свой запуск <Sparkles className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
