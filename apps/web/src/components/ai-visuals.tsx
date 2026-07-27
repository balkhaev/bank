import type { CSSProperties } from "react";
import {
  BriefcaseBusiness,
  Camera,
  Check,
  MapPin,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
  Store,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@bank/ui/lib/utils";
import type { BusinessType } from "@/lib/funnel";

const deliverables = [
  { label: "Карточки", value: 3, note: "направления" },
  { label: "Хуки", value: 3, note: "для рекламы" },
  { label: "Визуалы", value: 3, note: "сценария" },
  { label: "Текст", value: 1, note: "для каталога" },
] as const;

export function DeliverablesChart({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("rounded-[2rem] border border-white/8 bg-white/[0.04] text-white", compact ? "p-4" : "p-6 sm:p-7")}>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary-soft)]">состав AI-пакета</p>
          <h3 className={cn("editorial-serif mt-2 tracking-[-0.03em]", compact ? "text-2xl" : "text-3xl")}>Не один текст, а комплект.</h3>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white"><Sparkles className="size-4" /></span>
      </div>
      <div className={cn("grid gap-3", compact ? "mt-5" : "mt-7")}>
        {deliverables.map((item, index) => (
          <div className="grid grid-cols-[5.5rem_1fr_auto] items-center gap-3" key={item.label}>
            <span className="text-xs font-medium text-white/48">{item.label}</span>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <span
                className={cn(
                  "ai-output-bar block h-full origin-left rounded-full",
                  index === 0 ? "bg-[var(--brand-primary)]" : index === 1 ? "bg-[var(--brand-coral)]" : index === 2 ? "bg-[var(--brand-mint)]" : "bg-white",
                )}
                style={{ "--bar-scale": `${item.value / 3}` } as CSSProperties}
              />
            </div>
            <span className="min-w-16 text-right text-xs font-semibold">{item.value} <span className="font-normal text-white/38">{item.note}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FashionFigure({ coat = false }: { coat?: boolean }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-52">
      <span className="absolute left-1/2 top-[11%] size-[19%] -translate-x-1/2 rounded-full bg-[#bd927b]" />
      <span className={cn("absolute left-1/2 top-[26%] h-[65%] -translate-x-1/2 rounded-t-[42%]", coat ? "w-[56%] bg-[#a9998e]" : "w-[48%] bg-[#d5cbc3]")} />
      <span className="absolute left-[18%] top-[31%] h-[48%] w-[12%] -rotate-6 rounded-full bg-[#c4b3a8]" />
      <span className="absolute right-[18%] top-[31%] h-[48%] w-[12%] rotate-6 rounded-full bg-[#c4b3a8]" />
    </div>
  );
}

export function AiStudioCanvas({ className }: { className?: string }) {
  const tasks = ["Бренд и позиционирование", "Карточки товара", "Тексты для каталога", "Рекламные крючки", "Визуальные сценарии"];

  return (
    <div className={cn("ai-studio-canvas relative min-h-[690px] overflow-visible rounded-[2.2rem] border border-white/9 bg-[#15131f] p-5 text-white shadow-[0_70px_170px_-75px_rgba(0,0,0,.96)]", className)}>
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary-soft)]">AI-студия Делопуск</p>
          <p className="mt-2 text-lg font-semibold">AI-пакет для fashion-бренда</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.055] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-[var(--brand-mint)]"><span className="size-1.5 rounded-full bg-[var(--brand-mint)] shadow-[0_0_14px_rgba(188,239,210,.85)]" />AI работает</span>
      </div>

      <div className="relative mt-8 min-h-[565px]">
        <article className="absolute left-[2%] top-[7%] z-10 w-[58%] -rotate-[4deg] rounded-[1.7rem] border border-white/7 bg-[#211e2c] p-5 shadow-2xl">
          <div className="flex items-center justify-between"><p className="text-xs font-semibold">AI создаёт</p><span className="text-[9px] text-white/35">68%</span></div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/7"><span className="ai-output-bar block h-full w-[68%] rounded-full bg-[var(--brand-primary)]" style={{ "--bar-scale": ".68" } as CSSProperties} /></div>
          <div className="mt-6 grid gap-3">
            {tasks.map((task, index) => (
              <div className="flex items-center gap-3 rounded-xl bg-white/[0.035] px-3 py-3 text-[10px] text-white/55" key={task}>
                <span className={cn("flex size-5 items-center justify-center rounded-full border", index < 3 ? "border-[var(--brand-primary)] text-[var(--brand-primary-soft)]" : "border-white/15")}>{index < 3 ? "✓" : ""}</span>{task}
              </div>
            ))}
          </div>
        </article>

        <article className="absolute left-[31%] top-[3%] z-30 h-[430px] w-[40%] rotate-[3deg] overflow-hidden rounded-[1.65rem] border border-black/10 bg-[var(--brand-paper)] p-4 text-[var(--brand-ink)] shadow-[0_35px_70px_-28px_rgba(0,0,0,.72)]">
          <div className="flex items-center justify-between"><span className="rounded-full bg-white px-2.5 py-1.5 text-[8px] font-semibold">КАРТОЧКА 01</span><span className="text-[8px] text-[var(--brand-muted)]">1080 × 1350</span></div>
          <div className="mt-3 h-[210px] overflow-hidden rounded-xl bg-[#d8cbc1]"><FashionFigure coat /></div>
          <h3 className="editorial-serif mt-5 text-[2rem] leading-[.94]">Пальто<br />Lumière</h3>
          <p className="mt-4 text-sm font-semibold">12 990 ₽</p>
        </article>

        <article className="absolute right-0 top-0 z-20 h-[300px] w-[30%] rotate-[6deg] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#332a24] p-4 shadow-2xl">
          <p className="text-center text-[8px] font-medium uppercase tracking-[0.16em] text-[#d7b5a5]">Новая коллекция</p>
          <h3 className="editorial-serif mt-5 text-center text-3xl">LUMIÈRE</h3>
          <div className="mt-6 h-36 rounded-xl bg-[#7e675a]"><FashionFigure /></div>
          <button className="mt-4 w-full rounded-lg bg-[var(--brand-paper)] px-3 py-2 text-[9px] font-semibold text-[var(--brand-ink)]" type="button">Смотреть каталог</button>
        </article>

        <article className="absolute bottom-[3%] left-[12%] z-40 w-[42%] rounded-[1.4rem] border border-white/7 bg-[#201d2b]/95 p-4 shadow-2xl backdrop-blur-xl">
          <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[var(--brand-primary-soft)]">Крючок для рекламы</p>
          <p className="editorial-serif mt-3 text-xl leading-tight">Элегантность, которая работает на ваш образ.</p>
        </article>

        <article className="absolute bottom-[1%] right-[2%] z-40 w-[39%] rounded-[1.4rem] border border-white/7 bg-[#201d2b]/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between"><p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[var(--brand-mint)]">AI-сцены</p><Camera className="size-4 text-white/45" /></div>
          <div className="mt-4 grid grid-cols-3 gap-2">{["#4f454d", "#79665b", "#322d36"].map((tone) => <span className="h-16 rounded-lg" key={tone} style={{ backgroundColor: tone }} />)}</div>
        </article>
      </div>
    </div>
  );
}

const segmentVisuals: Record<BusinessType, { icon: LucideIcon; title: string; subtitle: string; modules: Array<[string, string]> }> = {
  marketplace: { icon: Store, title: "Карточка, которую хочется открыть", subtitle: "Товарный контент для каталога, рекламы и визуальной выдачи.", modules: [["SEO", "заголовок"], ["Visual", "3 сцены"], ["Ads", "3 хука"]] },
  services: { icon: WandSparkles, title: "Услуга, которую легко понять", subtitle: "Оффер, карточки результата и первое рекламное сообщение.", modules: [["Offer", "обещание"], ["Proof", "сценарии"], ["Ads", "3 хука"]] },
  local: { icon: MapPin, title: "Локальный бренд с понятным образом", subtitle: "Карточки для геосервисов, соцсетей и первого объявления.", modules: [["Map", "локальный"], ["Social", "3 поста"], ["Offer", "условия"]] },
  b2b: { icon: BriefcaseBusiness, title: "B2B-предложение без воды", subtitle: "Ценность, коммерческий текст и сценарий первого касания.", modules: [["Pitch", "1 экран"], ["Value", "3 тезиса"], ["Outreach", "сообщение"]] },
};

export function SegmentPreviewGraphic({ segment }: { segment: BusinessType }) {
  const config = segmentVisuals[segment];
  const Icon = config.icon;
  return (
    <div className="relative overflow-hidden rounded-[2.6rem] border border-white/8 bg-[var(--brand-panel)] p-6 text-white shadow-[0_48px_110px_-70px_rgba(0,0,0,.95)]">
      <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[var(--brand-primary)]/28 blur-3xl" />
      <div className="relative flex items-center justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)]"><Icon className="size-5" /></span><span className="rounded-full bg-[var(--brand-mint)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[var(--brand-ink)]">AI-пример</span></div>
      <div className="relative mt-12"><p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">готовая концепция</p><h2 className="editorial-serif mt-4 max-w-lg text-5xl leading-[.95]">{config.title}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/50">{config.subtitle}</p></div>
      <div className="relative mt-10 grid grid-cols-3 gap-2">{config.modules.map(([label, value]) => <div className="rounded-2xl bg-white/[0.055] p-4" key={label}><p className="text-[9px] uppercase tracking-[0.13em] text-[var(--brand-primary-soft)]">{label}</p><p className="mt-3 text-sm font-semibold">{value}</p></div>)}</div>
    </div>
  );
}
