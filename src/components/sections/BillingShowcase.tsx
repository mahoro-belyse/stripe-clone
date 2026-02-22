import ShowcaseSection from "./ShowcaseSection";
import type { FC } from "react";

interface Metric {
  label: string;
  value: string;
}

const BillingMockup: FC = () => {
  const metrics: Metric[] = [
    { label: "MRR", value: "$84,291" },
    { label: "Churn", value: "1.2%" },
    { label: "LTV", value: "$2,400" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto space-y-3">
      <div className="bg-white rounded-2xl shadow-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm font-bold text-slate-900">Pro Plan</div>
            <div className="text-xs text-slate-500">Billed monthly</div>
          </div>
          <div className="text-lg font-bold text-slate-900">
            $49
            <span className="text-xs font-normal text-slate-400">/mo</span>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-600">Tokens</span>
            <span className="text-xs text-slate-400">
              $0.01 per 1,000 units
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Tokens used</span>
              <span>1.5B / 2B</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white/25 backdrop-blur rounded-xl p-3 text-center"
          >
            <div className="text-white font-bold text-sm">{value}</div>
            <div className="text-white/70 text-xs">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface BillingShowcaseProps {}

const BillingShowcase: FC<BillingShowcaseProps> = () => {
  return (
    <ShowcaseSection
      title="Enable any billing model"
      subtitle="Billing"
      description="Build and scale your subscription business with support for trials, discounts, metered billing, and automatic revenue recovery."
      features={[
        "Flat rate, per-seat, and usage-based billing",
        "Smart automatic payment retries",
        "Customer portal out of the box",
        "Revenue recognition and reporting",
      ]}
      ctaText="Explore Billing"
      imagePosition="left"
      imageFallbackGradient="from-violet-600 via-purple-600 to-indigo-600"
      imageContent={<BillingMockup />}
      bg="bg-slate-50"
    />
  );
};

export default BillingShowcase;
