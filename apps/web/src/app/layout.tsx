import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

const siteUrl = "https://delopusk.ru";
const geologica = Geologica({ subsets: ["cyrillic", "latin"], variable: "--font-geologica" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Делопуск — ваша AI-команда для запуска", template: "%s · Делопуск" },
  description:
    "AI создаст название, карточки товара, тексты каталога, рекламные хуки и визуальные сценарии. После результата можно открыть ИП за 0 ₽ у партнёра.",
  alternates: { canonical: "/" },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
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
    title: "Ваша AI-команда для запуска",
    description: "Карточки, тексты, рекламные идеи и визуальные сценарии до перехода к регистрации ИП.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — AI-студия запуска",
    description: "Дайте три вводных и получите персональный AI-пакет для запуска бизнеса.",
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

export const viewport: Viewport = { colorScheme: "light dark", themeColor: "#0b0a12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${geologica.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
