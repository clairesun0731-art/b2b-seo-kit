import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { leadGenerationCalculators } from "@/lib/tools";

export const metadata: Metadata = {
  title: "B2B Lead Generation Calculators | B2B SEO Kit",
  description:
    "Use free B2B lead generation calculators to estimate cost per lead, ROAS, CPM, website leads, customers, and conversion gaps.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-lead-generation-calculators/",
  },
  openGraph: {
    title: "B2B Lead Generation Calculators | B2B SEO Kit",
    description:
      "Use free B2B lead generation calculators to estimate cost per lead, ROAS, CPM, website leads, customers, and conversion gaps.",
    url: "https://www.b2bseokit.com/b2b-lead-generation-calculators/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Calculators | B2B SEO Kit",
    description:
      "Free calculators for B2B lead cost, ROAS, CPM, website leads, customers, and conversion gaps.",
    images: ["/logo.webp"],
  },
};

const calculators = leadGenerationCalculators.slice(1);

const faqs = [
  {
    question: "What are B2B lead generation calculators?",
    answer:
      "B2B lead generation calculators help teams estimate lead cost, website leads, customers, ROAS, CPM, and conversion gaps from simple campaign and funnel inputs.",
  },
  {
    question: "Which calculator should I use first?",
    answer:
      "Start with the B2B Lead Generation Calculator if you want a full funnel estimate. Use the Lead Cost Calculator when you already know spend and lead volume.",
  },
  {
    question: "Can these calculators replace analytics or CRM reporting?",
    answer:
      "No. These calculators are planning tools. Use them to model scenarios, then compare the output with analytics, CRM data, and qualified lead tracking.",
  },
  {
    question: "How do these calculators connect to B2B SEO?",
    answer:
      "B2B SEO should connect traffic to qualified leads. These calculators help teams estimate whether conversion rates, lead cost, and campaign economics support more SEO or paid acquisition investment.",
  },
  {
    question: "Should B2B teams track traffic or leads?",
    answer:
      "Track both, but prioritize qualified leads and conversion paths. Traffic is useful when it helps the right buyers find commercial pages and take a measurable next step.",
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

export default function B2BLeadGenerationCalculatorsPage() {
  return (
    <>
      <Script
        id="b2b-lead-generation-calculators-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
        <SiteHeader active="tools" />

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
                B2B Calculator Cluster
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                B2B Lead Generation Calculators
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Estimate lead cost, ROAS, CPM, website leads, customers, revenue, and conversion
                gaps before scaling SEO or paid acquisition.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#calculators"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Explore calculators
                </a>
                <a
                  href="/b2b-seo-audit/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Audit traffic-to-lead gaps &rarr;
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
                What can B2B lead generation calculators help with?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                B2B lead generation calculators help lean teams estimate cost per lead, ROAS,
                CPM, website lead potential, customer volume, and conversion gaps. They are useful
                before increasing SEO output, paid spend, or landing page experiments.
              </p>
            </div>
          </section>

          <section id="calculators" className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Free Calculators
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Choose the calculator for your current question
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                  Use one calculator for a fast answer, or move through the set to connect paid
                  campaign metrics with website conversion and lead quality.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {calculators.map((tool) => (
                  <a
                    key={tool.href}
                    href={tool.href}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                      {tool.shortTitle}
                    </p>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{tool.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {tool.hubDescription}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                      {tool.cta}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Use calculators before scaling spend",
                  body: "Before adding budget, estimate whether your cost per lead, ROAS, and conversion rates can support your deal value.",
                },
                {
                  title: "Connect paid metrics to page quality",
                  body: "Low ROAS or high lead cost often points to weak commercial pages, unclear CTAs, poor proof, or broad targeting.",
                },
                {
                  title: "Prioritize qualified leads",
                  body: "Cheap leads are not useful if they do not match your buyer. Review qualified lead rate and cost per customer, not only volume.",
                },
              ].map((section) => (
                <article
                  key={section.title}
                  className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <h2 className="mb-2 text-xl font-bold text-slate-900">{section.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{section.body}</p>
                </article>
              ))}
            </div>
          </section>

          <RelatedToolsSection
            title="Connect calculators to the SEO workflow"
            links={[
              { label: "Run a B2B SEO audit", href: "/b2b-seo-audit/" },
              { label: "Build a B2B SEO strategy", href: "/b2b-seo-strategy/" },
              { label: "Explore the B2B SEO Kit", href: "/b2b-seo-kit/" },
              { label: "Create a content brief", href: "/b2b-seo-brief-generator/" },
            ]}
          />

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  B2B Lead Generation Calculator Questions
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

        <SiteFooter />
      </div>
    </>
  );
}
