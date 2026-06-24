import Link from "next/link";

const kitLinks = [
  { label: "Home", href: "/" },
  { label: "B2B SEO Kit", href: "/b2b-seo-kit/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "mailto:hello@b2bseokit.com" },
  { label: "Privacy Policy", href: "/privacy/" },
] as const;

const seoToolLinks = [
  { label: "B2B SEO Audit Generator", href: "/b2b-seo-audit/" },
  { label: "B2B SEO Strategy Workflow Generator", href: "/b2b-seo-strategy/" },
  { label: "B2B SEO Brief Generator", href: "/b2b-seo-brief-generator/" },
  { label: "B2B SEO Template Generator", href: "/b2b-seo-template/" },
  { label: "B2B Keyword Research Template", href: "/b2b-keyword-research-template/" },
] as const;

const calculatorLinks = [
  { label: "Lead Generation Calculators", href: "/b2b-lead-generation-calculators/" },
  { label: "Cost per Lead Calculator", href: "/lead-cost-calculator/" },
  { label: "ROAS Calculator", href: "/roas-calculator/" },
  { label: "CPM Calculator", href: "/cpm-calculator/" },
  { label: "Website Visitor to Lead Calculator", href: "/b2b-lead-generation-calculator/" },
] as const;

const resourceLinks = [
  { label: "B2B SEO Strategy", href: "/b2b-seo-strategy/" },
  { label: "B2B SEO Audit", href: "/b2b-seo-audit/" },
  { label: "B2B Keyword Strategy", href: "/b2b-keyword-research-template/" },
  { label: "Internal Linking for B2B SEO", href: "/b2b-seo-strategy/" },
  { label: "AI Search Visibility for B2B", href: "/b2b-seo-kit/" },
  { label: "Blog", href: "/blog/" },
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
            key={`${link.label}-${link.href}`}
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
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-xl">
          <Link href="/" className="font-semibold text-slate-900 transition-colors hover:text-blue-600">
            B2B SEO Kit
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            A practical SEO and GEO toolkit for lean B2B teams that need clearer audits,
            keyword-to-page mapping, internal links, commercial page fixes, and lead paths.
          </p>
        </div>

        <div className="grid gap-8 text-sm text-slate-500 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <FooterColumn title="B2B SEO Kit" links={kitLinks} />
          <FooterColumn title="SEO Tools" links={seoToolLinks} />
          <FooterColumn title="Lead Generation Calculators" links={calculatorLinks} />
          <FooterColumn title="Use Cases / Resources" links={resourceLinks} />
        </div>
      </div>
    </footer>
  );
}
