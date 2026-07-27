import type { Metadata } from "next";

import { FunnelResultView } from "@/components/funnel-result";
import { FunnelShell } from "@/components/funnel-shell";

export const metadata: Metadata = {
  title: "Ваш AI-пакет",
  description: "Карточки, тексты, рекламные хуки и визуальные сценарии, созданные Делопуском.",
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  return (
    <FunnelShell step="AI‑результат">
      <FunnelResultView />
    </FunnelShell>
  );
}
