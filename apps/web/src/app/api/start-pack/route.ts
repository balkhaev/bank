import { NextResponse } from "next/server";
import { z } from "zod";

const inputSchema = z.object({
  audience: z.string().trim().min(2).max(100),
  businessType: z.enum(["marketplace", "services", "local", "b2b"]),
  subject: z.string().trim().min(3).max(120),
  tone: z.enum(["confident", "friendly", "premium"]),
});

const shortLineSchema = z.string().trim().min(1).max(80);

const cardSchema = z.object({
  bullets: z.tuple([
    shortLineSchema.max(38),
    shortLineSchema.max(38),
    shortLineSchema.max(38),
  ]),
  cta: shortLineSchema.max(26),
  subtitle: z.string().trim().min(1).max(90),
  theme: z.enum(["sun", "ink", "paper"]),
  title: z.string().trim().min(1).max(38),
});

const checklistItemSchema = z.string().trim().min(1).max(120);

const launchPackSchema = z.object({
  cards: z.tuple([cardSchema, cardSchema, cardSchema]),
  checklist: z.tuple([
    checklistItemSchema,
    checklistItemSchema,
    checklistItemSchema,
    checklistItemSchema,
    checklistItemSchema,
  ]),
  positioning: z.string().trim().min(1).max(220),
  projectName: z.string().trim().min(1).max(42),
});

type Input = z.infer<typeof inputSchema>;
type LaunchPack = z.infer<typeof launchPackSchema>;

type RateEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;

const globalRateState = globalThis as typeof globalThis & {
  __startPackRateLimit?: Map<string, RateEntry>;
};

const rateLimitStore =
  globalRateState.__startPackRateLimit ??
  (globalRateState.__startPackRateLimit = new Map<string, RateEntry>());

const typeLabels: Record<Input["businessType"], string> = {
  b2b: "услуги для компаний",
  local: "локальный бизнес",
  marketplace: "товар для маркетплейса",
  services: "услуга или частная практика",
};

const toneLabels: Record<Input["tone"], string> = {
  confident: "уверенный и конкретный",
  friendly: "дружелюбный и простой",
  premium: "сдержанный и премиальный",
};

function cleanLabel(value: string) {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim();
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .slice(0, 3)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function buildFallbackPack(input: Input): LaunchPack {
  const subject = cleanLabel(input.subject);
  const audience = cleanLabel(input.audience);
  const projectName = titleCase(subject) || "Новый проект";

  const templates: Record<Input["businessType"], LaunchPack["cards"]> = {
    marketplace: [
      {
        bullets: ["Понятная выгода", "Акцент на деталях", "Готово к заказу"],
        cta: "Посмотреть товар",
        subtitle: `Для ${audience}: быстро понять пользу и выбрать подходящий вариант.`,
        theme: "sun",
        title: subject,
      },
      {
        bullets: ["Что внутри", "Кому подходит", "Почему удобно"],
        cta: "Узнать больше",
        subtitle: "Карточка с короткой структурой для каталога, рекламы или соцсетей.",
        theme: "ink",
        title: "Главное — за 5 секунд",
      },
      {
        bullets: ["Без лишних слов", "Три ключевые причины", "Чёткий следующий шаг"],
        cta: "Выбрать вариант",
        subtitle: `Черновик позиционирования продукта «${subject}».`,
        theme: "paper",
        title: "Почему это выбирают",
      },
    ],
    services: [
      {
        bullets: ["Понятный результат", "Прозрачный процесс", "Удобный старт"],
        cta: "Обсудить задачу",
        subtitle: `${subject} для ${audience} — без перегруженных формулировок.`,
        theme: "sun",
        title: "Решим задачу по шагам",
      },
      {
        bullets: ["Разберём запрос", "Предложим план", "Доведём до результата"],
        cta: "Получить план",
        subtitle: "Промо-карточка для сайта, объявления или сообщения клиенту.",
        theme: "ink",
        title: projectName,
      },
      {
        bullets: ["Кому подходит", "Что получите", "Как начать"],
        cta: "Начать с консультации",
        subtitle: `Короткий оффер для аудитории: ${audience}.`,
        theme: "paper",
        title: "Всё важное — сразу",
      },
    ],
    local: [
      {
        bullets: ["Рядом и удобно", "Понятные условия", "Быстрый ответ"],
        cta: "Уточнить детали",
        subtitle: `${subject} для ${audience} с акцентом на локальное доверие.`,
        theme: "sun",
        title: "Ваш бизнес рядом",
      },
      {
        bullets: ["Что предлагаем", "Как заказать", "Когда получить"],
        cta: "Оставить запрос",
        subtitle: "Готовый каркас рекламной карточки для геосервисов и соцсетей.",
        theme: "ink",
        title: projectName,
      },
      {
        bullets: ["Без сложных шагов", "Человеческий сервис", "Понятный результат"],
        cta: "Связаться",
        subtitle: `Предложение, рассчитанное на ${audience}.`,
        theme: "paper",
        title: "Можно начать сегодня",
      },
    ],
    b2b: [
      {
        bullets: ["Экономим время", "Снижаем ручную работу", "Даём понятный результат"],
        cta: "Запросить расчёт",
        subtitle: `${subject} для ${audience} — конкретно, без рекламного шума.`,
        theme: "sun",
        title: "Решение для бизнеса",
      },
      {
        bullets: ["Задача", "Подход", "Измеримый результат"],
        cta: "Получить предложение",
        subtitle: "Структура карточки для коммерческого предложения и деловой переписки.",
        theme: "ink",
        title: projectName,
      },
      {
        bullets: ["Быстрый старт", "Прозрачные этапы", "Ответственный контакт"],
        cta: "Обсудить проект",
        subtitle: `Позиционирование для аудитории: ${audience}.`,
        theme: "paper",
        title: "От запроса к результату",
      },
    ],
  };

  return {
    cards: templates[input.businessType],
    checklist: [
      "Уточнить основной продукт и одно главное обещание клиенту.",
      "Проверить доступность названия и домена проекта.",
      "Подготовить 3–5 примеров работ, товаров или сценариев использования.",
      "Собрать короткий прайс или правила расчёта стоимости.",
      "Открыть ИП и отделить личные расчёты от бизнес-операций.",
    ],
    positioning: `${subject} для ${audience}: понятное предложение, конкретная польза и простой следующий шаг.`,
    projectName,
  };
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function extractOutputText(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const response = payload as {
    output?: Array<{ content?: Array<{ text?: string; type?: string }> }>;
    output_text?: string;
  };

  if (typeof response.output_text === "string") {
    return response.output_text;
  }

  for (const item of response.output ?? []) {
    for (const content of item.content ?? []) {
      if (content.type === "output_text" && typeof content.text === "string") {
        return content.text;
      }
    }
  }

  return null;
}

async function generateWithOpenAI(input: Input) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 18_000);

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      body: JSON.stringify({
        input: JSON.stringify({
          audience: cleanLabel(input.audience),
          businessType: typeLabels[input.businessType],
          subject: cleanLabel(input.subject),
          tone: toneLabels[input.tone],
        }),
        instructions:
          "Ты конверсионный редактор для малого бизнеса в России. Создай полезный старт-пакет на русском языке. Не давай юридических, налоговых или финансовых рекомендаций. Не используй обещания гарантированного результата, превосходную степень, ложную срочность или неподтверждённые цифры. Пиши конкретно и естественно. Карточки должны подходить для маркетплейса, соцсетей или лендинга в зависимости от типа бизнеса. Заголовок карточки до 38 знаков, подзаголовок до 90, каждый буллет до 38, CTA до 26. Верни только данные по схеме.",
        max_output_tokens: 1200,
        model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
        reasoning: { effort: "low" },
        store: false,
        text: {
          format: {
            name: "small_business_launch_pack",
            schema: {
              additionalProperties: false,
              properties: {
                cards: {
                  items: {
                    additionalProperties: false,
                    properties: {
                      bullets: {
                        items: { maxLength: 38, minLength: 1, type: "string" },
                        maxItems: 3,
                        minItems: 3,
                        type: "array",
                      },
                      cta: { maxLength: 26, minLength: 1, type: "string" },
                      subtitle: { maxLength: 90, minLength: 1, type: "string" },
                      theme: { enum: ["sun", "ink", "paper"], type: "string" },
                      title: { maxLength: 38, minLength: 1, type: "string" },
                    },
                    required: ["title", "subtitle", "bullets", "cta", "theme"],
                    type: "object",
                  },
                  maxItems: 3,
                  minItems: 3,
                  type: "array",
                },
                checklist: {
                  items: { maxLength: 120, minLength: 1, type: "string" },
                  maxItems: 5,
                  minItems: 5,
                  type: "array",
                },
                positioning: { maxLength: 220, minLength: 1, type: "string" },
                projectName: { maxLength: 42, minLength: 1, type: "string" },
              },
              required: ["projectName", "positioning", "cards", "checklist"],
              type: "object",
            },
            strict: true,
            type: "json_schema",
          },
        },
      }),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const payload: unknown = await response.json();
    const outputText = extractOutputText(payload);
    if (!outputText) {
      return null;
    }

    return launchPackSchema.parse(JSON.parse(outputText));
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Слишком много запросов. Попробуйте ещё раз через несколько минут." },
      { status: 429 },
    );
  }

  let rawInput: unknown;
  try {
    rawInput = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос." }, { status: 400 });
  }

  const parsedInput = inputSchema.safeParse(rawInput);
  if (!parsedInput.success) {
    return NextResponse.json(
      { error: "Заполните направление, продукт и аудиторию короткими понятными фразами." },
      { status: 400 },
    );
  }

  const aiPack = await generateWithOpenAI(parsedInput.data);
  const pack = aiPack ?? buildFallbackPack(parsedInput.data);

  return NextResponse.json(
    {
      mode: aiPack ? "ai" : "template",
      pack,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
