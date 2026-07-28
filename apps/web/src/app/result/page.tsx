import type { Metadata } from "next";

import { FunnelResultView } from "@/components/funnel-result";
import { FunnelShell } from "@/components/funnel-shell";

export const metadata: Metadata = {
  title: "Ваш AI-пакет",
  description: "Карточки, тексты, рекламные хуки и визуальные сценарии, созданные Делопуском.",
  robots: { index: false, follow: false },
};

const migrateSavedResult = `
  try {
    const key = "delopusk-funnel-result";
    const raw = window.localStorage.getItem(key);
    if (raw) {
      const saved = JSON.parse(raw);
      const pack = saved && saved.pack;
      const compatible = Boolean(
        pack &&
        pack.projectName &&
        pack.listingTitle &&
        pack.listingDescription &&
        Array.isArray(pack.visualBriefs) &&
        Array.isArray(pack.adHooks)
      );
      if (!compatible) window.localStorage.removeItem(key);
    }
  } catch {
    window.localStorage.removeItem("delopusk-funnel-result");
  }
`;

export default function ResultPage() {
  return (
    <FunnelShell step="AI‑результат">
      <script dangerouslySetInnerHTML={{ __html: migrateSavedResult }} />
      <FunnelResultView />
    </FunnelShell>
  );
}
