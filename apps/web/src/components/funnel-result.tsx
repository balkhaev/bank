"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Clipboard,
  FileCheck2,
  Image as ImageIcon,
  LoaderCircle,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@bank/ui/lib/utils";

import { TrackedReferralLink } from "@/components/tracked-referral-link";
import type { FunnelResult } from "@/lib/funnel";

const cardTones = [
  "bg-[var(--brand-coral)] text-white",
  "bg-[var(--brand-primary)] text-white",
  "bg-[var(--brand-mint)] text-[var(--brand-ink)]",
] as const;

const readyModules: Array<{ icon: LucideIcon; label: string }> = [
  { icon: WandSparkles, label: "Позиционирование" },
  { icon: ImageIcon, label: "3 карточки" },
  { icon: Search, label: "Текст каталога" },
  { icon: Megaphone, label: "Рекламные хуки" },
];

const advancedModules: Array<{
  description: string;
  icon: LucideIcon;
  status?: string;
  title: string;
}> = [
  { icon: ImageIcon, title: "Чистый packshot", description: "Удаление фона и аккуратная товарная сцена" },
  { icon: Camera, title: "Lifestyle‑кадр", description: "Товар в реальном сценарии использования" },
  { icon: ScanFace, title: "Модельная примерка", description: "Одежда или аксессуар на AI‑модели", status: "beta" },
];

const apparelPattern = /(одежд|плать|футбол|худи|рубаш|брюк|джинс|юбк|костюм|куртк|пальто|свит|обув|кроссов|сумк)/i;

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
      `Рабочее название: ${result.pack.projectName}`,
      `Позиционирование: ${result.pack.positioning}`,
      "",
      `Заголовок: ${result.pack.listingTitle}`,
      result.pack.listingDescription,
      "",
      ...result.pack.cards.flatMap((card, index) => [
        `Карточка ${index + 1}: ${card.title}`,
        card.subtitle,
        ...card.bullets.map((bullet) => `— ${bullet}`),
        `CTA: ${card.cta}`,
        "",
      ]),
      "Визуальные сценарии:",
      ...result.pack.visualBriefs.map((item, index) => `${index + 1}. ${item}`),
      "",
      "Рекламные хуки:",
      ...result.pack.adHooks.map((item) => `— ${item}`),
      "",
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
        <LoaderCircle className="size-6 animate-spin text-[var(--brand-violet-soft)]" />
      </div>
    );
  }

  if (!result) {
    return (
      <section className="premium-dark-section mx-auto flex min-h-[65vh] flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h1 className="font-editorial text-4xl tracking-[-0.04em] sm:text-6xl">Сначала дайте AI три вводных.</h1>
        <p className="mt-5 text-lg leading-8 text-white/48">Мы соберём персональный пакет и вернём вас сюда.</p>
        <Link className="brand-primary-action mt-8 inline-flex h-13 items-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white" href="/start">
          Начать <ArrowRight className="size-4" />
        </Link>
      </section>
    );
  }

  const isFashion = result.businessType === "marketplace" && apparelPattern.test(result.subject);
  const contentLabel = result.businessType === "marketplace" ? "Карточка товара" : result.businessType === "b2b" ? "Коммерческий текст" : "Текст объявления";

  return (
    <>
      <section className="premium-dark-section relative overflow-hidden py-10 text-white sm:py-16">
        <div className="premium-orbits pointer-events-none absolute inset-0 opacity-70" />
        <div className="motion-orb pointer-events-none absolute -right-36 top-16 size-[32rem] rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
            <div className="rounded-[2.6rem] bg-[var(--brand-paper)] p-6 text-[var(--brand-ink)] shadow-[0_55px_130px_-82px_rgba(0,0,0,0.9)] sm:p-9" data-reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-mint)] px-3.5 py-2 text-xs font-semibold">
                    <Sparkles className="size-4" /> AI‑пакет готов
                  </span>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-coral-strong)]">рабочее название</p>
                  <h1 className="font-editorial mt-2 text-balance text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.96] tracking-[-0.05em]">{result.pack.projectName}</h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-muted)] sm:text-xl">{result.pack.positioning}</p>
                </div>
                <button className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 text-xs font-semibold hover:bg-[var(--brand-paper-deep)]" onClick={copyResult} type="button">
                  {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
                  {copied ? "Скопировано" : "Скопировать всё"}
                </button>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-4">
                {readyModules.map(({ icon: Icon, label }) => (
                  <div className="rounded-[1.4rem] bg-white p-4 ring-1 ring-black/6" key={label}>
                    <Icon className="size-5 text-[var(--brand-primary)]" />
                    <p className="mt-5 text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">готово</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2.6rem] border border-white/8 bg-white/[0.045] p-6 text-white backdrop-blur sm:p-8" data-reveal data-reveal-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-mint)]">следующий шаг</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em]">Закрепите запуск юридически.</h2>
              <p className="mt-5 text-sm leading-7 text-white/52">Ваш AI‑пакет останется в браузере. Заявка на ИП откроется отдельно на официальном сайте партнёра.</p>
              <TrackedReferralLink className="mt-8 w-full bg-[var(--brand-coral)] text-white shadow-none hover:bg-[var(--brand-coral-strong)]" openInNewTab placement="result-above-fold">
                Открыть ИП за 0 ₽ <ArrowRight className="size-5" />
              </TrackedReferralLink>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-white/55">
                {["0 ₽", "онлайн", "у партнёра"].map((item) => <span className="rounded-xl bg-white/[0.06] px-2 py-3" key={item}>{item}</span>)}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-14 text-[var(--brand-ink)] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">AI‑креативный директор</p>
              <h2 className="font-editorial mt-4 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Три направления карточки.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--brand-muted)]">Быстрые рабочие концепции, чтобы начать не с пустого листа.</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {result.pack.cards.map((card, index) => (
              <article
                className={cn("brand-result-card flex min-h-[27rem] flex-col rounded-[2.1rem] border border-black/8 p-6", cardTones[index])}
                data-reveal
                data-reveal-delay={String(index * 90)}
                key={`${card.title}-${index}`}
              >
                <div className="flex items-center justify-between gap-4 text-xs font-bold opacity-65"><span>{result.pack.projectName}</span><span>0{index + 1}</span></div>
                <div className="mt-12 h-24 rounded-[1.5rem] border border-current/10 bg-white/10 p-4">
                  <div className="h-2 w-2/3 rounded-full bg-current/20" />
                  <div className="mt-3 h-2 w-1/2 rounded-full bg-current/10" />
                  <div className="mt-5 flex gap-2"><span className="size-5 rounded-full bg-current/15" /><span className="h-5 w-20 rounded-full bg-current/10" /></div>
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-[0.95] tracking-[-0.055em]">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 opacity-65">{card.subtitle}</p>
                <ul className="mt-7 grid gap-3 text-sm font-semibold">{card.bullets.map((bullet) => <li className="flex items-center gap-2" key={bullet}><Check className="size-4" strokeWidth={3} />{bullet}</li>)}</ul>
                <div className="mt-auto pt-8 text-sm font-bold">{card.cta} →</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] pb-14 text-[var(--brand-ink)] sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <article className="rounded-[2.4rem] bg-white p-6 ring-1 ring-black/8 sm:p-8" data-reveal>
            <div className="flex items-center justify-between gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-lavender)] text-[var(--brand-primary)]"><Search className="size-5" /></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">{contentLabel}</span>
            </div>
            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.05em]">{result.pack.listingTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--brand-muted)]">{result.pack.listingDescription}</p>
            <div className="mt-8 border-t border-black/8 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">Рекламные хуки</p>
              <ul className="mt-4 grid gap-3">{result.pack.adHooks.map((hook) => <li className="flex gap-3 text-sm font-semibold" key={hook}><Megaphone className="mt-0.5 size-4 shrink-0 text-[var(--brand-coral)]" />{hook}</li>)}</ul>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2.4rem] bg-[var(--brand-lavender)] p-6 sm:p-8" data-reveal data-reveal-delay="100">
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[var(--brand-primary)]/14 blur-3xl" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">AI‑визуальная лаборатория</p>
                <h2 className="font-editorial mt-3 text-3xl tracking-[-0.035em]">Три сценария изображения.</h2>
              </div>
              <Camera className="size-7 text-[var(--brand-primary)]" />
            </div>
            <div className="relative mt-7 grid gap-3">
              {result.pack.visualBriefs.map((brief, index) => (
                <div className="rounded-[1.45rem] bg-white/80 p-4" key={brief}>
                  <div className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-ink)] text-xs font-bold text-white">0{index + 1}</span>
                    <div>
                      <p className="text-sm leading-6 text-[var(--brand-muted)]">{brief}</p>
                      {index === 2 && isFashion && <span className="mt-3 inline-flex rounded-full bg-[var(--brand-coral)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">AI‑примерка · beta</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="premium-dark-section py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-mint)]">следующие AI‑модули</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Из брифа — в визуальный контент.</h2>
              <p className="mt-5 text-sm leading-7 text-white/50">Базовый пакет уже работает. Генерация финальных изображений помечена как beta.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {advancedModules.map(({ icon: Icon, title, description, status }, index) => (
                <article className={cn("rounded-[2rem] border border-white/10 p-5", index === 2 ? "bg-[var(--brand-coral)]" : "bg-white/[0.055]")} data-reveal data-reveal-delay={String(index * 80)} key={title}>
                  <div className="flex items-center justify-between gap-3"><span className="flex size-11 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)]"><Icon className="size-5" /></span>{status && <span className="rounded-full bg-[var(--brand-ink)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em]">{status}</span>}</div>
                  <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-14 text-[var(--brand-ink)] sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <article className="rounded-[2.4rem] bg-[var(--brand-mint)] p-7" data-reveal>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white"><Sparkles className="size-5" /></span>
            <h2 className="font-editorial mt-7 text-3xl tracking-[-0.035em]">Пока идут документы</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">{result.pack.checklist.map((item, index) => <li className="flex gap-3 rounded-2xl bg-white/65 p-4 text-sm leading-6 text-[var(--brand-muted)]" key={item}><span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-white">{index + 1}</span>{item}</li>)}</ol>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]" href="/start">Изменить ответы <ArrowRight className="size-4" /></Link>
          </article>

          <article className="premium-cta rounded-[2.4rem] p-7 text-white" data-reveal data-reveal-delay="100">
            <FileCheck2 className="size-7 text-[var(--brand-mint)]" />
            <h2 className="font-editorial mt-6 text-4xl leading-[1.02] tracking-[-0.04em]">AI‑пакет готов. Оформите ИП.</h2>
            <p className="mt-5 text-sm leading-7 text-white/55">Регистрация проходит отдельно на официальном сайте партнёра.</p>
            <TrackedReferralLink className="mt-8 w-full bg-white text-[var(--brand-ink)] shadow-none hover:bg-[var(--brand-paper)]" openInNewTab placement="result-bottom">
              Открыть ИП за 0 ₽ <ArrowRight className="size-5" />
            </TrackedReferralLink>
          </article>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/10 bg-[var(--brand-ink)]/95 p-2 shadow-2xl backdrop-blur sm:hidden">
        <TrackedReferralLink className="h-12 w-full bg-[var(--brand-primary)] text-white shadow-none" openInNewTab placement="result-mobile-sticky">
          Открыть ИП за 0 ₽ <FileCheck2 className="size-4" />
        </TrackedReferralLink>
      </div>
    </>
  );
}
