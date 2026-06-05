import Link from "next/link";

export type ToolCtaCard = {
  title: string;
  href: string;
  description: string;
};

type ToolCtaCardsProps = {
  cards: ToolCtaCard[];
};

export default function ToolCtaCards({ cards }: ToolCtaCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <h3 className="mb-2 text-[15px] font-semibold text-slate-900">{card.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
        </Link>
      ))}
    </div>
  );
}
