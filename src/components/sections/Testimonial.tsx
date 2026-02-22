import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  color: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Stripe has been instrumental in scaling our business globally. The API is well-designed and the developer docs are genuinely excellent.",
    name: "Sarah Chen",
    title: "CTO at TechFlow",
    avatar: "SC",
    color: "from-indigo-500 to-blue-500",
    company: "TechFlow",
  },
  {
    quote:
      "We migrated to Stripe and saw a 23% increase in conversion rates almost immediately. The optimized checkout experience is remarkable.",
    name: "Marcus Johnson",
    title: "Head of Engineering",
    avatar: "MJ",
    color: "from-violet-500 to-purple-500",
    company: "Growthly",
  },
  {
    quote:
      "The developer experience is unmatched. We integrated Stripe in a single weekend and it's been rock solid in production for 3 years.",
    name: "Emily Rodriguez",
    title: "Founder",
    avatar: "ER",
    color: "from-pink-500 to-rose-500",
    company: "LaunchPad",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powering businesses of all sizes.
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            From startups to Fortune 500 companies, teams around the world trust
            us to run their financial infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white rounded-2xl h-full">
                <CardContent className="p-7 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-indigo-200 mb-5 shrink-0" />
                  <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {t.title}, {t.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
