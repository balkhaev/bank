import type { Metadata, Viewport } from "next";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

const siteUrl = "https://delopusk.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Делопуск — открыть ИП онлайн за 0 ₽",
    template: "%s · Делопуск",
  },
  description:
    "Откройте ИП онлайн через Т‑Банк и бесплатно получите старт-пакет бизнеса: позиционирование, три промо-карточки и план первой недели.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
    "открыть ИП",
    "регистрация ИП онлайн",
    "ИП бесплатно",
    "старт бизнеса",
    "Т-Банк ИП",
    "карточки для бизнеса",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Делопуск",
    title: "Делопуск — открыть ИП онлайн за 0 ₽",
    description:
      "Регистрация ИП через Т‑Банк и бесплатный старт-пакет с первыми материалами для продвижения бизнеса.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — открыть ИП онлайн за 0 ₽",
    description:
      "Получите старт-пакет бизнеса и перейдите к регистрации ИП на официальной странице Т‑Банка.",
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

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffdd2d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
