import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import AuditGenerator from "./AuditGenerator";

export const metadata: Metadata = {
  title: "B2B SEO Audit Generator | Free B2B Website Audit Tool",
  description:
    "Run a free B2B SEO audit to identify what to fix first across commercial pages, content strategy, internal links, conversion paths, and AI search visibility.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-seo-audit",
  },
  openGraph: {
    title: "B2B SEO Audit Generator | Free B2B Website Audit Tool",
    description:
      "Run a free B2B SEO audit to identify what to fix first across commercial pages, content strategy, internal links, conversion paths, and AI search visibility.",
    url: "https://www.b2bseokit.com/b2b-seo-audit",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Audit Generator | Free B2B Website Audit Tool",
    description:
      "Run a free B2B website audit for commercial pages, content strategy, internal links, conversion paths, and AI search visibility.",
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
      name: "What is a free B2B website audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free B2B website audit helps teams review product pages, keyword intent, internal links, conversion paths, technical basics, and AI search readiness before creating more content or hiring an SEO agency.",
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
      name: "Can this be used as an SEO checklist for B2B companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. B2B SEO Audit Generator creates a starter checklist for B2B companies that need to prioritize product page SEO, internal linking, CTA paths, content gaps, and AI search readiness.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a full technical SEO audit tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is a lightweight B2B SEO audit tool for prioritization. It does not crawl your site or replace a full technical audit, but it helps teams decide what to check and fix first.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a B2B website audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A B2B website audit should review technical SEO, keyword targeting, product and solution pages, content gaps, internal linking, conversion paths, tracking, and AI search readiness. The goal is to find which pages and workflows are blocking qualified leads.",
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
    label: "Commercial",
    title: "Commercial page clarity",
    checks: [
      "Do product, service, solution, and category pages explain who the page is for?",
      "Can a buyer understand the problem, offer, proof, and next step without returning home?",
      "Are use cases, specs, proof, comparisons, or FAQs present where buyers hesitate?",
    ],
    why: "Commercial pages are where B2B SEO becomes pipeline. Thin money pages usually limit both rankings and conversions.",
  },
  {
    label: "ICP",
    title: "ICP and buyer intent alignment",
    checks: [
      "Do priority pages speak to the buyer role, company type, industry, or use case?",
      "Are awareness, consideration, and decision-stage keywords separated?",
      "Does each page match the intent behind the search instead of chasing volume only?",
    ],
    why: "B2B keyword volume is often small. Intent and fit matter more than broad traffic.",
  },
  {
    label: "Page Fit",
    title: "Keyword-to-page fit",
    checks: [
      "Are buying-intent keywords mapped to commercial pages instead of generic blog posts?",
      "Do comparison, alternative, template, and use-case queries have the right page type?",
      "Are title tags, H1s, and headings aligned with the page job?",
    ],
    why: "A good B2B website audit checks whether every important keyword has a page that can both rank and convert.",
  },
  {
    label: "Links",
    title: "Internal links to money pages",
    checks: [
      "Do educational posts link to relevant product, service, category, or solution pages?",
      "Are underlinked commercial pages connected from guides, FAQs, case studies, and resources?",
      "Is anchor text descriptive enough for users and search engines?",
    ],
    why: "Internal linking for B2B SEO should move authority and buyers toward pages that can generate qualified leads.",
  },
  {
    label: "Content",
    title: "Content gaps across the buyer journey",
    checks: [
      "Are there pages for problem, solution, comparison, use-case, and decision-stage searches?",
      "Does blog content support commercial pages instead of living as disconnected traffic?",
      "Are missing buyer questions blocking AI search visibility or sales conversations?",
    ],
    why: "A B2B content audit should find gaps that affect lead quality, not only gaps that add traffic.",
  },
  {
    label: "Conversion",
    title: "Conversion path quality",
    checks: [
      "Are CTAs visible on commercial pages and contextual inside educational content?",
      "Can visitors move from organic landing page to demo, quote, inquiry, or consultation?",
      "Are proof and trust signals close to forms and CTAs?",
    ],
    why: "SEO traffic only matters when the right visitors can take the next step.",
  },
  {
    label: "Technical",
    title: "Technical SEO basics",
    checks: [
      "Are priority pages crawlable, indexable, mobile-friendly, and canonicalized correctly?",
      "Are sitemap, robots.txt, page speed, and duplicate content issues under control?",
      "Are important pages easy to reach from navigation and internal links?",
    ],
    why: "This is not a full crawl, but a free B2B website audit still needs the basics that protect visibility.",
  },
  {
    label: "AI / GEO",
    title: "AI search / GEO readiness",
    checks: [
      "Do priority pages include concise answers, definitions, FAQs, and comparison sections?",
      "Are headings and body copy entity-rich enough to explain the company, product, audience, and use case?",
      "Is FAQ schema or other structured content used where it fits naturally?",
    ],
    why: "AI SEO audits for B2B should check whether pages are structured enough for answer engines and human buyers.",
  },
];

const checklistItems = [
  {
    category: "Homepage",
    items: [
      "Does the H1 clearly explain the company category, audience, and outcome?",
      "Are primary product, service, solution, or category pages easy to reach?",
      "Is there a clear CTA path for demo, quote, consultation, inquiry, or trial?",
    ],
  },
  {
    category: "Service / product pages",
    items: [
      "Does each page target a buying-intent keyword or use-case query?",
      "Are use cases, proof, specs, comparisons, FAQs, and trust signals included?",
      "Is the CTA specific to the page intent rather than a generic contact button?",
    ],
  },
  {
    category: "Blog and educational content",
    items: [
      "Does each post target a clear buyer-stage question or problem?",
      "Does educational content link to the relevant commercial page?",
      "Are content gaps mapped across awareness, consideration, and decision stages?",
    ],
  },
  {
    category: "Internal links",
    items: [
      "Do high-traffic posts link to money pages with descriptive anchors?",
      "Do commercial pages link to supporting guides, FAQs, case studies, or comparisons?",
      "Are orphan or underlinked product, service, or category pages identified?",
    ],
  },
  {
    category: "CTAs and lead capture",
    items: [
      "Are CTAs visible above the fold and after proof sections?",
      "Do blog posts include contextual next steps instead of only end-of-post CTAs?",
      "Are forms short enough for the buyer stage and clear about what happens next?",
    ],
  },
  {
    category: "Analytics / lead tracking",
    items: [
      "Are form submissions, demo requests, quote requests, calls, and consultations tracked?",
      "Can leads be reviewed by landing page and page type?",
      "Does reporting separate traffic growth from qualified lead generation?",
    ],
  },
  {
    category: "AI search visibility",
    items: [
      "Do priority pages include direct answers, definitions, FAQs, and structured lists?",
      "Are product, service, company, industry, and use-case entities described clearly?",
      "Are comparison tables or concise summaries present where buyers evaluate options?",
    ],
  },
];

const websiteTypeAuditCards = [
  {
    title: "B2B SaaS",
    desc: "Review solution pages, feature pages, integrations, comparison content, demo paths, and blog-to-product internal links.",
  },
  {
    title: "B2B services / professional services",
    desc: "Audit service pages, niche positioning, proof, case studies, consultation CTAs, and educational content that should support inquiries.",
  },
  {
    title: "Manufacturer / exporter",
    desc: "Check product category pages, specs, certifications, applications, OEM/ODM details, export trust signals, and quote paths.",
  },
  {
    title: "Agency / consultant",
    desc: "Review service positioning, lead magnets, case studies, process pages, expert proof, and consultation paths by offer.",
  },
  {
    title: "B2B ecommerce",
    desc: "Audit category pages, product details, filters, schema-ready specs, buying guides, quote or checkout paths, and internal links.",
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
        <SiteHeader active="audit" />

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
                <a href="/b2b-seo-kit" className="underline underline-offset-2 hover:text-blue-900">
                  B2B SEO Kit
                </a>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
                B2B SEO Audit Generator for finding{" "}
                <span className="text-blue-600">what to fix first</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Run a free B2B SEO audit for lean teams that need clearer priorities across
                commercial pages, internal links, content-to-conversion paths, and GEO / AI search
                visibility.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <a
                  href="#audit-generator"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-colors text-base shadow-sm"
                >
                  Generate My Audit Plan
                </a>
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors text-base"
                >
                  Get the Full Checklist
                </a>
              </div>

              <p className="text-sm text-slate-500">
                No backend, login, AI API, or email gate before the audit output.
              </p>
            </div>
          </section>

          <AuditGenerator />

          <section className="px-4 sm:px-6 pb-8">
            <div className="max-w-4xl mx-auto rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
                Take this audit further
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Turn your audit priorities into a B2B SEO workflow
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                After you identify what to fix first, map the work into page priorities, keyword
                groups, internal links, CTAs, and AI search readiness checks.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-strategy"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Generate a B2B SEO strategy workflow
                </a>
                <a
                  href="/b2b-seo-kit"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Explore all free B2B SEO tools
                </a>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 pb-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm leading-relaxed text-slate-600 bg-white border border-slate-200 rounded-3xl px-5 py-4 shadow-sm">
                Use this <strong>free B2B website audit</strong> as a starting point before
                creating more content, rebuilding product pages, or hiring an SEO agency. The
                generator works like a lightweight <strong>B2B SEO audit checklist</strong> and{" "}
                <strong>SEO checklist for B2B companies</strong> that need clearer priorities.
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
                A <strong>B2B SEO audit</strong> is a structured review of a B2B website&apos;s
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
                <a href="/b2b-seo-kit" className="text-blue-600 hover:underline">
                  B2B SEO Kit
                </a>{" "}
                is a free, practical tool for teams that want to audit their own website — before
                hiring a B2B SEO agency, starting content production, or launching a new site.
              </p>
              <p className="text-slate-600 text-[14px] leading-relaxed border-l-2 border-slate-200 pl-4 mt-4">
                After you finish the audit, use the{" "}
                <a href="/b2b-seo-strategy" className="text-blue-600 hover:underline">
                  B2B SEO Strategy Workflow Generator
                </a>{" "}
                to turn the findings into a practical roadmap, or explore all{" "}
                <a href="/b2b-seo-kit" className="text-blue-600 hover:underline">
                  free B2B SEO tools
                </a>{" "}
                for audits, briefs, templates, keyword mapping, and lead-generation workflows.
              </p>
              <p className="text-slate-600 text-[14px] leading-relaxed border-l-2 border-slate-200 pl-4 mt-4">
                After the audit, use the{" "}
                <a href="/b2b-seo-brief-generator" className="text-blue-600 hover:underline">
                  B2B SEO Content Brief Generator
                </a>{" "}
                to turn priority keywords and page gaps into practical briefs for blog posts,
                product pages, service pages, comparison pages, use case pages, and industry
                landing pages.
              </p>
              <p className="text-slate-600 text-[14px] leading-relaxed border-l-2 border-slate-200 pl-4 mt-4">
                Use it as a lightweight B2B SEO audit tool before creating new content, hiring an
                agency, or rebuilding your site.
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
                  What should a B2B SEO audit include?
                </h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto text-[15px]">
                  A practical B2B website audit should cover visibility, buyer intent, conversion
                  paths, and AI search readiness in one workflow.
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
                  B2B SEO Audit Checklist
                </h2>
                <p className="text-slate-600 mt-3 text-[15px]">
                  A compact checklist for reviewing the pages and paths that most often affect B2B
                  rankings, qualified leads, and GEO visibility.
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

          {/* ── 6. Company Type Audit ── */}
          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Audit by Website Type
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B website audit by company type
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
                  The core audit stays the same, but the highest-priority pages change by business
                  model. Start with the pages closest to qualified leads.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {websiteTypeAuditCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
                  >
                    <h3 className="mb-2 text-[15px] font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 7. Workflow ── */}
          <section className="py-16 px-4 sm:px-6">
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

          {/* ── 8. Mini Audit Output Preview ── */}
          <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
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

          <RelatedToolsSection
            eyebrow="Next Steps"
            title="Next steps after your audit"
            links={[
              {
                label: "B2B SEO Strategy Workflow Generator",
                href: "/b2b-seo-strategy",
              },
              { label: "Explore free B2B SEO tools", href: "/b2b-seo-kit" },
              { label: "Create a reusable B2B SEO template", href: "/b2b-seo-template" },
              {
                label: "Map keywords with a B2B keyword research template",
                href: "/b2b-keyword-research-template",
              },
            ]}
          />

          {/* ── 9. CTA Section ── */}
          <section className="py-20 px-4 sm:px-6 bg-white border-y border-slate-200">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
                Take this audit further
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Build the strategy workflow after your audit
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Use the audit findings to choose page priorities, keyword-to-page mapping,
                internal links, content briefs, CTAs, and AI search / GEO updates.
              </p>
              <ul className="inline-flex flex-col items-start gap-2 mb-8 text-left">
                {[
                  "Turn audit gaps into a page roadmap",
                  "Prioritize commercial pages before low-intent content",
                  "Connect internal links and CTAs to qualified lead paths",
                  "Add AI search / GEO checks to the workflow",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-strategy"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-md"
                >
                  Generate a B2B SEO strategy workflow
                </a>
                <a
                  href="/b2b-seo-kit"
                  className="inline-block rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Explore all free B2B SEO tools
                </a>
              </div>
            </div>
          </section>

          {/* ── 10. FAQ ── */}
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

        <SiteFooter />
      </div>
    </>
  );
}
