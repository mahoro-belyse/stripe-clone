import { motion } from "framer-motion";
import StatCard from "../shared/StatCard";

interface Stat {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "135",
    suffix: "+",
    label: "currencies and payment methods supported",
  },
  {
    value: "1.4",
    prefix: "$",
    suffix: "T",
    label: "in payments volume processed in 2024",
  },
  {
    value: "99.999",
    suffix: "%",
    label: "historical uptime for Stripe services",
  },
  {
    value: "200",
    suffix: "M+",
    label: "active subscriptions managed on Stripe Billing",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0a2540] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The backbone of global commerce
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center border-l border-white/10 first:border-l-0 pl-6 first:pl-0"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                {stat.prefix}
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticker strip — scrolling stats like Stripe */}
        <div className="border-t border-b border-white/10 py-4 mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
          <div className="flex items-center gap-12 w-max animate-[marquee_30s_linear_infinite]">
            {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span className="text-white font-bold text-lg tabular-nums">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-white/40 text-sm">{stat.label}</span>
                <span className="text-white/20 text-xl">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Globe / map image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
        >
          <img
            src="https://images.stripeassets.com/fzn2n1nzq965/63zO5Z4CABvFl3pLLhnu3l/a9c12c883f820dc29d29fa0b9dcb0814/DatavizStatic3x.png"
            alt="Global payment volume visualization"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
