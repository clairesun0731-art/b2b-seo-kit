"use client";

import Link from "next/link";
import { useState } from "react";
import { leadGenerationCalculators, seoTools } from "@/lib/tools";

const TALLY_URL = "https://tally.so/r/pbJK9J";

const toolGroups = [
  { label: "SEO Tools", tools: seoTools },
  { label: "Lead Generation Calculators", tools: leadGenerationCalculators },
] as const;

type SiteHeaderProps = {
  active?: "tools" | "blog" | "audit" | "strategy";
};

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

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
          <div
            className="group relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
            onFocus={() => setToolsOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setToolsOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={toolsOpen}
              aria-controls="desktop-tools-menu"
              onClick={() => setToolsOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setToolsOpen(false);
                }
              }}
              className={
                active === "tools"
                  ? "flex items-center gap-1 font-medium text-slate-900"
                  : "flex items-center gap-1 transition-colors hover:text-slate-900"
              }
            >
              Tools
              <span className="text-[10px] text-slate-400">v</span>
            </button>

            <div
              id="desktop-tools-menu"
              className={`absolute left-0 top-full pt-3 ${
                toolsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              } transition duration-150`}
            >
              <div className="max-h-[76vh] w-[32rem] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
                <div className="grid gap-3">
                  {toolGroups.map((group) => (
                    <div key={group.label}>
                      <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                        {group.label}
                      </p>
                      <div className="grid gap-1">
                        {group.tools.map((tool) => (
                          <a
                            key={tool.href}
                            href={tool.href}
                            className="rounded-2xl p-3 transition-colors hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] focus:outline-none"
                          >
                            <span className="block text-sm font-semibold text-slate-900">
                              {tool.title}
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                              {tool.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href="/blog/"
            className={
              active === "blog"
                ? "font-medium text-slate-900"
                : "transition-colors hover:text-slate-900"
            }
          >
            Blog
          </a>
          <a
            href="/b2b-seo-audit/"
            className={
              active === "audit"
                ? "font-medium text-slate-900"
                : "transition-colors hover:text-slate-900"
            }
          >
            SEO Audit
          </a>
          <a
            href="/b2b-seo-strategy/"
            className={
              active === "strategy"
                ? "font-medium text-slate-900"
                : "transition-colors hover:text-slate-900"
            }
          >
            SEO Strategy
          </a>
          <a href="/about/" className="transition-colors hover:text-slate-900">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:inline-block"
          >
            Get Free Access
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
          >
            <span className="sr-only">Open navigation menu</span>
            <span aria-hidden="true" className="grid gap-1">
              <span className="block h-0.5 w-4 rounded-full bg-slate-700" />
              <span className="block h-0.5 w-4 rounded-full bg-slate-700" />
              <span className="block h-0.5 w-4 rounded-full bg-slate-700" />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            <button
              type="button"
              aria-expanded={mobileToolsOpen}
              aria-controls="mobile-tools-menu"
              onClick={() => setMobileToolsOpen((open) => !open)}
              className="flex min-h-11 items-center justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-left text-sm font-semibold text-slate-900"
            >
              Tools
              <span className="text-xs text-slate-400">{mobileToolsOpen ? "Close" : "Open"}</span>
            </button>

            {mobileToolsOpen ? (
              <div id="mobile-tools-menu" className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-2">
                {toolGroups.map((group) => (
                  <div key={group.label}>
                    <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                      {group.label}
                    </p>
                    <div className="grid gap-1">
                      {group.tools.map((tool) => (
                        <a
                          key={tool.href}
                          href={tool.href}
                          className="rounded-xl px-3 py-3 text-sm transition-colors hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] focus:outline-none"
                        >
                          <span className="block font-semibold text-slate-900">{tool.title}</span>
                          <span className="mt-1 block leading-relaxed text-slate-500">
                            {tool.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <a
              href="/blog/"
              className={
                active === "blog"
                  ? "rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-slate-900"
                  : "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#F8FAFC]"
              }
            >
              Blog
            </a>
            <a
              href="/b2b-seo-audit/"
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#F8FAFC]"
            >
              SEO Audit
            </a>
            <a
              href="/b2b-seo-strategy/"
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#F8FAFC]"
            >
              SEO Strategy
            </a>
            <a
              href="/about/"
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#F8FAFC]"
            >
              About
            </a>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Free Access
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
