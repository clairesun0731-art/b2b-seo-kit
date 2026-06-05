import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | B2B SEO Kit",
  description:
    "Read how B2B SEO Kit uses analytics cookies only after consent and how signup forms may collect submitted contact information.",
  alternates: {
    canonical: "https://www.b2bseokit.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | B2B SEO Kit",
    description:
      "B2B SEO Kit uses analytics cookies only if accepted and may use Tally for checklist signup forms.",
    url: "https://www.b2bseokit.com/privacy",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | B2B SEO Kit",
    description:
      "B2B SEO Kit uses analytics cookies only after consent and may use Tally for signup forms.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "Does B2B SEO Kit use analytics cookies?",
    answer:
      "B2B SEO Kit uses analytics cookies only if you accept analytics cookies in the cookie banner.",
  },
  {
    question: "What are analytics used for?",
    answer:
      "Analytics are used to understand page usage and improve the product, content, and SEO workflows.",
  },
  {
    question: "Do signup forms collect contact information?",
    answer:
      "B2B SEO Kit may use Tally for checklist signup forms. Users can avoid submitting forms if they do not want to share contact information.",
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

export default function PrivacyPage() {
  return (
    <>
      <Script
        id="privacy-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
        <SiteHeader />

        <main>
          <section className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Privacy Policy
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Privacy Policy
              </h1>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Quick Answer
                </p>
                <p className="text-[15px] leading-relaxed text-slate-700">
                  B2B SEO Kit uses analytics cookies only if you accept them. Analytics help us
                  understand page usage and improve the product.
                </p>
              </div>

              <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-700">
                <section>
                  <h2 className="mb-2 text-xl font-semibold text-slate-900">
                    Analytics Cookies
                  </h2>
                  <p>
                    B2B SEO Kit uses Google Analytics only after analytics cookies are accepted in
                    the cookie banner. If analytics cookies are rejected, Google Analytics is not
                    loaded by the site.
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-xl font-semibold text-slate-900">
                    How Analytics Are Used
                  </h2>
                  <p>
                    Analytics are used to understand which pages and workflows are used, identify
                    product improvement opportunities, and make B2B SEO Kit more useful for lean
                    B2B teams.
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-xl font-semibold text-slate-900">Signup Forms</h2>
                  <p>
                    B2B SEO Kit may use Tally for checklist signup forms. If you submit a form,
                    Tally may process the contact information you provide. You can avoid submitting
                    forms if you do not want to share contact information.
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-xl font-semibold text-slate-900">Legal Note</h2>
                  <p>
                    This page is informational and not legal advice. For legal questions about
                    privacy obligations, consult a qualified professional.
                  </p>
                </section>
              </div>
            </div>
          </section>

          <section id="faq" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="text-3xl font-bold text-slate-900">Privacy Questions</h2>
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
