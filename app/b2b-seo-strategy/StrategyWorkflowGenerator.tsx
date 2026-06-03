"use client";

import { useMemo, useState } from "react";

const TALLY_URL = "https://tally.so/r/pbJK9J";

const websiteTypes = [
  "B2B SaaS",
  "B2B services / professional services",
  "Manufacturer / exporter",
  "Agency / consultant",
  "B2B ecommerce",
  "Content / directory website",
  "Marketplace / listing website",
] as const;

const roles = [
  "Founder / CEO",
  "Marketing manager",
  "SEO consultant",
  "Agency owner",
  "Revenue / sales team",
  "Content marketer",
] as const;

const seoGoals = [
  "Generate qualified leads",
  "Grow organic traffic",
  "Build topical authority",
  "Improve commercial / money pages",
  "Support sales conversations",
  "Improve AI search / GEO visibility",
] as const;

const improvementOptions = [
  "Keyword research",
  "SEO audit",
  "Blog content planning",
  "Product / service page SEO",
  "Category / listing page SEO",
  "Internal linking",
  "AI search / GEO visibility",
  "Lead conversion tracking",
] as const;

const contentStages = [
  "No content strategy yet",
  "Some pages but no clear strategy",
  "Blog traffic but weak conversion",
  "Many pages but weak structure",
  "Commercial pages need improvement",
  "Need a scalable SEO system",
] as const;

type WebsiteType = (typeof websiteTypes)[number];
type Role = (typeof roles)[number];
type SeoGoal = (typeof seoGoals)[number];
type Improvement = (typeof improvementOptions)[number];
type ContentStage = (typeof contentStages)[number];

type StrategySection = {
  title: string;
  items: string[];
};

type WebsiteRule = {
  focus: string;
  keyword: string;
  pages: string[];
  content: string[];
  internal: string[];
  conversion: string[];
  geo: string[];
};

const websiteRules: Record<WebsiteType, WebsiteRule> = {
  "B2B SaaS": {
    focus:
      "Prioritize use-case pages, comparison pages, integration pages, pain-point pages, and demo paths before scaling generic blog content.",
    keyword:
      "Group B2B SaaS keywords by problem, solution, feature, integration, comparison, alternative, and demo intent.",
    pages: [
      "Use-case pages for buyer roles, industries, workflows, or company sizes",
      "Comparison and alternative pages for evaluation-stage searches",
      "Integration pages where buyers check tool-stack fit",
      "Product or feature pages with proof, FAQs, and demo CTAs",
    ],
    content: [
      "Plan blog topics that answer buyer problems and link to relevant use-case or feature pages.",
      "Create pain-point guides that naturally move readers toward product evaluation.",
      "Use comparison content to help buyers decide fit without sounding defensive.",
    ],
    internal: [
      "Link pain-point guides to use-case, feature, integration, and demo pages.",
      "Link comparison pages to proof assets and product pages.",
      "Link high-impression blog posts to underlinked demo or trial paths.",
    ],
    conversion: [
      "Add demo or trial CTAs after use cases, proof sections, FAQs, and comparison tables.",
      "Make feature-to-outcome mapping clear on commercial pages.",
      "Track demo clicks, trial clicks, form submissions, and high-intent page visits.",
    ],
    geo: [
      "Add concise software category definitions and buyer-specific use case summaries.",
      "Use comparison tables, integration lists, FAQs, and clear entity descriptions.",
    ],
  },
  "B2B services / professional services": {
    focus:
      "Prioritize service pages, process clarity, proof, consultation paths, and content that supports qualified project inquiries.",
    keyword:
      "Group keywords by service category, buyer problem, industry, process, comparison, and consultation intent.",
    pages: [
      "Outcome-based service pages",
      "Industry or vertical service pages",
      "Methodology and process pages",
      "Case studies and consultation pages",
    ],
    content: [
      "Use educational content to explain problems your service solves, then link to the closest service page.",
      "Create guides around process, cost, scope, timelines, and common buyer questions.",
      "Build proof-led content that supports sales conversations.",
    ],
    internal: [
      "Link problem guides to service pages and case studies.",
      "Link service pages to methodology, proof, and consultation pages.",
      "Link high-intent FAQs to the page where the buyer can request help.",
    ],
    conversion: [
      "Add consultation CTAs near proof, process, and fit sections.",
      "Clarify service scope, exclusions, timeline, and expected outcomes.",
      "Track consultation clicks, form submissions, email clicks, and service page visits.",
    ],
    geo: [
      "Add clear service definitions, process summaries, FAQs, and expertise signals.",
      "Use named service categories, client types, industries, and outcomes.",
    ],
  },
  "Manufacturer / exporter": {
    focus:
      "Prioritize product category pages, application pages, certifications, buyer FAQs, country or market pages, and trust signals.",
    keyword:
      "Group keywords by product category, application, specification, certification, sourcing intent, OEM or ODM intent, and market.",
    pages: [
      "Product category pages with specs and applications",
      "Application pages for use-case searches",
      "Certification, QA, and compliance pages",
      "Country, export market, OEM, ODM, and RFQ pages",
    ],
    content: [
      "Plan content around applications, sourcing questions, specs, certifications, and buyer FAQs.",
      "Create guides that help procurement or technical buyers compare product options.",
      "Use blog content to support product category and application pages, not replace them.",
    ],
    internal: [
      "Link application guides to product category pages and RFQ pages.",
      "Link product pages to certifications, QA process, export capability, and buyer FAQs.",
      "Link country or market pages to relevant applications and product categories.",
    ],
    conversion: [
      "Add quote or RFQ CTAs near specs, applications, certifications, and proof sections.",
      "Show certifications, QA process, export capability, MOQ, lead time, and support details.",
      "Track RFQ submissions, quote clicks, email clicks, product category visits, and market page visits.",
    ],
    geo: [
      "Use entity-rich product descriptions with specs, applications, certifications, and markets served.",
      "Add direct answer blocks for supplier, manufacturer, application, and certification questions.",
    ],
  },
  "Agency / consultant": {
    focus:
      "Prioritize service pages, case studies, expertise pages, founder authority, and conversion paths for diagnostic or strategy calls.",
    keyword:
      "Group keywords by service, niche, problem, methodology, comparison, consultant, agency, and proof intent.",
    pages: [
      "Flagship service pages",
      "Niche or industry positioning pages",
      "Case studies and founder expertise pages",
      "Diagnostic, audit, or strategy call pages",
    ],
    content: [
      "Create content that shows methodology and helps buyers understand what good execution looks like.",
      "Use case studies and practical examples to support service page credibility.",
      "Plan comparison and objection-handling content for buyers evaluating providers.",
    ],
    internal: [
      "Link thought leadership to service pages, methodology pages, and case studies.",
      "Link service pages to proof, founder authority, and diagnostic CTAs.",
      "Link comparison content to the service page that matches the buyer need.",
    ],
    conversion: [
      "Add strategy call or diagnostic CTAs near methodology, proof, and fit sections.",
      "Clarify packages, process, outcomes, and who the service is best for.",
      "Track book-call clicks, form submissions, email clicks, and service page visits.",
    ],
    geo: [
      "Add clear descriptions of the agency niche, methodology, deliverables, and proof.",
      "Use FAQs, comparison tables, and founder expertise blocks that AI systems can summarize.",
    ],
  },
  "B2B ecommerce": {
    focus:
      "Prioritize category pages, product filters, product detail SEO, buying guides, and internal links from guides to commercial pages.",
    keyword:
      "Group keywords by category, product type, specification, material, application, comparison, purchase confidence, and bulk quote intent.",
    pages: [
      "Category pages with helpful intro copy and filters",
      "Product detail pages with specs, compatibility, and buying criteria",
      "Buying guides and comparison pages",
      "Quote, bulk order, or account pages",
    ],
    content: [
      "Create buying guides that help users choose products, then link to the right category pages.",
      "Use comparison content to explain specs, materials, applications, and fit.",
      "Improve category pages before publishing too many standalone blog posts.",
    ],
    internal: [
      "Link buying guides to categories, related subcategories, and high-value product pages.",
      "Link category pages to related categories, filters, and support pages.",
      "Link high-impression pages to underlinked commercial pages.",
    ],
    conversion: [
      "Add quote, account, or purchase CTAs near product specs, availability, and buying criteria.",
      "Show MOQ, lead time, shipping, returns, certifications, and support details where relevant.",
      "Track product views, category visits, quote clicks, account signups, and checkout assists.",
    ],
    geo: [
      "Add product category definitions, comparison tables, buying criteria, and FAQs.",
      "Use structured specs and clear category descriptions that can be summarized by AI search.",
    ],
  },
  "Content / directory website": {
    focus:
      "Prioritize category and listing page SEO, scalable internal linking, indexation hygiene, template quality, and long-tail keyword clusters.",
    keyword:
      "Map keywords to directory categories, listing templates, location or niche pages, and long-tail clusters before assigning them to blog posts.",
    pages: [
      "Top-level category pages with unique context",
      "Subcategory or filtered listing pages with real search demand",
      "Listing detail templates with enough unique value",
      "Editorial guides that support category pages",
    ],
    content: [
      "Improve category pages before writing too many standalone blog posts.",
      "Use blog or guide content to support category, listing, and comparison paths.",
      "Build long-tail clusters around category, niche, location, and buyer task combinations.",
    ],
    internal: [
      "Link category pages to related subcategories, popular listings, and supporting guides.",
      "Link editorial content back to the category or listing page that owns the search intent.",
      "Use breadcrumbs and related category links to make the directory easier to crawl.",
    ],
    conversion: [
      "Add clear actions on category and listing pages, such as submit listing, compare options, contact, save, or request info.",
      "Improve template quality so listing pages are useful and not too thin or repetitive.",
      "Track listing clicks, inquiry clicks, signup actions, CTA clicks, and high-intent category visits.",
    ],
    geo: [
      "Add concise category definitions, FAQs, comparison tables, and entity-rich listing descriptions.",
      "Address duplicate or thin page risks with unique intro copy, useful FAQs, and clear template rules.",
    ],
  },
  "Marketplace / listing website": {
    focus:
      "Prioritize category and listing page SEO, scalable internal linking, indexation hygiene, template quality, and long-tail keyword clusters.",
    keyword:
      "Map keywords to marketplace categories, listing templates, location pages, provider pages, and comparison clusters before creating generic blog posts.",
    pages: [
      "Marketplace category pages",
      "Provider, vendor, or listing detail pages",
      "Location, niche, or filtered listing pages where search demand is clear",
      "Comparison and buyer guide pages",
    ],
    content: [
      "Improve category and listing templates before scaling blog posts.",
      "Create buyer guides that explain how to compare providers, listings, or vendors.",
      "Build long-tail keyword clusters around category, location, use case, and buyer need.",
    ],
    internal: [
      "Link category pages to related categories, listings, locations, and buyer guides.",
      "Link buyer guides back to the most relevant marketplace category or listing path.",
      "Use breadcrumbs, related listings, and popular category links to support crawl paths.",
    ],
    conversion: [
      "Add CTAs that match marketplace intent: compare listings, contact provider, request quote, submit listing, or create account.",
      "Improve listing templates with unique descriptions, trust signals, availability, and next-step clarity.",
      "Track listing clicks, provider contacts, quote requests, account signups, and high-intent listing visits.",
    ],
    geo: [
      "Add clear marketplace category descriptions, structured comparison criteria, FAQs, and entity-rich listing details.",
      "Handle duplicate or thin listing risks with helpful template rules and unique category context.",
    ],
  },
};

const improvementRules: Record<Improvement, StrategySection> = {
  "Keyword research": {
    title: "Keyword research",
    items: [
      "Create a keyword map before writing or rewriting pages.",
      "Group keywords by intent: commercial, informational, comparison, use-case, and support.",
      "Assign each keyword cluster to one page type so blog posts do not compete with commercial, category, or listing pages.",
    ],
  },
  "SEO audit": {
    title: "Mini audit checklist",
    items: [
      "Check indexation, page templates, metadata, internal links, page speed, duplicate or thin content, and conversion paths.",
      "List pages with no clear keyword, no useful CTA, weak metadata, or very similar template content.",
      "Review whether important pages are crawlable and linked from relevant category, blog, or commercial pages.",
    ],
  },
  "Blog content planning": {
    title: "Blog content planning",
    items: [
      "Plan blog topics that support commercial, category, or listing pages instead of isolated traffic posts.",
      "Create guides for buyer questions, then add contextual links to the page where the user can evaluate or act.",
      "Refresh high-impression posts with stronger internal links, clearer answers, and better next steps.",
    ],
  },
  "Product / service page SEO": {
    title: "Product / service page SEO",
    items: [
      "Improve title tags, H1s, buyer pain points, FAQs, proof, comparison sections, CTAs, and internal links.",
      "Add outcome-focused sections so product or service pages explain business value, not only features.",
      "Place proof and CTAs near the sections where buyers are likely to decide fit.",
    ],
  },
  "Category / listing page SEO": {
    title: "Category / listing page SEO",
    items: [
      "Improve category intro copy, category-specific FAQs, unique descriptions, and links to related categories.",
      "Use indexable filters only where there is real search demand and enough unique value.",
      "Make listing templates useful with specific details, trust signals, and clear next steps.",
    ],
  },
  "Internal linking": {
    title: "Internal linking",
    items: [
      "Link from blog and support pages to money pages, category pages, listing pages, and conversion pages.",
      "Link from category pages to related subcategories, listings, guides, and high-intent pages.",
      "Use high-impression pages to support underlinked conversion pages.",
    ],
  },
  "AI search / GEO visibility": {
    title: "AI search / GEO visibility",
    items: [
      "Add clear entity descriptions, concise answer blocks, FAQs, comparison tables, and structured summaries.",
      "Show founder, company, product, service, category, or marketplace credibility where it supports trust.",
      "Make each priority page easy for AI search systems to cite without needing vague surrounding context.",
    ],
  },
  "Lead conversion tracking": {
    title: "Lead conversion tracking",
    items: [
      "Track form submissions, email clicks, CTA clicks, demo or book-call clicks, and high-intent page visits.",
      "Separate traffic metrics from lead-quality metrics so SEO decisions do not chase empty sessions.",
      "Review conversion by landing page before scaling more content.",
    ],
  },
};

const stageRules: Record<ContentStage, string[]> = {
  "No content strategy yet": [
    "Choose the pages closest to revenue or user intent first.",
    "Create a simple keyword-to-page map before publishing a large blog library.",
    "Build one repeatable brief template for future pages.",
  ],
  "Some pages but no clear strategy": [
    "Inventory existing pages and assign each one a role: commercial, category, listing, educational, proof, or conversion.",
    "Improve pages with unclear intent before adding many new URLs.",
    "Create internal links from existing pages to the pages that matter most.",
  ],
  "Blog traffic but weak conversion": [
    "Find high-traffic posts that do not send users to commercial, category, listing, or contact paths.",
    "Add contextual CTAs and links where the reader shows evaluation intent.",
    "Improve destination pages so traffic has somewhere useful to go.",
  ],
  "Many pages but weak structure": [
    "Clean up page templates, duplicate topics, weak internal links, and thin pages in a calm, prioritized way.",
    "Strengthen top category, listing, product, or service pages before expanding long-tail content.",
    "Use related links and breadcrumbs to make the structure easier to understand.",
  ],
  "Commercial pages need improvement": [
    "Start with pages closest to revenue or user intent.",
    "Improve the first paragraph, proof, FAQs, comparison sections, CTAs, and internal links.",
    "Track whether those pages produce qualified actions before publishing more content.",
  ],
  "Need a scalable SEO system": [
    "Document page templates, internal linking rules, indexation rules, content brief fields, and CTA standards.",
    "Create a monthly workflow for audits, content updates, internal links, and conversion tracking.",
    "Use repeatable rules without turning the site into a complex SEO dashboard.",
  ],
};

const goalRules: Record<SeoGoal, string[]> = {
  "Generate qualified leads": [
    "Prioritize pages that can create qualified inquiries, demos, RFQs, or sales conversations.",
    "Review whether each high-intent page has a clear CTA and proof section.",
  ],
  "Grow organic traffic": [
    "Grow traffic through keyword clusters that can eventually support commercial, category, or listing pages.",
    "Avoid publishing traffic-only content with no useful next step.",
  ],
  "Build topical authority": [
    "Build topic clusters with a clear hub page, supporting guides, and internal links to priority pages.",
    "Make each cluster support a product, service, category, marketplace path, or buyer decision.",
  ],
  "Improve commercial / money pages": [
    "Improve money pages before expanding the blog.",
    "Use buyer pain points, proof, FAQs, comparison sections, and conversion CTAs.",
  ],
  "Support sales conversations": [
    "Build pages that answer objections, explain fit, show proof, and help sales share the right resource.",
    "Add content for pricing, implementation, comparisons, and buyer questions.",
  ],
  "Improve AI search / GEO visibility": [
    "Add direct answers, definitions, structured lists, FAQs, comparison tables, and entity-rich summaries.",
    "Make key sections extractable and useful without keyword stuffing.",
  ],
};

function uniqueItems(items: string[]) {
  return Array.from(new Set(items)).filter(Boolean);
}

function isDirectoryLike(websiteType: WebsiteType) {
  return websiteType === "Content / directory website" || websiteType === "Marketplace / listing website";
}

function buildActionPlan({
  websiteType,
  role,
  seoGoal,
  improvements,
  contentStage,
}: {
  websiteType: WebsiteType;
  role: Role;
  seoGoal: SeoGoal;
  improvements: Improvement[];
  contentStage: ContentStage;
}) {
  const website = websiteRules[websiteType];
  const selectedRules = improvements.map((item) => improvementRules[item]);
  const founderMode = role === "Founder / CEO";
  const selectedText = improvements.length ? improvements : ["Keyword research" as Improvement];
  const directoryLike = isDirectoryLike(websiteType);

  const priorityFocus = uniqueItems([
    website.focus,
    ...goalRules[seoGoal],
    ...stageRules[contentStage],
    founderMode
      ? "Keep this weekly and practical: start with the pages closest to revenue or user intent, then improve links and CTAs."
      : "",
    directoryLike
      ? "For directory or listing-style sites, improve category and listing templates before creating too many standalone blog posts."
      : "",
  ]).slice(0, 6);

  const keywordDirection = uniqueItems([
    website.keyword,
    improvements.includes("Keyword research")
      ? "Build a keyword map with commercial, informational, comparison, use-case, and support intent groups."
      : "Use simple keyword grouping so every page has one job and one next step.",
    directoryLike
      ? "Map long-tail keywords to category, listing, location, niche, or provider pages when those pages best match intent."
      : "Map high-intent keywords to product, service, category, comparison, use-case, or contact paths before assigning blog topics.",
    "Use blog content for support, not as the default destination for every keyword.",
  ]);

  const pagesToImprove = uniqueItems([
    ...website.pages,
    improvements.includes("Category / listing page SEO")
      ? "Category or listing pages with weak intro copy, missing FAQs, or thin repeated descriptions"
      : "",
    improvements.includes("Product / service page SEO")
      ? "Product or service pages with weak titles, thin proof, unclear CTAs, or few internal links"
      : "",
    founderMode ? "The 3-5 pages closest to revenue, user intent, or a qualified next step" : "",
  ]).slice(0, 8);

  const contentPlan = uniqueItems([
    ...website.content,
    ...selectedRules.flatMap((rule) => (rule.title === "Blog content planning" ? rule.items : [])),
    directoryLike
      ? "Use supporting guides to strengthen category and listing pages, not to create isolated traffic."
      : "Use supporting articles to strengthen commercial pages and buyer confidence.",
  ]).slice(0, 7);

  const internalPlan = uniqueItems([
    ...website.internal,
    ...(improvements.includes("Internal linking") ? improvementRules["Internal linking"].items : []),
    "Add links from high-impression pages to underlinked priority pages.",
  ]).slice(0, 7);

  const conversionFixes = uniqueItems([
    ...website.conversion,
    ...(improvements.includes("Product / service page SEO")
      ? improvementRules["Product / service page SEO"].items
      : []),
    ...(improvements.includes("Category / listing page SEO")
      ? improvementRules["Category / listing page SEO"].items
      : []),
    ...(improvements.includes("Lead conversion tracking")
      ? improvementRules["Lead conversion tracking"].items
      : []),
    founderMode ? "Choose one conversion event you can check every week without building a dashboard." : "",
  ]).slice(0, 8);

  const geoReadiness = uniqueItems([
    ...website.geo,
    ...(improvements.includes("AI search / GEO visibility")
      ? improvementRules["AI search / GEO visibility"].items
      : []),
    "Add concise answer blocks, clear definitions, FAQs, comparison tables, and structured summaries to priority pages.",
    "Use specific entity language for your company, audience, category, listings, products, services, locations, or use cases.",
  ]).slice(0, 7);

  const thisWeek = uniqueItems([
    founderMode
      ? "Pick one revenue or high-intent page and improve it before touching the rest of the site."
      : "Pick one priority page type and improve the highest-impact page first.",
    improvements.includes("SEO audit")
      ? "Run a mini audit for indexation, page templates, metadata, internal links, page speed, duplicate or thin content, and conversion paths."
      : "Review one page for keyword intent, internal links, proof, and CTA clarity.",
    improvements.includes("Keyword research")
      ? "Create a simple keyword-to-page map with intent groups."
      : "Choose one keyword cluster and decide which page should own it.",
    improvements.includes("Internal linking")
      ? "Add 5-10 internal links from relevant pages to your priority pages."
      : "Add 3 internal links to one underlinked priority page.",
    improvements.includes("AI search / GEO visibility")
      ? "Add a direct answer block and FAQ section to one priority page."
      : "Add one concise summary section to make the page easier to understand.",
    improvements.includes("Lead conversion tracking")
      ? "Track form submissions, email clicks, CTA clicks, demo or book-call clicks, and high-intent page visits."
      : "Write down the conversion action you expect from the page.",
  ]);

  const auditAgain = [
    "Run a light audit after you update the first priority pages, not only after publishing new content.",
    "Review again when you add a new page template, category group, product/service section, or major internal linking pattern.",
    "Repeat monthly for indexation, internal links, thin pages, metadata, conversion paths, and AI search readiness.",
    directoryLike
      ? "For directory and listing sites, audit template quality and indexation hygiene whenever listing volume grows."
      : "For B2B sites, audit whenever traffic grows but qualified leads do not follow.",
  ];

  return {
    selectedText,
    sections: [
      { title: "Your SEO Priority Focus", items: priorityFocus },
      { title: "Keyword Research Direction", items: keywordDirection },
      { title: "Pages to Improve First", items: pagesToImprove },
      { title: "Content Plan", items: contentPlan },
      { title: "Internal Linking Plan", items: internalPlan },
      { title: "Commercial / Conversion Page Fixes", items: conversionFixes },
      { title: "AI Search / GEO Readiness", items: geoReadiness },
      { title: "This Week’s SEO Action Plan", items: thisWeek },
      { title: "When to Run an Audit Again", items: auditAgain },
    ],
  };
}

const defaultImprovements: Improvement[] = [
  "Keyword research",
  "SEO audit",
  "Blog content planning",
  "Product / service page SEO",
  "AI search / GEO visibility",
  "Internal linking",
];

export default function StrategyWorkflowGenerator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("Content / directory website");
  const [role, setRole] = useState<Role>("Founder / CEO");
  const [seoGoal, setSeoGoal] = useState<SeoGoal>("Improve AI search / GEO visibility");
  const [improvements, setImprovements] = useState<Improvement[]>(defaultImprovements);
  const [contentStage, setContentStage] = useState<ContentStage>("Many pages but weak structure");
  const [hasGenerated, setHasGenerated] = useState(true);

  const actionPlan = useMemo(
    () => buildActionPlan({ websiteType, role, seoGoal, improvements, contentStage }),
    [contentStage, improvements, role, seoGoal, websiteType],
  );

  function toggleImprovement(option: Improvement) {
    setImprovements((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  function handleGenerate() {
    setHasGenerated(true);
  }

  return (
    <section id="strategy-generator" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Interactive Tool
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Generate a Founder-Friendly SEO Action Plan
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Get a practical SEO workflow for keyword research, content planning, internal linking,
            commercial pages, and AI search visibility without building a complex SEO dashboard.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Inputs
            </p>

            <div className="space-y-5">
              <SelectField
                label="Website Type"
                helper="Choose the site model closest to how your SEO pages work."
                value={websiteType}
                options={websiteTypes}
                onChange={(value) => setWebsiteType(value as WebsiteType)}
              />
              <SelectField
                label="Your Role"
                helper="The output changes tone and priority based on who will act on it."
                value={role}
                options={roles}
                onChange={(value) => setRole(value as Role)}
              />
              <SelectField
                label="Main SEO Goal"
                helper="Pick the business outcome this strategy should support."
                value={seoGoal}
                options={seoGoals}
                onChange={(value) => setSeoGoal(value as SeoGoal)}
              />

              <div>
                <p className="mb-2 text-sm font-semibold text-slate-800">
                  What do you want to improve?
                </p>
                <p className="mb-3 text-xs leading-relaxed text-slate-500">
                  Select one or more areas. The plan stays useful even with a single priority.
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {improvementOptions.map((option) => {
                    const checked = improvements.includes(option);
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-start gap-2 rounded-2xl border px-3 py-2.5 text-sm transition ${
                          checked
                            ? "border-blue-200 bg-blue-50 text-slate-900"
                            : "border-slate-200 bg-[#F8FAFC] text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleImprovement(option)}
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600"
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <SelectField
                label="Current Content Stage"
                helper="This helps the tool decide whether to audit, organize, refresh, or scale."
                value={contentStage}
                options={contentStages}
                onChange={(value) => setContentStage(value as ContentStage)}
              />

              <button
                type="button"
                onClick={handleGenerate}
                className="w-full rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Generate Strategy Workflow
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5 sm:p-6">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Generated Output
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    B2B SEO Strategy Workflow Generator
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Rule-based plan for {role.toLowerCase()} working on a{" "}
                    {websiteType.toLowerCase()}.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Founder-friendly
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {actionPlan.selectedText.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {hasGenerated ? (
              <div className="divide-y divide-slate-100">
                {actionPlan.sections.map((section, index) => (
                  <OutputSection key={section.title} section={section} index={index + 1} />
                ))}

                <div className="bg-blue-50 p-5 sm:p-6">
                  <p className="mb-2 text-sm font-semibold text-slate-900">
                    Take this strategy further
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    Turn this action plan into a repeatable checklist for keyword mapping, page
                    fixes, internal links, and AI search readiness.
                  </p>
                  <a
                    href={TALLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    Get the B2B SEO Strategy Checklist — Free
                  </a>
                  <a
                    href="/b2b-seo-audit/"
                    className="mt-4 block text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Not sure where your site stands? Run the B2B SEO Audit first →
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  helper,
  value,
  options,
  onChange,
}: {
  label: string;
  helper: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-slate-800">{label}</span>
      <span className="mb-2 block text-xs leading-relaxed text-slate-500">{helper}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function OutputSection({
  section,
  index,
}: {
  section: StrategySection;
  index: number;
}) {
  return (
    <section className="p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
          {index}
        </span>
        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {section.title}
        </h4>
      </div>
      <ul className="space-y-2.5">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
