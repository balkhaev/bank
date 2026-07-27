import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

const siteUrl = "https://delopusk.ru";
const geologica = Geologica({
  subsets: ["cyrillic", "latin"],
  variable: "--font-geologica",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Делопуск — идея, бренд и открытие ИП без паузы",
    template: "%s · Делопуск",
  },
  description:
    "Сформируйте идею и рабочий бренд, подайте заявку на ИП и готовьте карточки, оффер и план запуска параллельно, пока идёт регистрация.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Делопуск",
  category: "business",
  creator: "Делопуск",
  keywords: [
    "идея бизнеса",
    "бренд для бизнеса",
    "запуск бизнеса",
    "открыть ИП",
    "регистрация ИП онлайн",
    "карточки для бизнеса",
    "позиционирование бизнеса",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Делопуск",
    title: "Делопуск — идея, ИП и материалы без потерянного времени",
    description:
      "Сначала сформируйте идею и бренд, затем подайте заявку на ИП и готовьте материалы параллельно с регистрацией.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Делопуск — запуск бизнеса без паузы",
    description:
      "Рабочий бренд, заявка на ИП и подготовка материалов в одном понятном маршруте.",
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
      <body className={`${geologica.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
