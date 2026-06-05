"use client";

import { useMemo, useState } from "react";
import CopyResultButton from "@/components/CopyResultButton";
import ToolCtaCards from "@/components/ToolCtaCards";

const websiteTypes = [
  "B2B SaaS",
  "B2B services",
  "Manufacturer / exporter",
  "Agency / consultant",
  "B2B ecommerce",
] as const;

const buyers = [
  "Founder / CEO",
  "Marketing manager",
  "Sales team",
  "Procurement buyer",
  "Technical decision-maker",
] as const;

const goals = [
  "Generate leads",
  "Build topical authority",
  "Improve product/service pages",
  "Support sales conversations",
  "Enter a new vertical",
  "Improve AI search visibility",
] as const;

const stages = [
  "Starting from scratch",
  "Have keywords but no mapping",
  "Have blog traffic but weak conversions",
  "Need more commercial keywords",
  "Need better internal linking",
] as const;

type WebsiteType = (typeof websiteTypes)[number];
type Buyer = (typeof buyers)[number];
type Goal = (typeof goals)[number];
type Stage = (typeof stages)[number];

type MappingRow = {
  category: string;
  intent: string;
  page: string;
};

type KeywordRule = {
  focus: string;
  categories: string[];
  mapping: MappingRow[];
  linkPlan: string[];
  conversion: string[];
  geo: string[];
  week: string[];
};

const keywordRules: Record<WebsiteType, KeywordRule> = {
  "B2B SaaS": {
    focus:
      "prioritize problem, solution, feature, integration, comparison, alternative, and demo-intent keywords so each cluster supports a product, use-case, or demo path.",
    categories: [
      "Problem keywords",
      "Solution keywords",
      "Feature keywords",
      "Integration / compatibility keywords",
      "Comparison keywords",
      "Alternative keywords",
      "AI search / answer-style queries",
    ],
    mapping: [
      {
        category: "Problem",
        intent: "how to reduce churn",
        page: "Blog / guide",
      },
      {
        category: "Solution",
        intent: "customer success software",
        page: "Solution page",
      },
      {
        category: "Feature",
        intent: "automated onboarding software",
        page: "Feature page",
      },
      {
        category: "Integration",
        intent: "crm integration software",
        page: "Integration page",
      },
      {
        category: "Comparison",
        intent: "x vs y",
        page: "Comparison page",
      },
      {
        category: "Alternative",
        intent: "alternative to x",
        page: "Alternative page",
      },
    ],
    linkPlan: [
      "Link problem content to solution, use-case, and feature pages.",
      "Link solution pages to product, feature, comparison, integration, and demo pages.",
      "Link comparison and alternative pages to proof and demo CTAs.",
      "Add links from high-impression posts to weak product or demo pages.",
    ],
    conversion: [
      "Use soft CTAs for problem keywords, such as checklist or template downloads.",
      "Use demo or trial CTAs for feature, solution, comparison, and alternative keywords.",
      "Track demo clicks, trial clicks, forms, downloads, and high-intent page visits.",
    ],
    geo: [
      "Question-style keywords around category definitions, workflows, and integrations.",
      "Comparison queries and alternative queries.",
      "How-to-choose queries for software categories.",
      "Concise summaries and structured answers for AI citation.",
    ],
    week: [
      "List your top five product, feature, or use-case pages.",
      "Collect 20 to 30 keywords across problem, solution, feature, integration, and comparison intent.",
      "Assign one primary page type to each keyword group.",
      "Add internal links from existing posts to one priority demo path.",
      "Track demo, trial, and form actions from mapped pages.",
    ],
  },
  "B2B services": {
    focus:
      "prioritize service, problem, industry, process, pricing, proof, and consultation-intent keywords so content supports qualified service inquiries.",
    categories: [
      "Problem keywords",
      "Solution keywords",
      "Product/service keywords",
      "Comparison keywords",
      "Industry/use case keywords",
      "Pricing/engagement keywords",
      "AI search / answer-style queries",
    ],
    mapping: [
      {
        category: "Service",
        intent: "buyer needs a provider",
        page: "Service page",
      },
      {
        category: "Industry",
        intent: "buyer wants niche expertise",
        page: "Industry landing page",
      },
      {
        category: "Problem",
        intent: "buyer researches pain point",
        page: "Guide",
      },
      {
        category: "Process",
        intent: "buyer wants to know how it works",
        page: "Process page",
      },
      {
        category: "Pricing",
        intent: "buyer evaluates budget",
        page: "Pricing/engagement page",
      },
      {
        category: "Case study",
        intent: "buyer needs proof",
        page: "Case study",
      },
    ],
    linkPlan: [
      "Link problem content to service and industry pages.",
      "Link service pages to proof, process, pricing, and consultation pages.",
      "Link case studies back to the service and niche pages they support.",
      "Add links from high-impression educational pages to weak commercial pages.",
    ],
    conversion: [
      "Use soft CTAs for early-stage problem keywords.",
      "Use consultation, audit, or inquiry CTAs for service and pricing keywords.",
      "Track form submissions, consultation clicks, email clicks, downloads, and service page visits.",
    ],
    geo: [
      "Question-style keywords around process, cost, timeline, and fit.",
      "Comparison queries for service models and provider selection.",
      "What-is and how-to-choose queries for service categories.",
      "Structured answers with deliverables, audience, proof, and next steps.",
    ],
    week: [
      "List your top five service and industry pages.",
      "Collect 20 to 30 keywords across problem, service, industry, process, and pricing intent.",
      "Assign one primary page type to each keyword group.",
      "Add internal links from guides to priority service pages.",
      "Track consultation and form actions from mapped pages.",
    ],
  },
  "Manufacturer / exporter": {
    focus:
      "prioritize product category terms, application terms, certification-related terms, specification terms, supplier/vendor terms, and RFQ-driven commercial intent.",
    categories: [
      "Product/service keywords",
      "Industry/use case keywords",
      "Certification/specification keywords",
      "Supplier/vendor keywords",
      "Comparison keywords",
      "Template/checklist/workflow keywords",
      "AI search / answer-style queries",
    ],
    mapping: [
      {
        category: "Product category",
        intent: "buyer knows product type",
        page: "Category page",
      },
      {
        category: "Specification",
        intent: "buyer checks technical fit",
        page: "Product/spec page",
      },
      {
        category: "Application",
        intent: "buyer searches by use case",
        page: "Application page",
      },
      {
        category: "Certification",
        intent: "buyer verifies compliance",
        page: "Certification section/page",
      },
      {
        category: "Supplier/vendor",
        intent: "buyer is sourcing",
        page: "Supplier/exporter page",
      },
      {
        category: "RFQ intent",
        intent: "buyer is ready to contact",
        page: "Product/contact CTA",
      },
    ],
    linkPlan: [
      "Link application content to product category, product detail, and RFQ pages.",
      "Link product pages to certifications, QA, specs, export capability, and case studies.",
      "Link supplier/vendor pages to relevant products and contact paths.",
      "Add links from high-impression application pages to weak product categories.",
    ],
    conversion: [
      "Use soft CTAs for application and specification guides, such as catalog or datasheet downloads.",
      "Use RFQ, quote, distributor, or contact CTAs for product and supplier keywords.",
      "Track clicks, forms, downloads, RFQs, email actions, and product page visits.",
    ],
    geo: [
      "Question-style keywords around specs, applications, certifications, and sourcing.",
      "How-to-choose queries for product categories and supplier selection.",
      "What-is definitions for technical product categories.",
      "Entity-rich descriptions with product, material, certification, application, and market terms.",
    ],
    week: [
      "List your top five product category or application pages.",
      "Collect 20 to 30 keywords across category, spec, application, certification, and supplier intent.",
      "Assign one primary page type to each keyword group.",
      "Add internal links from existing guides to priority product and RFQ pages.",
      "Track RFQ, contact, email, and catalog download actions from mapped pages.",
    ],
  },
  "Agency / consultant": {
    focus:
      "prioritize service, niche, problem, process, pricing, case study, and diagnostic-call keywords so expertise content routes buyers to commercial pages.",
    categories: [
      "Problem keywords",
      "Solution keywords",
      "Product/service keywords",
      "Comparison keywords",
      "Industry/use case keywords",
      "Pricing/engagement keywords",
      "AI search / answer-style queries",
    ],
    mapping: [
      {
        category: "Service",
        intent: "buyer needs a provider",
        page: "Service page",
      },
      {
        category: "Industry",
        intent: "buyer wants niche expertise",
        page: "Industry landing page",
      },
      {
        category: "Problem",
        intent: "buyer researches pain point",
        page: "Guide",
      },
      {
        category: "Process",
        intent: "buyer wants to know how it works",
        page: "Process page",
      },
      {
        category: "Pricing",
        intent: "buyer evaluates budget",
        page: "Pricing/engagement page",
      },
      {
        category: "Case study",
        intent: "buyer needs proof",
        page: "Case study",
      },
    ],
    linkPlan: [
      "Link thought leadership to service, niche, process, and case study pages.",
      "Link process pages to service pages and diagnostic CTAs.",
      "Link comparison pages to proof and consultation paths.",
      "Add links from high-impression guides to underlinked service pages.",
    ],
    conversion: [
      "Use soft CTAs for problem and framework keywords.",
      "Use diagnostic call, audit, consultation, or inquiry CTAs for service and pricing keywords.",
      "Track book-call clicks, forms, downloads, and service page visits.",
    ],
    geo: [
      "Question-style keywords around process, methodology, cost, and provider selection.",
      "Comparison queries for agency versus consultant or service model choices.",
      "How-to-choose and best-practice queries with structured answers.",
      "Entity-rich descriptions of niche, method, deliverables, proof, and audience.",
    ],
    week: [
      "List your top five service, niche, or case study pages.",
      "Collect 20 to 30 keywords across service, problem, process, pricing, and proof intent.",
      "Assign one primary page type to each keyword group.",
      "Add internal links from expertise content to priority service pages.",
      "Track call-booking and form actions from mapped pages.",
    ],
  },
  "B2B ecommerce": {
    focus:
      "prioritize category, product, specification, application, comparison, buying guide, and bulk quote keywords so guides support commercial pages.",
    categories: [
      "Problem keywords",
      "Solution keywords",
      "Product/service keywords",
      "Comparison keywords",
      "Industry/use case keywords",
      "Integration/specification keywords",
      "AI search / answer-style queries",
    ],
    mapping: [
      {
        category: "Category",
        intent: "buyer browses a product type",
        page: "Category page",
      },
      {
        category: "Product",
        intent: "buyer knows the item",
        page: "Product page",
      },
      {
        category: "Specification",
        intent: "buyer checks fit",
        page: "Spec section or product page",
      },
      {
        category: "Application",
        intent: "buyer searches by use case",
        page: "Application or buying guide",
      },
      {
        category: "Comparison",
        intent: "buyer evaluates options",
        page: "Comparison page",
      },
      {
        category: "Bulk / quote",
        intent: "buyer wants commercial terms",
        page: "Quote or account page",
      },
    ],
    linkPlan: [
      "Link buying guides to category, subcategory, product, and quote pages.",
      "Link category pages to related categories, filters, specs, and support pages.",
      "Link comparison pages to product categories and bulk quote CTAs.",
      "Add links from high-impression guides to weak category pages.",
    ],
    conversion: [
      "Use soft CTAs for buying guides and application content.",
      "Use quote, account, contact, or product CTAs for category and commercial keywords.",
      "Track clicks, product views, forms, downloads, quote requests, and account actions.",
    ],
    geo: [
      "Question-style keywords around product selection, fit, specs, and applications.",
      "Comparison queries for materials, product types, and buying criteria.",
      "How-to-choose and best-practice queries for product categories.",
      "Structured summaries with specs, compatibility, MOQ, lead time, and support details.",
    ],
    week: [
      "List your top five category or product pages.",
      "Collect 20 to 30 keywords across category, product, spec, application, and comparison intent.",
      "Assign one primary page type to each keyword group.",
      "Add internal links from guides to priority category pages.",
      "Track quote, account, product view, and contact actions from mapped pages.",
    ],
  },
};

const buyerNotes: Record<Buyer, string> = {
  "Founder / CEO":
    "Keep the keyword map tied to lead quality, page priority, and commercial value.",
  "Marketing manager":
    "Make the map easy to turn into briefs, page updates, internal links, and reporting.",
  "Sales team":
    "Include comparison, objection, proof, and sales-support keywords that help conversations.",
  "Procurement buyer":
    "Prioritize supplier, specs, certifications, sourcing, lead time, and RFQ intent.",
  "Technical decision-maker":
    "Prioritize specifications, integrations, implementation, compatibility, and proof.",
};

const goalNotes: Record<Goal, string> = {
  "Generate leads":
    "Start with commercial keywords that can support demo, contact, RFQ, quote, or consultation actions.",
  "Build topical authority":
    "Build supporting clusters around commercial pages so authority reinforces pages that can convert.",
  "Improve product/service pages":
    "Map product, service, solution, category, feature, and comparison terms before writing more blogs.",
  "Support sales conversations":
    "Add keywords around objections, comparisons, proof, pricing, implementation, and how-to-choose queries.",
  "Enter a new vertical":
    "Create industry, use case, application, and vertical-specific keyword groups with proof paths.",
  "Improve AI search visibility":
    "Add question-style, definition, comparison, and how-to-choose keywords that can become structured answer blocks.",
};

const stageNotes: Record<Stage, string> = {
  "Starting from scratch":
    "Build the first map around five priority commercial pages before creating a long content calendar.",
  "Have keywords but no mapping":
    "Assign each keyword cluster to one primary page type so every term has a job.",
  "Have blog traffic but weak conversions":
    "Identify traffic pages that need internal links and intent-matched CTAs.",
  "Need more commercial keywords":
    "Expand product, service, supplier, vendor, comparison, pricing, and solution terms.",
  "Need better internal linking":
    "Use keyword groups to decide which educational pages should link to which commercial pages.",
};

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function listText(title: string, items: string[]) {
  return [title, ...items.map((item) => `- ${item}`), ""].join("\n");
}

const priorityGroups = [
  {
    title: "Priority 1: Commercial keywords",
    items: ["Product/service", "Vendor/supplier", "Comparison", "Pricing", "Solution keywords"],
  },
  {
    title: "Priority 2: Supporting content keywords",
    items: ["Problem", "How-to", "Use case", "Checklist", "Template", "Workflow"],
  },
  {
    title: "Priority 3: Authority and AI search keywords",
    items: ["Definitions", "Frameworks", "What is", "How to choose", "Best practices", "Answer-style queries"],
  },
];

export default function B2BKeywordResearchTemplateGenerator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("Manufacturer / exporter");
  const [buyer, setBuyer] = useState<Buyer>("Procurement buyer");
  const [goal, setGoal] = useState<Goal>("Generate leads");
  const [stage, setStage] = useState<Stage>("Have keywords but no mapping");
  const [generated, setGenerated] = useState(false);

  const result = useMemo(() => {
    const rule = keywordRules[websiteType];
    return {
      focus: `For a ${websiteType} targeting ${buyer.toLowerCase()}s, your B2B keyword research should ${rule.focus} ${goalNotes[goal]} ${stageNotes[stage]} ${buyerNotes[buyer]}`,
      categories: rule.categories,
      mapping: rule.mapping,
      internalLinks: [
        ...rule.linkPlan,
        "Link checklist and template pages to relevant tools so users can continue the workflow.",
        "Use descriptive anchors that name the problem, product, service, category, or buyer intent.",
      ],
      conversion: rule.conversion,
      geo: rule.geo,
      week: rule.week,
    };
  }, [buyer, goal, stage, websiteType]);

  const copyText = useMemo(() => {
    return [
      "B2B Keyword Research Template Result",
      "",
      `Website type: ${websiteType}`,
      `Target buyer: ${buyer}`,
      `Main SEO goal: ${goal}`,
      `Keyword stage: ${stage}`,
      "",
      `Your Keyword Research Focus\n${result.focus}\n`,
      listText("B2B Keyword Categories to Build", result.categories),
      [
        "Keyword-to-Page Mapping Template",
        ...result.mapping.map((row) => `- ${row.category}: ${row.intent} -> ${row.page}`),
        "",
      ].join("\n"),
      ...priorityGroups.map((group) => listText(group.title, group.items)),
      listText("Internal Linking Plan", result.internalLinks),
      listText("Conversion Path Notes", result.conversion),
      listText("AI Search / GEO Keyword Opportunities", result.geo),
      listText("What to Do This Week", result.week),
    ].join("\n");
  }, [buyer, goal, result, stage, websiteType]);

  return (
    <section id="generator" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Interactive Template
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Generate your keyword research template
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Choose your business context and get a keyword-to-page framework for buyer intent,
            commercial pages, supporting content, internal links, conversion paths, and GEO
            opportunities.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-5">
              <SelectField
                label="Website Type"
                value={websiteType}
                options={websiteTypes}
                onChange={(value) => setWebsiteType(value as WebsiteType)}
              />
              <SelectField
                label="Target Buyer"
                value={buyer}
                options={buyers}
                onChange={(value) => setBuyer(value as Buyer)}
              />
              <SelectField
                label="Main SEO Goal"
                value={goal}
                options={goals}
                onChange={(value) => setGoal(value as Goal)}
              />
              <SelectField
                label="Keyword Stage"
                value={stage}
                options={stages}
                onChange={(value) => setStage(value as Stage)}
              />
              <button
                type="button"
                onClick={() => setGenerated(true)}
                className="w-full rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Generate your keyword research template
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {!generated ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Output Preview
                </p>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Your keyword map will appear here.
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  Generate a practical keyword research structure that maps B2B search intent to
                  page types and lead paths.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <section>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    1. Your Keyword Research Focus
                  </p>
                  <p className="text-[15px] leading-relaxed text-slate-700">{result.focus}</p>
                </section>

                <section>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    2. B2B Keyword Categories to Build
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {result.categories.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    3. Keyword-to-Page Mapping Template
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="grid grid-cols-3 bg-slate-50 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      <div className="border-r border-slate-200 p-3">Keyword Category</div>
                      <div className="border-r border-slate-200 p-3">Example Intent</div>
                      <div className="p-3">Recommended Page</div>
                    </div>
                    {result.mapping.map((row) => (
                      <div
                        key={row.category}
                        className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
                      >
                        <div className="border-slate-200 p-3 font-medium sm:border-r">
                          {row.category}
                        </div>
                        <div className="border-slate-200 p-3 sm:border-r">{row.intent}</div>
                        <div className="p-3">{row.page}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    4. Priority Keyword List Framework
                  </h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {priorityGroups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                      >
                        <h4 className="mb-3 text-sm font-semibold text-slate-900">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item} className="text-sm text-slate-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {[
                  ["5. Internal Linking Plan", result.internalLinks],
                  ["6. Conversion Path Notes", result.conversion],
                  ["7. AI Search / GEO Keyword Opportunities", result.geo],
                  ["8. What to Do This Week", result.week],
                ].map(([title, items]) => (
                  <section key={title as string}>
                    <h3 className="mb-3 text-lg font-semibold text-slate-900">
                      {title as string}
                    </h3>
                    <ul className="space-y-2">
                      {(items as string[]).map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

                <div className="border-t border-slate-200 pt-6">
                  <CopyResultButton text={copyText} />
                </div>

                <ToolCtaCards
                  cards={[
                    {
                      title: "Turn this keyword map into a full strategy",
                      href: "/b2b-seo-strategy/",
                      description:
                        "Use the strategy generator to connect keywords, pages, briefs, internal links, and lead tracking.",
                    },
                    {
                      title: "Need to audit your current site first?",
                      href: "/b2b-seo-audit/",
                      description:
                        "Find which product, service, content, and internal linking gaps should shape your keyword map.",
                    },
                    {
                      title: "Need a reusable planning structure?",
                      href: "/b2b-seo-template/",
                      description:
                        "Build the broader B2B SEO template around your keyword research and page priorities.",
                    },
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
