import Link from "next/link";

const toolLinks = [
  { label: "B2B SEO Audit Generator", href: "/b2b-seo-audit/" },
  { label: "B2B SEO Strategy Workflow Generator", href: "/b2b-seo-strategy/" },
  { label: "B2B Lead Generation Calculators", href: "/b2b-lead-generation-calculators/" },
  { label: "Lead Cost Calculator", href: "/lead-cost-calculator/" },
  { label: "ROAS Calculator", href: "/roas-calculator/" },
  { label: "CPM Calculator", href: "/cpm-calculator/" },
] as const;

const resourceLinks = [
  { label: "Blog", href: "/blog/" },
  { label: "How to Calculate Cost per Lead", href: "/how-to-calculate-cost-per-lead/" },
  { label: "Estimate Leads from Website Traffic", href: "/estimate-leads-from-website-traffic/" },
  { label: "How to Calculate ROAS", href: "/how-to-calculate-roas/" },
  { label: "What Is CPM", href: "/what-is-cpm/" },
] as const;

const kitLinks = [
  { label: "B2B SEO Kit", href: "/b2b-seo-kit/" },
  { label: "About", href: "/about/" },
  { label: "B2B SEO Audit", href: "/b2b-seo-audit/" },
  { label: "B2B SEO Strategy", href: "/b2b-seo-strategy/" },
  { label: "Privacy", href: "/privacy/" },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
        {title}
      </h2>
      <div className="grid gap-2.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm leading-snug text-slate-500 transition-colors hover:text-slate-900"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm text-slate-500 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1.1fr_1fr] lg:items-start">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="font-semibold text-slate-900 transition-colors hover:text-blue-600">
            B2B SEO Kit
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500 lg:max-w-xs">
            Practical SEO tools, templates, and workflows for lean B2B teams.
          </p>
          <a
            href="mailto:hello@b2bseokit.com"
            className="mt-4 inline-block text-sm text-slate-500 transition-colors hover:text-slate-900"
          >
            hello@b2bseokit.com
          </a>
        </div>

        <FooterColumn title="Tools" links={toolLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />
        <FooterColumn title="B2B SEO Kit" links={kitLinks} />
      </div>
    </footer>
  );
}
