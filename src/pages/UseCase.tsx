import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight,
  Activity, Radar, Pill, GitBranch, Brain, Bot,
  Stethoscope, Database, Eye, Network, Layers, MapPin,
  Calendar, Bell, Users, BarChart3, ClipboardCheck, Scan,
  Filter, Link2, Shield, Cpu, RefreshCw, Zap, ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCasesData, useCasesList, type UseCaseSlug } from "@/data/useCases";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity, Radar, Pill, GitBranch, Brain, Bot,
  Stethoscope, Database, Eye, Network, Layers, MapPin,
  Calendar, Bell, Users, BarChart3, ClipboardCheck, Scan,
  Filter, Link2, Shield, Cpu, RefreshCw, Zap, ShieldCheck,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const UseCase = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const useCase = useCasesData[slug as UseCaseSlug];

  if (!useCase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Solution Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[useCase.iconName] ?? Activity;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(160 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 70% 45%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Ambient orb */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Solutions
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            {/* Big icon */}
            <div className="relative inline-flex mb-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 flex items-center justify-center shadow-glow">
                <Icon size={48} className="text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary/30 animate-ping" />
            </div>

            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
              Solution Deep Dive
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-5 leading-tight">
              {useCase.label}
            </h1>
            <p className="text-xl text-primary font-medium mb-5 leading-snug">
              {useCase.tagline}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {useCase.overview}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link
                to="/#solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                All Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Band ───────────────────────────────────────── */}
      <section className="py-14 border-y border-border bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {useCase.stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Key Capabilities ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
              Capabilities
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Key <span className="text-gradient">Features</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {useCase.features.map((feature, i) => {
              const FIcon = iconMap[feature.iconName] ?? Activity;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group rounded-2xl border border-border bg-gradient-card p-8 hover:border-primary/50 transition-all duration-300 shadow-card cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                    <FIcon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
              Process
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              How It <span className="text-gradient">Works</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {useCase.howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg shadow-glow">
                    {step.step}
                  </div>
                  {i < useCase.howItWorks.length - 1 && (
                    <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Solutions ───────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Explore Other <span className="text-gradient">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {useCasesList
              .filter((uc) => uc.slug !== useCase.slug)
              .slice(0, 3)
              .map((uc, i) => {
                const UCIcon = iconMap[uc.iconName] ?? Activity;
                return (
                  <motion.div
                    key={uc.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      to={`/solutions/${uc.slug}`}
                      className="group flex flex-col rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/50 transition-all duration-300 shadow-card h-full"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                        <UCIcon size={28} className="text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{uc.label}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-2">
                        {uc.tagline}
                      </p>
                      <div className="flex items-center gap-1 text-primary text-sm mt-4 font-medium">
                        Learn more <ArrowRight size={14} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to deploy{" "}
              <span className="text-gradient">{useCase.label}</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our team to explore how this solution can be tailored for your state's health infrastructure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCase;
