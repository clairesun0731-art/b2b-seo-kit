import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { leadGenerationCalculators, seoTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "B2B SEO Tools: Free Toolkit for Audits & Strategy | B2B SEO Kit",
  description:
    "Use free B2B SEO tools for audits, strategy workflows, keyword mapping, internal links, commercial page fixes, and lead generation.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-seo-kit",
  },
  openGraph: {
    title: "B2B SEO Tools: Free Toolkit for Audits & Strategy | B2B SEO Kit",
    description:
      "Use free B2B SEO tools for audits, strategy workflows, keyword mapping, internal links, commercial page fixes, and lead generation.",
    url: "https://www.b2bseokit.com/b2b-seo-kit",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Tools: Free Toolkit for Audits & Strategy | B2B SEO Kit",
    description:
      "Use free B2B SEO tools to audit B2B websites, plan strategy, map keywords to pages, improve internal links, and turn organic traffic into qualified leads.",
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best SEO tools for B2B companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best SEO tools for B2B companies combine keyword research, technical audits, content planning, and lead-focused workflows. B2B SEO Kit offers a free toolkit purpose-built for B2B teams, including an SEO audit checklist, keyword research template, content brief generator, and product page SEO checklist — all designed to connect organic search to qualified lead generation.",
      },
    },
    {
      "@type": "Question",
      name: "What is a B2B SEO toolkit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A B2B SEO toolkit is a set of tools, templates, and checklists that helps B2B teams research keywords, audit websites, plan content, optimize product pages, and connect SEO work to lead generation. Unlike generic SEO tools that focus on rankings, a B2B SEO toolkit is built around B2B buyer journeys and pipeline outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "How is B2B SEO different from B2C SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B SEO targets lower-volume, high-intent keywords that reflect business buyer needs — such as solution searches, vendor comparisons, and integration queries. The buyer journey is longer, multiple stakeholders are involved, and the goal is qualified leads rather than high-volume traffic. B2B SEO also requires stronger product and solution page optimization, not just blog content.",
      },
    },
    {
      "@type": "Question",
      name: "Does B2B SEO Kit include a B2B SEO audit checklist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. B2B SEO Kit includes a dedicated B2B SEO audit checklist that covers on-page SEO, technical health, product page optimization, internal linking structure, and AI search readiness. It is designed for B2B marketers, consultants, and agencies auditing B2B websites.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use B2B SEO Kit for a SaaS website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. B2B SEO Kit is built for SaaS teams, founders, and marketers who need to turn keyword research into optimized product pages, comparison pages, and content briefs. The toolkit covers SaaS-specific SEO workflows including feature page optimization, integration keyword targeting, and lead-generation content planning.",
      },
    },
    {
      "@type": "Question",
      name: "Is B2B SEO Kit an alternative to hiring a B2B SEO agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B SEO Kit is not an agency replacement, but it helps lean B2B teams do structured SEO work without an agency. It provides the checklists, templates, and workflows that agencies use — so teams can audit their own sites, plan content, optimize product pages, and build internal links independently. It is also useful as a pre-agency audit tool.",
      },
    },
    {
      "@type": "Question",
      name: "Does it include AI search or GEO optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. B2B SEO Kit includes an AI Search and GEO (Generative Engine Optimization) checklist that helps B2B teams make their content more structured, entity-rich, and citation-friendly for AI-powered search tools like ChatGPT, Perplexity, and Google AI Overviews.",
      },
    },
    {
      "@type": "Question",
      name: "What should SEO tools for B2B teams include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO tools for B2B teams should help with keyword research, website audits, product page SEO, content briefs, internal linking, and lead-focused reporting. The most useful tools do more than show rankings; they help teams decide what to do next.",
      },
    },
    {
      "@type": "Question",
      name: "Is B2B SEO Kit a full SEO platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. B2B SEO Kit is not a heavy SEO platform. It is a lightweight toolkit of checklists, templates, and workflows for teams that want a simpler way to turn keyword data into pages, briefs, audits, and leads.",
      },
    },
    {
      "@type": "Question",
      name: "Is B2B SEO Kit free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. B2B SEO Kit is launching as a free B2B SEO toolkit. Early access members will receive the audit checklists, keyword research templates, content brief generator, and AI search optimization checklists at no cost. Join the early access list to get the toolkit when it launches.",
      },
    },
  ],
};

const workflowSteps = [
  {
    num: "01",
    title: "Find High-Intent B2B Keywords",
    desc: "Identify keywords that reflect buying intent — not just informational queries. Focus on solution searches, comparisons, and integration terms.",
  },
  {
    num: "02",
    title: "Group Keywords by Buyer Intent",
    desc: "Separate awareness-stage, consideration-stage, and decision-stage keywords. Each group needs a different page type and content approach.",
  },
  {
    num: "03",
    title: "Decide the Right Page Type",
    desc: "Match each keyword cluster to the correct page — product page, solution page, comparison page, or educational blog post.",
  },
  {
    num: "04",
    title: "Create SEO Content Briefs",
    desc: "Turn keyword clusters into structured briefs with intent, outline, angle, word count, and CTA — ready for writers or AI tools.",
  },
  {
    num: "05",
    title: "Optimize Product & Solution Pages",
    desc: "Apply the product page SEO checklist to improve titles, headings, proof blocks, FAQ sections, and structured data.",
  },
  {
    num: "06",
    title: "Add Internal Links & Conversion CTAs",
    desc: "Build internal links from educational content to commercial pages. Add contextual CTAs at the right buying-stage moments.",
  },
  {
    num: "07",
    title: "Track Visibility, Leads & Content Gaps",
    desc: "Monitor which pages drive form submissions, not just traffic. Identify gaps and repeat the workflow for new keyword clusters.",
  },
];

const painPoints = [
  {
    num: "01",
    title: "You have keyword data, but no clear SEO strategy.",
    desc: "Most SEO tools give you a spreadsheet of keywords and leave you to figure out what to do next. B2B SEO Kit turns keyword data into a clear page-building plan.",
  },
  {
    num: "02",
    title: "Your blog gets traffic, but not qualified leads.",
    desc: "Educational content that attracts the wrong audience doesn't fill your pipeline. B2B SEO Kit helps you plan content that attracts buyers, not just readers.",
  },
  {
    num: "03",
    title: "Your product pages are not built to rank or convert.",
    desc: "Thin product pages with weak titles and no proof blocks are invisible to search engines and unconvincing to buyers. B2B SEO Kit gives you a checklist to fix them.",
  },
  {
    num: "04",
    title: "Your team needs repeatable workflows, not more SEO advice.",
    desc: "Another guide about 'B2B SEO best practices' doesn't help if you can't execute it consistently. B2B SEO Kit gives you templates and checklists you can use today.",
  },
  {
    num: "05",
    title: "AI search is changing how B2B buyers discover vendors.",
    desc: "Buyers are using ChatGPT, Perplexity, and AI Overviews to find vendors. If your content isn't structured for AI-powered discovery, you are losing early-stage visibility.",
  },
];

const useCases = [
  {
    num: "01",
    title: "Plan a B2B SaaS SEO strategy",
    desc: "Map keyword clusters to product and solution pages. Build a prioritized content roadmap that drives trial signups, not just traffic.",
  },
  {
    num: "02",
    title: "Audit a B2B website before hiring an agency",
    desc: "Use the SEO audit checklist to identify gaps, set a baseline, and brief an agency with clear requirements instead of a blank slate.",
  },
  {
    num: "03",
    title: "Turn keyword research into content briefs",
    desc: "Move from a keyword list to structured briefs in a single workflow — so writers and AI tools produce content that actually ranks.",
  },
  {
    num: "04",
    title: "Optimize product pages for search and conversion",
    desc: "Apply the product page checklist to fix titles, headings, proof blocks, FAQ sections, and schema — so pages rank and convert.",
  },
  {
    num: "05",
    title: "Build internal links between commercial and educational pages",
    desc: "Use the internal linking planner to pass authority to your most important pages and guide buyers through the funnel.",
  },
  {
    num: "06",
    title: "Make pages more AI-search-friendly",
    desc: "Apply the GEO checklist to make content structured, entity-rich, and citation-ready for ChatGPT, Perplexity, and Google AI Overviews.",
  },
];

const hubToolCopy: Partial<
  Record<
    (typeof seoTools)[number]["href"],
    {
      label: string;
      name: string;
      description: string;
      cta: string;
    }
  >
> = {
  "/b2b-seo-audit/": {
    label: "Audit",
    name: "B2B SEO Audit Generator",
    description:
      "Find what to fix first across technical basics, product and solution pages, internal links, AI search readiness, and lead paths.",
    cta: "Run the audit first",
  },
  "/b2b-seo-strategy/": {
    label: "Strategy",
    name: "B2B SEO Strategy Workflow Generator",
    description:
      "Turn keyword research into page priorities, content workflows, internal links, commercial page fixes, and conversion paths.",
    cta: "Build the strategy workflow",
  },
  "/b2b-seo-brief-generator/": {
    label: "Brief",
    name: "B2B SEO Brief Generator",
    description:
      "Create a B2B content brief with search intent, buyer stage, outline, proof points, CTA guidance, and internal link suggestions.",
    cta: "Create a content brief",
  },
  "/b2b-seo-template/": {
    label: "Template",
    name: "B2B SEO Template",
    description:
      "Generate a practical planning template for page types, keywords, content tasks, internal links, and lead conversion paths.",
    cta: "Generate the SEO template",
  },
  "/b2b-keyword-research-template/": {
    label: "Keywords",
    name: "B2B Keyword Research Template",
    description:
      "Map B2B keywords by buyer intent, funnel stage, page type, commercial value, and the next conversion step.",
    cta: "Build a keyword map",
  },
};

const leanTeamQuestions = [
  {
    question: "What should we fix first?",
    answer:
      "Start with issues that block qualified leads: weak commercial pages, mismatched keyword intent, missing CTAs, thin proof sections, and broken internal links from educational content to product or solution pages.",
  },
  {
    question: "Which pages should we build?",
    answer:
      "Use buying-intent keywords to decide whether you need product pages, solution pages, comparison pages, templates, use-case pages, or supporting guides instead of sending every keyword to the blog.",
  },
  {
    question: "How do we connect SEO traffic to leads?",
    answer:
      "Add clear inquiry paths, contextual CTAs, trust sections, and landing-page-level tracking so traffic from organic search can be tied to form submissions, demos, RFQs, or consultation requests.",
  },
  {
    question: "How do we improve AI search / GEO visibility?",
    answer:
      "Add direct answer blocks, descriptive H2s, FAQs, comparison sections, entity-rich product details, and structured page summaries that make your expertise easier for AI search systems to understand and cite.",
  },
] as const;

const faqs = faqSchema.mainEntity;
const hubTools = seoTools
  .filter((tool) => tool.href !== "/b2b-seo-kit/")
  .map((tool) => {
    const copy = hubToolCopy[tool.href];

    return {
      label: copy?.label ?? tool.shortTitle,
      name: copy?.name ?? tool.title,
      href: tool.href.replace(/\/$/, ""),
      description: copy?.description ?? tool.hubDescription,
      cta: copy?.cta ?? tool.cta,
    };
  });
const calculatorCluster = leadGenerationCalculators[0];
const calculatorTools = leadGenerationCalculators.slice(1);

export default function B2BSEOKitPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
        <SiteHeader active="tools" />

        <main>
          {/* ── 1. Hero ── */}
          <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6">
            {/* subtle grid bg */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Free B2B SEO Tools - No Login Required
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                Free B2B SEO tools for lean teams turning{" "}
                <span className="text-blue-600">search into leads</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                B2B SEO Kit is a free, lightweight toolkit for lean B2B teams. Use it to run SEO
                audits, build strategy workflows, map keywords to pages, improve commercial pages,
                strengthen internal links, and connect organic traffic with lead generation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the Free B2B SEO Toolkit
                </a>
                <a
                  href="/b2b-seo-audit"
                  className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-base"
                >
                  Run the Audit First
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Built for B2B marketers, SaaS teams, consultants, agencies, manufacturers, and
                export businesses.
              </p>
            </div>
          </section>

          {/* ── 2. Quick Answer (GEO/AI-friendly) ── */}
          <section className="py-10 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Quick Answer
              </p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What are B2B SEO tools?
              </h2>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                <strong>B2B SEO tools</strong> should help teams prioritize fixes, map keywords to
                commercial and educational pages, improve internal links, and connect SEO work with
                qualified leads. The best tools do more than show keyword data. They help a lean
                team decide which pages to fix, which pages to build, and how each SEO task supports
                a real conversion path.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                For B2B teams, the goal is not only rankings or traffic. The goal is to connect
                SEO work to qualified leads, product page visibility, and pipeline growth.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                The easiest SEO tool for B2B teams is not always the one with the most dashboards.
                It is the one that helps your team decide what to do next, without turning every
                keyword decision into another heavy SEO platform workflow.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                B2B SEO Kit is designed for teams looking for lightweight SEO tools for B2B teams
                that turn keyword data into practical workflows. Instead of replacing full SEO
                platforms, this <strong>B2B SEO tool</strong> focuses on audit planning, internal
                linking, content-to-page mapping, conversion paths, and AI search readiness.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                If you need a starting point, begin with the{" "}
                <a href="/b2b-seo-audit" className="text-blue-600 hover:underline">
                  B2B SEO Audit Generator
                </a>{" "}
                to find the highest-priority page, content, and internal linking gaps before
                working through the full toolkit. For a broader planning flow, use the{" "}
                <a href="/b2b-seo-strategy" className="text-blue-600 hover:underline">
                  B2B SEO Strategy Workflow Generator
                </a>{" "}
                to turn those gaps into a focused roadmap.
              </p>
              <p className="text-slate-600 text-[14px] leading-relaxed border-l-2 border-slate-200 pl-4">
                <strong>Note:</strong> B2B SEO Kit is not a full-service SEO agency. It is a
                practical toolkit for teams that want to audit their own website, plan SEO
                workflows, or prepare better briefs before hiring a B2B SEO agency or B2B SEO
                consultant.
              </p>
            </div>
          </section>

          {/* ── 3. Pain Points ── */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                  Why B2B SEO Feels Harder Than It Should
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {painPoints.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
                  >
                    <div className="text-xs font-bold text-slate-400 mb-3 tracking-widest">{p.num}</div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-[15px]">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. Lean Team Help ── */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Practical Workflow
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  How B2B SEO Kit helps lean teams
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  Small B2B teams do not need another complex dashboard to maintain. They need a
                  repeatable way to choose the next useful SEO action.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {leanTeamQuestions.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="mb-2 text-[15px] font-semibold text-slate-900">
                      {item.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. Tools Included ── */}
          <section id="tools-included" className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  What You Get
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Free B2B SEO Tools Included in the Kit
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  Use these free B2B SEO tools to move from audit to strategy, keyword mapping,
                  content planning, internal linking, and lead-focused page optimization.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {hubTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-2"
                  >
                    <div className="inline-flex">
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                        {tool.label}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-[15px]">{tool.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                    <a
                      href={tool.href}
                      className="mt-auto pt-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {tool.cta}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mb-10 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                      Calculator Cluster
                    </p>
                    <h3 className="mb-3 text-2xl font-bold text-slate-900">
                      Lead generation calculators for B2B teams
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      Use simple calculators to estimate cost per lead, ROAS, CPM, and website
                      lead generation potential. These tools help connect SEO, paid campaigns,
                      commercial pages, and conversion paths to real pipeline outcomes.
                    </p>
                    <a
                      href={calculatorCluster.href}
                      className="mt-5 inline-block rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      View B2B lead generation calculators
                    </a>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {calculatorTools.map((tool) => (
                      <a
                        key={tool.href}
                        href={tool.href}
                        className="rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50"
                      >
                        <span className="block text-sm font-semibold text-slate-900">
                          {tool.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                          {tool.description}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the Free B2B SEO Toolkit
                </a>
                <p className="text-slate-400 text-xs mt-3">
                  Free early access. No spam. Built for practical B2B SEO workflows.
                </p>
              </div>
            </div>
          </section>

          {/* ── 5. Workflow ── */}
          <section id="workflow" className="py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  The B2B SEO Workflow
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  From Keyword Research to Qualified Leads
                </h2>
              </div>

              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[22px] top-4 bottom-4 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />

                <ol className="space-y-6">
                  {workflowSteps.map((step) => (
                    <li key={step.num} className="flex gap-5 items-start">
                      <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold z-10">
                        {step.num}
                      </div>
                      <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* ── 6. Mini Tool Preview ── */}
          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Product Preview
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Preview the B2B SEO Audit Workflow
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  Enter your context, get a structured B2B SEO action plan — not a generic
                  keyword report.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                {/* Input panel */}
                <div className="p-6 border-b border-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Input
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Website type", value: "B2B SaaS" },
                      { label: "Main goal", value: "Generate qualified leads" },
                      { label: "SEO stage", value: "Early growth" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3"
                      >
                        <span className="text-sm text-slate-500">{label}</span>
                        <span className="text-sm font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output panel */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Recommended Actions
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Audit product and solution page titles for buying-intent keywords",
                      "Map high-intent keywords to dedicated commercial pages",
                      "Add FAQ blocks to product pages for AI search visibility",
                      "Build internal links from educational blog posts to product pages",
                      "Track form submissions and conversions by landing page",
                    ].map((action) => (
                      <li key={action} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          ✓
                        </span>
                        <span className="text-sm text-slate-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── 7. Comparison ── */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                  Generic SEO Tools vs. B2B SEO Kit
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  Most SEO tools show you data. B2B SEO Kit helps you take action.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm bg-white">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left px-6 py-4 text-slate-500 font-medium w-1/2">
                        Generic SEO Tools
                      </th>
                      <th className="text-left px-6 py-4 text-blue-600 font-semibold w-1/2">
                        B2B SEO Kit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      [
                        "Focus on rankings and traffic",
                        "Connects SEO work to qualified leads",
                      ],
                      [
                        "Give broad keyword data with no next step",
                        "Turns B2B keywords into page types and briefs",
                      ],
                      [
                        "Treat all pages the same",
                        "Separates product pages, solution pages, blogs, and templates",
                      ],
                      [
                        "Require you to build your own workflow",
                        "Provides repeatable B2B SEO checklists and templates",
                      ],
                      [
                        "Focus on traditional SEO signals only",
                        "Includes AI search and GEO readiness checklist",
                      ],
                    ].map(([generic, b2b], i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 text-slate-500">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-slate-300">✗</span> {generic}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-800 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-blue-500">✓</span> {b2b}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-8">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the Free B2B SEO Toolkit
                </a>
              </div>
            </div>
          </section>

          {/* ── 8. Use Cases ── */}
          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                  Use B2B SEO Kit When You Need To...
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCases.map((u) => (
                  <div
                    key={u.title}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 shadow-sm"
                  >
                    <div className="text-xs font-bold text-slate-400 mb-3 tracking-widest">{u.num}</div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-[15px]">{u.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 9. CRO CTA ── */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Free Early Access
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Get the Free B2B SEO Toolkit
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Join early access and get the first templates when they launch:
              </p>
              <ul className="inline-flex flex-col items-start gap-2 mb-8 text-left">
                {[
                  "B2B SEO Audit Checklist",
                  "B2B SEO Content Brief Generator",
                  "B2B Keyword Research Template",
                  "Product Page SEO Checklist",
                  "AI Search / GEO Checklist",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-2xl transition-colors text-base shadow-md"
                >
                  Get Free Early Access
                </a>
                <p className="text-slate-400 text-xs mt-4">
                  Free early access. No spam. Built for practical B2B SEO workflows.
                </p>
              </div>
            </div>
          </section>

          {/* ── 10. FAQ ── */}
          <section id="faq" className="py-16 px-4 sm:px-6 bg-white border-t border-slate-200">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  Common questions about B2B SEO tools, the toolkit, and how it works.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.name}
                    className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 text-[15px] flex items-center justify-between gap-4">
                      {faq.name}
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 group-open:bg-blue-100 flex items-center justify-center text-slate-500 group-open:text-blue-600 transition-colors text-xs font-bold">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  </details>
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
