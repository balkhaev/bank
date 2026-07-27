import type { Metadata } from "next";

import { FunnelQuiz } from "@/components/funnel-quiz";
import { FunnelShell } from "@/components/funnel-shell";
import type { BusinessType } from "@/lib/funnel";

export const metadata: Metadata = {
  title: "Создать AI-пакет",
  description: "Три вопроса — и AI подготовит карточки, тексты, рекламные хуки и визуальные сценарии.",
  alternates: { canonical: "/start" },
};

const allowedSegments = new Set<BusinessType>(["marketplace", "services", "local", "b2b"]);

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ segment?: string }>;
}) {
  const { segment } = await searchParams;
  const initialSegment = allowedSegments.has(segment as BusinessType)
    ? (segment as BusinessType)
    : "marketplace";

  return (
    <FunnelShell step="AI‑пакет · 3 шага">
      <FunnelQuiz initialSegment={initialSegment} />
    </FunnelShell>
  );
}
