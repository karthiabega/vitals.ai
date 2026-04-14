import { motion } from "framer-motion";
import { Bot, Zap, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FlipCard, AnimatedIcon, type IconAnim } from "./FlipCard";

interface Feature {
  Icon: LucideIcon;
  title: string;
  shortText: string;
  detail: string;
  iconAnim: IconAnim;
  gradientFront: string;
  gradientBack: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    Icon: Bot,
    title: "Deep Agents",
    shortText: "Autonomous Digital Workers",
    detail:
      "We build Digital Workers that autonomously orchestrate multi-step tasks across fragmented government systems—replacing manual handoffs with intelligent, continuous execution.",
    iconAnim: "bounce",
    gradientFront: "from-primary/15 to-emerald-500/8",
    gradientBack: "from-emerald-900/30 via-card to-card",
    accentColor: "via-emerald-400/60",
  },
  {
    Icon: Zap,
    title: "Large Action Models",
    shortText: "Beyond Conversation → Execution",
    detail:
      "Our LAM architecture moves from conversational search to automated task completion, cutting administrative burden by up to 40% with measurable, auditable results.",
    iconAnim: "pulse",
    gradientFront: "from-primary/15 to-cyan-500/8",
    gradientBack: "from-cyan-900/30 via-card to-card",
    accentColor: "via-cyan-400/60",
  },
  {
    Icon: Lock,
    title: "Sovereign Foundations",
    shortText: "Data Sovereignty by Design",
    detail:
      "Every agent runs on secure, localized infrastructure ensuring full jurisdictional control. No citizen data ever leaves the state boundary without explicit authorization.",
    iconAnim: "breathe",
    gradientFront: "from-primary/15 to-teal-500/8",
    gradientBack: "from-teal-900/30 via-card to-card",
    accentColor: "via-teal-400/60",
  },
];

const AgenticAISection = () => {
  return (
    <section id="platform" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
            Platform
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Agentic AI: The New Operating System for{" "}
            <span className="text-gradient">State Governance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The "chatbot" era has reached its limit. In 2026, the focus has shifted to
            Agentic AI—systems that do not just suggest, but{" "}
            <span className="text-foreground font-semibold">execute</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {features.map((f, i) => (
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
                  /* rounded-2xl ensures border follows the clipped corners */
                  <div
                    className={`h-full rounded-2xl bg-gradient-to-br ${f.gradientFront} border border-border flex flex-col items-center p-8 text-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(160_70%_45%/0.1),transparent_65%)] pointer-events-none" />

                    <div className="flex-1 flex flex-col items-center justify-center gap-6">
                      {/* Bigger icon container: 112×112 */}
                      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-black/25 border border-primary/30 shadow-glow">
                        <AnimatedIcon Icon={f.Icon} animation={f.iconAnim} size={52} />
                        <motion.span
                          className="absolute inset-0 rounded-3xl border border-primary/35"
                          animate={{ scale: [1, 1.16, 1], opacity: [0.55, 0.06, 0.55] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>

                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                          {f.title}
                        </h3>
                        <p className="text-primary text-sm font-semibold">{f.shortText}</p>
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
                    className={`h-full rounded-2xl bg-gradient-to-br ${f.gradientBack} border border-primary/30 flex flex-col p-8 gap-5 relative overflow-hidden`}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${f.accentColor} to-transparent`} />
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/6 to-transparent pointer-events-none" />

                    <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon Icon={f.Icon} animation={f.iconAnim} size={24} />
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col gap-3">
                      <h3 className="font-heading text-xl font-bold text-foreground">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.detail}</p>
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

export default AgenticAISection;
