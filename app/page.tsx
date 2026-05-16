const tools = [
  {
    title: "B2B SEO Checklist Generator",
    description:
      "Audit your B2B website structure, metadata, content gaps, internal links, and lead-generation paths.",
  },
  {
    title: "Keyword Cluster Template",
    description:
      "Turn scattered B2B keywords into topic clusters for product pages, solution pages, and blog content.",
  },
  {
    title: "Content Brief Generator",
    description:
      "Create SEO-friendly content briefs with search intent, headings, FAQs, internal links, and CTA ideas.",
  },
  {
    title: "Product Page SEO Checklist",
    description:
      "Optimize B2B product and service pages for rankings, AI search visibility, and qualified inquiries.",
  },
  {
    title: "GEO / AI Search Checklist",
    description:
      "Structure your content so it is easier for AI search engines and LLMs to understand, cite, and summarize.",
  },
  {
    title: "Internal Linking Planner",
    description:
      "Plan contextual internal links between homepage, product pages, templates, tools, and blog articles.",
  },
];

const faqs = [
  {
    question: "What is B2B SEO Kit?",
    answer:
      "B2B SEO Kit is a free toolkit for B2B marketers, founders, SEO consultants, SaaS teams, and export businesses. It helps turn keywords into content briefs, SEO checklists, product page improvements, and AI-search-ready workflows.",
  },
  {
    question: "Who is B2B SEO Kit for?",
    answer:
      "It is designed for B2B teams that need practical SEO workflows, including SaaS companies, agencies, consultants, manufacturers, exporters, and service businesses that rely on organic traffic and lead generation.",
  },
  {
    question: "Is B2B SEO Kit free?",
    answer:
      "The first version is planned as a free toolkit with templates, checklists, and lightweight generators. More advanced workflows may be added later based on user demand.",
  },
  {
    question: "Does B2B SEO Kit support AI search optimization?",
    answer:
      "Yes. The toolkit includes GEO and AI search optimization workflows that help make content more descriptive, structured, and easier for AI systems to interpret.",
  },
  {
    question: "Can I use it for SaaS and export business websites?",
    answer:
      "Yes. B2B SEO Kit is especially suitable for SaaS websites, product-led B2B sites, export businesses, industrial websites, and service businesses with long buying cycles.",
  },
];

export default function Home() {
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-lg font-bold tracking-tight text-slate-950">
          B2B SEO Kit
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#tools" className="hover:text-slate-950">
            Tools
          </a>
          <a href="#why" className="hover:text-slate-950">
            Why B2B SEO
          </a>
          <a href="#faq" className="hover:text-slate-950">
            FAQ
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-slate-950 px-5 py-2 font-semibold text-white hover:bg-slate-800"
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
        <div className="mb-6 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          Free B2B SEO Toolkit for Marketers, Founders, and Consultants
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
          Turn B2B Keywords Into Traffic, Content, and Leads
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          B2B SEO Kit helps you generate keyword clusters, SEO content briefs,
          product page checklists, and AI-search-ready optimization workflows
          for B2B websites.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Join Early Access
          </a>

          <a
            href="#tools"
            className="rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
          >
            View Free Tools
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Built for SaaS teams, B2B marketers, SEO consultants, agencies,
          manufacturers, and export businesses.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" id="tools">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            What You Get
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Practical SEO workflows for B2B growth
          </h2>
          <p className="mt-4 text-slate-600">
            Start with templates and lightweight tools that help you move from
            keyword research to content planning, page optimization, and lead
            generation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" id="why">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Why B2B SEO Is Different
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                B2B SEO should drive qualified demand, not just traffic
              </h2>
            </div>

            <div className="space-y-5 text-slate-600">
              <p>
                B2B search journeys are usually longer, more technical, and more
                comparison-driven than consumer search journeys. Buyers often
                research problems, compare vendors, evaluate product pages, and
                revisit content before submitting a form.
              </p>
              <p>
                That means a B2B SEO workflow needs to connect keyword research,
                solution pages, product pages, content briefs, internal linking,
                and conversion paths into one practical system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20" id="faq">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {faq.question}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24" id="waitlist">
        <div className="rounded-3xl bg-slate-950 p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-bold">
            Get the Free B2B SEO Kit When It Launches
          </h2>

          <p className="mt-4 text-slate-300">
            Join the early access list and get templates, checklists, and free
            SEO tools for B2B growth.
          </p>

       <div className="mt-8 flex flex-col items-center gap-4">
  <a
    href="https://tally.so/r/pbJK9J"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 hover:bg-slate-100"
  >
    Join Early Access
  </a>

  <p className="text-sm text-slate-400">
    Takes less than 1 minute. No spam, just practical B2B SEO templates and tool updates.
  </p>
</div>

          <p className="mt-4 text-xs text-slate-400">
            No spam. Just practical B2B SEO templates and tool updates.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 B2B SEO Kit. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <a href="mailto:hello@b2bseokit.com" className="hover:text-slate-950">
              hello@b2bseokit.com
            </a>
            <a
              href="mailto:support@b2bseokit.com"
              className="hover:text-slate-950"
            >
              support@b2bseokit.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}