"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  active?: "tools" | "use-cases" | "resources" | "blog" | "about" | "audit" | "strategy";
};

type NavLink = {
  label: string;
  href: string;
  description?: string;
};

type NavGroup = {
  label: string;
  links: readonly NavLink[];
};

const toolsGroups: readonly NavGroup[] = [
  {
    label: "Audit & Strategy",
    links: [
      {
        label: "B2B SEO Audit Generator",
        href: "/b2b-seo-audit/",
        description: "Find what to fix first across B2B SEO, content, links, and conversion paths.",
      },
      {
        label: "B2B SEO Strategy Workflow Generator",
        href: "/b2b-seo-strategy/",
        description: "Build a practical B2B SEO workflow from your goals, buyers, and content stage.",
      },
    ],
  },
  {
    label: "Keyword & Content",
    links: [
      {
        label: "B2B Keyword Research Template",
        href: "/b2b-keyword-research-template/",
        description: "Map B2B keywords to commercial, educational, and comparison pages.",
      },
      {
        label: "B2B SEO Brief Generator",
        href: "/b2b-seo-brief-generator/",
        description: "Turn target keywords into usable B2B content briefs.",
      },
      {
        label: "B2B SEO Template Generator",
        href: "/b2b-seo-template/",
        description: "Create a lightweight planning template for SEO execution.",
      },
    ],
  },
  {
    label: "Lead Generation Calculators",
    links: [
      {
        label: "Cost per Lead Calculator",
        href: "/lead-cost-calculator/",
        description: "Calculate cost per lead and cost per qualified lead from your campaigns.",
      },
      {
        label: "ROAS Calculator",
        href: "/roas-calculator/",
        description: "Check how paid campaigns connect spend, revenue, and pipeline efficiency.",
      },
      {
        label: "CPM Calculator",
        href: "/cpm-calculator/",
        description: "Calculate cost per thousand impressions for demand generation campaigns.",
      },
      {
        label: "Website Visitor to Lead Calculator",
        href: "/b2b-lead-generation-calculator/",
        description: "Estimate leads, customers, revenue, and funnel efficiency from traffic.",
      },
    ],
  },
] as const;

const useCaseGroups: readonly NavGroup[] = [
  {
    label: "By Team",
    links: [
      { label: "B2B SaaS Teams", href: "/b2b-seo-strategy/" },
      { label: "B2B Services", href: "/b2b-seo-audit/" },
      { label: "Manufacturers / Exporters", href: "/b2b-seo-kit/" },
      { label: "SEO Consultants & Agencies", href: "/b2b-seo-audit/" },
    ],
  },
  {
    label: "By Goal",
    links: [
      { label: "Generate Qualified Leads", href: "/b2b-lead-generation-calculators/" },
      { label: "Improve Commercial Pages", href: "/b2b-seo-audit/" },
      { label: "Build Internal Links", href: "/b2b-seo-strategy/" },
      { label: "Improve AI Search Visibility", href: "/b2b-seo-kit/" },
    ],
  },
] as const;

const resourceGroups: readonly NavGroup[] = [
  {
    label: "Start Here",
    links: [
      { label: "B2B SEO Kit", href: "/b2b-seo-kit/" },
      { label: "B2B SEO Audit", href: "/b2b-seo-audit/" },
      { label: "B2B SEO Strategy", href: "/b2b-seo-strategy/" },
    ],
  },
  {
    label: "Guides",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "How to Calculate Cost per Lead", href: "/how-to-calculate-cost-per-lead/" },
      { label: "Estimate Leads from Website Traffic", href: "/estimate-leads-from-website-traffic/" },
      { label: "How to Calculate ROAS", href: "/how-to-calculate-roas/" },
      { label: "What Is CPM", href: "/what-is-cpm/" },
    ],
  },
  {
    label: "Calculators",
    links: [
      { label: "Lead Generation Calculators", href: "/b2b-lead-generation-calculators/" },
      { label: "Cost per Lead Calculator", href: "/lead-cost-calculator/" },
      { label: "ROAS Calculator", href: "/roas-calculator/" },
      { label: "CPM Calculator", href: "/cpm-calculator/" },
      { label: "Website Visitor to Lead Calculator", href: "/b2b-lead-generation-calculator/" },
    ],
  },
] as const;

const dropdowns = [
  { id: "tools", label: "Tools", groups: toolsGroups },
  { id: "use-cases", label: "Use Cases", groups: useCaseGroups },
  { id: "resources", label: "Resources", groups: resourceGroups },
] as const;

function DesktopDropdown({
  id,
  label,
  groups,
  active,
  openMenu,
  setOpenMenu,
}: {
  id: (typeof dropdowns)[number]["id"];
  label: string;
  groups: readonly NavGroup[];
  active?: SiteHeaderProps["active"];
  openMenu: string | null;
  setOpenMenu: (menu: string | null) => void;
}) {
  const isOpen = openMenu === id;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
      onFocus={() => setOpenMenu(id)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpenMenu(null);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`desktop-${id}-menu`}
        onClick={() => setOpenMenu(isOpen ? null : id)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpenMenu(null);
          }
        }}
        className={
          active === id
            ? "flex items-center gap-1 font-medium text-slate-900"
            : "flex items-center gap-1 transition-colors hover:text-slate-900"
        }
      >
        {label}
        <span className="text-[10px] text-slate-400">v</span>
      </button>

      <div
        id={`desktop-${id}-menu`}
        className={`absolute top-full pt-3 ${
          id === "resources"
            ? "right-0"
            : id === "use-cases"
              ? "left-1/2 -translate-x-1/2"
              : "left-0"
        } ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        } transition duration-150`}
      >
        <div className="max-h-[76vh] w-[28rem] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
          <div className="grid gap-3">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  {group.label}
                </p>
                <div className="grid gap-1">
                  {group.links.map((link) => (
                    <a
                      key={`${group.label}-${link.label}-${link.href}`}
                      href={link.href}
                      className="rounded-xl p-3 transition-colors hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] focus:outline-none"
                    >
                      <span className="block text-sm font-semibold text-slate-900">
                        {link.label}
                      </span>
                      {link.description ? (
                        <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                          {link.description}
                        </span>
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({
  id,
  label,
  groups,
  activeMobileMenu,
  setActiveMobileMenu,
}: {
  id: (typeof dropdowns)[number]["id"];
  label: string;
  groups: readonly NavGroup[];
  activeMobileMenu: string | null;
  setActiveMobileMenu: (menu: string | null) => void;
}) {
  const isOpen = activeMobileMenu === id;

  return (
    <div className="grid gap-2">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`mobile-${id}-menu`}
        onClick={() => setActiveMobileMenu(isOpen ? null : id)}
        className="flex min-h-11 items-center justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-left text-sm font-semibold text-slate-900"
      >
        {label}
        <span className="text-xs text-slate-400">{isOpen ? "Close" : "Open"}</span>
      </button>

      {isOpen ? (
        <div id={`mobile-${id}-menu`} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-2">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                {group.label}
              </p>
              <div className="grid gap-1">
                {group.links.map((link) => (
                  <a
                    key={`${group.label}-${link.label}-${link.href}`}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-sm transition-colors hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] focus:outline-none"
                  >
                    <span className="block font-semibold text-slate-900">{link.label}</span>
                    {link.description ? (
                      <span className="mt-1 block leading-relaxed text-slate-500">
                        {link.description}
                      </span>
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

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
          {dropdowns.map((dropdown) => (
            <DesktopDropdown
              key={dropdown.id}
              id={dropdown.id}
              label={dropdown.label}
              groups={dropdown.groups}
              active={active}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}

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
            href="/about/"
            className={
              active === "about"
                ? "font-medium text-slate-900"
                : "transition-colors hover:text-slate-900"
            }
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/b2b-seo-audit/"
            className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:inline-block"
          >
            Run Free B2B SEO Audit
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
        <div id="mobile-menu" className="max-h-[calc(100vh-65px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {dropdowns.map((dropdown) => (
              <MobileDropdown
                key={dropdown.id}
                id={dropdown.id}
                label={dropdown.label}
                groups={dropdown.groups}
                activeMobileMenu={activeMobileMenu}
                setActiveMobileMenu={setActiveMobileMenu}
              />
            ))}

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
              href="/about/"
              className={
                active === "about"
                  ? "rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-slate-900"
                  : "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#F8FAFC]"
              }
            >
              About
            </a>
            <a
              href="/b2b-seo-audit/"
              className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Run Free B2B SEO Audit
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
