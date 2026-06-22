import type { Metadata } from "next";
import CalculatorArticlePage, {
  ArticleSection,
  ExampleList,
  FormulaBlock,
} from "@/components/CalculatorArticlePage";

export const metadata: Metadata = {
  title: "What Is CPM? Guide for B2B Teams",
  description:
    "Learn what CPM means, how to calculate CPM, and how B2B teams should use it alongside leads, ROAS, and revenue.",
  alternates: {
    canonical: "https://www.b2bseokit.com/what-is-cpm/",
  },
  openGraph: {
    title: "What Is CPM? Guide for B2B Teams",
    description:
      "Learn what CPM means, how to calculate CPM, and how B2B teams should use it alongside leads, ROAS, and revenue.",
    url: "https://www.b2bseokit.com/what-is-cpm/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is CPM? Guide for B2B Teams",
    description:
      "Learn what CPM means, how to calculate CPM, and how B2B teams should use it.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "What is CPM?",
    answer:
      "CPM means cost per thousand impressions. It measures how much you pay for 1,000 ad impressions.",
  },
  {
    question: "How do you calculate CPM?",
    answer:
      "Use the formula: CPM = ad spend / impressions x 1,000. If you spend $3,000 for 150,000 impressions, CPM is $20.",
  },
  {
    question: "Is a low CPM always good?",
    answer:
      "No. A low CPM can mean cheap reach, but it may also mean you are reaching a broad or poor-fit audience that does not create qualified demand.",
  },
  {
    question: "Is a high CPM bad for B2B campaigns?",
    answer:
      "Not always. A high CPM may be acceptable if the campaign reaches a specific, high-value audience and supports qualified leads, pipeline, or revenue.",
  },
  {
    question: "What should B2B teams compare CPM with?",
    answer:
      "B2B teams should review CPM with clicks, landing page visits, CTR, leads, qualified leads, cost per lead, ROAS, and revenue.",
  },
  {
    question: "When should B2B teams use CPM?",
    answer:
      "CPM is useful for brand awareness, display campaigns, LinkedIn Ads, retargeting, demand generation, cold market testing, and campaign planning.",
  },
];

export default function WhatIsCpmPage() {
  return (
    <CalculatorArticlePage
      schemaId="what-is-cpm-faq-schema"
      eyebrow="B2B Paid Metrics Guide"
      title="What Is CPM and How Should B2B Teams Use It?"
      illustration="cpm"
      intro={
        <p>
          CPM means cost per thousand impressions. It measures how much you pay for 1,000 ad
          impressions. CPM is useful for awareness and planning, but B2B teams should connect it
          to clicks, leads, ROAS, and revenue before judging performance.
        </p>
      }
      topCta={{
        title: "Want to calculate your own impression cost?",
        body: (
          <p>
            Use the free <a className="text-blue-700 hover:underline" href="/cpm-calculator/">CPM Calculator</a>, then compare
            the result with lead cost and ROAS before judging campaign performance.
          </p>
        ),
        href: "/cpm-calculator/",
        label: "Calculate CPM",
      }}
      bottomCta={{
        title: "Do not judge CPM without business context",
        body: (
          <p>
            Compare impression efficiency with lead cost, ROAS, and funnel assumptions so cheap
            reach does not get mistaken for qualified demand.
          </p>
        ),
        href: "/b2b-lead-generation-calculators/",
        label: "Explore B2B lead generation calculators",
      }}
      relatedCalculator={{
        title: "ROAS Calculator",
        href: "/roas-calculator/",
        description:
          "Compare impression efficiency with revenue efficiency so CPM does not get judged without business context.",
      }}
      relatedTools={[
        { label: "CPM Calculator", href: "/cpm-calculator/" },
        { label: "Compare ROAS", href: "/roas-calculator/" },
        { label: "Calculate cost per lead", href: "/lead-cost-calculator/" },
        {
          label: "B2B lead generation calculators",
          href: "/b2b-lead-generation-calculators/",
        },
      ]}
      faqs={faqs}
    >
      <ArticleSection title="What does CPM mean?">
        <p>
          CPM stands for cost per thousand impressions. An impression is counted when an ad is
          shown.
        </p>
        <p>
          CPM helps you understand how expensive it is to reach an audience. It is commonly used in
          display campaigns, LinkedIn Ads, programmatic advertising, retargeting, and awareness
          campaigns.
        </p>
        <p>
          CPM does not tell you whether people clicked, visited your site, became leads, matched
          your ICP, or turned into customers. It only tells you the cost of visibility.
        </p>
      </ArticleSection>

      <ArticleSection title="CPM formula">
        <FormulaBlock>CPM = ad spend / impressions x 1,000</FormulaBlock>
        <p>To find cost per impression, divide ad spend by impressions:</p>
        <FormulaBlock>Cost per impression = ad spend / impressions</FormulaBlock>
      </ArticleSection>

      <ArticleSection title="CPM example">
        <ExampleList
          title="Assumptions"
          items={["$3,000 advertising cost", "150,000 impressions"]}
        />
        <FormulaBlock>$3,000 / 150,000 x 1,000 = $20.00 CPM</FormulaBlock>
        <FormulaBlock>$3,000 / 150,000 = $0.02 per impression</FormulaBlock>
        <p>
          This means the campaign costs $20 for every 1,000 ad impressions, or two cents per
          impression.
        </p>
      </ArticleSection>

      <ArticleSection title="When CPM is useful">
        <p>CPM is useful when visibility is part of the campaign goal.</p>
        <ExampleList
          title="B2B CPM use cases"
          items={[
            "Brand awareness",
            "Display campaigns",
            "LinkedIn Ads",
            "Retargeting",
            "Demand generation",
            "Cold market testing",
            "Audience and creative comparisons",
            "Budget planning",
          ]}
        />
        <p>
          CPM should answer one narrow question: how much does it cost to reach this audience? It
          should not answer whether the campaign is creating pipeline.
        </p>
      </ArticleSection>

      <ArticleSection title="Why CPM should be reviewed with other metrics">
        <p>CPM becomes more useful when it is reviewed with downstream performance.</p>
        <ExampleList
          title="Review CPM alongside"
          items={[
            "Clicks",
            "Landing page visits",
            "CTR",
            "Leads",
            "Qualified leads",
            "Cost per lead",
            "ROAS",
            "Revenue",
          ]}
        />
        <p>
          Use the <a className="text-blue-700 hover:underline" href="/cpm-calculator/">CPM Calculator</a>{" "}
          to calculate impression cost, then compare the result with the{" "}
          <a className="text-blue-700 hover:underline" href="/lead-cost-calculator/">Lead Cost Calculator</a>{" "}
          and <a className="text-blue-700 hover:underline" href="/roas-calculator/">ROAS Calculator</a>.
        </p>
      </ArticleSection>

      <ArticleSection title="When a low CPM is actually a bad sign">
        <p>
          Low CPM may mean you are reaching a broad audience that is easy to buy but not relevant
          to your business. This can happen when targeting is too loose, placements are low quality,
          geography is too broad, or the audience has little buying potential.
        </p>
        <ExampleList
          title="Before celebrating low CPM, ask"
          items={[
            "Are we reaching the right companies?",
            "Are we reaching the right roles?",
            "Are impressions turning into engaged visits?",
            "Are visits turning into leads or retargeting audiences?",
            "Are leads qualified?",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="When a high CPM may still be acceptable">
        <p>
          Some B2B audiences are expensive to reach because they are narrow, senior, technical, or
          high value. A higher CPM may be acceptable if it reaches the right buyers and supports
          qualified demand.
        </p>
        <ExampleList
          title="High CPM can be acceptable when"
          items={[
            "The audience closely matches your ICP.",
            "The campaign supports high-value accounts.",
            "The creative is relevant to a specific buyer problem.",
            "Landing page visits are engaged.",
            "Retargeting audiences are growing.",
            "Leads are qualified.",
            "Opportunities or revenue justify the spend.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="What to improve first">
        <p>
          If CPM looks too high or too low, do not judge it in isolation. Review audience targeting,
          creative relevance, offer clarity, landing page message match, frequency, and follow-up
          paths.
        </p>
        <p>
          If you are planning multiple campaigns, the{" "}
          <a className="text-blue-700 hover:underline" href="/b2b-lead-generation-calculators/">B2B Lead Generation Calculators hub</a>{" "}
          can help compare CPM, CPL, ROAS, and funnel assumptions.
        </p>
      </ArticleSection>
    </CalculatorArticlePage>
  );
}
