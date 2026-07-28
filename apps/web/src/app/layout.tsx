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
  title: { default: "Делопуск — AI-бонус за открытие ИП", template: "%s · Делопуск" },
  description:
    "Попробуйте 5 AI-действий бесплатно, получите ещё 12 после заявки на ИП и Pro на 30 дней после подтверждённой регистрации и открытия РКО.",
  alternates: { canonical: "/" },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
    "AI бонус за открытие ИП",
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
    title: "Откройте ИП — получите AI-команду для старта",
    description: "5 AI-действий сейчас, ещё 12 после заявки и Pro после подтверждения регистрации и РКО.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — AI-бонус для запуска бизнеса",
    description: "Попробуйте AI бесплатно и откройте расширенный доступ через регистрацию ИП у партнёра.",
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
