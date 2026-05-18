"use client";

import { useMemo, useState } from "react";

const TALLY_URL = "https://tally.so/r/pbJK9J";

const websiteTypes = [
  "B2B SaaS",
  "B2B service business",
  "Manufacturer / exporter",
  "Agency / consultant",
  "B2B ecommerce",
] as const;

const seoGoals = [
  "More qualified leads",
  "Better product page rankings",
  "More content traffic",
  "Improve AI search visibility",
  "Prepare before hiring an SEO agency",
] as const;

const seoStages = [
  "Starting from scratch",
  "Some content but little traffic",
  "Traffic but few leads",
  "Need to scale SEO workflow",
] as const;

type WebsiteType = (typeof websiteTypes)[number];
type SeoGoal = (typeof seoGoals)[number];
type SeoStage = (typeof seoStages)[number];

type PlanBlock = {
  priorities: string[];
  checks: string[];
  fixes: string[];
  internalLinks: string[];
  conversionPaths: string[];
  geoReadiness: string[];
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  }
}

const goalPlans: Record<SeoGoal, PlanBlock> = {
  "More qualified leads": {
    priorities: [
      "Find the product, service, or solution pages most likely to create qualified B2B leads, then audit those before low-intent blog content.",
      "Check whether every high-intent landing page has a clear demo, quote, consultation, or inquiry path.",
    ],
    checks: [
      "List the pages that already get buyer-intent traffic and mark whether each page has a visible CTA above the fold.",
      "Check whether commercial pages explain the buyer problem, use case, proof, and next step without forcing visitors back to the homepage.",
      "Review form, demo, quote, or consultation tracking by landing page so lead quality can be judged by page, not only by total traffic.",
      "Identify blog posts that get traffic but do not link to a relevant commercial page.",
      "Add proof elements such as case studies, certifications, reviews, customer logos, project examples, or technical validation where buyers hesitate.",
    ],
    fixes: [
      "Choose three commercial pages that can create qualified leads and make their CTA path clearer this week.",
      "Add one contextual CTA to each high-traffic blog post that currently has no buyer next step.",
    ],
    internalLinks: [
      "Link educational blog posts to the closest product, service, solution, category, or application page using descriptive anchor text.",
      "Create a short list of money pages and make sure each one receives links from relevant guides, FAQs, and comparison content.",
    ],
    conversionPaths: [
      "Track form submissions by landing page and separate demo, quote, consultation, and general contact leads.",
      "Add a specific CTA near the first proof section, not only at the bottom of the page.",
      "Use inquiry language that matches the buyer path: demo request for SaaS, quote request for products, consultation for services.",
    ],
    geoReadiness: [
      "Add concise definitions near the top of priority pages so AI search systems can summarize the offer correctly.",
      "Add FAQ blocks that answer buyer questions about fit, use cases, pricing model, implementation, specs, or proof.",
    ],
  },
  "Better product page rankings": {
    priorities: [
      "Audit product and solution pages before creating more informational content.",
      "Map buying-intent keywords to pages that can rank and convert, not to generic blog posts.",
    ],
    checks: [
      "Compare each product page title and H1 with the search intent of the target keyword.",
      "Check whether product pages include use cases, specs, integrations, comparison points, FAQs, and trust sections.",
      "Review whether product pages are internally linked from relevant guides, categories, resources, and homepage sections.",
      "Find thin product pages that describe features but do not explain buyer problems, applications, or proof.",
      "Add structured sections for product page SEO: who it is for, use cases, proof, FAQs, and next step.",
    ],
    fixes: [
      "Pick one under-optimized product or solution page and add use-case, specs, comparison, FAQ, and proof sections.",
      "Rewrite the title and H1 around a buying-intent keyword instead of an internal product label.",
    ],
    internalLinks: [
      "Link from educational content to product pages where the reader naturally moves from problem research to solution evaluation.",
      "Add links from related category, feature, solution, and comparison pages back to the priority product page.",
    ],
    conversionPaths: [
      "Place a demo, quote, or inquiry CTA after the first product proof section and again near the bottom.",
      "Add trust signals close to the CTA so buyers can act without searching for proof elsewhere.",
    ],
    geoReadiness: [
      "Add product definitions, feature explanations, and comparison sections that are easy for LLMs to extract.",
      "Use FAQ blocks to answer product-fit, implementation, spec, and alternative questions.",
    ],
  },
  "More content traffic": {
    priorities: [
      "Turn keyword data into clusters with a clear page type: guide, product page, solution page, comparison page, or checklist.",
      "Fix content-to-commercial paths so blog traffic can support pipeline instead of stopping at pageviews.",
    ],
    checks: [
      "Group keywords by problem, solution, product, comparison, template, and buying-stage intent.",
      "Find content gaps where competitors answer buyer questions that your site has no page for.",
      "Review existing blog posts for intent mismatch, thin sections, missing examples, and weak internal links.",
      "Create content briefs before publishing new posts so each article has search intent, page goal, CTA, and internal links.",
      "Check whether blog posts link to product, service, solution, category, or application pages.",
    ],
    fixes: [
      "Choose one keyword cluster and decide which pages should exist before writing more posts.",
      "Refresh three existing posts with clearer intent, examples, and commercial internal links.",
    ],
    internalLinks: [
      "Build blog-to-product links from educational articles to the relevant commercial page, not just to other articles.",
      "Create hub links from broad guides to specific product, service, or solution pages.",
    ],
    conversionPaths: [
      "Add contextual CTAs inside content sections where the reader shows problem awareness or vendor evaluation intent.",
      "Use different CTAs for awareness posts and decision-stage posts instead of one generic contact button.",
    ],
    geoReadiness: [
      "Add clear definitions, summaries, and structured lists to articles so AI search tools can understand the topic quickly.",
      "Add FAQ blocks to content pages that answer buyer questions, not only keyword variations.",
    ],
  },
  "Improve AI search visibility": {
    priorities: [
      "Make priority pages structured, descriptive, and entity-rich before chasing more volume.",
      "Add direct answers and comparison sections where buyers ask AI tools to shortlist vendors, products, or approaches.",
    ],
    checks: [
      "Add a concise definition or summary near the top of priority pages.",
      "Use descriptive headings that name the product, service, audience, industry, application, and use case.",
      "Add FAQ blocks for buyer questions that AI tools can quote or summarize.",
      "Add comparison sections for alternatives, use cases, product categories, or service approaches.",
      "Check whether product and service details are structured enough for AI search readiness and schema where relevant.",
    ],
    fixes: [
      "Add a direct-answer block and FAQ block to one high-intent commercial page.",
      "Rewrite vague page sections with entity-rich descriptions that name the audience, product category, use case, and proof.",
    ],
    internalLinks: [
      "Link definitions and guide sections to the page that best represents the product, service, or solution entity.",
      "Use descriptive anchors that include the entity or use case, not generic text like learn more.",
    ],
    conversionPaths: [
      "Make sure AI-friendly sections still lead to a human next step: demo, quote, consultation, trial, or inquiry.",
      "Add proof and CTA blocks near comparison sections where buyers are evaluating options.",
    ],
    geoReadiness: [
      "Add clear definitions, FAQ blocks, comparison tables, structured product/service details, and schema where relevant.",
      "Use concise summaries that explain who the page is for, what problem it solves, and what proof supports it.",
    ],
  },
  "Prepare before hiring an SEO agency": {
    priorities: [
      "Build a baseline audit so an agency discussion starts with priority pages, gaps, and business goals instead of vague traffic targets.",
      "Create a clear page and keyword map before asking for a roadmap.",
    ],
    checks: [
      "List priority pages tied to demos, quote requests, inquiries, consultations, or sales conversations.",
      "Map target keywords to product, service, solution, category, application, comparison, and content pages.",
      "Document visible technical issues: indexation problems, sitemap gaps, canonical confusion, thin pages, and broken internal links.",
      "Summarize content gaps and internal linking gaps before requesting agency recommendations.",
      "Collect lead quality notes from sales or founders so SEO work supports pipeline, not just traffic.",
    ],
    fixes: [
      "Create a one-page agency brief with priority pages, target buyers, known gaps, and conversion goals.",
      "Mark which pages need technical review, content depth, internal links, or CRO before the agency starts.",
    ],
    internalLinks: [
      "Prepare a list of pages that should receive more internal links from existing content.",
      "Identify orphan or under-linked commercial pages before asking an agency to scale content.",
    ],
    conversionPaths: [
      "Document which forms, demo paths, quote requests, phone calls, or consultation CTAs are tracked today.",
      "Flag pages that get traffic but do not have a buyer-specific next step.",
    ],
    geoReadiness: [
      "Add notes on which priority pages need definitions, FAQs, comparison sections, and structured product or service information.",
      "Ask the agency to explain how it will support AI search visibility, not only traditional rankings.",
    ],
  },
};

const stagePlans: Record<SeoStage, PlanBlock> = {
  "Starting from scratch": {
    priorities: [
      "Create the core commercial page structure before publishing a large blog library.",
      "Map priority keywords to indexable pages that can support qualified leads.",
    ],
    checks: [
      "Define homepage, product, solution, service, category, application, and contact or inquiry pages.",
      "Choose priority keywords for each core commercial page.",
      "Confirm sitemap, robots.txt, canonical tags, navigation, and basic tracking are set up.",
      "Create at least one page for each buyer-stage problem that matters to pipeline.",
    ],
    fixes: [
      "Build the first five indexable commercial pages before scaling content.",
      "Set up form, demo, quote, or consultation tracking from the beginning.",
    ],
    internalLinks: [
      "Use homepage and navigation links to point at core commercial pages.",
      "Plan future blog topics around which commercial page each post should support.",
    ],
    conversionPaths: [
      "Add one clear CTA path for each core page: demo, quote, consultation, trial, or inquiry.",
      "Avoid generic contact-only paths on pages with clear buyer intent.",
    ],
    geoReadiness: [
      "Write clear page definitions and service/product descriptions while building the first pages.",
      "Add FAQ sections to core pages instead of waiting until later.",
    ],
  },
  "Some content but little traffic": {
    priorities: [
      "Diagnose keyword-to-page mismatch before writing more content.",
      "Improve content depth and indexable structure on pages that should already be ranking.",
    ],
    checks: [
      "Find posts that target broad terms but do not answer the search intent deeply enough.",
      "Check whether titles and H1s match the buyer problem or product category being searched.",
      "Review whether important pages are indexed and linked from relevant pages.",
      "Add examples, use cases, FAQs, specs, or proof where pages are thin.",
    ],
    fixes: [
      "Refresh three underperforming pages with clearer intent, deeper sections, and internal links.",
      "Merge or redirect overlapping content that splits the same keyword cluster.",
    ],
    internalLinks: [
      "Add links from related posts to the commercial page that should own the buying-intent keyword.",
      "Create content hubs that connect broad guides to specific product, solution, or service pages.",
    ],
    conversionPaths: [
      "Add CTAs to refreshed content so new traffic has a clear next step.",
      "Track whether refreshed pages produce leads, not just impressions.",
    ],
    geoReadiness: [
      "Add summaries and FAQ blocks to refreshed pages to make the content easier for AI systems to parse.",
      "Use specific entity names such as product category, industry, application, and buyer role.",
    ],
  },
  "Traffic but few leads": {
    priorities: [
      "Connect traffic-heavy pages to buyer-specific next steps and commercial pages.",
      "Audit product, service, and solution pages for depth, proof, and CTA clarity.",
    ],
    checks: [
      "Find high-traffic pages with no contextual CTA or weak internal link to a commercial page.",
      "Check whether product and service pages answer buyer objections before the form or CTA.",
      "Review lead tracking by landing page, not only by sitewide conversions.",
      "Add trust sections near conversion points: proof, certifications, case studies, reviews, examples, or specs.",
    ],
    fixes: [
      "Add commercial links and contextual CTAs to the top five traffic pages.",
      "Improve one money page with proof, depth, and a clearer inquiry or demo path.",
    ],
    internalLinks: [
      "Link top traffic posts to the closest product, service, category, or solution page.",
      "Add links from commercial pages back to helpful guides that support buyer confidence.",
    ],
    conversionPaths: [
      "Place CTA blocks after proof, FAQ, specs, or comparison sections where buyer confidence is highest.",
      "Separate generic contact forms from demo, quote, consultation, or inquiry paths where possible.",
    ],
    geoReadiness: [
      "Add direct answers and FAQs to high-traffic pages so AI search visibility supports lead paths.",
      "Use comparison and proof sections to help AI systems understand why the business is a fit.",
    ],
  },
  "Need to scale SEO workflow": {
    priorities: [
      "Turn repeatable SEO work into templates, briefs, internal linking rules, and reporting routines.",
      "Prioritize page types by pipeline value before scaling output.",
    ],
    checks: [
      "Create templates for product page SEO, content briefs, comparison pages, FAQs, and internal linking.",
      "Define rules for which blog posts should link to which commercial pages.",
      "Create a reporting workflow that separates traffic, qualified leads, and page type performance.",
      "Prioritize product, service, solution, category, and comparison pages before low-intent content volume.",
    ],
    fixes: [
      "Document the SEO workflow from keyword cluster to brief, page, internal links, CTA, and reporting.",
      "Create one reusable checklist for every recurring page type.",
    ],
    internalLinks: [
      "Build internal linking rules by page type: guide to solution, comparison to product, category to product, FAQ to service.",
      "Review internal links during every content brief, not after publishing.",
    ],
    conversionPaths: [
      "Standardize CTA placement and lead tracking by page type.",
      "Create a monthly review of which page types generate qualified leads.",
    ],
    geoReadiness: [
      "Add AI/GEO checks to each brief: definition, FAQ, entities, comparison, summary, and schema where relevant.",
      "Create reusable structured sections for product, service, and category pages.",
    ],
  },
};

const websitePlans: Record<WebsiteType, PlanBlock> = {
  "B2B SaaS": {
    priorities: [
      "Audit solution pages, feature pages, comparison pages, and demo request paths before low-intent blog expansion.",
      "Connect product-led content to feature or solution pages with clear trial/demo conversion paths.",
    ],
    checks: [
      "Check whether each solution page targets a buyer problem and links to relevant feature pages.",
      "Review feature pages for use cases, proof, FAQs, integrations, and demo CTAs.",
      "Map comparison keywords to comparison pages or sections that help vendor evaluation.",
      "Check whether product-led blog posts link to feature, product, or solution pages.",
    ],
    fixes: [
      "Improve one solution page with feature proof, comparison context, FAQs, and a demo request CTA.",
      "Add blog-to-feature internal links from posts that already attract problem-aware traffic.",
    ],
    internalLinks: [
      "Link guides about pain points to solution pages and guides about workflows to feature pages.",
      "Link comparison posts to the product page, relevant feature pages, and demo request path.",
    ],
    conversionPaths: [
      "Place demo request CTAs near product proof, integrations, comparison sections, and FAQs.",
      "Track trial/demo conversion by source page so content is judged by pipeline quality.",
    ],
    geoReadiness: [
      "Add clear definitions for product category, feature set, use case, and ideal customer profile.",
      "Use comparison sections and FAQs to help AI tools understand positioning against alternatives.",
    ],
  },
  "B2B service business": {
    priorities: [
      "Audit service pages, industry or location use cases, case studies, trust signals, and consultation paths.",
      "Make sure educational content supports service inquiries instead of stopping at informational traffic.",
    ],
    checks: [
      "Review service pages for specific buyer outcomes, industries, proof, and consultation CTAs.",
      "Add case studies, reviews, certifications, or project examples near lead forms.",
      "Check whether use-case or location pages link to relevant service pages.",
      "Review phone, form, and consultation paths for friction and tracking.",
    ],
    fixes: [
      "Strengthen one service page with proof, use cases, FAQs, and a consultation CTA.",
      "Add links from educational articles to service pages that match the buyer problem.",
    ],
    internalLinks: [
      "Link guides to service pages using anchors that include the service and buyer problem.",
      "Link case studies back to the service pages and use-case pages they support.",
    ],
    conversionPaths: [
      "Make consultation CTAs specific to the service page instead of using one generic contact message.",
      "Track form and phone inquiries by landing page where possible.",
    ],
    geoReadiness: [
      "Add clear definitions of each service, who it is for, and what outcome it supports.",
      "Use FAQ blocks and case study summaries to make expertise easier for AI search to summarize.",
    ],
  },
  "Manufacturer / exporter": {
    priorities: [
      "Audit product category pages, product detail depth, export-market keywords, application pages, and inquiry paths.",
      "Add trust signals for overseas buyers, including certifications, specs, OEM/ODM capability, and proof of applications.",
    ],
    checks: [
      "Review product category pages for export-market keywords and buyer applications.",
      "Add technical specs, certifications, materials, standards, capacity, MOQ, or OEM/ODM details where relevant.",
      "Check whether product detail pages link to category, application, certification, and inquiry pages.",
      "Review whether overseas buyers can find a quote or inquiry path from category and product pages.",
    ],
    fixes: [
      "Upgrade one product category page with specs, applications, certifications, FAQs, and inquiry CTAs.",
      "Add application-page links from product pages and product links from application pages.",
    ],
    internalLinks: [
      "Link application pages to relevant product category pages and individual product detail pages.",
      "Link certification, technical spec, and FAQ content back to product pages that need buyer trust.",
    ],
    conversionPaths: [
      "Add inquiry or quote-request CTAs on product category, application, and product detail pages.",
      "Make overseas buyer trust visible near inquiry forms: certifications, specs, export experience, or project examples.",
    ],
    geoReadiness: [
      "Use entity-rich product descriptions that name category, application, materials, specs, standards, and export markets.",
      "Add FAQ blocks for MOQ, OEM/ODM, certification, lead time, application fit, and technical specs.",
    ],
  },
  "Agency / consultant": {
    priorities: [
      "Audit service positioning, niche keywords, proof pages, lead magnets, case studies, and consultation paths.",
      "Make expertise visible through proof and process pages, not only blog content.",
    ],
    checks: [
      "Review service pages for niche positioning, buyer problem, process, proof, and consultation CTA.",
      "Map niche keywords to service, case study, comparison, and lead magnet pages.",
      "Add proof pages, examples, testimonials, or case studies that support high-intent services.",
      "Check whether lead magnets connect to consultation paths.",
    ],
    fixes: [
      "Clarify one high-intent service page with niche positioning, proof, FAQs, and a consultation CTA.",
      "Create or improve one proof page that supports the service page buyers care about most.",
    ],
    internalLinks: [
      "Link educational posts to the service page that solves the reader's problem.",
      "Link case studies and lead magnets back to relevant service and consultation pages.",
    ],
    conversionPaths: [
      "Add consultation CTAs after proof, process, and case study sections.",
      "Track lead magnet signups separately from consultation requests so lead quality is clear.",
    ],
    geoReadiness: [
      "Add structured service definitions, niche descriptions, case study summaries, and FAQ blocks.",
      "Use comparison sections to explain how the service differs from agencies, freelancers, or in-house execution.",
    ],
  },
  "B2B ecommerce": {
    priorities: [
      "Audit category pages, product filters, product descriptions, schema, internal links, and checkout or quote-request paths.",
      "Make category and product pages useful for buyers who compare specs, availability, pricing model, and fit.",
    ],
    checks: [
      "Review category pages for indexable copy, buyer filters, internal links, and product coverage.",
      "Add product descriptions with specs, use cases, compatibility, FAQs, and schema-ready details.",
      "Check whether product filters help buyers narrow by business-relevant attributes.",
      "Review checkout, quote request, bulk order, or inquiry paths from category and product pages.",
    ],
    fixes: [
      "Improve one category page with buyer-focused copy, filters, internal links, FAQs, and quote/inquiry CTAs.",
      "Upgrade product descriptions for top SKUs with specs, use cases, schema-ready details, and internal links.",
    ],
    internalLinks: [
      "Link buying guides and comparison content to category pages and priority product pages.",
      "Link product pages to related categories, accessories, alternatives, and application pages where relevant.",
    ],
    conversionPaths: [
      "Make checkout, quote request, bulk order, or inquiry paths visible from category and product pages.",
      "Track quote and checkout paths separately so SEO can be measured by commercial action.",
    ],
    geoReadiness: [
      "Add structured product information, category definitions, FAQs, specs, and schema where relevant.",
      "Use comparison and compatibility sections for products buyers evaluate across options.",
    ],
  },
};

function uniqueItems(items: string[], limit: number) {
  return Array.from(new Set(items)).slice(0, limit);
}

function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function getRecommendedFocus(websiteType: WebsiteType, seoGoal: SeoGoal) {
  if (seoGoal === "More qualified leads") {
    return "Commercial pages and conversion paths";
  }

  if (seoGoal === "Better product page rankings") {
    return websiteType === "Manufacturer / exporter" || websiteType === "B2B ecommerce"
      ? "Category and product page depth"
      : "Product, solution, and service page depth";
  }

  if (seoGoal === "More content traffic") {
    return "Keyword clusters and blog-to-commercial links";
  }

  if (seoGoal === "Improve AI search visibility") {
    return "Structured answers, FAQs, and entity-rich sections";
  }

  return "Baseline audit and agency briefing clarity";
}

function getPriorityLevel(seoGoal: SeoGoal, seoStage: SeoStage) {
  if (seoStage === "Traffic but few leads" || seoGoal === "More qualified leads") {
    return "High: fix lead paths before publishing more content";
  }

  if (seoStage === "Starting from scratch") {
    return "Foundation: build core pages and tracking first";
  }

  if (seoStage === "Need to scale SEO workflow") {
    return "Workflow: standardize briefs, links, and reporting";
  }

  return "Medium: repair intent and page depth gaps";
}

function buildAuditPlanText({
  websiteType,
  seoGoal,
  seoStage,
  auditPlan,
}: {
  websiteType: WebsiteType;
  seoGoal: SeoGoal;
  seoStage: SeoStage;
  auditPlan: {
    summary: {
      recommendedFocus: string;
      seoStage: string;
      priorityLevel: string;
    };
    priorities: string[];
    checks: string[];
    fixes: string[];
    internalLinks: string[];
    conversionPaths: string[];
    geoReadiness: string[];
  };
}) {
  const sections = [
    ["Recommended Focus", [auditPlan.summary.recommendedFocus]],
    ["SEO Stage", [auditPlan.summary.seoStage]],
    ["Priority Level", [auditPlan.summary.priorityLevel]],
    ["Priority Focus", auditPlan.priorities],
    ["Recommended Checks", auditPlan.checks],
    ["What to Fix First", auditPlan.fixes],
    ["Internal Linking Suggestions", auditPlan.internalLinks],
    ["Conversion Path Suggestions", auditPlan.conversionPaths],
    ["AI Search / GEO Readiness", auditPlan.geoReadiness],
  ];

  return [
    "B2B SEO Audit Plan",
    `Website type: ${websiteType}`,
    `Main SEO goal: ${seoGoal}`,
    `Current SEO stage: ${seoStage}`,
    "",
    ...sections.flatMap(([title, items]) => [
      String(title),
      ...(items as string[]).map((item, index) => `${index + 1}. ${item}`),
      "",
    ]),
  ].join("\n");
}

export default function AuditGenerator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("B2B SaaS");
  const [seoGoal, setSeoGoal] = useState<SeoGoal>("More qualified leads");
  const [seoStage, setSeoStage] = useState<SeoStage>("Traffic but few leads");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const auditPlan = useMemo(() => {
    const goal = goalPlans[seoGoal];
    const stage = stagePlans[seoStage];
    const website = websitePlans[websiteType];

    return {
      summary: {
        recommendedFocus: getRecommendedFocus(websiteType, seoGoal),
        seoStage,
        priorityLevel: getPriorityLevel(seoGoal, seoStage),
      },
      priorities: uniqueItems(
        [goal.priorities[0], stage.priorities[0], website.priorities[0], goal.priorities[1]],
        3,
      ),
      checks: uniqueItems([...goal.checks, ...stage.checks, ...website.checks], 8),
      fixes: uniqueItems([goal.fixes[0], stage.fixes[0], website.fixes[0], goal.fixes[1]], 3),
      internalLinks: uniqueItems(
        [...goal.internalLinks, ...stage.internalLinks, ...website.internalLinks],
        3,
      ),
      conversionPaths: uniqueItems(
        [...goal.conversionPaths, ...stage.conversionPaths, ...website.conversionPaths],
        3,
      ),
      geoReadiness: uniqueItems(
        [...goal.geoReadiness, ...stage.geoReadiness, ...website.geoReadiness],
        3,
      ),
    };
  }, [seoGoal, seoStage, websiteType]);

  function handleGenerate() {
    setHasGenerated(true);
    setHasCopied(false);
    trackEvent("generate_audit_plan", {
      website_type: websiteType,
      seo_goal: seoGoal,
      seo_stage: seoStage,
    });
  }

  async function handleCopy() {
    if (!hasGenerated || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(
      buildAuditPlanText({
        websiteType,
        seoGoal,
        seoStage,
        auditPlan,
      }),
    );
    setHasCopied(true);
    trackEvent("copy_audit_plan", {
      website_type: websiteType,
      seo_goal: seoGoal,
      seo_stage: seoStage,
    });
  }

  return (
    <section id="audit-generator" className="px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Interactive Tool
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            B2B SEO Audit Generator
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Generate a starter B2B SEO audit plan that answers what to fix first. This lightweight
            B2B SEO audit tool creates a priority checklist for product page SEO, internal linking,
            conversion paths, AI search readiness, and qualified B2B leads. It does not perform a
            full technical crawl.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border-b border-slate-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Inputs
            </p>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Website type</span>
                <select
                  value={websiteType}
                  onChange={(event) => setWebsiteType(event.target.value as WebsiteType)}
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  {websiteTypes.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Main SEO goal
                </span>
                <select
                  value={seoGoal}
                  onChange={(event) => setSeoGoal(event.target.value as SeoGoal)}
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  {seoGoals.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Current SEO stage
                </span>
                <select
                  value={seoStage}
                  onChange={(event) => setSeoStage(event.target.value as SeoStage)}
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                >
                  {seoStages.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <button
                type="button"
                onClick={handleGenerate}
                className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Generate Audit Plan
              </button>

              <p className="text-xs leading-relaxed text-slate-500">
                Built for small B2B teams that need repeatable workflows, not another dashboard.
              </p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-6 sm:p-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Generated Output
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  What should you fix first?
                </h3>
              </div>
              <span className="w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                SEO checklist for B2B companies
              </span>
            </div>

            {!hasGenerated ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  Choose your website type, goal, and current stage, then generate a workflow
                  recommendation. The output will show priority fixes, internal linking ideas,
                  conversion path checks, AI/GEO readiness items, and a link to the full B2B SEO
                  audit checklist.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    ["Recommended Focus", auditPlan.summary.recommendedFocus],
                    ["SEO Stage", auditPlan.summary.seoStage],
                    ["Priority Level", auditPlan.summary.priorityLevel],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                        {label}
                      </p>
                      <p className="text-sm font-semibold leading-relaxed text-slate-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <OutputCard title="Priority Focus" items={auditPlan.priorities} variant="bullet" />
                <OutputCard
                  title="Recommended Checks"
                  items={auditPlan.checks}
                  variant="check"
                />
                <OutputCard
                  title="What to Fix First"
                  items={auditPlan.fixes}
                  variant="numbered"
                />
                <OutputCard
                  title="Internal Linking Suggestions"
                  items={auditPlan.internalLinks}
                  variant="bullet"
                />
                <OutputCard
                  title="Conversion Path Suggestions"
                  items={auditPlan.conversionPaths}
                  variant="bullet"
                />
                <OutputCard
                  title="AI Search / GEO Readiness"
                  items={auditPlan.geoReadiness}
                  variant="bullet"
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                  >
                    Copy Audit Plan
                  </button>
                  {hasCopied ? (
                    <span className="text-sm font-medium text-blue-600">Copied</span>
                  ) : null}
                </div>

                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5">
                  <p className="mb-4 text-sm font-semibold text-slate-900">
                    Want the full checklist and templates?
                  </p>
                  <a
                    href={TALLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("click_audit_checklist_cta", {
                        source: "audit_generator",
                        website_type: websiteType,
                        seo_goal: seoGoal,
                        seo_stage: seoStage,
                      })
                    }
                    className="inline-block rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    Get the Free Audit Checklist
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    Includes product page checks, internal linking prompts, conversion path ideas,
                    and AI search readiness notes.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function OutputCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "bullet" | "check" | "numbered";
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
        {title}
      </p>
      <ul className={variant === "check" ? "divide-y divide-slate-100" : "space-y-3"}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              variant === "check"
                ? "flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                : "flex items-start gap-3 text-sm leading-relaxed text-slate-700"
            }
          >
            <span
              className={
                variant === "check" || variant === "numbered"
                  ? "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600"
                  : "mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"
              }
            >
              {variant === "check" ? "✓" : variant === "numbered" ? index + 1 : ""}
            </span>
            <span className="text-sm leading-relaxed text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
