import type { Metadata, Viewport } from "next";
import { Geologica, Lora } from "next/font/google";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

const siteUrl = "https://delopusk.ru";
const geologica = Geologica({ subsets: ["cyrillic", "latin"], variable: "--font-geologica" });
const lora = Lora({ subsets: ["cyrillic", "latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Делопуск — запустите своё дело с AI-командой", template: "%s · Делопуск" },
  description:
    "Делопуск помогает превратить идею в бренд, карточки, тексты, визуальные сценарии и материалы для первых продаж.",
  alternates: { canonical: "/" },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
    "запустить своё дело",
    "AI для запуска бизнеса",
    "AI карточки товара",
    "нейросеть для маркетплейса",
    "модельная примерка AI",
    "описание товара AI",
    "открыть ИП",
    "регистрация ИП онлайн",
    "запуск бренда",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Делопуск",
    title: "Запустите своё дело с AI-командой",
    description: "Из идеи — в бренд, карточки, тексты, визуалы и первые материалы для продаж.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — AI-команда для запуска своего дела",
    description: "Соберите первую рабочую версию бизнеса и подготовьте материалы для старта.",
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = { colorScheme: "dark light", themeColor: "#090812" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${geologica.variable} ${lora.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
