import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
const floatTransition: Transition = {
  repeat: Infinity,
  duration: 5,
  ease: "easeInOut",
};
const GDP_VALUE = 1.58086051;
const Hero: FC = () => {
  const [gdp, setGdp] = useState(GDP_VALUE);

  useEffect(() => {
    const interval = setInterval(() => {
      setGdp((v) => parseFloat((v + Math.random() * 0.00001).toFixed(8)));
    }, 800);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative overflow-hidden bg-white min-h-[620px] flex items-center">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none select-none"
      >
        <motion.img
          animate={{ y: [0, -12, 0] }}
          transition={floatTransition}
          src="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/2eeb4e4ca6b4a45723507f6e8e15bb9b/wave__1_.png"
          alt=""
          className="absolute top-0 right-0 h-full w-auto max-w-none object-cover"
          style={{ minHeight: 620 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 w-full">
        <div className="max-w-2xl space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-slate-500 font-mono"
          >
            Global GDP running on Stripe:{" "}
            <span className="text-slate-700 font-semibold">
              {gdp.toFixed(8)}%
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.12]"
          >
            <span className="text-slate-900">Financial infrastructure</span>{" "}
            <span className="text-slate-900">to grow </span>
            <span className="text-indigo-500">your revenue.</span>
            <br />
            <span className="text-slate-400 font-semibold text-3xl md:text-[2.2rem] leading-snug block mt-3">
              Accept payments, offer financial services, and implement custom
              revenue models—from your first transaction to your billionth.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-7 h-11 text-sm font-medium shadow-lg shadow-indigo-200 w-full sm:w-auto"
              >
                Get started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md px-7 h-11 text-sm font-medium border-slate-200 hover:bg-slate-50 gap-2 w-full sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
