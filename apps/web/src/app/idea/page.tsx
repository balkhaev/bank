import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck2, Sparkles } from "lucide-react";

import { AiStartPack } from "@/components/ai-start-pack";
import { SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const metadata: Metadata = {
  title: "Идея и бренд",
  description: "Сформируйте рабочее название, позиционирование и первые материалы для запуска бизнеса.",
  alternates: { canonical: "/idea" },
};

export default function IdeaPage() {
  return (
    <SiteShell>
      <section className="relative border-b border-[var(--brand-ink)]/6 py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>мастерская идеи</p>
          <h1 className="mt-6 text-balance text-[clamp(3.8rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
            Сначала — ясная идея.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
            Соберите рабочее название, позиционирование и визуальный характер. Идеального бренда не нужно — нужна версия, с которой можно начать.
          </p>
        </div>
      </section>

      <AiStartPack />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">после рабочей версии бренда</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Подайте заявку и продолжайте готовить запуск.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2.2rem] bg-[var(--brand-coral-soft)] p-7" data-reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-coral)] text-white"><FileCheck2 className="size-5" /></span>
              <h3 className="mt-7 text-3xl font-bold tracking-[-0.05em]">Оформить ИП</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">Перейдите к официальной заявке партнёра, когда предложение и формат деятельности уже понятны.</p>
              <TrackedReferralLink className="mt-7 bg-[var(--brand-ink)] text-white shadow-none" placement="idea-next-ip">
                Открыть ИП
                <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </article>
            <article className="rounded-[2.2rem] bg-[var(--brand-mint)] p-7" data-reveal data-reveal-delay="100">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white"><Sparkles className="size-5" /></span>
              <h3 className="mt-7 text-3xl font-bold tracking-[-0.05em]">Подготовить материалы</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">Пока идёт регистрация, уточните цены, фотографии, каналы продвижения и сценарий первого обращения.</p>
              <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]" href="/materials">
                Открыть чек-лист
                <ArrowRight className="size-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
