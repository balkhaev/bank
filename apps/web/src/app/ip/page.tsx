import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, ShieldCheck } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const metadata: Metadata = {
  title: "Открыть ИП онлайн за 0 ₽",
  description: "Перейдите к официальной онлайн-заявке на регистрацию ИП у партнёра.",
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
    <SiteShell>
      <section className="relative py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>официальный следующий шаг</p>
            <h1 className="mt-6 text-balance text-[clamp(4rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
              Откройте ИП за 0 ₽.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
              Короткая заявка открывается отдельно на официальной странице партнёра. Делопуск не принимает паспортные данные.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <TrackedReferralLink openInNewTab placement="ip-hero">
                Перейти к заявке <ExternalLink className="size-4" />
              </TrackedReferralLink>
              <Link className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-[var(--brand-ink)]/10 bg-white px-7 text-sm font-semibold" href="/start">
                Сначала получить старт-пакет <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-[var(--brand-muted)]"><ShieldCheck className="size-4 text-[var(--brand-primary)]" /> Актуальные условия проверяйте на странице партнёра.</p>
          </div>

          <div className="rounded-[2.5rem] bg-[var(--brand-ink)] p-7 text-white" data-reveal data-reveal-delay="300">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">что входит</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em]">Понятный путь без поездки по инстанциям</h2>
            <ul className="mt-8 grid gap-3">
              {benefits.map((benefit) => (
                <li className="flex items-center gap-3 rounded-[1.4rem] bg-white/[0.06] p-4 text-sm font-semibold" key={benefit}>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-mint)] text-[var(--brand-ink)]"><Check className="size-4" strokeWidth={3} /></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">после перехода</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Партнёр ведёт официальную часть.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              ["01", "Заполните заявку", "Основные данные вводятся на защищённой странице партнёра."],
              ["02", "Подготовьте документы", "Партнёр помогает сформировать и передать комплект."],
              ["03", "Получите решение", "Решение о государственной регистрации принимает ФНС."],
            ].map(([number, title, description]) => (
              <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal key={number}>
                <span className="text-sm font-bold text-[var(--brand-primary)]">{number}</span>
                <h3 className="mt-10 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-muted)]">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <TrackedReferralLink openInNewTab placement="ip-bottom">
              Открыть официальную заявку <ArrowRight className="size-4" />
            </TrackedReferralLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
