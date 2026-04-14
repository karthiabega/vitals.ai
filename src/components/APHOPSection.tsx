import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Database, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { FlipCard, AnimatedIcon, type IconAnim } from "./FlipCard";

interface Capability {
  Icon: LucideIcon;
  title: string;
  shortText: string;
  detail: string;
  iconAnim: IconAnim;
  gradientFront: string;
  gradientBack: string;
  accentColor: string;
}

const capabilities: Capability[] = [
  {
    Icon: TrendingUp,
    title: "Predictive Intelligence",
    shortText: "Disease Outbreak Forecasting",
    detail:
      "Multi-disease prediction models identify local outbreak clusters (Dengue, Malaria, Typhoid) using IDSP-aligned lead indicators — up to 14 days in advance.",
    iconAnim: "bounce",
    gradientFront: "from-primary/15 to-emerald-500/8",
    gradientBack: "from-emerald-900/30 via-card to-card",
    accentColor: "via-emerald-400/60",
  },
  {
    Icon: AlertTriangle,
    title: "Autonomous Triage",
    shortText: "Real-Time Anomaly Detection",
    detail:
      "S, P, and L reporting streams fused with environmental data detect anomalies before they scale into public health crises — zero manual intervention.",
    iconAnim: "pulse",
    gradientFront: "from-primary/15 to-amber-500/8",
    gradientBack: "from-amber-900/20 via-card to-card",
    accentColor: "via-amber-400/60",
  },
  {
    Icon: Database,
    title: "Population Analytics",
    shortText: "5 Cr+ Citizens, One Platform",
    detail:
      "Architected to manage digital health records at massive scale, ensuring full interoperability with the Ayushman Bharat Digital Mission (ABDM).",
    iconAnim: "spin",
    gradientFront: "from-primary/15 to-cyan-500/8",
    gradientBack: "from-cyan-900/30 via-card to-card",
    accentColor: "via-cyan-400/60",
  },
];

const useCaseTags = [
  { label: "Disease Classification", slug: "disease-classification" },
  { label: "Early Detection", slug: "early-detection" },
  { label: "Medication Adherence", slug: "medication-adherence" },
  { label: "Intelligent Data Pipelines", slug: "intelligent-data-pipelines" },
  { label: "Model Building with AI", slug: "model-building-with-ai" },
  { label: "Agentic AI Workflows", slug: "agentic-ai-workflows" },
];

const APHOPSection = () => {
  return (
    <section id="solutions" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
            Solutions
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            The Autonomous Public Health{" "}
            <span className="text-gradient">Operations Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In alignment with the national vision for "One AI Doctor per Person," APHOP
            serves as the digital nervous system for state-level health departments.
          </p>
        </motion.div>

        {/* Flip Cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              className="h-[420px]"
            >
              <FlipCard
                className="h-full"
                front={
                  <div
                    className={`h-full rounded-2xl bg-gradient-to-br ${cap.gradientFront} border border-border flex flex-col items-center p-8 text-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_70%_45%/0.08),transparent_70%)] pointer-events-none" />

                    <div className="flex-1 flex flex-col items-center justify-center gap-6">
                      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-black/25 border border-primary/30 shadow-glow">
                        <AnimatedIcon Icon={cap.Icon} animation={cap.iconAnim} size={52} />
                        <motion.span
                          className="absolute inset-0 rounded-3xl border border-primary/30"
                          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.08, 0.5] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>

                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                          {cap.title}
                        </h3>
                        <p className="text-primary text-sm font-semibold">{cap.shortText}</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground/50 flex items-center gap-1">
                      <span>Hover to explore</span>
                      <span className="text-primary">→</span>
                    </p>
                  </div>
                }
                back={
                  <div
                    className={`h-full rounded-2xl bg-gradient-to-br ${cap.gradientBack} border border-primary/30 flex flex-col p-8 gap-5 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${cap.accentColor} to-transparent`}
                    />
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon Icon={cap.Icon} animation={cap.iconAnim} size={24} />
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col gap-3">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {cap.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cap.detail}</p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Clickable Use-Case Tags */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-6">
            Explore Use Cases
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {useCaseTags.map((tag) => (
              <Link
                key={tag.slug}
                to={`/solutions/${tag.slug}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium hover:bg-primary/15 hover:border-primary/50 hover:shadow-glow transition-all duration-250"
              >
                {tag.label}
                <ArrowRight
                  size={13}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default APHOPSection;
