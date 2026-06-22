import type { ReactNode } from "react";
import Script from "next/script";
import ArticleIllustration, {
  type ArticleIllustrationVariant,
} from "@/components/ArticleIllustration";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type Faq = {
  question: string;
  answer: string;
};

type LinkItem = {
  label: string;
  href: string;
};

type CtaBlock = {
  title: string;
  body: ReactNode;
  href: string;
  label: string;
};

type RelatedCalculator = {
  title: string;
  href: string;
  description: string;
};

type CalculatorArticlePageProps = {
  schemaId: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  illustration: ArticleIllustrationVariant;
  topCta: CtaBlock;
  bottomCta: CtaBlock;
  relatedCalculator: RelatedCalculator;
  relatedTools: LinkItem[];
  faqs: Faq[];
  children: ReactNode;
};

export function FormulaBlock({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono text-sm font-semibold text-slate-900 shadow-sm">
      {children}
    </div>
  );
}

export function ExampleList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="my-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticleSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}

function CalculatorCta({ cta }: { cta: CtaBlock }) {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
          Calculator CTA
        </p>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">{cta.title}</h2>
        <div className="mb-5 text-sm leading-relaxed text-slate-700">{cta.body}</div>
        <a
          href={cta.href}
          className="inline-block rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}

function RelatedCalculatorCard({ calculator }: { calculator: RelatedCalculator }) {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          Related Calculator
        </p>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">{calculator.title}</h2>
        <p className="mb-5 text-sm leading-relaxed text-slate-600">
          {calculator.description}
        </p>
        <a
          href={calculator.href}
          className="inline-block rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
        >
          Open calculator &rarr;
        </a>
      </div>
    </section>
  );
}

export default function CalculatorArticlePage({
  schemaId,
  eyebrow,
  title,
  intro,
  illustration,
  topCta,
  bottomCta,
  relatedCalculator,
  relatedTools,
  faqs,
  children,
}: CalculatorArticlePageProps) {
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

  return (
    <>
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
        <SiteHeader active="blog" />

        <main>
          <section className="relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pt-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
              <div className="text-center lg:text-left">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {eyebrow}
                </p>
                <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  {title}
                </h1>
                <div className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
                  {intro}
                </div>
              </div>
              <div className="lg:justify-self-end">
                <ArticleIllustration variant={illustration} />
              </div>
            </div>
          </section>

          <CalculatorCta cta={topCta} />

          <article className="px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-3xl space-y-12">{children}</div>
          </article>

          <RelatedCalculatorCard calculator={relatedCalculator} />
          <CalculatorCta cta={bottomCta} />

          <section id="faq" className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
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

          <RelatedToolsSection
            eyebrow="Related Tools"
            title="Keep planning with B2B SEO Kit"
            links={relatedTools}
          />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
