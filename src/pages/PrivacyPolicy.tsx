import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    body: `We collect information you voluntarily provide when you contact us, request a demo, or engage with our platform. This includes:

• Personal identifiers: name, email address, phone number, and organisation name.
• Usage data: pages visited, features accessed, and interaction timestamps collected via cookies and analytics tools.
• Communication data: messages, enquiries, and feedback submitted through our contact forms.

We do not collect sensitive personal health data unless you are a verified government or institutional partner operating under a signed data-processing agreement.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `TheVitals.ai uses collected information to:

• Respond to your enquiries and provide requested services.
• Set up and manage your access to our platform.
• Send transactional communications (service updates, security notices).
• Improve our platform through aggregated, anonymised usage analytics.
• Comply with applicable legal obligations under Indian law, including the Digital Personal Data Protection Act, 2023 (DPDPA).

We do not sell, rent, or trade your personal data to third parties.`,
  },
  {
    title: "3. Data Storage and Security",
    body: `All data is stored on servers located within India. We implement industry-standard security measures including:

• End-to-end encryption for data in transit (TLS 1.2+).
• Encryption at rest for all stored personal data.
• Role-based access controls limiting data access to authorised personnel only.
• Regular security audits and vulnerability assessments.

While we take every reasonable precaution, no system is completely immune to security risks. We encourage you to use strong passwords and report any suspected breach immediately.`,
  },
  {
    title: "4. Cookies and Tracking Technologies",
    body: `Our website uses cookies and similar technologies to enhance your browsing experience and gather analytics. Cookies we use include:

• Essential cookies: required for the website to function correctly.
• Analytics cookies: help us understand how visitors interact with our site (e.g., Google Analytics).
• Preference cookies: remember your settings and preferences.

You may disable cookies through your browser settings. Please note that disabling essential cookies may affect site functionality.`,
  },
  {
    title: "5. Sharing of Information",
    body: `We may share your information in the following limited circumstances:

• Service providers: trusted third-party vendors (e.g., cloud hosting, email services) who process data on our behalf under strict confidentiality agreements.
• Legal compliance: when required by law, court order, or government authority under applicable Indian legislation.
• Business transfers: in the event of a merger, acquisition, or sale of assets, personal data may be transferred as part of that transaction.

In all cases, we take steps to ensure your data is protected.`,
  },
  {
    title: "6. Your Rights",
    body: `Under the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable Indian law, you have the right to:

• Access the personal data we hold about you.
• Correct inaccurate or incomplete data.
• Request erasure of your data where it is no longer necessary for the purposes collected.
• Withdraw consent for processing at any time.
• Nominate a representative to exercise rights on your behalf.

To exercise any of these rights, contact us at info@thevitals.ai. We will respond within 30 days.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Typical retention periods:

• Contact enquiries: 2 years from last interaction.
• Platform usage logs: 12 months on a rolling basis.
• Contractual or compliance records: as required by applicable law (up to 7 years).

Once the retention period expires, data is securely deleted or anonymised.`,
  },
  {
    title: "8. Children's Privacy",
    body: `TheVitals.ai is a B2G/B2B platform intended for use by government bodies, healthcare institutions, and enterprise clients. We do not knowingly collect personal data from individuals under the age of 18. If you believe we have inadvertently collected such data, please contact us immediately at info@thevitals.ai and we will delete it promptly.`,
  },
  {
    title: "9. Third-Party Links",
    body: `Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites. We encourage you to review the privacy policies of any third-party site you visit. TheVitals.ai is not responsible for the content or privacy practices of external websites.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you by email. Your continued use of our website or services after any changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our Data Protection Officer at:

Email: info@thevitals.ai
Phone: +91 89789 29292
Address: TheVitals.ai, Hyderabad, Telangana, India`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(160 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 70% 45%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
              Legal
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-5">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: April 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-gradient-card p-8 md:p-12 shadow-card mb-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              TheVitals.ai ("we", "us", or "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our platform. Please read this policy carefully. If
              you do not agree with its terms, please discontinue use of our services.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card"
              >
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
