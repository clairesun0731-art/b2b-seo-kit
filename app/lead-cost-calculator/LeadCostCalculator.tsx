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
    maximumFractionDigits: 1,
  }).format(value);
}

function getInterpretation(costPerLead: number, costPerQualifiedLead: number | null) {
  if (!costPerLead) {
    return {
      diagnosis: "Add spend and lead numbers to see your lead cost.",
      nextStep: "Start by separating all leads from qualified leads so the number reflects lead quality.",
    };
  }

  if (costPerQualifiedLead && costPerQualifiedLead > costPerLead * 3) {
    return {
      diagnosis:
        "Your cost per lead may look workable, but qualified leads are much more expensive. This usually means the channel is creating volume without enough buyer fit.",
      nextStep:
        "Review form quality, landing page intent, and sales qualification notes before scaling spend.",
    };
  }

  if (costPerLead < 50) {
    return {
      diagnosis:
        "Your cost per lead is relatively low for many B2B channels. The next question is whether those leads match your target buyer and convert to pipeline.",
      nextStep:
        "Check qualified lead rate, demo or consultation rate, and lead source quality before increasing budget.",
    };
  }

  if (costPerLead <= 200) {
    return {
      diagnosis:
        "Your cost per lead is in a common B2B planning range. It can be healthy if the leads are qualified and average deal value supports the spend.",
      nextStep:
        "Improve the pages and CTAs that generate leads, then compare cost per qualified lead by channel.",
    };
  }

  return {
    diagnosis:
      "Your cost per lead is high enough that lead quality and conversion rate matter more than raw volume.",
    nextStep:
      "Audit landing pages, tighten buyer-intent keywords, and track qualified leads before adding more budget.",
  };
}

export default function LeadCostCalculator() {
  const [spend, setSpend] = useState("5000");
  const [leads, setLeads] = useState("80");
  const [qualifiedLeads, setQualifiedLeads] = useState("20");

  const result = useMemo(() => {
    const marketingSpend = parseNumber(spend);
    const leadCount = parseNumber(leads);
    const qualifiedLeadCount = parseNumber(qualifiedLeads);
    const costPerLead = leadCount > 0 ? marketingSpend / leadCount : 0;
    const costPerQualifiedLead =
      qualifiedLeadCount > 0 ? marketingSpend / qualifiedLeadCount : null;
    const qualifiedRate = leadCount > 0 && qualifiedLeadCount > 0 ? qualifiedLeadCount / leadCount : 0;
    const interpretation = getInterpretation(costPerLead, costPerQualifiedLead);

    return {
      marketingSpend,
      leadCount,
      qualifiedLeadCount,
      costPerLead,
      costPerQualifiedLead,
      qualifiedRate,
      ...interpretation,
    };
  }, [spend, leads, qualifiedLeads]);

  return (
    <section id="calculator" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Free Calculator
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Calculate cost per lead and qualified lead
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Enter your spend and lead numbers. Use qualified leads when you have them, because
            B2B lead generation should be judged by fit, not form fills alone.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-5">
              {[
                {
                  label: "Total marketing spend",
                  value: spend,
                  setValue: setSpend,
                  prefix: "$",
                  helper: "Use monthly spend, campaign spend, or total channel spend.",
                },
                {
                  label: "Number of leads",
                  value: leads,
                  setValue: setLeads,
                  prefix: "",
                  helper: "Use all leads generated from the same spend period.",
                },
                {
                  label: "Number of qualified leads",
                  value: qualifiedLeads,
                  setValue: setQualifiedLeads,
                  prefix: "",
                  helper: "Optional, but useful for B2B teams measuring lead quality.",
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
              Calculator Output
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Cost per lead
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.costPerLead)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Cost per qualified lead
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {result.costPerQualifiedLead ? currency(result.costPerQualifiedLead) : "Add QLs"}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Qualified lead rate
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {result.qualifiedRate ? `${number(result.qualifiedRate * 100)}%` : "0%"}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Spend reviewed
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {currency(result.marketingSpend)}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Simple interpretation
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">{result.diagnosis}</p>
              <h3 className="mb-2 mt-4 text-base font-semibold text-slate-900">
                Recommended next step
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">{result.nextStep}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
