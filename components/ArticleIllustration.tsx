type ArticleIllustrationVariant = "lead-cost" | "lead-generation" | "roas" | "cpm";

type ArticleIllustrationProps = {
  variant: ArticleIllustrationVariant;
};

const basePanel = "fill-white stroke-slate-200";
const mutedPanel = "fill-slate-50 stroke-slate-200";
const bluePanel = "fill-blue-50 stroke-blue-100";
const tealPanel = "fill-teal-50 stroke-teal-100";

function Label({
  x,
  y,
  children,
  tone = "slate",
  size = 12,
  weight = 600,
}: {
  x: number;
  y: number;
  children: string;
  tone?: "slate" | "muted" | "blue" | "teal";
  size?: number;
  weight?: number;
}) {
  const fill = {
    slate: "#0f172a",
    muted: "#64748b",
    blue: "#2563eb",
    teal: "#0f766e",
  }[tone];

  return (
    <text x={x} y={y} fill={fill} fontSize={size} fontWeight={weight}>
      {children}
    </text>
  );
}

function MetricCard({
  x,
  y,
  width,
  label,
  value,
  tone = "blue",
}: {
  x: number;
  y: number;
  width: number;
  label: string;
  value: string;
  tone?: "blue" | "teal" | "slate";
}) {
  const panelClass = tone === "teal" ? tealPanel : tone === "blue" ? bluePanel : mutedPanel;
  const valueTone = tone === "teal" ? "teal" : tone === "blue" ? "blue" : "slate";

  return (
    <g>
      <rect x={x} y={y} width={width} height="54" rx="14" className={panelClass} />
      <Label x={x + 14} y={y + 22} tone="muted" size={10}>
        {label}
      </Label>
      <Label x={x + 14} y={y + 42} tone={valueTone} size={16} weight={700}>
        {value}
      </Label>
    </g>
  );
}

function LeadCostIllustration() {
  return (
    <>
      <rect x="24" y="24" width="312" height="232" rx="28" className={basePanel} />
      <Label x={48} y={58} tone="slate" size={16} weight={700}>
        Lead cost calculator
      </Label>
      <Label x={48} y={80} tone="muted" size={11}>
        Inputs
      </Label>

      {[
        ["Spend", "$5,000"],
        ["Leads", "80"],
        ["Qualified", "20"],
      ].map(([label, value], index) => (
        <g key={label}>
          <rect
            x="48"
            y={96 + index * 38}
            width="122"
            height="28"
            rx="10"
            className={mutedPanel}
          />
          <Label x={60} y={114 + index * 38} tone="muted" size={10}>
            {label}
          </Label>
          <Label x={124} y={114 + index * 38} tone="slate" size={11} weight={700}>
            {value}
          </Label>
        </g>
      ))}

      <MetricCard x={190} y={92} width={114} label="CPL" value="$62.50" />
      <MetricCard x={190} y={154} width={114} label="Qualified CPL" value="$250" tone="teal" />
      <MetricCard x={190} y={216} width={114} label="Qualified rate" value="25%" tone="slate" />

      <path d="M65 224h30l18-18 22 18h36" fill="none" stroke="#94a3b8" strokeWidth="3" />
      <circle cx="65" cy="224" r="4" fill="#2563eb" />
      <circle cx="113" cy="206" r="4" fill="#0f766e" />
      <circle cx="171" cy="224" r="4" fill="#94a3b8" />
      <Label x={48} y={246} tone="muted" size={10}>
        Lead volume vs lead quality
      </Label>
    </>
  );
}

function LeadGenerationIllustration() {
  const stages = [
    ["Traffic", "5,000"],
    ["Leads", "100"],
    ["Customers", "10"],
    ["Revenue", "$80k"],
  ];

  return (
    <>
      <rect x="24" y="24" width="312" height="232" rx="28" className={basePanel} />
      <Label x={48} y={58} tone="slate" size={16} weight={700}>
        Traffic to revenue funnel
      </Label>
      <path d="M68 92h224l-30 124H98z" fill="#eff6ff" stroke="#bfdbfe" />
      <path d="M92 122h176" stroke="#bfdbfe" strokeWidth="2" />
      <path d="M104 152h152" stroke="#bfdbfe" strokeWidth="2" />
      <path d="M116 182h128" stroke="#bfdbfe" strokeWidth="2" />

      {stages.map(([label, value], index) => (
        <g key={label}>
          <circle cx={86 + index * 62} cy={236} r="5" fill={index < 2 ? "#2563eb" : "#0f766e"} />
          <Label x={68 + index * 62} y={266} tone="muted" size={10}>
            {label}
          </Label>
          <Label x={70 + index * 62} y={250} tone={index < 2 ? "blue" : "teal"} size={13} weight={700}>
            {value}
          </Label>
        </g>
      ))}

      <rect x="72" y="105" width="216" height="30" rx="12" fill="#ffffff" opacity="0.86" />
      <Label x={88} y={124} tone="slate" size={11}>
        Biggest gap: traffic, conversion, or quality
      </Label>
    </>
  );
}

function RoasIllustration() {
  return (
    <>
      <rect x="24" y="24" width="312" height="232" rx="28" className={basePanel} />
      <Label x={48} y={58} tone="slate" size={16} weight={700}>
        ROAS review
      </Label>

      <MetricCard x={48} y={92} width={92} label="Spend" value="$5k" tone="slate" />
      <MetricCard x={220} y={92} width={92} label="Revenue" value="$20k" tone="teal" />

      <path d="M146 118h68" stroke="#bfdbfe" strokeWidth="4" strokeLinecap="round" />
      <path d="M204 108l12 10-12 10" fill="none" stroke="#2563eb" strokeWidth="3" />

      <rect x="122" y="154" width="116" height="72" rx="20" className={bluePanel} />
      <Label x={154} y={184} tone="muted" size={10}>
        ROAS
      </Label>
      <Label x={158} y={210} tone="blue" size={30} weight={800}>
        4x
      </Label>

      <rect x="52" y="218" width="84" height="30" rx="12" className={tealPanel} />
      <Label x={66} y={237} tone="teal" size={10}>
        Pipeline fit
      </Label>
      <rect x="224" y="218" width="84" height="30" rx="12" className={mutedPanel} />
      <Label x={238} y={237} tone="muted" size={10}>
        CRM check
      </Label>
    </>
  );
}

function CpmIllustration() {
  const dots = Array.from({ length: 28 }, (_, index) => ({
    x: 54 + (index % 7) * 18,
    y: 82 + Math.floor(index / 7) * 18,
  }));

  return (
    <>
      <rect x="24" y="24" width="312" height="232" rx="28" className={basePanel} />
      <Label x={48} y={58} tone="slate" size={16} weight={700}>
        Awareness metric
      </Label>

      {dots.map((dot, index) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r="5"
          fill={index % 5 === 0 ? "#2563eb" : index % 4 === 0 ? "#0f766e" : "#cbd5e1"}
        />
      ))}

      <rect x="196" y="78" width="102" height="72" rx="20" className={bluePanel} />
      <Label x={220} y={105} tone="muted" size={10}>
        CPM
      </Label>
      <Label x={218} y={132} tone="blue" size={24} weight={800}>
        $20
      </Label>

      {[
        ["Impressions", 60],
        ["Clicks", 148],
        ["Leads", 236],
      ].map(([label, x], index) => (
        <g key={label}>
          <rect x={Number(x)} y="200" width="72" height="36" rx="14" className={index === 0 ? bluePanel : index === 1 ? mutedPanel : tealPanel} />
          <Label x={Number(x) + 10} y={222} tone={index === 2 ? "teal" : index === 0 ? "blue" : "muted"} size={10}>
            {String(label)}
          </Label>
          {index < 2 ? (
            <path
              d={`M${Number(x) + 74} 218h12`}
              stroke="#94a3b8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : null}
        </g>
      ))}

      <Label x={62} y={176} tone="muted" size={10}>
        Reach first, then validate downstream
      </Label>
    </>
  );
}

export default function ArticleIllustration({ variant }: ArticleIllustrationProps) {
  return (
    <div className="mx-auto w-full max-w-[390px] rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
      <svg
        aria-hidden="true"
        viewBox="0 0 360 280"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="360" height="280" rx="32" fill="#F8FAFC" />
        <circle cx="324" cy="38" r="42" fill="#dbeafe" opacity="0.7" />
        <circle cx="40" cy="246" r="34" fill="#ccfbf1" opacity="0.55" />
        {variant === "lead-cost" ? <LeadCostIllustration /> : null}
        {variant === "lead-generation" ? <LeadGenerationIllustration /> : null}
        {variant === "roas" ? <RoasIllustration /> : null}
        {variant === "cpm" ? <CpmIllustration /> : null}
      </svg>
    </div>
  );
}

export type { ArticleIllustrationVariant };
