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
  return { title: data.title, description: data.description, alternates: { canonical: `/for/${segment}` } };
}

export default async function SegmentPage({ params }: { params: Promise<{ segment: string }> }) {
  const { segment } = await params;
  const data = segments[segment as SegmentSlug];
  if (!data) notFound();

  return (
    <SiteShell>
      <section className="relative py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>{data.eyebrow}</p>
            <h1 className="mt-6 text-balance text-[clamp(3.8rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">{data.title}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">{data.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href={`/start?segment=${segment}`}>
                Получить старт-пакет <Sparkles className="size-4" />
              </Link>
              <TrackedReferralLink className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm sm:w-auto" placement={`segment-${segment}-direct`}>
                Сразу открыть ИП <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
            <p className="mt-5 text-xs leading-5 text-[var(--brand-muted)]">Три вопроса. Без телефона и регистрации на Делопуске.</p>
          </div>

          <div className="rounded-[2.5rem] bg-[var(--brand-lavender)] p-7" data-reveal data-reveal-delay="300">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-primary)]">персональный результат</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em]">Что будет готово</h2>
            <ul className="mt-7 grid gap-4">
              {data.benefits.map((benefit) => (
                <li className="flex gap-3 rounded-[1.35rem] bg-white/75 p-4 text-sm font-semibold" key={benefit}>
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">одна воронка</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Результат до банковской заявки.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--brand-muted)]">Сначала пользователь видит полезный персональный результат. Затем получает один понятный следующий шаг — открыть ИП.</p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              ["01", "Ответить на вопросы"],
              ["02", "Увидеть старт-пакет"],
              ["03", "Перейти к регистрации"],
            ].map(([number, title]) => (
              <article className="rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal key={number}>
                <span className="text-sm font-bold text-[var(--brand-primary)]">{number}</span>
                <h3 className="mt-10 text-2xl font-bold leading-[1.02] tracking-[-0.04em]">{title}</h3>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link className={primaryLinkClassName} href={`/start?segment=${segment}`}>Начать <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
