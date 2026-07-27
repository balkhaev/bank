import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

import { FunnelShell } from "@/components/funnel-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const metadata: Metadata = {
  title: "Открыть ИП онлайн за 0 ₽",
  description: "После AI-пакета перейдите к официальной онлайн-заявке на регистрацию ИП у партнёра.",
  alternates: { canonical: "/ip" },
};

const benefits = [
  "регистрация онлайн",
  "стоимость услуги — 0 ₽",
  "подготовка документов у партнёра",
  "переход на официальный защищённый сайт",
] as const;

export default function IpPage() {
  return (
    <FunnelShell step="Официальный шаг">
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-22" />
        <div className="motion-orb pointer-events-none absolute -right-40 top-10 -z-10 size-[32rem] rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-mint)] px-3.5 py-2 text-xs font-semibold" data-reveal>
              <Sparkles className="size-4" /> AI‑пакет можно сохранить
            </p>
            <h1 className="mt-7 text-balance text-[clamp(3.8rem,7vw,6.8rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
              Оформите основу бизнеса.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
              Карточки, тексты и визуальные сценарии останутся у вас. Официальная заявка на ИП откроется отдельно на защищённом сайте партнёра.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <TrackedReferralLink openInNewTab placement="ip-hero">
                Открыть ИП за 0 ₽ <ExternalLink className="size-4" />
              </TrackedReferralLink>
              <Link className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-[var(--brand-ink)]/10 bg-white px-7 text-sm font-semibold" href="/start">
                Сначала создать AI‑пакет <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-[var(--brand-muted)]"><ShieldCheck className="size-4 text-[var(--brand-primary)]" /> Делопуск не принимает паспортные данные.</p>
          </div>

          <div className="rounded-[2.7rem] bg-[var(--brand-ink)] p-6 text-white shadow-[0_55px_130px_-82px_rgba(21,22,35,0.9)]" data-reveal data-reveal-delay="300">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">ваш результат не потеряется</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em]">AI‑студия остаётся открытой</h2>
              </div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)]"><Sparkles className="size-5" /></span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["название и позиционирование", "3 карточки", "текст каталога", "визуальные сценарии"].map((item) => (
                <div className="rounded-[1.45rem] border border-white/8 bg-white/[0.055] p-4 text-sm font-semibold" key={item}>
                  <Check className="mb-5 size-4 text-[var(--brand-mint)]" />{item}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-[var(--brand-coral)] p-4">
              <p className="text-sm font-semibold">Теперь — официальный шаг</p>
              <p className="mt-2 text-xs leading-5 text-white/65">Партнёр помогает подготовить документы и передать заявление в ФНС.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/65 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[2.3rem] bg-[var(--brand-lavender)] p-7" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-primary)]">условия перехода</p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em]">Без маскировки под банк.</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">Вы уходите на официальный домен партнёра и проверяете актуальные условия там.</p>
              <ul className="mt-7 grid gap-3">{benefits.map((benefit) => <li className="flex items-center gap-3 text-sm font-semibold" key={benefit}><Check className="size-4 text-[var(--brand-primary)]" />{benefit}</li>)}</ul>
            </article>

            <article className="rounded-[2.3rem] bg-[var(--brand-primary)] p-7 text-white" data-reveal data-reveal-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">готовы продолжить</p>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-5xl">Откройте официальную заявку.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">Решение о государственной регистрации принимает ФНС.</p>
              <TrackedReferralLink className="mt-8 bg-white text-[var(--brand-primary)] shadow-none hover:bg-[var(--brand-paper)]" openInNewTab placement="ip-bottom">
                Перейти к регистрации <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </article>
          </div>
        </div>
      </section>
    </FunnelShell>
  );
}
