type RelatedToolLink = {
  label: string;
  href: string;
};

type RelatedToolsSectionProps = {
  eyebrow?: string;
  title: string;
  links: RelatedToolLink[];
  className?: string;
};

export default function RelatedToolsSection({
  eyebrow = "Related Tools",
  title,
  links,
  className = "",
}: RelatedToolsSectionProps) {
  return (
    <section className={`px-4 py-16 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
        <h2 className="mb-6 text-2xl font-bold text-slate-900">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
