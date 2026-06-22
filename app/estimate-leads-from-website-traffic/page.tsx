import type { Metadata } from "next";
import CalculatorArticlePage, {
  ArticleSection,
  ExampleList,
  FormulaBlock,
} from "@/components/CalculatorArticlePage";

export const metadata: Metadata = {
  title: "How to Estimate Leads from Website Traffic",
  description:
    "Learn how to estimate B2B leads, customers, revenue, cost per lead, and cost per customer from website traffic.",
  alternates: {
    canonical: "https://www.b2bseokit.com/estimate-leads-from-website-traffic/",
  },
  openGraph: {
    title: "How to Estimate Leads from Website Traffic",
    description:
      "Learn how to estimate B2B leads, customers, revenue, cost per lead, and cost per customer from website traffic.",
    url: "https://www.b2bseokit.com/estimate-leads-from-website-traffic/",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Estimate Leads from Website Traffic",
    description:
      "Estimate B2B leads, customers, revenue, CPL, and cost per customer from website traffic.",
    images: ["/logo.webp"],
  },
};

const faqs = [
  {
    question: "How do you estimate leads from website traffic?",
    answer:
      "Multiply website traffic by your visitor-to-lead conversion rate. For example, 5,000 visits at a 2% conversion rate equals 100 leads.",
  },
  {
    question: "What is a good visitor-to-lead conversion rate for B2B?",
    answer:
      "There is no universal benchmark. It depends on industry, traffic source, page type, offer, sales cycle, ACV, and buyer readiness.",
  },
  {
    question: "Why is my B2B website getting traffic but no leads?",
    answer:
      "Common reasons include low-intent traffic, weak CTAs, unclear offers, poor landing page fit, too much form friction, or content that does not guide visitors toward a next step.",
  },
  {
    question: "Should I estimate customers as well as leads?",
    answer:
      "Yes. Leads are useful, but customers and revenue make the estimate more practical. A lead estimate becomes more valuable when paired with lead-to-customer conversion rate and average deal value.",
  },
  {
    question: "How can SEO support B2B lead generation?",
    answer:
      "SEO supports B2B lead generation by attracting relevant visitors, connecting educational content to commercial pages, strengthening internal links, and giving buyers clear conversion paths.",
  },
];

export default function EstimateLeadsFromTrafficPage() {
  return (
    <CalculatorArticlePage
      schemaId="estimate-leads-from-traffic-faq-schema"
      eyebrow="B2B Funnel Estimate"
      title="How to Estimate B2B Leads from Website Traffic"
      illustration="lead-generation"
      intro={
        <p>
          To estimate leads from website traffic, multiply your traffic by your visitor-to-lead
          conversion rate. For B2B teams, the estimate becomes more useful when you continue the
          funnel from traffic to leads, customers, and revenue.
        </p>
      }
      topCta={{
        title: "Want to model your own funnel?",
        body: (
          <p>
            Use the free{" "}
            <a className="text-blue-700 hover:underline" href="/b2b-lead-generation-calculator/">B2B Lead Generation Calculator</a>{" "}
            to estimate leads, customers, revenue, cost per lead, and cost per customer.
          </p>
        ),
        href: "/b2b-lead-generation-calculator/",
        label: "Estimate your lead funnel",
      }}
      bottomCta={{
        title: "Turn the estimate into an SEO workflow",
        body: (
          <p>
            If traffic is not becoming qualified leads, use the strategy workflow to plan page
            fixes, internal links, CTAs, and conversion tracking.
          </p>
        ),
        href: "/b2b-seo-strategy/",
        label: "Plan a B2B SEO strategy",
      }}
      relatedCalculator={{
        title: "Lead Cost Calculator",
        href: "/lead-cost-calculator/",
        description:
          "Calculate CPL and cost per qualified lead so you can compare traffic growth with lead quality and acquisition cost.",
      }}
      relatedTools={[
        { label: "B2B Lead Generation Calculator", href: "/b2b-lead-generation-calculator/" },
        { label: "Calculate cost per lead", href: "/lead-cost-calculator/" },
        { label: "Plan a B2B SEO strategy", href: "/b2b-seo-strategy/" },
        { label: "Audit B2B SEO gaps", href: "/b2b-seo-audit/" },
      ]}
      faqs={faqs}
    >
      <ArticleSection title="Website traffic to leads formula">
        <p>Start with this formula:</p>
        <FormulaBlock>Leads = traffic x visitor-to-lead conversion rate</FormulaBlock>
        <p>If your website receives 5,000 monthly visits and converts 2% of visitors into leads:</p>
        <FormulaBlock>5,000 x 2% = 100 leads</FormulaBlock>
        <p>
          That gives you a basic lead estimate. But B2B teams should keep going because leads are
          not the final outcome.
        </p>
      </ArticleSection>

      <ArticleSection title="Simple B2B lead generation funnel">
        <p>A practical B2B funnel looks like this:</p>
        <FormulaBlock>Website traffic -&gt; leads -&gt; customers -&gt; revenue</FormulaBlock>
        <FormulaBlock>Leads = traffic x visitor-to-lead conversion rate</FormulaBlock>
        <FormulaBlock>Customers = leads x lead-to-customer conversion rate</FormulaBlock>
        <FormulaBlock>Revenue = customers x average deal value</FormulaBlock>
        <FormulaBlock>Cost per lead = marketing spend / leads</FormulaBlock>
        <FormulaBlock>Cost per customer = marketing spend / customers</FormulaBlock>
      </ArticleSection>

      <ArticleSection title="Example: estimating leads, customers, and revenue">
        <ExampleList
          title="Assumptions"
          items={[
            "5,000 monthly visits",
            "2% visitor-to-lead conversion rate",
            "10% lead-to-customer conversion rate",
            "$8,000 average deal value",
            "$6,000 monthly marketing spend",
          ]}
        />
        <FormulaBlock>5,000 x 2% = 100 leads</FormulaBlock>
        <FormulaBlock>100 x 10% = 10 customers</FormulaBlock>
        <FormulaBlock>10 x $8,000 = $80,000 estimated revenue</FormulaBlock>
        <FormulaBlock>$6,000 / 100 = $60 cost per lead</FormulaBlock>
        <FormulaBlock>$6,000 / 10 = $600 cost per customer</FormulaBlock>
        <p>
          These are estimates, not guarantees. Actual results depend on traffic source, page
          intent, offer quality, sales process, ACV, and lead quality.
        </p>
      </ArticleSection>

      <ArticleSection title="Why B2B traffic does not always turn into leads">
        <p>
          B2B website traffic often fails to convert because the visitor&apos;s intent does not
          match the page or offer. Some visitors need a definition, checklist, or comparison, not a
          demo. Others are close to buying but land on a page that does not answer pricing, use
          case, proof, or implementation questions.
        </p>
        <p>
          Attribution can also get messy. A visitor may read an article, return through branded
          search, compare vendors, talk with sales weeks later, and only then become an opportunity.
        </p>
      </ArticleSection>

      <ArticleSection title="What your biggest gap might be">
        <ExampleList
          title="Diagnose the constraint"
          items={[
            "Traffic: you may not have enough qualified visitors yet.",
            "Conversion rate: visitors may arrive, read, and leave without taking action.",
            "Lead quality: content may target broad topics instead of buyer problems.",
            "Page intent: informational, comparison, pricing, and solution pages need different CTAs.",
            "CTA strength: specific next steps usually beat vague contact buttons.",
            "Cost: traffic may be too expensive relative to conversion rates and deal value.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="What to improve first">
        <p>
          Start with pages that already have intent: commercial pages, comparison pages, service
          pages, product pages, pricing-related pages, and SEO articles that attract problem-aware
          visitors.
        </p>
        <p>
          Map high-intent keywords to commercial pages, improve CTAs, simplify forms, strengthen
          internal links, and track qualified leads by landing page. A page with fewer leads may be
          more valuable if those leads become better opportunities.
        </p>
      </ArticleSection>

      <ArticleSection title="Practical recommendations for B2B teams">
        <ExampleList
          title="Lead estimate workflow"
          items={[
            "Start with traffic by landing page, not only total site traffic.",
            "Separate informational pages from commercial pages.",
            "Estimate leads using visitor-to-lead conversion rate.",
            "Estimate customers using lead-to-customer conversion rate.",
            "Estimate revenue using average deal value.",
            "Compare cost per lead and cost per customer.",
            "Improve internal links from educational content to commercial pages.",
            "Use sales feedback to identify poor-fit pages or offers.",
          ]}
        />
        <p>
          If the issue looks structural, use the{" "}
          <a className="text-blue-700 hover:underline" href="/b2b-seo-strategy/">B2B SEO Strategy Workflow Generator</a>{" "}
          or the <a className="text-blue-700 hover:underline" href="/b2b-seo-audit/">B2B SEO Audit Generator</a>{" "}
          to review page-level gaps.
        </p>
      </ArticleSection>
    </CalculatorArticlePage>
  );
}
