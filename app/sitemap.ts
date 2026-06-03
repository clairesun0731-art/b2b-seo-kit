import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.b2bseokit.com";

  const routes = [
    "/",
    "/b2b-seo-kit",
    "/b2b-seo-audit",
    "/b2b-seo-strategy",
    "/b2b-seo-brief-generator",
    "/about",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
