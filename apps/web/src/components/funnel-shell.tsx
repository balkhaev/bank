import Link from "next/link";
import type { ReactNode } from "react";

import { BrandMark } from "@/components/site-shell";
import { MotionOrchestrator } from "@/components/motion-orchestrator";

export function FunnelShell({ children, step }: { children: ReactNode; step?: string }) {
  return (
    <main className="landing-page min-h-screen overflow-hidden">
      <MotionOrchestrator />
      <header className="border-b border-[var(--brand-ink)]/6 bg-[var(--brand-paper)]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-3" href="/" aria-label="Делопуск — главная">
            <BrandMark />
            <span>
              <span className="block text-sm font-bold tracking-[-0.025em]">Делопуск</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--brand-muted)]">
                запуск бизнеса
              </span>
            </span>
          </Link>
          {step && (
            <span className="rounded-full border border-[var(--brand-ink)]/8 bg-white/70 px-3.5 py-2 text-xs font-semibold text-[var(--brand-muted)]">
              {step}
            </span>
          )}
        </div>
      </header>
      {children}
      <footer className="border-t border-[var(--brand-ink)]/6 px-4 py-7 text-center text-xs leading-5 text-[var(--brand-muted)] sm:px-6">
        Делопуск не является банком и не принимает паспортные данные. Официальная заявка открывается отдельно на сайте партнёра.
      </footer>
    </main>
  );
}
