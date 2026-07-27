import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, FileCheck2, Palette, Sparkles, Store, Wrench } from "lucide-react";

import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";
import { segments } from "@/lib/site-content";

const routeCards = [
  {
    href: "/idea",
    number: "01",
    title: "Идея и бренд",
    description: "Рабочее название, позиционирование и характер бизнеса.",
    icon: Palette,
    tone: "bg-[var(--brand-lavender)]",
  },
  {
    href: "/ip",
    number: "02",
    title: "Открыть ИП",
    description: "Отдельная официальная заявка на странице партнёра.",
    icon: FileCheck2,
    tone: "bg-[var(--brand-coral-soft)]",
  },
  {
    href: "/materials",
    number: "03",
    title: "Материалы запуска",
    description: "Карточки, оффер, цены и план первых действий.",
    icon: Sparkles,
    tone: "bg-[var(--brand-mint)]",
  },
] as const;

const sectionLinks = [
  { href: "/idea", title: "Мастерская идеи", description: "Сформировать рабочий бренд и получить старт-пакет.", icon: Palette },
  { href: "/ip", title: "Регистрация ИП", description: "Понять процесс и перейти к официальной заявке.", icon: FileCheck2 },
  { href: "/materials", title: "Материалы", description: "Использовать время регистрации для подготовки запуска.", icon: Sparkles },
  { href: "/guides", title: "Гайды", description: "Разобраться в запуске без перегруза и длинных курсов.", icon: BookOpen },
] as const;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Делопуск",
    url: "https://delopusk.ru",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Сервис для запуска малого бизнеса: идея и бренд, переход к регистрации ИП и материалы запуска.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
  };

  return (
    <SiteShell>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />

      <section className="relative" id="top">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="motion-orb pointer-events-none absolute -right-40 top-10 -z-10 size-[34rem] rounded-full bg-[var(--brand-coral)]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/72 px-3.5 py-1.5 text-xs font-semibold" data-reveal>
              <Sparkles className="size-3.5 text-[var(--brand-primary)]" />
              запуск бизнеса без путаницы
            </p>
            <h1 className="mt-7 text-balance text-[clamp(4rem,8vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
              Дело начинается здесь.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
              Сформируйте идею и бренд, подайте заявку на ИП, а пока идёт регистрация — подготовьте материалы для запуска.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/idea">
                Сформировать идею
                <ArrowRight className="size-4" />
              </Link>
              <TrackedReferralLink
                className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-lavender)] sm:w-auto"
                placement="hero-secondary"
              >
                Открыть ИП
                <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
          </div>

          <div className="hero-flow relative mx-auto w-full max-w-[39rem]" data-reveal data-reveal-delay="320">
            <div className="overflow-hidden rounded-[2.6rem] border border-[var(--brand-ink)]/8 bg-white/78 p-5 shadow-[0_48px_130px_-76px_rgba(31,28,90,0.75)] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">маршрут запуска</p>
                  <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">Три ясных шага</p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white">
                  <ArrowRight className="size-5" />
                </span>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {routeCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Link className={`motion-flow-stage min-h-[16rem] rounded-[1.8rem] border border-[var(--brand-ink)]/8 p-5 ${card.tone}`} href={card.href} key={card.href}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold text-[var(--brand-muted)]">{card.number}</span>
                        <span className="flex size-9 items-center justify-center rounded-xl bg-[var(--brand-ink)] text-white"><Icon className="size-4" /></span>
                      </div>
                      <h2 className="mt-16 text-2xl font-bold leading-[0.96] tracking-[-0.05em]">{card.title}</h2>
                      <p className="mt-4 text-sm leading-6 text-[var(--brand-muted)]">{card.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">работа идёт параллельно</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Не ждите регистрации, чтобы готовиться к запуску.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--brand-muted)]">После подачи заявки две линии идут одновременно.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2.2rem] bg-[var(--brand-ink)] p-7 text-white" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">официальная линия</p>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Партнёр и ФНС</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">Проверяют данные, готовят документы и обрабатывают заявление.</p>
              <div className="motion-parallel-track mt-10 h-2 overflow-hidden rounded-full bg-white/10"><span className="block h-full rounded-full bg-[var(--brand-primary)]" /></div>
            </article>
            <article className="rounded-[2.2rem] bg-[var(--brand-mint)] p-7" data-reveal data-reveal-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-muted)]">рабочая линия</p>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Вы и Делопуск</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--brand-muted)]">Готовите карточки, оффер, фотографии, цены и первые каналы продаж.</p>
              <div className="motion-parallel-track mt-10 h-2 overflow-hidden rounded-full bg-[var(--brand-ink)]/10"><span className="block h-full rounded-full bg-[var(--brand-coral)] [animation-delay:600ms]" /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">разделы сайта</p>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Каждая задача — на своей странице.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--brand-muted)]">Главная остаётся короткой, а генератор, регистрация, материалы и знания получают отдельные маршруты.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectionLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link className="motion-flow-stage rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 70)} href={item.href} key={item.href}>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-[var(--brand-primary)]"><Icon className="size-5" /></span>
                  <h3 className="mt-7 text-xl font-bold tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{item.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">Перейти <ArrowRight className="size-4" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper-deep)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">для разных моделей бизнеса</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Один маршрут, разные сценарии.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => {
              const Icon = [Store, Wrench, BriefcaseBusiness, Sparkles][index] ?? Sparkles;
              return (
                <Link className="motion-flow-stage rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" href={`/for/${slug}`} key={slug}>
                  <Icon className="size-6 text-[var(--brand-primary)]" />
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.035em]">{segment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{segment.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] bg-[var(--brand-primary)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14" data-reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">первый шаг</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Начните с ясной идеи.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">Делопуск поможет превратить задумку в рабочий бренд и первые материалы.</p>
          </div>
          <Link className="mt-8 inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)] lg:mt-0" href="/idea">
            Перейти в мастерскую
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
