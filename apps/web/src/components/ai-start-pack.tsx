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
  WandSparkles,
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
  positioning: "Органайзеры для путешественников, которым важны порядок, скорость сборов и компактность.",
  projectName: "Порядок в пути",
};

const themeStyles: Record<
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
  ink: {
    accent: "bg-[var(--landing-primary)] text-black",
    background: "bg-[#181817]",
    border: "border-white/10",
    button: "bg-white text-black",
    muted: "text-white/55",
    text: "text-white",
  },
  paper: {
    accent: "bg-black text-white",
    background: "bg-white",
    border: "border-black/10",
    button: "bg-[#181817] text-white",
    muted: "text-black/55",
    text: "text-black",
  },
  sun: {
    accent: "bg-black text-white",
    background: "bg-[var(--landing-primary)]",
    border: "border-black/10",
    button: "bg-[#181817] text-white",
    muted: "text-black/60",
    text: "text-black",
  },
};

const svgPalettes: Record<
  CardTheme,
  { accent: string; background: string; button: string; muted: string; text: string }
> = {
  ink: {
    accent: "#ffdd2d",
    background: "#181817",
    button: "#ffffff",
    muted: "#9f9f9a",
    text: "#ffffff",
  },
  paper: {
    accent: "#181817",
    background: "#ffffff",
    button: "#181817",
    muted: "#73736e",
    text: "#181817",
  },
  sun: {
    accent: "#181817",
    background: "#ffdd2d",
    button: "#181817",
    muted: "#5f551b",
    text: "#181817",
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
        `<text x="80" y="${280 + index * 88}" fill="${palette.text}" font-family="Arial, sans-serif" font-size="76" font-weight="700">${escapeXml(line)}</text>`,
    )
    .join("");
  const subtitleStart = 330 + titleLines.length * 88;
  const subtitleSvg = subtitleLines
    .map(
      (line, index) =>
        `<text x="80" y="${subtitleStart + index * 48}" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="34" font-weight="400">${escapeXml(line)}</text>`,
    )
    .join("");
  const bulletsStart = subtitleStart + subtitleLines.length * 48 + 78;
  const bulletSvg = card.bullets
    .map(
      (bullet, index) => `
        <circle cx="98" cy="${bulletsStart + index * 82 - 11}" r="18" fill="${palette.accent}" />
        <path d="M89 ${bulletsStart + index * 82 - 11}l7 7 13-15" fill="none" stroke="${card.theme === "ink" ? "#181817" : "#ffffff"}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <text x="140" y="${bulletsStart + index * 82}" fill="${palette.text}" font-family="Arial, sans-serif" font-size="34" font-weight="600">${escapeXml(bullet)}</text>
      `,
    )
    .join("");

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
      <rect width="1080" height="1350" rx="64" fill="${palette.background}" />
      <rect x="80" y="74" width="${Math.min(450, 170 + projectName.length * 13)}" height="62" rx="31" fill="${palette.accent}" />
      <text x="112" y="116" fill="${card.theme === "ink" ? "#181817" : "#ffffff"}" font-family="Arial, sans-serif" font-size="26" font-weight="700">${escapeXml(projectName)}</text>
      ${titleSvg}
      ${subtitleSvg}
      ${bulletSvg}
      <rect x="80" y="1160" width="920" height="112" rx="38" fill="${palette.button}" />
      <text x="540" y="1230" text-anchor="middle" fill="${card.theme === "ink" ? "#181817" : "#ffffff"}" font-family="Arial, sans-serif" font-size="34" font-weight="700">${escapeXml(card.cta)}</text>
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
  const styles = themeStyles[card.theme];

  return (
    <article
      className={cn(
        "group relative flex aspect-[4/5] min-h-[22rem] flex-col overflow-hidden rounded-[2rem] border p-5 shadow-[0_30px_90px_-55px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 sm:p-6",
        styles.background,
        styles.border,
        styles.text,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full border-[34px] border-current opacity-[0.055]" />
      <div className="relative flex items-center justify-between gap-3">
        <span className={cn("rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]", styles.accent)}>
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
            <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full", styles.accent)}>
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-7">
        <div className={cn("flex h-12 items-center justify-between rounded-2xl px-4 text-sm font-semibold", styles.button)}>
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
    const saved = window.localStorage.getItem("start-ip-launch-pack");
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
      window.localStorage.removeItem("start-ip-launch-pack");
    }
  }, []);

  useEffect(() => {
    if (!result || !mode) {
      return;
    }

    window.localStorage.setItem("start-ip-launch-pack", JSON.stringify({ mode, pack: result }));
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
    window.localStorage.removeItem("start-ip-launch-pack");
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
    anchor.download = `${safeFilename(visiblePack.projectName) || "business-card"}-${index + 1}.svg`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);

    window.dataLayer?.push({ event: "start_pack_card_download", card_index: index + 1 });
  };

  return (
    <section className="relative overflow-hidden bg-[#181817] py-20 text-white sm:py-28" id="ai-pack">
      <div className="landing-noise pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-screen" />
      <div className="pointer-events-none absolute -left-24 top-20 size-[30rem] rounded-full bg-[var(--landing-primary)]/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/80">
              <WandSparkles className="size-3.5 text-[var(--landing-primary)]" />
              Бесплатный старт-пакет
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">
              Получите первые продающие материалы до регистрации ИП
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
              Опишите бизнес двумя фразами. Генератор соберёт позиционирование, три карточки и план первой недели. Для маркетплейса — карточки товара, для услуг — промо-креативы.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {businessOptions.map((option) => {
                  const Icon = option.icon;
                  const isActive = option.value === businessType;
                  return (
                    <button
                      className={cn(
                        "rounded-2xl border p-4 text-left transition",
                        isActive
                          ? "border-[var(--landing-primary)] bg-[var(--landing-primary)] text-black"
                          : "border-white/10 bg-black/15 text-white hover:border-white/25 hover:bg-white/[0.06]",
                      )}
                      key={option.value}
                      onClick={() => setBusinessType(option.value)}
                      type="button"
                    >
                      <Icon className="size-5" />
                      <span className="mt-3 block text-sm font-semibold">{option.label}</span>
                      <span className={cn("mt-1 block text-xs leading-5", isActive ? "text-black/60" : "text-white/40")}>
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
                    className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[var(--landing-primary)] focus:ring-4 focus:ring-[var(--landing-primary)]/10"
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
                    className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[var(--landing-primary)] focus:ring-4 focus:ring-[var(--landing-primary)]/10"
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
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-black/15 text-white/60 hover:text-white",
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
                <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 px-3.5 py-3 text-sm text-red-100" role="alert">
                  {error}
                </p>
              )}

              <Button
                className="mt-5 h-13 w-full rounded-2xl bg-[var(--landing-primary)] text-sm font-semibold text-black hover:bg-[var(--landing-primary)]/90"
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
                    Создать старт-пакет бесплатно
                  </>
                )}
              </Button>
              <p className="mt-3 text-center text-xs leading-5 text-white/35">
                Без e‑mail, телефона и паспортных данных. Не вводите персональную информацию.
              </p>
            </div>
          </div>

          <div aria-live="polite" className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/55">
                    {result ? (mode === "ai" ? "Создано AI" : "Умный шаблон") : "Пример результата"}
                  </span>
                  {result && (
                    <span className="rounded-full bg-[var(--landing-primary)] px-3 py-1 text-xs font-semibold text-black">
                      Сохранено в этом браузере
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  {visiblePack.projectName}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                  {visiblePack.positioning}
                </p>
              </div>

              {result && (
                <div className="flex gap-2">
                  <button
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-xs font-semibold transition hover:bg-white/10"
                    onClick={copyPack}
                    type="button"
                  >
                    {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
                    {copied ? "Скопировано" : "Скопировать"}
                  </button>
                  <button
                    aria-label="Сбросить результат"
                    className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition hover:bg-white/10"
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

            <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--landing-primary)]">
                    План первой недели
                  </p>
                  <h4 className="mt-2 text-xl font-semibold tracking-[-0.025em]">
                    От идеи к первым рабочим материалам
                  </h4>
                </div>
                <span className="hidden rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45 sm:inline-flex">
                  5 шагов
                </span>
              </div>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                {visiblePack.checklist.map((item, index) => (
                  <li className="flex gap-3 rounded-2xl border border-white/8 bg-black/15 p-4 text-sm leading-6 text-white/70" key={item}>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/8 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {result && (
              <div className="mt-5 rounded-[2rem] bg-[var(--landing-primary)] p-5 text-black sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
                <div>
                  <p className="text-lg font-bold tracking-[-0.025em]">Материалы готовы. Теперь можно оформить основу бизнеса.</p>
                  <p className="mt-1 text-sm leading-6 text-black/60">
                    Результат останется в этой вкладке, а официальная заявка Т‑Банка откроется отдельно.
                  </p>
                </div>
                <TrackedReferralLink
                  className="mt-5 w-full shrink-0 bg-[#181817] text-white shadow-none hover:brightness-110 sm:mt-0 sm:w-auto"
                  openInNewTab
                  placement="ai-pack-result"
                >
                  Открыть ИП за 0 ₽
                  <ArrowRight className="size-4" />
                </TrackedReferralLink>
              </div>
            )}

            <p className="mt-4 text-xs leading-5 text-white/30">
              Карточки и тексты — маркетинговые черновики. Коды ОКВЭД, налоговый режим и условия регистрации уточняются отдельно на официальной странице банка.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
