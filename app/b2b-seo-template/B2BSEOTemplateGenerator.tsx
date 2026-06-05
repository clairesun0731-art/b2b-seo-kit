"use client";

import { useMemo, useState } from "react";
import CopyResultButton from "@/components/CopyResultButton";
import ToolCtaCards from "@/components/ToolCtaCards";

const websiteTypes = [
  "B2B SaaS",
  "B2B services / professional services",
  "Manufacturer / exporter",
  "Agency / consultant",
  "B2B ecommerce",
] as const;

const seoGoals = [
  "Generate qualified leads",
  "Build topical authority",
  "Improve commercial pages",
  "Support sales conversations",
  "Enter a new market",
  "Improve AI search visibility",
] as const;

const stages = [
  "No SEO plan yet",
  "Some pages but no clear structure",
  "Blog traffic but weak leads",
  "Commercial pages need improvement",
  "Need a repeatable SEO workflow",
] as const;

const buyers = [
  "Founder / CEO",
  "Marketing manager",
  "Sales-led team",
  "Procurement / sourcing buyer",
  "Technical decision-maker",
] as const;

type WebsiteType = (typeof websiteTypes)[number];
type SeoGoal = (typeof seoGoals)[number];
type Stage = (typeof stages)[number];
type Buyer = (typeof buyers)[number];

type MappingRow = {
  keywordType: string;
  intent: string;
  pageType: string;
};

type WebsiteRule = {
  focus: string;
  sections: string[];
  mapping: MappingRow[];
  workflow: string[];
  links: string[];
  conversion: string[];
  geo: string[];
  week: string[];
};

const websiteRules: Record<WebsiteType, WebsiteRule> = {
  "B2B SaaS": {
    focus:
      "connect problem-aware content, use-case pages, feature pages, comparison pages, integration pages, and demo-focused conversion paths instead of only publishing blog posts.",
    sections: [
      "SEO goal and pipeline priority",
      "Buyer role and search intent map",
      "Keyword-to-page map for features, use cases, integrations, and alternatives",
      "Commercial page improvement plan for product, feature, and demo pages",
      "Content production workflow for pain-point and comparison content",
      "Internal linking plan from guides to feature and demo pages",
      "AI search / GEO readiness notes for software category answers",
    ],
    mapping: [
      {
        keywordType: "Problem keywords",
        intent: "Buyer researches a workflow problem",
        pageType: "Educational guide",
      },
      {
        keywordType: "Solution keywords",
        intent: "Buyer compares approaches or software categories",
        pageType: "Solution page",
      },
      {
        keywordType: "Feature keywords",
        intent: "Buyer knows the capability they need",
        pageType: "Feature page",
      },
      {
        keywordType: "Integration keywords",
        intent: "Buyer checks stack fit",
        pageType: "Integration page",
      },
      {
        keywordType: "Comparison / alternative keywords",
        intent: "Buyer evaluates vendors",
        pageType: "Comparison or alternative page",
      },
      {
        keywordType: "Demo intent",
        intent: "Buyer is ready to evaluate",
        pageType: "Demo page or product page CTA",
      },
    ],
    workflow: [
      "Pick one product, feature, or use-case page to strengthen.",
      "Map three to five supporting problem and comparison topics around it.",
      "Add internal links from guides to the closest feature, use-case, or demo page.",
      "Add proof blocks, FAQs, integration details, and demo CTAs.",
      "Track impressions, clicks, demo actions, and trial or form events.",
    ],
    links: [
      "Link educational guides to use-case, feature, integration, and product pages.",
      "Link comparison pages to product pages, proof assets, and demo CTAs.",
      "Link feature pages to integrations, use cases, and related alternatives.",
      "Use descriptive anchors such as 'customer onboarding software' instead of generic text.",
    ],
    conversion: [
      "One primary demo or trial CTA on every commercial page.",
      "Secondary CTA for lower-intent visitors, such as a checklist, template, or guide.",
      "Demo, trial, and contact form tracking by landing page.",
      "Proof block near the CTA: case study, review, integration, or customer result.",
      "GA4 and GSC review of pages that get impressions but no demo actions.",
    ],
    geo: [
      "Clear software category definition near the top of the page.",
      "Specific use case, buyer role, and integration sections.",
      "FAQ blocks for pricing, implementation, alternatives, and fit.",
      "Comparison tables for evaluation-stage queries.",
      "Short answer sections that AI systems can cite.",
    ],
    week: [
      "Choose one target buyer and one demo-related SEO goal.",
      "Audit your top five product, feature, or use-case pages.",
      "Build a keyword-to-page map for problem, feature, integration, and comparison terms.",
      "Add internal links from existing posts to one priority demo page.",
      "Track demo and trial actions by landing page.",
    ],
  },
  "B2B services / professional services": {
    focus:
      "connect service pages, industry pages, process content, proof, and consultation paths so educational traffic can move toward qualified service inquiries.",
    sections: [
      "SEO goal and service revenue priority",
      "Buyer and objection map",
      "Keyword-to-page map for service, industry, process, and proof terms",
      "Commercial service page improvement plan",
      "Content workflow for problem, process, and checklist content",
      "Internal linking plan from guides to service and case study pages",
      "Lead tracking and consultation conversion checklist",
    ],
    mapping: [
      {
        keywordType: "Problem keywords",
        intent: "Buyer researches a business pain point",
        pageType: "Educational guide",
      },
      {
        keywordType: "Service keywords",
        intent: "Buyer needs a provider",
        pageType: "Service page",
      },
      {
        keywordType: "Industry keywords",
        intent: "Buyer wants relevant expertise",
        pageType: "Industry landing page",
      },
      {
        keywordType: "Process keywords",
        intent: "Buyer checks how the work happens",
        pageType: "Process page",
      },
      {
        keywordType: "Proof keywords",
        intent: "Buyer needs evidence before inquiry",
        pageType: "Case study",
      },
      {
        keywordType: "Pricing / engagement keywords",
        intent: "Buyer evaluates budget and fit",
        pageType: "Pricing or engagement page",
      },
    ],
    workflow: [
      "Pick one service page that can create qualified inquiries.",
      "Map three supporting guides around buyer problems, process, and selection criteria.",
      "Add internal links from those guides to service, proof, and consultation pages.",
      "Add process, scope, proof, FAQ, and CTA sections to the service page.",
      "Track consultation clicks, form submissions, and service page assisted leads.",
    ],
    links: [
      "Link problem guides to the closest service page.",
      "Link service pages to process pages, case studies, and consultation CTAs.",
      "Link industry pages to relevant service and proof pages.",
      "Use anchors that name the service or buyer problem, not 'learn more'.",
    ],
    conversion: [
      "One clear consultation or inquiry CTA per service page.",
      "Secondary CTA for early-stage visitors, such as an audit checklist or template.",
      "Contact form, email click, and consultation event tracking.",
      "Case study or methodology proof near the CTA.",
      "Review pages that get service intent clicks but no inquiry actions.",
    ],
    geo: [
      "Clear service definition and who-it-is-for section.",
      "Specific audience, industry, scope, and deliverable sections.",
      "FAQ blocks for cost, timeline, fit, process, and outcomes.",
      "Comparison tables for service approach or agency selection queries.",
      "Author or company proof that supports expertise.",
    ],
    week: [
      "Choose one buyer type and one service inquiry goal.",
      "Audit your top five service or industry pages.",
      "Build a keyword-to-page map for service, problem, process, and proof terms.",
      "Add internal links from existing guides to service pages.",
      "Track consultation and contact actions by landing page.",
    ],
  },
  "Manufacturer / exporter": {
    focus:
      "connect product category pages, application pages, certification content, technical specs, distributor or dealer paths, and RFQ conversion points.",
    sections: [
      "SEO goal and priority product category",
      "Buyer and sourcing intent map",
      "Keyword-to-page map for category, application, certification, and supplier terms",
      "Product category page improvement plan",
      "Technical content workflow for specs, applications, and FAQs",
      "Internal linking plan from applications to product and RFQ pages",
      "RFQ and distributor conversion checklist",
    ],
    mapping: [
      {
        keywordType: "Product category keywords",
        intent: "Buyer knows the product type",
        pageType: "Product category page",
      },
      {
        keywordType: "Application keywords",
        intent: "Buyer searches by use case",
        pageType: "Application page",
      },
      {
        keywordType: "Specification keywords",
        intent: "Buyer checks technical fit",
        pageType: "Product or spec page",
      },
      {
        keywordType: "Certification keywords",
        intent: "Buyer verifies compliance",
        pageType: "Certification page or section",
      },
      {
        keywordType: "Supplier / distributor keywords",
        intent: "Buyer is sourcing vendors",
        pageType: "Supplier, exporter, distributor, or dealer page",
      },
      {
        keywordType: "Proof keywords",
        intent: "Buyer needs trust before RFQ",
        pageType: "Case study",
      },
    ],
    workflow: [
      "Pick one product category page to strengthen.",
      "Map three to five supporting application, specification, or certification topics.",
      "Add internal links from application guides to product category and RFQ pages.",
      "Add specs, certifications, FAQs, export details, proof blocks, and RFQ CTAs.",
      "Track impressions, product page clicks, RFQ submissions, and contact actions.",
    ],
    links: [
      "Link application pages to product category, product detail, and RFQ pages.",
      "Link product pages to certifications, QA process, export capability, and case studies.",
      "Link certification pages back to relevant product categories.",
      "Use anchors that include product category, application, or certification terms.",
    ],
    conversion: [
      "One clear RFQ or contact CTA on product and application pages.",
      "Secondary CTA for datasheet, catalog, certification, or product guide downloads.",
      "RFQ, email, form, and distributor inquiry tracking by landing page.",
      "Certification, QA, lead time, MOQ, and case study proof near CTAs.",
      "GSC and GA4 review of product categories with impressions but weak inquiries.",
    ],
    geo: [
      "Clear entity descriptions for product category, material, application, and market.",
      "Specific specs, certifications, and compliance sections.",
      "FAQ blocks for sourcing, MOQ, lead time, samples, and RFQ.",
      "Comparison tables for materials, specs, applications, or supplier criteria.",
      "Short answer sections for supplier and manufacturer queries.",
    ],
    week: [
      "Choose one priority product category and one sourcing buyer.",
      "Audit your top five product category or application pages.",
      "Build a keyword-to-page map for category, application, certification, and supplier terms.",
      "Add internal links from existing guides to product and RFQ pages.",
      "Track RFQ, email, and catalog download actions by landing page.",
    ],
  },
  "Agency / consultant": {
    focus:
      "connect niche service pages, methodology content, case studies, pricing or engagement clarity, and diagnostic call paths.",
    sections: [
      "SEO goal and pipeline priority",
      "Buyer role, niche, and objection map",
      "Keyword-to-page map for service, niche, process, pricing, and proof terms",
      "Service page improvement plan",
      "Content workflow for methodology, comparisons, and checklist content",
      "Internal linking plan from expertise content to services and case studies",
      "Diagnostic call conversion checklist",
    ],
    mapping: [
      {
        keywordType: "Service keywords",
        intent: "Buyer needs an agency or consultant",
        pageType: "Service page",
      },
      {
        keywordType: "Niche keywords",
        intent: "Buyer wants specific expertise",
        pageType: "Niche landing page",
      },
      {
        keywordType: "Problem keywords",
        intent: "Buyer researches a pain point",
        pageType: "Guide",
      },
      {
        keywordType: "Process keywords",
        intent: "Buyer wants to know how it works",
        pageType: "Process page",
      },
      {
        keywordType: "Pricing / engagement keywords",
        intent: "Buyer evaluates budget and scope",
        pageType: "Pricing or engagement page",
      },
      {
        keywordType: "Proof keywords",
        intent: "Buyer needs evidence",
        pageType: "Case study",
      },
    ],
    workflow: [
      "Pick one service or niche landing page to strengthen.",
      "Map three to five supporting methodology, comparison, or proof topics.",
      "Add internal links from expertise content to services, proof, and call CTAs.",
      "Add process, scope, proof, FAQs, and diagnostic call CTAs.",
      "Track book-call clicks, forms, and service page assisted conversions.",
    ],
    links: [
      "Link thought leadership to service, process, and case study pages.",
      "Link comparison content to the relevant service page and diagnostic CTA.",
      "Link case studies back to the service and niche pages they support.",
      "Use anchors that name the service, niche, or buyer problem.",
    ],
    conversion: [
      "One clear diagnostic, audit, or strategy call CTA per service page.",
      "Secondary CTA for a checklist, template, or mini audit.",
      "Book-call, email, and form event tracking by landing page.",
      "Case study, methodology, or founder proof near CTAs.",
      "Review pages with traffic but weak call-booking actions.",
    ],
    geo: [
      "Clear descriptions of niche, service category, methodology, and deliverables.",
      "Specific audience, use case, and proof sections.",
      "FAQ blocks for process, cost, timeline, fit, and deliverables.",
      "Comparison tables for agency versus consultant or done-for-you versus advisory.",
      "Author or founder proof sections that can be summarized.",
    ],
    week: [
      "Choose one target buyer and one service pipeline goal.",
      "Audit your top five service, niche, or case study pages.",
      "Build a keyword-to-page map for service, niche, process, pricing, and proof terms.",
      "Add internal links from existing expertise content to service pages.",
      "Track call-booking and form actions by landing page.",
    ],
  },
  "B2B ecommerce": {
    focus:
      "connect category pages, product detail pages, buying guides, comparison content, account or quote paths, and internal links from guides to commercial pages.",
    sections: [
      "SEO goal and priority category",
      "Buyer and purchase intent map",
      "Keyword-to-page map for categories, specs, applications, and comparisons",
      "Category and product page improvement plan",
      "Buying guide workflow",
      "Internal linking plan from guides to categories and products",
      "Quote, account, and purchase conversion checklist",
    ],
    mapping: [
      {
        keywordType: "Category keywords",
        intent: "Buyer browses a product type",
        pageType: "Category page",
      },
      {
        keywordType: "Product keywords",
        intent: "Buyer knows what they need",
        pageType: "Product detail page",
      },
      {
        keywordType: "Specification keywords",
        intent: "Buyer checks fit",
        pageType: "Product/spec section",
      },
      {
        keywordType: "Application keywords",
        intent: "Buyer searches by use case",
        pageType: "Application or buying guide",
      },
      {
        keywordType: "Comparison keywords",
        intent: "Buyer evaluates options",
        pageType: "Comparison page",
      },
      {
        keywordType: "Bulk / quote keywords",
        intent: "Buyer wants commercial terms",
        pageType: "Bulk quote or account page",
      },
    ],
    workflow: [
      "Pick one category page to strengthen.",
      "Map three to five supporting buying guide, application, or comparison topics.",
      "Add internal links from guides to categories, subcategories, and priority products.",
      "Add specs, compatibility, FAQs, proof, and quote or account CTAs.",
      "Track category clicks, product views, quote actions, and account events.",
    ],
    links: [
      "Link buying guides to category, subcategory, and product detail pages.",
      "Link comparison pages to the relevant category and quote paths.",
      "Link category pages to related categories, filters, specs, and support pages.",
      "Use descriptive anchors around product type, spec, or buying intent.",
    ],
    conversion: [
      "One clear quote, account, or purchase CTA per commercial page.",
      "Secondary CTA for buying guide, checklist, or product comparison.",
      "Quote, account, product view, and checkout assist tracking.",
      "Availability, MOQ, lead time, certifications, and support proof near CTAs.",
      "Review high-impression categories with weak product or quote actions.",
    ],
    geo: [
      "Clear product category definitions and buying criteria.",
      "Specific specs, materials, compatibility, and use case sections.",
      "FAQ blocks for fit, shipping, MOQ, lead time, and bulk ordering.",
      "Comparison tables for product types, materials, specs, or applications.",
      "Short answer sections for product selection queries.",
    ],
    week: [
      "Choose one priority category and one buyer intent.",
      "Audit your top five category or product pages.",
      "Build a keyword-to-page map for category, product, spec, and comparison terms.",
      "Add internal links from guides to priority category pages.",
      "Track quote, account, and product view actions by landing page.",
    ],
  },
};

const goalNotes: Record<SeoGoal, string> = {
  "Generate qualified leads":
    "Prioritize pages that can create demos, inquiries, RFQs, consultations, or account actions over broad traffic.",
  "Build topical authority":
    "Build supporting content around commercial pages so expertise and internal links reinforce the pages closest to revenue.",
  "Improve commercial pages":
    "Strengthen product, service, category, solution, and comparison pages before expanding the blog.",
  "Support sales conversations":
    "Add proof, comparison, objection-handling, and FAQ sections that sales can reuse in buyer conversations.",
  "Enter a new market":
    "Create market, industry, application, or niche pages with proof and internal links before scaling content.",
  "Improve AI search visibility":
    "Use concise answer blocks, entity-rich descriptions, FAQs, and comparison tables so AI systems can extract the page correctly.",
};

const stageNotes: Record<Stage, string> = {
  "No SEO plan yet":
    "Start with a simple page map, then choose one commercial page and one supporting content cluster.",
  "Some pages but no clear structure":
    "Clarify which page owns each keyword group before publishing more overlapping content.",
  "Blog traffic but weak leads":
    "Audit content-to-conversion paths and add internal links from traffic pages to commercial pages.",
  "Commercial pages need improvement":
    "Improve the pages closest to revenue with stronger headings, proof, FAQs, and CTAs.",
  "Need a repeatable SEO workflow":
    "Turn the template into a monthly routine for page updates, briefs, links, and conversion review.",
};

const buyerNotes: Record<Buyer, string> = {
  "Founder / CEO": "Keep the template tied to pipeline priorities, page ownership, and speed of execution.",
  "Marketing manager": "Make the workflow easy to brief, assign, review, and report across SEO and content tasks.",
  "Sales-led team": "Add sales objections, proof, comparison sections, and lead quality notes to the template.",
  "Procurement / sourcing buyer":
    "Prioritize specs, sourcing details, supplier proof, certifications, lead time, and RFQ paths.",
  "Technical decision-maker":
    "Include technical fit, integrations, specs, implementation notes, documentation, and proof.",
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

function bulletList(title: string, items: string[]) {
  return [
    title,
    ...items.map((item) => `- ${item}`),
    "",
  ].join("\n");
}

export default function B2BSEOTemplateGenerator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("B2B SaaS");
  const [goal, setGoal] = useState<SeoGoal>("Generate qualified leads");
  const [stage, setStage] = useState<Stage>("Some pages but no clear structure");
  const [buyer, setBuyer] = useState<Buyer>("Marketing manager");
  const [generated, setGenerated] = useState(false);

  const result = useMemo(() => {
    const rule = websiteRules[websiteType];

    return {
      focus: `For a ${websiteType} site focused on ${goal.toLowerCase()}, your B2B SEO template should ${rule.focus} ${stageNotes[stage]} ${buyerNotes[buyer]} ${goalNotes[goal]}`,
      structure: rule.sections,
      mapping: rule.mapping,
      workflow: rule.workflow,
      links: [
        ...rule.links,
        "Link audit, strategy, checklist, and template pages together so users can keep moving through the workflow.",
        "Avoid generic anchors like 'learn more'; name the page type, buyer problem, or product category.",
      ],
      conversion: rule.conversion,
      geo: rule.geo,
      week: rule.week,
    };
  }, [buyer, goal, stage, websiteType]);

  const copyText = useMemo(() => {
    const mappingText = [
      "Keyword-to-Page Mapping Template",
      ...result.mapping.map(
        (row) => `- ${row.keywordType}: ${row.intent} -> ${row.pageType}`,
      ),
      "",
    ].join("\n");

    return [
      "B2B SEO Template Generator Result",
      "",
      `Website type: ${websiteType}`,
      `Main SEO goal: ${goal}`,
      `Current stage: ${stage}`,
      `Primary buyer: ${buyer}`,
      "",
      `Your B2B SEO Template Focus\n${result.focus}\n`,
      bulletList("Recommended SEO Template Structure", result.structure),
      mappingText,
      bulletList("Content Workflow Template", result.workflow),
      bulletList("Internal Linking Template", result.links),
      bulletList("Conversion Path Template", result.conversion),
      bulletList("AI Search / GEO Readiness Template", result.geo),
      bulletList("What to Do This Week", result.week),
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
            Generate your B2B SEO template
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Choose your website type, SEO goal, current stage, and buyer role. The output gives
            you a practical structure for page mapping, content workflow, internal links,
            conversion paths, and GEO readiness.
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
                label="Main SEO Goal"
                value={goal}
                options={seoGoals}
                onChange={(value) => setGoal(value as SeoGoal)}
              />
              <SelectField
                label="Current Stage"
                value={stage}
                options={stages}
                onChange={(value) => setStage(value as Stage)}
              />
              <SelectField
                label="Primary Buyer"
                value={buyer}
                options={buyers}
                onChange={(value) => setBuyer(value as Buyer)}
              />
              <button
                type="button"
                onClick={() => setGenerated(true)}
                className="w-full rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Generate your B2B SEO template
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
                  Your template will appear here.
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  Use the dropdowns to describe your B2B website, then generate a practical
                  template you can copy into a planning doc or SEO workflow.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <section>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    1. Your B2B SEO Template Focus
                  </p>
                  <p className="text-[15px] leading-relaxed text-slate-700">{result.focus}</p>
                </section>

                <section>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    2. Recommended SEO Template Structure
                  </h3>
                  <ul className="space-y-2">
                    {result.structure.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
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
                      <div className="border-r border-slate-200 p-3">Keyword Type</div>
                      <div className="border-r border-slate-200 p-3">Example Search Intent</div>
                      <div className="p-3">Recommended Page Type</div>
                    </div>
                    {result.mapping.map((row) => (
                      <div
                        key={row.keywordType}
                        className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
                      >
                        <div className="border-slate-200 p-3 font-medium sm:border-r">
                          {row.keywordType}
                        </div>
                        <div className="border-slate-200 p-3 sm:border-r">{row.intent}</div>
                        <div className="p-3">{row.pageType}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {[
                  ["4. Content Workflow Template", result.workflow],
                  ["5. Internal Linking Template", result.links],
                  ["6. Conversion Path Template", result.conversion],
                  ["7. AI Search / GEO Readiness Template", result.geo],
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
                      title: "Need a full workflow? Try the B2B SEO Strategy Generator",
                      href: "/b2b-seo-strategy/",
                      description:
                        "Turn your template into a practical SEO workflow with page priorities, briefs, links, and conversion checks.",
                    },
                    {
                      title: "Not sure what to fix first? Run the B2B SEO Audit Generator",
                      href: "/b2b-seo-audit/",
                      description:
                        "Find the page, content, internal linking, and GEO gaps that should shape your template.",
                    },
                    {
                      title: "Planning content next? Use the B2B Content Brief Generator",
                      href: "/b2b-seo-brief-generator/",
                      description:
                        "Convert one keyword group into a practical brief for writers, agencies, or AI-assisted drafting.",
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
