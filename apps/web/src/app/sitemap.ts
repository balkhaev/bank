import type { MetadataRoute } from "next";

const routes = [
  "",
  "/start",
  "/ip",
  "/for/marketplace",
  "/for/services",
  "/for/local",
  "/for/b2b",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route, index) => ({
    url: `https://delopusk.ru${route}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/start" || route === "/ip" ? 0.9 : 0.8,
  }));
}
