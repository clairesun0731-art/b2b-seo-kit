import type { Metadata } from "next";
import CalculatorArticlePage, {
  ArticleSection,
  ExampleList,
  FormulaBlock,
} from "@/components/CalculatorArticlePage";

export const metadata: Metadata = {
  title: "How to Calculate Cost per Lead for B2B",
  description:
    "Learn how to calculate cost per lead and cost per qualified lead for B2B campaigns, with formulas, examples, and a practical checklist.",
  alternates: {
    canonical: "https://www.b2bseokit.com/how-to-calculate-cost-per-lead/",
  },
  openGraph: {
    title: "How to Calculate Cost per Lead for B2B",
    description:
      "Learn how to calculate cost per lead and cost per qualified lead for B2B campaigns, with formulas, examples, and a practical checklist.",
    url: "https://www.b2bseokit.com/how-to-calculate-cost-per-lead/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate Cost per Lead for B2B",
    description:
      "Learn how to calculate CPL and qualified lead cost for B2B campaigns.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is cost per lead?",
    answer:
      "Cost per lead is the average amount you spend to generate one lead. It is calculated by dividing total marketing spend by the number of leads generated.",
  },
  {
    question: "What is a good cost per lead for B2B?",
    answer:
      "There is no universal good CPL for B2B. It depends on your industry, ACV, sales cycle, lead quality, channel, and conversion rate from lead to opportunity or customer.",
  },
  {
    question: "How do you calculate cost per qualified lead?",
    answer:
      "Cost per qualified lead is calculated by dividing total marketing spend by the number of qualified leads. This is often more useful than CPL because it focuses on leads that match your qualification criteria.",
  },
  {
    question: "Why is my CPL low but sales results are weak?",
    answer:
      "Your campaign may be attracting poor-fit leads, low-intent leads, or leads that do not match your ICP. Review lead quality, source, landing page intent, and sales qualification notes.",
  },
  {
    question: "Should B2B teams optimize for CPL or cost per qualified lead?",
    answer:
      "B2B teams should track both, but cost per qualified lead is usually the better decision-making metric. CPL shows efficiency. Qualified lead cost shows whether the campaign is attracting useful demand.",
  },
];

export default function CostPerLeadArticlePage() {
  return (
    <CalculatorArticlePage
      schemaId="cost-per-lead-article-faq-schema"
      eyebrow="B2B Lead Cost Guide"
      title="How to Calculate Cost per Lead for B2B Campaigns"
      illustration="lead-cost"
      intro={
        <p>
          Cost per lead is calculated by dividing total marketing spend by the number of leads
          generated. For B2B teams, the more useful view is often cost per qualified lead because
          cheap lead volume does not always become sales pipeline.
        </p>
      }
      topCta={{
        title: "Want to check your own numbers?",
        body: (
          <p>
            Use the free <a className="text-blue-700 hover:underline" href="/lead-cost-calculator/">Lead Cost Calculator</a>{" "}
            to calculate CPL and cost per qualified lead before scaling your next campaign.
          </p>
        ),
        href: "/lead-cost-calculator/",
        label: "Calculate lead cost",
      }}
      bottomCta={{
        title: "Before you scale spend, check lead quality",
        body: (
          <p>
            Compare CPL with qualified lead rate, landing page intent, and sales feedback so your
            team does not optimize for cheap but poor-fit leads.
          </p>
        ),
        href: "/lead-cost-calculator/",
        label: "Use the Lead Cost Calculator",
      }}
      relatedCalculator={{
        title: "B2B Lead Generation Calculator",
        href: "/b2b-lead-generation-calculator/",
        description:
          "Estimate how website traffic turns into leads, customers, revenue, cost per lead, and cost per customer.",
      }}
      relatedTools={[
        { label: "Lead Cost Calculator", href: "/lead-cost-calculator/" },
        {
          label: "Estimate leads, customers, and revenue",
          href: "/b2b-lead-generation-calculator/",
        },
        {
          label: "B2B lead generation calculators",
          href: "/b2b-lead-generation-calculators/",
        },
        { label: "Run a B2B SEO audit", href: "/b2b-seo-audit/" },
      ]}
      faqs={faqs}
    >
      <ArticleSection title="Cost per lead formula">
        <p>Use this formula when you want to understand how efficiently a campaign creates leads:</p>
        <FormulaBlock>Cost per lead = total marketing spend / number of leads</FormulaBlock>
        <p>For example, if you spend $5,000 and generate 80 leads:</p>
        <FormulaBlock>$5,000 / 80 = $62.50 cost per lead</FormulaBlock>
        <p>
          This tells you the average cost of each lead, but it does not tell you whether those
          leads are useful.
        </p>
      </ArticleSection>

      <ArticleSection title="Cost per qualified lead formula">
        <p>
          Use this formula when you want to understand how efficiently a campaign creates leads
          that sales or marketing considers qualified:
        </p>
        <FormulaBlock>
          Cost per qualified lead = total marketing spend / number of qualified leads
        </FormulaBlock>
        <p>If the same $5,000 campaign generates 20 qualified leads:</p>
        <FormulaBlock>$5,000 / 20 = $250 cost per qualified lead</FormulaBlock>
        <p>You can also calculate qualified lead rate:</p>
        <FormulaBlock>Qualified lead rate = qualified leads / total leads</FormulaBlock>
        <ExampleList
          title="Example output"
          items={[
            "80 total leads",
            "20 qualified leads",
            "$62.50 CPL",
            "$250 cost per qualified lead",
            "25% qualified lead rate",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="Why cheap leads can be misleading">
        <p>
          A low cost per lead looks attractive, especially when you are trying to prove that a
          campaign is working. But cheap leads can hide expensive problems.
        </p>
        <p>
          A campaign may generate lots of leads from a broad keyword, gated checklist, giveaway,
          or low-friction form. The CPL may look strong, but sales may find that most leads are
          students, job seekers, vendors, tiny accounts, or companies with no budget.
        </p>
        <p>
          For B2B teams, the better question is: how much did it cost to create a lead that could
          become a real opportunity?
        </p>
      </ArticleSection>

      <ArticleSection title="Lead volume vs MQLs, SQLs, and buyer-fit leads">
        <p>
          Lead volume is the total number of people or companies that submit a form, book a call,
          download an asset, or take another tracked action.
        </p>
        <p>
          MQLs are marketing qualified leads. SQLs are sales qualified leads. Buyer-fit leads match
          the customer profile you actually want, even if they are not ready to buy today.
        </p>
        <p>
          Raw lead volume is the easiest number to inflate. MQLs, SQLs, and buyer-fit leads are
          harder to generate, but they are closer to revenue.
        </p>
      </ArticleSection>

      <ArticleSection title="What can make CPL look high or low">
        <ExampleList
          title="CPL drivers to review"
          items={[
            "Keyword intent: high-intent commercial keywords often cost more but attract buyers closer to a decision.",
            "Audience targeting: narrow B2B audiences usually cost more but may produce better-fit leads.",
            "Landing page fit: weak message match can raise CPL even when traffic quality is strong.",
            "Offer quality: demos, audits, calculators, comparisons, and buying guides usually attract different intent levels.",
            "Form friction: longer forms can reduce lead volume but improve qualification.",
            "Sales follow-up: slow or inconsistent follow-up can make the campaign look worse than it is.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="What to improve first before scaling spend">
        <p>
          Start with landing page intent. A visitor searching for a pricing comparison does not
          need a generic awareness page, while a visitor reading an educational article may not be
          ready for a hard demo CTA.
        </p>
        <p>
          Then review form quality, source and channel performance, and sales qualification notes.
          Compare CPL by channel, campaign, keyword, audience, and landing page instead of relying
          on one blended number.
        </p>
      </ArticleSection>

      <ArticleSection title="Practical CPL checklist for B2B teams">
        <ExampleList
          title="Before judging a campaign by CPL"
          items={[
            "Calculate both cost per lead and cost per qualified lead.",
            "Compare total leads with MQLs, SQLs, and buyer-fit leads.",
            "Review qualified lead rate by channel and landing page.",
            "Check whether the offer attracts the right audience.",
            "Compare lead quality across keywords, campaigns, and traffic sources.",
            "Improve the landing page, CTA, and form before scaling budget.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="How CPL connects to B2B SEO and lead generation">
        <p>
          CPL should not be treated as a paid media metric only. Organic search can also produce
          leads, qualified leads, and pipeline.
        </p>
        <p>
          If SEO content brings in traffic but does not connect to commercial pages, internal links,
          product-led CTAs, or lead capture paths, traffic reports can look healthy while revenue
          impact stays weak.
        </p>
        <p>
          Use the <a className="text-blue-700 hover:underline" href="/lead-cost-calculator/">Lead Cost Calculator</a>{" "}
          to calculate CPL and qualified lead cost, then use the{" "}
          <a className="text-blue-700 hover:underline" href="/b2b-lead-generation-calculator/">B2B Lead Generation Calculator</a>{" "}
          to estimate how traffic turns into leads, customers, and revenue.
        </p>
      </ArticleSection>
    </CalculatorArticlePage>
  );
}
