"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clipboard,
  Download,
  LoaderCircle,
  RotateCcw,
  Sparkles,
  Store,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import { Button } from "@bank/ui/components/button";
import { cn } from "@bank/ui/lib/utils";

import { TrackedReferralLink } from "@/components/tracked-referral-link";

type BusinessType = "marketplace" | "services" | "local" | "b2b";
type Tone = "confident" | "friendly" | "premium";
type CardTheme = "sun" | "ink" | "paper";

type GeneratedCard = {
  bullets: [string, string, string];
  cta: string;
  subtitle: string;
  theme: CardTheme;
  title: string;
};

type LaunchPack = {
  cards: [GeneratedCard, GeneratedCard, GeneratedCard];
  checklist: [string, string, string, string, string];
  positioning: string;
  projectName: string;
};

type ApiResponse = {
  error?: string;
  mode?: "ai" | "template";
  pack?: LaunchPack;
};

type BusinessOption = {
  description: string;
  icon: LucideIcon;
  label: string;
  placeholder: string;
  value: BusinessType;
};

const businessOptions: BusinessOption[] = [
  {
    description: "Товар, бренд или линейка",
    icon: Store,
    label: "Маркетплейс",
    placeholder: "Например: органайзер для путешествий",
    value: "marketplace",
  },
  {
    description: "Экспертная или бытовая услуга",
    icon: Wrench,
    label: "Услуги",
    placeholder: "Например: ремонт квартир под ключ",
    value: "services",
  },
  {
    description: "Точка, студия или мастерская",
    icon: Building2,
    label: "Локальный бизнес",
    placeholder: "Например: кофейня рядом с офисами",
    value: "local",
  },
  {
    description: "Продукт или сервис для компаний",
    icon: BriefcaseBusiness,
    label: "B2B",
    placeholder: "Например: бухгалтерия для селлеров",
    value: "b2b",
  },
];

const tones: Array<{ label: string; value: Tone }> = [
  { label: "Уверенно", value: "confident" },
  { label: "Дружелюбно", value: "friendly" },
  { label: "Премиально", value: "premium" },
];

const samplePack: LaunchPack = {
  cards: [
    {
      bullets: ["Порядок в чемодане", "Всё видно сразу", "Легко взять с собой"],
      cta: "Собрать комплект",
      subtitle: "Три размера для одежды, обуви и мелочей",
      theme: "sun",
      title: "Путешествуйте без хаоса",
    },
    {
      bullets: ["Экономит место", "Защищает вещи", "Ускоряет сборы"],
      cta: "Посмотреть набор",
      subtitle: "Понятная карточка для каталога и рекламы",
      theme: "ink",
      title: "Каждая вещь — на месте",
    },
    {
      bullets: ["3 размера", "Прочная молния", "Можно стирать"],
      cta: "Выбрать цвет",
      subtitle: "Ключевые преимущества считываются за несколько секунд",
      theme: "paper",
      title: "Готовый набор в дорогу",
    },
  ],
  checklist: [
    "Определить один главный продукт",
    "Сформулировать пользу для клиента",
    "Подготовить первые фотографии",
    "Рассчитать стартовую цену",
    "Открыть ИП для официальных продаж",
  ],
  positioning:
    "Органайзеры для путешественников, которым важны порядок, скорость сборов и компактность.",
  projectName: "Порядок в пути",
};

const cardStyles: Record<
  CardTheme,
  {
    accent: string;
    background: string;
    border: string;
    button: string;
    muted: string;
    text: string;
  }
> = {
  sun: {
    accent: "bg-[var(--brand-ink)] text-white",
    background: "bg-[var(--brand-coral)]",
    border: "border-[var(--brand-ink)]/8",
    button: "bg-[var(--brand-ink)] text-white",
    muted: "text-white/70",
    text: "text-white",
  },
  ink: {
    accent: "bg-[var(--brand-mint)] text-[var(--brand-ink)]",
    background: "bg-[var(--brand-primary)]",
    border: "border-white/12",
    button: "bg-white text-[var(--brand-primary)]",
    muted: "text-white/65",
    text: "text-white",
  },
  paper: {
    accent: "bg-[var(--brand-primary)] text-white",
    background: "bg-[var(--brand-mint)]",
    border: "border-[var(--brand-ink)]/8",
    button: "bg-[var(--brand-primary)] text-white",
    muted: "text-[var(--brand-ink)]/55",
    text: "text-[var(--brand-ink)]",
  },
};

const svgPalettes: Record<
  CardTheme,
  { accent: string; background: string; button: string; buttonText: string; muted: string; text: string }
> = {
  sun: {
    accent: "#151623",
    background: "#ff6b4a",
    button: "#151623",
    buttonText: "#ffffff",
    muted: "#ffe7df",
    text: "#ffffff",
  },
  ink: {
    accent: "#c9f3db",
    background: "#4e46c8",
    button: "#ffffff",
    buttonText: "#4e46c8",
    muted: "#d9d6ff",
    text: "#ffffff",
  },
  paper: {
    accent: "#4e46c8",
    background: "#c9f3db",
    button: "#4e46c8",
    buttonText: "#ffffff",
    muted: "#557062",
    text: "#151623",
  },
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapText(value: string, maxLength: number) {
  const words = value.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, 3);
}

function safeFilename(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function buildCardSvg(card: GeneratedCard, projectName: string) {
  const palette = svgPalettes[card.theme];
  const titleLines = wrapText(card.title, 20);
  const subtitleLines = wrapText(card.subtitle, 42);
  const titleSvg = titleLines
    .map(
      (line, index) =>
        `<text x="80" y="${285 + index * 88}" fill="${palette.text}" font-family="Arial, sans-serif" font-size="76" font-weight="700">${escapeXml(line)}</text>`,
    )
    .join("");
  const subtitleStart = 340 + titleLines.length * 88;
  const subtitleSvg = subtitleLines
    .map(
      (line, index) =>
        `<text x="80" y="${subtitleStart + index * 48}" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="34">${escapeXml(line)}</text>`,
    )
    .join("");
  const bulletsStart = subtitleStart + subtitleLines.length * 48 + 90;
  const bulletSvg = card.bullets
    .map(
      (bullet, index) => `
        <circle cx="98" cy="${bulletsStart + index * 82 - 11}" r="18" fill="${palette.accent}" />
        <path d="M89 ${bulletsStart + index * 82 - 11}l7 7 13-15" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <text x="140" y="${bulletsStart + index * 82}" fill="${palette.text}" font-family="Arial, sans-serif" font-size="34" font-weight="600">${escapeXml(bullet)}</text>
      `,
    )
    .join("");

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
      <rect width="1080" height="1350" rx="72" fill="${palette.background}" />
      <circle cx="995" cy="85" r="150" fill="none" stroke="${palette.text}" stroke-opacity="0.08" stroke-width="40" />
      <rect x="80" y="74" width="${Math.min(450, 170 + projectName.length * 13)}" height="62" rx="31" fill="${palette.accent}" />
      <text x="112" y="116" fill="#ffffff" font-family="Arial, sans-serif" font-size="26" font-weight="700">${escapeXml(projectName)}</text>
      ${titleSvg}
      ${subtitleSvg}
      ${bulletSvg}
      <rect x="80" y="1160" width="920" height="112" rx="38" fill="${palette.button}" />
      <text x="540" y="1230" text-anchor="middle" fill="${palette.buttonText}" font-family="Arial, sans-serif" font-size="34" font-weight="700">${escapeXml(card.cta)}</text>
    </svg>
  `;
}

function GeneratedPromoCard({
  card,
  index,
  isPreview,
  onDownload,
  projectName,
}: {
  card: GeneratedCard;
  index: number;
  isPreview: boolean;
  onDownload: () => void;
  projectName: string;
}) {
  const styles = cardStyles[card.theme];

  return (
    <article
      className={cn(
        "group relative flex aspect-[4/5] min-h-[22rem] flex-col overflow-hidden rounded-[2rem] border p-5 shadow-[0_28px_80px_-55px_rgba(24,22,70,0.75)] transition duration-300 hover:-translate-y-1 sm:p-6",
        styles.background,
        styles.border,
        styles.text,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full border-[34px] border-current opacity-[0.07]" />
      <div className="relative flex items-center justify-between gap-3">
        <span
          className={cn(
            "max-w-[75%] truncate rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em]",
            styles.accent,
          )}
        >
          {projectName}
        </span>
        <span className={cn("text-xs font-semibold", styles.muted)}>0{index + 1}</span>
      </div>

      <div className="relative mt-12">
        <h3 className="text-balance text-3xl font-bold leading-[0.95] tracking-[-0.055em]">
          {card.title}
        </h3>
        <p className={cn("mt-4 text-sm leading-6", styles.muted)}>{card.subtitle}</p>
      </div>

      <ul className="relative mt-7 grid gap-3 text-sm font-semibold">
        {card.bullets.map((bullet) => (
          <li className="flex items-center gap-2.5" key={bullet}>
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full",
                styles.accent,
              )}
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-7">
        <div
          className={cn(
            "flex h-12 items-center justify-between rounded-2xl px-4 text-sm font-semibold",
            styles.button,
          )}
        >
          {card.cta}
          <ArrowRight className="size-4" />
        </div>
      </div>

      {!isPreview && (
        <button
          aria-label={`Скачать карточку ${index + 1}`}
          className="absolute right-3 top-3 flex size-10 translate-y-1 items-center justify-center rounded-xl border border-black/10 bg-white text-black opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
          onClick={onDownload}
          type="button"
        >
          <Download className="size-4" />
        </button>
      )}
    </article>
  );
}

export function AiStartPack() {
  const [businessType, setBusinessType] = useState<BusinessType>("marketplace");
  const [subject, setSubject] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState<Tone>("confident");
  const [result, setResult] = useState<LaunchPack | null>(null);
  const [mode, setMode] = useState<"ai" | "template" | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedBusiness = useMemo(
    () => businessOptions.find((option) => option.value === businessType) ?? businessOptions[0]!,
    [businessType],
  );

  const visiblePack = result ?? samplePack;
  const canGenerate = subject.trim().length >= 3 && audience.trim().length >= 2;

  useEffect(() => {
    const saved = window.localStorage.getItem("delopusk-launch-pack");
    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved) as { mode?: "ai" | "template"; pack?: LaunchPack };
      if (parsed.pack) {
        setResult(parsed.pack);
        setMode(parsed.mode ?? "template");
      }
    } catch {
      window.localStorage.removeItem("delopusk-launch-pack");
    }
  }, []);

  useEffect(() => {
    if (!result || !mode) {
      return;
    }

    window.localStorage.setItem("delopusk-launch-pack", JSON.stringify({ mode, pack: result }));
  }, [mode, result]);

  const generatePack = async () => {
    if (!canGenerate) {
      setError("Коротко опишите продукт и аудиторию — этого достаточно.");
      return;
    }

    setError("");
    setIsLoading(true);
    setCopied(false);

    try {
      const response = await fetch("/api/start-pack", {
        body: JSON.stringify({ audience, businessType, subject, tone }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = (await response.json()) as ApiResponse;

      if (!response.ok || !payload.pack || !payload.mode) {
        throw new Error(payload.error || "Не получилось собрать пакет. Попробуйте ещё раз.");
      }

      setResult(payload.pack);
      setMode(payload.mode);
      window.dataLayer?.push({
        business_type: businessType,
        event: "start_pack_generated",
        generation_mode: payload.mode,
      });
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Не получилось собрать пакет.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetPack = () => {
    setResult(null);
    setMode(null);
    setError("");
    setCopied(false);
    window.localStorage.removeItem("delopusk-launch-pack");
  };

  const copyPack = async () => {
    const text = [
      visiblePack.projectName,
      visiblePack.positioning,
      "",
      ...visiblePack.cards.flatMap((card, index) => [
        `Карточка ${index + 1}: ${card.title}`,
        card.subtitle,
        ...card.bullets.map((bullet) => `— ${bullet}`),
        `CTA: ${card.cta}`,
        "",
      ]),
      "План первой недели:",
      ...visiblePack.checklist.map((item, index) => `${index + 1}. ${item}`),
    ].join("\n");

    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const downloadCard = (card: GeneratedCard, index: number) => {
    const svg = buildCardSvg(card, visiblePack.projectName);
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${safeFilename(visiblePack.projectName) || "delopusk-card"}-${index + 1}.svg`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);

    window.dataLayer?.push({ event: "start_pack_card_download", card_index: index + 1 });
  };

  return (
    <section
      className="relative overflow-hidden bg-[var(--brand-lavender)] py-20 text-[var(--brand-ink)] sm:py-28"
      id="ai-pack"
    >
      <div className="brand-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-12 size-[34rem] rounded-full bg-[var(--brand-coral)]/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/65 px-3.5 py-1.5 text-xs font-semibold">
              <Sparkles className="size-3.5 text-[var(--brand-coral)]" />
              Старт-пакет Делопуска
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-6xl">
              Соберите первые материалы до оформления ИП
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-[var(--brand-muted)] sm:text-lg">
              Опишите бизнес двумя фразами. Делопуск подготовит позиционирование, три карточки и план первой недели. Без контактов и банковской анкеты.
            </p>

            <div className="mt-8 rounded-[2rem] bg-[var(--brand-ink)] p-5 text-white shadow-[0_35px_90px_-60px_rgba(21,22,35,0.9)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Формат бизнеса
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {businessOptions.map((option, index) => {
                  const Icon = option.icon;
                  const isActive = option.value === businessType;
                  return (
                    <button
                      className={cn(
                        "rounded-2xl border p-4 text-left transition",
                        isActive
                          ? index % 2 === 0
                            ? "border-[var(--brand-coral)] bg-[var(--brand-coral)] text-white"
                            : "border-[var(--brand-mint)] bg-[var(--brand-mint)] text-[var(--brand-ink)]"
                          : "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.07]",
                      )}
                      key={option.value}
                      onClick={() => setBusinessType(option.value)}
                      type="button"
                    >
                      <Icon className="size-5" />
                      <span className="mt-3 block text-sm font-semibold">{option.label}</span>
                      <span
                        className={cn(
                          "mt-1 block text-xs leading-5",
                          isActive ? "opacity-65" : "text-white/40",
                        )}
                      >
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-medium" htmlFor="start-pack-subject">
                  Что вы продаёте или делаете?
                  <input
                    className="h-13 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[var(--brand-coral)] focus:ring-4 focus:ring-[var(--brand-coral)]/10"
                    id="start-pack-subject"
                    maxLength={120}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)}
                    placeholder={selectedBusiness.placeholder}
                    value={subject}
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium" htmlFor="start-pack-audience">
                  Для кого?
                  <input
                    className="h-13 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[var(--brand-mint)] focus:ring-4 focus:ring-[var(--brand-mint)]/10"
                    id="start-pack-audience"
                    maxLength={100}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setAudience(event.target.value)}
                    placeholder="Например: молодые семьи, селлеры, владельцы квартир"
                    value={audience}
                  />
                </label>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium">Стиль подачи</p>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {tones.map((toneOption) => (
                    <button
                      className={cn(
                        "h-10 rounded-xl border px-2 text-xs font-semibold transition sm:text-sm",
                        toneOption.value === tone
                          ? "border-white bg-white text-[var(--brand-ink)]"
                          : "border-white/10 bg-white/[0.04] text-white/55 hover:text-white",
                      )}
                      key={toneOption.value}
                      onClick={() => setTone(toneOption.value)}
                      type="button"
                    >
                      {toneOption.label}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p
                  className="mt-4 rounded-xl border border-red-300/25 bg-red-300/10 px-3.5 py-3 text-sm text-red-100"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <Button
                className="mt-5 h-13 w-full rounded-2xl bg-[var(--brand-coral)] text-sm font-semibold text-white hover:bg-[var(--brand-coral-strong)]"
                disabled={isLoading}
                onClick={generatePack}
                type="button"
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Собираем пакет…
                  </>
                ) : (
                  <>
                    <Sparkles className="size-4" />
                    Создать старт-пакет
                  </>
                )}
              </Button>
              <p className="mt-3 text-center text-xs leading-5 text-white/35">
                Без e-mail, телефона и паспортных данных. Не вводите персональную информацию.
              </p>
            </div>
          </div>

          <div aria-live="polite" className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[var(--brand-ink)]/8 bg-white/65 px-3 py-1 text-xs font-semibold text-[var(--brand-muted)]">
                    {result ? (mode === "ai" ? "Создано AI" : "Умный шаблон") : "Пример результата"}
                  </span>
                  {result && (
                    <span className="rounded-full bg-[var(--brand-mint)] px-3 py-1 text-xs font-semibold text-[var(--brand-ink)]">
                      Сохранено в браузере
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
                  {visiblePack.projectName}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--brand-muted)] sm:text-base">
                  {visiblePack.positioning}
                </p>
              </div>

              {result && (
                <div className="flex gap-2">
                  <button
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-[var(--brand-ink)]/8 bg-white px-4 text-xs font-semibold transition hover:bg-[var(--brand-paper)]"
                    onClick={copyPack}
                    type="button"
                  >
                    {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
                    {copied ? "Скопировано" : "Скопировать"}
                  </button>
                  <button
                    aria-label="Сбросить результат"
                    className="flex size-11 items-center justify-center rounded-xl border border-[var(--brand-ink)]/8 bg-white transition hover:bg-[var(--brand-paper)]"
                    onClick={resetPack}
                    type="button"
                  >
                    <RotateCcw className="size-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visiblePack.cards.map((card, index) => (
                <GeneratedPromoCard
                  card={card}
                  index={index}
                  isPreview={!result}
                  key={`${card.title}-${index}`}
                  onDownload={() => downloadCard(card, index)}
                  projectName={visiblePack.projectName}
                />
              ))}
            </div>

            <div className="mt-5 rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white/72 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-coral)]">
                    План первой недели
                  </p>
                  <h4 className="mt-2 text-xl font-bold tracking-[-0.03em]">
                    От идеи к первым рабочим материалам
                  </h4>
                </div>
                <span className="hidden rounded-full border border-[var(--brand-ink)]/8 px-3 py-1.5 text-xs text-[var(--brand-muted)] sm:inline-flex">
                  5 шагов
                </span>
              </div>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                {visiblePack.checklist.map((item, index) => (
                  <li
                    className="flex gap-3 rounded-2xl border border-[var(--brand-ink)]/8 bg-[var(--brand-paper)] p-4 text-sm leading-6 text-[var(--brand-muted)]"
                    key={item}
                  >
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                        index % 3 === 0
                          ? "bg-[var(--brand-primary)] text-white"
                          : index % 3 === 1
                            ? "bg-[var(--brand-coral)] text-white"
                            : "bg-[var(--brand-mint)] text-[var(--brand-ink)]",
                      )}
                    >
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {result && (
              <div className="mt-5 rounded-[2rem] bg-[var(--brand-mint)] p-5 text-[var(--brand-ink)] sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
                <div>
                  <p className="text-lg font-bold tracking-[-0.03em]">
                    Материалы готовы. Оформите основу бизнеса.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--brand-muted)]">
                    Результат сохранится, а официальная заявка партнёра откроется отдельно.
                  </p>
                </div>
                <TrackedReferralLink
                  className="mt-5 w-full shrink-0 bg-[var(--brand-primary)] text-white shadow-none hover:bg-[var(--brand-primary-strong)] sm:mt-0 sm:w-auto"
                  openInNewTab
                  placement="ai-pack-result"
                >
                  Открыть ИП за 0 ₽
                  <ArrowRight className="size-4" />
                </TrackedReferralLink>
              </div>
            )}

            <p className="mt-4 text-xs leading-5 text-[var(--brand-muted)]/75">
              Карточки и тексты — маркетинговые черновики. Коды ОКВЭД, налоговый режим и условия регистрации уточняются на официальной странице партнёра.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
