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
      <section className="premium-dark-section relative overflow-hidden py-16 text-white sm:py-24">
        <div className="premium-orbits pointer-events-none absolute inset-0 opacity-70" />
        <div className="motion-orb pointer-events-none absolute -right-40 top-10 size-[32rem] rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-[var(--brand-mint)]" data-reveal>
              <Sparkles className="size-4" /> AI‑пакет сохранён в браузере
            </p>
            <h1 className="font-editorial mt-8 text-balance text-[clamp(3.8rem,7vw,6.8rem)] leading-[0.96] tracking-[-0.05em]" data-reveal data-reveal-delay="80">
              Откройте ИП за 0 ₽.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/56 sm:text-xl" data-reveal data-reveal-delay="160">
              Карточки, тексты и визуальные сценарии останутся у вас. Официальная заявка откроется отдельно на защищённом сайте партнёра.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <TrackedReferralLink className="bg-[var(--brand-coral)] text-white shadow-none hover:bg-[var(--brand-coral-strong)]" openInNewTab placement="ip-hero">
                Перейти к заявке <ExternalLink className="size-4" />
              </TrackedReferralLink>
              <Link className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.035] px-7 text-sm font-semibold text-white hover:bg-white/[0.08]" href="/start">
                Создать другой AI‑пакет <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-white/38"><ShieldCheck className="size-4 text-[var(--brand-mint)]" /> Делопуск не принимает паспортные данные.</p>
          </div>

          <div className="rounded-[2.7rem] border border-white/8 bg-white/[0.045] p-6 shadow-[0_55px_130px_-82px_rgba(0,0,0,0.9)] backdrop-blur" data-reveal data-reveal-delay="300">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-violet-soft)]">переход к партнёру</p>
            <h2 className="font-editorial mt-4 text-3xl leading-[1.06] tracking-[-0.035em] sm:text-4xl">Без смешивания интерфейсов и данных.</h2>
            <div className="mt-8 grid gap-3">
              {[
                ["01", "Открывается отдельная вкладка", "Делопуск остаётся открытым в браузере"],
                ["02", "Заполняете защищённую заявку", "Паспортные данные не проходят через Делопуск"],
                ["03", "Партнёр готовит документы", "Актуальные условия показывает партнёр"],
                ["04", "Решение принимает ФНС", "Статус регистрации зависит от ФНС"],
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
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-16 text-[var(--brand-ink)] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[2.3rem] bg-[var(--brand-lavender)] p-7" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-primary)]">честное разделение ролей</p>
              <h2 className="font-editorial mt-5 text-3xl tracking-[-0.035em]">Делопуск — не банк.</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">Мы создаём AI‑пакет и переводим вас на официальный домен партнёра.</p>
              <ul className="mt-7 grid gap-3">{benefits.map((benefit) => <li className="flex items-center gap-3 text-sm font-semibold" key={benefit}><Check className="size-4 text-[var(--brand-primary)]" />{benefit}</li>)}</ul>
            </article>

            <article className="premium-cta rounded-[2.3rem] p-7 text-white" data-reveal data-reveal-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-mint)]">готовы продолжить</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">Откройте официальную заявку.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/52">Решение о государственной регистрации принимает ФНС.</p>
              <TrackedReferralLink className="mt-8 bg-white text-[var(--brand-ink)] shadow-none hover:bg-[var(--brand-paper)]" openInNewTab placement="ip-bottom">
                Перейти к регистрации <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </article>
          </div>
        </div>
      </section>
    </FunnelShell>
  );
}
