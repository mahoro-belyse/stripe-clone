import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode, FC } from "react";
import { easeInOut } from "framer-motion";

const floatTransition = {
  repeat: Infinity,
  duration: 4.5,
  ease: easeInOut,
};
interface ShowcaseSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  ctaText?: string;
  imagePosition?: "left" | "right";
  imageSrc?: string;
  imageFallbackGradient?: string;
  imageContent?: ReactNode;
  bg?: string;
}

const ShowcaseSection: FC<ShowcaseSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  ctaText,
  imagePosition = "right",
  imageSrc,
  imageFallbackGradient = "from-indigo-500 to-purple-500",
  imageContent,
  bg = "bg-white",
}) => {
  const isRight = imagePosition === "right";

  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRight ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`space-y-5 ${!isRight ? "lg:order-2" : ""}`}
          >
            {subtitle && (
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {title}
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              {description}
            </p>

            {features && (
              <ul className="space-y-3 pt-2">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-indigo-600 text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm text-slate-600">{f}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {ctaText && (
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors group pt-1"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRight ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
            className={`${!isRight ? "lg:order-1" : ""} relative`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={floatTransition}
              className="relative"
            >
              {imageSrc ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ) : (
                <div
                  className={`relative bg-gradient-to-br ${imageFallbackGradient} rounded-3xl shadow-2xl overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative p-8 md:p-10">{imageContent}</div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
