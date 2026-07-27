import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

const siteUrl = "https://delopusk.ru";
const geologica = Geologica({ subsets: ["cyrillic", "latin"], variable: "--font-geologica" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Делопуск — запустите дело без паузы", template: "%s · Делопуск" },
  description:
    "Получите персональный старт-пакет, затем откройте ИП за 0 ₽ у партнёра и готовьте запуск, пока идут документы.",
  alternates: { canonical: "/" },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
    "открыть ИП",
    "регистрация ИП онлайн",
    "старт-пакет бизнеса",
    "название бизнеса",
    "карточки для бизнеса",
    "запуск бизнеса",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Делопуск",
    title: "Запустите дело без паузы",
    description: "Три вопроса, персональный старт-пакет и понятный переход к регистрации ИП.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — запустите дело без паузы",
    description: "Получите результат до перехода к официальной заявке на ИП.",
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

export const viewport: Viewport = { colorScheme: "light", themeColor: "#4e46c8" };

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
