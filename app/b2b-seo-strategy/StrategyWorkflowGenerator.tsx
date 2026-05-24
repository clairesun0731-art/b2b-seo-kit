"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";

const TALLY_URL = "https://tally.so/r/pbJK9J";

const websiteTypes = [
  "B2B SaaS",
  "B2B services / professional services",
  "Manufacturer / exporter",
  "Agency / consultant",
  "B2B ecommerce",
] as const;

const targetBuyers = [
  "Founder / CEO",
  "Marketing manager",
  "Sales-led / revenue team",
  "Procurement / sourcing buyer",
  "Technical decision-maker",
] as const;

const seoGoals = [
  "Generate qualified leads",
  "Build topical authority",
  "Strengthen commercial / money pages",
  "Support sales conversations",
  "Enter a new market or vertical",
  "Improve AI search visibility",
] as const;

const contentStages = [
  "No content strategy yet",
  "Some pages but no clear strategy",
  "Blog traffic but weak lead conversion",
  "Commercial pages need improvement",
  "Need a scalable system",
] as const;

type WebsiteType = (typeof websiteTypes)[number];
type TargetBuyer = (typeof targetBuyers)[number];
type SeoGoal = (typeof seoGoals)[number];
type ContentStage = (typeof contentStages)[number];

type PageType = {
  name: string;
  purpose: string;
};

type WebsitePlan = {
  pageTypes: PageType[];
  trustSignals: string[];
  conversionPath: string;
  conversionEndpoint: string;
};

type GoalPlan = {
  direction: string;
  pageTypes: PageType[];
  keywordMap: string[];
};

type StagePlan = {
  direction: string;
  workflow: string[];
  thisWeek: string[];
};

type BuyerPlan = {
  modifier: string;
  ctaLanguage: string[];
  tracking: string;
};

const websitePlans: Record<WebsiteType, WebsitePlan> = {
  "B2B SaaS": {
    pageTypes: [
      {
        name: "Solution pages",
        purpose: "Map buying-intent solution keywords to pages that explain the problem, use case, proof, and next step.",
      },
      {
        name: "Use-case pages",
        purpose: "Show how the product helps a specific team, workflow, industry, or company size.",
      },
      {
        name: "Comparison pages",
        purpose: "Capture evaluation searches and explain fit against alternatives without sounding defensive.",
      },
      {
        name: "Integration pages",
        purpose: "Rank for tool-stack searches and support buyers checking compatibility.",
      },
      {
        name: "Demo or free trial page",
        purpose: "Give organic visitors a focused conversion endpoint after product or solution research.",
      },
      {
        name: "Industry case studies",
        purpose: "Give high-intent buyers proof by segment, use case, and company size.",
      },
    ],
    trustSignals: ["G2 or Capterra reviews", "customer logos", "case studies", "security and integration details"],
    conversionPath: "demo request or free trial",
    conversionEndpoint: "demo page, free trial page, or sales contact form",
  },
  "B2B services / professional services": {
    pageTypes: [
      {
        name: "Outcome-based service pages",
        purpose: "Map service keywords to pages that clearly explain business outcomes, process, proof, and fit.",
      },
      {
        name: "Industry vertical pages",
        purpose: "Show relevance for buyers in specific markets with problems, examples, and service context.",
      },
      {
        name: "Methodology or process pages",
        purpose: "Build trust by showing how the work is delivered and what clients can expect.",
      },
      {
        name: "Consultation page",
        purpose: "Create a clear next step for visitors who are ready to discuss scope and fit.",
      },
      {
        name: "Case study pages",
        purpose: "Prove outcomes with context, constraints, work performed, and measurable results.",
      },
      {
        name: "Problem guides",
        purpose: "Capture earlier-stage research and route readers to the right service page.",
      },
    ],
    trustSignals: ["case studies", "credentials", "team expertise", "client examples"],
    conversionPath: "consultation booking or contact form",
    conversionEndpoint: "consultation page, contact page, or project inquiry form",
  },
  "Manufacturer / exporter": {
    pageTypes: [
      {
        name: "Product category pages",
        purpose: "Map product and specification keywords to pages that can rank, explain options, and drive RFQs.",
      },
      {
        name: "Application pages",
        purpose: "Capture use-case searches and show how products fit real operating environments.",
      },
      {
        name: "Certification and compliance pages",
        purpose: "Answer sourcing and technical validation questions before procurement asks.",
      },
      {
        name: "OEM / ODM pages",
        purpose: "Serve buyers searching for custom manufacturing, private label, or project-specific supply.",
      },
      {
        name: "Export market pages",
        purpose: "Show market familiarity, shipping ability, standards, and buyer support by region.",
      },
      {
        name: "RFQ page",
        purpose: "Give sourcing buyers a low-friction path to submit specs, volume, and timeline.",
      },
    ],
    trustSignals: ["ISO, CE, UL, or relevant certifications", "factory photos", "QA process", "export markets"],
    conversionPath: "inquiry or RFQ form",
    conversionEndpoint: "RFQ page, quote request page, or inquiry form",
  },
  "Agency / consultant": {
    pageTypes: [
      {
        name: "Flagship service pages",
        purpose: "Map core service keywords to pages that explain the offer, fit, process, proof, and next step.",
      },
      {
        name: "Niche positioning pages",
        purpose: "Show clear specialization by industry, business type, channel, or problem.",
      },
      {
        name: "Named case studies",
        purpose: "Support buying decisions with specific problems, actions, results, and constraints.",
      },
      {
        name: "Thought leadership pages",
        purpose: "Build authority around the frameworks buyers use to evaluate your expertise.",
      },
      {
        name: "Sales-support content",
        purpose: "Answer objections, pricing concerns, scope questions, and comparison searches.",
      },
      {
        name: "Strategy call page",
        purpose: "Give qualified visitors a specific next step tied to fit and project context.",
      },
    ],
    trustSignals: ["methodology", "named case studies", "founder expertise", "client outcomes"],
    conversionPath: "strategy call or project inquiry",
    conversionEndpoint: "strategy call page, diagnostic page, or project inquiry form",
  },
  "B2B ecommerce": {
    pageTypes: [
      {
        name: "Category pages",
        purpose: "Map product category keywords to pages that explain options, specs, availability, and buying criteria.",
      },
      {
        name: "Industry-specific category pages",
        purpose: "Serve buyers who search by application, industry, or operating environment.",
      },
      {
        name: "Buying guides",
        purpose: "Help buyers compare specifications, materials, compatibility, and order requirements.",
      },
      {
        name: "High-value quote pages",
        purpose: "Support bulk, custom, or high-consideration purchases that need sales input.",
      },
      {
        name: "Account creation page",
        purpose: "Give repeat buyers a clear path to pricing, procurement workflows, and order support.",
      },
      {
        name: "Specification pages",
        purpose: "Answer technical product questions and route buyers to the right category or quote path.",
      },
    ],
    trustSignals: ["MOQ", "lead time", "certifications", "company history"],
    conversionPath: "quote request or account creation",
    conversionEndpoint: "quote request page, RFQ form, or account signup page",
  },
};

const goalPlans: Record<SeoGoal, GoalPlan> = {
  "Generate qualified leads": {
    direction:
      "Prioritize commercial page quality, CTA clarity, internal links from content to money pages, lead tracking, and mid-funnel offers.",
    pageTypes: [
      { name: "Lead-focused landing pages", purpose: "Turn high-intent searches into demo, quote, consultation, or RFQ actions." },
      { name: "Mid-funnel offer pages", purpose: "Capture buyers who need a checklist, comparison, or planning asset before talking to sales." },
    ],
    keywordMap: [
      "Map product, service, solution, and quote keywords to commercial pages, not blog posts.",
      "Map checklist, template, and calculator keywords to tool or asset pages with a relevant next step.",
    ],
  },
  "Build topical authority": {
    direction:
      "Build topic clusters around pillar pages, supporting guides, and clear internal links back to commercial pages.",
    pageTypes: [
      { name: "Pillar pages", purpose: "Own the main topic and link to supporting guides, use cases, and commercial pages." },
      { name: "Cluster guides", purpose: "Answer specific subtopics while strengthening the main topic architecture." },
    ],
    keywordMap: [
      "Map broad topic keywords to pillar pages with clear supporting sections.",
      "Map long-tail informational questions to supporting guides that link back to relevant money pages.",
    ],
  },
  "Strengthen commercial / money pages": {
    direction:
      "Improve page depth, keyword-to-page alignment, proof, CTA specificity, and comparison sections before publishing more blog content.",
    pageTypes: [
      { name: "Money page refreshes", purpose: "Upgrade existing product, service, solution, category, or quote pages for ranking and conversion." },
      { name: "Competitor or alternative pages", purpose: "Capture evaluation-stage searches and clarify why your offer fits." },
    ],
    keywordMap: [
      "Map decision-stage keywords to commercial pages with proof, FAQs, and conversion paths.",
      "Map competitor, alternative, and comparison keywords to comparison pages, not thin blog posts.",
    ],
  },
  "Support sales conversations": {
    direction:
      "Build pages that help sales answer objections: comparisons, ROI content, implementation FAQs, proof assets, and buyer-ready case studies.",
    pageTypes: [
      { name: "Objection-handling FAQs", purpose: "Answer pricing, risk, implementation, timeline, compliance, or fit questions." },
      { name: "ROI and business case pages", purpose: "Give sales teams content they can share during evaluation." },
    ],
    keywordMap: [
      "Map pricing, ROI, implementation, and comparison searches to sales-support pages.",
      "Map proof-oriented searches to case studies, use cases, and industry pages.",
    ],
  },
  "Enter a new market or vertical": {
    direction:
      "Prioritize vertical landing pages, industry keyword mapping, market-specific trust signals, and content that proves segment understanding.",
    pageTypes: [
      { name: "Vertical landing pages", purpose: "Explain the offer for a specific industry, buyer role, market, or use case." },
      { name: "Market proof pages", purpose: "Show certifications, examples, outcomes, or experience relevant to the new segment." },
    ],
    keywordMap: [
      "Map industry-modified keywords to vertical pages rather than generic service pages.",
      "Map market questions to supporting guides that prove domain understanding and link to the vertical page.",
    ],
  },
  "Improve AI search visibility": {
    direction:
      "Prioritize direct-answer paragraphs, FAQ implementation, entity completeness, structured page formats, and comparison tables.",
    pageTypes: [
      { name: "Answer-rich commercial pages", purpose: "Make product, service, and solution pages easy for AI systems to summarize and cite." },
      { name: "Comparison tables", purpose: "Clarify fit, alternatives, specs, features, and buying criteria in structured formats." },
    ],
    keywordMap: [
      "Map question-style searches to FAQ sections and concise answer blocks on relevant pages.",
      "Map comparison and shortlist searches to structured comparison pages and tables.",
    ],
  },
};

const stagePlans: Record<ContentStage, StagePlan> = {
  "No content strategy yet": {
    direction:
      "Start foundation-first. Build commercial pages and conversion paths before scaling blog content.",
    workflow: [
      "List the products, services, solutions, categories, or offers that can create qualified leads.",
      "Assign each commercial page a primary buying-intent keyword and one clear conversion endpoint.",
      "Build or improve those pages before publishing broad educational content.",
      "Create three supporting guides only after the commercial pages have enough depth and proof.",
      "Set up basic landing page attribution before judging traffic quality.",
    ],
    thisWeek: [
      "Choose the top three revenue pages your SEO strategy must support.",
      "Map one buying-intent keyword cluster to each priority page.",
      "Add one specific CTA and one proof section to each page.",
      "Create a simple internal link list from existing pages to those money pages.",
      "Document how organic form submissions will be tagged by landing page.",
    ],
  },
  "Some pages but no clear strategy": {
    direction:
      "Go audit-first. Assign each existing page a role, identify gaps, and improve what exists before adding many new pages.",
    workflow: [
      "Inventory existing pages and label each as commercial, educational, proof, comparison, or conversion endpoint.",
      "Mark pages with no clear keyword, CTA, internal links, or buyer-stage role.",
      "Merge, improve, or redirect overlapping pages before creating new content.",
      "Fill missing commercial and proof pages before expanding informational clusters.",
      "Create a publishing queue only after the page architecture is clear.",
    ],
    thisWeek: [
      "Export or list your current indexable SEO pages.",
      "Tag each page with buyer stage, target keyword, and conversion role.",
      "Pick five pages with unclear roles and decide whether to improve, merge, or deprioritize them.",
      "Add internal links from two relevant guides to one priority money page.",
      "Create a one-page roadmap for missing commercial, proof, and support content.",
    ],
  },
  "Blog traffic but weak lead conversion": {
    direction:
      "Use conversion-fix-first sequencing. Improve CTAs, internal links, commercial pages, and tracking before publishing more posts.",
    workflow: [
      "Find blog posts with traffic but few assisted conversions or commercial clicks.",
      "Add contextual links from those posts to relevant product, service, category, solution, or quote pages.",
      "Improve the linked commercial pages so visitors land on proof, fit, and next-step clarity.",
      "Add mid-funnel CTAs where readers show buying intent.",
      "Track organic leads and assisted conversions by landing page before scaling content.",
    ],
    thisWeek: [
      "Identify the five highest-traffic blog posts with weak lead contribution.",
      "Add one contextual internal link from each post to the closest commercial page.",
      "Update the destination pages with clearer proof and CTA placement.",
      "Add a relevant mid-funnel CTA to two blog posts.",
      "Check that CRM attribution or analytics can show organic landing page source.",
    ],
  },
  "Commercial pages need improvement": {
    direction:
      "Use page-depth-first sequencing. Fix money page alignment, depth, proof, CTAs, and internal links before expanding the blog.",
    workflow: [
      "Pick the money pages closest to revenue and compare them against the intent of their target keywords.",
      "Add missing sections: use cases, specs, process, proof, FAQs, comparisons, and direct answers.",
      "Update titles and H1s so buyers and search engines understand the page purpose.",
      "Add internal links from related guides, case studies, categories, and homepage sections.",
      "Review CTA clarity and form friction for every priority commercial page.",
    ],
    thisWeek: [
      "Choose two money pages with ranking or conversion potential.",
      "Rewrite each page's H1 and first paragraph around buyer intent.",
      "Add one proof section and one FAQ section to each page.",
      "Add three internal links into each money page from relevant existing content.",
      "Test the CTA path and remove one unnecessary form or navigation step.",
    ],
  },
  "Need a scalable system": {
    direction:
      "Move process-first. Create templates, internal linking rules, publishing workflow, and a lead attribution model.",
    workflow: [
      "Create reusable templates for commercial pages, content briefs, comparison pages, FAQs, and case studies.",
      "Define internal linking rules from blog posts to commercial pages, proof pages, and conversion endpoints.",
      "Build a keyword-to-page mapping sheet before assigning briefs.",
      "Set publishing checkpoints for CTA placement, schema, proof, and AI search readiness.",
      "Review organic leads by landing page monthly and feed learnings back into briefs.",
    ],
    thisWeek: [
      "Create a reusable brief template with keyword intent, page type, CTA, proof, and internal link fields.",
      "Document internal linking rules for commercial, educational, proof, and conversion pages.",
      "Choose one topic cluster and map every planned keyword to a page type.",
      "Add a QA checklist for FAQs, direct answers, and CTA placement before publishing.",
      "Set up a monthly report for organic leads by landing page and conversion endpoint.",
    ],
  },
};

const buyerPlans: Record<TargetBuyer, BuyerPlan> = {
  "Founder / CEO": {
    modifier:
      "Keep the strategy tied to revenue quality, short payback, and the few pages most likely to influence pipeline.",
    ctaLanguage: ["Strategy call", "Consultation", "Demo request"],
    tracking: "Track source, landing page, deal quality, and pipeline influence in the CRM.",
  },
  "Marketing manager": {
    modifier:
      "Make the workflow easy to operationalize with briefs, page ownership, publishing rules, and reporting by landing page.",
    ctaLanguage: ["Get the checklist", "Book a demo", "Download the template"],
    tracking: "Track form submissions, assisted conversions, CTA clicks, and content-to-money-page paths.",
  },
  "Sales-led / revenue team": {
    modifier:
      "Prioritize pages that help sales conversations: comparisons, objection-handling FAQs, proof assets, and conversion-ready money pages.",
    ctaLanguage: ["Talk to sales", "Request a demo", "Book a strategy call"],
    tracking: "Track organic leads through CRM attribution, sales accepted status, and landing page quality.",
  },
  "Procurement / sourcing buyer": {
    modifier:
      "Answer sourcing concerns early with specs, certifications, lead time, RFQ paths, compliance details, and supplier proof.",
    ctaLanguage: ["Request a quote", "Submit an RFQ", "Send inquiry"],
    tracking: "Track RFQ source, product category, market, volume, and landing page attribution.",
  },
  "Technical decision-maker": {
    modifier:
      "Add enough technical depth for evaluation: specs, integrations, implementation details, QA process, security, and compatibility.",
    ctaLanguage: ["Request technical details", "Book a technical demo", "Ask an engineer"],
    tracking: "Track technical CTA clicks, spec downloads, integration interest, and follow-up source.",
  },
};

const baseKeywordMap = [
  ["Problem keywords", "Educational guide or pillar page", "Use for early research, then link to the relevant commercial page."],
  ["Solution keywords", "Solution or service page", "Use when the buyer is looking for an approach, category, or vendor type."],
  ["Product or category keywords", "Product, category, or application page", "Use when the query implies evaluation, specs, availability, or purchase intent."],
  ["Comparison keywords", "Comparison or alternative page", "Use when the buyer is choosing between vendors, tools, materials, or approaches."],
  ["Proof keywords", "Case study, review, certification, or market proof page", "Use when the buyer needs confidence before contacting sales."],
  ["Action keywords", "Demo, quote, RFQ, consultation, or account page", "Use when the searcher is ready to take the next step."],
];

const geoReadiness = [
  "Add a direct-answer paragraph near the top of priority pages that states what the product, service, or page is for.",
  "Use question-style H2s and H3s for buyer questions that AI Overviews, ChatGPT, and Perplexity can extract cleanly.",
  "Add FAQ sections to commercial and educational pages, especially where buyers compare fit, pricing model, specs, process, or alternatives.",
  "Improve entity completeness: company type, markets served, products or services, use cases, industries, locations, proof, and conversion paths.",
  "Use comparison tables for alternatives, specifications, service tiers, use cases, certifications, or buying criteria.",
  "Make company, service, product, and category information explicit instead of relying on vague marketing copy.",
];

function uniquePageTypes(items: PageType[], limit = 8) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.name)) {
      return false;
    }

    seen.add(item.name);
    return true;
  }).slice(0, limit);
}

function buildStrategy({
  websiteType,
  targetBuyer,
  seoGoal,
  contentStage,
}: {
  websiteType: WebsiteType;
  targetBuyer: TargetBuyer;
  seoGoal: SeoGoal;
  contentStage: ContentStage;
}) {
  const website = websitePlans[websiteType];
  const goal = goalPlans[seoGoal];
  const stage = stagePlans[contentStage];
  const buyer = buyerPlans[targetBuyer];

  const recommendedPageTypes = uniquePageTypes([...website.pageTypes, ...goal.pageTypes], 8);
  const conversionItems = [
    `Use ${website.conversionPath} language on commercial pages, with CTA labels such as ${buyer.ctaLanguage.join(", ")}.`,
    "Place the primary CTA near the top of commercial pages and repeat it after proof, comparison, FAQ, and bottom sections.",
    "Match CTA specificity to intent: demo request, free trial, RFQ, quote request, strategy call, consultation, or contact.",
    "Reduce form friction by asking for only the fields needed to qualify the next conversation.",
    "Send form submissions to a dedicated thank-you page or confirmation event for clean conversion tracking.",
    `Track organic leads by landing page, conversion endpoint, and ${buyer.tracking.toLowerCase()}`,
    `Add trust signals near CTAs: ${website.trustSignals.join(", ")}.`,
  ];

  return {
    diagnosis: [
      `${websiteType} teams targeting ${targetBuyer.toLowerCase()} should build the SEO strategy around ${website.conversionPath}, not raw traffic volume.`,
      `${goal.direction} ${stage.direction}`,
      buyer.modifier,
    ],
    recommendedPageTypes,
    keywordMap: [...baseKeywordMap, ...goal.keywordMap.map((item) => ["Priority rule", "Keyword-to-page mapping", item] as [string, string, string])],
    contentWorkflow: stage.workflow,
    internalLinks: [
      "Link educational blog posts to the most relevant product, service, solution, category, application, or quote page.",
      "Link commercial pages to proof assets such as case studies, certifications, reviews, factory details, methodology pages, or customer examples.",
      `Route high-intent visitors toward the ${website.conversionEndpoint} instead of leaving them at a generic contact page.`,
      "Use descriptive anchor text that names the page topic, buyer problem, product category, service outcome, or use case.",
      "Treat internal linking as conversion infrastructure: each link should help the buyer move from learning to evaluation to action.",
    ],
    conversionItems,
    geoReadiness,
    thisWeek: stage.thisWeek,
  };
}

export default function StrategyWorkflowGenerator() {
  const [websiteType, setWebsiteType] = useState<WebsiteType>("B2B SaaS");
  const [targetBuyer, setTargetBuyer] = useState<TargetBuyer>("Marketing manager");
  const [seoGoal, setSeoGoal] = useState<SeoGoal>("Generate qualified leads");
  const [contentStage, setContentStage] = useState<ContentStage>("Some pages but no clear strategy");
  const [hasGenerated, setHasGenerated] = useState(false);

  const strategy = useMemo(
    () => buildStrategy({ websiteType, targetBuyer, seoGoal, contentStage }),
    [contentStage, seoGoal, targetBuyer, websiteType],
  );

  function handleGenerate() {
    setHasGenerated(true);
  }

  function handleStartOver() {
    setWebsiteType("B2B SaaS");
    setTargetBuyer("Marketing manager");
    setSeoGoal("Generate qualified leads");
    setContentStage("Some pages but no clear strategy");
    setHasGenerated(false);
  }

  return (
    <section id="strategy-generator" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Interactive Tool
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            B2B SEO Strategy Workflow Generator
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Generate a practical workflow for B2B keyword strategy, page types, internal linking,
            conversion paths, lead tracking, and AI search visibility for B2B teams. No login, no
            crawl, no AI API.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border-b border-slate-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Inputs
            </p>

            <div className="space-y-5">
              <SelectField
                label="Website type"
                value={websiteType}
                options={websiteTypes}
                onChange={(value) => setWebsiteType(value as WebsiteType)}
              />
              <SelectField
                label="Target buyer"
                value={targetBuyer}
                options={targetBuyers}
                onChange={(value) => setTargetBuyer(value as TargetBuyer)}
              />
              <SelectField
                label="Main SEO goal"
                value={seoGoal}
                options={seoGoals}
                onChange={(value) => setSeoGoal(value as SeoGoal)}
              />
              <SelectField
                label="Current content stage"
                value={contentStage}
                options={contentStages}
                onChange={(value) => setContentStage(value as ContentStage)}
              />

              <button
                type="button"
                onClick={handleGenerate}
                className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                {hasGenerated ? "Update Strategy" : "Generate Strategy Workflow"}
              </button>

              <button
                type="button"
                onClick={handleStartOver}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Start Over
              </button>

              <p className="text-xs leading-relaxed text-slate-500">
                If you do not know where your site stands, run the B2B SEO audit first, then use
                this workflow to decide what to build next.
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
                  How should SEO become qualified leads?
                </h3>
              </div>
              <span className="w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                SEO strategy for B2B companies
              </span>
            </div>

            {!hasGenerated ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  Choose your website type, buyer, SEO goal, and current content stage. The output
                  will create a B2B content strategy for lead generation, keyword-to-page mapping
                  framework, internal linking plan, conversion checklist, and AI search readiness
                  priorities.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <OutputSection title="Your Strategy Focus">
                  <div className="space-y-3">
                    {strategy.diagnosis.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-slate-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </OutputSection>

                <OutputSection title="Recommended Page Types">
                  <div className="grid gap-3 md:grid-cols-2">
                    {strategy.recommendedPageTypes.map((pageType) => (
                      <div key={pageType.name} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
                        <p className="mb-1 text-sm font-semibold text-slate-900">{pageType.name}</p>
                        <p className="text-sm leading-relaxed text-slate-600">{pageType.purpose}</p>
                      </div>
                    ))}
                  </div>
                </OutputSection>

                <OutputSection title="Keyword-to-Page Mapping Framework">
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full min-w-[620px] text-sm">
                      <thead className="bg-slate-50">
                        <tr className="border-b border-slate-200">
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">Keyword intent</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">Best page type</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">Rule</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {strategy.keywordMap.map(([intent, pageType, rule]) => (
                          <tr key={`${intent}-${rule}`}>
                            <td className="px-4 py-3 font-medium text-slate-900">{intent}</td>
                            <td className="px-4 py-3 text-slate-600">{pageType}</td>
                            <td className="px-4 py-3 text-slate-600">{rule}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </OutputSection>

                <OutputCard title="Content Workflow" items={strategy.contentWorkflow} variant="numbered" />
                <OutputCard title="Internal Linking Plan" items={strategy.internalLinks} variant="bullet" />
                <OutputCard
                  title="Conversion Path + Lead Tracking Checklist"
                  items={strategy.conversionItems}
                  variant="check"
                />
                <OutputCard title="AI Search / GEO Readiness" items={strategy.geoReadiness} variant="bullet" />
                <OutputCard title="What to Do This Week" items={strategy.thisWeek} variant="numbered" />

                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5">
                  <p className="mb-2 text-sm font-semibold text-slate-900">
                    Take this strategy further
                  </p>
                  <a
                    href={TALLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    Get the B2B SEO Strategy Checklist — Free
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    Step-by-step: page types, internal linking, content workflow, and lead
                    tracking.
                  </p>
                  <a
                    href="/b2b-seo-audit/"
                    className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Not sure where your site stands? Run the B2B SEO Audit first →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
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
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
        {title}
      </p>
      {children}
    </div>
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
    <OutputSection title={title}>
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
    </OutputSection>
  );
}
