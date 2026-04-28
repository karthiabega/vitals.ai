import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, TrendingDown, Building2 } from "lucide-react";

function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}

const stats = [
  {
    Icon: Users,
    counterTo: 5,
    prefix: "",
    suffix: "",
    label: "Turnkey Projects Delivered",
    sublabel: "End-to-end health deployments",
    iconBg: "from-primary/20 to-emerald-500/10",
    delay: 0,
  },
  {
    Icon: TrendingDown,
    counterTo: 40,
    prefix: "",
    suffix: "%",
    label: "Cost Reduction",
    sublabel: "Across healthcare operations",
    iconBg: "from-primary/20 to-cyan-500/10",
    delay: 0.15,
  },
  {
    Icon: Building2,
    counterTo: 30,
    prefix: "",
    suffix: "%",
    label: "Improved Medication Adherence",
    sublabel: "Across monitored patient populations",
    iconBg: "from-primary/20 to-teal-500/10",
    delay: 0.3,
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-primary/15 bg-card/30 backdrop-blur-md overflow-hidden">
            {stats.map(({ Icon, counterTo, prefix, suffix, label, sublabel, iconBg, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                className={`group flex flex-col items-center text-center p-10 gap-5 relative
                  ${i < stats.length - 1 ? "md:border-r border-b md:border-b-0 border-primary/10" : ""}
                  hover:bg-primary/5 transition-colors duration-300`}
              >
                <div
                  className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${iconBg} border border-primary/20 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon size={44} className="text-primary" />
                  <span className="absolute inset-0 rounded-3xl border border-primary/20 animate-ping opacity-30" />
                </div>

                <div className="font-heading text-6xl md:text-7xl font-bold text-gradient leading-none">
                  <AnimatedCounter to={counterTo} prefix={prefix} suffix={suffix} />
                </div>

                <div>
                  <p className="font-heading text-lg font-semibold text-foreground mb-1">{label}</p>
                  <p className="text-xs text-muted-foreground">{sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
