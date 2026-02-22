import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function SessionsBanner() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[420px]"
        >
          {/* ── background image layer ── */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.stripeassets.com/fzn2n1nzq965/5cRV5XgALGMWv62qKuH0Rw/f0429f90b5731f51c44c47b187626bbd/sessions-banner-background_2x.png')",
            }}
          />

          {/* ── dark overlay so text is readable ── */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* ── content ── */}
          <div className="relative z-10 flex flex-col justify-between h-full p-7 sm:p-10 min-h-[340px] sm:min-h-[380px] lg:min-h-[420px]">

            {/* top-left text */}
            <div className="max-w-xs sm:max-w-sm">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight mb-6"
              >
                The internet economy conference
              </motion.h2>

              <motion.a
                href="https://stripesessions.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200"
              >
                Join us at Sessions
                <ChevronRight size={15} />
              </motion.a>
            </div>

            {/* bottom row — logo + date + location */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-8">

              {/* stripe sessions wordmark */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-baseline gap-1"
              >
                <span className="text-white font-black text-lg sm:text-xl tracking-tight">stripe</span>
                <span className="text-white/80 font-light text-lg sm:text-xl tracking-tight">sessions</span>
              </motion.div>

              {/* date + location */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-16 text-white"
              >
                <div>
                  <p className="text-sm sm:text-base font-medium leading-snug">
                    April 29–30,
                  </p>
                  <p className="text-sm sm:text-base font-medium leading-snug">
                    2026
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium leading-snug text-right">
                    Moscone West,
                  </p>
                  <p className="text-sm sm:text-base font-medium leading-snug text-right">
                    San Francisco
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
