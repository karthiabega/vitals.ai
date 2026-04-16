import { motion } from "framer-motion";
import {
  Activity, Layers, Bot, Network, RefreshCw,
  Clock, TrendingDown, Heart, GitMerge, Settings,
  ChevronRight, Zap, Timer, Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────

interface Category {
  name: string;
  items: string[];
}

interface PipelineStep {
  id: number;
  label: string;
  Icon: LucideIcon;
  accent: {
    bg: string;
    border: string;
    text: string;
    headerBg: string;
    dot: string;
  };
  categories: Category[];
}

// ── Pipeline stages ───────────────────────────────────────────────

const steps: PipelineStep[] = [
  {
    id: 1,
    label: "Sensing",
    Icon: Activity,
    accent: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      headerBg: "bg-emerald-500/15",
      dot: "bg-emerald-400",
    },
    categories: [
      { name: "Clinical",       items: ["S, P, L forms (IDSP/IHIP)"] },
      { name: "Environmental",  items: ["Weather", "Water quality", "Satellite"] },
      { name: "Behavioral",     items: ["Media signals", "Social signals", "Pharmacy sales"] },
      { name: "Mobility",       items: ["Migration", "Transport corridors"] },
      { name: "Infrastructure", items: ["Health facility data"] },
    ],
  },
  {
    id: 2,
    label: "Understanding",
    Icon: Layers,
    accent: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      headerBg: "bg-cyan-500/15",
      dot: "bg-cyan-400",
    },
    categories: [
      { name: "Validations",      items: ["Schema & format", "Facility validation", "Temporal logic", "Duplicate detection"] },
      { name: "Data Quality",     items: ["Completeness", "Accuracy", "Timeliness", "Consistency"] },
      { name: "Enrichments",      items: ["Risk Score (ORI)", "SDOH Overlay", "Entity Resolution"] },
      { name: "Standardizations", items: ["Disease coding", "Lab standards", "Address normalization"] },
      { name: "Data Layer",       items: ["Common Format", "Lakehouse"] },
    ],
  },
  {
    id: 3,
    label: "Decisioning",
    Icon: Bot,
    accent: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/30",
      text: "text-violet-400",
      headerBg: "bg-violet-500/15",
      dot: "bg-violet-400",
    },
    categories: [
      {
        name: "Core Agents",
        items: ["Epidemiology Reasoning Agent", "Signal Fusion Agent", "Intervention Planning Agent"],
      },
      {
        name: "Deep Agents",
        items: ["Complex Outbreak Attribution", "Cross Pattern Discovery", "Novel Event Detection"],
      },
    ],
  },
  {
    id: 4,
    label: "Execution",
    Icon: Network,
    accent: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      text: "text-amber-400",
      headerBg: "bg-amber-500/15",
      dot: "bg-amber-400",
    },
    categories: [
      {
        name: "Operations",
        items: ["Case Management", "Resource Optimization", "Gap Detection", "Field Response Ops", "Public Communication"],
      },
    ],
  },
  {
    id: 5,
    label: "Learning",
    Icon: RefreshCw,
    accent: {
      bg: "bg-teal-500/10",
      border: "border-teal-500/30",
      text: "text-teal-400",
      headerBg: "bg-teal-500/15",
      dot: "bg-teal-400",
    },
    categories: [
      {
        name: "Feedback Loop",
        items: ["Model Retraining", "Outcome Feedback", "Policy Refinement", "Performance KPIs"],
      },
      {
        name: "Proprietary AI",
        items: ["Learn & Apply Intelligence", "Adaptive thresholds"],
      },
    ],
  },
];

// ── Processing Engine data ────────────────────────────────────────

const processingEngine = [
  {
    title: "Validations",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    items: [
      "Schema & Format Validation",
      "Facility / Reporter Validation",
      "Temporal & Epidemiological Logic Checks",
      "Duplicate & Over-reporting Detection",
    ],
  },
  {
    title: "Data Quality",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    items: [
      "Completeness scoring",
      "Accuracy assessment",
      "Timeliness monitoring",
      "Consistency checks",
      "Source reliability tracking",
    ],
  },
  {
    title: "Enrichments",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    items: [
      "Risk Score Calculation (ORI)",
      "SDOH Overlay",
      "Health Quality Indicators",
      "Entity Resolution",
    ],
  },
  {
    title: "Standardizations",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    items: [
      "Disease Coding Standardization",
      "Lab Standardization",
      "Address & Location Normalization",
    ],
  },
];

// ── Real-time vs Batch data ───────────────────────────────────────

const realTimeItems = [
  { label: "S-Form (Syndromic) Alerts",    desc: "Immediate ingestion of fever clusters or respiratory distress spikes from PHCs/CHCs" },
  { label: "Media & Social Listening",      desc: "Real-time NLP scraping of hyper-local news for keywords" },
  { label: "Weather Anomaly Detection",     desc: "Immediate flags for extreme heat or flooding" },
  { label: "Critical Lab (L-Form) Positives", desc: "Instant notification when a high-priority pathogen is confirmed" },
  { label: "ED Utilization",               desc: "Tracking sudden surges in emergency visits at Govt hospitals" },
];

const batchItems = [
  { label: "P-Form (Presumptive) Verification",  desc: "Daily or weekly batching of doctor-diagnosed cases to verify syndromic" },
  { label: "Water Quality Trends",               desc: "Weekly analysis of chlorine levels and turbidity across a district" },
  { label: "Roster Sync (Healthcare Workforce)", desc: "Reconciling available staff at CHCs with predicted surge" },
  { label: "Outbreak History Comparison",        desc: "Pattern matching against prior outbreak signatures" },
  { label: "Outcome Analytics",                  desc: "Retrospective analysis of intervention effectiveness" },
];

// ── Case Management data ──────────────────────────────────────────

const caseManagementLeft = [
  {
    title: "Inpatient & Post-Acute Management",
    items: [
      { label: "Isolation Bed Tracker",  desc: "Real-time visibility into bed occupancy at CHCs and District Hospitals for S/P form patients." },
      { label: "ASHA Follow-up",         desc: "Automating the transition of a discharged patient to a home-quarantine Roster for ASHA worker monitoring." },
    ],
  },
];

const caseManagementRight = [
  {
    title: "Care Transitions & Management",
    items: [
      { label: "Referral Handshakes",  desc: "Managing the Referral Slip digitally when a patient moves from a rural Sub-centre to a Tertiary Hospital." },
      { label: "High-Risk Registry",   desc: "Maintaining a longitudinal database of Hotspots to push proactive health education via SMS before the weather peaks." },
    ],
  },
];

// ── KPI data ──────────────────────────────────────────────────────

const kpis = [
  { value: "48–72h", label: "Faster Outbreak Detection",        Icon: Clock },
  { value: "↓",      label: "Reduction in Time-to-Supply",      Icon: TrendingDown },
  { value: "↓",      label: "Manual Data Reconciliation",       Icon: Database },
  { value: "↓",      label: "Outbreak Case Fatality Rate (CFR)", Icon: Heart },
];

// ── Differentiators data ──────────────────────────────────────────

const differentiators = [
  {
    Icon: Bot,
    title: "Autonomous Decisioning Engine",
    description:
      "Deep-agent powered intelligence layer that performs outbreak attribution, signal fusion, and intervention planning — moving beyond static analytics to real-time, context-aware decision making.",
    gradient: "from-emerald-900/25 via-card to-card",
    accent: "via-emerald-400/60",
  },
  {
    Icon: GitMerge,
    title: "Multi-Source Data Fusion",
    description:
      "Unified ingestion and processing of clinical (S/P/L), environmental, behavioral, and mobility data — enabling a comprehensive, 360° view of population health risks across geographies.",
    gradient: "from-cyan-900/25 via-card to-card",
    accent: "via-cyan-400/60",
  },
  {
    Icon: Settings,
    title: "Coordinated Field Execution",
    description:
      "End-to-end orchestration of health actions including case management, resource allocation, and rapid response deployment — ensuring insights translate into measurable outcomes on the ground.",
    gradient: "from-teal-900/25 via-card to-card",
    accent: "via-teal-400/60",
  },
];

// ── Helper: dot bullet ────────────────────────────────────────────

const Dot = ({ color = "bg-primary/50" }: { color?: string }) => (
  <span className={`inline-block w-1.5 h-1.5 rounded-full ${color} flex-shrink-0 mt-[5px]`} />
);

// ── Component ────────────────────────────────────────────────────

const APHOPPipelineSection = () => (
  <section id="aphop-pipeline" className="py-28 relative">

    {/* Separator */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10 space-y-24">

      {/* ════════════════════════════════════════════
          1. HEADER
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
          Platform Architecture
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          Autonomous Health{" "}
          <span className="text-gradient">Operations Pipeline</span>
        </h2>
        {/* Stage flow subtitle */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
          {["Sensing", "Understanding", "Autonomous Decisioning", "Coordinated Execution", "Continuous Learning"].map(
            (stage, i, arr) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-muted-foreground">{stage}</span>
                {i < arr.length - 1 && <ChevronRight size={14} className="text-primary/40" />}
              </span>
            )
          )}
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A five-stage intelligence pipeline that continuously transforms multi-source signals
          into coordinated field interventions — with zero manual handoffs.
        </p>
      </motion.div>

      {/* ════════════════════════════════════════════
          2. PIPELINE FLOW DIAGRAM
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-semibold text-primary tracking-widest uppercase mb-8">
          Pipeline Flow
        </p>

        {/* Outer: clips x overflow. Inner: scroll with py padding so borders aren't cut */}
        <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div className="flex items-stretch gap-0 min-w-max p-6">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-stretch">

                  {/* Stage card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`w-52 rounded-2xl border ${s.accent.border} bg-card/60 overflow-hidden flex flex-col`}
                  >
                    {/* Card header */}
                    <div className={`${s.accent.headerBg} border-b ${s.accent.border} px-4 py-3 flex items-center gap-3`}>
                      <div className={`w-8 h-8 rounded-lg ${s.accent.bg} border ${s.accent.border} flex items-center justify-center flex-shrink-0`}>
                        <s.Icon size={16} className={s.accent.text} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] text-muted-foreground/70 font-medium">Stage {s.id}</p>
                        <p className={`text-sm font-bold leading-tight ${s.accent.text}`}>{s.label}</p>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex-1 p-4 flex flex-col gap-3">
                      {s.categories.map((cat, ci) => (
                        <div key={ci}>
                          <p className={`text-[9px] font-black uppercase tracking-widest mb-1.5 ${s.accent.text}`}>
                            {cat.name}
                          </p>
                          <ul className="flex flex-col gap-1">
                            {cat.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-1.5 text-[10px] text-muted-foreground leading-snug">
                                <Dot color={s.accent.dot} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Arrow connector */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center px-3 flex-shrink-0 self-center">
                      <div className="h-px w-6 bg-gradient-to-r from-primary/40 to-primary/20" />
                      <ChevronRight size={14} className="text-primary/40 -ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Processing Engine footer bar */}
          <div className="border-t border-border/50 bg-primary/3 px-6 py-3 flex items-center justify-center gap-3">
            <div className="w-5 h-5 rounded bg-primary/15 border border-primary/25 flex items-center justify-center">
              <Database size={11} className="text-primary" />
            </div>
            <p className="text-xs font-semibold text-muted-foreground">
              Proprietary AI Engine
            </p>
            <span className="text-muted-foreground/30">•</span>
            <p className="text-xs text-muted-foreground/60">
              Learn &amp; Apply Intelligence — processes all five stages continuously
            </p>
          </div>
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          3. PROCESSING ENGINE DETAILS
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-semibold text-primary tracking-widest uppercase mb-8">
          Processing Engine Details
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {processingEngine.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border ${col.border} ${col.bg} p-5 flex flex-col gap-3`}
            >
              {/* Column title */}
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-4 rounded-full ${col.accent.replace("text-", "bg-")} opacity-70`} />
                <p className={`text-xs font-bold uppercase tracking-wider ${col.accent}`}>{col.title}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {col.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                    <ChevronRight size={10} className={`${col.accent} flex-shrink-0 mt-[2px] opacity-70`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          4. REAL-TIME VS BATCH PROCESSING
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-semibold text-primary tracking-widest uppercase mb-8">
          Processing Modes
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Real-time */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-emerald-500/15 bg-emerald-500/10">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Zap size={15} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] text-emerald-400/70 font-medium uppercase tracking-wider">Mode</p>
                <p className="text-sm font-bold text-emerald-400">Real-time Processing</p>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-4">
              {realTimeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <p className="text-xs font-semibold text-foreground mb-0.5">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Batch */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-cyan-500/15 bg-cyan-500/10">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Timer size={15} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] text-cyan-400/70 font-medium uppercase tracking-wider">Mode</p>
                <p className="text-sm font-bold text-cyan-400">Batch Processing</p>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-4">
              {batchItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <p className="text-xs font-semibold text-foreground mb-0.5">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          5. CASE MANAGEMENT
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-semibold text-primary tracking-widest uppercase mb-8">
          Case Management &amp; Utilization Management
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[caseManagementLeft, caseManagementRight].map((col, ci) => (
            <div key={ci} className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
              {col.map((section, si) => (
                <div key={si}>
                  <div className="px-6 py-4 border-b border-border/50 bg-primary/5">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      {section.title}
                    </p>
                  </div>
                  <div className="p-6 flex flex-col gap-5">
                    {section.items.map((item, ii) => (
                      <motion.div
                        key={ii}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: ii * 0.1 }}
                        className="flex gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          6. KPIs
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-semibold text-primary tracking-widest uppercase mb-8">
          Expected Outcomes &amp; KPIs
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-primary/15 bg-card/40 backdrop-blur-sm p-7 text-center overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(160_70%_45%/0.06),transparent_65%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <kpi.Icon size={20} className="text-primary" />
                </div>
                <p className="font-heading text-4xl font-bold text-gradient leading-none mb-3">
                  {kpi.value}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">{kpi.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          7. SOLUTION DIFFERENTIATORS
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-semibold text-primary tracking-widest uppercase mb-8">
          Solution Differentiators
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${d.gradient} border border-border hover:border-primary/40 p-8 flex flex-col gap-6 overflow-hidden hover:-translate-y-1.5 transition-all duration-300`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent ${d.accent} to-transparent`} />
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/4 to-transparent pointer-events-none" />
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <d.Icon size={26} className="text-primary" />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-snug">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default APHOPPipelineSection;
