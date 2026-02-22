import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import type { ReactNode, FC } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

interface Product {
  name: string;
  variant: string;
  price: string;
  color: string;
  emoji: ReactNode;
}

const chatMessages: ChatMessage[] = [
  {
    role: "user",
    text: "I'm refreshing my wardrobe. Can you recommend some cozy, comfortable basics in size M?",
  },
  {
    role: "assistant",
    text: "Absolutely. Here are a few comfy essentials that pair well and could be a good starting point:",
  },
];

const products: Product[] = [
  {
    name: "Deluxe Shirt",
    variant: "Blue - Medium",
    price: "$26.00",
    color: "bg-blue-100",
    emoji: "👔",
  },
  {
    name: "Essential Hoodie",
    variant: "Navy - Medium",
    price: "$48.00",
    color: "bg-slate-100",
    emoji: "🧥",
  },
];

const AgenticCommerce: FC = () => {
  return (
    <section className="py-20 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-sm font-semibold text-[#635bff] uppercase tracking-wide">
              Agentic commerce
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Monetize through agentic commerce
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              As AI agents increasingly browse, compare, and purchase on behalf
              of users, Stripe is the only payments platform built to power the
              agentic economy. With a single integration, support every AI
              buying pattern.
            </p>
            <ul className="space-y-3 pt-1">
              {[
                "AI-native checkout for autonomous agents",
                "Agent-initiated payments and subscriptions",
                "Verified merchant identity for AI trust",
                "Fully compatible with existing Stripe integration",
              ].map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#e8e7ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#635bff] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-slate-600">{f}</span>
                </motion.li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#635bff] hover:text-[#4f46e5] transition-colors group"
            >
              Explore Agentic Commerce
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#635bff] to-[#8b5cf6] flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-800 text-sm">
                  Cartsy AI
                </span>
                <span className="ml-auto text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                  Agent
                </span>
              </div>

              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "user"
                        ? "bg-[#635bff] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-1">
                {products.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-2xl border border-slate-100 p-4 bg-slate-50 space-y-2"
                  >
                    <div
                      className={`${p.color} rounded-xl h-20 flex items-center justify-center text-4xl`}
                    >
                      {p.emoji}
                    </div>
                    <div className="text-xs font-semibold text-slate-800">
                      {p.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {p.variant}
                    </div>
                    <div className="text-xs font-bold text-slate-700">
                      {p.price}
                    </div>
                    <button className="w-full bg-[#635bff] text-white text-xs font-medium py-1.5 rounded-lg hover:bg-[#5851ea] transition-colors">
                      Buy now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgenticCommerce;
