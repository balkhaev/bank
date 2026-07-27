import Link from "next/link";
import type { ReactNode } from "react";

import { BrandMark } from "@/components/site-shell";
import { MotionOrchestrator } from "@/components/motion-orchestrator";

export function FunnelShell({ children, step }: { children: ReactNode; step?: string }) {
  return (
    <main className="landing-page min-h-screen overflow-hidden bg-[var(--brand-ink)] text-white">
      <MotionOrchestrator />
      <header className="border-b border-white/7 bg-[var(--brand-ink)]">
        <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-3" href="/" aria-label="Делопуск — главная">
            <BrandMark />
            <span>
              <span className="block text-sm font-bold tracking-[-0.025em]">Делопуск</span>
              <span className="block text-[9px] font-medium uppercase tracking-[0.14em] text-white/38">
                AI‑студия запуска
              </span>
            </span>
          </Link>
          {step && (
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-white/52">
              {step}
            </span>
          )}
        </div>
      </header>
      {children}
      <footer className="border-t border-white/7 bg-[var(--brand-ink)] px-4 py-7 text-center text-xs leading-5 text-white/32 sm:px-6">
        Маркетинговые материалы — AI‑черновики. Паспортные данные вводятся только на официальном сайте партнёра.
      </footer>
    </main>
  );
}
