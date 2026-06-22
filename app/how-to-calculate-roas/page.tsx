import type { Metadata } from "next";
import CalculatorArticlePage, {
  ArticleSection,
  ExampleList,
  FormulaBlock,
} from "@/components/CalculatorArticlePage";

export const metadata: Metadata = {
  title: "How to Calculate ROAS for B2B Google Ads",
  description:
    "Learn how to calculate ROAS for B2B Google Ads, why ROAS can be misleading, and what to check before scaling spend.",
  alternates: {
    canonical: "https://www.b2bseokit.com/how-to-calculate-roas/",
  },
  openGraph: {
    title: "How to Calculate ROAS for B2B Google Ads",
    description:
      "Learn how to calculate ROAS for B2B Google Ads, why ROAS can be misleading, and what to check before scaling spend.",
    url: "https://www.b2bseokit.com/how-to-calculate-roas/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate ROAS for B2B Google Ads",
    description:
      "Calculate ROAS for B2B Google Ads and review it with lead quality before scaling spend.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "How do you calculate ROAS?",
    answer:
      "ROAS is calculated by dividing attributed revenue by advertising cost. If you spend $5,000 and attribute $20,000 in revenue, ROAS is 4x.",
  },
  {
    question: "What does 400% ROAS mean?",
    answer:
      "400% ROAS means the campaign generated $4 in attributed revenue for every $1 spent on advertising.",
  },
  {
    question: "Is ROAS the same as ROI?",
    answer:
      "No. ROAS compares revenue with ad spend. ROI compares profit with total investment. ROI usually includes more costs than ROAS.",
  },
  {
    question: "Why is ROAS harder to measure in B2B?",
    answer:
      "B2B deals often involve longer sales cycles, multiple stakeholders, delayed revenue, CRM attribution gaps, and offline sales conversations.",
  },
  {
    question: "Should I scale a campaign with high ROAS?",
    answer:
      "Not automatically. First review conversion tracking, lead quality, cost per qualified lead, landing page intent, sales follow-up, CRM attribution, and cost per customer.",
  },
];

export default function HowToCalculateRoasPage() {
  return (
    <CalculatorArticlePage
      schemaId="how-to-calculate-roas-faq-schema"
      eyebrow="B2B Paid Campaign Guide"
      title="How to Calculate ROAS for B2B Google Ads"
      illustration="roas"
      intro={
        <p>
          ROAS is calculated by dividing attributed revenue by advertising cost. For B2B teams,
          ROAS is useful, but it should be reviewed with lead quality, pipeline, CRM attribution,
          and sales outcomes.
        </p>
      }
      topCta={{
        title: "Want to check your paid campaign numbers?",
        body: (
          <p>
            Use the free <a className="text-blue-700 hover:underline" href="/roas-calculator/">ROAS Calculator</a>{" "}
            and compare the result with CPL and lead quality before scaling spend.
          </p>
        ),
        href: "/roas-calculator/",
        label: "Calculate ROAS",
      }}
      bottomCta={{
        title: "Review ROAS with the full funnel",
        body: (
          <p>
            ROAS alone can hide lead quality and sales-cycle issues. Estimate traffic, leads,
            customers, and revenue before increasing budget.
          </p>
        ),
        href: "/b2b-lead-generation-calculator/",
        label: "Estimate leads, customers, and revenue",
      }}
      relatedCalculator={{
        title: "Lead Cost Calculator",
        href: "/lead-cost-calculator/",
        description:
          "Calculate CPL and cost per qualified lead so ROAS is reviewed alongside lead quality, not just attributed revenue.",
      }}
      relatedTools={[
        { label: "ROAS Calculator", href: "/roas-calculator/" },
        { label: "Calculate cost per lead", href: "/lead-cost-calculator/" },
        {
          label: "Estimate leads, customers, and revenue",
          href: "/b2b-lead-generation-calculator/",
        },
        {
          label: "B2B lead generation calculators",
          href: "/b2b-lead-generation-calculators/",
        },
      ]}
      faqs={faqs}
    >
      <ArticleSection title="ROAS formula">
        <p>Use this formula:</p>
        <FormulaBlock>ROAS = attributed revenue / advertising cost</FormulaBlock>
        <p>If you want the percentage:</p>
        <FormulaBlock>ROAS percentage = ROAS x 100</FormulaBlock>
        <p>ROAS shows how much attributed revenue you generated for each dollar of ad spend.</p>
      </ArticleSection>

      <ArticleSection title="ROAS example">
        <ExampleList
          title="Assumptions"
          items={["$5,000 advertising cost", "$20,000 attributed revenue"]}
        />
        <FormulaBlock>$20,000 / $5,000 = 4x ROAS</FormulaBlock>
        <FormulaBlock>4 x 100 = 400% ROAS</FormulaBlock>
        <FormulaBlock>$20,000 - $5,000 = $15,000</FormulaBlock>
        <p>The campaign generated $4 in attributed revenue for every $1 spent on ads.</p>
      </ArticleSection>

      <ArticleSection title="ROAS vs ROI">
        <p>
          ROAS compares revenue to ad spend. It answers: how much revenue did we attribute to this
          advertising cost?
        </p>
        <p>
          ROI compares profit to total investment. It can include cost of goods, sales costs,
          agency fees, software, discounts, implementation costs, and other expenses.
        </p>
        <p>
          For B2B campaigns, ROAS is a useful signal, but ROI gives a fuller picture when you have
          enough cost and margin data.
        </p>
      </ArticleSection>

      <ArticleSection title="Why B2B ROAS is harder to measure than ecommerce ROAS">
        <p>
          Ecommerce ROAS can be easier because someone clicks an ad, buys a product, and revenue is
          recorded quickly. B2B sales rarely work that neatly.
        </p>
        <ExampleList
          title="Common B2B ROAS challenges"
          items={[
            "Long sales cycles delay revenue.",
            "Multiple stakeholders influence the buying process.",
            "Revenue may be recorded long after the first conversion.",
            "CRM attribution may not match ad platform attribution.",
            "Offline sales conversations may not be captured in campaign reports.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="Why Google Ads ROAS can be misleading for B2B">
        <p>
          ROAS can look weak when a campaign creates qualified leads that have not closed yet. If
          your sales cycle is 90 days, a 30-day report may undervalue the campaign.
        </p>
        <p>
          ROAS can also look strong when attribution gives revenue credit to a campaign that did
          not create the original demand, such as branded search. It can also hide poor-fit leads.
        </p>
      </ArticleSection>

      <ArticleSection title="What to check before increasing spend">
        <ExampleList
          title="Before scaling a B2B Google Ads campaign"
          items={[
            "Conversion tracking: are forms, meetings, calls, and key events tracked correctly?",
            "Lead quality: are leads from the right company sizes, industries, roles, and use cases?",
            "Landing page intent: does the page match the keyword and ad promise?",
            "Cost per qualified lead: are you measuring qualified leads, not only conversions?",
            "Sales follow-up: are qualified leads contacted quickly and consistently?",
            "CRM attribution: does revenue connect back to campaign, keyword, ad group, and landing page?",
            "Cost per customer: does the campaign make sense after close rate and acquisition cost?",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="ROAS review checklist">
        <ExampleList
          title="Use this checklist before judging ROAS"
          items={[
            "Calculate ROAS using attributed revenue and ad spend.",
            "Compare ROAS across campaigns, not only the whole account.",
            "Separate branded, competitor, commercial, and informational campaigns.",
            "Check lead quality by keyword, ad group, and landing page.",
            "Calculate cost per lead and cost per qualified lead.",
            "Review CRM attribution and closed-won revenue.",
            "Check whether pipeline is still open before judging short-term ROAS.",
            "Compare ROAS with cost per customer and average deal value.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="How ROAS fits into B2B campaign planning">
        <p>
          ROAS can help you understand paid campaign efficiency, but it should not decide budget
          alone. A better planning model connects ad spend, leads, qualified leads, sales
          opportunities, customers, revenue, and time to close.
        </p>
        <p>
          Use the <a className="text-blue-700 hover:underline" href="/b2b-lead-generation-calculator/">B2B Lead Generation Calculator</a>{" "}
          to estimate how traffic and leads may turn into customers and revenue. Then use the{" "}
          <a className="text-blue-700 hover:underline" href="/roas-calculator/">ROAS Calculator</a>{" "}
          to review paid efficiency.
        </p>
      </ArticleSection>
    </CalculatorArticlePage>
  );
}
