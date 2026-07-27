import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { TrackedReferralLink } from "@/components/tracked-referral-link";

export const primaryLinkClassName =
  "brand-primary-action inline-flex h-[3.35rem] items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white shadow-[0_22px_58px_-26px_rgba(119,87,255,0.95)]";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-10 shrink-0 items-center justify-center rounded-[1.05rem] bg-white/[0.065] shadow-[0_14px_36px_-22px_rgba(0,0,0,0.75)] ring-1 ring-white/10 ${className}`}
    >
      <svg className="size-8" viewBox="0 0 40 40" fill="none">
        <circle className="brand-mark__origin" cx="7" cy="28" r="4" fill="var(--brand-mint)" />
        <path
          className="brand-mark__route"
          d="M10 28H20V18H31"
          stroke="var(--brand-violet-soft)"
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
  { href: "/#ai-power", label: "Возможности" },
  { href: "/#how", label: "Процесс" },
  { href: "/#segments", label: "Для кого" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-white/7 bg-[var(--brand-ink)] text-white">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Делопуск — главная">
          <BrandMark />
          <span>
            <span className="block text-sm font-bold tracking-[-0.025em]">Делопуск</span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-white/38">AI‑студия запуска</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/46 lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-white" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--brand-primary)] px-4 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-primary-strong)]" href="/start">
          Создать AI‑пакет <ArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/7 bg-[var(--brand-ink)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 text-sm text-white/42 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-white">
              <BrandMark className="size-9 rounded-[0.95rem]" />
              <div><span className="block font-bold">Делопуск</span><span className="block text-xs text-white/38">delopusk.ru</span></div>
            </div>
            <p className="mt-5 leading-6">
              Делопуск — независимая партнёрская информационная страница, не официальный сайт Т‑Банка. При переходе по ссылке и оформлении продукта владелец страницы может получить вознаграждение. Банковские услуги предоставляет АО «ТБанк», универсальная лицензия Банка России № 2673. Решение о государственной регистрации принимает ФНС.
            </p>
            <p className="mt-2 leading-6">Делопуск не принимает банковские заявки и не собирает паспортные данные.</p>
          </div>

          <div className="grid content-start gap-3 text-xs">
            <Link className="font-semibold text-white hover:text-[var(--brand-violet-soft)]" href="/start">Получить AI‑пакет</Link>
            <Link className="font-semibold text-white hover:text-[var(--brand-violet-soft)]" href="/ip">Открыть ИП</Link>
            <TrackedReferralLink className="mt-2 h-11 rounded-xl border border-white/12 bg-white/[0.04] px-5 text-xs text-white shadow-none hover:bg-white/[0.08]" placement="footer">
              На сайт партнёра <ExternalLink className="size-4" />
            </TrackedReferralLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="landing-page overflow-hidden">
      <MotionOrchestrator />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
