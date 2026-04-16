import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Users, TrendingDown, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

// ── Animated number counter ──────────────────────────────────────
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
      // ease-out cubic
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

// ── Stat item data ───────────────────────────────────────────────
const stats = [
  {
    Icon: Users,
    counterTo: 5,
    prefix: "",
    suffix: "",
    label: "Turnkey Projects Delivered",
    sublabel: "End-to-end  health deployments",
    iconBg: "from-primary/20 to-emerald-500/10",
    delay: 0,
  },
  {
    Icon: TrendingDown,
    counterTo: 40,
    prefix: "",
    suffix: "%",
    label: "Cost Reduction",
    sublabel: "Across state health operations",
    iconBg: "from-primary/20 to-cyan-500/10",
    delay: 0.15,
  },
  {
    Icon: Building2,
    counterTo: 30,
    prefix: "",
    suffix: "%",
    label: "Improved Medication Adherence",
    sublabel: "Across ABDM-linked patient cohorts",
    iconBg: "from-primary/20 to-teal-500/10",
    delay: 0.3,
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(160 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 70% 45%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* ── Hero Content ── */}
      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <Activity size={14} className="text-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
            Sovereign AI Infrastructure for India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto mb-8"
        >
          The Agentic Layer for{" "}
          <span className="text-gradient">Health</span>{" "}
          and Governance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Moving beyond reactive systems to autonomous, predictive infrastructure.
          We deploy specialized AI agents to safeguard and scale India's digital future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/#platform"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-glow"
          >
            Explore Platform
            <ArrowRight size={18} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
          >
            Request Demo
          </Link>
        </motion.div>

        {/* ── Enhanced Stats Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-24 relative"
        >
          {/* Glow background */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-primary/15 bg-card/30 backdrop-blur-md overflow-hidden">
            {stats.map(({ Icon, counterTo, prefix, suffix, label, sublabel, iconBg, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + delay }}
                className={`group flex flex-col items-center text-center p-10 gap-5 relative
                  ${i < stats.length - 1 ? "md:border-r border-b md:border-b-0 border-primary/10" : ""}
                  hover:bg-primary/5 transition-colors duration-300`}
              >
                {/* Large icon container */}
                <div
                  className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${iconBg} border border-primary/20 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon size={44} className="text-primary" />
                  {/* Ripple ring */}
                  <span className="absolute inset-0 rounded-3xl border border-primary/20 animate-ping opacity-30" />
                </div>

                {/* Animated counter */}
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

export default HeroSection;
