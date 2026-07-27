import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Делопуск — запустите дело без паузы",
    short_name: "Делопуск",
    description: "Персональный старт-пакет и переход к официальной онлайн-регистрации ИП у партнёра.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#4e46c8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
