"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Clipboard, FileCheck2, LoaderCircle, Sparkles } from "lucide-react";

import { cn } from "@bank/ui/lib/utils";

import { TrackedReferralLink } from "@/components/tracked-referral-link";
import type { FunnelResult } from "@/lib/funnel";

const cardTones = [
  "bg-[var(--brand-coral)] text-white",
  "bg-[var(--brand-primary)] text-white",
  "bg-[var(--brand-mint)] text-[var(--brand-ink)]",
] as const;

export function FunnelResultView() {
  const [result, setResult] = useState<FunnelResult | null>(null);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem("delopusk-funnel-result");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as FunnelResult;
        if (parsed.pack?.projectName) {
          setResult(parsed);
          window.dataLayer?.push({ event: "funnel_result_viewed", business_type: parsed.businessType });
        }
      } catch {
        window.localStorage.removeItem("delopusk-funnel-result");
      }
    }
    setReady(true);
  }, []);

  const copyResult = async () => {
    if (!result) return;
    const text = [
      result.pack.projectName,
      result.pack.positioning,
      "",
      ...result.pack.cards.flatMap((card, index) => [
        `Карточка ${index + 1}: ${card.title}`,
        card.subtitle,
        ...card.bullets.map((bullet) => `— ${bullet}`),
        "",
      ]),
      "Пока регистрируется ИП:",
      ...result.pack.checklist.map((item, index) => `${index + 1}. ${item}`),
    ].join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  if (!ready) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center">
        <LoaderCircle className="size-6 animate-spin text-[var(--brand-primary)]" />
      </div>
    );
  }

  if (!result) {
    return (
      <section className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <h1 className="text-4xl font-bold tracking-[-0.06em] sm:text-6xl">Сначала ответьте на три вопроса.</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--brand-muted)]">Мы соберём персональный результат и вернём вас сюда.</p>
        <Link className="brand-primary-action mt-8 inline-flex h-13 items-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white" href="/start">
          Начать <ArrowRight className="size-4" />
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative py-12 sm:py-20">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-25" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl" data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-mint)] px-3.5 py-2 text-xs font-semibold">
                <Check className="size-4" /> Старт-пакет готов
              </span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-coral-strong)]">рабочее название</p>
              <h1 className="mt-2 text-balance text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]">
                {result.pack.projectName}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-muted)] sm:text-xl">{result.pack.positioning}</p>
            </div>
            <button
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--brand-ink)]/10 bg-white px-4 text-xs font-semibold"
              onClick={copyResult}
              type="button"
            >
              {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
              {copied ? "Скопировано" : "Скопировать всё"}
            </button>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {result.pack.cards.map((card, index) => (
              <article
                className={cn(
                  "brand-result-card flex min-h-[25rem] flex-col rounded-[2.1rem] border border-[var(--brand-ink)]/8 p-6",
                  cardTones[index],
                )}
                data-reveal
                data-reveal-delay={String(index * 90)}
                key={`${card.title}-${index}`}
              >
                <div className="flex items-center justify-between gap-4 text-xs font-bold opacity-65">
                  <span>{result.pack.projectName}</span><span>0{index + 1}</span>
                </div>
                <h2 className="mt-14 text-3xl font-bold leading-[0.95] tracking-[-0.055em]">{card.title}</h2>
                <p className="mt-4 text-sm leading-6 opacity-65">{card.subtitle}</p>
                <ul className="mt-7 grid gap-3 text-sm font-semibold">
                  {card.bullets.map((bullet) => <li className="flex items-center gap-2" key={bullet}><Check className="size-4" strokeWidth={3} />{bullet}</li>)}
                </ul>
                <div className="mt-auto pt-8 text-sm font-bold">{card.cta} →</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/65 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-7 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <article className="rounded-[2.3rem] bg-[var(--brand-ink)] p-7 text-white" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">следующий шаг</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Оформите основу бизнеса.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              Откройте официальную заявку у партнёра. Ваш результат останется в браузере, поэтому после перехода вы ничего не потеряете.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
              {["Регистрация — 0 ₽", "Заявка онлайн", "Документы у партнёра"].map((item) => <div className="rounded-2xl bg-white/[0.06] p-4" key={item}><Check className="mb-3 size-4 text-[var(--brand-mint)]" />{item}</div>)}
            </div>
            <TrackedReferralLink className="mt-8 w-full bg-[var(--brand-coral)] text-white shadow-none hover:bg-[var(--brand-coral-strong)] sm:w-auto" openInNewTab placement="result-primary">
              Открыть ИП за 0 ₽ <ArrowRight className="size-5" />
            </TrackedReferralLink>
            <p className="mt-4 text-xs leading-5 text-white/35">Актуальные условия отображаются на официальной странице партнёра.</p>
          </article>

          <article className="rounded-[2.3rem] bg-[var(--brand-mint)] p-7" data-reveal data-reveal-delay="100">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white"><Sparkles className="size-5" /></span>
            <h2 className="mt-7 text-3xl font-bold tracking-[-0.05em]">Пока идут документы</h2>
            <ol className="mt-6 grid gap-3">
              {result.pack.checklist.map((item, index) => (
                <li className="flex gap-3 rounded-2xl bg-white/65 p-4 text-sm leading-6 text-[var(--brand-muted)]" key={item}>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-white">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]" href="/start">Изменить ответы <ArrowRight className="size-4" /></Link>
          </article>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-[var(--brand-ink)]/8 bg-white/95 p-2 shadow-2xl backdrop-blur sm:hidden">
        <TrackedReferralLink className="h-12 w-full bg-[var(--brand-primary)] text-white shadow-none" openInNewTab placement="result-mobile-sticky">
          Открыть ИП за 0 ₽ <FileCheck2 className="size-4" />
        </TrackedReferralLink>
      </div>
    </>
  );
}
