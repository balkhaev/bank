"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Gift } from "lucide-react";

import { claimAppliedBonus } from "@/lib/access";

export function AppliedBonusButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [claimed, setClaimed] = useState(false);

  const claim = () => {
    const state = claimAppliedBonus();
    setClaimed(true);
    window.dataLayer?.push({
      event: "ai_bonus_applied_claimed",
      remaining_actions: state.remaining,
    });
    window.setTimeout(() => router.push("/start?bonus=applied"), 500);
  };

  return (
    <button
      className={`inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-[var(--brand-mint)] px-6 text-sm font-semibold text-[var(--brand-ink)] transition hover:-translate-y-0.5 hover:brightness-[0.98] ${className}`}
      onClick={claim}
      type="button"
    >
      {claimed ? <Check className="size-4" /> : <Gift className="size-4" />}
      {claimed ? "Бонус открыт" : "Заявка отправлена — открыть +12"}
    </button>
  );
}
