import type { MetadataRoute } from "next";

const routes = [
  "",
  "/idea",
  "/ip",
  "/materials",
  "/guides",
  "/guides/idea-and-brand",
  "/guides/open-ip",
  "/guides/first-materials",
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
    priority: index === 0 ? 1 : route.startsWith("/guides/") ? 0.65 : 0.8,
  }));
}
