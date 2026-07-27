import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Делопуск — AI-студия запуска",
    short_name: "Делопуск",
    description: "Карточки, тексты, рекламные хуки и визуальные сценарии для запуска бизнеса.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#4e46c8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
