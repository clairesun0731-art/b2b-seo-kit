import type { Metadata } from "next";
import Script from "next/script";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import LeadCostCalculator from "./LeadCostCalculator";

export const metadata: Metadata = {
  title: "Lead Cost Calculator | Calculate Cost Per Lead for B2B Teams",
  description:
    "Use this free lead cost calculator to calculate cost per lead and cost per qualified lead for B2B marketing campaigns, SEO, ads, agencies, and consulting funnels.",
  alternates: {
    canonical: "https://www.b2bseokit.com/lead-cost-calculator/",
  },
  openGraph: {
    title: "Lead Cost Calculator | Calculate Cost Per Lead for B2B Teams",
    description:
      "Calculate cost per lead and cost per qualified lead, then get a practical next step for improving B2B lead quality and conversion paths.",
    url: "https://www.b2bseokit.com/lead-cost-calculator/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Cost Calculator | Calculate Cost Per Lead for B2B Teams",
    description:
      "A simple B2B lead cost calculator for cost per lead, cost per qualified lead, and practical next steps.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is cost per lead?",
    answer:
      "Cost per lead is the amount of marketing spend divided by the number of leads generated. It helps B2B teams understand how much each form fill, inquiry, demo request, quote request, or consultation lead costs.",
  },
  {
    question: "How do you calculate cost per lead?",
    answer:
      "Cost per lead equals total marketing spend divided by total leads. For example, if you spend $5,000 and generate 100 leads, your cost per lead is $50.",
  },
  {
    question: "What is cost per qualified lead?",
    answer:
      "Cost per qualified lead divides total marketing spend by the number of leads that match your qualification criteria. It is often more useful for B2B teams than cost per lead because it reflects lead quality.",
  },
  {
    question: "What is a good cost per lead for B2B marketing?",
    answer:
      "A good B2B cost per lead depends on deal size, sales cycle, conversion rate, and lead quality. A higher cost per lead can be healthy when the leads are qualified and average deal value supports the spend.",
  },
  {
    question: "Should SEO leads and paid leads be measured separately?",
    answer:
      "Yes. Organic, paid, referral, and outbound leads often have different costs and qualification rates. Measuring them separately helps teams decide which channels deserve more investment.",
  },
  {
    question: "How can B2B teams reduce cost per qualified lead?",
    answer:
      "B2B teams can reduce cost per qualified lead by improving buyer-intent keyword targeting, strengthening landing pages, adding clearer CTAs, improving forms, and tracking qualified leads by source and landing page.",
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
  name: "Lead Cost Calculator",
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
    title: "What is a lead cost calculator?",
    body: "A lead cost calculator helps B2B teams calculate cost per lead by comparing marketing spend with lead volume. It is useful for SEO, paid ads, agencies, consulting funnels, SaaS demo campaigns, manufacturer RFQ campaigns, and any channel where lead quality matters.",
  },
  {
    title: "Why cost per qualified lead matters for B2B teams",
    body: "Cost per lead can look efficient while cost per qualified lead is too high. Lean teams should separate all leads from qualified leads so they can see whether a channel is attracting real buyers or only low-fit form submissions.",
  },
  {
    title: "How to use cost per lead with SEO and conversion work",
    body: "Use cost per lead alongside landing page conversion rate, qualified lead rate, and revenue quality. If SEO traffic creates leads but not qualified leads, audit keyword intent, internal links, commercial page depth, and CTA paths before creating more content.",
  },
  {
    title: "What to improve when lead cost is too high",
    body: "Start with the highest-intent pages and channels. Improve buyer-intent targeting, add proof near CTAs, simplify forms, link educational content to commercial pages, and track qualified leads by landing page instead of only total leads.",
  },
];

export default function LeadCostCalculatorPage() {
  return (
    <>
      <Script
        id="lead-cost-calculator-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="lead-cost-calculator-tool-schema"
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
                Lead Cost Calculator
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Calculate cost per lead and cost per qualified lead so your B2B team can judge
                lead generation by buyer fit, not lead volume alone.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="w-full rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Calculate lead cost
                </a>
                <a
                  href="/b2b-seo-audit/"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                >
                  Audit lead paths first &rarr;
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
                How do you calculate cost per lead?
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                Cost per lead equals total marketing spend divided by the number of leads. For
                B2B teams, cost per qualified lead is often the more useful number because it
                shows whether the spend is attracting buyers who match your target market.
              </p>
            </div>
          </section>

          <LeadCostCalculator />

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
            title="Improve the lead generation workflow"
            links={[
              {
                label: "Estimate the full B2B lead funnel",
                href: "/b2b-lead-generation-calculator/",
              },
              { label: "Audit your lead paths", href: "/b2b-seo-audit/" },
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
                  Lead Cost Calculator Questions
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
