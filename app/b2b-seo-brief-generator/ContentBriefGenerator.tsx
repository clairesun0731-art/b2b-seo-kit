"use client";

import { useMemo, useState } from "react";

const TALLY_URL = "https://tally.so/r/pbJK9J";

const pageTypes = [
  "Blog post",
  "Service page",
  "Product page",
  "Comparison page",
  "Use case page",
  "Industry landing page",
] as const;

const targetBuyers = [
  "Founder / CEO",
  "Marketing manager",
  "Sales-led / revenue team",
  "Procurement / sourcing buyer",
  "Technical decision-maker",
] as const;

const searchIntents = [
  "Learn about a problem",
  "Compare options",
  "Evaluate a solution",
  "Find a vendor",
  "Prepare for purchase",
] as const;

const businessTypes = [
  "B2B SaaS",
  "B2B services / professional services",
  "Manufacturer / exporter",
  "Agency / consultant",
  "B2B ecommerce",
] as const;

type PageType = (typeof pageTypes)[number];
type TargetBuyer = (typeof targetBuyers)[number];
type SearchIntent = (typeof searchIntents)[number];
type BusinessType = (typeof businessTypes)[number];

type PagePlan = {
  angle: string;
  h1Pattern: (keyword: string) => string;
  outline: string[];
  mustCover: string[];
  links: string[];
};

type IntentPlan = {
  summary: string;
  cta: string;
  mustCover: string[];
  links: string[];
};

type BuyerPlan = {
  notes: string;
  proof: string[];
};

type BusinessPlan = {
  angleModifier: string;
  proof: string[];
  links: string[];
  geoExample: string;
};

const pagePlans: Record<PageType, PagePlan> = {
  "Blog post": {
    angle:
      "Frame the topic as an educational problem guide that helps the buyer understand the issue, then route readers toward the most relevant commercial page.",
    h1Pattern: (keyword) => `${keyword}: A Practical Guide for B2B Teams`,
    outline: [
      "H2: What the topic means for B2B teams",
      "H2: Why this problem affects lead quality, sales cycles, or page performance",
      "H2: How to evaluate the main options or approaches",
      "H2: Common mistakes B2B teams make",
      "H2: Recommended workflow or checklist",
      "H2: When to move from research to vendor evaluation",
      "H2: FAQs",
    ],
    mustCover: [
      "Clear definition near the top",
      "Business impact, not only SEO theory",
      "Examples tied to product, service, or industry pages",
      "Internal links to commercial pages",
      "Soft CTA to an audit, checklist, or strategy workflow",
    ],
    links: ["Relevant product or service page", "Use case page", "B2B SEO Audit Generator", "B2B SEO Strategy Workflow"],
  },
  "Service page": {
    angle:
      "Position the page around the buyer's pain, the business outcome, the service process, proof, qualification criteria, and a clear consultation path.",
    h1Pattern: (keyword) => `${keyword} for B2B Teams`,
    outline: [
      "H2: What this service helps B2B teams fix",
      "H2: Who the service is for",
      "H2: Service outcomes and deliverables",
      "H2: Process and timeline",
      "H2: Proof, examples, or case studies",
      "H2: How to decide if this service is a fit",
      "H2: FAQs",
    ],
    mustCover: [
      "Pain points and business outcomes",
      "Service scope and exclusions",
      "Delivery process",
      "Proof and customer examples",
      "Consultation or project inquiry CTA",
    ],
    links: ["Related service page", "Case study", "Methodology page", "Contact or consultation page"],
  },
  "Product page": {
    angle:
      "Build the page around buyer problems, product capabilities, use cases, specs, objections, proof, and a quote or demo path.",
    h1Pattern: (keyword) => `${keyword} for B2B Buyers`,
    outline: [
      "H2: What the product helps buyers do",
      "H2: Key use cases and applications",
      "H2: Feature-to-outcome mapping",
      "H2: Specifications, integrations, or requirements",
      "H2: Proof, examples, and objections",
      "H2: Implementation, delivery, or support",
      "H2: FAQs",
    ],
    mustCover: [
      "Buyer problem and product fit",
      "Use cases or applications",
      "Specs, integrations, or technical details",
      "Comparison or objection section",
      "Demo, quote, RFQ, or inquiry CTA",
    ],
    links: ["Use case page", "Comparison page", "Case study", "Pricing, quote, or demo page"],
  },
  "Comparison page": {
    angle:
      "Help the buyer compare options with decision criteria, alternatives, tradeoffs, switching triggers, proof, and a next step that fits evaluation-stage intent.",
    h1Pattern: (keyword) => `${keyword}: B2B Comparison Guide`,
    outline: [
      "H2: Quick comparison summary",
      "H2: Who each option is best for",
      "H2: Decision criteria for B2B buyers",
      "H2: Pros, cons, and tradeoffs",
      "H2: Switching triggers or fit signals",
      "H2: Vendor evaluation checklist",
      "H2: FAQs",
    ],
    mustCover: [
      "Comparison table",
      "Decision criteria",
      "Pros and cons",
      "Alternative page links",
      "Buyer guide or consultation CTA",
    ],
    links: ["Product page", "Alternative page", "Case study", "Strategy workflow tool"],
  },
  "Use case page": {
    angle:
      "Focus on the buyer's scenario, workflow, constraints, implementation path, expected business outcome, and the related product or service page.",
    h1Pattern: (keyword) => `${keyword} Use Case for B2B Teams`,
    outline: [
      "H2: Scenario and buyer problem",
      "H2: Workflow before and after the solution",
      "H2: Recommended product or service fit",
      "H2: Implementation steps",
      "H2: Business outcomes to track",
      "H2: Related use cases and pages",
      "H2: FAQs",
    ],
    mustCover: [
      "Specific scenario",
      "Before and after workflow",
      "Implementation notes",
      "Outcome metrics",
      "Links to product or service pages",
    ],
    links: ["Product page", "Service page", "Related use case page", "Case study"],
  },
  "Industry landing page": {
    angle:
      "Make the page vertical-specific with industry pain points, applications, compliance or trust signals, buyer objections, examples, and commercial CTAs.",
    h1Pattern: (keyword) => `${keyword} for B2B Teams`,
    outline: [
      "H2: Industry-specific pain points",
      "H2: Common use cases or applications",
      "H2: Recommended solution, service, or product fit",
      "H2: Compliance, requirements, or buyer criteria",
      "H2: Proof and industry examples",
      "H2: Next step for qualified buyers",
      "H2: FAQs",
    ],
    mustCover: [
      "Vertical pain points",
      "Industry examples",
      "Compliance or specification details",
      "Trust and qualification signals",
      "Commercial CTA for the vertical",
    ],
    links: ["Product or service page", "Use case page", "Case study", "Contact or quote page"],
  },
};

const intentPlans: Record<SearchIntent, IntentPlan> = {
  "Learn about a problem": {
    summary:
      "The searcher is likely trying to understand the problem, learn the language around it, and decide whether it matters enough to investigate further.",
    cta:
      "Use a soft CTA after the first practical section and again near the conclusion: audit checklist, brief template, buyer checklist, or strategy workflow.",
    mustCover: ["Problem definition", "Why the problem matters", "Common causes", "First diagnostic steps"],
    links: ["Educational guide", "Audit tool", "Relevant commercial page"],
  },
  "Compare options": {
    summary:
      "The searcher is comparing categories, vendors, methods, or buying criteria and needs a clear way to judge fit.",
    cta:
      "Place a comparison CTA after the comparison table and near the final recommendation: buyer guide, consultation, demo, or evaluation checklist.",
    mustCover: ["Comparison table", "Decision criteria", "Best-fit scenarios", "Alternative pages"],
    links: ["Comparison page", "Alternative page", "Product or service page"],
  },
  "Evaluate a solution": {
    summary:
      "The searcher understands the problem and is checking whether a specific solution, service, or product can solve it.",
    cta:
      "Place demo, quote, product page, or consultation CTAs after proof sections, after objection-handling sections, and near the bottom.",
    mustCover: ["Solution fit", "Proof", "Implementation notes", "Objection handling"],
    links: ["Product page", "Service page", "Case study", "Pricing or contact page"],
  },
  "Find a vendor": {
    summary:
      "The searcher is likely shortlisting vendors and needs credibility, fit criteria, process clarity, and a direct contact path.",
    cta:
      "Use a contact, request proposal, RFQ, or book-a-call CTA above the fold, after proof, and at the bottom.",
    mustCover: ["Vendor fit", "Qualifications", "Proof", "Process and response expectations"],
    links: ["Contact page", "Case study", "Service or product page"],
  },
  "Prepare for purchase": {
    summary:
      "The searcher is moving toward purchase and needs technical details, pricing or quote language, implementation support, risk reduction, and sales-ready proof.",
    cta:
      "Use quote, consultation, technical specification, demo, or RFQ CTAs close to specs, implementation details, and proof sections.",
    mustCover: ["Specifications", "Pricing or quote path", "Implementation support", "Risk reduction"],
    links: ["Quote or demo page", "Technical documentation", "Case study", "Contact page"],
  },
};

const buyerPlans: Record<TargetBuyer, BuyerPlan> = {
  "Founder / CEO": {
    notes:
      "Emphasize strategic clarity, revenue impact, efficiency, ROI, and the risk of spending SEO effort on traffic that does not become pipeline.",
    proof: ["ROI notes", "growth examples", "efficiency gains", "strategic tradeoffs"],
  },
  "Marketing manager": {
    notes:
      "Emphasize keyword strategy, content workflow, lead quality, internal links, reporting, and conversion paths from content to commercial pages.",
    proof: ["content workflow", "keyword map", "lead quality notes", "reporting plan"],
  },
  "Sales-led / revenue team": {
    notes:
      "Emphasize sales enablement, qualified leads, buyer questions, objections, proof points, and how the page supports sales conversations.",
    proof: ["objection handling", "sales FAQs", "case studies", "conversation triggers"],
  },
  "Procurement / sourcing buyer": {
    notes:
      "Emphasize vendor reliability, specifications, certifications, comparison criteria, delivery details, and trust signals that reduce sourcing risk.",
    proof: ["certifications", "specifications", "vendor criteria", "delivery or lead time details"],
  },
  "Technical decision-maker": {
    notes:
      "Emphasize implementation details, compatibility, process, technical proof, documentation, and the practical constraints that affect adoption.",
    proof: ["technical docs", "compatibility notes", "process explanation", "implementation proof"],
  },
};

const businessPlans: Record<BusinessType, BusinessPlan> = {
  "B2B SaaS": {
    angleModifier:
      "Use feature-to-outcome mapping, product-led proof, integration or workflow details, comparison language, and demo-focused next steps.",
    proof: ["product screenshots", "feature-to-outcome mapping", "G2 or review proof", "security or integration notes"],
    links: ["Demo page", "Feature page", "Use case page", "Comparison page"],
    geoExample: "Name the software category, buyer role, use case, integrations, and measurable outcome.",
  },
  "B2B services / professional services": {
    angleModifier:
      "Clarify service scope, process, outcomes, proof, fit criteria, FAQs, and a consultation-focused path.",
    proof: ["case studies", "process explanation", "author expertise", "client examples"],
    links: ["Service page", "Methodology page", "Case study", "Consultation page"],
    geoExample: "Name the service category, client type, process, deliverables, and business outcome.",
  },
  "Manufacturer / exporter": {
    angleModifier:
      "Include specifications, applications, certifications, export capability, OEM or ODM details where relevant, and a quote or RFQ path.",
    proof: ["product specs", "certifications", "factory or QA process", "export markets"],
    links: ["Product category page", "Application page", "Certification page", "RFQ page"],
    geoExample: "Name materials, specifications, applications, certifications, regions served, and sourcing requirements.",
  },
  "Agency / consultant": {
    angleModifier:
      "Show methodology, examples, case studies, packages, diagnostic thinking, and a strategy-call or consultation CTA.",
    proof: ["methodology", "case studies", "founder expertise", "diagnostic examples"],
    links: ["Service package page", "Case study", "Methodology page", "Diagnostic or strategy call page"],
    geoExample: "Name the niche, methodology, client profile, deliverables, and measurable outcome.",
  },
  "B2B ecommerce": {
    angleModifier:
      "Support category intent with specs, product comparison, purchase confidence, availability, quote paths, and commercial CTAs.",
    proof: ["product comparison", "specs", "MOQ or lead time", "shipping and return details"],
    links: ["Category page", "Product page", "Buying guide", "Quote or account page"],
    geoExample: "Name product category, specs, compatibility, MOQ, purchasing criteria, and buyer use case.",
  },
};

function uniqueItems(items: string[]) {
  return Array.from(new Set(items)).filter(Boolean);
}

function sentenceCaseKeyword(keyword: string) {
  const clean = keyword.trim().replace(/\s+/g, " ");
  if (!clean) return "your target keyword";
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function formatList(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

export default function ContentBriefGenerator() {
  const [pageType, setPageType] = useState<PageType>("Blog post");
  const [targetKeyword, setTargetKeyword] = useState("B2B SEO strategy");
  const [targetBuyer, setTargetBuyer] = useState<TargetBuyer>("Marketing manager");
  const [searchIntent, setSearchIntent] = useState<SearchIntent>("Evaluate a solution");
  const [businessType, setBusinessType] = useState<BusinessType>("B2B SaaS");
  const [hasGenerated, setHasGenerated] = useState(true);
  const [copied, setCopied] = useState(false);

  const brief = useMemo(() => {
    const keyword = sentenceCaseKeyword(targetKeyword);
    const pagePlan = pagePlans[pageType];
    const intentPlan = intentPlans[searchIntent];
    const buyerPlan = buyerPlans[targetBuyer];
    const businessPlan = businessPlans[businessType];
    const h1 = pagePlan.h1Pattern(keyword);

    const title = `${keyword} | B2B SEO Brief for ${pageType}s`;
    const metaDescription = `Create a ${pageType.toLowerCase()} brief for ${keyword} with buyer intent, internal links, trust signals, CTAs, and AI search readiness for ${businessType} teams.`;

    return {
      recommendedAngle: `${pagePlan.angle} For ${businessType}, ${businessPlan.angleModifier}`,
      searchIntentSummary: intentPlan.summary,
      buyerIntentNotes: buyerPlan.notes,
      h1,
      title,
      metaDescription,
      outline: pagePlan.outline,
      mustCover: uniqueItems([...pagePlan.mustCover, ...intentPlan.mustCover]),
      internalLinks: uniqueItems([...pagePlan.links, ...intentPlan.links, ...businessPlan.links]),
      ctaPlacement: intentPlan.cta,
      trustSignals: uniqueItems([...buyerPlan.proof, ...businessPlan.proof, "FAQs", "original insights"]),
      geoNotes: [
        "Add a concise direct-answer block near the top of the page.",
        "Use clear definitions and entity-rich language that names the buyer, business type, page type, and core topic.",
        "Include comparison tables, frameworks, or structured lists where the search intent involves evaluation.",
        "Add FAQ blocks with natural-language buyer questions.",
        `Include examples specific to ${businessType}. ${businessPlan.geoExample}`,
        "Avoid generic SEO advice; explain the next action a B2B team should take.",
      ],
      finalSummary: `Create a ${pageType.toLowerCase()} for "${keyword}" aimed at ${targetBuyer} in ${businessType}. Match the "${searchIntent}" intent, connect the page to relevant commercial pages, include proof and FAQs, and use CTAs that support qualified lead generation rather than generic traffic growth.`,
    };
  }, [businessType, pageType, searchIntent, targetBuyer, targetKeyword]);

  const resultText = useMemo(
    () =>
      [
        "B2B SEO Content Brief",
        "",
        `Page Type: ${pageType}`,
        `Target Keyword: ${sentenceCaseKeyword(targetKeyword)}`,
        `Target Buyer: ${targetBuyer}`,
        `Search Intent: ${searchIntent}`,
        `Business Type: ${businessType}`,
        "",
        "Recommended Page Angle",
        brief.recommendedAngle,
        "",
        "Search Intent Summary",
        brief.searchIntentSummary,
        "",
        "Buyer Intent Notes",
        brief.buyerIntentNotes,
        "",
        "Suggested H1",
        brief.h1,
        "",
        "SEO Title",
        brief.title,
        "",
        "Meta Description",
        brief.metaDescription,
        "",
        "Content Outline",
        formatList(brief.outline),
        "",
        "Must-Cover Sections",
        formatList(brief.mustCover),
        "",
        "Internal Link Suggestions",
        formatList(brief.internalLinks),
        "",
        "CTA Placement",
        brief.ctaPlacement,
        "",
        "Trust / E-E-A-T Signals",
        formatList(brief.trustSignals),
        "",
        "GEO / AI Search Readiness Notes",
        formatList(brief.geoNotes),
        "",
        "Final Brief Summary",
        brief.finalSummary,
      ].join("\n"),
    [brief, businessType, pageType, searchIntent, targetBuyer, targetKeyword],
  );

  const handleGenerate = () => {
    setHasGenerated(true);
    setCopied(false);
    window.gtag?.("event", "generate_content_brief", {
      page_type: pageType,
      search_intent: searchIntent,
      business_type: businessType,
    });
  };

  const handleCopyResult = async () => {
    if (!resultText) return;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is not available.");
      }

      await navigator.clipboard.writeText(resultText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy result:", error);
    }
  };

  return (
    <section id="brief-generator" className="px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Tool
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Generate a B2B SEO Content Brief
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Choose the page context and get a rule-based brief with page angle, outline,
              internal links, trust signals, CTA guidance, and GEO notes.
            </p>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">Page Type</span>
              <select
                value={pageType}
                onChange={(event) => setPageType(event.target.value as PageType)}
                className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              >
                {pageTypes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                Target Keyword
              </span>
              <input
                value={targetKeyword}
                onChange={(event) => setTargetKeyword(event.target.value)}
                placeholder="e.g. B2B SEO strategy, fleet management software, industrial battery supplier"
                className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">Target Buyer</span>
              <select
                value={targetBuyer}
                onChange={(event) => setTargetBuyer(event.target.value as TargetBuyer)}
                className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              >
                {targetBuyers.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                Search Intent
              </span>
              <select
                value={searchIntent}
                onChange={(event) => setSearchIntent(event.target.value as SearchIntent)}
                className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              >
                {searchIntents.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                Business Type
              </span>
              <select
                value={businessType}
                onChange={(event) => setBusinessType(event.target.value as BusinessType)}
                className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              >
                {businessTypes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={handleGenerate}
              className="w-full rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Generate a Brief
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {hasGenerated ? (
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5 sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Generated Brief
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {brief.h1}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Rule-based output for {pageType}, {targetBuyer}, {searchIntent}, {businessType}.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                <BriefTextBlock label="Recommended Page Angle" text={brief.recommendedAngle} />
                <BriefTextBlock label="Search Intent Summary" text={brief.searchIntentSummary} />
                <BriefTextBlock label="Buyer Intent Notes" text={brief.buyerIntentNotes} />
                <BriefTextBlock label="Suggested H1" text={brief.h1} />
                <BriefTextBlock label="SEO Title" text={brief.title} />
                <BriefTextBlock label="Meta Description" text={brief.metaDescription} />
                <BriefListBlock label="Content Outline" items={brief.outline} />
                <BriefListBlock label="Must-Cover Sections" items={brief.mustCover} />
                <BriefListBlock label="Internal Link Suggestions" items={brief.internalLinks} />
                <BriefTextBlock label="CTA Placement" text={brief.ctaPlacement} />
                <BriefListBlock label="Trust / E-E-A-T Signals" items={brief.trustSignals} />
                <BriefListBlock label="GEO / AI Search Readiness Notes" items={brief.geoNotes} />
                <BriefTextBlock label="Final Brief Summary" text={brief.finalSummary} />
              </div>

              <div className="border-t border-slate-200 bg-white p-5 sm:p-6">
                <button
                  type="button"
                  onClick={handleCopyResult}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  {copied ? "Copied!" : "Copy result"}
                </button>
              </div>

              <div className="border-t border-slate-200 bg-[#F8FAFC] p-5 sm:p-6">
                <p className="mb-3 text-sm font-semibold text-slate-900">
                  Next step after the brief
                </p>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  If the page is tied to qualified leads, audit the current site first and then
                  place the brief inside a broader B2B SEO workflow.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/b2b-seo-audit"
                    className="rounded-2xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Run a B2B SEO Audit first
                  </a>
                  <a
                    href="/b2b-seo-strategy"
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Build your SEO strategy workflow
                  </a>
                </div>
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
                >
                  Get Free Early Access
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function BriefTextBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="p-5 sm:p-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}

function BriefListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="p-5 sm:p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
        {label}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
