import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { guides } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Гайды",
  description: "Короткие практические материалы об идее, регистрации ИП и подготовке первых материалов.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <SiteShell>
      <section className="relative py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>база знаний</p>
          <h1 className="mt-6 text-balance text-[clamp(3.8rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
            Разобраться без перегруза.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
            Короткие практические материалы для тех, кто хочет перейти от идеи к запуску без длинных курсов и сложной терминологии.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {Object.entries(guides).map(([slug, guide], index) => (
              <Link className="motion-flow-stage rounded-[2.2rem] border border-[var(--brand-ink)]/8 bg-white p-7" data-reveal data-reveal-delay={String(index * 90)} href={`/guides/${slug}`} key={slug}>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-[var(--brand-primary)]"><BookOpen className="size-5" /></span>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">{guide.readTime}</p>
                <h2 className="mt-4 text-3xl font-bold leading-[0.98] tracking-[-0.05em]">{guide.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[var(--brand-muted)]">{guide.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">Читать <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
