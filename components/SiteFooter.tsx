import Link from "next/link";
import { leadGenerationCalculators, seoTools } from "@/lib/tools";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm text-slate-500 md:grid-cols-[1fr_1.7fr_0.8fr]">
        <div>
          <Link href="/" className="font-semibold text-slate-900 transition-colors hover:text-blue-600">
            B2B SEO Kit
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            Practical SEO tools, templates, and workflows for lean B2B teams.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                SEO Tools
              </p>
              {seoTools.map((tool) => (
                <a key={tool.href} href={tool.href} className="hover:text-slate-900">
                  {tool.title}
                </a>
              ))}
            </div>
            <div className="grid gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Calculators
              </p>
              {leadGenerationCalculators.map((tool) => (
                <a key={tool.href} href={tool.href} className="hover:text-slate-900">
                  {tool.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Site
          </h2>
          <div className="grid gap-2">
            <a href="/about/" className="hover:text-slate-900">
              About
            </a>
            <a href="/privacy/" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="mailto:hello@b2bseokit.com" className="hover:text-slate-900">
              hello@b2bseokit.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
