"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Image as ImageIcon,
  LoaderCircle,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
} from "lucide-react";

import { Button } from "@bank/ui/components/button";
import { cn } from "@bank/ui/lib/utils";

import {
  businessOptions,
  tones,
  type BusinessType,
  type FunnelPack,
  type Tone,
} from "@/lib/funnel";

type ApiResponse = {
  error?: string;
  mode?: "ai" | "template";
  pack?: FunnelPack;
};

const studioTools = [
  { icon: ImageIcon, label: "Карточки и визуальные сценарии", status: "в пакете" },
  { icon: Search, label: "Заголовок и описание", status: "в пакете" },
  { icon: Megaphone, label: "Рекламные хуки", status: "в пакете" },
  { icon: ScanFace, label: "Модельная примерка", status: "beta" },
] as const;

export function FunnelQuiz({ initialSegment = "marketplace" }: { initialSegment?: BusinessType }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [businessType, setBusinessType] = useState<BusinessType>(initialSegment);
  const [subject, setSubject] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState<Tone>("confident");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const progress = ((step + 1) / 3) * 100;
  const selectedBusiness = useMemo(
    () => businessOptions.find((option) => option.value === businessType) ?? businessOptions[0]!,
    [businessType],
  );

  const canContinue =
    step === 0 || (step === 1 && subject.trim().length >= 3) || (step === 2 && audience.trim().length >= 2);

  const next = () => {
    if (!canContinue) {
      setError(step === 1 ? "Коротко опишите, что вы продаёте." : "Укажите, для кого ваш продукт или услуга.");
      return;
    }
    setError("");
    setStep((current) => Math.min(2, current + 1));
  };

  const generate = async () => {
    if (!canContinue) {
      setError("Укажите, для кого ваш продукт или услуга.");
      return;
    }

    setError("");
    setIsLoading(true);
    window.dataLayer?.push({ event: "funnel_quiz_completed", business_type: businessType });

    try {
      const response = await fetch("/api/start-pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audience, businessType, subject, tone }),
      });
      const payload = (await response.json()) as ApiResponse;
      if (!response.ok || !payload.pack || !payload.mode) {
        throw new Error(payload.error || "Не получилось собрать AI-пакет.");
      }

      window.localStorage.setItem(
        "delopusk-funnel-result",
        JSON.stringify({ audience, businessType, mode: payload.mode, pack: payload.pack, subject, tone }),
      );
      router.push("/result");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Не получилось собрать AI-пакет.");
      setIsLoading(false);
    }
  };

  return (
    <section className="premium-dark-section relative min-h-[calc(100vh-8rem)] py-8 text-white sm:py-14">
      <div className="premium-orbits pointer-events-none absolute inset-0 opacity-70" />
      <div className="motion-orb pointer-events-none absolute -left-40 top-20 size-[32rem] rounded-full bg-[var(--brand-primary)]/18 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <aside className="relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-white/[0.035] p-6 lg:sticky lg:top-6 lg:min-h-[42rem] lg:p-8" data-reveal>
          <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[var(--brand-primary)]/35 blur-3xl" />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white/75">
            <Sparkles className="size-4 text-[var(--brand-mint)]" /> Делопуск AI Studio
          </span>
          <h2 className="font-editorial relative mt-8 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Короткий бриф для AI‑команды.
          </h2>
          <p className="relative mt-5 max-w-md text-sm leading-7 text-white/52">
            Три ответа превращаются в комплект для каталога, рекламы и первого запуска.
          </p>

          <div className="relative mt-10 grid gap-3">
            {studioTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div className="flex items-center gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.045] p-4" key={tool.label}>
                  <span className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-2xl",
                    index === 3 ? "bg-[var(--brand-coral)] text-white" : "bg-white text-[var(--brand-ink)]",
                  )}>
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{tool.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/35">{tool.status}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="relative mt-8 text-xs leading-5 text-white/35">
            AI-примерка и генерация готовых изображений отмечены как beta: базовый пакет уже создаёт тексты, карточки и точные визуальные брифы.
          </p>
        </aside>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-violet-soft)]">AI‑пакет запуска</p>
              <p className="mt-1 text-sm text-white/42">Три шага. Контакты не нужны.</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold">{step + 1}/3</span>
          </div>

          <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/8">
            <div className="h-full rounded-full bg-[var(--brand-primary)] transition-[width] duration-500" style={{ width: `${progress}%` }} />
          </div>

          <div className="min-h-[36rem] rounded-[2.5rem] bg-[var(--brand-paper)] p-6 text-[var(--brand-ink)] shadow-[0_48px_120px_-70px_rgba(0,0,0,0.9)] sm:p-10">
            {step === 0 && (
              <div data-reveal>
                <p className="text-sm font-semibold text-[var(--brand-primary)]">Шаг 1 · формат</p>
                <h1 className="font-editorial mt-3 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Что запускаем?</h1>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">От этого зависит набор карточек, текстов и визуальных сценариев.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {businessOptions.map((option) => {
                    const active = option.value === businessType;
                    return (
                      <button
                        className={cn(
                          "rounded-[1.6rem] border p-5 text-left transition",
                          active
                            ? "border-[var(--brand-primary)] bg-[var(--brand-lavender)] ring-4 ring-[var(--brand-primary)]/8"
                            : "border-black/8 bg-white hover:border-[var(--brand-primary)]/35",
                        )}
                        key={option.value}
                        onClick={() => setBusinessType(option.value)}
                        type="button"
                      >
                        <span className="flex items-center justify-between gap-4">
                          <span className="font-semibold">{option.label}</span>
                          <span className={cn("flex size-7 items-center justify-center rounded-full", active ? "bg-[var(--brand-primary)] text-white" : "bg-[var(--brand-paper-deep)]")}>
                            {active && <Check className="size-4" strokeWidth={3} />}
                          </span>
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-[var(--brand-muted)]">{option.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div data-reveal>
                <p className="text-sm font-semibold text-[var(--brand-primary)]">Шаг 2 · продукт</p>
                <h1 className="font-editorial mt-3 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Что нужно продать?</h1>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">Опишите товар или услугу обычными словами. AI сам соберёт структуру предложения.</p>
                <textarea
                  autoFocus
                  className="mt-8 min-h-48 w-full resize-none rounded-[1.6rem] border border-black/10 bg-white p-5 text-lg outline-none transition placeholder:text-[var(--brand-muted)]/45 focus:border-[var(--brand-primary)] focus:ring-4 focus:ring-[var(--brand-primary)]/8"
                  maxLength={120}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder={selectedBusiness.value === "marketplace" ? "Например: льняное платье свободного кроя" : "Например: дизайн интерьера квартиры под ключ"}
                  value={subject}
                />
                {businessType === "marketplace" && (
                  <p className="mt-4 rounded-2xl bg-[var(--brand-mint)]/65 px-4 py-3 text-sm leading-6 text-[var(--brand-muted)]">
                    Для одежды AI добавит сценарий модельной примерки; для других товаров — packshot, lifestyle и детальный кадр.
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <div data-reveal>
                <p className="text-sm font-semibold text-[var(--brand-primary)]">Шаг 3 · аудитория</p>
                <h1 className="font-editorial mt-3 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Кто должен захотеть это?</h1>
                <input
                  autoFocus
                  className="mt-8 h-16 w-full rounded-[1.4rem] border border-black/10 bg-white px-5 text-lg outline-none transition placeholder:text-[var(--brand-muted)]/45 focus:border-[var(--brand-primary)] focus:ring-4 focus:ring-[var(--brand-primary)]/8"
                  maxLength={100}
                  onChange={(event) => setAudience(event.target.value)}
                  placeholder="Например: женщины 25–40 лет, которым важны комфорт и натуральные ткани"
                  value={audience}
                />
                <p className="mt-7 text-sm font-semibold">Характер бренда</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {tones.map((option) => (
                    <button
                      className={cn(
                        "h-12 rounded-xl border px-2 text-xs font-semibold transition sm:text-sm",
                        tone === option.value
                          ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white"
                          : "border-black/8 bg-white hover:bg-[var(--brand-lavender)]",
                      )}
                      key={option.value}
                      onClick={() => setTone(option.value)}
                      type="button"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>}

            <div className="mt-9 flex items-center justify-between gap-3">
              <button
                className={cn("inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-[var(--brand-muted)]", step === 0 && "invisible")}
                onClick={() => { setError(""); setStep((current) => Math.max(0, current - 1)); }}
                type="button"
              >
                <ArrowLeft className="size-4" /> Назад
              </button>
              {step < 2 ? (
                <Button className="h-12 rounded-xl px-6" onClick={next} type="button">
                  Продолжить <ArrowRight className="size-4" />
                </Button>
              ) : (
                <Button className="motion-shimmer h-12 rounded-xl px-6" disabled={isLoading} onClick={generate} type="button">
                  {isLoading ? <><LoaderCircle className="size-4 animate-spin" /> AI работает…</> : <><Sparkles className="size-4" /> Создать AI‑пакет</>}
                </Button>
              )}
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-white/32">
            Без телефона, e-mail и паспортных данных. Результат сохраняется только в вашем браузере.
          </p>
        </div>
      </div>
    </section>
  );
}
