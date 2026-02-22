import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState, type FC } from "react";

interface Token {
  t: string;
  c: string;
}

interface CodeLine {
  tokens: Token[];
}

const langs: string[] = ["Node.js", "Python", "Ruby", "Go", "PHP", "Java"];

const codeLines: CodeLine[] = [
  {
    tokens: [
      { t: "const", c: "text-purple-400" },
      { t: " stripe ", c: "text-slate-300" },
      { t: "=", c: "text-slate-500" },
      { t: " require", c: "text-yellow-400" },
      { t: "(", c: "text-slate-400" },
      { t: "'stripe'", c: "text-green-400" },
      { t: ")(", c: "text-slate-400" },
      { t: "'sk_test_...'", c: "text-green-400" },
      { t: ");", c: "text-slate-400" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { t: "const", c: "text-purple-400" },
      { t: " paymentIntent ", c: "text-slate-300" },
      { t: "=", c: "text-slate-500" },
      { t: " await", c: "text-purple-400" },
      { t: " stripe.paymentIntents.", c: "text-slate-300" },
      { t: "create", c: "text-yellow-400" },
      { t: "({", c: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { t: "  amount", c: "text-slate-300" },
      { t: ":", c: "text-slate-500" },
      { t: " 2000", c: "text-orange-400" },
      { t: ",", c: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { t: "  currency", c: "text-slate-300" },
      { t: ":", c: "text-slate-500" },
      { t: " 'usd'", c: "text-green-400" },
      { t: ",", c: "text-slate-500" },
    ],
  },
  {
    tokens: [
      { t: "  automatic_payment_methods", c: "text-slate-300" },
      { t: ": {", c: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { t: "    enabled", c: "text-slate-300" },
      { t: ":", c: "text-slate-500" },
      { t: " true", c: "text-orange-400" },
      { t: ",", c: "text-slate-500" },
    ],
  },
  { tokens: [{ t: "  },", c: "text-slate-400" }] },
  { tokens: [{ t: "});", c: "text-slate-400" }] },
];

const DeveloperSection: FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeLang, setActiveLang] = useState<string>("Node.js");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-500/15 text-indigo-400 rounded-full text-xs font-semibold tracking-wide uppercase">
              For Developers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Designed for developers, built for speed
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Clean, composable APIs. Comprehensive SDKs in every language.
              Hundreds of prebuilt integrations. A platform that lets you move
              fast without breaking things.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {langs.map((lang) => (
                <motion.button
                  key={lang}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeLang === lang
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  {lang}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-6 h-10 text-sm shadow-lg shadow-indigo-900/50">
                  Read documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <Button
                variant="outline"
                className="rounded-full px-6 h-10 text-sm border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                View on GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl" />
            <div className="relative bg-[#111827] rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-700/60 bg-[#0d1421]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">
                    payment.js
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied!" : "Copy"}
                </motion.button>
              </div>

              <div className="p-6 overflow-x-auto">
                <pre className="text-[13px] leading-6 font-mono">
                  {codeLines.map((line, li) => (
                    <div key={li} className="min-h-[24px]">
                      {line.tokens.map((tok, ti) => (
                        <span key={ti} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                    </div>
                  ))}
                </pre>
              </div>

              <div className="px-5 py-3 border-t border-slate-700/60 bg-[#0d1421] flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  stripe.com/docs
                </span>
                <span className="text-xs text-green-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                  Payment created
                </span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl shadow-indigo-900/50"
            >
              9 lines of code
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
