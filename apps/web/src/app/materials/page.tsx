import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Check, LayoutTemplate, MessageSquareText, ReceiptText, Sparkles } from "lucide-react";

import { primaryLinkClassName, SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Материалы запуска",
  description: "Чек-лист материалов, которые можно подготовить параллельно с регистрацией ИП.",
  alternates: { canonical: "/materials" },
};

const materials = [
  { icon: MessageSquareText, title: "Главный оффер", description: "Одна фраза: что вы предлагаете, кому и какой результат получает клиент.", tone: "bg-[var(--brand-lavender)]" },
  { icon: LayoutTemplate, title: "Три карточки", description: "Результат, ключевые преимущества и конкретное предложение или комплект.", tone: "bg-[var(--brand-coral-soft)]" },
  { icon: ReceiptText, title: "Цена и условия", description: "Стартовая цена, сроки, формат оплаты и следующий шаг для клиента.", tone: "bg-[var(--brand-mint)]" },
  { icon: Camera, title: "Фотографии", description: "Минимальный набор изображений товара, процесса, места или результата работы.", tone: "bg-white" },
] as const;

export default function MaterialsPage() {
  return (
    <SiteShell>
      <section className="relative py-20 sm:py-28">
        <div className="brand-grid pointer-events-none absolute inset-0 -z-10 opacity-35" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]" data-reveal>пока оформляется ИП</p>
          <h1 className="mt-6 text-balance text-[clamp(3.8rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em]" data-reveal data-reveal-delay="80">
            Готовьте запуск параллельно.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-[var(--brand-muted)] sm:text-xl" data-reveal data-reveal-delay="160">
            Не ждите окончания регистрации. Используйте это время для карточек, фотографий, цен и первых каналов продаж.
          </p>
          <Link className={`${primaryLinkClassName} mt-9`} href="/idea" data-reveal data-reveal-delay="240">
            Создать старт-пакет
            <Sparkles className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-[var(--brand-ink)]/6 bg-white/62 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={`motion-flow-stage min-h-[22rem] rounded-[2.2rem] border border-[var(--brand-ink)]/8 p-7 ${item.tone}`} data-reveal data-reveal-delay={String(index * 80)} key={item.title}>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand-ink)] text-white"><Icon className="size-5" /></span>
                  <h2 className="mt-20 text-3xl font-bold leading-[0.96] tracking-[-0.05em]">{item.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-[var(--brand-muted)]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">минимальный набор</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl">Не нужен большой сайт, чтобы начать.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--brand-muted)] sm:text-lg">Для первых продаж достаточно ясного предложения, нескольких материалов и понятного следующего шага.</p>
          </div>
          <div className="rounded-[2.3rem] bg-[var(--brand-ink)] p-7 text-white" data-reveal data-reveal-delay="100">
            <ol className="grid gap-4">
              {["Сформулировать одну главную пользу", "Подготовить три карточки", "Указать цену или принцип расчёта", "Выбрать один канал первых продаж", "Подготовить ответ на частые вопросы"].map((item, index) => (
                <li className="flex items-center gap-4 rounded-[1.4rem] bg-white/[0.06] p-4" key={item}>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-xs font-bold">0{index + 1}</span>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-mint)] py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8" data-reveal>
          <div className="max-w-3xl">
            <h2 className="text-balance text-4xl font-bold leading-[0.96] tracking-[-0.06em]">Начните с рабочих черновиков.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">Их можно улучшать после первых разговоров и продаж. Главное — получить обратную связь быстрее.</p>
          </div>
          <Link className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-7 text-sm font-semibold text-white" href="/guides/first-materials">
            Открыть подробный гайд
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
