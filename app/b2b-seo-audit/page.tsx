import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "B2B SEO Audit Checklist | Free B2B Website Audit Tool",
  description:
    "Use this free B2B SEO audit checklist to review technical SEO, keyword intent, product pages, content gaps, internal links, AI search readiness, and lead conversion paths.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-seo-audit/",
  },
  openGraph: {
    title: "B2B SEO Audit Checklist | Free B2B Website Audit Tool",
    description:
      "Use this free B2B SEO audit checklist to review technical SEO, keyword intent, product pages, content gaps, internal links, AI search readiness, and lead conversion paths.",
    url: "https://www.b2bseokit.com/b2b-seo-audit/",
    siteName: "B2B SEO Kit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Audit Checklist | Free B2B Website Audit Tool",
    description:
      "Use this free B2B SEO audit checklist to review technical SEO, keyword intent, product pages, content gaps, internal links, AI search readiness, and lead conversion paths.",
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a B2B SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A B2B SEO audit is a structured review of a B2B website's technical SEO, keyword targeting, product and solution pages, content gaps, internal links, conversion paths, and AI search readiness. Unlike a generic SEO audit, a B2B SEO audit focuses on connecting organic search work to qualified lead generation and pipeline outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "How is a B2B SEO audit different from a regular SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular SEO audit focuses on technical health and keyword rankings. A B2B SEO audit goes further by reviewing keyword intent mapping, product and solution page depth, internal linking between educational and commercial content, CTA placement, and AI search readiness. The goal is qualified leads, not just traffic.",
      },
    },
    {
      "@type": "Question",
      name: "What should a B2B SEO audit include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A B2B SEO audit should cover: technical SEO health (crawlability, page speed, mobile), keyword and intent mapping, product and solution page optimization, content gap analysis, internal linking structure, lead conversion path review, and AI search or GEO readiness. Each area should be reviewed with B2B buyer journeys in mind.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this checklist before hiring a B2B SEO agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The B2B SEO audit checklist is designed for teams that want to understand their current SEO situation before bringing in an agency or consultant. It helps you identify gaps, set a baseline, and arrive at agency conversations with clear context and better briefs.",
      },
    },
    {
      "@type": "Question",
      name: "Does the checklist include product page SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Product and solution page SEO is a dedicated section of the B2B SEO audit checklist. It covers title and heading optimization for buying-intent keywords, page depth, proof blocks, FAQ sections, structured data, and CTA placement.",
      },
    },
    {
      "@type": "Question",
      name: "Does it include AI search or GEO readiness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The checklist includes an AI Search and GEO (Generative Engine Optimization) readiness section that helps B2B teams make their content more structured, entity-rich, and citation-friendly for tools like ChatGPT, Perplexity, and Google AI Overviews.",
      },
    },
    {
      "@type": "Question",
      name: "Is the B2B SEO audit checklist free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The B2B SEO audit checklist is part of the free B2B SEO Kit toolkit. Join the early access list to receive the checklist, keyword mapping template, product page checklist, and AI search readiness guide when they launch.",
      },
    },
  ],
};

const auditAreas = [
  {
    label: "Technical",
    title: "Technical SEO",
    checks: [
      "Crawlability and indexation status",
      "Page speed and Core Web Vitals",
      "Mobile responsiveness",
      "Canonical tags and duplicate content",
      "XML sitemap and robots.txt",
    ],
    why: "Technical issues prevent search engines from finding and ranking your pages — no matter how good the content.",
  },
  {
    label: "Keywords",
    title: "Keyword & Intent Mapping",
    checks: [
      "Are high-intent keywords mapped to the right pages?",
      "Are product and solution pages targeting buying-intent terms?",
      "Are comparison and integration keywords addressed?",
      "Are informational keywords going to blog content, not product pages?",
    ],
    why: "B2B SEO requires different keyword logic at each buyer stage. Mismatched intent wastes effort and misses leads.",
  },
  {
    label: "Product Pages",
    title: "Product Page SEO",
    checks: [
      "Do product pages target buying-intent keywords in titles and H1s?",
      "Is there enough depth and proof to support the decision stage?",
      "Are FAQs and structured data present?",
      "Are CTAs visible and conversion-focused?",
    ],
    why: "Thin or poorly structured product pages are the most common reason B2B sites get traffic but few leads.",
  },
  {
    label: "Content",
    title: "Content Gap Analysis",
    checks: [
      "Are there pages for each stage of the buyer journey?",
      "Are comparison and use-case pages present for high-intent queries?",
      "Are there gaps in topic coverage competitors are filling?",
      "Is content written for buyers or only for search engines?",
    ],
    why: "Content gaps leave high-intent queries unanswered — handing prospects to competitors.",
  },
  {
    label: "Links",
    title: "Internal Linking",
    checks: [
      "Do educational blog posts link to relevant product pages?",
      "Are commercial pages receiving enough internal link authority?",
      "Are anchor texts descriptive and keyword-relevant?",
      "Are orphan pages identified and connected?",
    ],
    why: "Weak internal linking means valuable SEO authority never reaches the commercial pages that need to rank.",
  },
  {
    label: "Conversion",
    title: "Lead Conversion Paths",
    checks: [
      "Are CTAs visible on all commercial pages?",
      "Are form submissions tracked by landing page?",
      "Is the buyer journey from organic entry to demo/contact clear?",
      "Do blog posts have relevant CTAs to product or solution pages?",
    ],
    why: "SEO without conversion tracking is guesswork. B2B SEO should feed qualified leads into a measurable pipeline.",
  },
  {
    label: "AI / GEO",
    title: "AI Search & GEO Readiness",
    checks: [
      "Do pages include concise direct-answer blocks?",
      "Are headings descriptive and entity-rich?",
      "Are comparison tables and structured lists present?",
      "Is FAQ schema implemented on priority pages?",
    ],
    why: "AI search tools like ChatGPT and Perplexity prefer structured, descriptive, citation-ready content. B2B buyers are already using them.",
  },
];

const checklistItems = [
  {
    category: "Keyword Intent",
    items: [
      "Does each priority page target a clear and specific search intent?",
      "Are product pages mapped to buying-intent keywords, not informational queries?",
      "Are comparison or alternative keywords addressed on dedicated pages?",
    ],
  },
  {
    category: "Product & Solution Pages",
    items: [
      "Do title tags clearly explain the page value and include a target keyword?",
      "Are H1s written for buyers, not just search engines?",
      "Is there a proof section (case studies, numbers, testimonials) on each key page?",
      "Is a FAQ block with structured data present on priority pages?",
    ],
  },
  {
    category: "Content & Internal Links",
    items: [
      "Do blog posts link to relevant product or solution pages with descriptive anchor text?",
      "Are there internal links from high-traffic pages to low-traffic commercial pages?",
      "Is educational content connected to the next step in the buyer journey?",
    ],
  },
  {
    category: "Conversion Paths",
    items: [
      "Are CTAs visible above the fold on all commercial pages?",
      "Are form submissions tracked per landing page in Google Analytics or similar?",
      "Is the path from organic landing → product page → demo/contact clear?",
    ],
  },
  {
    category: "AI Search Readiness",
    items: [
      "Are FAQs written in natural language that AI search systems can extract?",
      "Do pages include a concise summary or direct answer near the top?",
      "Are comparison tables or structured lists present for high-intent pages?",
    ],
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Choose Priority Pages",
    desc: "Start with your highest-traffic and highest-intent pages — product pages, solution pages, and any page tied to pipeline goals.",
  },
  {
    num: "02",
    title: "Map Keywords to Buyer Intent",
    desc: "Assign each priority page a primary keyword and buyer stage. Separate awareness, consideration, and decision-stage intent.",
  },
  {
    num: "03",
    title: "Review Titles, Headings & Page Structure",
    desc: "Check that each page has a buying-intent title tag, a clear H1, and a logical heading hierarchy that supports the keyword.",
  },
  {
    num: "04",
    title: "Check Product & Solution Page Depth",
    desc: "Review whether product and solution pages have enough depth — proof blocks, use cases, FAQs, and structured data.",
  },
  {
    num: "05",
    title: "Identify Content Gaps",
    desc: "Find keywords with buying intent that have no dedicated page. These represent the highest-priority content opportunities.",
  },
  {
    num: "06",
    title: "Add Internal Links & CTAs",
    desc: "Build internal links from educational content to commercial pages. Add contextual CTAs at the right buying-stage moments.",
  },
  {
    num: "07",
    title: "Improve FAQ & AI-Search Structure",
    desc: "Add FAQ schema, concise answer blocks, and comparison tables to priority pages so AI search tools can surface and cite them.",
  },
  {
    num: "08",
    title: "Track Rankings, Traffic & Lead Quality",
    desc: "Monitor which pages drive form submissions and qualified leads — not just traffic. Use results to prioritize the next round of improvements.",
  },
];

const painPoints = [
  {
    num: "01",
    title: "Rankings do not always become leads.",
    desc: "Ranking for the wrong intent attracts the wrong audience. A B2B SEO audit helps you check whether your keyword targets match the buyer journey.",
  },
  {
    num: "02",
    title: "Product pages are too thin.",
    desc: "Short product pages with weak titles and no proof blocks fail to rank and fail to convert. They need depth, structure, and buying-intent copy.",
  },
  {
    num: "03",
    title: "Blog posts are not connected to buying intent.",
    desc: "Educational content that doesn't link to commercial pages leaves buyers with no next step. Internal links and CTAs close the gap.",
  },
  {
    num: "04",
    title: "Internal links do not support commercial pages.",
    desc: "Without deliberate internal linking, authority stays on high-traffic blog posts while product pages remain invisible to search engines.",
  },
  {
    num: "05",
    title: "CTAs are unclear or buried.",
    desc: "If a qualified visitor lands on a product page but can't find a clear next step, the SEO investment produces no pipeline result.",
  },
  {
    num: "06",
    title: "AI search needs structured, descriptive content.",
    desc: "ChatGPT, Perplexity, and Google AI Overviews prefer structured, entity-rich content with clear answers. Most B2B sites are not optimized for this.",
  },
];

const faqs = faqSchema.mainEntity;

export default function B2BSEOAuditPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-[10px] font-bold text-white shadow-sm transition-colors group-hover:bg-blue-700">
                B2B
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                SEO Kit
              </span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
              <a href="/b2b-seo-kit/" className="hover:text-slate-900 transition-colors">
                SEO Toolkit
              </a>
              <a href="/b2b-seo-audit/" className="text-slate-900 font-medium">
                Audit Checklist
              </a>
              <a href="#faq" className="hover:text-slate-900 transition-colors">
                FAQ
              </a>
            </nav>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Get Free Access
            </a>
          </div>
        </header>

        <main>
          {/* ── 1. Hero ── */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Free Early Access — Part of{" "}
                <a href="/b2b-seo-kit/" className="underline underline-offset-2 hover:text-blue-900">
                  B2B SEO Kit
                </a>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                Free B2B SEO Audit Checklist for Websites That Need{" "}
                <span className="text-blue-600">More Qualified Leads</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Audit your B2B website across technical SEO, keyword targeting, product pages,
                content gaps, internal links, AI search readiness, and lead conversion paths.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the Free B2B SEO Audit Checklist
                </a>
                <a
                  href="#audit-areas"
                  className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-base"
                >
                  See What's Included
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Built for B2B marketers, SaaS teams, consultants, agencies, manufacturers, and
                export businesses.
              </p>
            </div>
          </section>

          {/* ── 2. Quick Answer ── */}
          <section className="py-10 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Quick Answer
              </p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What Is a B2B SEO Audit?
              </h2>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                A <strong>B2B SEO audit</strong> is a structured review of a B2B website's
                technical SEO, keyword targeting, product and solution pages, content gaps,
                internal links, conversion paths, and AI search readiness. The goal is not only
                to improve rankings, but to help the website generate more qualified leads.
              </p>
              <p className="text-slate-700 leading-relaxed text-[15px] mb-4">
                A B2B SEO audit differs from a generic audit because it applies B2B buyer-journey
                logic — separating awareness, consideration, and decision-stage pages, and
                reviewing whether each page supports pipeline growth, not just traffic.
              </p>
              <p className="text-slate-600 text-[14px] leading-relaxed border-l-2 border-slate-200 pl-4">
                The <strong>B2B SEO audit checklist</strong> from{" "}
                <a href="/b2b-seo-kit/" className="text-blue-600 hover:underline">
                  B2B SEO Kit
                </a>{" "}
                is a free, practical tool for teams that want to audit their own website — before
                hiring a B2B SEO agency, starting content production, or launching a new site.
              </p>
            </div>
          </section>

          {/* ── 3. Pain Points ── */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                  Why Most B2B SEO Audits Miss the Real Problem
                </h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto text-[15px]">
                  Generic audits focus on rankings and technical errors. B2B audits need to
                  connect every issue back to lead quality and pipeline.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {painPoints.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
                  >
                    <div className="text-xs font-bold text-slate-400 mb-3 tracking-widest">
                      {p.num}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-[15px]">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. What the Audit Covers ── */}
          <section
            id="audit-areas"
            className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Audit Coverage
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  What the B2B SEO Audit Covers
                </h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto text-[15px]">
                  Seven areas that matter for B2B search visibility and lead generation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {auditAreas.map((a) => (
                  <div
                    key={a.title}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-3"
                  >
                    <div className="inline-flex">
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                        {a.label}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 text-[15px]">{a.title}</h3>
                    <ul className="space-y-1.5">
                      {a.checks.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 text-[9px] font-bold">
                            ✓
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500 border-t border-slate-200 pt-3 mt-auto leading-relaxed">
                      {a.why}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Get the Free B2B SEO Audit Checklist
                </a>
                <p className="text-slate-400 text-xs mt-3">
                  Free early access. No spam. Built for practical B2B SEO workflows.
                </p>
              </div>
            </div>
          </section>

          {/* ── 5. Checklist Preview ── */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Checklist Preview
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B SEO Audit Checklist: Sample Items
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  A sample of what the full B2B SEO audit checklist includes.
                </p>
              </div>

              <div className="space-y-5">
                {checklistItems.map((group) => (
                  <div
                    key={group.category}
                    className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
                  >
                    <div className="px-6 py-3 bg-slate-50 border-b border-slate-200">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        {group.category}
                      </p>
                    </div>
                    <ul className="divide-y divide-slate-100">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 px-6 py-4"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded border-2 border-slate-200 flex-shrink-0 bg-white" />
                          <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. Workflow ── */}
          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  The Audit Workflow
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B SEO Audit Workflow: Step by Step
                </h2>
              </div>

              <div className="relative">
                <div
                  className="absolute left-[22px] top-4 bottom-4 w-px bg-slate-200 hidden sm:block"
                  aria-hidden="true"
                />
                <ol className="space-y-6">
                  {workflowSteps.map((step) => (
                    <li key={step.num} className="flex gap-5 items-start">
                      <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold z-10">
                        {step.num}
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-5 shadow-sm flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* ── 7. Mini Audit Output Preview ── */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Audit Output Preview
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  What a B2B SEO Audit Produces
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  A structured action list — not a report full of scores and metrics.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Input
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Website type", value: "B2B SaaS" },
                      { label: "Goal", value: "More qualified demo requests" },
                      { label: "SEO stage", value: "Early SEO growth" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3"
                      >
                        <span className="text-sm text-slate-500">{label}</span>
                        <span className="text-sm font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Audit Actions
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Rewrite product page titles to target buying-intent keywords",
                      "Add comparison and use-case sections to key product pages",
                      "Link educational blog content to commercial pages with descriptive anchor text",
                      "Add FAQ schema to product and solution pages for AI search visibility",
                      "Set up form submission tracking per landing page",
                      "Review CTAs on highest-traffic pages — ensure they are visible and conversion-focused",
                    ].map((action) => (
                      <li key={action} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
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

          {/* ── 8. CTA Section ── */}
          <section className="py-20 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Free Early Access
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Get the Free B2B SEO Audit Checklist
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Join early access and get the first B2B SEO audit templates, product page
                checklist, keyword mapping workflow, and AI search readiness checklist when
                they launch.
              </p>
              <ul className="inline-flex flex-col items-start gap-2 mb-8 text-left">
                {[
                  "B2B SEO Audit Checklist",
                  "Keyword Intent Mapping Template",
                  "Product Page SEO Checklist",
                  "AI Search / GEO Readiness Checklist",
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
                  Get the Free Audit Checklist
                </a>
                <p className="text-slate-400 text-xs mt-4">
                  Free early access. No spam. Built for practical B2B SEO workflows.
                </p>
              </div>
            </div>
          </section>

          {/* ── 9. FAQ ── */}
          <section id="faq" className="py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  Common questions about the B2B SEO audit checklist and how it works.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.name}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 text-[15px] flex items-center justify-between gap-4">
                      {faq.name}
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-blue-100 flex items-center justify-center text-slate-500 group-open:text-blue-600 transition-colors text-xs font-bold">
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

        {/* ── Footer ── */}
        <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="font-semibold text-slate-900 hover:text-blue-600 transition-colors"
              >
                B2B SEO Kit
              </a>
              <span>·</span>
              <a href="/b2b-seo-kit/" className="hover:text-slate-700 transition-colors">
                SEO Toolkit
              </a>
              <span>·</span>
              <a href="/b2b-seo-audit/" className="hover:text-slate-700 transition-colors">
                Audit Checklist
              </a>
            </div>
            <p className="text-xs text-slate-400 text-center">
              Free B2B SEO audit checklist, templates, and workflows for B2B marketers and
              consultants.
            </p>
            <a
              href="mailto:hello@b2bseokit.com"
              className="hover:text-slate-700 transition-colors"
            >
              hello@b2bseokit.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
