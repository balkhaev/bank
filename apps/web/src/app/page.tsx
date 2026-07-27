import Link from "next/link";
import { ArrowRight, Check, FileCheck2, Sparkles } from "lucide-react";

import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";
import { segments } from "@/lib/site-content";

const steps = [
  {
    number: "01",
    title: "Ответьте на 3 вопроса",
    description: "Что запускаете, что продаёте и кому это нужно.",
    tone: "bg-[var(--brand-lavender)]",
  },
  {
    number: "02",
    title: "Получите старт-пакет",
    description: "Рабочее название, позиционирование и три карточки.",
    tone: "bg-[var(--brand-coral-soft)]",
  },
  {
    number: "03",
    title: "Откройте ИП",
    description: "Перейдите к официальной заявке на сайте партнёра.",
    tone: "bg-[var(--brand-mint)]",
  },
] as const;

const faqs = [
  ["Что я получу бесплатно?", "Рабочее название, короткое позиционирование, три промо-карточки и план действий на время регистрации ИП."],
  ["Нужно оставлять телефон?", "Нет. Для старт-пакета не нужны телефон, e-mail или паспортные данные."],
  ["Где оформляется ИП?", "На официальной защищённой странице партнёра после отдельного перехода."],
  ["Делопуск — это банк?", "Нет. Делопуск помогает подготовить запуск и направляет к партнёру для официальной регистрации."],
] as const;

export default function Home() {
  return (
    <SiteShell>
      <section className="relative" id="top">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <div className="motion-orb pointer-events-none absolute -right-40 top-10 -z-10 size-[34rem] rounded-full bg-[var(--brand-coral)]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/75 px-3.5 py-1.5 text-xs font-semibold" data-reveal>
              <Sparkles className="size-3.5 text-[var(--brand-primary)]" />
              старт бизнеса за один маршрут
            </p>
            <h1 className="mt-7 text-balance text-[clamp(4rem,8vw,7.4rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
              Запустите дело без паузы.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
              За две минуты получите рабочее название, оффер и три карточки. Затем откройте ИП за 0 ₽ у партнёра — и готовьте запуск, пока идут документы.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/start">
                Получить старт-пакет <ArrowRight className="size-4" />
              </Link>
              <TrackedReferralLink
                className="w-full border border-[var(--brand-ink)]/10 bg-white text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-lavender)] sm:w-auto"
                placement="hero-direct-ip"
              >
                Сразу открыть ИП <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5 text-xs font-semibold text-[var(--brand-muted)]" data-reveal data-reveal-delay="300">
              {["без телефона", "3 коротких шага", "результат сразу"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)]/8 bg-white/75 px-3.5 py-2" key={item}>
                  <Check className="size-3.5 text-[var(--brand-primary)]" strokeWidth={3} />{item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-flow relative mx-auto w-full max-w-[39rem]" data-reveal data-reveal-delay="320">
            <div className="overflow-hidden rounded-[2.6rem] border border-[var(--brand-ink)]/8 bg-white/80 p-5 shadow-[0_48px_130px_-76px_rgba(31,28,90,0.75)] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">ваш маршрут</p>
                  <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">От идеи к заявке</p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-white"><ArrowRight className="size-5" /></span>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {steps.map((step) => (
                  <article className={`motion-flow-stage min-h-[16rem] rounded-[1.8rem] border border-[var(--brand-ink)]/8 p-5 ${step.tone}`} key={step.number}>
                    <span className="text-xs font-bold text-[var(--brand-muted)]">{step.number}</span>
                    <h2 className="mt-16 text-2xl font-bold leading-[0.96] tracking-[-0.05em]">{step.title}</h2>
                    <p className="mt-4 text-sm leading-6 text-[var(--brand-muted)]">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28" id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">без долгой подготовки</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Сначала ценность. Потом — документы.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--brand-muted)]">Человек видит персональный результат до перехода на сайт партнёра.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]" id="result-preview">
            <article className="rounded-[2.3rem] bg-[var(--brand-ink)] p-7 text-white" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">пример результата</p>
              <h3 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.06em]">Порядок в пути</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">Органайзеры для путешественников, которым важны порядок и быстрые сборы.</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["Рабочее название", "Позиционирование", "3 промо-карточки"].map((item) => <div className="rounded-2xl bg-white/[0.06] p-4 text-sm font-semibold" key={item}><Check className="mb-3 size-4 text-[var(--brand-mint)]" />{item}</div>)}
              </div>
            </article>

            <article className="rounded-[2.3rem] bg-[var(--brand-mint)] p-7" data-reveal data-reveal-delay="100">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-muted)]">после результата</p>
              <h3 className="mt-6 text-balance text-4xl font-bold leading-[0.95] tracking-[-0.06em]">Один сильный следующий шаг.</h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--brand-muted)]">Пользователь уже вложился в идею и видит готовые материалы. В этот момент предложение открыть ИП воспринимается как естественное продолжение, а не холодная реклама банка.</p>
              <div className="mt-8 rounded-[1.8rem] bg-white/65 p-5">
                <div className="flex items-center gap-3"><FileCheck2 className="size-6 text-[var(--brand-primary)]" /><span className="font-bold">Открыть ИП за 0 ₽</span></div>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">Официальная заявка открывается отдельно на сайте партнёра.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="segments">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">точный оффер под трафик</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Четыре входа. Одна воронка.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => (
              <Link className="motion-flow-stage rounded-[2rem] border border-[var(--brand-ink)]/8 bg-white p-6" data-reveal data-reveal-delay={String(index * 70)} href={`/for/${slug}`} key={slug}>
                <span className="text-xs font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-bold tracking-[-0.035em]">{segment.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{segment.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">Открыть <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-[var(--brand-paper-deep)] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">без сюрпризов</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.06em] sm:text-6xl">Частые вопросы</h2>
          </div>
          <div className="mt-12 grid gap-3">
            {faqs.map(([question, answer]) => (
              <details className="group rounded-[1.5rem] border border-[var(--brand-ink)]/8 bg-white px-5 open:bg-[var(--brand-lavender)]/55" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold [&::-webkit-details-marker]:hidden">{question}<span className="text-[var(--brand-primary)] group-open:rotate-45">+</span></summary>
                <p className="border-t border-[var(--brand-ink)]/8 pb-5 pt-4 text-sm leading-7 text-[var(--brand-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] bg-[var(--brand-primary)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14" data-reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">начните сейчас</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Три вопроса до готового результата.</h2>
            <p className="mt-5 text-base leading-7 text-white/65">Без регистрации, контактов и длинной анкеты.</p>
          </div>
          <Link className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-primary)] lg:mt-0" href="/start">
            Получить старт-пакет <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
