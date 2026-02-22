import ShowcaseSection from "./ShowcaseSection";
import type { FC } from "react";

interface Account {
  name: string;
  country: string;
  balance: string;
  volume: string;
}

const ConnectMockup: FC = () => {
  const accounts: Account[] = [
    {
      name: "Jackson Hot Yoga",
      country: "🇦🇺",
      balance: "$3,660",
      volume: "$12,643",
    },
    {
      name: "Daybreak Yoga",
      country: "🇺🇸",
      balance: "$1,502",
      volume: "$7,880",
    },
    {
      name: "Quiet Fire Yoga",
      country: "🇬🇧",
      balance: "$388",
      volume: "$1,568",
    },
    {
      name: "Harmony Flow",
      country: "🇺🇸",
      balance: "$30,930",
      volume: "$294,669",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
        <div className="w-5 h-5 bg-indigo-600 rounded" />
        <span className="text-xs font-semibold text-slate-700">
          Zenflow · Connected Accounts
        </span>
      </div>
      <div className="divide-y divide-slate-50">
        {accounts.map((a) => (
          <div
            key={a.name}
            className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{a.country}</span>
              <span className="text-xs font-medium text-slate-800">
                {a.name}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-900">
                {a.balance}
              </div>
              <div className="text-[10px] text-slate-400">{a.volume}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConnectShowcase: FC = () => {
  return (
    <ShowcaseSection
      title="Embed payments in your platform"
      subtitle="Connect"
      description="Build a marketplace or SaaS platform where your users can accept payments directly. Onboard merchants, route funds, and manage payouts at scale."
      features={[
        "Onboard users in minutes with hosted onboarding",
        "Route payments to connected accounts instantly",
        "Flexible monetization and revenue sharing",
        "Global compliance handled automatically",
      ]}
      ctaText="Explore Connect"
      imagePosition="right"
      imageFallbackGradient="from-emerald-500 via-teal-500 to-cyan-600"
      imageContent={<ConnectMockup />}
      bg="bg-white"
    />
  );
};

export default ConnectShowcase;
