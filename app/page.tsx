import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "B2B SEO Kit | Free B2B SEO Tools, Templates & Checklists",
  description:
    "B2B SEO Kit helps marketers, founders, consultants, and SaaS teams turn keywords into SEO audits, content briefs, product page improvements, internal links, and qualified leads.",
  alternates: {
    canonical: "https://www.b2bseokit.com/",
  },
  openGraph: {
    title: "B2B SEO Kit | Free B2B SEO Tools, Templates & Checklists",
    description:
      "Free B2B SEO tools, templates, and checklists for turning keyword research into content briefs, product page improvements, and qualified leads.",
    url: "https://www.b2bseokit.com/",
    siteName: "B2B SEO Kit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Kit | Free B2B SEO Tools, Templates & Checklists",
    description:
      "Free B2B SEO tools, templates, and checklists for B2B marketers, SaaS teams, consultants, and founders.",
  },
};

const TALLY_URL = "https://tally.so/r/pbJK9J";

const tools = [
  {
    label: "Audit",
    title: "B2B SEO Audit Checklist",
    description:
      "Review your website structure, metadata, product pages, internal links, and lead-generation paths.",
    href: "/b2b-seo-audit/",
  },
  {
    label: "Keywords",
    title: "Keyword Research Template",
    description:
      "Turn scattered B2B keywords into topic clusters for product pages, solution pages, and blog content.",
    href: "/b2b-seo-kit/",
  },
  {
    label: "Brief",
    title: "Content Brief Generator",
    description:
      "Create SEO-friendly briefs with search intent, headings, FAQs, internal links, and CTA ideas.",
    href: "/b2b-seo-kit/",
  },
  {
    label: "Pages",
    title: "Product Page SEO Checklist",
    description:
      "Optimize B2B product and solution pages for rankings, AI search visibility, and qualified inquiries.",
    href: "/b2b-seo-kit/",
  },
  {
    label: "GEO",
    title: "AI Search / GEO Checklist",
    description:
      "Make content easier for AI search engines and LLMs to understand, summarize, and cite.",
    href: "/b2b-seo-kit/",
  },
  {
    label: "Links",
    title: "Internal Linking Planner",
    description:
      "Plan contextual internal links between homepage, product pages, templates, tools, and blog articles.",
    href: "/b2b-seo-kit/",
  },
];

const faqs = [
  {
    question: "What is B2B SEO Kit?",
    answer:
      "B2B SEO Kit is a free toolkit for B2B marketers, founders, SEO consultants, SaaS teams, agencies, manufacturers, and export businesses. It helps teams turn keywords into SEO audits, content briefs, product page improvements, internal links, and AI-search-ready workflows.",
  },
  {
    question: "Who is B2B SEO Kit for?",
    answer:
      "It is designed for B2B teams that need practical SEO workflows, including SaaS companies, consultants, agencies, manufacturers, exporters, and service businesses that rely on organic traffic and lead generation.",
  },
  {
    question: "Is B2B SEO Kit free?",
    answer:
      "The first version is planned as a free toolkit with templates, checklists, and lightweight SEO workflow tools. More advanced workflows may be added later based on user demand.",
  },
  {
    question: "Does B2B SEO Kit include AI search optimization?",
    answer:
      "Yes. The toolkit includes AI search and GEO workflows that help make B2B content more structured, descriptive, entity-rich, and easier for AI systems to interpret.",
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
            <a href="/" className="group flex items-center gap-2">
  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-[10px] font-bold text-white shadow-sm transition-colors group-hover:bg-blue-700">
    B2B
  </span>
  <span className="text-[15px] font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
    SEO Kit
  </span>
</a>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
  <a
    href="/b2b-seo-kit/"
    className="transition-colors hover:text-slate-900"
  >
    SEO Toolkit
  </a>
  <a
    href="/b2b-seo-audit/"
    className="transition-colors hover:text-slate-900"
  >
    Audit Checklist
  </a>
  <a
    href="#tools"
    className="transition-colors hover:text-slate-900"
  >
    Tools
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
          <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
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
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                Free B2B SEO Toolkit — Early Access
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                Turn B2B Keywords Into{" "}
                <span className="text-blue-600">Traffic, Content, and Leads</span>
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                B2B SEO Kit helps marketers, founders, consultants, and SaaS
                teams turn keyword research into SEO audits, content briefs,
                product page improvements, internal links, and qualified leads.
              </p>

              <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Get the Free B2B SEO Toolkit
                </a>

                <a
                  href="/b2b-seo-kit/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  View Free SEO Toolkit
                </a>
              </div>

              <p className="text-sm text-slate-500">
                Built for B2B marketers, SaaS teams, consultants, agencies,
                manufacturers, and export businesses.
              </p>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Quick Answer
              </p>
              <h2 className="mb-3 text-xl font-bold text-slate-900">
                What is B2B SEO Kit?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                <strong>B2B SEO Kit</strong> is a practical toolkit of B2B SEO
                tools, templates, and checklists. It helps teams research
                keywords, audit websites, plan content, optimize product pages,
                improve internal linking, and connect SEO work to lead
                generation.
              </p>
            </div>
          </section>

          <section id="tools" className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  What You Get
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Practical SEO workflows for B2B growth
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[15px] text-slate-600">
                  Start with lightweight tools and templates that help you move
                  from keyword research to content planning, page optimization,
                  and lead generation.
                </p>
              </div>

              <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                  <a
                    key={tool.title}
                    href={tool.href}
                    className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {tool.label}
                    </div>
                    <h3 className="text-[15px] font-semibold text-slate-900">
                      {tool.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {tool.description}
                    </p>
                  </a>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="/b2b-seo-kit/"
                  className="inline-block rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Explore the B2B SEO Toolkit
                </a>
                <p className="mt-3 text-xs text-slate-400">
                  See the full toolkit, workflow, use cases, and SEO checklist
                  preview.
                </p>
              </div>
            </div>
          </section>

          <section id="workflow" className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Why B2B SEO Is Different
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    B2B SEO should drive qualified demand, not just traffic
                  </h2>
                </div>

                <div className="space-y-5 text-[15px] leading-relaxed text-slate-600">
                  <p>
                    B2B search journeys are longer, more technical, and more
                    comparison-driven than consumer search journeys. Buyers
                    research problems, compare vendors, evaluate product pages,
                    and revisit content before submitting a form.
                  </p>
                  <p>
                    That means a B2B SEO workflow needs to connect keyword
                    research, solution pages, product pages, content briefs,
                    internal linking, and conversion paths into one practical
                    system.
                  </p>
                  <a
                    href="/b2b-seo-kit/"
                    className="inline-flex font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Learn how the B2B SEO Toolkit works →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Product Preview
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  From keyword data to an SEO action plan
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  Most SEO tools give you keyword data. B2B SEO Kit is designed
                  to help you decide what to do next: audit the right pages,
                  create briefs, add internal links, and improve conversion
                  paths.
                </p>
              </div>

              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r sm:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Input
                  </p>
                  <div className="space-y-3">
                    {[
                      ["Website type", "B2B SaaS"],
                      ["Main goal", "Generate qualified leads"],
                      ["SEO stage", "Early growth"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3"
                      >
                        <span className="text-sm text-slate-500">{label}</span>
                        <span className="text-sm font-medium text-slate-900">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Output
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Audit product and solution page titles",
                      "Map buying-intent keywords to commercial pages",
                      "Add FAQ blocks for AI search visibility",
                      "Build internal links to product pages",
                      "Track form submissions by landing page",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          ✓
                        </span>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 pb-20 sm:px-6">
            <div className="mx-auto max-w-2xl rounded-3xl bg-slate-950 p-8 text-center text-white shadow-sm sm:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-300">
                Free Early Access
              </p>
              <h2 className="text-3xl font-bold">
                Get the Free B2B SEO Kit When It Launches
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
                Join the early access list and get practical B2B SEO templates,
                checklists, and workflow updates as the toolkit launches.
              </p>

              <div className="mt-8">
                <a
                  href={TALLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Get Free Early Access
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                No spam. Built for practical B2B SEO workflows.
              </p>
            </div>
          </section>

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-[15px] text-slate-600">
                  Common questions about B2B SEO Kit and how the toolkit works.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-semibold text-slate-900">
                      {faq.question}
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-500 transition-colors group-open:bg-blue-100 group-open:text-blue-600">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="font-semibold text-slate-900 transition-colors hover:text-blue-600"
              >
                B2B SEO Kit
              </a>
              <span>·</span>
              <a
                href="/b2b-seo-kit/"
                className="transition-colors hover:text-slate-700"
              >
                SEO Toolkit
              </a>
            </div>

            <p className="text-center text-xs text-slate-400">
              Free B2B SEO tools, templates, and checklists for B2B marketers,
              SaaS teams, and consultants.
            </p>

            <a
              href="mailto:hello@b2bseokit.com"
              className="transition-colors hover:text-slate-700"
            >
              hello@b2bseokit.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
