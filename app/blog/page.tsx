import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "B2B SEO & Lead Generation Blog | B2B SEO Kit",
  description:
    "Practical guides on B2B SEO, lead generation, calculators, ROAS, CPL, CPM, internal links, and conversion paths.",
  alternates: {
    canonical: "https://www.b2bseokit.com/blog/",
  },
  openGraph: {
    title: "B2B SEO & Lead Generation Blog | B2B SEO Kit",
    description:
      "Practical guides on B2B SEO, lead generation, calculators, ROAS, CPL, CPM, internal links, and conversion paths.",
    url: "https://www.b2bseokit.com/blog/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO & Lead Generation Blog | B2B SEO Kit",
    description:
      "Practical B2B SEO and lead generation guides for lean teams connecting traffic, spend, conversion paths, and revenue.",
    images: ["/logo.webp"],
  },
};

const articles = [
  {
    title: "How to Calculate Cost per Lead for B2B Campaigns",
    href: "/how-to-calculate-cost-per-lead/",
    description:
      "Learn how to calculate CPL and cost per qualified lead before scaling campaigns.",
    label: "CPL",
  },
  {
    title: "How to Estimate B2B Leads from Website Traffic",
    href: "/estimate-leads-from-website-traffic/",
    description:
      "Estimate leads, customers, revenue, CPL, and customer cost from website traffic.",
    label: "Lead Forecasting",
  },
  {
    title: "How to Calculate ROAS for B2B Google Ads",
    href: "/how-to-calculate-roas/",
    description:
      "Calculate ROAS and understand why B2B teams should compare it with lead quality.",
    label: "ROAS",
  },
  {
    title: "What Is CPM and How Should B2B Teams Use It?",
    href: "/what-is-cpm/",
    description:
      "Learn how CPM works and why impressions should be reviewed with downstream lead metrics.",
    label: "CPM",
  },
] as const;

const faqs = [
  {
    question: "What does the B2B SEO Kit blog cover?",
    answer:
      "The B2B SEO Kit blog covers practical B2B SEO, lead generation, campaign calculators, conversion paths, internal links, and revenue-focused marketing workflows.",
  },
  {
    question: "Who are these guides for?",
    answer:
      "These guides are for lean B2B marketers, founders, consultants, agencies, SaaS teams, manufacturers, exporters, and small marketing teams that need practical decisions, not complex dashboards.",
  },
  {
    question: "How should I use the calculator guides?",
    answer:
      "Use the calculator guides to understand formulas, then use the related calculators to estimate CPL, ROAS, CPM, website leads, customer volume, and conversion gaps.",
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

export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
        <SiteHeader active="blog" />

        <main>
          <section className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
                B2B SEO Blog
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Practical B2B SEO and lead generation guides
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                Learn how to connect SEO, paid campaigns, lead cost, conversion paths, and
                revenue without a complex dashboard.
              </p>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Quick Answer
              </p>
              <h2 className="mb-3 text-xl font-bold text-slate-900">
                What is this blog for?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                This is a lightweight resource library for B2B teams that need to connect traffic,
                paid spend, content, internal links, and conversion paths to qualified leads and
                revenue decisions.
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Calculator Guides
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Start with the lead generation math
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                  These guides explain the formulas behind the calculators so your team can spot
                  whether the real gap is traffic, conversion rate, lead quality, or campaign
                  economics.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {articles.map((article) => (
                  <a
                    key={article.href}
                    href={article.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                      {article.label}
                    </p>
                    <h3 className="text-xl font-semibold leading-snug text-slate-900 group-hover:text-blue-600">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {article.description}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                      Read guide &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
              {[
                {
                  title: "SEO should connect to leads",
                  body: "Use SEO content and tools to support commercial pages, buyer questions, and measurable next steps.",
                },
                {
                  title: "Paid metrics need context",
                  body: "Review CPL, ROAS, and CPM alongside qualified lead rate, sales fit, and conversion paths.",
                },
                {
                  title: "Simple workflows beat dashboards",
                  body: "Start with practical formulas and page-level fixes before adding more reporting complexity.",
                },
              ].map((section) => (
                <article
                  key={section.title}
                  className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
                </article>
              ))}
            </div>
          </section>

          <RelatedToolsSection
            title="Use the calculators with these guides"
            links={[
              { label: "B2B Lead Generation Calculators", href: "/b2b-lead-generation-calculators/" },
              { label: "Lead Cost Calculator", href: "/lead-cost-calculator/" },
              { label: "ROAS Calculator", href: "/roas-calculator/" },
              { label: "CPM Calculator", href: "/cpm-calculator/" },
            ]}
          />

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">Blog Questions</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
                  >
                    <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </article>
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
