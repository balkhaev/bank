import Link from "next/link";
import type { ReactNode } from "react";

import { BrandMark } from "@/components/site-shell";
import { MotionOrchestrator } from "@/components/motion-orchestrator";

export function FunnelShell({ children, step }: { children: ReactNode; step?: string }) {
  return (
    <main className="landing-page min-h-screen overflow-hidden bg-[var(--brand-ink)]">
      <MotionOrchestrator />
      <header className="border-b border-white/[0.055] bg-[var(--brand-ink)] text-white">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link className="flex items-center gap-3" href="/" aria-label="Делопуск — главная">
            <BrandMark />
            <span>
              <span className="block text-sm font-semibold tracking-[-0.02em]">Делопуск</span>
              <span className="mt-0.5 block text-[8px] font-medium uppercase tracking-[0.14em] text-white/38">AI-студия запуска</span>
            </span>
          </Link>
          {step && <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/52">{step}</span>}
        </div>
      </header>
      <div className="bg-[var(--brand-paper)]">{children}</div>
      <footer className="border-t border-white/[0.055] bg-[var(--brand-ink)] px-5 py-8 text-center text-[10px] leading-5 text-white/35 sm:px-8">
        Маркетинговые материалы — AI-черновики. Паспортные данные вводятся только на официальном сайте партнёра.
      </footer>
    </main>
  );
}
