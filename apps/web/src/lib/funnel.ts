export type BusinessType = "marketplace" | "services" | "local" | "b2b";
export type Tone = "confident" | "friendly" | "premium";
export type CardTheme = "sun" | "ink" | "paper";

export type GeneratedCard = {
  bullets: [string, string, string];
  cta: string;
  subtitle: string;
  theme: CardTheme;
  title: string;
};

export type FunnelPack = {
  adHooks: [string, string, string];
  cards: [GeneratedCard, GeneratedCard, GeneratedCard];
  checklist: [string, string, string, string, string];
  listingDescription: string;
  listingTitle: string;
  positioning: string;
  projectName: string;
  visualBriefs: [string, string, string];
};

export type FunnelResult = {
  audience: string;
  businessType: BusinessType;
  mode: "ai" | "template";
  pack: FunnelPack;
  subject: string;
  tone: Tone;
};

export const businessOptions: Array<{
  description: string;
  label: string;
  value: BusinessType;
}> = [
  { value: "marketplace", label: "Маркетплейс", description: "Товар, одежда или собственный бренд" },
  { value: "services", label: "Услуги", description: "Эксперт, мастер или агентство" },
  { value: "local", label: "Локальный бизнес", description: "Студия, точка или мастерская" },
  { value: "b2b", label: "B2B", description: "Продукт или сервис для компаний" },
];

export const tones: Array<{ label: string; value: Tone }> = [
  { label: "Уверенно", value: "confident" },
  { label: "Дружелюбно", value: "friendly" },
  { label: "Премиально", value: "premium" },
];
