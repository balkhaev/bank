import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Делопуск — запуск бизнеса без паузы",
    short_name: "Делопуск",
    description:
      "Идея и рабочий бренд, подача заявки на ИП и параллельная подготовка материалов к запуску.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#4e46c8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
