import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const primaryLinkClassName =
  "brand-primary-action inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white shadow-[0_18px_42px_-22px_rgba(78,70,200,0.9)]";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-10 shrink-0 items-center justify-center rounded-[1.05rem] bg-white shadow-[0_14px_36px_-22px_rgba(21,22,35,0.55)] ring-1 ring-[var(--brand-ink)]/8 ${className}`}
    >
      <svg className="size-8" viewBox="0 0 40 40" fill="none">
        <circle className="brand-mark__origin" cx="7" cy="28" r="4" fill="var(--brand-mint)" />
        <path
          className="brand-mark__route"
          d="M10 28H20V18H31"
          stroke="var(--brand-primary)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="brand-mark__dot" cx="33" cy="18" r="5" fill="var(--brand-coral)" />
      </svg>
    </span>
  );
}

const navItems = [
  { href: "/idea", label: "Идея и бренд" },
  { href: "/ip", label: "Открыть ИП" },
  { href: "/materials", label: "Материалы" },
  { href: "/guides", label: "Гайды" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-[var(--brand-ink)]/6 bg-[var(--brand-paper)]/86 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Делопуск — главная">
          <BrandMark />
          <span>
            <span className="block text-sm font-bold tracking-[-0.025em]">Делопуск</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--brand-muted)]">
              запуск бизнеса
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-muted)] lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-[var(--brand-ink)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <TrackedReferralLink className="h-10 rounded-xl px-4 text-xs shadow-none" placement="header">
          Открыть ИП
          <ArrowRight className="size-4" />
        </TrackedReferralLink>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--brand-ink)]/6 bg-white/72">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-[var(--brand-muted)] sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[var(--brand-ink)]">
              <BrandMark className="size-9 rounded-[0.95rem]" />
              <div>
                <span className="block font-bold">Делопуск</span>
                <span className="block text-xs text-[var(--brand-muted)]">delopusk.ru</span>
              </div>
            </div>
            <p className="mt-5 leading-6">
              Делопуск — независимая партнёрская информационная страница, не официальный сайт Т‑Банка. При переходе по ссылке и оформлении продукта владелец страницы может получить вознаграждение. Банковские услуги предоставляет АО «ТБанк», универсальная лицензия Банка России № 2673. Решение о государственной регистрации принимает ФНС.
            </p>
            <p className="mt-2 leading-6">
              Страница не принимает банковские заявки и не собирает паспортные данные. Проверяйте актуальные условия на официальном сайте партнёра.
            </p>
          </div>

          <div className="grid content-start gap-3 text-xs">
            {navItems.map((item) => (
              <Link className="font-semibold text-[var(--brand-ink)] hover:text-[var(--brand-primary)]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <TrackedReferralLink
              className="mt-2 h-11 rounded-xl border border-[var(--brand-ink)]/10 bg-white px-5 text-xs text-[var(--brand-ink)] shadow-none hover:bg-[var(--brand-lavender)]"
              placement="footer"
            >
              На сайт партнёра
              <ExternalLink className="size-4" />
            </TrackedReferralLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="landing-page overflow-hidden">
      <MotionOrchestrator />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
