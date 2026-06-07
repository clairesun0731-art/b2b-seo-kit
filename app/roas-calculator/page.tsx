import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import RoasCalculator from "./RoasCalculator";

export const metadata: Metadata = {
  title: "ROAS Calculator | Return on Ad Spend Calculator",
  description:
    "Calculate return on ad spend from revenue and advertising cost. Use this simple ROAS calculator for B2B paid campaigns and lead generation planning.",
  alternates: {
    canonical: "https://www.b2bseokit.com/roas-calculator/",
  },
  openGraph: {
    title: "ROAS Calculator | Return on Ad Spend Calculator",
    description:
      "Calculate return on ad spend from revenue and advertising cost for B2B paid campaigns and lead generation planning.",
    url: "https://www.b2bseokit.com/roas-calculator/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS Calculator | Return on Ad Spend Calculator",
    description:
      "A simple ROAS calculator for B2B paid campaigns, lead generation planning, and pipeline review.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is ROAS?",
    answer:
      "ROAS means return on ad spend. It compares attributed revenue with advertising cost so teams can understand whether paid campaigns are creating enough return.",
  },
  {
    question: "How do you calculate ROAS?",
    answer:
      "ROAS equals revenue divided by ad spend. If a campaign generates $20,000 in revenue from $5,000 in ad spend, ROAS is 4x or 400%.",
  },
  {
    question: "What is a good ROAS for B2B campaigns?",
    answer:
      "A good ROAS depends on margins, deal size, sales cycle, and attribution quality. B2B teams should review ROAS alongside cost per lead, qualified lead rate, and cost per customer.",
  },
  {
    question: "Should B2B teams use ROAS for lead generation campaigns?",
    answer:
      "Yes, but ROAS should not be the only metric. Many B2B campaigns create pipeline before closed revenue, so teams should also track lead quality, sales opportunities, and landing page conversion paths.",
  },
  {
    question: "How can B2B teams improve ROAS?",
    answer:
      "Improve ROAS by tightening buyer-intent targeting, improving landing pages, adding proof near CTAs, reducing low-fit leads, and connecting paid campaigns to clear follow-up paths.",
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
  name: "ROAS Calculator",
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
    title: "What this ROAS calculator measures",
    body: "This ROAS calculator measures revenue compared with advertising cost. For B2B teams, the result is most useful when it is reviewed with lead quality, sales cycle length, and cost per customer.",
  },
  {
    title: "Why ROAS needs B2B context",
    body: "B2B campaigns often generate leads before revenue closes. A campaign can look weak in short-term ROAS but still create qualified pipeline. Review ROAS with CPL, qualified lead rate, and landing page conversion paths.",
  },
  {
    title: "What to improve when ROAS is low",
    body: "Start with buyer intent and conversion quality. Reduce broad targeting, improve commercial landing pages, add proof near forms, and make sure high-intent visitors have a clear contact, demo, or RFQ path.",
  },
];

export default function RoasCalculatorPage() {
  return (
    <>
      <Script
        id="roas-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="roas-calculator-tool-schema"
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
                ROAS Calculator
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Calculate return on ad spend so your B2B team can review paid campaigns alongside
                lead cost, pipeline quality, and conversion paths.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Calculate ROAS
                </a>
                <a
                  href="/lead-cost-calculator/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Calculate lead cost &rarr;
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
                How do you calculate ROAS?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                ROAS equals attributed revenue divided by advertising cost. B2B teams should use
                ROAS with cost per lead and cost per customer because paid campaigns often create
                pipeline before closed revenue.
              </p>
            </div>
          </section>

          <RoasCalculator />

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
            title="Connect ROAS to lead generation"
            links={[
              { label: "Calculate cost per lead", href: "/lead-cost-calculator/" },
              {
                label: "Estimate the full B2B lead funnel",
                href: "/b2b-lead-generation-calculator/",
              },
              {
                label: "Explore all lead generation calculators",
                href: "/b2b-lead-generation-calculators/",
              },
              { label: "Audit your lead paths", href: "/b2b-seo-audit/" },
            ]}
          />

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">ROAS Calculator Questions</h2>
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
