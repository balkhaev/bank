import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Image as ImageIcon,
  LayoutTemplate,
  Megaphone,
  ScanFace,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { cn } from "@bank/ui/lib/utils";

import { AiStudioCanvas, DeliverablesChart } from "@/components/ai-visuals";
import { primaryLinkClassName, SiteShell } from "@/components/site-shell";
import { TrackedReferralLink } from "@/components/tracked-referral-link";
import { segments } from "@/lib/site-content";

const aiModules = [
  {
    icon: LayoutTemplate,
    title: "Карточки товара",
    description: "Три направления: главная польза, преимущества и конкретное предложение.",
    status: "готово",
    tone: "bg-[var(--brand-lavender)]",
  },
  {
    icon: Search,
    title: "Тексты каталога",
    description: "Заголовок, описание и структура, которую легко адаптировать под площадку.",
    status: "готово",
    tone: "bg-white",
  },
  {
    icon: Megaphone,
    title: "Рекламные крючки",
    description: "Три коротких захода для объявлений, соцсетей и первого теста трафика.",
    status: "готово",
    tone: "bg-[var(--brand-coral-soft)]",
  },
  {
    icon: Camera,
    title: "Визуальные сценарии",
    description: "Packshot, lifestyle и детальный кадр с готовым брифом для съёмки или генерации.",
    status: "готово",
    tone: "bg-[var(--brand-mint)]",
  },
  {
    icon: ImageIcon,
    title: "AI‑сцены товара",
    description: "Чистый фон, рекламное окружение и серия визуалов из одного исходника.",
    status: "beta",
    tone: "bg-[var(--brand-ink-soft)] text-white",
  },
  {
    icon: ScanFace,
    title: "Модельная примерка",
    description: "Одежда и аксессуары на AI‑модели без организации полноценной съёмки.",
    status: "beta",
    tone: "bg-[var(--brand-primary)] text-white",
  },
] as const;

const launchStages = [
  ["01", "Идея и бренд", "AI формирует рабочую основу"],
  ["02", "Подача на ИП", "Вы переходите на сайт партнёра"],
  ["03", "Пока идёт регистрация", "AI продолжает готовить материалы"],
  ["04", "Запуск", "Контент и оформление сходятся вместе"],
] as const;

const faqs = [
  ["Что AI создаёт прямо сейчас?", "Название, позиционирование, три карточки, заголовок и описание, рекламные хуки, визуальные сценарии и план запуска."],
  ["Можно скачать результат?", "Тексты можно скопировать целиком, а карточки — скачать как редактируемые SVG-заготовки."],
  ["Модельная примерка уже работает?", "Она отмечена как beta. Сейчас AI создаёт точный сценарий примерки; финальная генерация изображения будет отдельным модулем."],
  ["Нужно загружать фото или оставлять телефон?", "Нет. Для базового AI‑пакета достаточно трёх ответов без телефона, e-mail и паспортных данных."],
  ["Где оформляется ИП?", "На официальной защищённой странице партнёра после отдельного перехода."],
] as const;

export default function Home() {
  return (
    <SiteShell>
      <section className="premium-hero relative overflow-hidden text-white" id="top">
        <div className="premium-orbits pointer-events-none absolute inset-0" />
        <div className="motion-orb pointer-events-none absolute -left-48 top-12 size-[38rem] rounded-full bg-[var(--brand-primary)]/20 blur-3xl" />
        <div className="motion-orb pointer-events-none absolute -right-52 top-48 size-[34rem] rounded-full bg-[var(--brand-coral)]/12 blur-3xl [animation-delay:2s]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-semibold text-[var(--brand-violet-soft)] backdrop-blur" data-reveal>
              <Sparkles className="size-4" /> Делопуск AI Studio
            </p>
            <h1 className="font-editorial mt-8 text-balance text-[clamp(4rem,8vw,7.2rem)] leading-[0.92] tracking-[-0.055em]" data-reveal data-reveal-delay="80">
              Ваша AI‑команда для запуска.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/58 sm:text-xl" data-reveal data-reveal-delay="160">
              За три ответа создадим название, оффер, карточки, текст каталога, рекламные хуки и визуальные сценарии. Затем поможем перейти к открытию ИП за 0 ₽ у партнёра.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="240">
              <Link className={`${primaryLinkClassName} w-full sm:w-auto`} href="/start">
                Создать AI‑пакет <WandSparkles className="size-4" />
              </Link>
              <TrackedReferralLink className="w-full border border-white/18 bg-white/[0.035] text-white shadow-none hover:bg-white/[0.08] sm:w-auto" placement="hero-direct-ip">
                Сразу открыть ИП <ArrowRight className="size-4" />
              </TrackedReferralLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-white/44" data-reveal data-reveal-delay="300">
              {["без телефона", "результат за минуты", "карточки можно скачать", "AI‑примерка · beta"].map((item) => (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2" key={item}>
                  <Check className="size-3.5 text-[var(--brand-mint)]" strokeWidth={3} />{item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-flow relative mx-auto w-full max-w-[43rem]" data-reveal data-reveal-delay="320">
            <AiStudioCanvas className="ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/6 bg-[var(--brand-paper)] py-20 sm:py-28" id="ai-power">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">что создаёт AI</p>
              <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Не один текст. Стартовый контент‑отдел.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <p className="text-base leading-8 text-[var(--brand-muted)]">Пакет адаптируется под товар, услугу, локальный бизнес или B2B. Сначала показываем рабочую версию, потом предлагаем официальный следующий шаг.</p>
              <DeliverablesChart compact />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiModules.map((module, index) => {
              const Icon = module.icon;
              const dark = module.tone.includes("text-white");
              return (
                <article className={`motion-flow-stage min-h-[18rem] rounded-[2.1rem] border border-black/8 p-6 ${module.tone}`} data-reveal data-reveal-delay={String(index * 70)} key={module.title}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-[var(--brand-ink)] shadow-sm"><Icon className="size-5" /></span>
                    <span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] ${module.status === "beta" ? "bg-[var(--brand-coral)] text-white" : "bg-white text-[var(--brand-muted)]"}`}>{module.status}</span>
                  </div>
                  <h3 className="mt-14 text-2xl font-semibold tracking-[-0.045em]">{module.title}</h3>
                  <p className={cn("mt-4 text-sm leading-7", dark ? "text-white/55" : "text-[var(--brand-muted)]")}>{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="premium-dark-section py-20 text-white sm:py-28" id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">параллельный процесс</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Регистрация идёт. AI продолжает работать.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/52">Пока партнёр и ФНС занимаются документами, Делопуск собирает материалы для запуска.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-4">
            {launchStages.map(([number, title, description], index) => (
              <article className="relative" data-reveal data-reveal-delay={String(index * 90)} key={number}>
                {index < launchStages.length - 1 && <span className="absolute left-12 top-6 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-[var(--brand-coral)] via-[var(--brand-primary)] to-[var(--brand-mint)] opacity-45 lg:block" />}
                <span className={cn("relative z-10 flex size-12 items-center justify-center rounded-full border text-sm font-bold", index === 2 ? "border-[var(--brand-violet-soft)] bg-[var(--brand-primary)]" : "border-white/12 bg-white/[0.04]")}>{number}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/42">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/8 bg-white/[0.035] p-6 sm:p-8">
            {[
              ["Регистрация ИП", "60%", "bg-[var(--brand-coral)]", "w-[60%]"],
              ["AI‑подготовка материалов", "85%", "bg-[var(--brand-primary)]", "w-[85%]"],
            ].map(([label, value, tone, width]) => (
              <div className="grid gap-3 py-4 sm:grid-cols-[15rem_1fr_4rem] sm:items-center" key={label}>
                <span className="text-sm font-semibold">{label}</span>
                <div className="h-2 overflow-hidden rounded-full bg-white/8"><span className={`motion-parallel-fill block h-full rounded-full ${tone} ${width}`} /></div>
                <span className="text-right text-sm font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-20 sm:py-28" id="segments">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">точный оффер под рекламу</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Для каждого сегмента — свой AI‑результат.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(segments).map(([slug, segment], index) => (
              <Link className="motion-flow-stage group rounded-[2rem] border border-black/8 bg-white p-5" data-reveal data-reveal-delay={String(index * 70)} href={`/for/${slug}`} key={slug}>
                <div className={cn("h-40 rounded-[1.4rem] transition-transform duration-500 group-hover:scale-[1.015]", index === 0 ? "bg-[var(--brand-primary)]" : index === 1 ? "bg-[var(--brand-coral)]" : index === 2 ? "bg-[var(--brand-mint)]" : "bg-[var(--brand-paper-deep)]")} />
                <span className="mt-5 block text-xs font-bold text-[var(--brand-primary)]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em]">{segment.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{segment.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)]">Посмотреть пример <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/6 bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">без скрытых обещаний</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Что готово, а что пока beta.</h2>
            <p className="mt-6 text-base leading-8 text-[var(--brand-muted)]">Тексты, карточки и визуальные брифы создаются сейчас. Финальная генерация сцен и модельная примерка помечены отдельно.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-reveal data-reveal-delay="100">
            <article className="rounded-[2rem] bg-[var(--brand-mint)] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em]">готово</p>
              <h3 className="mt-8 text-2xl font-semibold">AI‑пакет</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--brand-muted)]">Название, позиционирование, карточки, тексты, хуки и сценарии.</p>
            </article>
            <article className="rounded-[2rem] bg-[var(--brand-ink)] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-coral)]">beta</p>
              <h3 className="mt-8 text-2xl font-semibold">AI‑изображения</h3>
              <p className="mt-4 text-sm leading-7 text-white/50">Packshot, lifestyle‑сцены и модельная примерка из исходного изображения.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-primary)]">вопросы</p>
            <h2 className="font-editorial mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Перед стартом.</h2>
          </div>
          <div className="mt-12 grid gap-3">
            {faqs.map(([question, answer]) => (
              <details className="group rounded-[1.5rem] border border-black/8 bg-white px-5 open:bg-[var(--brand-lavender)]/55" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold [&::-webkit-details-marker]:hidden">{question}<span className="text-[var(--brand-primary)] transition-transform group-open:rotate-45">+</span></summary>
                <p className="border-t border-black/8 pb-5 pt-4 text-sm leading-7 text-[var(--brand-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-paper)] px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="premium-cta mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] px-7 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-16" data-reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-mint)]">начните с результата</p>
            <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">Создайте AI‑пакет и запускайтесь быстрее.</h2>
            <p className="mt-5 text-base leading-8 text-white/52">После результата вы сможете перейти к официальной регистрации ИП на сайте партнёра.</p>
          </div>
          <Link className="mt-8 inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-[var(--brand-ink)] lg:mt-0" href="/start">
            Создать AI‑пакет <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
