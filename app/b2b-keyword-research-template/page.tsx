import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import B2BKeywordResearchTemplateGenerator from "./B2BKeywordResearchTemplateGenerator";

export const metadata: Metadata = {
  title: "B2B Keyword Research Template - Map Keywords to Leads and Pages",
  description:
    "Use this free B2B keyword research template to map problem, solution, product, comparison, and industry keywords to the right pages and lead paths.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-keyword-research-template/",
  },
  openGraph: {
    title: "B2B Keyword Research Template - Map Keywords to Leads and Pages",
    description:
      "Use this free B2B keyword research template to map problem, solution, product, comparison, and industry keywords to the right pages and lead paths.",
    url: "https://www.b2bseokit.com/b2b-keyword-research-template/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Keyword Research Template - Map Keywords to Leads and Pages",
    description:
      "Turn B2B keywords into a practical page map for buyer intent, commercial pages, internal links, conversion paths, and GEO readiness.",
    images: ["/logo.webp"],
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const faqs = [
  {
    question: "What is B2B keyword research?",
    answer:
      "B2B keyword research is the process of finding and grouping search terms by business buyer intent, page type, buyer role, and conversion path so SEO work supports qualified leads rather than traffic alone.",
  },
  {
    question: "How is B2B keyword research different from B2C?",
    answer:
      "B2B keyword research usually focuses on lower-volume, higher-intent terms, multiple stakeholders, long buying cycles, technical evaluation, vendor comparison, and lead conversion paths. B2C keyword research often has more direct purchase intent and higher search volume.",
  },
  {
    question: "What keyword types should B2B companies target?",
    answer:
      "B2B companies should target problem keywords, solution keywords, product or service keywords, comparison keywords, industry or use case keywords, integration or specification keywords, supplier or vendor keywords, and template or checklist queries.",
  },
  {
    question: "Should B2B companies target low-volume keywords?",
    answer:
      "Yes. Many B2B keywords have low search volume but strong commercial intent. A low-volume keyword tied to a product, service, specification, supplier, or comparison page can be more valuable than a broad high-volume topic with weak lead quality.",
  },
  {
    question: "How do you map B2B keywords to pages?",
    answer:
      "Group keywords by intent, then assign each group to one primary page type. Problem terms often fit guides, while product, service, solution, comparison, industry, supplier, and pricing terms usually need dedicated commercial pages.",
  },
  {
    question: "How can keyword research support AI search visibility?",
    answer:
      "Keyword research can support AI search visibility by identifying question-style, comparison, definition, how-to-choose, and best-practice queries that can be answered with clear summaries, FAQ blocks, tables, and entity-rich descriptions.",
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
  name: "B2B Keyword Research Template",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const sections = [
  {
    title: "What is a B2B keyword research template?",
    body: "A B2B keyword research template is a practical framework for mapping keywords to business goals, buyer roles, page types, internal links, and conversion paths. It helps teams avoid the common mistake of turning every keyword into a blog post, even when the search intent needs a product page, service page, comparison page, application page, or supplier page.",
  },
  {
    title: "How to do keyword research for B2B SEO",
    body: "Start from buyer problems, separate educational and commercial intent, map each keyword group to a page type, prioritize lead quality, use internal links to support money pages, and track conversions instead of only traffic. The output should become a page plan, not just a keyword spreadsheet.",
  },
  {
    title: "B2B keyword categories",
    body: "Useful B2B keyword categories include problem keywords, solution keywords, product or service keywords, comparison keywords, industry or use case keywords, integration or specification keywords, supplier or vendor keywords, and template, checklist, or workflow keywords. These categories make keyword-to-page mapping clearer.",
  },
  {
    title: "B2B SaaS keyword research",
    body: "B2B SaaS keyword research should include feature pages, integration keywords, alternative pages, comparison pages, use case pages, and demo CTAs. Problem-aware guides can build demand, but feature, integration, comparison, and alternative pages often carry stronger evaluation-stage intent.",
  },
  {
    title: "B2B manufacturer keyword research",
    body: "Manufacturer keyword research should include product categories, specifications, application keywords, certification keywords, supplier or exporter keywords, and RFQ intent. Procurement and technical buyers often search with product, spec, compliance, and sourcing language rather than broad educational terms.",
  },
  {
    title: "Keyword-to-page mapping for B2B websites",
    body: "One keyword group should have one clear primary page type. Problem terms may fit guides, but commercial terms should often map to product pages, service pages, category pages, solution pages, comparison pages, application pages, case studies, or quote paths. This keeps SEO connected to lead generation.",
  },
];

export default function B2BKeywordResearchTemplatePage() {
  return (
    <>
      <Script
        id="b2b-keyword-research-template-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="b2b-keyword-research-template-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link href="/" className="group flex items-center gap-2">
              <img
                src="/logo-square.webp"
                alt="B2B"
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl object-contain"
              />
              <span className="text-[15px] font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                SEO Kit
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <a href="/b2b-seo-kit" className="hover:text-slate-900">
                SEO Toolkit
              </a>
              <a href="/b2b-seo-template" className="hover:text-slate-900">
                SEO Template
              </a>
              <a href="/b2b-seo-strategy" className="hover:text-slate-900">
                Strategy Workflow
              </a>
              <a href="/b2b-seo-brief-generator" className="hover:text-slate-900">
                Brief Generator
              </a>
            </nav>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Free Access
            </a>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-20">
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
                Free B2B Keyword Mapping Tool
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                B2B Keyword Research Template
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Turn B2B keywords into a practical page map - from problem-aware searches to
                product pages, comparison content, internal links, and lead conversion paths.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#generator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Generate your keyword research template
                </a>
                <a
                  href="/b2b-seo-strategy"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Need a full SEO workflow? Use the B2B SEO Strategy Generator &rarr;
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
                How should B2B teams organize keyword research?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                B2B teams should organize keyword research by buyer intent and page type: problem
                keywords for guides, solution keywords for solution pages, product or service
                keywords for commercial pages, comparison keywords for evaluation pages, and
                industry or use case keywords for proof-led landing pages.
              </p>
            </div>
          </section>

          <B2BKeywordResearchTemplateGenerator />

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-2xl font-bold text-slate-900">{section.title}</h2>
                  <p className="text-[15px] leading-relaxed text-slate-700">{section.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Related Tools
              </p>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Continue the keyword-to-page workflow
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["/b2b-seo-template", "B2B SEO Template Generator"],
                  ["/b2b-seo-strategy", "B2B SEO Strategy Generator"],
                  ["/b2b-seo-audit", "B2B SEO Audit Generator"],
                  ["/b2b-seo-brief-generator", "B2B Content Brief Generator"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                  >
                    {label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B Keyword Research Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
                  >
                    <h3 className="mb-2 font-semibold text-slate-900">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/" className="font-semibold text-slate-900 hover:text-blue-600">
                Home
              </Link>
              <a href="/b2b-seo-kit" className="hover:text-slate-700">
                SEO Toolkit
              </a>
              <a href="/b2b-seo-template" className="hover:text-slate-700">
                SEO Template
              </a>
              <a href="/b2b-seo-audit" className="hover:text-slate-700">
                Audit Checklist
              </a>
              <a href="/privacy" className="hover:text-slate-700">
                Privacy
              </a>
            </div>
            <a href="mailto:hello@b2bseokit.com" className="hover:text-slate-700">
              hello@b2bseokit.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
