import Link from "next/link";

const workflowCards = [
  {
    title: "SEO Audit Generator",
    description: "Find what your B2B website should fix first.",
    href: "/b2b-seo-audit",
  },
  {
    title: "SEO Toolkit",
    description: "Explore lightweight B2B SEO tools, templates, and workflows.",
    href: "/b2b-seo-kit",
  },
  {
    title: "Strategy Workflow",
    description: "Turn keywords into pages, briefs, internal links, and qualified leads.",
    href: "/b2b-seo-strategy",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-12 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <Link href="/" className="group flex w-fit items-center gap-2">
          <img
            src="/logo-square.webp"
            alt="B2B"
            width={32}
            height={32}
            className="h-8 w-8 rounded-xl object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
            SEO Kit
          </span>
        </Link>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
            404
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            This page isn’t part of the workflow yet.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-lg">
            The link may be outdated, mistyped, or moved. Start with one of the core B2B SEO
            workflows below.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/b2b-seo-audit"
              className="rounded-2xl bg-blue-600 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Start with a Free SEO Audit
            </a>
            <Link
              href="/"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Go to Homepage
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {workflowCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Workflow
              </p>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{card.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
            </a>
          ))}
        </section>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
          If you came from an external link, the page may have been moved while the product is
          still early.
        </p>
      </div>
    </main>
  );
}
