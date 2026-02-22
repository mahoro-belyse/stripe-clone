import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedNumberProps {
  value: string | number;
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true });

  const isFloat = String(value).includes(".");
  const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ""));

  const displayed = useTransform(motionVal, (v) =>
    isFloat ? v.toFixed(2) : Math.round(v).toLocaleString(),
  );

  useEffect(() => {
    if (inView) {
      animate(motionVal, numeric, { duration: 2, ease: "easeOut" });
    }
  }, [inView, numeric, motionVal]);

  return (
    <span ref={ref}>
      <motion.span>{displayed}</motion.span>
    </span>
  );
}

interface StatCardProps {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
}: StatCardProps) {
  const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ""));
  const isAnimatable = !isNaN(numeric);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tabular-nums">
        {prefix}
        {isAnimatable ? <AnimatedNumber value={value} /> : value}
        <span className="text-indigo-600">{suffix}</span>
      </div>
      <p className="text-sm text-slate-500 max-w-[160px] mx-auto leading-snug">
        {label}
      </p>
    </motion.div>
  );
}
