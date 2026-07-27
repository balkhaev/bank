import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheckBig,
  Clock3,
  ExternalLink,
  FileCheck2,
  FileSignature,
  Layers3,
  Palette,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
  TimerReset,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { BrandWorkshop } from "@/components/brand-workshop";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

const BRAND_NAME = "Делопуск";
const BRAND_DOMAIN = "delopusk.ru";

const journeyPhases: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "violet" | "coral" | "mint";
}> = [
  {
    number: "01",
    title: "Сформировать идею и бренд",
    description:
      "Рабочее название, позиционирование, характер бренда и понятное обещание для первых клиентов.",
    icon: Palette,
    tone: "violet",
  },
  {
    number: "02",
    title: "Подать заявку на ИП",
    description:
      "Перейти на официальную страницу партнёра, заполнить данные и отправить документы на регистрацию.",
    icon: FileSignature,
    tone: "coral",
  },
  {
    number: "03",
    title: "Готовить материалы параллельно",
    description:
      "Пока ФНС рассматривает документы, доработать карточки, оффер, фотографии и страницу запуска.",
    icon: Layers3,
    tone: "mint",
  },
];

const materialOutputs = [
  {
    title: "Рабочее название",
    description: "Не финальный товарный знак, а понятная точка старта для коммуникации.",
    icon: Sparkles,
  },
  {
    title: "Позиционирование",
    description: "Короткое объяснение, что вы делаете, для кого и почему это важно.",
    icon: Route,
  },
  {
    title: "Три промо-карточки",
    description: "Черновики для маркетплейса, соцсетей, объявления или первого лендинга.",
    icon: FileCheck2,
  },
  {
    title: "План на время регистрации",
    description: "Конкретные действия, которые можно выполнить, пока документы находятся в ФНС.",
    icon: TimerReset,
  },
] as const;

const audiences: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Store,
    title: "Маркетплейсы",
    description: "Название, карточки товара, понятная выгода и план первых продаж.",
  },
  {
    icon: Wrench,
    title: "Услуги",
    description: "Оффер, промо-материалы и сценарий первого обращения клиента.",
  },
  {
    icon: Building2,
    title: "Локальный бизнес",
    description: "Упаковка студии, мастерской, точки или небольшого производства.",
  },
  {
    icon: BriefcaseBusiness,
    title: "B2B",
    description: "Основа коммерческого предложения и деловой коммуникации.",
  },
];

const faqs = [
  {
    question: "С чего начинается Делопуск?",
    answer:
      "С идеи и рабочего бренда. Вы описываете продукт или услугу и будущих клиентов, а Делопуск собирает рабочее название, позиционирование и первые материалы.",
  },
  {
    question: "Когда нужно подавать заявку на ИП?",
    answer:
      "После того как идея и предложение стали достаточно понятными. Заявка открывается отдельно на официальной странице партнёра, который принимает данные и документы.",
  },
  {
    question: "Что делать, пока регистрируется ИП?",
    answer:
      "Дорабатывать карточки, фотографии, оффер, цены и страницу запуска. Воронка специально устроена так, чтобы время регистрации не превращалось в ожидание.",
  },
  {
    question: "Делопуск — это банк?",
    answer:
      "Нет. Делопуск не является банком, не принимает банковские заявки и не собирает паспортные данные. Регистрация ИП проходит после отдельного перехода на tbank.ru.",
  },
  {
    question: "Нужно оставлять телефон или e-mail?",
    answer:
      "Нет. Для генерации нужны только короткие описания идеи и аудитории. Не вводите контакты, паспортные данные и другую персональную информацию.",
  },
  {
    question: "Кто принимает решение о регистрации?",
    answer:
      "Решение принимает ФНС. Делопуск помогает с идеей, брендом и материалами, а партнёр помогает подготовить и передать документы.",
  },
] as const;

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`brand-mark relative flex size-10 shrink-0 items-center justify-center rounded-[1rem] border border-[var(--brand-ink)]/10 bg-white shadow-[0_14px_34px_-20px_rgba(78,70,200,0.65)] ${className}`}
    >
      <svg className="size-8 overflow-visible" viewBox="0 0 48 48">
        <path
          className="brand-mark__route"
          d="M8 34h15V22h12"
          fill="none"
          stroke="var(--brand-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <circle cx="8" cy="34" fill="var(--brand-mint)" r="4" />
        <circle className="brand-mark__dot" cx="39" cy="22" fill="var(--brand-coral)" r="5" />
      </svg>
    </span>
  );
}

function Eyebrow({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return (
    <span
      className={
        inverted
          ? "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-1.5 text-xs font-semibold text-white/75"
          : "inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/76 px-3.5 py-1.5 text-xs font-semibold text-[var(--brand-ink)] shadow-sm backdrop-blur"
      }
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance text-3xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-7 text-[var(--brand-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function HeroFlow() {
  return (
    <div className="hero-flow relative mx-auto w-full max-w-[36rem] lg:ml-auto" data-reveal data-reveal-delay="160">
      <div className="motion-orb absolute -inset-10 -z-10 rounded-full bg-[var(--brand-primary)]/13 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--brand-ink)]/8 bg-white/78 p-5 shadow-[0_44px_120px_-70px_rgba(31,28,90,0.75)] backdrop-blur sm:p-7">
        <div className="brand-grid pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">
              маршрут без паузы
            </p>
            <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">Сначала последовательно, затем параллельно</p>
          </div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white">
            <Route className="size-5" />
          </span>
        </div>

        <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
          <article className="motion-flow-stage rounded-[1.7rem] border border-[var(--brand-ink)]/8 bg-[var(--brand-lavender)] p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-[var(--brand-primary)]">01</span>
              <span className="flex size-7 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
            </div>
            <p className="mt-9 text-xl font-bold tracking-[-0.04em]">Идея и бренд</p>
            <p className="mt-2 text-xs leading-5 text-[var(--brand-muted)]">название и позиционирование</p>
          </article>

          <article className="motion-flow-stage rounded-[1.7rem] border border-[var(--brand-ink)]/8 bg-[var(--brand-coral-soft)] p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-[var(--brand-coral-strong)]">02</span>
              <span className="flex size-7 items-center justify-center rounded-full bg-[var(--brand-coral)] text-white">
                <ArrowRight className="size-3.5" />
              </span>
            </div>
            <p className="mt-9 text-xl font-bold tracking-[-0.04em]">Заявка на ИП</p>
            <p className="mt-2 text-xs leading-5 text-[var(--brand-muted)]">официальная страница партнёра</p>
          </article>
        </div>

        <div className="relative mt-3 rounded-[2rem] bg-[var(--brand-ink)] p-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">03 · параллельный этап</p>
              <p className="mt-2 text-lg font-bold tracking-[-0.035em]">Пока идёт регистрация</p>
            </div>
            <span className="rounded-full bg-white/8 px-3 py-1.5 text-[10px] font-semibold text-white/55">без ожидания</span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-white/50">ФНС и партнёр</span>
                <Clock3 className="size-4 text-[var(--brand-mint)]" />
              </div>
              <p className="mt-5 text-sm font-bold">Документы обрабатываются</p>
              <div className="motion-parallel-track mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full rounded-full bg-[var(--brand-mint)]" />
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--brand-primary)] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-white/55">Делопуск</span>
                <Sparkles className="size-4 text-[var(--brand-coral)]" />
              </div>
              <p className="mt-5 text-sm font-bold">Материалы становятся готовыми</p>
              <div className="mt-4 flex gap-2">
                {["бренд", "карточки", "план"].map((item) => (
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-white/70" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-3 flex items-center justify-between gap-4 rounded-[1.6rem] bg-[var(--brand-mint)] px-5 py-4">
          <div>
            <p className="text-xs font-semibold text-[var(--brand-muted)]">Финиш</p>
            <p className="mt-1 text-sm font-bold">ИП, бренд и материалы сходятся к запуску</p>
          </div>
          <CircleCheckBig className="size-6 shrink-0 text-[var(--brand-primary)]" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: BRAND_NAME,
    url: `https://${BRAND_DOMAIN}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Сервис для запуска малого бизнеса: идея и рабочий бренд, переход к регистрации ИП и параллельная подготовка материалов.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
  };

  return (
    <main className="landing-page overflow-hidden pb-24 sm:pb-0">
      <MotionOrchestrator />
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />

      <header className="relative z-40 border-b border-[var(--brand-ink)]/6 bg-[var(--brand-paper)]/84 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a aria-label="Делопуск — наверх" className="flex items-center gap-3" href="#top">
            <BrandMark />
            <span>
              <span className="block text-sm font-bold tracking-[-0.025em]">{BRAND_NAME}</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--brand-muted)]">
                запуск без паузы
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-muted)] md:flex">
            <a className="transition hover:text-[var(--brand-ink)]" href="#ai-pack">Идея и бренд</a>
            <a className="transition hover:text-[var(--brand-ink)]" href="#parallel">Как работает</a>
            <a className="transition hover:text-[var(--brand-ink)]" href="#faq">Вопросы</a>
          </nav>

          <TrackedReferralLink className="h-10 rounded-xl px-4 text-xs shadow-none" placement="header">
            Открыть ИП
            <ArrowRight className="size-4" />
          </TrackedReferralLink>
        </div>
      </header>

      <section className="relative" id="top">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="motion-orb pointer-events-none absolute -left-36 top-16 -z-10 size-[30rem] rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl" data-reveal>
            <Eyebrow>
              <Sparkles className="size-3.5 text-[var(--brand-primary)]" />
              {BRAND_NAME} · идея, ИП и материалы
            </Eyebrow>

            <h1 className="mt-7 text-balance text-[clamp(3.1rem,6.8vw,6.25rem)] font-bold leading-[0.9] tracking-[-0.075em]">
              Сначала — <span className="text-[var(--brand-primary)]">идея и бренд.</span><br />
              Затем — ИП.<br />
              <span className="text-[var(--brand-coral)]">Материалы — параллельно.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl">
              Сформулируйте дело и рабочий бренд, затем подайте заявку на ИП. Пока документы рассматриваются, собирайте карточки, оффер и план запуска — без потерянного времени.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a className="brand-primary-action inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white shadow-[0_18px_42px_-22px_rgba(78,70,200,0.9)] sm:w-auto" href="#ai-pack">
                Сформировать идею и бренд
                <Sparkles className="size-4" />
              </a>
              <TrackedReferralLink className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-lavender)] sm:w-auto" placement="hero-secondary">
                Открыть ИП онлайн
                <ExternalLink className="size-4" />
              </TrackedReferralLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-[var(--brand-muted)]">
              {["без телефона и e-mail", "рабочее название и оффер", "материалы во время регистрации"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/72 px-3.5 py-2" key={item}>
                  <CircleCheckBig className="size-3.5 text-[var(--brand-primary)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <HeroFlow />
        </div>
      </section>

      <BrandWorkshop />

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28" id="parallel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Правильная последовательность"
            title="Два шага подряд. Третий — в две линии"
            description="Идея и бренд дают направление. Заявка на ИП запускает официальный процесс. После этого документы и материалы движутся одновременно."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {journeyPhases.map((phase, index) => {
              const Icon = phase.icon;
              const toneClass = {
                violet: "bg-[var(--brand-lavender)]",
                coral: "bg-[var(--brand-coral-soft)]",
                mint: "bg-[var(--brand-mint)]",
              }[phase.tone];

              return (
                <article
                  className={`group relative min-h-[25rem] overflow-hidden rounded-[2.2rem] border border-[var(--brand-ink)]/8 p-7 ${toneClass}`}
                  data-reveal
                  data-reveal-delay={String(index * 80)}
                  key={phase.number}
                >
                  <div className="absolute -right-20 -top-20 size-64 rounded-full border-[44px] border-[var(--brand-ink)]/[0.035]" />
                  <div className="relative flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-[var(--brand-muted)]">{phase.number}</span>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-ink)] text-white transition duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="relative mt-28 text-3xl font-bold leading-[0.96] tracking-[-0.05em]">{phase.title}</h3>
                  <p className="relative mt-5 text-sm leading-7 text-[var(--brand-muted)]">{phase.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 rounded-[2.2rem] bg-[var(--brand-ink)] p-5 text-white sm:p-7 lg:grid-cols-2" data-reveal>
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Линия документов</p>
                  <h3 className="mt-2 text-xl font-bold">Партнёр и ФНС обрабатывают заявку</h3>
                </div>
                <Clock3 className="size-6 text-[var(--brand-mint)]" />
              </div>
              <div className="motion-parallel-track mt-8 h-2 overflow-hidden rounded-full bg-white/10"><span className="block h-full rounded-full bg-[var(--brand-mint)]" /></div>
            </div>
            <div className="rounded-[1.7rem] bg-[var(--brand-primary)] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Линия запуска</p>
                  <h3 className="mt-2 text-xl font-bold">Вы собираете материалы и готовитесь к продажам</h3>
                </div>
                <Layers3 className="size-6 text-[var(--brand-coral)]" />
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {["карточки", "фотографии", "цены", "лендинг", "объявления"].map((item) => (
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Что остаётся у вас"
            title="Материалы для работы, а не декоративный AI-результат"
            description="Черновики можно копировать, скачивать и дорабатывать, пока официальная регистрация идёт своим ходом."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materialOutputs.map((output, index) => {
              const Icon = output.icon;
              return (
                <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 70)} key={output.title}>
                  <div className={cnOutputIcon(index)}><Icon className="size-5" /></div>
                  <h3 className="mt-7 text-xl font-bold tracking-[-0.035em]">{output.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{output.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-[var(--brand-ink)] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div data-reveal>
            <Eyebrow inverted>Честное разделение ролей</Eyebrow>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Делопуск не притворяется банком</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Делопуск отвечает за идею, рабочий бренд и материалы. Партнёр подключается там, где нужны паспортные данные, документы и официальная процедура.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-reveal data-reveal-delay="100">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-coral)] text-white"><Palette className="size-5" /></span>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em]">Делопуск</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/65">
                {["формирует идею и рабочий бренд", "создаёт первые материалы", "не просит паспорт и контакты", "сохраняет результат в браузере"].map((item) => (
                  <li className="flex gap-3" key={item}><Check className="mt-1 size-4 shrink-0 text-[var(--brand-coral)]" strokeWidth={3} />{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] bg-[var(--brand-lavender)] p-6 text-[var(--brand-ink)]">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white"><ShieldCheck className="size-5" /></span>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em]">Партнёр-банк</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--brand-muted)]">
                {["принимает официальную заявку", "проверяет данные и документы", "помогает с ОКВЭД и режимом", "передаёт комплект в ФНС"].map((item) => (
                  <li className="flex gap-3" key={item}><Check className="mt-1 size-4 shrink-0 text-[var(--brand-primary)]" strokeWidth={3} />{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper-deep)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Для разных способов начать" title="Один маршрут — четыре сценария бизнеса" description="Генератор меняет структуру и примеры в зависимости от того, что вы запускаете." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 70)} key={audience.title}>
                  <div className={cnOutputIcon(index)}><Icon className="size-5" /></div>
                  <h3 className="mt-7 text-xl font-bold tracking-[-0.035em]">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{audience.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Прозрачно о продукте" title="Частые вопросы" description="Где заканчивается роль Делопуска, когда подавать заявку и что делать во время регистрации." />
          <div className="mt-12 grid gap-3" data-reveal>
            {faqs.map((faq) => (
              <details className="group rounded-[1.5rem] border border-[var(--brand-ink)]/8 bg-white px-5 shadow-sm open:bg-[var(--brand-lavender)]/55" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-[var(--brand-muted)] transition duration-300 group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl border-t border-[var(--brand-ink)]/8 pb-5 pt-4 text-sm leading-7 text-[var(--brand-muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--brand-primary)] px-6 py-12 text-white shadow-[0_40px_110px_-55px_rgba(78,70,200,0.85)] sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14" data-reveal>
          <div className="motion-orb absolute -right-24 -top-36 size-[28rem] rounded-full border-[70px] border-white/[0.06]" />
          <div className="relative max-w-3xl">
            <Eyebrow inverted>Запуск без паузы</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-5xl">Сформируйте бренд. Подайте на ИП. Используйте время регистрации.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">Черновик бренда останется у вас, а официальная заявка откроется отдельно. Пока документы обрабатываются, продолжайте готовить материалы.</p>
          </div>
          <div className="relative mt-8 flex w-full flex-col gap-3 lg:mt-0 lg:w-auto">
            <a className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)] transition hover:-translate-y-0.5" href="#ai-pack">Сформировать бренд<Sparkles className="size-4" /></a>
            <TrackedReferralLink className="w-full bg-[var(--brand-ink)] text-white shadow-none hover:bg-black lg:w-auto" placement="final-cta">Открыть ИП за 0 ₽<ArrowRight className="size-5" /></TrackedReferralLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--brand-ink)]/6 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-[var(--brand-muted)] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[var(--brand-ink)]">
                <BrandMark className="size-9 rounded-[0.9rem]" />
                <div><span className="block font-bold">{BRAND_NAME}</span><span className="block text-xs text-[var(--brand-muted)]">{BRAND_DOMAIN}</span></div>
              </div>
              <p className="mt-5 leading-6">Делопуск — независимая партнёрская информационная страница, не официальный сайт Т‑Банка. При переходе по ссылке и оформлении продукта владелец страницы может получить вознаграждение. Банковские услуги предоставляет АО «ТБанк», универсальная лицензия Банка России № 2673. Решение о государственной регистрации принимает ФНС.</p>
              <p className="mt-2 leading-6">Страница не принимает банковские заявки и не собирает паспортные данные. Проверяйте актуальные условия на официальном сайте партнёра.</p>
            </div>
            <TrackedReferralLink className="h-11 shrink-0 rounded-xl border border-[var(--brand-ink)]/10 bg-white px-5 text-xs text-[var(--brand-ink)] shadow-none hover:bg-[var(--brand-lavender)]" placement="footer">На сайт партнёра<ExternalLink className="size-4" /></TrackedReferralLink>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-[1fr_auto] gap-2 rounded-2xl border border-[var(--brand-ink)]/8 bg-white/94 p-2 shadow-2xl backdrop-blur sm:hidden">
        <a className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--brand-primary)] px-4 text-xs font-semibold text-white" href="#ai-pack">Идея и бренд<Sparkles className="size-4" /></a>
        <TrackedReferralLink className="h-12 rounded-xl bg-[var(--brand-ink)] px-4 text-xs text-white shadow-none" placement="mobile-sticky">ИП<ArrowRight className="size-4" /></TrackedReferralLink>
      </div>
    </main>
  );
}

function cnOutputIcon(index: number) {
  return `flex size-12 items-center justify-center rounded-2xl ${
    index % 3 === 0
      ? "bg-[var(--brand-lavender)] text-[var(--brand-primary)]"
      : index % 3 === 1
        ? "bg-[var(--brand-coral-soft)] text-[var(--brand-coral-strong)]"
        : "bg-[var(--brand-mint)] text-[var(--brand-ink)]"
  }`;
}
