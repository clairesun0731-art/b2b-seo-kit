import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "B2B SEO Kit | Practical SEO Workflows for Lean B2B Teams",
  description:
    "B2B SEO Kit gives lean teams free B2B SEO tools, templates, checklists, and workflows for turning keyword research into qualified leads.",
  alternates: {
    canonical: "https://www.b2bseokit.com/",
  },
  openGraph: {
    title: "B2B SEO Kit | Practical SEO Workflows for Lean B2B Teams",
    description:
      "A calm B2B SEO workspace with free tools, templates, checklists, and workflows for turning keyword research into qualified leads.",
    url: "https://www.b2bseokit.com/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Kit | Practical SEO Workflows for Lean B2B Teams",
    description:
      "Turn B2B keyword research into practical SEO workflows without another complex dashboard.",
    images: ["/logo.webp"],
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const portalCards = [
  {
    label: "Audit Workflow",
    title: "Audit your B2B website",
    description:
      "Find what is blocking your B2B pages from ranking, converting, and supporting qualified leads.",
    href: "/b2b-seo-audit",
  },
  {
    label: "SEO Toolkit",
    title: "Explore the SEO Toolkit",
    description:
      "Use templates and workflows for keyword research, content briefs, product page SEO, internal links, and AI search readiness.",
    href: "/b2b-seo-kit",
  },
  {
    label: "SEO Template",
    title: "Build a B2B SEO template",
    description:
      "Generate a practical template for page types, keyword mapping, content workflow, internal links, and lead paths.",
    href: "/b2b-seo-template",
  },
  {
    label: "Keyword Map",
    title: "Map keywords to pages",
    description:
      "Turn B2B keywords into problem, solution, product, comparison, and use case page priorities.",
    href: "/b2b-keyword-research-template",
  },
  {
    label: "Brief Generator",
    title: "Create a B2B SEO brief",
    description:
      "Turn a target keyword into a practical brief with buyer intent, outline, internal links, CTAs, and AI search readiness.",
    href: "/b2b-seo-brief-generator",
  },
  {
    label: "Early Access",
    title: "Get the first templates",
    description:
      "Join early access and get practical B2B SEO templates, checklists, and workflow updates as they launch.",
    href: TALLY_URL,
    external: true,
  },
];

const principles = [
  {
    title: "Clarity over dashboards",
    description:
      "Keep the next SEO decision visible: what to audit, what to brief, what to link, and what to improve.",
  },
  {
    title: "Workflows over raw data",
    description:
      "Keyword data only helps when it becomes page plans, content briefs, internal links, and review steps.",
  },
  {
    title: "Leads over traffic",
    description:
      "B2B SEO should help the right buyers find the right pages and take a measurable next step.",
  },
];

const previewOutput = [
  "Audit priority pages",
  "Map keywords to buyer intent",
  "Improve internal links",
  "Add clearer CTAs",
];

const faqs = [
  {
    question: "What is B2B SEO Kit?",
    answer:
      "B2B SEO Kit is a practical workspace with free B2B SEO tools, templates, checklists, and workflows for lean teams that need to turn keyword research into qualified leads.",
  },
  {
    question: "Where should I start?",
    answer:
      "Start with the free B2B SEO audit if you want to find what is blocking rankings, conversions, and qualified leads. Explore the SEO Toolkit if you want the broader workflow for keywords, briefs, product pages, internal links, and AI search readiness.",
  },
  {
    question: "Is it free?",
    answer:
      "The first version is planned as a free early access toolkit with practical templates, checklists, and lightweight workflows.",
  },
  {
    question: "Who is it for?",
    answer:
      "It is built for B2B marketers, founders, SaaS teams, SEO consultants, agencies, manufacturers, export businesses, and lean marketing teams that need clear SEO workflows.",
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

export default function Home() {
  return (
    <>
      <Script
        id="homepage-faq-schema"
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
              <a href="/b2b-seo-brief-generator" className="transition-colors hover:text-slate-900">
                Brief Generator
              </a>
              <a href="#faq" className="transition-colors hover:text-slate-900">
                FAQ
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Calm B2B SEO workflows for early access teams
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                A calmer way to turn B2B keywords into clear SEO workflows
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                B2B SEO Kit helps lean B2B teams audit their website, map keywords to pages,
                create content briefs, improve product pages, and turn organic traffic into
                qualified leads — without another complex SEO dashboard.
              </p>

              <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/b2b-seo-audit"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Run the Free B2B Website Audit
                </a>

                <a
                  href="/b2b-seo-kit"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Explore the Toolkit
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Built for B2B marketers, SaaS teams, consultants, agencies, manufacturers, and
                export businesses.
              </p>
            </div>
          </section>

          <section className="px-4 pb-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Action First
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Start with the workflow you need
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {portalCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                      {card.label}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Principles
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Built for clarity, not another dashboard
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {principles.map((principle) => (
                  <article
                    key={principle.title}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
                  >
                    <h3 className="mb-2 text-[15px] font-semibold text-slate-900">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Short Preview
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  From messy SEO inputs to a short action list
                </h2>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r sm:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Input
                  </p>
                  <div className="space-y-3">
                    {[
                      ["Website type", "B2B SaaS"],
                      ["Goal", "More qualified leads"],
                      ["SEO stage", "Early growth"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3"
                      >
                        <span className="text-sm text-slate-500">{label}</span>
                        <span className="text-sm font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Output
                  </p>
                  <ul className="space-y-3">
                    {previewOutput.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                        <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/b2b-seo-audit"
                    className="mt-6 inline-block rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    Try the Audit Workflow
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 pb-16 sm:px-6">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Early Access
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Get practical B2B SEO templates when they launch.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
                Join the early access list for SEO templates for B2B marketers, plus practical
                checklists and workflows built around keyword research, audits, briefs, product
                pages, and internal links.
              </p>
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Get Free Early Access
              </a>
            </div>
          </section>

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Homepage Questions
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
              <a href="/b2b-seo-audit" className="hover:text-slate-700">
                Audit Checklist
              </a>
              <a href="/b2b-seo-template" className="hover:text-slate-700">
                SEO Template
              </a>
              <a href="/b2b-keyword-research-template" className="hover:text-slate-700">
                Keyword Template
              </a>
              <a href="/b2b-seo-brief-generator" className="hover:text-slate-700">
                Brief Generator
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
