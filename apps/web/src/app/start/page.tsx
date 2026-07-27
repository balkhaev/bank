import type { Metadata } from "next";

import { FunnelQuiz } from "@/components/funnel-quiz";
import { FunnelShell } from "@/components/funnel-shell";
import type { BusinessType } from "@/lib/funnel";

export const metadata: Metadata = {
  title: "Получить старт-пакет",
  description: "Три вопроса — и персональный старт-пакет для запуска бизнеса готов.",
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
    <FunnelShell step="Старт-пакет · 3 шага">
      <FunnelQuiz initialSegment={initialSegment} />
    </FunnelShell>
  );
}
