import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";
import { segments, type SegmentSlug } from "@/lib/site-content";

export function generateStaticParams() {
  return Object.keys(segments).map((segment) => ({ segment }));
}

export async function generateMetadata({ params }: { params: Promise<{ segment: string }> }): Promise<Metadata> {
  const { segment } = await params;
  const data = segments[segment as SegmentSlug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/for/${segment}` },
  };
}

export default async function SegmentPage({ params }: { params: Promise<{ segment: string }> }) {
  const { segment } = await params;
  const data = segments[segment as SegmentSlug];
  if (!data) notFound();

  return (
    <SiteShell>
      <section className="relative py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>{data.eyebrow}</p>
            <h1 className="mt-6 text-balance text-[clamp(3.8rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">{data.title}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">{data.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/idea">Сформировать бренд <Sparkles className="size-4" /></Link>
              <TrackedReferralLink className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm sm:w-auto" placement={`segment-${segment}`}>
                Открыть ИП <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-[var(--brand-lavender)] p-7" data-reveal data-reveal-delay="300">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-primary)]">старт-пакет</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em]">Что вы получите</h2>
            <ul className="mt-7 grid gap-4">
              {data.benefits.map((benefit) => (
                <li className="flex gap-3 rounded-[1.35rem] bg-white/72 p-4 text-sm font-semibold" key={benefit}>
                  <Check className="size-5 shrink-0 text-[var(--brand-primary)]" />{benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">общий маршрут</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Идея. ИП. Параллельная подготовка.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {["Сформируйте предложение и рабочий бренд", "Подайте официальную заявку на ИП", "Пока идёт регистрация, готовьте материалы и продажи"].map((item, index) => (
              <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 80)} key={item}>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-sm font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <h3 className="mt-7 text-2xl font-bold leading-[1.02] tracking-[-0.04em]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
