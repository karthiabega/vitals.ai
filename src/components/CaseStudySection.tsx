import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope, FileText, Building2, Bot, CheckCircle,
  Network, Zap, Filter, Code2, BarChart3,
  Database, Layers, Shield, Server, Globe,
  ArrowRight, Phone, PackageCheck, HeartHandshake, Pill,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// ── Types ────────────────────────────────────────────────────────
interface FlowNode {
  Icon: LucideIcon;
  label: string;
  sublabel?: string;
  highlight?: boolean; // renders with primary accent
}

// Project 1 uses a branching layout; projects 2 & 3 use linear
interface CaseStudy {
  id: number;
  tabLabel: string;
  title: string;
  tech: string[];
  problem: string;
  whatWeDid: string[];
  outcome: string;
  // Linear flow (top row) + optional branch node (decision) + optional bottom row
  flowTop: FlowNode[];
  flowBranch?: FlowNode;   // decision diamond (project 1)
  flowBottom?: FlowNode[]; // bottom path (project 1)
  stats: { value: string; label: string }[];
  accentFrom: string;
  accentVia: string;
}

// ── Data ─────────────────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    tabLabel: "Medication Adherence",
    title: "Medication Adherence Tracker",
    tech: ["ePrescription", "POS Integration", "Rules Engine", "Tele-health"],
    problem:
      "Roughly 1 in 5 new prescriptions are never filled, and for those that are, only about half are taken correctly. This silent crisis drives poor patient outcomes and massive avoidable healthcare costs.",
    whatWeDid: [
      "Built an adherence platform that intercepts ePrescriptions and automatically matches them against pharmacy POS pickup notifications within a 48-hour window.",
      "Deployed tele-caller workflows where clinical pharmacists proactively reach non-adherent patients to identify and resolve barriers to pickup.",
      "Integrated a collaborative care loop spanning prescribers, case managers, social workers, pharmacies, and home delivery teams.",
      "Delivered measurable outcomes: improved patient adherence, better health results, total cost reduction, and enhanced patient experience.",
    ],
    outcome: "Improved patient adherence, better health outcomes, total cost reduction and better patient experience.",
    flowTop: [
      { Icon: Stethoscope, label: "Doctor Visit",      sublabel: "Sick member visits physician" },
      { Icon: FileText,    label: "ePrescription",     sublabel: "EMR transmits to pharmacy" },
      { Icon: Building2,   label: "Retail Pharmacy",   sublabel: "Fills & submits RxClaim" },
      { Icon: PackageCheck,label: "PBM Approval",      sublabel: "Claim approved & paid" },
    ],
    flowBranch: { Icon: Bot, label: "AI Adherence Tracker", sublabel: "Intercepts & matches pickup", highlight: true },
    flowBottom: [
      { Icon: Phone,        label: "Pharmacist Outreach", sublabel: "Calls non-adherent patients" },
      { Icon: Pill,         label: "Pickup on Time",      sublabel: "Member collects medication" },
      { Icon: HeartHandshake, label: "Happy Member",      sublabel: "Adherence confirmed", highlight: true },
    ],
    stats: [
      { value: "4B+",    label: "Annual Prescriptions" },
      { value: "1 in 5", label: "Never Filled" },
      { value: "48 hr",  label: "Intervention Window" },
      { value: "↑",      label: "Health Outcomes" },
    ],
    accentFrom: "from-emerald-500/20",
    accentVia: "via-emerald-400/60",
  },
  {
    id: 2,
    tabLabel: "Clinical Data Pipeline",
    title: "Enterprise Clinical Data Pipeline",
    tech: ["FHIR R4", "HL7 V2/V3", "Kafka", "Snowflake", "Azure"],
    problem:
      "Clinical data from labs, hospitals, and HIEs arrives in dozens of incompatible formats. Without standardization, downstream AI/ML models and regulatory reports cannot be built reliably or at scale.",
    whatWeDid: [
      "Developed a universal parsing framework covering CCD, Lab Records, hospital ADT, X12, and delimited files from any external healthcare submitter.",
      "Built a configurable FHIR conversion engine using liquid map templates to convert HL7 V2, V3, and JSON data into FHIR R4 standards.",
      "Stored harmonized data in an enterprise-grade Snowflake data warehouse on Azure with full lineage, data quality scoring, and auditability.",
      "Designed FHIR-native APIs serving downstream UM, CM, member profile, regulatory reporting, and AI/ML consumers with standardized access.",
    ],
    outcome: "Standardized FHIR R4 data platform powering regulatory reporting, AI/ML pipelines, and care management applications.",
    flowTop: [
      { Icon: Network,   label: "External Sources",   sublabel: "Labs, clinics, HIEs" },
      { Icon: Zap,       label: "Kafka Ingestion",    sublabel: "Stream & batch" },
      { Icon: Filter,    label: "Data Quality",       sublabel: "Standardize & enrich" },
      { Icon: Code2,     label: "FHIR Conversion",    sublabel: "HL7 → FHIR R4", highlight: true },
      { Icon: BarChart3, label: "Analytics & AI",     sublabel: "Downstream consumers" },
    ],
    stats: [
      { value: "FHIR R4",   label: "Output Standard" },
      { value: "HL7 V2/V3", label: "Input Formats" },
      { value: "Snowflake",  label: "Data Warehouse" },
      { value: "Real-time",  label: "Ingestion Speed" },
    ],
    accentFrom: "from-cyan-500/20",
    accentVia: "via-cyan-400/60",
  },
  {
    id: 3,
    tabLabel: "Data Lake",
    title: "Data Lake — Ingestion & Provisioning",
    tech: ["Lambda Architecture", "CDC Streams", "Column-Level Security", "Metadata Catalog"],
    problem:
      "Hospitals and laboratories generate data in incompatible silos. Health departments need a centralized, real-time data lake that securely serves multiple downstream applications without compromising governance.",
    whatWeDid: [
      "Crafted a versatile ingestion framework consolidating data from CDC and streaming platforms into a central data lake with automated data refinement and quality assessments.",
      "Implemented Lambda architecture combining batch processing and real-time stream processing layers for both historical and live data views.",
      "Applied column-level security for fine-grained data governance, enabling controlled access and fortifying data integrity without exposing sensitive PII.",
      "Built metadata cataloging and integration layers to ensure seamless, auditable, and secure data access across the entire organization.",
    ],
    outcome: "Secure, multi-tenant data lake with column-level governance, serving regulatory, clinical, and AI/ML consumers in real time.",
    flowTop: [
      { Icon: Database,  label: "Incoming Data",       sublabel: "Hospitals, CDC, streams" },
      { Icon: Layers,    label: "Lambda Architecture", sublabel: "Batch + stream layers", highlight: true },
      { Icon: Shield,    label: "Governance",          sublabel: "Column-level security" },
      { Icon: Server,    label: "Central Data Lake",   sublabel: "Unified storage" },
      { Icon: Globe,     label: "Downstream Apps",     sublabel: "UM, CM, AI/ML" },
    ],
    stats: [
      { value: "Real-time", label: "Data Acquisition" },
      { value: "Column",    label: "Level Security" },
      { value: "λ",         label: "Lambda Architecture" },
      { value: "Multi-app", label: "Serving Layer" },
    ],
    accentFrom: "from-violet-500/20",
    accentVia: "via-violet-400/60",
  },
];

// ── Flow node card: icon centered above text ─────────────────────
const FlowNodeCard = ({
  node,
  index,
  showNumber = true,
}: {
  node: FlowNode;
  index: number;
  showNumber?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.75, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 280, damping: 24, delay: index * 0.1 }}
    className="flex flex-col items-center text-center gap-2 w-24 flex-shrink-0"
  >
    <motion.div
      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center border
        ${node.highlight ? "bg-primary/20 border-primary/50" : "bg-primary/10 border-primary/25"}`}
      animate={node.highlight
        ? { boxShadow: ["0 0 0px hsl(160 70% 45%/0.2)", "0 0 20px hsl(160 70% 45%/0.6)", "0 0 0px hsl(160 70% 45%/0.2)"] }
        : {}}
      transition={node.highlight ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : {}}
    >
      <node.Icon size={28} className="text-primary" />
      {showNumber && (
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-sm">
          {index + 1}
        </span>
      )}
    </motion.div>
    <div>
      <p className={`font-semibold text-[11px] leading-tight ${node.highlight ? "text-primary" : "text-foreground"}`}>
        {node.label}
      </p>
      {node.sublabel && (
        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{node.sublabel}</p>
      )}
    </div>
  </motion.div>
);

// Horizontal arrow (→) between nodes in the same row
const HArrow = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.3, delay, ease: "easeOut" }}
    style={{ originX: 0 }}
    className="flex items-center flex-shrink-0 self-start mt-7 mx-1"
  >
    <div className="h-px w-8 bg-gradient-to-r from-primary/60 to-primary/25" />
    <svg width="7" height="10" viewBox="0 0 7 10" className="text-primary/55 fill-current -ml-px">
      <polygon points="7,5 0,0 0,10" />
    </svg>
  </motion.div>
);

// Vertical arrow (↓) between rows
const VArrow = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scaleY: 0 }}
    animate={{ opacity: 1, scaleY: 1 }}
    transition={{ duration: 0.35, delay, ease: "easeOut" }}
    style={{ originY: 0 }}
    className="flex flex-col items-center my-1"
  >
    <div className="w-px h-7 bg-gradient-to-b from-primary/50 to-primary/20" />
    <svg width="10" height="6" viewBox="0 0 10 6" className="text-primary/40 fill-current -mt-px">
      <polygon points="5,6 0,0 10,0" />
    </svg>
  </motion.div>
);

// ── Linear Flow: up to 3 per row, then wraps ─────────────────────
const LinearFlow = ({ nodes }: { nodes: FlowNode[] }) => {
  const row1 = nodes.slice(0, 3);
  const row2 = nodes.slice(3);
  return (
    <div className="flex flex-col items-center gap-0">
      <div className="flex items-start justify-center">
        {row1.map((node, i) => (
          <div key={i} className="flex items-start">
            <FlowNodeCard node={node} index={i} />
            {i < row1.length - 1 && <HArrow delay={i * 0.1 + 0.1} />}
          </div>
        ))}
      </div>
      {row2.length > 0 && (
        <>
          <VArrow delay={row1.length * 0.1 + 0.1} />
          <div className="flex items-start justify-center">
            {row2.map((node, i) => (
              <div key={i} className="flex items-start">
                <FlowNodeCard node={node} index={i + row1.length} />
                {i < row2.length - 1 && <HArrow delay={(i + row1.length) * 0.1 + 0.1} />}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ── Branching Flow — top row → diamond → bottom row ─────────────
const BranchingFlow = ({
  top,
  branch,
  bottom,
}: {
  top: FlowNode[];
  branch: FlowNode;
  bottom: FlowNode[];
}) => (
  <div className="flex flex-col items-center gap-0">
    {/* Top row — all nodes horizontal */}
    <div className="flex items-start justify-center">
      {top.map((node, i) => (
        <div key={i} className="flex items-start">
          <FlowNodeCard node={node} index={i} />
          {i < top.length - 1 && <HArrow delay={i * 0.1 + 0.1} />}
        </div>
      ))}
    </div>

    {/* ↓ down to diamond */}
    <VArrow delay={top.length * 0.1 + 0.05} />

    {/* Diamond decision node */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 20, delay: top.length * 0.1 + 0.15 }}
      className="flex flex-col items-center text-center gap-2"
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        <motion.div
          className="absolute w-14 h-14 bg-primary/20 border-2 border-primary/60 rounded-2xl rotate-45"
          animate={{ boxShadow: ["0 0 0px hsl(160 70% 45%/0.25)", "0 0 28px hsl(160 70% 45%/0.7)", "0 0 0px hsl(160 70% 45%/0.25)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <branch.Icon size={28} className="text-primary relative z-10" />
      </div>
      <div className="w-28">
        <p className="font-semibold text-[12px] text-primary leading-tight">{branch.label}</p>
        {branch.sublabel && (
          <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{branch.sublabel}</p>
        )}
      </div>
    </motion.div>

    {/* ↓ down to bottom row */}
    <VArrow delay={top.length * 0.1 + 0.35} />

    {/* Bottom row */}
    <div className="flex items-start justify-center">
      {bottom.map((node, i) => (
        <div key={i} className="flex items-start">
          <FlowNodeCard node={node} index={top.length + 1 + i} showNumber={false} />
          {i < bottom.length - 1 && <HArrow delay={(top.length + 1 + i) * 0.1 + 0.1} />}
        </div>
      ))}
    </div>
  </div>
);

// ── Main Section ─────────────────────────────────────────────────
const CaseStudySection = () => {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <section id="case-study" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Real-World <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three production-grade healthcare technology projects — each solving a
            distinct, critical challenge in the health data ecosystem.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {caseStudies.map((study, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 border ${
                active === i
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {study.tabLabel}
            </button>
          ))}
        </motion.div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-gradient-card shadow-card overflow-hidden"
          >
            {/* Card top accent */}
            <div className={`h-[3px] w-full bg-gradient-to-r from-transparent ${cs.accentVia} to-transparent`} />

            <div className="p-8 md:p-10">
              {/* Title row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    {cs.title}
                  </h3>
                </div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-xs text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Two-column body */}
              <div className="grid md:grid-cols-5 gap-8">
                {/* Left: Problem + What we did */}
                <div className="md:col-span-3 flex flex-col gap-6">
                  <div className="rounded-xl border border-border/50 bg-background/30 p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      Problem Statement
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                      What We Have Done
                    </p>
                    <ul className="flex flex-col gap-3">
                      {cs.whatWeDid.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: i * 0.08 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle size={11} className="text-primary" />
                          </div>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Stats + Outcome */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {cs.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        className="rounded-xl border border-border/50 bg-background/30 p-4 text-center"
                      >
                        <p className="font-heading text-xl font-bold text-gradient mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className={`rounded-xl border border-primary/15 bg-gradient-to-br ${cs.accentFrom} to-transparent p-4`}>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Outcome
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Full-width Process Flow */}
              <div className="mt-8 rounded-xl border border-border/50 bg-background/30 p-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-6 text-center">
                  Process Flow
                </p>
                <div className="overflow-x-auto pt-4 pb-2">
                  {cs.flowBranch ? (
                    <BranchingFlow
                      top={cs.flowTop}
                      branch={cs.flowBranch}
                      bottom={cs.flowBottom ?? []}
                    />
                  ) : (
                    <LinearFlow nodes={cs.flowTop} />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Discuss Your Use Case
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
