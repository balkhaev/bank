import type { Metadata } from "next";

import "../index.css";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Открыть ИП онлайн за 0 ₽ + бесплатный старт-пакет",
  description:
    "Партнёрская информационная страница о бесплатной онлайн-регистрации ИП через Т‑Банк с генератором позиционирования и промо-карточек.",
  robots: {
    follow: false,
    index: false,
  },
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
