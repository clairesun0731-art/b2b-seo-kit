"use client";

import { useMemo, useState } from "react";

function parseNumber(value: string) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

function currency(value: number) {
  if (!Number.isFinite(value)) {
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
    maximumFractionDigits: 2,
  }).format(value);
}

function percent(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function diagnose(roas: number, profit: number) {
  if (!roas) {
    return {
      diagnosis: "Add ad spend and revenue to calculate ROAS.",
      improveFirst:
        "Start by separating campaign revenue from total company revenue so the number reflects the paid channel.",
    };
  }

  if (roas < 1) {
    return {
      diagnosis:
        "Revenue is lower than ad spend. For B2B campaigns, this may still be early pipeline, but the campaign needs close review before scaling.",
      improveFirst:
        "Review lead quality, landing page fit, and sales follow-up before adding budget.",
    };
  }

  if (roas < 3) {
    return {
      diagnosis:
        "ROAS is positive but may be tight after sales costs, tools, and delivery costs. The campaign needs better lead quality or stronger conversion paths.",
      improveFirst:
        "Improve buyer-intent targeting, proof near CTAs, and follow-up from high-intent landing pages.",
    };
  }

  if (profit > 0) {
    return {
      diagnosis:
        "ROAS looks workable. The next question is whether the campaign is producing qualified pipeline, not only attributed revenue.",
      improveFirst:
        "Compare ROAS with cost per lead and cost per customer so paid campaigns support real pipeline growth.",
    };
  }

  return {
    diagnosis: "ROAS needs more context before making a budget decision.",
    improveFirst: "Check attribution, deal value, and lead quality before scaling paid spend.",
  };
}

export default function RoasCalculator() {
  const [adSpend, setAdSpend] = useState("5000");
  const [revenue, setRevenue] = useState("20000");

  const result = useMemo(() => {
    const spend = parseNumber(adSpend);
    const campaignRevenue = parseNumber(revenue);
    const roas = spend > 0 ? campaignRevenue / spend : 0;
    const roasPercent = roas * 100;
    const profit = campaignRevenue - spend;
    const diagnosis = diagnose(roas, profit);

    return {
      spend,
      campaignRevenue,
      roas,
      roasPercent,
      profit,
      ...diagnosis,
    };
  }, [adSpend, revenue]);

  return (
    <section id="calculator" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Free Calculator
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Calculate return on ad spend
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Enter advertising cost and attributed revenue. Use the result with CPL and lead
            quality so paid campaigns are judged by pipeline, not clicks alone.
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
                  helper: "Use monthly ad spend or spend for one campaign.",
                },
                {
                  label: "Attributed revenue",
                  value: revenue,
                  setValue: setRevenue,
                  helper: "Use revenue attributed to the same campaign period.",
                },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {field.label}
                  </span>
                  <div className="flex rounded-2xl border border-slate-200 bg-white focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50">
                    <span className="flex items-center border-r border-slate-200 px-4 text-sm font-semibold text-slate-400">
                      $
                    </span>
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
              ROAS Output
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  ROAS
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {number(result.roas)}x
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  ROAS percentage
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {percent(result.roasPercent)}%
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Revenue
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.campaignRevenue)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Revenue minus spend
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.profit)}
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
