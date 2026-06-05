import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import B2BSEOTemplateGenerator from "./B2BSEOTemplateGenerator";

export const metadata: Metadata = {
  title: "B2B SEO Template Generator - Build a Practical SEO Plan for Leads",
  description:
    "Generate a practical B2B SEO template for SaaS, services, manufacturers, agencies, or ecommerce teams. Map pages, keywords, content, internal links, and lead paths.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-seo-template/",
  },
  openGraph: {
    title: "B2B SEO Template Generator - Build a Practical SEO Plan for Leads",
    description:
      "Generate a practical B2B SEO template for SaaS, services, manufacturers, agencies, or ecommerce teams. Map pages, keywords, content, internal links, and lead paths.",
    url: "https://www.b2bseokit.com/b2b-seo-template/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Template Generator - Build a Practical SEO Plan for Leads",
    description:
      "Build a practical B2B SEO planning template for page mapping, content workflow, internal links, conversion paths, and GEO readiness.",
    images: ["/logo.webp"],
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const faqs = [
  {
    question: "What is a B2B SEO template?",
    answer:
      "A B2B SEO template is a reusable planning structure that connects business goals, buyer intent, keyword categories, page types, content workflow, internal links, lead paths, and AI search readiness.",
  },
  {
    question: "How is B2B SEO different from B2C SEO?",
    answer:
      "B2B SEO usually targets lower-volume but higher-intent searches, longer buying journeys, multiple stakeholders, technical evaluation, proof requirements, and lead conversion paths rather than direct consumer purchases.",
  },
  {
    question: "Should a B2B SEO template include blog content?",
    answer:
      "Yes, but blog content should support commercial pages. A useful B2B SEO template maps educational content to product pages, service pages, solution pages, category pages, comparison pages, and lead conversion paths.",
  },
  {
    question: "What pages should a B2B SEO plan prioritize?",
    answer:
      "A B2B SEO plan should prioritize pages that can create qualified leads, including product pages, service pages, solution pages, category pages, application pages, comparison pages, case studies, and high-intent landing pages.",
  },
  {
    question: "How do you map keywords to B2B pages?",
    answer:
      "Group keywords by buyer intent and assign each group to one primary page type. Problem keywords often fit guides, while solution, product, service, comparison, supplier, and pricing keywords usually need commercial pages.",
  },
  {
    question: "Can this template help with AI search visibility?",
    answer:
      "Yes. The template includes GEO readiness checks such as clear entity descriptions, short answer sections, FAQ blocks, comparison tables, step-by-step frameworks, and proof sections that AI systems can extract and cite.",
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
  name: "B2B SEO Template Generator",
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
    title: "What is a B2B SEO template?",
    body: "A B2B SEO template is not just a blog calendar. It is a practical planning structure that connects keywords, commercial pages, supporting content, internal links, proof, CTAs, tracking, and AI-search-ready sections. The goal is to help the right buyer move from search intent to the next useful page and, eventually, a qualified lead action.",
  },
  {
    title: "What should a B2B SEO template include?",
    body: "A strong B2B SEO template should include the business goal, buyer type, keyword categories, page types, content workflow, internal linking plan, lead conversion path, and AI search readiness checks. It should show what to do next, not just list SEO ideas.",
  },
  {
    title: "B2B SEO template for SaaS",
    body: "A B2B SaaS SEO template should map problem keywords to guides, solution keywords to solution pages, feature keywords to feature pages, integration keywords to integration pages, and evaluation keywords to comparison or alternative pages. Demo CTAs, use case sections, proof, FAQs, and integrations should be part of the workflow.",
  },
  {
    title: "B2B SEO template for manufacturers",
    body: "A manufacturer SEO template should prioritize product category pages, application pages, certification pages, distributor or dealer pages, technical specs, product proof, and RFQ or contact CTAs. Blog content should support sourcing, application, certification, and specification searches rather than replace commercial product pages.",
  },
  {
    title: "B2B SEO template for agencies and consultants",
    body: "An agency or consultant SEO template should connect service pages, niche landing pages, process pages, case studies, pricing or engagement pages, and diagnostic call paths. The content workflow should explain methodology, handle objections, and link expertise content back to commercial service pages.",
  },
  {
    title: "B2B SEO template vs generic SEO checklist",
    body: "A generic SEO checklist often focuses on traffic, tags, and publishing tasks. A B2B SEO template prioritizes lead quality, buyer journey, commercial page depth, internal links, proof, sales support, and content-to-conversion paths. It helps teams decide which pages deserve attention first.",
  },
];

export default function B2BSEOTemplatePage() {
  return (
    <>
      <Script
        id="b2b-seo-template-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="b2b-seo-template-tool-schema"
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
              <a href="/b2b-seo-audit" className="hover:text-slate-900">
                Audit Checklist
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
                Free B2B SEO Planning Tool
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                B2B SEO Template Generator
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Build a practical SEO planning template for B2B websites - including page types,
                keyword mapping, content workflow, internal links, and lead conversion paths.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#generator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Generate your B2B SEO template
                </a>
                <a
                  href="/b2b-seo-audit"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Not sure what to fix first? Run the B2B SEO Audit Generator &rarr;
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
                What does a B2B SEO template help you plan?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                A B2B SEO template helps teams turn keyword research into a page plan, content
                workflow, internal linking structure, and lead conversion path. It is most useful
                when it prioritizes commercial pages, buyer intent, proof, and practical next
                steps instead of treating SEO as a blog publishing calendar.
              </p>
            </div>
          </section>

          <B2BSEOTemplateGenerator />

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
                Continue the B2B SEO workflow
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["/b2b-keyword-research-template", "B2B Keyword Research Template"],
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
                  B2B SEO Template Questions
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
              <a href="/b2b-keyword-research-template" className="hover:text-slate-700">
                Keyword Template
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
