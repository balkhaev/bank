import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Делопуск — дело начинается здесь",
    short_name: "Делопуск",
    description:
      "Идея и бренд, онлайн-регистрация ИП и параллельная подготовка материалов для запуска.",
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
