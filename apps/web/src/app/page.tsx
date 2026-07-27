import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheckBig,
  ExternalLink,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Store,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { AiStartPack } from "@/components/ai-start-pack";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

const BRAND_NAME = "Делопуск";
const BRAND_DOMAIN = "delopusk.ru";

const launchLayers: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "violet" | "coral" | "mint";
}> = [
  {
    number: "01",
    title: "Сформулировать дело",
    description:
      "Определить, что вы предлагаете, кому это нужно и какое обещание должно считываться первым.",
    icon: Sparkles,
    tone: "violet",
  },
  {
    number: "02",
    title: "Собрать первые материалы",
    description:
      "Получить позиционирование, три промо-карточки и план первой недели без телефона и e-mail.",
    icon: FileCheck2,
    tone: "coral",
  },
  {
    number: "03",
    title: "Оформить основу бизнеса",
    description:
      "Перейти на официальную страницу партнёра и подать заявку на регистрацию ИП.",
    icon: WalletCards,
    tone: "mint",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Опишите идею",
    description: "Две короткие фразы о продукте или услуге и будущих клиентах.",
  },
  {
    number: "02",
    title: "Получите старт-пакет",
    description: "Делопуск соберёт структуру предложения, карточки и план действий.",
  },
  {
    number: "03",
    title: "Проверьте и сохраните",
    description: "Скопируйте тексты или скачайте готовые SVG-карточки.",
  },
  {
    number: "04",
    title: "Откройте ИП",
    description: "Официальная заявка заполняется отдельно на защищённой странице партнёра.",
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
    description: "Карточки товара, понятная выгода и план первых продаж.",
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
    question: "Что такое Делопуск?",
    answer:
      "Делопуск — независимый сервис для старта малого бизнеса. Он помогает сформулировать предложение, собрать первые промо-материалы и перейти к официальной регистрации ИП у партнёра.",
  },
  {
    question: "Делопуск — это банк?",
    answer:
      "Нет. Делопуск не является банком, не принимает банковские заявки и не собирает паспортные данные. Регистрация ИП проходит на официальном сайте Т‑Банка после отдельного перехода.",
  },
  {
    question: "Что входит в бесплатный старт-пакет?",
    answer:
      "Короткое позиционирование, три промо-карточки и план первой недели. Карточки можно скачать в SVG и использовать как основу для маркетплейса, соцсетей или лендинга.",
  },
  {
    question: "Нужно оставлять телефон или e-mail?",
    answer:
      "Нет. Для генерации нужны только короткие описания продукта и аудитории. Не вводите контакты, паспортные данные и другую персональную информацию.",
  },
  {
    question: "Сколько стоит регистрация ИП?",
    answer:
      "По текущим условиям партнёра услуга регистрации стоит 0 ₽, а при электронной подаче госпошлина не требуется. Актуальные условия отображаются на официальной странице банка.",
  },
  {
    question: "Кто принимает решение о регистрации?",
    answer:
      "Решение о государственной регистрации принимает ФНС. Делопуск создаёт маркетинговые материалы, а партнёр помогает подготовить и передать документы.",
  },
] as const;

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-10 shrink-0 overflow-hidden rounded-[1.1rem] bg-[var(--brand-primary)] shadow-[0_14px_34px_-18px_rgba(78,70,200,0.85)] ${className}`}
    >
      <span className="absolute left-[0.6rem] top-[0.55rem] h-[1.45rem] w-[0.45rem] rounded-full bg-white" />
      <span className="absolute left-[0.6rem] top-[0.55rem] h-[0.45rem] w-[1.55rem] rounded-full bg-white" />
      <span className="absolute bottom-[0.55rem] left-[0.35rem] h-[0.45rem] w-[2rem] -rotate-6 rounded-full bg-[var(--brand-coral)]" />
      <span className="absolute right-[0.55rem] top-[1rem] size-[0.55rem] rotate-45 rounded-[0.1rem] bg-[var(--brand-mint)]" />
    </span>
  );
}

function Eyebrow({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return (
    <span
      className={
        inverted
          ? "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-1.5 text-xs font-semibold text-white/75"
          : "inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[var(--brand-ink)] shadow-sm backdrop-blur"
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
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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

function HeroCanvas() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:ml-auto">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[var(--brand-primary)]/14 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--brand-ink)]/8 bg-[var(--brand-lavender)] p-5 shadow-[0_44px_120px_-70px_rgba(31,28,90,0.75)] sm:p-7">
        <div className="brand-grid pointer-events-none absolute inset-0 opacity-55" />
        <div className="relative flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">
              маршрут запуска
            </p>
            <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">От идеи к рабочему старту</p>
          </div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white">
            <Sparkles className="size-5" />
          </span>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Идея", note: "сформулирована", tone: "bg-white" },
            { label: "Материалы", note: "собраны", tone: "bg-[var(--brand-coral)] text-white" },
            { label: "ИП", note: "следующий шаг", tone: "bg-[var(--brand-mint)]" },
          ].map((item, index) => (
            <div
              className={`rounded-[1.6rem] border border-[var(--brand-ink)]/8 p-4 ${item.tone}`}
              key={item.label}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold opacity-60">0{index + 1}</span>
                <span className="flex size-7 items-center justify-center rounded-full bg-[var(--brand-ink)] text-white">
                  {index < 2 ? <Check className="size-3.5" strokeWidth={3} /> : <ArrowRight className="size-3.5" />}
                </span>
              </div>
              <p className="mt-8 text-lg font-bold tracking-[-0.035em]">{item.label}</p>
              <p className="mt-1 text-xs opacity-55">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-4 grid grid-cols-[1.05fr_0.95fr] gap-3">
          <div className="rounded-[1.8rem] bg-[var(--brand-ink)] p-5 text-white">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                старт-пакет
              </span>
              <span className="text-xs text-white/35">3 карточки</span>
            </div>
            <p className="mt-10 max-w-[12rem] text-2xl font-bold leading-[0.95] tracking-[-0.05em]">
              Первые материалы уже готовы
            </p>
            <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-4/5 rounded-full bg-[var(--brand-coral)]" />
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.8rem] border border-[var(--brand-ink)]/8 bg-white p-4">
              <p className="text-xs font-semibold text-[var(--brand-muted)]">Позиционирование</p>
              <p className="mt-4 text-sm font-bold leading-5">Понятное предложение для первых клиентов</p>
            </div>
            <div className="rounded-[1.8rem] bg-[var(--brand-primary)] p-4 text-white">
              <p className="text-xs font-semibold text-white/55">Партнёрская регистрация</p>
              <p className="mt-4 text-sm font-bold leading-5">Заявка открывается отдельно на tbank.ru</p>
            </div>
          </div>
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
      "Сервис для запуска малого бизнеса: бесплатный старт-пакет и переход к онлайн-регистрации ИП у партнёра.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RUB",
    },
  };

  return (
    <main className="landing-page overflow-hidden pb-24 sm:pb-0">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <header className="relative z-40 border-b border-[var(--brand-ink)]/6 bg-[var(--brand-paper)]/84 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="Делопуск — наверх">
            <BrandMark />
            <span>
              <span className="block text-sm font-bold tracking-[-0.025em]">{BRAND_NAME}</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--brand-muted)]">
                запуск бизнеса
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-muted)] md:flex">
            <a className="transition hover:text-[var(--brand-ink)]" href="#product">
              Как работает
            </a>
            <a className="transition hover:text-[var(--brand-ink)]" href="#ai-pack">
              Старт-пакет
            </a>
            <a className="transition hover:text-[var(--brand-ink)]" href="#faq">
              Вопросы
            </a>
          </nav>

          <TrackedReferralLink
            className="h-10 rounded-xl px-4 text-xs shadow-none"
            placement="header"
          >
            Открыть ИП
            <ArrowRight className="size-4" />
          </TrackedReferralLink>
        </div>
      </header>

      <section className="relative" id="top">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>
              <Sparkles className="size-3.5 text-[var(--brand-primary)]" />
              {BRAND_NAME} · запуск бизнеса онлайн
            </Eyebrow>

            <h1 className="mt-7 text-balance text-[clamp(3.3rem,7vw,6.5rem)] font-bold leading-[0.89] tracking-[-0.075em]">
              Запустите дело. <span className="text-[var(--brand-primary)]">ИП — без лишнего.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl">
              Соберите первые материалы для бизнеса, а затем перейдите к официальной онлайн-регистрации ИП. Делопуск помогает начать — банк занимается документами.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white shadow-[0_18px_42px_-22px_rgba(78,70,200,0.9)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-primary-strong)] sm:w-auto"
                href="#ai-pack"
              >
                Собрать старт-пакет
                <Sparkles className="size-4" />
              </a>
              <TrackedReferralLink
                className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-lavender)] sm:w-auto"
                placement="hero-secondary"
              >
                Открыть ИП онлайн
                <ExternalLink className="size-4" />
              </TrackedReferralLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-[var(--brand-muted)]">
              {[
                "без телефона и e-mail",
                "3 готовые карточки",
                "регистрация у официального партнёра",
              ].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/70 px-3.5 py-2" key={item}>
                  <CircleCheckBig className="size-3.5 text-[var(--brand-primary)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <HeroCanvas />
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28" id="product">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Собственная логика продукта"
            title="Делопуск собирает запуск в три слоя"
            description="Не маскируемся под банк и не начинаем с бюрократии. Сначала помогаем оформить идею, затем материалы и только после этого — юридическую основу бизнеса."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {launchLayers.map((layer) => {
              const Icon = layer.icon;
              const toneClass = {
                violet: "bg-[var(--brand-lavender)]",
                coral: "bg-[var(--brand-coral-soft)]",
                mint: "bg-[var(--brand-mint)]",
              }[layer.tone];

              return (
                <article
                  className={`group relative min-h-[25rem] overflow-hidden rounded-[2.2rem] border border-[var(--brand-ink)]/8 p-7 ${toneClass}`}
                  key={layer.number}
                >
                  <div className="absolute -right-20 -top-20 size-64 rounded-full border-[44px] border-[var(--brand-ink)]/[0.035]" />
                  <div className="relative flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-[var(--brand-muted)]">{layer.number}</span>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-ink)] text-white transition group-hover:-rotate-3 group-hover:scale-105">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="relative mt-28 text-3xl font-bold leading-[0.96] tracking-[-0.05em]">
                    {layer.title}
                  </h3>
                  <p className="relative mt-5 text-sm leading-7 text-[var(--brand-muted)]">
                    {layer.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AiStartPack />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Маршрут без путаницы"
            title="От идеи до оформления — четыре понятных шага"
            description="Делопуск отвечает за упаковку и первый импульс. Банк и ФНС отвечают за официальную регистрацию."
          />

          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[var(--brand-ink)]/10 lg:block" />
            {processSteps.map((step, index) => (
              <article className="relative rounded-[1.8rem] border border-[var(--brand-ink)]/8 bg-white p-6" key={step.number}>
                <div
                  className={`relative z-10 flex size-16 items-center justify-center rounded-[1.4rem] text-sm font-bold ${
                    index === 0
                      ? "bg-[var(--brand-primary)] text-white"
                      : index === 1
                        ? "bg-[var(--brand-coral)] text-white"
                        : index === 2
                          ? "bg-[var(--brand-mint)] text-[var(--brand-ink)]"
                          : "bg-[var(--brand-ink)] text-white"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-[-0.035em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-[var(--brand-ink)] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <Eyebrow inverted>Честное разделение ролей</Eyebrow>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              Делопуск — не банк. И это его преимущество.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Мы можем сосредоточиться на старте бизнеса, а не на продаже банковского интерфейса. Партнёр подключается только там, где нужны документы и официальная процедура.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-coral)] text-white">
                <Sparkles className="size-5" />
              </span>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em]">Делопуск</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/65">
                {[
                  "помогает сформулировать предложение",
                  "создаёт первые материалы",
                  "не просит паспорт и контакты",
                  "сохраняет результат в браузере",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <Check className="mt-1 size-4 shrink-0 text-[var(--brand-coral)]" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-[var(--brand-lavender)] p-6 text-[var(--brand-ink)]">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em]">Партнёр-банк</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--brand-muted)]">
                {[
                  "принимает официальную заявку",
                  "проверяет данные и документы",
                  "помогает с ОКВЭД и режимом",
                  "передаёт комплект в ФНС",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <Check className="mt-1 size-4 shrink-0 text-[var(--brand-primary)]" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper-deep)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Для разных способов начать"
            title="Один продукт — четыре сценария бизнеса"
            description="Генератор меняет структуру и примеры в зависимости от того, что вы запускаете."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" key={audience.title}>
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      index % 3 === 0
                        ? "bg-[var(--brand-lavender)] text-[var(--brand-primary)]"
                        : index % 3 === 1
                          ? "bg-[var(--brand-coral-soft)] text-[var(--brand-coral-strong)]"
                          : "bg-[var(--brand-mint)] text-[var(--brand-ink)]"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
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
          <SectionHeading
            eyebrow="Прозрачно о продукте"
            title="Частые вопросы"
            description="Что делает Делопуск, где заканчивается его роль и как проходит регистрация у партнёра."
          />

          <div className="mt-12 grid gap-3">
            {faqs.map((faq) => (
              <details
                className="group rounded-[1.5rem] border border-[var(--brand-ink)]/8 bg-white px-5 shadow-sm open:bg-[var(--brand-lavender)]/55"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-[var(--brand-muted)] transition group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl border-t border-[var(--brand-ink)]/8 pb-5 pt-4 text-sm leading-7 text-[var(--brand-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--brand-primary)] px-6 py-12 text-white shadow-[0_40px_110px_-55px_rgba(78,70,200,0.85)] sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14">
          <div className="absolute -right-24 -top-36 size-[28rem] rounded-full border-[70px] border-white/[0.06]" />
          <div className="relative max-w-3xl">
            <Eyebrow inverted>Следующий шаг</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-5xl">
              Сначала соберите запуск. Потом оформите его официально.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Старт-пакет останется у вас. Заявка на регистрацию откроется отдельно на официальной странице партнёра.
            </p>
          </div>

          <div className="relative mt-8 flex w-full flex-col gap-3 lg:mt-0 lg:w-auto">
            <a
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)] transition hover:-translate-y-0.5"
              href="#ai-pack"
            >
              Собрать старт-пакет
              <Sparkles className="size-4" />
            </a>
            <TrackedReferralLink
              className="w-full bg-[var(--brand-ink)] text-white shadow-none hover:bg-black lg:w-auto"
              placement="final-cta"
            >
              Открыть ИП за 0 ₽
              <ArrowRight className="size-5" />
            </TrackedReferralLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--brand-ink)]/6 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-[var(--brand-muted)] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[var(--brand-ink)]">
                <BrandMark className="size-9 rounded-[1rem]" />
                <div>
                  <span className="block font-bold">{BRAND_NAME}</span>
                  <span className="block text-xs text-[var(--brand-muted)]">{BRAND_DOMAIN}</span>
                </div>
              </div>
              <p className="mt-5 leading-6">
                Делопуск — независимая партнёрская информационная страница, не официальный сайт Т‑Банка. При переходе по ссылке и оформлении продукта владелец страницы может получить вознаграждение. Банковские услуги предоставляет АО «ТБанк», универсальная лицензия Банка России № 2673. Решение о государственной регистрации принимает ФНС.
              </p>
              <p className="mt-2 leading-6">
                Страница не принимает банковские заявки и не собирает паспортные данные. Проверяйте актуальные условия на официальном сайте партнёра.
              </p>
            </div>

            <TrackedReferralLink
              className="h-11 shrink-0 rounded-xl border border-[var(--brand-ink)]/10 bg-white px-5 text-xs text-[var(--brand-ink)] shadow-none hover:bg-[var(--brand-lavender)]"
              placement="footer"
            >
              На сайт партнёра
              <ExternalLink className="size-4" />
            </TrackedReferralLink>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-[1fr_auto] gap-2 rounded-2xl border border-[var(--brand-ink)]/8 bg-white/94 p-2 shadow-2xl backdrop-blur sm:hidden">
        <a
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--brand-primary)] px-4 text-xs font-semibold text-white"
          href="#ai-pack"
        >
          Старт-пакет
          <Sparkles className="size-4" />
        </a>
        <TrackedReferralLink
          className="h-12 rounded-xl bg-[var(--brand-ink)] px-4 text-xs text-white shadow-none"
          placement="mobile-sticky"
        >
          ИП
          <ArrowRight className="size-4" />
        </TrackedReferralLink>
      </div>
    </main>
  );
}
