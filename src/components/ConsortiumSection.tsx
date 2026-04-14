import { motion } from "framer-motion";
import { BarChart3, Link2, Cpu, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FlipCard, AnimatedIcon, type IconAnim } from "./FlipCard";

interface Pillar {
  Icon: LucideIcon;
  title: string;
  shortText: string;
  detail: string;
  iconAnim: IconAnim;
  gradientFront: string;
  gradientBack: string;
  accentColor: string;
}

const pillars: Pillar[] = [
  {
    Icon: BarChart3,
    title: "Data Intelligence",
    shortText: "Unstructured → Predictive",
    detail:
      "Converting vast government datasets into predictive governance tools. Trusted by Fortune 100 enterprises for mission-critical analytics pipelines.",
    iconAnim: "float",
    gradientFront: "from-primary/15 to-emerald-500/8",
    gradientBack: "from-emerald-900/30 via-card to-card",
    accentColor: "via-emerald-400/60",
  },
  {
    Icon: Link2,
    title: "Decentralized Rails",
    shortText: "Tamper-Proof Audit Layers",
    detail:
      "Blockchain verification and immutable ledgers ensuring secure, auditable state data exchanges and full regulatory compliance.",
    iconAnim: "spin",
    gradientFront: "from-primary/15 to-violet-500/8",
    gradientBack: "from-violet-900/20 via-card to-card",
    accentColor: "via-violet-400/60",
  },
  {
    Icon: Cpu,
    title: "AI Engineering",
    shortText: "4,000-Person Tech DNA",
    detail:
      "Led by engineers with a lineage managing large-scale tech operations for global healthcare and insurance majors. Deep AI product expertise.",
    iconAnim: "pulse",
    gradientFront: "from-primary/15 to-cyan-500/8",
    gradientBack: "from-cyan-900/30 via-card to-card",
    accentColor: "via-cyan-400/60",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Infrastructure",
    shortText: "Sovereign-Grade Security",
    detail:
      "Modern cloud architecture and sovereign security protocols for sensitive, citizen-facing government platforms. Zero-trust by default.",
    iconAnim: "breathe",
    gradientFront: "from-primary/15 to-teal-500/8",
    gradientBack: "from-teal-900/30 via-card to-card",
    accentColor: "via-teal-400/60",
  },
];

const ConsortiumSection = () => {
  return (
    <section id="consortium" className="py-28 relative bg-secondary/20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
            Consortium
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Expertise at <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A specialized group of four technical entities providing the depth and
            credentials required for state-level sovereign AI implementation.
          </p>
        </motion.div>

        {/* Flip Cards — 2×2 staggered: odd columns shifted down */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start pb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-[420px] ${i % 2 === 1 ? "mt-14" : ""}`}
            >
              <FlipCard
                className="h-full"
                front={
                  <div
                    className={`h-full rounded-2xl bg-gradient-to-br ${pillar.gradientFront} border border-border flex flex-col items-center p-8 text-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_70%_45%/0.07),transparent_70%)] pointer-events-none" />

                    <div className="flex-1 flex flex-col items-center justify-center gap-6">
                      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-black/25 border border-primary/30 shadow-glow">
                        <AnimatedIcon Icon={pillar.Icon} animation={pillar.iconAnim} size={52} />
                        <motion.span
                          className="absolute inset-0 rounded-3xl border border-primary/30"
                          animate={{ scale: [1, 1.14, 1], opacity: [0.5, 0.08, 0.5] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        />
                      </div>

                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                          {pillar.title}
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          {pillar.shortText}
                        </p>
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
                    className={`h-full rounded-2xl bg-gradient-to-br ${pillar.gradientBack} border border-primary/30 flex flex-col p-7 gap-4 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${pillar.accentColor} to-transparent`}
                    />
                    <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon Icon={pillar.Icon} animation={pillar.iconAnim} size={24} />
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col gap-2">
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.detail}</p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsortiumSection;
