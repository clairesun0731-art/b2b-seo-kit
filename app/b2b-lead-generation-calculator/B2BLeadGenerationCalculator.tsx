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

function diagnose(visitorToLeadRate: number, leadToCustomerRate: number, costPerLead: number) {
  if (!visitorToLeadRate || !leadToCustomerRate) {
    return {
      diagnosis: "Add traffic, conversion rates, spend, and deal value to estimate the lead funnel.",
      improveFirst:
        "Start with the visitor-to-lead conversion rate and make sure key pages have clear CTAs.",
    };
  }

  if (visitorToLeadRate < 0.01) {
    return {
      diagnosis:
        "Traffic is not turning into enough leads. This usually points to weak CTA paths, thin commercial pages, or mismatched search intent.",
      improveFirst:
        "Improve landing page CTAs, add proof near forms, and link educational content to product or service pages.",
    };
  }

  if (leadToCustomerRate < 0.05) {
    return {
      diagnosis:
        "Lead volume may be acceptable, but too few leads are becoming customers. Lead quality, offer fit, or sales handoff likely needs attention.",
      improveFirst:
        "Tighten buyer-intent keywords, qualify forms, and review which pages generate sales-ready leads.",
    };
  }

  if (costPerLead > 250) {
    return {
      diagnosis:
        "The funnel can work, but cost per lead is high enough that commercial page quality and deal value need close review.",
      improveFirst:
        "Audit your highest-spend landing pages and prioritize pages that can generate qualified leads, not just traffic.",
    };
  }

  return {
    diagnosis:
      "The funnel has a workable shape. The next gains will likely come from improving lead quality and conversion paths on priority pages.",
    improveFirst:
      "Map high-intent keywords to commercial pages, strengthen internal links, and track qualified leads by landing page.",
  };
}

export default function B2BLeadGenerationCalculator() {
  const [traffic, setTraffic] = useState("5000");
  const [visitorToLead, setVisitorToLead] = useState("2");
  const [leadToCustomer, setLeadToCustomer] = useState("10");
  const [dealValue, setDealValue] = useState("8000");
  const [spend, setSpend] = useState("6000");

  const result = useMemo(() => {
    const monthlyTraffic = parseNumber(traffic);
    const visitorToLeadRate = parseNumber(visitorToLead) / 100;
    const leadToCustomerRate = parseNumber(leadToCustomer) / 100;
    const averageDealValue = parseNumber(dealValue);
    const marketingSpend = parseNumber(spend);
    const leads = monthlyTraffic * visitorToLeadRate;
    const customers = leads * leadToCustomerRate;
    const revenue = customers * averageDealValue;
    const costPerLead = leads > 0 ? marketingSpend / leads : 0;
    const costPerCustomer = customers > 0 ? marketingSpend / customers : 0;
    const diagnosis = diagnose(visitorToLeadRate, leadToCustomerRate, costPerLead);

    return {
      monthlyTraffic,
      visitorToLeadRate,
      leadToCustomerRate,
      averageDealValue,
      marketingSpend,
      leads,
      customers,
      revenue,
      costPerLead,
      costPerCustomer,
      ...diagnosis,
    };
  }, [dealValue, leadToCustomer, spend, traffic, visitorToLead]);

  return (
    <section id="calculator" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Free Calculator
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Estimate leads, customers, revenue, and acquisition cost
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Model a simple B2B lead generation funnel from traffic to customers. Use it to see
            whether your biggest gap is traffic, conversion rate, lead quality, or cost.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-5">
              {[
                {
                  label: "Monthly website traffic",
                  value: traffic,
                  setValue: setTraffic,
                  suffix: "visits",
                },
                {
                  label: "Visitor-to-lead conversion rate",
                  value: visitorToLead,
                  setValue: setVisitorToLead,
                  suffix: "%",
                },
                {
                  label: "Lead-to-customer conversion rate",
                  value: leadToCustomer,
                  setValue: setLeadToCustomer,
                  suffix: "%",
                },
                {
                  label: "Average deal value",
                  value: dealValue,
                  setValue: setDealValue,
                  prefix: "$",
                },
                {
                  label: "Monthly marketing spend",
                  value: spend,
                  setValue: setSpend,
                  prefix: "$",
                },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {field.label}
                  </span>
                  <div className="flex rounded-2xl border border-slate-200 bg-white focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50">
                    {"prefix" in field && field.prefix ? (
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
                    {"suffix" in field && field.suffix ? (
                      <span className="flex items-center border-l border-slate-200 px-4 text-sm font-semibold text-slate-400">
                        {field.suffix}
                      </span>
                    ) : null}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Funnel Output
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Estimated monthly leads", number(result.leads)],
                ["Estimated customers", number(result.customers)],
                ["Estimated revenue", currency(result.revenue)],
                ["Cost per lead", currency(result.costPerLead)],
                ["Cost per customer", currency(result.costPerCustomer)],
                ["Marketing spend", currency(result.marketingSpend)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Simple diagnosis</h3>
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
