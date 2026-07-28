import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Gift, ShieldCheck } from "lucide-react";

import { AppliedBonusButton } from "@/components/applied-bonus-button";
import { FunnelShell } from "@/components/funnel-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const metadata: Metadata = {
  title: "Открыть ИП и получить AI-бонус",
  description: "Откройте ИП у партнёра, получите ещё 12 AI-действий после заявки и Pro после подтверждения регистрации и РКО.",
  alternates: { canonical: "/ip" },
};

const benefits = [
  "регистрация онлайн",
  "стоимость услуги — 0 ₽",
  "+12 AI-действий после отправки заявки",
  "Pro на 30 дней после подтверждения регистрации и РКО",
] as const;

export default function IpPage() {
  return (
    <FunnelShell step="AI‑бонус · открытие ИП">
      <section className="premium-dark-section relative overflow-hidden py-16 text-white sm:py-24">
        <div className="premium-orbits pointer-events-none absolute inset-0 opacity-70" />
        <div className="motion-orb pointer-events-none absolute -right-40 top-10 size-[32rem] rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-[var(--brand-mint)]" data-reveal>
              <Gift className="size-4" /> AI‑бонус от Делопуска
            </p>
            <h1 className="font-editorial mt-8 text-balance text-[clamp(3.5rem,6.8vw,6.4rem)] leading-[0.96] tracking-[-0.05em]" data-reveal data-reveal-delay="80">
              Откройте ИП — продолжайте работать с AI.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/56 sm:text-xl" data-reveal data-reveal-delay="160">
              После отправки заявки вернитесь и получите ещё 12 AI‑действий. После подтверждённой регистрации ИП и открытия РКО мы откроем Pro на 30 дней.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <TrackedReferralLink className="bg-[var(--brand-coral)] text-white shadow-none hover:bg-[var(--brand-coral-strong)]" openInNewTab placement="ip-hero">
                Перейти к заявке <ExternalLink className="size-4" />
              </TrackedReferralLink>
              <Link className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.035] px-7 text-sm font-semibold text-white hover:bg-white/[0.08]" href="/start">
                Вернуться к AI <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-white/38"><ShieldCheck className="size-4 text-[var(--brand-mint)]" /> Делопуск не принимает паспортные данные.</p>
          </div>

          <div className="rounded-[2.7rem] border border-white/8 bg-white/[0.045] p-6 shadow-[0_55px_130px_-82px_rgba(0,0,0,0.9)] backdrop-blur" data-reveal data-reveal-delay="300">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-violet-soft)]">как открыть бонус</p>
            <h2 className="font-editorial mt-4 text-3xl leading-[1.06] tracking-[-0.035em] sm:text-4xl">Три действия без ожидания выплаты.</h2>
            <div className="mt-8 grid gap-3">
              {[
                ["01", "Откройте официальную заявку", "Она откроется в отдельной вкладке на сайте партнёра"],
                ["02", "Отправьте анкету", "Актуальные условия и документы показывает партнёр"],
                ["03", "Вернитесь в Делопуск", "Нажмите кнопку ниже и получите временные 12 действий"],
              ].map(([number, title, description]) => (
                <article className="grid gap-2 rounded-[1.45rem] border border-white/8 bg-white/[0.045] p-4 sm:grid-cols-[2.5rem_1fr]" key={number}>
                  <span className="text-xs font-bold text-[var(--brand-violet-soft)]">{number}</span>
                  <div>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/38">{description}</p>
                  </div>
                </article>
              ))}
            </div>
            <AppliedBonusButton className="mt-5 w-full" />
            <p className="mt-3 text-center text-[10px] leading-5 text-white/28">Нажимайте после фактической отправки заявки на стороне партнёра.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-16 text-[var(--brand-ink)] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[2.3rem] bg-[var(--brand-lavender)] p-7" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-primary)]">что входит</p>
              <h2 className="font-editorial mt-5 text-3xl tracking-[-0.035em]">Доступ растёт вместе со статусом.</h2>
              <ul className="mt-7 grid gap-3">{benefits.map((benefit) => <li className="flex items-center gap-3 text-sm font-semibold" key={benefit}><Check className="size-4 text-[var(--brand-primary)]" />{benefit}</li>)}</ul>
            </article>

            <article className="premium-cta rounded-[2.3rem] p-7 text-white" data-reveal data-reveal-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-mint)]">полный бонус</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">Pro на 30 дней после подтверждения.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/52">До 30 карточек, 10 AI‑сцен, 5 примерок, тексты и экспорт без водяных знаков. Подтверждение происходит по статусу регистрации и РКО в партнёрской системе.</p>
              <TrackedReferralLink className="mt-8 bg-white text-[var(--brand-ink)] shadow-none hover:bg-[var(--brand-paper)]" openInNewTab placement="ip-bottom">
                Перейти к регистрации <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </article>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-black/8 bg-white p-5 text-xs leading-6 text-[var(--brand-muted)]" data-reveal>
            AI‑бонус предоставляет Делопуск самостоятельно и за свой счёт. Это не банковская услуга. Партнёр не отвечает за работу Делопуска, а Делопуск не принимает решение о регистрации ИП и открытии РКО.
          </div>
        </div>
      </section>
    </FunnelShell>
  );
}
