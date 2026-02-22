import { motion } from "framer-motion";
import type { FC } from "react";

const FlexibleSolutionsIntro: FC = () => {
  return (
    <section className="pt-20 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight text-slate-900">
            Flexible solutions for every business model.{" "}
            <span className="text-slate-400 font-normal">
              Grow your business with a comprehensive set of payments and
              financial tools—designed to work individually or together.
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexibleSolutionsIntro;
