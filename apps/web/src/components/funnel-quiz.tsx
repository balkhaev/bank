"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, LoaderCircle, Sparkles } from "lucide-react";

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
        throw new Error(payload.error || "Не получилось собрать старт-пакет.");
      }

      window.localStorage.setItem(
        "delopusk-funnel-result",
        JSON.stringify({ audience, businessType, mode: payload.mode, pack: payload.pack, subject, tone }),
      );
      router.push("/result");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Не получилось собрать старт-пакет.");
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-8rem)] py-10 sm:py-16">
      <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-25" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">старт-пакет</p>
            <p className="mt-1 text-sm text-[var(--brand-muted)]">Три коротких шага. Контакты не нужны.</p>
          </div>
          <span className="text-sm font-bold">{step + 1}/3</span>
        </div>

        <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-[var(--brand-ink)]/8">
          <div
            className="h-full rounded-full bg-[var(--brand-primary)] transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="rounded-[2.5rem] border border-[var(--brand-ink)]/8 bg-white p-6 shadow-[0_36px_100px_-68px_rgba(21,22,35,0.7)] sm:p-10">
          {step === 0 && (
            <div data-reveal>
              <p className="text-sm font-semibold text-[var(--brand-primary)]">Шаг 1</p>
              <h1 className="mt-3 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">
                Что вы запускаете?
              </h1>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {businessOptions.map((option) => {
                  const active = option.value === businessType;
                  return (
                    <button
                      className={cn(
                        "rounded-[1.6rem] border p-5 text-left transition",
                        active
                          ? "border-[var(--brand-primary)] bg-[var(--brand-lavender)] ring-4 ring-[var(--brand-primary)]/8"
                          : "border-[var(--brand-ink)]/8 bg-[var(--brand-paper)] hover:border-[var(--brand-primary)]/35",
                      )}
                      key={option.value}
                      onClick={() => setBusinessType(option.value)}
                      type="button"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="font-bold">{option.label}</span>
                        <span className={cn("flex size-7 items-center justify-center rounded-full", active ? "bg-[var(--brand-primary)] text-white" : "bg-white")}>
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
              <p className="text-sm font-semibold text-[var(--brand-primary)]">Шаг 2</p>
              <h1 className="mt-3 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">
                Что вы продаёте?
              </h1>
              <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">Одной фразы достаточно. Не пытайтесь написать идеальный оффер.</p>
              <textarea
                autoFocus
                className="mt-8 min-h-40 w-full resize-none rounded-[1.6rem] border border-[var(--brand-ink)]/10 bg-[var(--brand-paper)] p-5 text-lg outline-none transition placeholder:text-[var(--brand-muted)]/45 focus:border-[var(--brand-primary)] focus:ring-4 focus:ring-[var(--brand-primary)]/8"
                maxLength={120}
                onChange={(event) => setSubject(event.target.value)}
                placeholder={selectedBusiness.value === "marketplace" ? "Например: набор органайзеров для путешествий" : "Например: ремонт квартир под ключ"}
                value={subject}
              />
            </div>
          )}

          {step === 2 && (
            <div data-reveal>
              <p className="text-sm font-semibold text-[var(--brand-primary)]">Шаг 3</p>
              <h1 className="mt-3 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">
                Для кого это?
              </h1>
              <input
                autoFocus
                className="mt-8 h-16 w-full rounded-[1.4rem] border border-[var(--brand-ink)]/10 bg-[var(--brand-paper)] px-5 text-lg outline-none transition placeholder:text-[var(--brand-muted)]/45 focus:border-[var(--brand-primary)] focus:ring-4 focus:ring-[var(--brand-primary)]/8"
                maxLength={100}
                onChange={(event) => setAudience(event.target.value)}
                placeholder="Например: молодые семьи, селлеры, владельцы квартир"
                value={audience}
              />
              <p className="mt-7 text-sm font-semibold">Характер подачи</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {tones.map((option) => (
                  <button
                    className={cn(
                      "h-12 rounded-xl border px-2 text-xs font-semibold transition sm:text-sm",
                      tone === option.value
                        ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white"
                        : "border-[var(--brand-ink)]/8 bg-white hover:bg-[var(--brand-lavender)]",
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
                {isLoading ? <><LoaderCircle className="size-4 animate-spin" /> Собираем…</> : <><Sparkles className="size-4" /> Получить результат</>}
              </Button>
            )}
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[var(--brand-muted)]">
          Без телефона, e-mail и паспортных данных. Результат сохраняется только в вашем браузере.
        </p>
      </div>
    </section>
  );
}
