import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ContentBriefGenerator from "./ContentBriefGenerator";

export const metadata: Metadata = {
  title: "B2B SEO Brief Generator | Free Content Brief Tool",
  description:
    "Use this free B2B SEO content brief generator to create practical briefs for blog posts, service pages, product pages, comparison pages, use case pages, and landing pages.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-seo-brief-generator",
  },
  openGraph: {
    title: "B2B SEO Brief Generator | Free Content Brief Tool",
    description:
      "Generate a practical B2B SEO content brief that connects search intent, buyer intent, internal links, trust signals, CTAs, and AI search readiness.",
    url: "https://www.b2bseokit.com/b2b-seo-brief-generator",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Brief Generator | Free Content Brief Tool",
    description:
      "Create B2B SEO briefs for content, product pages, service pages, comparison pages, use cases, and AI-search-ready landing pages.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is a B2B SEO content brief?",
    answer:
      "A B2B SEO content brief is a structured plan for a page that defines the target keyword, search intent, buyer intent, recommended angle, headings, internal links, proof sections, CTA placement, and AI search readiness notes. It helps writers and marketing teams create content that supports qualified lead generation, not only traffic.",
  },
  {
    question: "How is a B2B SEO brief different from a regular SEO brief?",
    answer:
      "A regular SEO brief often focuses on keyword usage and outline structure. A B2B SEO brief also considers long sales cycles, commercial page connections, buyer roles, product or service proof, internal links, conversion paths, and GEO or AI search visibility.",
  },
  {
    question: "What should be included in a B2B blog brief?",
    answer:
      "A B2B blog brief should include the target keyword, search intent, buyer pain point, educational angle, H1, SEO title, meta description, outline, must-cover sections, internal links to product or service pages, soft CTA guidance, FAQs, and AI search readiness notes.",
  },
  {
    question: "How do I choose the right page type for a B2B keyword?",
    answer:
      "Choose the page type by buyer intent. Problem and education keywords usually fit blog posts or guides. Solution and vendor keywords fit service, product, or industry pages. Comparison and alternative keywords usually need comparison pages. Scenario keywords often work best as use case pages.",
  },
  {
    question: "Should every B2B SEO brief include a CTA?",
    answer:
      "Yes. Every B2B SEO brief should include a CTA, but the CTA should match intent. Awareness content can use a soft checklist or audit CTA, while vendor, evaluation, or purchase-intent pages should use demo, quote, consultation, RFQ, or contact CTAs.",
  },
  {
    question: "How do internal links help B2B SEO?",
    answer:
      "Internal links help educational content support commercial pages. They pass context, help search engines understand which pages matter, and guide buyers from problem research toward product pages, service pages, comparison pages, use cases, and contact paths.",
  },
  {
    question: "How can I make B2B content more visible in AI search?",
    answer:
      "Make B2B content easier for AI systems to summarize by adding direct answer blocks, clear definitions, comparison tables, step-by-step frameworks, concise summaries, FAQs, entity-rich language, and examples specific to the business type.",
  },
  {
    question: "Can this tool be used for SaaS, agencies, and manufacturers?",
    answer:
      "Yes. The B2B SEO Content Brief Generator includes rules for B2B SaaS, services, manufacturers and exporters, agencies and consultants, and B2B ecommerce teams.",
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
  name: "B2B SEO Content Brief Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const educationalSections = [
  {
    title: "What should a B2B SEO content brief include?",
    body: "A useful B2B content brief should define the page type, target keyword, search intent, buyer role, recommended angle, H1, SEO title, meta description, outline, internal links, proof sections, CTA placement, and AI search readiness notes. The brief should make the next production step obvious for a writer, founder, consultant, or agency.",
  },
  {
    title: "Why generic SEO briefs fail for B2B content",
    body: "Generic SEO briefs often chase volume and headings without explaining how the page supports a long buying cycle. B2B briefs need to show which commercial page the content supports, what buyer objection it answers, what proof belongs on the page, and how the CTA should change by intent.",
  },
  {
    title: "How to connect B2B content briefs to lead generation",
    body: "Each brief should name the conversion path before content is written. Blog posts can route readers to audits, checklists, and commercial pages. Product, service, comparison, use case, and industry pages should include demo, quote, consultation, RFQ, or contact paths tied to the buyer's readiness.",
  },
  {
    title: "How to map search intent to the right B2B page type",
    body: "Problem-learning keywords usually fit blog posts or guides. Solution and vendor keywords fit product, service, or industry landing pages. Comparison keywords need comparison tables and evaluation criteria. Scenario keywords often deserve use case pages that connect the buyer's workflow to a specific product or service.",
  },
  {
    title: "How to use internal links from blog content to commercial pages",
    body: "Educational content should not stop at education. It should link to the product, service, use case, comparison, case study, audit, or strategy page that gives the reader a practical next step. Descriptive anchor text helps both buyers and search engines understand the page relationship.",
  },
  {
    title: "How to make your B2B content ready for AI search and GEO",
    body: "AI-search-ready B2B content uses direct answers, definitions, structured lists, comparison tables, FAQs, summaries, examples, and entity-rich language. The goal is to make each section easy to extract, summarize, and cite without making the page feel like generic SEO copy.",
  },
];

const examples = [
  {
    label: "B2B SaaS blog brief",
    keyword: "customer onboarding software",
    angle:
      "Explain onboarding bottlenecks, map problems to software workflows, link to product and use case pages, and use a soft demo or checklist CTA.",
  },
  {
    label: "Manufacturer product page brief",
    keyword: "industrial battery supplier",
    angle:
      "Cover specifications, applications, certifications, export capability, sourcing criteria, QA process, and a quote or RFQ CTA.",
  },
  {
    label: "Agency service page brief",
    keyword: "B2B SEO consultant",
    angle:
      "Show service scope, methodology, diagnostic process, examples, case studies, fit criteria, and a consultation CTA.",
  },
];

export default function B2BSEOBriefGeneratorPage() {
  return (
    <>
      <Script
        id="b2b-seo-brief-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="b2b-seo-brief-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
        <SiteHeader active="tools" />

        <main>
          <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20">
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Rule-based content briefs for B2B SEO workflows
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Free B2B SEO Content Brief Generator
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Create a practical SEO brief for B2B blog posts, service pages, product pages,
                comparison pages, use case pages, and landing pages.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#brief-generator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Generate a Brief
                </a>
                <a
                  href="/b2b-seo-kit"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Explore the Toolkit
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Quick Answer
              </p>
              <h2 className="mb-3 text-xl font-bold text-slate-900">
                What is a B2B SEO content brief?
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-slate-700">
                A <strong>B2B SEO content brief</strong> is a structured plan for creating a page
                that can rank, support a long buying journey, connect to commercial pages, and
                move qualified buyers toward a clear next step.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-700">
                Unlike a generic SEO content brief template, a B2B brief should include buyer
                intent, page type, internal links, trust signals, CTA placement, and AI search or
                GEO readiness notes.
              </p>
            </div>
          </section>

          <ContentBriefGenerator />

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Brief Framework
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Build briefs that connect content to pipeline
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {educationalSections.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {section.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{section.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Examples
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Lightweight example briefs
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {examples.map((example) => (
                  <article
                    key={example.label}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                      {example.label}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {example.keyword}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{example.angle}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Internal Workflow
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
                Use the brief after the audit and strategy workflow
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-slate-700">
                If you do not know which pages need work first, run the{" "}
                <a href="/b2b-seo-audit" className="text-blue-600 hover:underline">
                  B2B SEO Audit Generator
                </a>{" "}
                before creating briefs. If you need to decide which keywords need blog posts,
                product pages, comparison pages, or use case pages, use the{" "}
                <a href="/b2b-seo-strategy" className="text-blue-600 hover:underline">
                  B2B SEO Strategy Workflow
                </a>
                .
              </p>
              <p className="text-[15px] leading-relaxed text-slate-700">
                The full{" "}
                <a href="/b2b-seo-kit" className="text-blue-600 hover:underline">
                  B2B SEO Toolkit
                </a>{" "}
                connects the audit, strategy workflow, content brief, product page improvements,
                internal links, and AI search readiness checks.
              </p>
            </div>
          </section>

          <RelatedToolsSection
            eyebrow="Before Briefs"
            title="Before creating content briefs"
            links={[
              {
                label: "Map keywords to page types",
                href: "/b2b-keyword-research-template/",
              },
              { label: "Build your B2B SEO template", href: "/b2b-seo-template/" },
              { label: "Generate your SEO strategy", href: "/b2b-seo-strategy/" },
            ]}
          />

          <section id="faq" className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  B2B SEO Content Brief Generator FAQs
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="mb-2 font-semibold text-slate-900">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-20 sm:px-6">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Next Workflow
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
                Turn the brief into a practical B2B SEO workflow
              </h2>
              <p className="mb-7 text-[15px] leading-relaxed text-slate-600">
                Start with an audit, choose the right page type, create the brief, and connect
                every page to a measurable buyer next step.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-audit"
                  className="rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Run a B2B SEO Audit first
                </a>
                <a
                  href="/b2b-seo-strategy"
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Build your full B2B SEO strategy workflow
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
