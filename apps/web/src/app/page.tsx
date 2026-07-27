import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheckBig,
  FileCheck2,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  UserRoundCheck,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@bank/ui/components/card";
import { cn } from "@bank/ui/lib/utils";

import { AiStartPack } from "@/components/ai-start-pack";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

const BRAND_NAME = "Делопуск";
const BRAND_DOMAIN = "delopusk.ru";

const facts = [
  { value: "0 ₽", label: "регистрация" },
  { value: "3–5", label: "рабочих дней" },
  { value: "3", label: "готовые карточки" },
] as const;

const benefits: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: FileCheck2,
    title: "Подготовят документы",
    description:
      "Банк проверит анкету, сформирует заявление и передаст пакет в налоговую.",
  },
  {
    icon: ReceiptText,
    title: "Помогут с ОКВЭД",
    description:
      "Подскажут коды деятельности и объяснят, как добавить новые в будущем.",
  },
  {
    icon: Landmark,
    title: "Разберут налоговый режим",
    description:
      "Объяснят различия между УСН, патентом и другими режимами простыми словами.",
  },
  {
    icon: UserRoundCheck,
    title: "Организуют подписание",
    description:
      "Документы можно подписать без поездки в налоговую или банковское отделение.",
  },
  {
    icon: WalletCards,
    title: "Откроют бизнес-счёт",
    description:
      "После регистрации Т‑Банк бесплатно откроет расчётный счёт для работы ИП.",
  },
  {
    icon: ShieldCheck,
    title: "Проведут по шагам",
    description:
      "Статус заявки и дальнейшие действия будут доступны в личном кабинете.",
  },
];

const steps = [
  {
    number: "01",
    title: "Заполните заявку",
    description:
      "Укажите паспортные данные и СНИЛС на защищённой странице Т‑Банка.",
  },
  {
    number: "02",
    title: "Подпишите документы",
    description:
      "Банк согласует удобный способ подписания и проверит комплект документов.",
  },
  {
    number: "03",
    title: "Банк отправит всё в ФНС",
    description:
      "Не нужно самостоятельно заполнять формы, платить госпошлину и ехать в налоговую.",
  },
  {
    number: "04",
    title: "Получите статус ИП",
    description:
      "ФНС пришлёт подтверждение на электронную почту, после чего можно начинать работу.",
  },
] as const;

const audiences: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Wrench,
    title: "Услуги и частная практика",
    description: "Ремонт, консалтинг, дизайн, разработка, обучение и другие услуги.",
  },
  {
    icon: Store,
    title: "Магазины и маркетплейсы",
    description: "Wildberries, Ozon, Яндекс Маркет или собственный интернет-магазин.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Работа с компаниями",
    description: "Договоры, счета, безналичная оплата и участие в закупках.",
  },
  {
    icon: Building2,
    title: "Новый небольшой бизнес",
    description: "Студия, мастерская, доставка, производство или локальная точка.",
  },
];

const faqs = [
  {
    question: "Сколько стоит регистрация ИП через Т‑Банк?",
    answer:
      "Услуга регистрации стоит 0 ₽. При электронной подаче через сервис банка госпошлина не требуется. Актуальные условия отображаются на странице Т‑Банка перед оформлением.",
  },
  {
    question: "Что входит в старт-пакет Делопуска?",
    answer:
      "Вы бесплатно получаете черновик позиционирования, три промо-карточки и план первой недели. Карточки скачиваются в SVG и подходят как основа для маркетплейса, соцсетей или лендинга.",
  },
  {
    question: "Нужно оставлять телефон или e‑mail для генерации?",
    answer:
      "Нет. Генератор просит только короткое описание продукта или услуги и аудитории. Не вводите паспортные данные, контакты и другую персональную информацию.",
  },
  {
    question: "Какие документы понадобятся?",
    answer:
      "Для гражданина России обычно нужны паспорт и СНИЛС. В отдельных ситуациях банк может запросить дополнительные сведения.",
  },
  {
    question: "Придётся посещать налоговую или отделение банка?",
    answer:
      "Нет. Т‑Банк помогает организовать подписание документов и самостоятельно передаёт комплект в ФНС.",
  },
  {
    question: "Как быстро зарегистрируют ИП?",
    answer:
      "После передачи документов государственная регистрация обычно занимает 3–5 рабочих дней. Итоговое решение принимает ФНС.",
  },
  {
    question: "Помогут выбрать ОКВЭД и систему налогообложения?",
    answer:
      "Сотрудники банка объяснят варианты, помогут подобрать коды деятельности и расскажут о доступных налоговых режимах. AI‑генератор Делопуска не заменяет такую консультацию.",
  },
  {
    question: "Делопуск — официальный сайт Т‑Банка?",
    answer:
      "Нет. Делопуск — независимая партнёрская информационная страница. По кнопке вы переходите на официальный домен tbank.ru, где заполняете заявку и принимаете условия банка.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND_NAME,
  url: `https://${BRAND_DOMAIN}`,
  description:
    "Запуск бизнеса онлайн: бесплатный старт-пакет и регистрация ИП через Т‑Банк.",
};

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={cn(
          "flex items-center justify-center bg-[var(--landing-primary)] font-black tracking-[-0.08em] text-black shadow-sm",
          compact ? "size-8 rounded-xl text-xs" : "size-10 rounded-[0.9rem] text-sm",
        )}
      >
        Д
      </span>
      <span className="leading-none">
        <span className="block font-bold tracking-[-0.035em]">{BRAND_NAME}</span>
        {!compact && (
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            запуск бизнеса
          </span>
        )}
      </span>
    </span>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/75 px-3.5 py-1.5 text-xs font-semibold shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.045em] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function HeroPanel() {
  const timeline = [
    { label: "Анкета заполнена", meta: "готово", done: true },
    { label: "Документы подписаны", meta: "готово", done: true },
    { label: "Заявка отправлена в ФНС", meta: "в работе", done: true },
    { label: "ИП зарегистрировано", meta: "следующий шаг", done: false },
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
      <div className="absolute -inset-12 -z-10 rounded-full bg-[var(--landing-primary)]/25 blur-3xl" />
      <Card className="relative gap-0 overflow-hidden rounded-[2rem] bg-[#181817] py-0 text-base text-white ring-1 ring-black/10 shadow-[0_45px_110px_-55px_rgba(0,0,0,0.95)]">
        <div className="landing-noise pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen" />
        <CardHeader className="relative border-b border-white/10 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-white/45">Статус регистрации</p>
              <CardTitle className="mt-1 text-xl font-semibold text-white">
                Ваш путь к ИП
              </CardTitle>
            </div>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--landing-primary)] text-black">
              <Sparkles className="size-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative px-6 py-7">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="text-5xl font-bold tracking-[-0.06em] text-white">75%</div>
              <p className="mt-1 text-sm text-white/45">основных шагов пройдено</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/80">
              Без госпошлины
            </span>
          </div>

          <div className="mb-7 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-[var(--landing-primary)]" />
          </div>

          <div className="space-y-1">
            {timeline.map((item, index) => (
              <div className="flex items-center gap-3 rounded-2xl px-2 py-3" key={item.label}>
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border",
                    item.done
                      ? "border-[var(--landing-primary)]/40 bg-[var(--landing-primary)] text-black"
                      : "border-white/15 bg-white/5 text-white/35",
                  )}
                >
                  {item.done ? (
                    <Check className="size-4" strokeWidth={2.8} />
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={cn("text-sm font-medium", item.done ? "text-white" : "text-white/55")}>
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-white/35">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--landing-primary)] text-[10px] font-bold text-[var(--landing-primary)]">
              3–5
            </div>
            <div>
              <p className="text-sm font-medium text-white">Ответ ФНС — на e‑mail</p>
              <p className="mt-0.5 text-xs text-white/45">Обычно через 3–5 рабочих дней</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:flex">
        <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--landing-primary)]/35">
          <BadgeCheck className="size-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Понадобятся</p>
          <p className="text-sm font-semibold">Паспорт + СНИЛС</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="landing-page overflow-hidden pb-24 sm:pb-0">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <header className="relative z-30 border-b border-black/6 bg-[var(--landing-background)]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a aria-label="Делопуск — наверх" href="#top">
            <Brand compact />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#ai-pack">
              Старт-пакет
            </a>
            <a className="transition-colors hover:text-foreground" href="#benefits">
              Возможности
            </a>
            <a className="transition-colors hover:text-foreground" href="#steps">
              Как открыть
            </a>
            <a className="transition-colors hover:text-foreground" href="#faq">
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
        <div className="landing-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>
              <CircleCheckBig className="size-3.5" />
              {BRAND_NAME} · запуск бизнеса онлайн
            </Eyebrow>
            <h1 className="mt-7 text-balance text-[clamp(3.15rem,7vw,5.85rem)] font-bold leading-[0.93] tracking-[-0.068em]">
              Откройте ИП онлайн за <span className="whitespace-nowrap">0 ₽</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              Т‑Банк подготовит документы и передаст заявку в ФНС. Делопуск бесплатно
              соберёт первые материалы для продвижения бизнеса.
            </p>

            <div className="mt-7 flex max-w-2xl items-start gap-3 rounded-2xl border border-black/8 bg-white/75 p-4 shadow-sm backdrop-blur">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--landing-primary)] text-black">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="font-semibold tracking-[-0.02em]">
                  Старт-пакет Делопуска — бесплатно
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Три промо-карточки, позиционирование и план первой недели — без
                  телефона и e‑mail.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <TrackedReferralLink className="w-full sm:w-auto" placement="hero-primary">
                Открыть ИП за 0 ₽
                <ArrowRight className="size-5" />
              </TrackedReferralLink>
              <a
                className="inline-flex h-[3.25rem] w-full items-center justify-center rounded-2xl border border-black/10 bg-white/75 px-7 text-sm font-semibold shadow-sm backdrop-blur transition hover:bg-white sm:w-auto"
                href="#ai-pack"
              >
                Собрать старт-пакет
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4" />
              Заявка и документы заполняются на защищённой странице tbank.ru
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-border rounded-2xl border border-black/8 bg-white/75 p-1 shadow-sm backdrop-blur">
              {facts.map((fact) => (
                <div className="px-3 py-4 text-center sm:px-5" key={fact.label}>
                  <div className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                    {fact.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <HeroPanel />
        </div>
      </section>

      <AiStartPack />

      <section className="border-y border-black/6 bg-white/55 py-20 sm:py-28" id="benefits">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            description="Вместо поиска форм и поездок по инстанциям — один понятный сценарий с подсказками на каждом шаге."
            eyebrow="Меньше бюрократии"
            title="Банк берёт рутину на себя"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card
                  className="group gap-0 rounded-3xl bg-[var(--landing-background)]/90 py-0 text-base ring-black/8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  key={benefit.title}
                >
                  <CardHeader className="p-6 sm:p-7">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[var(--landing-primary)]/30 transition-colors group-hover:bg-[var(--landing-primary)]">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold tracking-[-0.025em]">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="steps">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            description="Большую часть процесса ведёт Т‑Банк. Вам остаётся заполнить анкету и подписать подготовленные документы."
            eyebrow="Четыре шага"
            title="От заявки до готового ИП"
          />

          <div className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-5">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border lg:block" />
            {steps.map((step) => (
              <div className="relative" key={step.number}>
                <div className="relative z-10 mb-5 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#181817] text-sm font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.025em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-black/10 bg-[#181817] p-6 text-white shadow-[0_35px_90px_-55px_rgba(0,0,0,0.9)] sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--landing-primary)] text-black">
                <Smartphone className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  Начните с короткой онлайн-заявки
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                  После перехода вы окажетесь на официальной странице Т‑Банка. Банк
                  покажет актуальные условия до отправки данных.
                </p>
              </div>
            </div>
            <TrackedReferralLink
              className="mt-6 w-full shrink-0 lg:mt-0 lg:w-auto"
              placement="steps-banner"
            >
              Перейти к заявке
              <ArrowRight className="size-4" />
            </TrackedReferralLink>
          </div>
        </div>
      </section>

      <section className="border-y border-black/6 bg-[#f1efe8]/75 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            description="Регистрация ИП пригодится, когда нужно официально принимать оплату, заключать договоры и отделить личные финансы от бизнеса."
            eyebrow="Для старта и роста"
            title="Подходит большинству небольших бизнесов"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <Card
                  className="gap-0 rounded-3xl bg-white/85 py-0 text-base ring-black/8"
                  key={audience.title}
                >
                  <CardHeader className="p-6">
                    <Icon className="size-6" />
                    <CardTitle className="mt-4 text-lg font-semibold tracking-[-0.025em]">
                      {audience.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6">
                      {audience.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            description="Короткие ответы о стоимости, старт-пакете, документах и процессе регистрации."
            eyebrow="Без мелкого шрифта"
            title="Частые вопросы"
          />

          <div className="mt-12 grid gap-3">
            {faqs.map((faq, index) => (
              <details
                className="group rounded-2xl border border-black/8 bg-white/75 px-5 shadow-sm backdrop-blur open:bg-white"
                key={faq.question}
                open={index === 0 ? true : undefined}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl border-t border-black/6 pb-5 pt-4 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[var(--landing-primary)] px-6 py-12 text-black shadow-[0_35px_100px_-55px_rgba(214,166,0,0.9)] sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full border-[60px] border-black/[0.045]" />
          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-black/10 bg-black/8 px-3.5 py-1.5 text-xs font-semibold">
              Запусти дело
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.055em] sm:text-5xl">
              Материалы готовы — оформите основу бизнеса
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Перейдите на официальную страницу Т‑Банка и заполните заявку на
              регистрацию ИП. Старт-пакет Делопуска останется в вашем браузере.
            </p>
          </div>
          <TrackedReferralLink
            className="relative mt-8 w-full bg-[#181817] text-white shadow-none hover:brightness-110 lg:mt-0 lg:w-auto"
            placement="final-cta"
          >
            Открыть ИП за 0 ₽
            <ArrowRight className="size-5" />
          </TrackedReferralLink>
        </div>
      </section>

      <footer className="border-t border-black/6 bg-white/65">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center justify-between gap-4 sm:justify-start">
                <Brand />
                <span className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs font-semibold text-foreground">
                  {BRAND_DOMAIN}
                </span>
              </div>
              <p className="mt-5 leading-6">
                Делопуск — партнёрская информационная страница, не официальный сайт
                Т‑Банка. При переходе по ссылке и оформлении продукта владелец страницы
                может получить вознаграждение. Банковские услуги предоставляет АО
                «ТБанк», универсальная лицензия Банка России № 2673. Решение о
                государственной регистрации принимает ФНС.
              </p>
              <p className="mt-2 leading-6">
                Условия и доступность сервиса могут измениться. Проверяйте актуальную
                информацию на сайте Т‑Банка перед отправкой заявки. Делопуск не собирает
                паспортные данные и не принимает заявки самостоятельно.
              </p>
            </div>
            <TrackedReferralLink
              className="h-11 shrink-0 rounded-xl bg-white px-5 text-xs text-foreground ring-1 ring-black/10 shadow-none hover:bg-muted"
              placement="footer"
            >
              На сайт Т‑Банка
              <ArrowRight className="size-4" />
            </TrackedReferralLink>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-black/8 bg-[var(--landing-background)]/95 p-2 shadow-2xl backdrop-blur sm:hidden">
        <TrackedReferralLink className="w-full" placement="mobile-sticky">
          Открыть ИП за 0 ₽
          <ArrowRight className="size-5" />
        </TrackedReferralLink>
      </div>
    </main>
  );
}
