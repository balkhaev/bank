import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Делопуск — запуск бизнеса онлайн",
    short_name: "Делопуск",
    description:
      "Бесплатный старт-пакет бизнеса и переход к регистрации ИП через Т‑Банк.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f1",
    theme_color: "#ffdd2d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
