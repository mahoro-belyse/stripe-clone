import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const CTA: FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700">
      {/* Background animated circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-violet-300 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Join millions of companies using Stripe to accept payments, send
            payouts, and manage their businesses online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-10 text-base font-semibold shadow-2xl w-full sm:w-auto"
              >
                Start now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 text-base border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Contact sales
              </Button>
            </motion.div>
          </div>

          <p className="text-indigo-300/80 text-sm pt-2">
            No credit card required · Free plan available · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
