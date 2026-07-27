import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3, ExternalLink, FileCheck2, ShieldCheck, Sparkles } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const metadata: Metadata = {
  title: "Открыть ИП онлайн",
  description: "Понятный маршрут онлайн-регистрации ИП и подготовка бизнеса параллельно с обработкой документов.",
  alternates: { canonical: "/ip" },
};

const steps = [
  ["Короткая заявка", "Основные данные заполняются на защищённой странице партнёра."],
  ["Подготовка документов", "Партнёр помогает сформировать комплект и передать его в ФНС."],
  ["Решение ФНС", "Решение о государственной регистрации принимает налоговая служба."],
] as const;

export default function IpPage() {
  return (
    <SiteShell>
      <section className="relative py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>официальный шаг</p>
            <h1 className="mt-6 text-balance text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
              ИП — без лишнего.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
              Подайте заявку онлайн, а время обработки документов используйте для подготовки бренда и материалов запуска.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <TrackedReferralLink placement="ip-hero">
                Перейти к заявке
                <ExternalLink className="size-4" />
              </TrackedReferralLink>
              <Link className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-[var(--brand-ink)]/10 bg-white px-7 text-sm font-semibold" href="/idea">
                Сначала сформировать идею
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-[var(--brand-muted)]"><ShieldCheck className="size-4 text-[var(--brand-primary)]" /> Паспортные данные вводятся только на официальной странице партнёра.</p>
          </div>

          <div className="rounded-[2.5rem] bg-[var(--brand-ink)] p-7 text-white" data-reveal data-reveal-delay="300">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">после отправки</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em]">Две линии работы</h2>
              </div>
              <Clock3 className="size-7 text-[var(--brand-mint)]" />
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.6rem] bg-white/[0.06] p-5">
                <p className="font-semibold">Партнёр и ФНС</p>
                <p className="mt-2 text-sm leading-6 text-white/55">Проверяют данные и обрабатывают документы.</p>
                <div className="motion-parallel-track mt-5 h-2 overflow-hidden rounded-full bg-white/10"><span className="block h-full rounded-full bg-[var(--brand-primary)]" /></div>
              </div>
              <div className="rounded-[1.6rem] bg-[var(--brand-mint)] p-5 text-[var(--brand-ink)]">
                <p className="font-semibold">Вы и Делопуск</p>
                <p className="mt-2 text-sm leading-6 text-[var(--brand-muted)]">Готовите карточки, цены, фотографии и первые каналы продаж.</p>
                <div className="motion-parallel-track mt-5 h-2 overflow-hidden rounded-full bg-[var(--brand-ink)]/10"><span className="block h-full rounded-full bg-[var(--brand-coral)] [animation-delay:600ms]" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">как проходит процесс</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Три понятных этапа.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {steps.map(([title, description], index) => (
              <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 80)} key={title}>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-sm font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <h3 className="mt-7 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-[2.3rem] bg-[var(--brand-coral-soft)] p-7" data-reveal>
            <FileCheck2 className="size-7 text-[var(--brand-coral-strong)]" />
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.05em]">Что проверить до заявки</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--brand-muted)]">
              {["понятно, чем вы будете заниматься", "выбран основной формат работы", "есть рабочее название и предложение", "актуальные условия проверены у партнёра"].map((item) => <li className="flex gap-3" key={item}><Check className="mt-1 size-4 shrink-0 text-[var(--brand-coral)]" />{item}</li>)}
            </ul>
          </article>
          <article className="rounded-[2.3rem] bg-[var(--brand-mint)] p-7" data-reveal data-reveal-delay="100">
            <Sparkles className="size-7 text-[var(--brand-primary)]" />
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.05em]">Что делать во время регистрации</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--brand-muted)]">
              {["подготовить карточки и фотографии", "рассчитать цены", "оформить профиль или лендинг", "подготовить ответы первым клиентам"].map((item) => <li className="flex gap-3" key={item}><Check className="mt-1 size-4 shrink-0 text-[var(--brand-primary)]" />{item}</li>)}
            </ul>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]" href="/materials">Открыть материалы <ArrowRight className="size-4" /></Link>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
