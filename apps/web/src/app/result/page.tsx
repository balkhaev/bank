import type { Metadata } from "next";

import { FunnelResultView } from "@/components/funnel-result";
import { FunnelShell } from "@/components/funnel-shell";

export const metadata: Metadata = {
  title: "Ваш старт-пакет",
  description: "Персональный результат Делопуска и следующий шаг к официальной регистрации ИП.",
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  return (
    <FunnelShell step="Ваш результат">
      <FunnelResultView />
    </FunnelShell>
  );
}
