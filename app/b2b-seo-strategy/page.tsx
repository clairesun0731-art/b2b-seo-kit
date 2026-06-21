import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StrategyWorkflowGenerator from "./StrategyWorkflowGenerator";

export const metadata: Metadata = {
  title: "B2B SEO Strategy Workflow Generator | Build a Lead-Focused SEO Plan",
  description:
    "Generate a practical B2B SEO strategy workflow for keyword mapping, page planning, internal links, conversion paths, lead generation, and AI search visibility.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-seo-strategy",
  },
  openGraph: {
    title: "B2B SEO Strategy Workflow Generator | Build a Lead-Focused SEO Plan",
    description:
      "Generate a practical B2B SEO strategy workflow for keyword mapping, page planning, internal links, conversion paths, lead generation, and AI search visibility.",
    url: "https://www.b2bseokit.com/b2b-seo-strategy",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Strategy Workflow Generator | Build a Lead-Focused SEO Plan",
    description:
      "Generate a practical B2B SEO strategy workflow for keyword mapping, page planning, internal links, conversion paths, lead generation, and AI search visibility.",
    images: ["/logo.webp"],
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const painPoints = [
  {
    title: "Keyword research does not become a page plan.",
    desc: "Teams collect promising B2B keywords, but no one decides which terms need product pages, solution pages, comparison pages, or supporting guides.",
  },
  {
    title: "Blog content gets traffic but no leads.",
    desc: "Publishing more educational content can grow sessions while leaving buyers without a path to product pages, demos, or sales conversations.",
  },
  {
    title: "Product and solution pages are under-optimized.",
    desc: "The pages closest to revenue often have thin copy, weak headings, missing proof, and too few answers for buying-intent searches.",
  },
  {
    title: "Internal links do not support commercial pages.",
    desc: "Helpful articles may earn visibility, but without deliberate internal linking they do not pass context or authority to pages that convert.",
  },
  {
    title: "Teams publish content without a clear workflow.",
    desc: "Writers, founders, consultants, and agencies move faster when keywords, briefs, page types, CTAs, and tracking are connected.",
  },
  {
    title: "AI search requires more structured, descriptive content.",
    desc: "AI search optimization and GEO work depend on clear definitions, entity-rich sections, FAQs, comparison tables, and concise answers.",
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Define the business goal",
    what: "Choose the outcome the SEO strategy must support: demo requests, qualified inquiries, trial signups, distributor leads, or agency pipeline.",
    why: "B2B SEO strategy should be lead-focused SEO, not a traffic project detached from revenue quality.",
    example:
      "Example: A B2B SaaS team chooses qualified demo requests from mid-market buyers as the primary organic lead generation goal.",
  },
  {
    num: "02",
    title: "Find high-intent B2B keywords",
    what: "Prioritize problem, solution, product, comparison, template, and service keywords that reveal buyer intent.",
    why: "B2B keyword research works best when it separates broad awareness terms from searches that indicate active evaluation.",
    example:
      "Example: 'customer retention software' is more commercially useful than a broad topic like 'customer loyalty ideas'.",
  },
  {
    num: "03",
    title: "Map keywords to buyer intent",
    what: "Group keywords by awareness, consideration, and decision-stage intent before assigning them to pages.",
    why: "A keyword with the wrong intent on the wrong page usually underperforms, even when the content is well written.",
    example:
      "Example: 'how to reduce churn' supports an educational guide, while 'churn analytics platform' needs a product or solution page.",
  },
  {
    num: "04",
    title: "Choose the right page type",
    what: "Decide whether each keyword cluster should become a blog post, guide, solution page, product page, comparison page, checklist, or template.",
    why: "Strong B2B SEO strategies turn keywords into page architecture instead of sending every term to the blog.",
    example:
      "Example: 'B2B SEO audit checklist' fits a template or checklist page because the searcher wants a practical tool.",
  },
  {
    num: "05",
    title: "Create content briefs",
    what: "Turn each priority keyword into a brief with search intent, audience, page goal, headings, proof, FAQs, internal links, and CTA guidance.",
    why: "Briefs keep B2B content strategy practical, consistent, and aligned with buyer questions.",
    example:
      "Example: A brief for 'SEO for B2B marketing' includes buyer-stage notes, product-page links, and a CTA to the toolkit.",
  },
  {
    num: "06",
    title: "Optimize product and solution pages",
    what: "Improve titles, H1s, proof blocks, comparison sections, FAQs, schema-ready answers, and conversion paths on commercial pages.",
    why: "Product page SEO is where visibility becomes pipeline. These pages need to rank, explain, prove, and convert.",
    example:
      "Example: Add a concise answer block, use cases, customer proof, and a FAQ section to a high-intent solution page.",
  },
  {
    num: "07",
    title: "Build internal links, CTAs, and tracking",
    what: "Connect guides to commercial pages, place CTAs where intent rises, and track conversions by landing page.",
    why: "Internal linking and conversion tracking turn B2B SEO tactics into a measurable workflow.",
    example:
      "Example: Link three educational guides to one solution page, then track demo requests from that solution page.",
  },
];

const keywordMap = [
  [
    "Problem-aware keywords",
    "Educational guides",
    "Explain the problem, show causes, and link to the relevant solution or service page.",
  ],
  [
    "Solution-aware keywords",
    "Comparison and use-case pages",
    "Help buyers evaluate approaches, workflows, industries, integrations, applications, or alternatives.",
  ],
  [
    "Product/service-aware keywords",
    "Commercial pages",
    "Use product, service, category, solution, RFQ, demo, consultation, or quote pages.",
  ],
  [
    "Buyer validation keywords",
    "Case studies, templates, checklists, FAQs",
    "Support trust, proof, objections, implementation questions, and sales conversations.",
  ],
  [
    "AI search/GEO queries",
    "Answer sections and entity-rich content",
    "Add concise definitions, FAQs, comparison-ready blocks, and clear product or company entities.",
  ],
];

const strategyOutput = [
  "Prioritize buying-intent keywords",
  "Build product and solution pages first",
  "Use blog content to support commercial pages",
  "Add internal links from guides to product pages",
  "Add FAQ blocks for AI search visibility",
  "Track demo requests by landing page",
];

const comparisonRows = [
  ["Focuses on traffic", "Focuses on qualified leads"],
  ["Treats all keywords the same", "Maps keywords to buyer intent"],
  ["Prioritizes blog volume", "Prioritizes product and solution pages"],
  ["Gives raw keyword data", "Turns keywords into workflows"],
  ["Often ignores lead quality", "Connects content to pipeline"],
];

const websiteTypeStrategies = [
  {
    title: "B2B SaaS SEO strategy",
    pageTypes:
      "Use-case pages, feature pages, comparison pages, integration pages, alternative pages, and demo paths.",
    intent:
      "Map keywords by problem, workflow, product category, feature, integration, comparison, and buying-stage intent.",
    conversion:
      "Route educational content toward feature pages, product proof, trial paths, and demo requests.",
  },
  {
    title: "B2B services SEO strategy",
    pageTypes:
      "Service pages, industry pages, process pages, case studies, FAQs, and consultation pages.",
    intent:
      "Separate problem-aware searches from service-aware, cost, process, scope, and provider-evaluation searches.",
    conversion:
      "Use proof, service clarity, and consultation CTAs so educational traffic can become qualified inquiries.",
  },
  {
    title: "Manufacturer / exporter SEO strategy",
    pageTypes:
      "Product category pages, application pages, specs pages, certification pages, OEM/ODM pages, and RFQ pages.",
    intent:
      "Group keywords by product category, application, specification, material, certification, sourcing, and export market.",
    conversion:
      "Move buyers toward quote requests with specs, certifications, MOQ, lead time, export proof, and inquiry paths.",
  },
  {
    title: "Agency / consultant SEO strategy",
    pageTypes:
      "Niche service pages, methodology pages, case studies, comparison pages, lead magnets, and strategy-call pages.",
    intent:
      "Map searches by service, niche, problem, process, proof, consultant, agency, and vendor-selection intent.",
    conversion:
      "Connect practical content to case studies, diagnostic offers, consultation CTAs, and sales-call preparation.",
  },
  {
    title: "B2B ecommerce SEO strategy",
    pageTypes:
      "Category pages, product detail pages, filtered pages with demand, buying guides, comparison pages, and quote paths.",
    intent:
      "Group keywords by category, product type, spec, material, application, compatibility, and bulk-order intent.",
    conversion:
      "Support category and product pages with buying guides, internal links, specs, quote CTAs, and conversion tracking.",
  },
] as const;

const internalLinkTargets = [
  {
    title: "Commercial pages",
    desc: "Link from high-impression guides, FAQs, case studies, and comparison content to product, service, solution, category, demo, RFQ, or consultation pages.",
  },
  {
    title: "Tool pages",
    desc: "Use tool pages as helpful mid-funnel assets, then link them to templates, audits, strategy workflows, and the next practical action.",
  },
  {
    title: "Use-case pages",
    desc: "Connect problem-aware content to use-case pages where buyers can see fit by industry, role, workflow, application, or company type.",
  },
  {
    title: "Templates",
    desc: "Link templates and checklists from related guides so visitors can move from learning to execution without a hard sales pitch.",
  },
  {
    title: "Lead-generation pages",
    desc: "Make demo, quote, consultation, inquiry, and checklist pages easy to reach from content that shows buying or validation intent.",
  },
] as const;

const leadConversionItems = [
  "Use clear CTAs that match the page intent: demo for SaaS, quote/RFQ for manufacturers, consultation for services, inquiry for agencies, and account or bulk-order paths for ecommerce.",
  "Show tool-based value before lead capture, then offer the checklist, template, or next workflow as a useful continuation.",
  "Offer checklist downloads on pages where visitors are actively evaluating their gaps or planning work.",
  "Place contact or consultation paths near proof, FAQs, comparison sections, specs, and implementation details.",
  "Use UTM parameters and conversion tracking so SEO traffic can be reviewed by landing page, CTA, and lead quality.",
  "Map content themes to sales conversations so posts answer objections and link to the pages sales would share anyway.",
] as const;

const aiVisibilityItems = [
  "Define the company, product category, service area, audience, industries, and use cases with consistent entity language.",
  "Add short answer blocks near the top of priority pages so AI systems and buyers can understand the page quickly.",
  "Use FAQ sections to answer fit, pricing model, implementation, specs, comparisons, and buyer objections.",
  "Make comparison-ready content easy to scan with tables, structured lists, alternatives, and use-case sections.",
  "Use a problem-solution-use case structure on commercial and educational pages.",
  "Keep internal links consistent so related pages reinforce the same entities, products, services, and conversion paths.",
] as const;

const faqs = [
  {
    question: "What is a B2B SEO strategy?",
    answer:
      "A B2B SEO strategy is a structured plan for turning search demand into qualified leads. It connects keyword research, buyer intent, product and solution pages, educational content, internal links, technical checks, conversion paths, and AI search readiness into one repeatable workflow.",
  },
  {
    question: "How is B2B SEO strategy different from regular SEO?",
    answer:
      "Regular SEO often focuses on ranking and traffic. B2B SEO strategy focuses on buyer intent, longer sales cycles, commercial page quality, internal links, lead conversion paths, and qualified B2B leads.",
  },
  {
    question: "What should a B2B SEO strategy include?",
    answer:
      "A B2B SEO strategy should include business goals, keyword research, intent mapping, page type decisions, content briefs, product page SEO, technical checks, internal linking, CTAs, tracking, and AI search optimization.",
  },
  {
    question: "How do you choose keywords for B2B SEO?",
    answer:
      "Choose B2B SEO keywords by intent and business value. Prioritize solution, product, comparison, template, and service terms that indicate a buyer is researching a problem, evaluating vendors, or preparing to take action.",
  },
  {
    question: "Should B2B SEO focus on blogs or product pages?",
    answer:
      "B2B SEO should not rely only on blogs. Blogs and guides can support discovery, but product pages, solution pages, comparison pages, and template pages usually do more work for lead-focused SEO.",
  },
  {
    question: "How does internal linking support B2B SEO?",
    answer:
      "Internal linking helps educational content support commercial pages. It passes context, guides buyers to the next step, and helps search engines understand which product and solution pages matter most.",
  },
  {
    question: "Does B2B SEO strategy include AI search optimization?",
    answer:
      "Yes. Modern B2B SEO strategy should include AI search optimization and GEO checklist work, including clear definitions, structured sections, entity-rich copy, FAQs, comparison tables, and direct answers.",
  },
  {
    question: "Is this strategy useful before hiring a B2B SEO agency?",
    answer:
      "Yes. A practical B2B SEO strategy helps teams audit their current site, identify content gaps, clarify priorities, and brief a B2B SEO agency or consultant with better context.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "B2B SEO Strategy Workflow Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function B2BSEOStrategyPage() {
  return (
    <>
      <Script
        id="b2b-seo-strategy-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="b2b-seo-strategy-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
        <SiteHeader active="strategy" />

        <main>
          <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Practical B2B SEO strategy for lead-focused teams
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                B2B SEO Strategy Workflow for turning traffic into{" "}
                <span className="text-blue-600">qualified leads</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Build a practical B2B SEO strategy that turns keyword research into page planning,
                commercial pages, internal linking, conversion paths, and qualified leads instead
                of traffic with nowhere useful to go.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the B2B SEO Strategy Checklist - Free
                </a>
                <a
                  href="#strategy-generator"
                  className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-base"
                >
                  Generate a Strategy Workflow
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Built for B2B marketers, SaaS teams, consultants, agencies, manufacturers, and
                export businesses, plus content, directory, marketplace, and listing-style sites.
              </p>
            </div>
          </section>

          <section className="py-10 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Quick Answer
              </p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What is a B2B SEO strategy?
              </h2>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                A <strong>B2B SEO strategy</strong> is a system for choosing the right keywords,
                mapping them to the right page types, strengthening commercial pages, building
                educational content, improving internal links, and turning organic traffic into
                qualified leads.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px]">
                For B2B teams, the goal is not just more traffic. The goal is to help the right
                buyers find the right pages and take the next step.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mt-4">
                If you do not know where your site stands, run the{" "}
                <a href="/b2b-seo-audit" className="text-blue-600 hover:underline">
                  B2B SEO Audit Generator
                </a>{" "}
                first. Then use the workflow generator below to turn the audit into a B2B keyword
                strategy, page plan, internal linking plan, and conversion path.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mt-4">
                This workflow also supports content, directory, marketplace, and listing-style
                websites where category pages, listing templates, indexation hygiene, and long-tail
                keyword clusters matter as much as traditional product or service pages.
              </p>
            </div>
          </section>

          <StrategyWorkflowGenerator />

          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Strategy by Website Type
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B SEO strategy by website type
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-[15px]">
                  The workflow changes by business model. The best B2B SEO page types, keyword
                  intent, and conversion path should match how buyers evaluate your offer.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {websiteTypeStrategies.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {section.title}
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                      <p>
                        <strong className="text-slate-800">Recommended page types:</strong>{" "}
                        {section.pageTypes}
                      </p>
                      <p>
                        <strong className="text-slate-800">Keyword intent:</strong>{" "}
                        {section.intent}
                      </p>
                      <p>
                        <strong className="text-slate-800">Conversion focus:</strong>{" "}
                        {section.conversion}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Common Breakpoints
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Why B2B SEO Strategy Often Breaks Down
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {painPoints.map((point) => (
                  <article
                    key={point.title}
                    className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2 text-[15px]">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{point.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="strategy-workflow"
            className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Strategy Framework
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  The B2B SEO Strategy Workflow
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  Most SEO advice tells B2B teams to publish more content. A better workflow
                  connects keywords, page types, product pages, content briefs, internal links,
                  AI search readiness, and lead conversion paths.
                </p>
              </div>

              <ol className="space-y-5">
                {workflowSteps.map((step) => (
                  <li key={step.num} className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xs font-bold text-white">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                        <div className="grid gap-3 md:grid-cols-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                              What to do
                            </p>
                            <p className="text-sm leading-relaxed text-slate-700">{step.what}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                              Why it matters
                            </p>
                            <p className="text-sm leading-relaxed text-slate-700">{step.why}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                              Example
                            </p>
                            <p className="text-sm leading-relaxed text-slate-700">
                              {step.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Keyword Mapping
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B keyword strategy: map keywords to page types
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  SEO strategy for B2B companies works when each keyword cluster has a job, a page
                  type, an internal linking path, and a conversion next step.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="text-left px-6 py-4 font-semibold text-slate-700">
                        Keyword type
                      </th>
                      <th className="text-left px-6 py-4 font-semibold text-slate-700">
                        Recommended page type
                      </th>
                      <th className="text-left px-6 py-4 font-semibold text-slate-700">
                        How to use it
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {keywordMap.map(([type, pageType, action]) => (
                      <tr key={type}>
                        <td className="px-6 py-4 font-medium text-slate-900">{type}</td>
                        <td className="px-6 py-4 text-slate-600">{pageType}</td>
                        <td className="px-6 py-4 text-slate-600">{action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Internal Links
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Internal linking for B2B SEO
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  Internal links should guide buyers and authority toward the pages that can create
                  qualified leads, not only toward more blog posts.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {internalLinkTargets.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
                  >
                    <h3 className="mb-2 text-[15px] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Lead Conversion
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  How to turn SEO traffic into B2B leads
                </h2>
                <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
                  B2B content strategy for lead generation needs a clear path from search intent to
                  sales conversation, not just more sessions.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                <ul className="divide-y divide-slate-100">
                  {leadConversionItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 px-6 py-4">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  GEO Readiness
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  AI search visibility for B2B companies
                </h2>
                <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
                  AI search visibility for B2B depends on clear entities, structured answers,
                  comparison-ready pages, and consistent relationships between related pages.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {aiVisibilityItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm"
                  >
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Product Preview
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Preview a B2B SEO Strategy Workflow
                </h2>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Input
                  </p>
                  <div className="space-y-3">
                    {[
                      ["Website type", "B2B SaaS"],
                      ["Goal", "More qualified demo requests"],
                      ["SEO stage", "Early growth"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <span className="text-sm text-slate-500">{label}</span>
                        <span className="text-sm font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Output
                  </p>
                  <ul className="space-y-3">
                    {strategyOutput.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                        <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <RelatedToolsSection
            title="Related B2B SEO tools"
            links={[
              { label: "B2B SEO Audit Generator", href: "/b2b-seo-audit" },
              { label: "Explore free B2B SEO tools", href: "/b2b-seo-kit" },
              { label: "Use a reusable SEO template", href: "/b2b-seo-template" },
              {
                label: "Build a keyword research map",
                href: "/b2b-keyword-research-template",
              },
              { label: "Plan your next content brief", href: "/b2b-seo-brief-generator" },
            ]}
          />

          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Comparison
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B SEO Strategy vs Generic SEO Strategy
                </h2>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left px-6 py-4 text-slate-500 font-medium w-1/2">
                        Generic SEO Strategy
                      </th>
                      <th className="text-left px-6 py-4 text-blue-600 font-semibold w-1/2">
                        B2B SEO Strategy
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonRows.map(([generic, b2b]) => (
                      <tr key={generic}>
                        <td className="px-6 py-4 text-slate-500">{generic}</td>
                        <td className="px-6 py-4 text-slate-800 font-medium">{b2b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Internal Linking
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Start with an audit, then build the strategy
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
                Before building a full strategy, use the{" "}
                <a href="/b2b-seo-audit" className="text-blue-600 hover:underline">
                  B2B SEO Audit Generator
                </a>{" "}
                to find the pages, content gaps, and internal links that need attention first.
                Then use the{" "}
                <a href="/b2b-seo-kit" className="text-blue-600 hover:underline">
                  free B2B SEO tools
                </a>{" "}
                to turn those findings into repeatable workflows.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-700">
                When you are ready to brief a specific page, use the{" "}
                <a href="/b2b-seo-brief-generator" className="text-blue-600 hover:underline">
                  B2B SEO Content Brief Generator
                </a>{" "}
                to turn the chosen keyword, page type, buyer, intent, and business context into a
                practical outline with internal links, proof, CTAs, and AI search readiness notes.
              </p>
            </div>
          </section>

          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Take this strategy further
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Get the B2B SEO Strategy Checklist - Free
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-600 mb-7">
                Turn the workflow into a checklist for keyword mapping, page planning, internal
                links, conversion paths, lead generation, and AI search visibility.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the B2B SEO Strategy Checklist - Free
                </a>
                <a
                  href="/b2b-seo-audit"
                  className="inline-block rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Not sure where your site stands? Run the B2B SEO Audit first →
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className="py-16 px-4 sm:px-6 bg-white border-t border-slate-200">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B SEO Strategy Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
