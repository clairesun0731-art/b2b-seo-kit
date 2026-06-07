// When adding a new live B2B SEO Kit tool, add it to the right registry below.
// Live tools automatically appear in the Tools dropdown, footer, and /b2b-seo-kit/ hub.
// Also update:
// 1. app/sitemap.ts
// 2. related tools sections where the new tool is relevant
// 3. page-level metadata and internal links
//
// Keep coming soon tools out of liveTools until their public page is ready.
export const seoTools = [
  {
    title: "B2B SEO Kit",
    shortTitle: "SEO Kit",
    href: "/b2b-seo-kit/",
    description:
      "Explore the full B2B SEO toolkit for audits, strategy, briefs, templates, and lead-focused workflows.",
    hubDescription:
      "Use the main B2B SEO Kit hub to move from audit to strategy, keyword mapping, content planning, internal links, and lead-focused page optimization.",
    cta: "Explore SEO Kit \u2192",
  },
  {
    title: "B2B SEO Audit Generator",
    shortTitle: "SEO Audit",
    href: "/b2b-seo-audit/",
    description:
      "Find what to fix first across technical SEO, commercial pages, internal links, and lead paths.",
    hubDescription:
      "Find what to fix first across technical SEO, commercial pages, internal links, AI search readiness, and lead paths.",
    cta: "Run SEO Audit \u2192",
  },
  {
    title: "B2B SEO Strategy Workflow Generator",
    shortTitle: "SEO Strategy",
    href: "/b2b-seo-strategy/",
    description:
      "Build a practical B2B SEO workflow for pages, content, links, and conversions.",
    hubDescription:
      "Create a practical B2B SEO workflow for keyword mapping, page priorities, content planning, internal links, and conversions.",
    cta: "Build SEO Strategy \u2192",
  },
  {
    title: "B2B SEO Brief Generator",
    shortTitle: "SEO Brief",
    href: "/b2b-seo-brief-generator/",
    description:
      "Create a B2B-focused content brief with search intent, outline, CTA, and internal links.",
    hubDescription:
      "Turn a topic into a B2B-focused content brief with search intent, outline, proof, CTA, and internal links.",
    cta: "Create Content Brief \u2192",
  },
  {
    title: "B2B SEO Template Generator",
    shortTitle: "SEO Template",
    href: "/b2b-seo-template/",
    description:
      "Build a reusable SEO planning template for B2B pages, keywords, content, and lead paths.",
    hubDescription:
      "Create a practical B2B SEO planning template with keyword mapping, page types, content workflow, internal links, and lead conversion paths.",
    cta: "Generate SEO Template \u2192",
  },
  {
    title: "B2B Keyword Research Template",
    shortTitle: "Keyword Research",
    href: "/b2b-keyword-research-template/",
    description:
      "Map B2B keywords to buyer intent, page types, commercial value, and conversion paths.",
    hubDescription:
      "Map B2B keywords by buyer intent, funnel stage, page type, commercial value, and conversion path.",
    cta: "Build Keyword Map \u2192",
  },
] as const;

export const leadGenerationCalculators = [
  {
    title: "B2B Lead Generation Calculators",
    shortTitle: "Calculators",
    href: "/b2b-lead-generation-calculators/",
    description:
      "Use simple calculators for lead cost, ROAS, CPM, and B2B website lead generation planning.",
    hubDescription:
      "Use simple calculators to estimate cost per lead, ROAS, CPM, and website lead generation potential.",
    cta: "Explore Calculators \u2192",
  },
  {
    title: "Lead Cost Calculator",
    shortTitle: "Lead Cost",
    href: "/lead-cost-calculator/",
    description:
      "Calculate cost per lead and cost per qualified lead for B2B campaigns and channels.",
    hubDescription:
      "Calculate cost per lead and cost per qualified lead, then get a practical next step for improving lead quality and conversion paths.",
    cta: "Calculate Lead Cost \u2192",
  },
  {
    title: "B2B Lead Generation Calculator",
    shortTitle: "Lead Generation",
    href: "/b2b-lead-generation-calculator/",
    description:
      "Estimate B2B leads, customers, revenue, cost per lead, and cost per customer.",
    hubDescription:
      "Estimate leads, customers, revenue, cost per lead, and cost per customer from traffic, conversion rates, deal value, and marketing spend.",
    cta: "Estimate Lead Funnel \u2192",
  },
  {
    title: "ROAS Calculator",
    shortTitle: "ROAS",
    href: "/roas-calculator/",
    description:
      "Calculate return on ad spend and understand paid campaign efficiency for B2B lead generation.",
    hubDescription:
      "Calculate return on ad spend from revenue and advertising cost, then connect paid campaign performance to pipeline planning.",
    cta: "Calculate ROAS \u2192",
  },
  {
    title: "CPM Calculator",
    shortTitle: "CPM",
    href: "/cpm-calculator/",
    description:
      "Calculate cost per thousand impressions for paid awareness and demand generation campaigns.",
    hubDescription:
      "Calculate CPM from ad spend and impressions so paid awareness campaigns can be compared with lead cost and funnel outcomes.",
    cta: "Calculate CPM \u2192",
  },
] as const;

export const liveTools = [...seoTools, ...leadGenerationCalculators] as const;

// Backward-compatible alias for existing page imports.
export const tools = liveTools;

export type Tool = (typeof liveTools)[number];

export function findTool(href: Tool["href"]) {
  return liveTools.find((tool) => tool.href === href);
}
