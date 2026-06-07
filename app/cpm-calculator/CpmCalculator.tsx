"use client";

import { useMemo, useState } from "react";

function parseNumber(value: string) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

function currency(value: number) {
  if (!Number.isFinite(value) || value <= 0) {
    return "$0";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value);
}

function number(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function diagnose(cpm: number) {
  if (!cpm) {
    return {
      diagnosis: "Add ad spend and impressions to calculate CPM.",
      improveFirst:
        "Use spend and impression data from the same campaign period so the number is comparable.",
    };
  }

  if (cpm < 20) {
    return {
      diagnosis:
        "CPM is relatively low. That can be useful for awareness, but B2B teams still need to check whether the audience is relevant.",
      improveFirst:
        "Compare CPM with click quality, landing page engagement, and cost per lead before scaling reach.",
    };
  }

  if (cpm <= 80) {
    return {
      diagnosis:
        "CPM is in a workable range for many B2B awareness and demand generation campaigns if the audience is specific enough.",
      improveFirst:
        "Review which audiences and creatives create qualified visits, not just cheap impressions.",
    };
  }

  return {
    diagnosis:
      "CPM is high enough that audience quality and conversion paths need close review before adding budget.",
    improveFirst:
      "Tighten targeting, improve creative relevance, and connect awareness campaigns to a clear landing page and retargeting path.",
  };
}

export default function CpmCalculator() {
  const [adSpend, setAdSpend] = useState("3000");
  const [impressions, setImpressions] = useState("150000");

  const result = useMemo(() => {
    const spend = parseNumber(adSpend);
    const impressionCount = parseNumber(impressions);
    const cpm = impressionCount > 0 ? (spend / impressionCount) * 1000 : 0;
    const costPerImpression = impressionCount > 0 ? spend / impressionCount : 0;
    const diagnosis = diagnose(cpm);

    return {
      spend,
      impressionCount,
      cpm,
      costPerImpression,
      ...diagnosis,
    };
  }, [adSpend, impressions]);

  return (
    <section id="calculator" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Free Calculator
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Calculate cost per thousand impressions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Use CPM to compare awareness and demand generation campaigns. Then connect the result
            to ROAS, lead cost, and landing page conversion quality.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-5">
              {[
                {
                  label: "Advertising cost",
                  value: adSpend,
                  setValue: setAdSpend,
                  prefix: "$",
                  helper: "Use campaign spend or monthly spend.",
                },
                {
                  label: "Impressions",
                  value: impressions,
                  setValue: setImpressions,
                  prefix: "",
                  helper: "Use total impressions from the same period.",
                },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {field.label}
                  </span>
                  <div className="flex rounded-2xl border border-slate-200 bg-white focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50">
                    {field.prefix ? (
                      <span className="flex items-center border-r border-slate-200 px-4 text-sm font-semibold text-slate-400">
                        {field.prefix}
                      </span>
                    ) : null}
                    <input
                      type="number"
                      min="0"
                      inputMode="decimal"
                      value={field.value}
                      onChange={(event) => field.setValue(event.target.value)}
                      className="w-full rounded-2xl px-4 py-3 text-sm font-medium text-slate-900 outline-none"
                    />
                  </div>
                  <span className="mt-2 block text-xs leading-relaxed text-slate-500">
                    {field.helper}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
              CPM Output
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  CPM
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.cpm)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Cost per impression
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.costPerImpression)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Impressions
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {number(result.impressionCount)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Spend reviewed
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.spend)}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Simple interpretation
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">{result.diagnosis}</p>
              <h3 className="mb-2 mt-4 text-base font-semibold text-slate-900">
                What to improve first
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">{result.improveFirst}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
