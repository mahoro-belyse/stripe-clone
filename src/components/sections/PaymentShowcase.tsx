import ShowcaseSection from "./ShowcaseSection";
import type { FC } from "react";

const paymentMethods: string[] = [
  "Visa",
  "Apple Pay",
  "Klarna",
  "Cash App",
  "Affirm",
];

const CheckoutMockup: FC = () => {
  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-xs mx-auto">
        <div className="text-xs text-slate-400 mb-1 font-mono">
          roastery.com/checkout
        </div>
        <div className="text-sm font-semibold text-slate-900 mb-4">
          Pay Roastery
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-600">
            <span>Mocha Latte</span>
            <span>$5.50</span>
          </div>
          <div className="flex justify-between text-xs text-green-600">
            <span>Loyalty (10% off)</span>
            <span>-$0.55</span>
          </div>
          <div className="flex justify-between text-xs text-slate-600">
            <span>Tax</span>
            <span>$0.51</span>
          </div>
          <div className="border-t border-slate-100 pt-2 flex justify-between text-sm font-bold text-slate-900">
            <span>Total</span>
            <span>$5.46</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-8 bg-slate-100 rounded-lg flex items-center px-3 gap-2">
            <div className="w-4 h-3 bg-indigo-600 rounded-sm shrink-0" />
            <div className="h-2 bg-slate-200 rounded w-24" />
          </div>
          <button className="w-full h-9 bg-indigo-600 rounded-lg text-white text-sm font-medium">
            Pay $5.46
          </button>
        </div>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {paymentMethods.map((method) => (
          <span
            key={method}
            className="px-2.5 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs font-medium border border-white/20"
          >
            {method}
          </span>
        ))}
      </div>
    </div>
  );
};

const PaymentsShowcase: FC = () => {
  return (
    <ShowcaseSection
      title="Accept and optimize payments globally—online and in person"
      subtitle="Payments"
      description="Increase conversion, eliminate fraud, and accept 100+ payment methods with a single integration. From elegant checkouts to advanced fraud detection."
      features={[
        "100+ payment methods in 135+ currencies",
        "Optimized checkout for higher conversion",
        "Adaptive acceptance powered by machine learning",
        "No-code and low-code options available",
      ]}
      ctaText="Explore Payments"
      imagePosition="right"
      imageFallbackGradient="from-indigo-500 via-indigo-600 to-blue-600"
      imageContent={<CheckoutMockup />}
      bg="bg-white"
    />
  );
};

export default PaymentsShowcase;
