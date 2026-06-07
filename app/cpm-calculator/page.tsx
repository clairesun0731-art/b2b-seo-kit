import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import CpmCalculator from "./CpmCalculator";

export const metadata: Metadata = {
  title: "CPM Calculator | Cost Per Thousand Impressions",
  description:
    "Calculate CPM from ad spend and impressions. Use this simple CPM calculator for B2B awareness, demand generation, and paid campaign planning.",
  alternates: {
    canonical: "https://www.b2bseokit.com/cpm-calculator/",
  },
  openGraph: {
    title: "CPM Calculator | Cost Per Thousand Impressions",
    description:
      "Calculate CPM from ad spend and impressions for B2B awareness, demand generation, and paid campaign planning.",
    url: "https://www.b2bseokit.com/cpm-calculator/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPM Calculator | Cost Per Thousand Impressions",
    description:
      "A simple CPM calculator for B2B awareness, demand generation, and paid campaign planning.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is CPM?",
    answer:
      "CPM means cost per thousand impressions. It shows how much a paid campaign costs for every 1,000 times an ad is shown.",
  },
  {
    question: "How do you calculate CPM?",
    answer:
      "CPM equals ad spend divided by impressions, multiplied by 1,000. If you spend $3,000 for 150,000 impressions, CPM is $20.",
  },
  {
    question: "Is a lower CPM always better?",
    answer:
      "No. A lower CPM can help awareness, but B2B teams should also check audience quality, click quality, landing page engagement, and lead generation outcomes.",
  },
  {
    question: "When should B2B teams use CPM?",
    answer:
      "Use CPM when comparing awareness, retargeting, and demand generation campaigns. For lead generation decisions, pair CPM with ROAS, cost per lead, and conversion rate.",
  },
  {
    question: "How can B2B teams improve CPM performance?",
    answer:
      "Improve CPM performance by tightening audience targeting, improving creative relevance, excluding low-fit audiences, and connecting campaigns to clear landing pages and retargeting paths.",
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
  name: "CPM Calculator",
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
    title: "What this CPM calculator measures",
    body: "This CPM calculator measures cost per thousand impressions from ad spend and total impressions. It is useful for B2B awareness, retargeting, and demand generation campaigns.",
  },
  {
    title: "How CPM fits into B2B lead generation",
    body: "CPM is an awareness metric, not a pipeline metric by itself. Use it to compare reach efficiency, then connect the campaign to landing page visits, leads, qualified leads, and revenue.",
  },
  {
    title: "What to improve when CPM is high",
    body: "If CPM is high, review audience size, targeting, creative relevance, and placement quality. For B2B campaigns, higher CPM can still be acceptable when the audience is narrow and commercially relevant.",
  },
];

export default function CpmCalculatorPage() {
  return (
    <>
      <Script
        id="cpm-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="cpm-calculator-tool-schema"
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
                CPM Calculator
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Calculate cost per thousand impressions for B2B awareness, demand generation, and
                paid campaign planning.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Calculate CPM
                </a>
                <a
                  href="/roas-calculator/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Calculate ROAS &rarr;
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
                How do you calculate CPM?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                CPM equals ad spend divided by impressions, multiplied by 1,000. B2B teams should
                use CPM to compare awareness efficiency, then connect paid reach to clicks, leads,
                qualified leads, and revenue.
              </p>
            </div>
          </section>

          <CpmCalculator />

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
            title="Connect CPM to campaign outcomes"
            links={[
              { label: "Calculate ROAS", href: "/roas-calculator/" },
              { label: "Calculate cost per lead", href: "/lead-cost-calculator/" },
              {
                label: "Estimate the full B2B lead funnel",
                href: "/b2b-lead-generation-calculator/",
              },
              {
                label: "Explore all lead generation calculators",
                href: "/b2b-lead-generation-calculators/",
              },
            ]}
          />

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">CPM Calculator Questions</h2>
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
