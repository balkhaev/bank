import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  FileText,
  Image as ImageIcon,
  MapPin,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
  Store,
  WandSparkles,
} from "lucide-react";

import { cn } from "@bank/ui/lib/utils";

import type { BusinessType } from "@/lib/funnel";

const deliverables = [
  { label: "Карточки", value: 3, note: "три направления" },
  { label: "Хуки", value: 3, note: "для рекламы" },
  { label: "Визуалы", value: 3, note: "сценария" },
  { label: "Текст", value: 1, note: "для каталога" },
] as const;

export function DeliverablesChart({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white/80", compact ? "p-4" : "p-6 sm:p-7")}>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">состав AI‑пакета</p>
          <h3 className={cn("mt-2 font-bold tracking-[-0.045em]", compact ? "text-lg" : "text-2xl")}>Не один текст, а комплект.</h3>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-[var(--brand-primary)]">
          <Sparkles className="size-4" />
        </span>
      </div>

      <div className={cn("grid gap-3", compact ? "mt-5" : "mt-7")}>
        {deliverables.map((item, index) => (
          <div className="grid grid-cols-[5.5rem_1fr_auto] items-center gap-3" key={item.label}>
            <span className="text-xs font-semibold text-[var(--brand-muted)]">{item.label}</span>
            <div className="h-2.5 overflow-hidden rounded-full bg-[var(--brand-ink)]/7">
              <span
                className={cn(
                  "ai-output-bar block h-full origin-left rounded-full",
                  index === 0
                    ? "bg-[var(--brand-primary)]"
                    : index === 1
                      ? "bg-[var(--brand-coral)]"
                      : index === 2
                        ? "bg-[var(--brand-mint)]"
                        : "bg-[var(--brand-ink)]",
                )}
                style={{ "--bar-scale": `${item.value / 3}` } as React.CSSProperties}
              />
            </div>
            <span className="min-w-16 text-right text-xs font-bold">
              {item.value} <span className="font-medium text-[var(--brand-muted)]">{item.note}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductSilhouette() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 300 340" fill="none">
      <defs>
        <linearGradient id="dressFill" x1="88" y1="56" x2="227" y2="309" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF795D" />
          <stop offset="1" stopColor="#FF5C3C" />
        </linearGradient>
        <linearGradient id="dressGlow" x1="150" y1="0" x2="150" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.38" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="170" r="126" fill="#EEEAFE" />
      <circle cx="150" cy="170" r="100" stroke="#4E46C8" strokeOpacity="0.12" strokeWidth="2" />
      <path d="M122 72C122 56 134 44 150 44C166 44 178 56 178 72V88L213 111L196 143L181 132L216 287C218 296 211 304 202 304H98C89 304 82 296 84 287L119 132L104 143L87 111L122 88V72Z" fill="url(#dressFill)" />
      <path d="M132 72C132 62 140 54 150 54C160 54 168 62 168 72V95H132V72Z" fill="#F7F4EE" />
      <path d="M126 104C142 119 158 119 174 104" stroke="#F7F4EE" strokeWidth="7" strokeLinecap="round" />
      <path d="M120 130C135 151 165 151 180 130" stroke="#F7F4EE" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
      <path d="M150 105V282" stroke="url(#dressGlow)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="244" cy="90" r="28" fill="#C9F3DB" />
      <path d="M232 90L241 99L257 80" stroke="#151623" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AiStudioCanvas({ className }: { className?: string }) {
  return (
    <div className={cn("ai-studio-canvas relative overflow-hidden rounded-[2.7rem] bg-[var(--brand-ink)] p-4 text-white shadow-[0_55px_130px_-70px_rgba(21,22,35,0.95)] sm:p-5", className)}>
      <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[var(--brand-primary)]/30 blur-3xl" />
      <div className="relative flex items-center justify-between gap-4 border-b border-white/8 pb-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">AI‑рабочая сессия</p>
          <p className="mt-1 text-sm font-bold">Льняное платье · новый бренд</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-mint)]">
          <span className="size-1.5 rounded-full bg-[var(--brand-mint)] shadow-[0_0_14px_rgba(201,243,219,0.8)]" /> AI работает
        </span>
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#eeeafe] p-5 text-[var(--brand-ink)]">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em]">Карточка 01</span>
            <span className="text-[9px] font-semibold text-[var(--brand-muted)]">1080 × 1350</span>
          </div>
          <div className="mx-auto mt-2 h-52 max-w-[15rem]"><ProductSilhouette /></div>
          <p className="mt-1 text-[2.15rem] font-bold leading-[0.88] tracking-[-0.07em]">Свобода движения.</p>
          <p className="mt-2 text-sm font-semibold text-[var(--brand-muted)]">Натуральный лён и свободный крой.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-[9px] font-bold uppercase tracking-[0.1em]">
            <span className="rounded-full bg-white px-3 py-2">дышащая ткань</span>
            <span className="rounded-full bg-white px-3 py-2">мягкий силуэт</span>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            { icon: Search, label: "AI‑редактор", title: "Заголовок и описание", detail: "готово", tone: "bg-white/[0.07]" },
            { icon: Camera, label: "Visual Lab", title: "3 сценария изображения", detail: "готово", tone: "bg-[var(--brand-primary)]" },
            { icon: ScanFace, label: "Примерка", title: "Модельный образ", detail: "beta", tone: "bg-[var(--brand-coral)]" },
          ].map((module, index) => {
            const Icon = module.icon;
            return (
              <article className={cn("ai-module-card min-h-28 rounded-[1.6rem] p-4", module.tone)} key={module.label} style={{ "--module-delay": `${index * 120}ms` } as React.CSSProperties}>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[var(--brand-ink)]"><Icon className="size-4" /></span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/45">{module.detail}</span>
                </div>
                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/45">{module.label}</p>
                <p className="mt-1 text-sm font-bold leading-tight">{module.title}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="relative mt-3 grid grid-cols-4 gap-2">
        {[
          ["Название", "готово"],
          ["3 карточки", "готово"],
          ["Текст", "готово"],
          ["Визуалы", "3 идеи"],
        ].map(([label, value]) => (
          <div className="rounded-xl bg-white/[0.055] px-3 py-3" key={label}>
            <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/35">{label}</p>
            <p className="mt-1 text-[10px] font-bold text-white/85">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const segmentVisuals: Record<BusinessType, {
  icon: typeof Store;
  title: string;
  subtitle: string;
  modules: Array<[string, string]>;
}> = {
  marketplace: {
    icon: Store,
    title: "Карточка, которую хочется открыть",
    subtitle: "Товарный контент для каталога, рекламы и визуальной выдачи.",
    modules: [["SEO", "заголовок"], ["Visual", "3 сцены"], ["Ads", "3 хука"]],
  },
  services: {
    icon: WandSparkles,
    title: "Услуга, которую легко понять",
    subtitle: "Оффер, карточки результата и первое рекламное сообщение.",
    modules: [["Offer", "обещание"], ["Proof", "сценарии"], ["Ads", "3 хука"]],
  },
  local: {
    icon: MapPin,
    title: "Локальный бренд с понятным образом",
    subtitle: "Карточки для геосервисов, соцсетей и первого объявления.",
    modules: [["Map", "локальный"], ["Social", "3 поста"], ["Offer", "условия"]],
  },
  b2b: {
    icon: BriefcaseBusiness,
    title: "B2B‑предложение без воды",
    subtitle: "Ценность, коммерческий текст и сценарий первого касания.",
    modules: [["Pitch", "1 экран"], ["Value", "3 тезиса"], ["Outreach", "сообщение"]],
  },
};

export function SegmentPreviewGraphic({ segment }: { segment: BusinessType }) {
  const config = segmentVisuals[segment];
  const Icon = config.icon;

  return (
    <div className="relative overflow-hidden rounded-[2.6rem] bg-[var(--brand-ink)] p-5 text-white shadow-[0_48px_110px_-70px_rgba(21,22,35,0.95)] sm:p-6">
      <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[var(--brand-primary)]/28 blur-3xl" />
      <div className="relative flex items-center justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)]"><Icon className="size-5" /></span>
        <span className="rounded-full bg-[var(--brand-mint)] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[var(--brand-ink)]">AI‑пример</span>
      </div>
      <div className="relative mt-12">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">готовая концепция</p>
        <h2 className="mt-4 max-w-lg text-4xl font-bold leading-[0.94] tracking-[-0.06em]">{config.title}</h2>
        <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">{config.subtitle}</p>
      </div>
      <div className="relative mt-10 grid grid-cols-3 gap-2">
        {config.modules.map(([label, value], index) => (
          <article className={cn("rounded-[1.35rem] p-4", index === 0 ? "bg-[var(--brand-lavender)] text-[var(--brand-ink)]" : index === 1 ? "bg-[var(--brand-primary)]" : "bg-[var(--brand-coral)]")} key={label}>
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-55">{label}</p>
            <p className="mt-7 text-sm font-bold">{value}</p>
          </article>
        ))}
      </div>
      <div className="relative mt-3 flex items-center justify-between rounded-[1.4rem] bg-white/[0.06] px-4 py-4">
        <span className="text-xs font-semibold text-white/60">3 вопроса → персональный пакет</span>
        <ArrowRight className="size-4 text-[var(--brand-mint)]" />
      </div>
    </div>
  );
}

export function IpHandoffGraphic() {
  return (
    <div className="overflow-hidden rounded-[2.6rem] bg-[var(--brand-ink)] p-6 text-white sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">перед переходом</p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.045em]">Ваш AI‑пакет сохранён</h2>
        </div>
        <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--brand-mint)] text-[var(--brand-ink)]"><Check className="size-5" /></span>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-[1.7rem] bg-white/[0.06] p-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">Делопуск</p>
          <div className="mt-5 grid gap-3">
            {[[WandSparkles, "Название и оффер"], [ImageIcon, "Карточки и визуалы"], [Megaphone, "Рекламные хуки"]].map(([GraphicIcon, label]) => (
              <div className="flex items-center gap-3" key={String(label)}><GraphicIcon className="size-4 text-[var(--brand-mint)]" /><span className="text-xs font-semibold">{String(label)}</span></div>
            ))}
          </div>
        </div>
        <div className="hidden size-10 items-center justify-center rounded-full bg-[var(--brand-primary)] sm:flex"><ArrowRight className="size-4" /></div>
        <div className="rounded-[1.7rem] bg-[var(--brand-coral)] p-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/55">официальный партнёр</p>
          <FileText className="mt-5 size-7" />
          <p className="mt-4 text-lg font-bold">Заявка на регистрацию ИП</p>
          <p className="mt-2 text-xs leading-5 text-white/65">Паспортные данные вводятся только на защищённой странице партнёра.</p>
        </div>
      </div>
    </div>
  );
}
