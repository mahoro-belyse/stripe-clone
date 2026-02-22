import { motion, AnimatePresence } from "framer-motion";
import { useState, type FC } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface Story {
  company: string;
  headline: string;
  stats: Stat[];
  products: string[];
  image: string;
  color: string;
}

const stories: Story[] = [
  {
    company: "Hertz",
    headline: "Hertz unifies commerce with Stripe.",
    stats: [
      { value: "160", label: "countries" },
      { value: "11K+", label: "locations globally" },
    ],
    products: ["Payments", "Terminal", "Connect", "Radar", "Stripe Sigma"],
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=600&q=90",
    color: "#FFD700",
  },
  {
    company: "URBN",
    headline:
      "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    stats: [
      { value: "5+", label: "consumer brands in retailer portfolio" },
      { value: "700+", label: "store locations" },
    ],
    products: ["Payments", "Terminal", "Connect", "Stripe Sigma", "Radar"],
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/37wKFanVluouT2iEZUbD0H/f75e77141e1330ad81ea18c6aea65f0c/enterprise-accordion-urbn.png?w=600&q=90",
    color: "#7B68EE",
  },
  {
    company: "Instacart",
    headline: "Instacart powers online grocery delivery with Stripe.",
    stats: [
      { value: "600K+", label: "shoppers" },
      { value: "1.8K", label: "retail partners across nearly 100K stores" },
    ],
    products: ["Payments", "Connect", "Data Pipeline", "Issuing"],
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/1v5hJ2NWvKpQfVbMqOzCpE/c900b9ed4c288f7cf0a0dced5f4983f2/enterprise-accordion-instacart.png?w=600&q=90",
    color: "#43B02A",
  },
  {
    company: "Le Monde",
    headline: "Le Monde improves local and international payments with Stripe.",
    stats: [
      { value: "170+", label: "years of journalism" },
      { value: "25+", label: "payment methods" },
    ],
    products: ["Payments", "Billing", "Checkout"],
    image:
      "https://images.stripeassets.com/fzn2n1nzq965/3IVWPnPxaFPzAKJRxGzIUh/d97bbefeae3a40ca0f3efc87e04e64d4/le-monde.png?w=600&q=90",
    color: "#E63C2F",
  },
];

const CustomerStories: FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-[#635bff] uppercase tracking-wide mb-3">
            Customers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Powering businesses of all sizes.
          </h2>
          <p className="text-lg text-slate-500 mt-3 max-w-2xl">
            Run your business on a reliable platform that adapts to your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Accordion */}
          <div className="space-y-2">
            {stories.map((story, i) => (
              <div key={story.company}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 border ${
                    active === i
                      ? "bg-slate-50 border-slate-200 shadow-sm"
                      : "bg-white border-transparent hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-semibold text-base ${active === i ? "text-slate-900" : "text-slate-500"}`}
                    >
                      {story.headline}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${active === i ? "rotate-90 text-[#635bff]" : "text-slate-300"}`}
                    />
                  </div>

                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 grid grid-cols-2 gap-4">
                          {story.stats.map((s) => (
                            <div key={s.label}>
                              <div className="text-2xl font-bold text-slate-900">
                                {s.value}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                {s.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="pt-4">
                          <p className="text-xs text-slate-400 mb-2">
                            Products used
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {story.products.map((p) => (
                              <span
                                key={p}
                                className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#635bff] hover:text-[#4f46e5] transition-colors"
                        >
                          Read the story <ArrowRight className="w-4 h-4" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            ))}
          </div>

          {/* Image panel */}
          <div className="hidden lg:block sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100"
              >
                <img
                  src={stories[active].image}
                  alt={stories[active].company}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.style.background = `linear-gradient(135deg, #0a2540, #1a1060)`;
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
