import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import { guides, type GuideSlug } from "@/lib/site-content";

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];
  if (!guide) notFound();

  return (
    <SiteShell>
      <article>
        <header className="relative py-20 sm:py-28">
          <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]" href="/guides" data-reveal>
              <ArrowLeft className="size-4" /> Все гайды
            </Link>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-muted)]" data-reveal data-reveal-delay="60">{guide.readTime}</p>
            <h1 className="mt-5 text-balance text-[clamp(3.3rem,7vw,6.3rem)] font-bold leading-[0.9] tracking-[-0.075em]" data-reveal data-reveal-delay="120">{guide.title}</h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="180">{guide.description}</p>
          </div>
        </header>

        <div className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-16 sm:py-24">
          <div className="mx-auto grid max-w-4xl gap-12 px-4 sm:px-6 lg:px-8">
            {guide.sections.map(([title, body], index) => (
              <section className="grid gap-4 sm:grid-cols-[4rem_1fr]" data-reveal data-reveal-delay={String(index * 80)} key={title}>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-sm font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <div>
                  <h2 className="text-3xl font-bold tracking-[-0.05em]">{title}</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--brand-muted)]">{body}</p>
                </div>
              </section>
            ))}
          </div>
        </div>

        <footer className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col gap-7 rounded-[2.4rem] bg-[var(--brand-primary)] p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between" data-reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.05em]">Перейдите от чтения к действию.</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">Сформируйте рабочую версию бренда и получите первые материалы.</p>
            </div>
            <Link className="inline-flex h-[3.25rem] shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)]" href="/idea">
              Открыть мастерскую <ArrowRight className="size-4" />
            </Link>
          </div>
        </footer>
      </article>
    </SiteShell>
  );
}
