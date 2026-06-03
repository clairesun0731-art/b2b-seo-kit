import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About B2B SEO Kit | Practical SEO Workflows for Lean B2B Teams",
  description:
    "Learn why B2B SEO Kit is being built as a calm, practical SEO workspace for B2B teams that need workflows, not another complex dashboard.",
  alternates: {
    canonical: "https://www.b2bseokit.com/about",
  },
  openGraph: {
    title: "About B2B SEO Kit | Practical SEO Workflows for Lean B2B Teams",
    description:
      "B2B SEO Kit helps lean B2B teams turn keyword research into audits, content briefs, product page improvements, internal links, and qualified leads.",
    url: "https://www.b2bseokit.com/about",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About B2B SEO Kit | Practical SEO Workflows for Lean B2B Teams",
    description:
      "A calm, practical SEO workspace for lean B2B teams that need clear workflows and qualified leads.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "Who is B2B SEO Kit built for?",
    answer:
      "B2B SEO Kit is built for lean B2B marketers, founders, consultants, SaaS teams, agencies, manufacturers, and export businesses that need practical SEO workflows tied to qualified leads.",
  },
  {
    question: "Why does B2B SEO Kit focus on workflows?",
    answer:
      "Keyword data does not automatically become a strategy. B2B SEO Kit focuses on repeatable workflows for audits, content briefs, product pages, internal links, conversion paths, and AI search readiness.",
  },
  {
    question: "Who built B2B SEO Kit?",
    answer:
      "B2B SEO Kit is built by Claire Sun, a B2B SEO, SEM, GEO, and CRO practitioner building practical SEO workflows for lean B2B teams.",
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

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
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
              <a href="/b2b-seo-kit" className="transition-colors hover:text-slate-900">
                SEO Toolkit
              </a>
              <a href="/b2b-seo-audit" className="transition-colors hover:text-slate-900">
                Audit Checklist
              </a>
              <a href="/b2b-seo-strategy" className="transition-colors hover:text-slate-900">
                Strategy Workflow
              </a>
              <a href="#faq" className="transition-colors hover:text-slate-900">
                FAQ
              </a>
            </nav>

            <a
              href="https://tally.so/r/pbJK9J"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Free Access
            </a>
          </div>
        </header>

        <main>
          <section className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                About B2B SEO Kit
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                A practical SEO workspace for lean B2B teams
              </h1>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Quick Answer
                </p>
                <p className="text-[15px] leading-relaxed text-slate-700">
                  B2B SEO Kit helps teams turn keyword research into audits, content briefs,
                  product page improvements, internal links, AI-search-ready sections, and clearer
                  conversion paths.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Product First
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Built for practical B2B SEO work
                </h2>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">
                <p>
                  The goal is not to add another complex dashboard. B2B SEO Kit is designed around
                  the decisions small teams need to make: which pages matter, what to improve, where
                  to link, and how each SEO action can support qualified leads.
                </p>
                <p>
                  The workflows are shaped by real B2B SEO, SEM, GEO, and CRO projects across SaaS,
                  industrial products, export manufacturing, local services, energy storage, and
                  lead-generation websites.
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Built by Claire Sun
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Practical SEO workflows, not generic advice
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  The founder perspective helps keep the toolkit grounded in B2B work where better
                  pages, clearer CTAs, trust signals, internal links, and lead tracking matter more
                  than vanity traffic.
                </p>
              </div>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <img
                    src="/claire-sun.jpg"
                    alt="Claire Sun"
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full border border-slate-200 object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Claire Sun</h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      B2B SEO / SEM / GEO / CRO practitioner
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Building practical SEO workflows for lean B2B teams.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                      <a
                        href="https://www.linkedin.com/in/claire-sun-509903186/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 transition-colors hover:text-blue-700"
                      >
                        Connect with Claire on LinkedIn
                      </a>
                      <a
                        href="mailto:clairesun0731@gmail.com"
                        className="text-slate-600 transition-colors hover:text-slate-900"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">About Questions</h2>
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
              <a href="/b2b-seo-audit" className="hover:text-slate-700">
                Audit Checklist
              </a>
              <a href="/about" className="hover:text-slate-700">
                About
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
