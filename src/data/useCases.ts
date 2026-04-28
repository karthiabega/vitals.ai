export type UseCaseSlug =
  | "disease-classification"
  | "early-detection"
  | "medication-adherence"
  | "intelligent-data-pipelines"
  | "model-building-with-ai"
  | "agentic-ai-workflows";

export interface UseCase {
  slug: UseCaseSlug;
  label: string;
  iconName: string;
  tagline: string;
  overview: string;
  features: { title: string; description: string; iconName: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export const useCasesData: Record<UseCaseSlug, UseCase> = {
  "disease-classification": {
    slug: "disease-classification",
    label: "Disease Classification",
    iconName: "Activity",
    tagline: "AI-Powered Multi-Disease Diagnostic Intelligence at Population Scale",
    overview:
      "Our classification engine processes clinical records, lab results, and surveillance data to automatically identify disease patterns across 30+ categories. Health teams get earlier visibility into emerging cases — with confidence scores and supporting evidence for every classification.",
    features: [
      {
        title: "Multi-Disease ICD-11 Mapping",
        description:
          "Automated classification across Dengue, Malaria, Typhoid, TB, and 30+ notifiable diseases aligned to ICD-11 standards.",
        iconName: "Stethoscope",
      },
      {
        title: "IDSP-Aligned Data Integration",
        description:
          "Seamless ingestion of S, P, and L reporting streams with real-time syndromic surveillance integration.",
        iconName: "Database",
      },
      {
        title: "Explainable AI Verdicts",
        description:
          "Every classification comes with a confidence score and explainability layer for clinical trust and regulatory compliance.",
        iconName: "Eye",
      },
      {
        title: "Cross-Facility Harmonization",
        description:
          "Standardizes classifications across PHCs, CHCs, district hospitals, and tertiary centers for unified state-level reporting.",
        iconName: "Network",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Data Ingestion",
        description:
          "Clinical records, lab results, and IDSP reports are ingested through intelligent pipelines that detect data type and schema automatically.",
      },
      {
        step: 2,
        title: "AI Classification",
        description:
          "Multi-label classification models process patient demographics, symptoms, lab values, and geographic context to assign disease categories.",
      },
      {
        step: 3,
        title: "Confidence Scoring",
        description:
          "Each classification is assigned a confidence score with supporting evidence flags for clinical review.",
      },
      {
        step: 4,
        title: "Dashboard Reporting",
        description:
          "Results are published to state-level dashboards in real-time, with alert thresholds triggering autonomous escalations.",
      },
    ],
    stats: [
      { value: "95%+", label: "Classification Accuracy" },
      { value: "30+", label: "Disease Categories" },
      { value: "<2s", label: "Classification Latency" },
      { value: "5 Cr+", label: "Records Processed" },
    ],
  },

  "early-detection": {
    slug: "early-detection",
    label: "Early Detection",
    iconName: "Radar",
    tagline: "Predict Outbreaks Before They Happen — Up to 14 Days in Advance",
    overview:
      "Our predictive surveillance system fuses environmental data, vector indices, mobility patterns, and historical records to identify disease hotspots before they manifest clinically. Using India's surveillance data and disease patterns, we forecast outbreaks up to 14 days in advance — giving health teams time to deploy preventive measures before cases escalate.",
    features: [
      {
        title: "Multi-Source Fusion Engine",
        description:
          "Combines IDSP syndromic data, weather patterns, mosquito indices, and social mobility signals for holistic risk assessment.",
        iconName: "Layers",
      },
      {
        title: "Geographic Risk Heatmaps",
        description:
          "Village and ward-level outbreak probability maps updated daily, enabling targeted vector control and resource deployment.",
        iconName: "MapPin",
      },
      {
        title: "14-Day Prediction Window",
        description:
          "14-day outbreak predictions that give health teams time to deploy preventive measures before cases escalate.",
        iconName: "Calendar",
      },
      {
        title: "Autonomous Alert Dispatch",
        description:
          "AI agents automatically dispatch alerts to district officers, field workers, and supply chain systems when risk thresholds are breached.",
        iconName: "Bell",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Signal Collection",
        description:
          "Environmental sensors, mobility data, and IDSP reports are continuously streamed into the early warning pipeline.",
      },
      {
        step: 2,
        title: "Risk Modeling",
        description:
          "Spatiotemporal models compute district and village-level outbreak risk scores using ensemble ML techniques.",
      },
      {
        step: 3,
        title: "Alert Generation",
        description:
          "When risk scores breach configurable thresholds, alerts are generated and routed to relevant stakeholders automatically.",
      },
      {
        step: 4,
        title: "Field Validation Loop",
        description:
          "Field confirmations feed back into the model to continuously improve prediction accuracy over time.",
      },
    ],
    stats: [
      { value: "14 Days", label: "Advance Warning Window" },
      { value: "87%", label: "Prediction Accuracy" },
      { value: "26", label: "Districts Covered" },
      { value: "3x", label: "Faster Response Time" },
    ],
  },

  "medication-adherence": {
    slug: "medication-adherence",
    label: "Medication Adherence",
    iconName: "Pill",
    tagline: "Ensuring Treatment Completion Across Populations of Millions",
    overview:
      "Poor medication adherence undermines treatment outcomes across chronic diseases, TB programs, and long-term therapies. Our platform monitors patient treatment journeys at scale, identifies at-risk patients early, and triggers timely interventions to improve completion rates.",
    features: [
      {
        title: "Population-Scale Monitoring",
        description:
          "Track adherence across lakhs of patients on ABDM-integrated health records, identifying non-adherence patterns early.",
        iconName: "Users",
      },
      {
        title: "AI-Powered Follow-Up",
        description:
          "AI agents conduct automated follow-ups via IVR, SMS, and ASHA worker app integrations to re-engage patients who have missed doses.",
        iconName: "Bot",
      },
      {
        title: "Risk Stratification",
        description:
          "Patients are stratified by adherence risk using socioeconomic, behavioral, and clinical indicators for prioritized intervention.",
        iconName: "BarChart3",
      },
      {
        title: "DOTS & NCD Integration",
        description:
          "Seamless integration with TB-DOTS programs and NCD management protocols with state health department reporting.",
        iconName: "ClipboardCheck",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Patient Enrollment",
        description:
          "Patients are enrolled via ABDM-linked health ID with treatment schedules loaded from prescribing facility records.",
      },
      {
        step: 2,
        title: "Adherence Tracking",
        description:
          "Digital dose confirmations, pharmacy dispensing logs, and ASHA worker reports are fused to compute adherence scores.",
      },
      {
        step: 3,
        title: "Risk Flagging",
        description:
          "AI models identify patients at risk of defaulting based on behavioral patterns and trigger intervention workflows.",
      },
      {
        step: 4,
        title: "Outcome Reporting",
        description:
          "Treatment completion rates, default prevention metrics, and cost savings are reported to state health authorities.",
      },
    ],
    stats: [
      { value: "60%", label: "Reduction in Defaults" },
      { value: "5L+", label: "Patients Monitored" },
      { value: "40%", label: "Admin Burden Reduced" },
      { value: "92%", label: "Treatment Completion" },
    ],
  },

  "intelligent-data-pipelines": {
    slug: "intelligent-data-pipelines",
    label: "Intelligent Data Pipelines",
    iconName: "GitBranch",
    tagline: "Autonomous Data Ingestion, Cleansing, and Harmonization at Government Scale",
    overview:
      "Health data across hospitals, clinics, and health agencies exists in incompatible formats — paper, legacy systems, spreadsheets, and APIs. Our pipelines automatically unify this data, cleaning and standardizing it into a single analytics-ready layer without manual engineering overhead.",
    features: [
      {
        title: "AI Schema Detection",
        description:
          "Automatically infers schema and data types from structured, semi-structured, and unstructured sources without manual configuration.",
        iconName: "Scan",
      },
      {
        title: "Intelligent Data Cleansing",
        description:
          "ML models identify and correct data quality issues—duplicates, outliers, missing values, and format inconsistencies—at scale.",
        iconName: "Filter",
      },
      {
        title: "Multi-Source Integration",
        description:
          "Native connectors for HMIS, ABDM, IDSP, NHM, and 20+ government health data systems with real-time sync.",
        iconName: "Link2",
      },
      {
        title: "Data Lineage & Auditability",
        description:
          "Every transformation is logged with full data lineage, enabling regulatory compliance and forensic auditing.",
        iconName: "Shield",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Source Discovery",
        description:
          "AI crawlers discover and catalog data sources across government systems, legacy databases, and API endpoints.",
      },
      {
        step: 2,
        title: "Schema Inference",
        description:
          "LLM-powered schema inference identifies field types, relationships, and semantic meaning from raw data samples.",
      },
      {
        step: 3,
        title: "Transformation & Cleansing",
        description:
          "Automated transformation rules are generated and applied to normalize, deduplicate, and enrich data across sources.",
      },
      {
        step: 4,
        title: "Unified Data Layer",
        description:
          "Cleansed, harmonized data is published to a sovereign data warehouse accessible to analytics and AI models.",
      },
    ],
    stats: [
      { value: "20+", label: "Systems Integrated" },
      { value: "99.5%", label: "Pipeline Uptime" },
      { value: "10x", label: "Faster Onboarding" },
      { value: "85%", label: "Data Quality Gain" },
    ],
  },

  "model-building-with-ai": {
    slug: "model-building-with-ai",
    label: "Model Building with AI",
    iconName: "Brain",
    tagline: "Automated AI Model Development, Validation, and Sovereign Deployment",
    overview:
      "Building AI models for healthcare requires deep domain expertise, rigorous validation, and secure deployment practices. Our AutoML and model engineering platform accelerates the development of clinical predictive models—from feature engineering to deployment—while ensuring every model meets the explainability and regulatory standards required for government healthcare applications.",
    features: [
      {
        title: "Healthcare AutoML",
        description:
          "Automated model selection, hyperparameter tuning, and ensemble construction optimized for clinical and epidemiological datasets.",
        iconName: "Cpu",
      },
      {
        title: "Federated Learning",
        description:
          "Train models across distributed hospital networks without centralizing sensitive patient data—preserving privacy and sovereignty.",
        iconName: "Network",
      },
      {
        title: "Explainable AI (XAI)",
        description:
          "Every model prediction comes with SHAP-based explanations, enabling clinical trust and regulatory review.",
        iconName: "Eye",
      },
      {
        title: "Continuous Retraining",
        description:
          "Models are automatically retrained on new data streams, maintaining accuracy as disease patterns and populations evolve.",
        iconName: "RefreshCw",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Problem Framing",
        description:
          "Domain experts and AI engineers co-define the prediction task, target variable, and success metrics aligned to health outcomes.",
      },
      {
        step: 2,
        title: "Feature Engineering",
        description:
          "AI-assisted feature extraction from clinical, demographic, environmental, and behavioral data sources.",
      },
      {
        step: 3,
        title: "Model Training & Validation",
        description:
          "Multiple model architectures are trained and validated against held-out test sets with clinical outcome validation.",
      },
      {
        step: 4,
        title: "Sovereign Deployment",
        description:
          "Models are deployed to state-controlled infrastructure with monitoring, drift detection, and compliance reporting.",
      },
    ],
    stats: [
      { value: "50+", label: "Models in Production" },
      { value: "3x", label: "Faster Development" },
      { value: "99%", label: "System Uptime" },
      { value: "XAI", label: "Explainable by Default" },
    ],
  },

  "agentic-ai-workflows": {
    slug: "agentic-ai-workflows",
    label: "Agentic AI Workflows",
    iconName: "Bot",
    tagline: "Intelligent Workflows That Move From Insight to Action",
    overview:
      "Our intelligent workflow platform deploys specialized AI agents that handle complex, multi-step processes across health and governance systems — from grievance triage to disease response coordination. Our agents complete tasks end-to-end with configurable human oversight, reducing administrative burden and improving response times.",
    features: [
      {
        title: "Digital Worker Deployment",
        description:
          "Specialized AI agents act as digital workers — accessing government systems, processing data, and completing tasks end-to-end.",
        iconName: "Bot",
      },
      {
        title: "Task Execution",
        description:
          "Our agents execute multi-step workflows across APIs, databases, and communication channels — going beyond recommendations to action.",
        iconName: "Zap",
      },
      {
        title: "Multi-Agent Orchestration",
        description:
          "Complex workflows are broken into specialized agent tasks, with a master orchestrator managing dependencies and exceptions.",
        iconName: "Network",
      },
      {
        title: "Human-in-the-Loop Governance",
        description:
          "Configurable approval gates ensure human oversight for high-stakes decisions while maintaining workflow velocity.",
        iconName: "ShieldCheck",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Workflow Mapping",
        description:
          "Existing government workflows are analyzed and decomposed into discrete agent-executable tasks.",
      },
      {
        step: 2,
        title: "Agent Specialization",
        description:
          "Specialized agents are configured and trained for each task type—classification, routing, communication, and data retrieval.",
      },
      {
        step: 3,
        title: "Orchestration Layer",
        description:
          "A master orchestrator coordinates agent tasks, handles exceptions, and ensures end-to-end workflow completion.",
      },
      {
        step: 4,
        title: "Monitoring & Governance",
        description:
          "Real-time dashboards provide visibility into agent performance, workflow throughput, and exception rates.",
      },
    ],
    stats: [
      { value: "40%", label: "Admin Burden Reduced" },
      { value: "1.5M", label: "Grievances Processed" },
      { value: "60%", label: "Faster Processing" },
      { value: "26", label: "Departments Automated" },
    ],
  },
};

export const useCasesList = Object.values(useCasesData);
