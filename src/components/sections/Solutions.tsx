import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";

/* ── tiny reusable fade-up wrapper ── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Phone mockup card (left bento) ── */
function PaymentsCard() {
  return (
    <div className="relative flex flex-col h-full min-h-[520px] lg:min-h-[600px] overflow-hidden rounded-2xl bg-[#f6f9fc] border border-slate-200/80">
      {/* card header */}
      <div className="flex items-start justify-between p-6 pb-0">
        <h3 className="text-[1.05rem] font-semibold text-slate-800 max-w-[16rem] leading-snug">
          Accept and optimize payments globally—online and&nbsp;in&nbsp;person
        </h3>
        <button className="p-1.5 rounded-lg hover:bg-slate-200/70 transition-colors">
          <Maximize2 size={15} className="text-slate-400" />
        </button>
      </div>

      {/* illustration area */}
      <div className="relative flex-1 mt-6 flex items-end justify-center overflow-hidden">
        {/* gradient blob */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[320px] rounded-full bg-gradient-to-br from-orange-300 via-pink-400 to-purple-500 opacity-80 blur-2xl" />

        {/* phone */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-[155px] shrink-0 mr-[-24px] mb-0"
        >
          {/* phone shell */}
          <div className="relative bg-[#1a1a2e] rounded-[28px] border-[3px] border-slate-700 shadow-2xl overflow-hidden aspect-[9/19]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-600 rounded-full" />
            <div className="pt-6 px-2.5 pb-2 h-full flex flex-col">
              {/* nfc icon */}
              <div className="flex justify-center mb-1">
                <div className="w-8 h-8 rounded-full border-2 border-slate-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border border-slate-400" />
                </div>
              </div>
              <p className="text-center text-slate-400 text-[7px] mb-1">
                Showflix に支払う
              </p>
              <p className="text-center text-white font-bold text-[13px] mb-2">
                ¥5,000.00
              </p>
              <p className="text-center text-slate-500 text-[6px] mb-3">
                タップ、挿入、またはスワイプして支払う
              </p>
              <div className="flex justify-between text-slate-400 text-[7px] px-1 mb-1">
                <span>ギフトカード</span>
                <span>¥5,000.00</span>
              </div>
              <div className="flex justify-between text-slate-300 text-[7px] px-1 font-semibold mb-3">
                <span>合計</span>
                <span>¥5,000.00</span>
              </div>
              <div className="mt-auto">
                <div className="bg-purple-500 rounded-lg py-1.5 text-center text-white text-[8px] font-semibold">
                  続行
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* checkout UI card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 bg-white rounded-xl shadow-2xl border border-slate-200 w-[220px] shrink-0 mb-0 overflow-hidden"
        >
          {/* browser bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-1.5 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="text-slate-400 text-[8px] ml-1">
              showflixapp.com/checkout
            </span>
          </div>
          <div className="p-3">
            <p className="font-black text-slate-900 text-[9px] tracking-wider mb-2">
              SHOWFLIX
            </p>
            <p className="text-slate-500 text-[7px] mb-1">メールアドレス</p>
            <div className="border border-slate-200 rounded px-2 py-1 text-[7px] text-slate-400 mb-2">
              taro.yamada@example.com
            </div>
            <div className="flex gap-1 mb-2">
              <div className="flex-1 bg-[#00D924] rounded py-1 text-center text-white text-[7px] font-bold flex items-center justify-center gap-0.5">
                <span>⚡</span>
                <span>link</span>
              </div>
              <div className="flex-1 bg-black rounded py-1 text-center text-white text-[7px] font-bold">
                {" "}
                Pay
              </div>
            </div>
            <p className="text-slate-400 text-[6px] text-center mb-2">または</p>
            <p className="text-slate-500 text-[7px] mb-1">支払い方法</p>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-3 h-3 rounded-full border-2 border-[#635BFF]" />
              <span className="text-slate-600 text-[7px]">💳 カード</span>
            </div>
            <div className="border border-slate-200 rounded px-2 py-1 text-[7px] text-slate-300 mb-1">
              カード番号
            </div>
            <div className="flex gap-1 mb-2">
              <div className="border border-slate-200 rounded px-2 py-1 text-[7px] text-slate-300 flex-1">
                有効期限
              </div>
              <div className="border border-slate-200 rounded px-2 py-1 text-[7px] text-slate-300 flex-1">
                セキュリ…
              </div>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-3 h-2 rounded-sm bg-red-500 flex items-center justify-center">
                <span className="text-white text-[5px]">P</span>
              </div>
              <span className="text-slate-600 text-[7px]">PayPay</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <div className="w-3 h-2 rounded-sm bg-green-600 flex items-center justify-center">
                <span className="text-white text-[5px]">F</span>
              </div>
              <span className="text-slate-600 text-[7px]">FamilyMart</span>
            </div>
            <div className="bg-purple-500 rounded py-1.5 text-center text-white text-[8px] font-semibold">
              続行
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Billing model card (right bento) ── */
function BillingCard() {
  const bars = [
    2, 4, 3, 6, 5, 8, 7, 9, 6, 8, 10, 7, 9, 11, 8, 10, 13, 9, 11, 14,
  ];

  return (
    <div className="relative flex flex-col h-full min-h-[520px] lg:min-h-[600px] overflow-hidden rounded-2xl bg-[#f6f9fc] border border-slate-200/80">
      {/* card header */}
      <div className="flex items-start justify-between p-6 pb-0">
        <h3 className="text-[1.05rem] font-semibold text-slate-800 max-w-[14rem] leading-snug">
          Enable any billing model
        </h3>
        <button className="p-1.5 rounded-lg hover:bg-slate-200/70 transition-colors">
          <Maximize2 size={15} className="text-slate-400" />
        </button>
      </div>

      {/* illustration area */}
      <div className="relative flex-1 mt-6 flex flex-col items-center justify-end overflow-hidden px-6 pb-0">
        {/* gradient blob */}
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 opacity-70 blur-3xl translate-x-1/3 translate-y-1/4" />

        {/* pro plan card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 mb-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
            </div>
            <div>
              <p className="text-slate-900 font-semibold text-sm leading-none">
                Pro Plan
              </p>
              <p className="text-slate-400 text-xs mt-0.5">Billed monthly</p>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-3">
            <p className="text-slate-700 font-medium text-sm">Tokens</p>
            <p className="text-slate-400 text-xs">$0.01 per 1,000 units</p>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full border border-slate-300" />
            <p className="text-slate-500 text-xs">Usage meter</p>
          </div>
          {/* progress bar */}
          <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "62%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300"
            />
          </div>
        </motion.div>

        {/* usage chart card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 mb-0"
        >
          <p className="text-slate-400 text-xs mb-0.5">
            Tokens used in the last 30 days
          </p>
          <p className="text-slate-900 font-bold text-lg tabular-nums mb-3">
            2,010,569,010
          </p>
          {/* bar chart */}
          <div className="flex items-end gap-[3px] h-14">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.03,
                  ease: "easeOut",
                }}
                style={{ height: `${(h / 14) * 100}%`, originY: 1 }}
                className="flex-1 rounded-sm bg-indigo-400 opacity-80"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function Solutions() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FadeUp delay={0.1}>
            <PaymentsCard />
          </FadeUp>
          <FadeUp delay={0.2}>
            <BillingCard />
          </FadeUp>
        </div>

        {/* bottom row — 3 smaller feature pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            {
              title: "Monetize through agentic commerce",
              color: "from-emerald-50 to-teal-50",
              accent: "bg-emerald-500",
            },
            {
              title: "Create a card issuing program",
              color: "from-blue-50 to-indigo-50",
              accent: "bg-blue-500",
            },
            {
              title: "Embed payments in your platform",
              color: "from-violet-50 to-purple-50",
              accent: "bg-violet-500",
            },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={0.1 + i * 0.1}>
              <div
                className={`group relative rounded-2xl bg-gradient-to-br ${item.color} border border-slate-200/80 p-6 cursor-pointer hover:shadow-md transition-shadow duration-300 min-h-[100px] flex flex-col justify-between`}
              >
                <p className="text-slate-800 font-semibold text-sm leading-snug pr-6">
                  {item.title}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className={`w-2 h-2 rounded-full ${item.accent}`} />
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
