export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
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
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" id="tools">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "B2B SEO Checklist Generator",
            "Keyword Cluster Template",
            "Content Brief Generator",
            "Product Page SEO Checklist",
            "GEO / AI Search Checklist",
            "Internal Linking Planner",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A practical workflow to help B2B teams plan, optimize, and
                convert SEO traffic into qualified leads.
              </p>
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

          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-12 flex-1 rounded-full border border-white/10 px-5 text-slate-950 outline-none"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full bg-white px-8 font-semibold text-slate-950 hover:bg-slate-100"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}