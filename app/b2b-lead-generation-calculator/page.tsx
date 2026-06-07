import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import B2BLeadGenerationCalculator from "./B2BLeadGenerationCalculator";

export const metadata: Metadata = {
  title: "B2B Lead Generation Calculator | Estimate Leads, Revenue & CPL",
  description:
    "Estimate website leads, customers, revenue, cost per lead, and customer acquisition cost from traffic, conversion rates, deal value, and marketing spend.",
  alternates: {
    canonical: "https://www.b2bseokit.com/b2b-lead-generation-calculator/",
  },
  openGraph: {
    title: "B2B Lead Generation Calculator | Estimate Leads, Revenue & CPL",
    description:
      "Estimate website leads, customers, revenue, cost per lead, and customer acquisition cost from traffic, conversion rates, deal value, and marketing spend.",
    url: "https://www.b2bseokit.com/b2b-lead-generation-calculator/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Calculator | Estimate Leads, Revenue & CPL",
    description:
      "Estimate website leads, customers, revenue, cost per lead, and customer acquisition cost.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is a B2B lead generation calculator?",
    answer:
      "A B2B lead generation calculator estimates leads, customers, revenue, cost per lead, and cost per customer from traffic, conversion rates, deal value, and marketing spend.",
  },
  {
    question: "How do you estimate monthly B2B leads?",
    answer:
      "Estimated monthly leads equal monthly website traffic multiplied by the visitor-to-lead conversion rate. For example, 5,000 visits at a 2% conversion rate creates about 100 leads.",
  },
  {
    question: "How do you calculate cost per customer?",
    answer:
      "Cost per customer equals total marketing spend divided by the number of customers generated. It is a simple way to estimate marketing acquisition cost for a campaign or channel.",
  },
  {
    question: "What conversion rates should B2B teams use?",
    answer:
      "Use your own rates when possible. If you do not have data yet, start with conservative assumptions, then update the calculator with real visitor-to-lead and lead-to-customer rates from analytics and CRM data.",
  },
  {
    question: "How can B2B teams improve lead generation results?",
    answer:
      "Improve the weakest part of the funnel first. That may mean better landing page CTAs, stronger commercial pages, clearer internal links, better buyer-intent keywords, or better lead qualification.",
  },
  {
    question: "Should B2B SEO be measured by leads or traffic?",
    answer:
      "B2B SEO should track traffic, but leads and qualified leads matter more. Organic traffic is useful only when it helps the right buyers find commercial pages and take a measurable next step.",
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
  name: "B2B Lead Generation Calculator",
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
    title: "What this B2B lead generation calculator estimates",
    body: "This calculator estimates monthly leads, customers, revenue, cost per lead, and cost per customer from a simple B2B funnel. It is useful for SaaS teams, agencies, consultants, manufacturers, and service businesses planning SEO, paid campaigns, or landing page improvements.",
  },
  {
    title: "How to read the lead generation numbers",
    body: "Look at the full path from traffic to customers. If traffic is high but leads are low, improve landing pages and CTAs. If leads are high but customers are low, improve lead quality, qualification, and buyer-intent targeting.",
  },
  {
    title: "Why conversion paths matter for B2B SEO",
    body: "B2B SEO should not stop at rankings. Educational content should link to commercial pages, commercial pages should have clear CTAs, and forms should be tracked by landing page so teams can see which pages generate qualified leads.",
  },
  {
    title: "What to improve first in a B2B lead funnel",
    body: "Start with the weakest constraint. Improve visitor-to-lead conversion with clearer CTAs and proof. Improve lead-to-customer conversion with better buyer intent and qualification. Improve cost efficiency by focusing spend on pages and channels that produce qualified opportunities.",
  },
];

export default function B2BLeadGenerationCalculatorPage() {
  return (
    <>
      <Script
        id="b2b-lead-generation-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="b2b-lead-generation-calculator-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
                B2B Lead Generation Calculator
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                B2B Lead Generation Calculator
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Estimate leads, customers, revenue, cost per lead, and cost per customer from
                website traffic, conversion rates, deal value, and marketing spend.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Estimate your lead funnel
                </a>
                <a
                  href="/b2b-seo-strategy/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Build the SEO workflow &rarr;
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
                How do B2B teams estimate lead generation?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                Estimate B2B lead generation by multiplying website traffic by visitor-to-lead
                conversion rate, then multiplying leads by lead-to-customer conversion rate.
                Compare the result with deal value and marketing spend to understand revenue,
                cost per lead, and cost per customer.
              </p>
            </div>
          </section>

          <B2BLeadGenerationCalculator />

          <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl space-y-10">
              {educationalSections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-2xl font-bold text-slate-900">{section.title}</h2>
                  <p className="text-[15px] leading-relaxed text-slate-700">{section.body}</p>
                </section>
              ))}
            </div>
          </section>

          <RelatedToolsSection
            title="Improve the B2B lead funnel"
            links={[
              { label: "Calculate cost per lead", href: "/lead-cost-calculator/" },
              { label: "Audit your current lead paths", href: "/b2b-seo-audit/" },
              { label: "Build a B2B SEO strategy", href: "/b2b-seo-strategy/" },
              { label: "Explore all B2B SEO tools", href: "/b2b-seo-kit/" },
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
