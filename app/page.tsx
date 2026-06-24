import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Practical B2B SEO Tools for Lean Teams | B2B SEO Kit",
  description:
    "Use practical B2B SEO tools to find what to fix first, build a B2B SEO strategy, map keywords to pages, create briefs, and turn search visibility into qualified leads.",
  alternates: {
    canonical: "https://www.b2bseokit.com/",
  },
  openGraph: {
    title: "Practical B2B SEO Tools for Lean Teams | B2B SEO Kit",
    description:
      "A calm B2B SEO workspace for audits, strategy workflows, keyword mapping, content briefs, internal links, conversion paths, and AI search readiness.",
    url: "https://www.b2bseokit.com/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical B2B SEO Tools for Lean Teams | B2B SEO Kit",
    description:
      "Find what to fix first, build a practical SEO workflow, and connect B2B search visibility to qualified leads.",
    images: ["/logo.webp"],
  },
};

const toolCategories = [
  {
    label: "Audit & Strategy",
    title: "Find what to fix first",
    description:
      "Start with a focused B2B SEO audit, then turn the gaps into a practical strategy workflow.",
    href: "/b2b-seo-audit/",
    secondaryHref: "/b2b-seo-strategy/",
    cta: "Run the audit",
  },
  {
    label: "Keyword & Content",
    title: "Map keywords to useful pages",
    description:
      "Turn B2B keywords into page types, briefs, templates, and commercial content priorities.",
    href: "/b2b-keyword-research-template/",
    secondaryHref: "/b2b-seo-brief-generator/",
    cta: "Build a keyword map",
  },
  {
    label: "Lead Generation Calculators",
    title: "Connect traffic to leads",
    description:
      "Estimate cost per lead, ROAS, CPM, and website visitor-to-lead conversion gaps.",
    href: "/b2b-lead-generation-calculators/",
    secondaryHref: "/lead-cost-calculator/",
    cta: "Explore calculators",
  },
  {
    label: "AI Search / GEO Readiness",
    title: "Structure pages for AI discovery",
    description:
      "Add direct answers, FAQs, entity-rich sections, and comparison content that AI search can understand.",
    href: "/b2b-seo-kit/",
    secondaryHref: "/b2b-seo-audit/",
    cta: "Explore the toolkit",
  },
] as const;

const workflowSteps = [
  {
    step: "1",
    title: "Run the B2B SEO Audit",
    description: "Identify the highest-priority technical, content, internal linking, and conversion gaps.",
    href: "/b2b-seo-audit/",
  },
  {
    step: "2",
    title: "Build your B2B SEO Strategy",
    description: "Turn the audit into a workflow for pages, keywords, content, links, and lead paths.",
    href: "/b2b-seo-strategy/",
  },
  {
    step: "3",
    title: "Map keywords to page types",
    description: "Separate commercial, educational, comparison, and template keywords before writing.",
    href: "/b2b-keyword-research-template/",
  },
  {
    step: "4",
    title: "Create SEO briefs",
    description: "Give writers and AI tools a clear B2B brief with intent, outline, proof, CTA, and links.",
    href: "/b2b-seo-brief-generator/",
  },
  {
    step: "5",
    title: "Strengthen commercial pages",
    description: "Improve titles, headings, proof blocks, FAQs, CTAs, and conversion paths on money pages.",
    href: "/b2b-seo-template/",
  },
  {
    step: "6",
    title: "Track leads and conversions",
    description: "Use calculators to connect traffic, spend, conversion rates, lead cost, and pipeline outcomes.",
    href: "/b2b-lead-generation-calculators/",
  },
] as const;

const featuredTools = [
  {
    name: "B2B SEO Audit Generator",
    description: "Find what to fix first across B2B SEO, content, internal links, and conversion paths.",
    href: "/b2b-seo-audit/",
    cta: "Run audit",
  },
  {
    name: "B2B SEO Strategy Workflow Generator",
    description: "Build a practical B2B SEO workflow from goals, buyers, pages, and content stage.",
    href: "/b2b-seo-strategy/",
    cta: "Build strategy",
  },
  {
    name: "B2B Keyword Research Template",
    description: "Map B2B keywords to commercial, educational, comparison, and support pages.",
    href: "/b2b-keyword-research-template/",
    cta: "Map keywords",
  },
  {
    name: "B2B SEO Brief Generator",
    description: "Turn target keywords into usable B2B content briefs with CTA and internal link guidance.",
    href: "/b2b-seo-brief-generator/",
    cta: "Create brief",
  },
  {
    name: "B2B SEO Template Generator",
    description: "Create a lightweight planning template for SEO execution across pages and links.",
    href: "/b2b-seo-template/",
    cta: "Create template",
  },
  {
    name: "Cost per Lead Calculator",
    description: "Calculate cost per lead and cost per qualified lead for B2B campaigns and channels.",
    href: "/lead-cost-calculator/",
    cta: "Calculate CPL",
  },
  {
    name: "ROAS Calculator",
    description: "Understand how paid campaigns connect ad spend, revenue, and acquisition efficiency.",
    href: "/roas-calculator/",
    cta: "Calculate ROAS",
  },
  {
    name: "Website Visitor to Lead Calculator",
    description: "Estimate leads, customers, revenue, and funnel efficiency from website traffic.",
    href: "/b2b-lead-generation-calculator/",
    cta: "Estimate leads",
  },
] as const;

const valueProps = [
  "B2B-first, not generic SEO",
  "Built around lead generation",
  "Useful for commercial pages and internal links",
  "Lightweight and low-maintenance",
  "Supports SEO and AI search visibility workflows",
] as const;

const faqs = [
  {
    question: "What is B2B SEO Kit?",
    answer:
      "B2B SEO Kit is a practical workspace of free tools, templates, calculators, and workflows that help lean B2B teams turn SEO work into qualified leads.",
  },
  {
    question: "Where should a B2B team start?",
    answer:
      "Start with the B2B SEO Audit Generator to find priority fixes, then use the B2B SEO Strategy Workflow Generator to map pages, keywords, internal links, and conversion paths.",
  },
  {
    question: "How is this different from a large SEO dashboard?",
    answer:
      "B2B SEO Kit focuses on what to do next: audit checks, keyword-to-page mapping, briefs, commercial page improvements, calculators, and AI search readiness. It is designed to stay lightweight.",
  },
  {
    question: "Who is B2B SEO Kit for?",
    answer:
      "It is built for B2B SaaS teams, services companies, manufacturers, exporters, SEO consultants, agencies, founders, and small marketing teams that need practical SEO workflows.",
  },
] as const;

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

export default function Home() {
  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
        <SiteHeader />

        <main>
          <section className="relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
                B2B SEO Kit
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                Practical B2B SEO Tools for Lean Teams
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Find what to fix first, build a B2B SEO strategy, and turn search visibility into
                qualified leads.
              </p>

              <div className="mb-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-audit/"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Run Free B2B SEO Audit
                </a>
                <a
                  href="/b2b-seo-strategy/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Build a B2B SEO Strategy
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Built for B2B SaaS, services, manufacturers, consultants, and small marketing teams.
              </p>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Quick Answer
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
                What should B2B teams fix first?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                B2B teams should first fix indexable commercial pages, clear keyword-to-page
                mapping, internal links from educational content to money pages, conversion paths
                from SEO traffic to leads, and AI search / GEO readiness. Start with the{" "}
                <a href="/b2b-seo-audit/" className="font-semibold text-blue-600 hover:underline">
                  B2B SEO Audit
                </a>
                , turn the findings into a{" "}
                <a href="/b2b-seo-strategy/" className="font-semibold text-blue-600 hover:underline">
                  B2B SEO Strategy
                </a>
                , then use the{" "}
                <a href="/b2b-seo-kit/" className="font-semibold text-blue-600 hover:underline">
                  full B2B SEO Kit
                </a>{" "}
                to plan briefs, links, templates, calculators, and commercial page improvements.
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Tool Categories
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Choose the workflow you need today
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {toolCategories.map((category) => (
                  <article
                    key={category.label}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                      {category.label}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">
                      {category.description}
                    </p>
                    <div className="mt-auto grid gap-2">
                      <a
                        href={category.href}
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        {category.cta}
                      </a>
                      <a
                        href={category.secondaryHref}
                        className="text-sm text-slate-500 hover:text-slate-900"
                      >
                        Related workflow
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Recommended Workflow
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  A practical B2B SEO workflow from audit to leads
                </h2>
              </div>

              <ol className="grid gap-3 md:grid-cols-2">
                {workflowSteps.map((item) => (
                  <li key={item.step}>
                    <a
                      href={item.href}
                      className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition-colors hover:bg-white"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold text-slate-900">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Featured Tools
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Free tools for B2B SEO, GEO, and lead generation
                  </h2>
                </div>
                <a href="/b2b-seo-kit/" className="text-sm font-semibold text-blue-600 hover:underline">
                  Explore the full B2B SEO Kit
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {featuredTools.map((tool) => (
                  <article
                    key={tool.href}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="mb-2 text-[15px] font-semibold text-slate-900">{tool.name}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-600">{tool.description}</p>
                    <a
                      href={tool.href}
                      className="mt-auto text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {tool.cta}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Why B2B SEO Kit
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Built for the B2B work behind rankings
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  B2B SEO rarely fails because a team lacks more data. It fails when keywords do
                  not become pages, blog traffic does not support commercial pages, and conversion
                  paths are too unclear for buyers to act.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {valueProps.map((prop) => (
                  <div
                    key={prop}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 text-sm font-medium text-slate-800"
                  >
                    {prop}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Educational Block
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
                Turn SEO activity into qualified lead paths
              </h2>
              <div className="grid gap-4 text-[15px] leading-relaxed text-slate-700 md:grid-cols-2">
                <p>
                  Blog traffic alone is not a B2B SEO strategy. Lean teams need indexable product,
                  solution, comparison, and template pages that match buying intent and give
                  visitors a clear next step.
                </p>
                <p>
                  Use internal links from educational posts to commercial pages, add FAQ blocks for
                  AI search visibility, and track form submissions by landing page so SEO can be
                  tied to real lead outcomes.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-audit/"
                  className="rounded-2xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Run the audit
                </a>
                <a
                  href="/b2b-seo-strategy/"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Build the strategy
                </a>
                <a
                  href="/b2b-seo-kit/"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Explore the kit
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">Common questions</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
                  >
                    <h3 className="mb-2 font-semibold text-slate-900">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Start Here
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Start with a free B2B SEO audit
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
                Get a clear first pass on what to fix before you build more content, rewrite
                commercial pages, or expand into AI search visibility.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-audit/"
                  className="rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Run Free B2B SEO Audit
                </a>
                <a
                  href="/b2b-seo-kit/"
                  className="rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Explore the full B2B SEO Kit
                </a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
