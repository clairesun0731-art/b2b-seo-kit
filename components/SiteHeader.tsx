import Link from "next/link";

const TALLY_URL = "https://tally.so/r/pbJK9J";

type SiteHeaderProps = {
  active?: "tools" | "audit" | "strategy";
};

const navItems = [
  { label: "Tools", href: "/b2b-seo-kit/", key: "tools" },
  { label: "SEO Audit", href: "/b2b-seo-audit/", key: "audit" },
  { label: "SEO Strategy", href: "/b2b-seo-strategy/", key: "strategy" },
] as const;

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
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

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={
                active === item.key
                  ? "font-medium text-slate-900"
                  : "transition-colors hover:text-slate-900"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Get Free Access
        </a>
      </div>
    </header>
  );
}
