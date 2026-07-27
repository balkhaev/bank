import type { Metadata, Viewport } from "next";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

const siteUrl = "https://delopusk.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Делопуск — старт бизнеса и открытие ИП онлайн",
    template: "%s · Делопуск",
  },
  description:
    "Соберите бесплатный старт-пакет бизнеса: позиционирование, три промо-карточки и план первой недели. Затем перейдите к официальной онлайн-регистрации ИП у партнёра.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
    "запуск бизнеса",
    "открыть ИП",
    "регистрация ИП онлайн",
    "старт-пакет бизнеса",
    "карточки для бизнеса",
    "позиционирование бизнеса",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Делопуск",
    title: "Делопуск — запустите дело, ИП без лишнего",
    description:
      "Независимый сервис для старта малого бизнеса: первые материалы и переход к официальной регистрации ИП у партнёра.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — запустите дело, ИП без лишнего",
    description:
      "Получите старт-пакет бизнеса и перейдите к регистрации ИП на официальной странице партнёра.",
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
  themeColor: "#4e46c8",
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
