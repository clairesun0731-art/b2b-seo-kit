import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.b2bseokit.com";

  const routes = [
    { path: "/", priority: 1 },
    { path: "/blog", priority: 0.75 },
    { path: "/b2b-seo-kit", priority: 0.8 },
    { path: "/b2b-seo-audit", priority: 0.8 },
    { path: "/b2b-seo-strategy", priority: 0.8 },
    { path: "/b2b-seo-brief-generator", priority: 0.8 },
    { path: "/b2b-seo-template", priority: 0.8 },
    { path: "/b2b-keyword-research-template", priority: 0.8 },
    { path: "/b2b-lead-generation-calculators", priority: 0.8 },
    { path: "/how-to-calculate-cost-per-lead", priority: 0.72 },
    { path: "/estimate-leads-from-website-traffic", priority: 0.72 },
    { path: "/how-to-calculate-roas", priority: 0.72 },
    { path: "/what-is-cpm", priority: 0.72 },
    { path: "/lead-cost-calculator", priority: 0.75 },
    { path: "/b2b-lead-generation-calculator", priority: 0.75 },
    { path: "/roas-calculator", priority: 0.7 },
    { path: "/cpm-calculator", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: route.path === "/" ? `${baseUrl}/` : `${baseUrl}${route.path}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
