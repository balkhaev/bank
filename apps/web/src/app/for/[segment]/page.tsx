import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ScanFace, Sparkles, WandSparkles } from "lucide-react";
import { notFound } from "next/navigation";

import { FunnelShell } from "@/components/funnel-shell";
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

  const isMarketplace = segment === "marketplace";

  return (
    <FunnelShell step="AI‑студия">
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-22" />
        <div className="motion-orb pointer-events-none absolute -left-40 top-16 -z-10 size-[32rem] rounded-full bg-[var(--brand-primary)]/12 blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/75 px-3.5 py-2 text-xs font-semibold" data-reveal>
              <Sparkles className="size-4 text-[var(--brand-primary)]" /> {data.eyebrow}
            </p>
            <h1 className="mt-7 text-balance text-[clamp(3.7rem,7vw,6.8rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">{data.title}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">{data.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className="brand-primary-action inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white" href={`/start?segment=${segment}`}>
                Создать AI‑пакет <WandSparkles className="size-4" />
              </Link>
              <TrackedReferralLink className="border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm" placement={`segment-${segment}-direct`}>
                Сразу открыть ИП <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
            <p className="mt-5 text-xs leading-5 text-[var(--brand-muted)]">Без телефона и e-mail. Результат появляется до перехода к партнёру.</p>
          </div>

          <div className="rounded-[2.7rem] bg-[var(--brand-ink)] p-5 text-white shadow-[0_55px_130px_-82px_rgba(21,22,35,0.9)]" data-reveal data-reveal-delay="300">
            <div className="flex items-center justify-between gap-4 px-2 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">ваша AI‑команда</p>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em]">Что будет готово</h2>
              </div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)]"><Sparkles className="size-5" /></span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.benefits.map((benefit, index) => (
                <div className="min-h-36 rounded-[1.55rem] border border-white/8 bg-white/[0.055] p-4" key={benefit}>
                  <span className="flex size-9 items-center justify-center rounded-xl bg-white text-xs font-bold text-[var(--brand-ink)]">0{index + 1}</span>
                  <p className="mt-8 text-sm font-semibold leading-6">{benefit}</p>
                </div>
              ))}
            </div>
            {isMarketplace && (
              <div className="mt-3 flex items-center gap-4 rounded-[1.55rem] bg-[var(--brand-coral)] p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--brand-coral-strong)]"><ScanFace className="size-5" /></span>
                <div>
                  <p className="text-sm font-semibold">Для одежды — модельная примерка</p>
                  <p className="mt-1 text-xs leading-5 text-white/65">В базовом пакете создаём сценарий. Генерация финального изображения отмечена как beta.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/65 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">три шага</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">AI сначала показывает результат.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              ["01", "Короткий бриф", "Три вопроса о продукте и аудитории."],
              ["02", "AI‑пакет", "Карточки, тексты, визуальные сценарии и рекламные хуки."],
              ["03", "Открытие ИП", "Официальная заявка становится естественным следующим шагом."],
            ].map(([number, title, description], index) => (
              <article className={`rounded-[2rem] border border-[var(--brand-ink)]/8 p-6 ${index === 0 ? "bg-[var(--brand-lavender)]" : index === 1 ? "bg-[var(--brand-ink)] text-white" : "bg-[var(--brand-mint)]"}`} data-reveal data-reveal-delay={String(index * 80)} key={title}>
                <span className="text-xs font-bold opacity-55">{number}</span>
                <h3 className="mt-16 text-3xl font-bold tracking-[-0.05em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-60">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2.4rem] bg-[var(--brand-primary)] p-7 text-white sm:flex-row sm:p-10" data-reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.05em]">Посмотрите, что AI сделает именно для вас.</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">Без загрузки документов и контактной формы.</p>
            </div>
            <Link className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)]" href={`/start?segment=${segment}`}>
              Начать <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </FunnelShell>
  );
}
