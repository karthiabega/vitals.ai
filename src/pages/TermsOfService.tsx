import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the TheVitals.ai website, platform, or any associated services (collectively, "Services"), you agree to be bound by these Terms of Service ("Terms"). If you are accessing the Services on behalf of a government body, institution, or organisation, you represent that you have authority to bind that entity to these Terms.

If you do not agree with any part of these Terms, you must discontinue use of the Services immediately.`,
  },
  {
    title: "2. Description of Services",
    body: `TheVitals.ai provides AI infrastructure solutions for general health and governance, including but not limited to:

• Disease classification and early detection AI systems.
• Medication adherence monitoring tools.
• Intelligent data pipelines for health data management.
• Agentic AI workflow automation for state health departments.
• Model building and analytics services.

These Services are designed for government bodies, healthcare institutions, and enterprise clients. Access to specific features may require a separate agreement, licensing arrangement, or data-processing contract.`,
  },
  {
    title: "3. User Accounts and Access",
    body: `Access to certain parts of our platform requires account registration. You agree to:

• Provide accurate and complete information during registration.
• Keep your credentials confidential and not share them with unauthorised individuals.
• Notify us immediately at info@thevitals.ai if you suspect unauthorised access to your account.
• Accept responsibility for all activity that occurs under your account.

We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably suspect are being misused.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content, software, designs, algorithms, data models, and materials available through the Services are the exclusive property of TheVitals.ai or its licensors, and are protected by Indian and international intellectual property laws.

You are granted a limited, non-exclusive, non-transferable licence to access and use the Services solely for your authorised purposes. You may not:

• Copy, reproduce, or distribute any part of the Services without prior written consent.
• Reverse-engineer, decompile, or attempt to extract source code from our software.
• Use our trademarks, logos, or brand elements without written permission.
• Create derivative works based on our proprietary systems or algorithms.`,
  },
  {
    title: "5. Acceptable Use",
    body: `You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not:

• Use the Services in any manner that violates applicable Indian or international law.
• Transmit any material that is harmful, fraudulent, defamatory, or infringes third-party rights.
• Attempt to gain unauthorised access to any part of the platform or its infrastructure.
• Introduce malware, viruses, or any malicious code into the Services.
• Use the Services to process data in a manner inconsistent with your stated purpose or any data-processing agreement.
• Engage in any activity that disrupts or impairs the performance of the Services.`,
  },
  {
    title: "6. Data and Privacy",
    body: `Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Services, you consent to the collection and use of information as described in the Privacy Policy.

Where you provide or process health-related or government data through the Services, you warrant that you have all necessary legal authority, consents, and authorisations to do so, and that such processing complies with applicable law including the Digital Personal Data Protection Act, 2023 (DPDPA).`,
  },
  {
    title: "7. Confidentiality",
    body: `Each party agrees to keep confidential any non-public information disclosed by the other party in connection with the Services, and to use such information only for the purposes of receiving or providing the Services. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.

Institutional clients may be subject to additional confidentiality obligations under separate agreements.`,
  },
  {
    title: "8. Disclaimers",
    body: `The Services are provided on an "as is" and "as available" basis. TheVitals.ai makes no warranties, express or implied, including but not limited to:

• Warranties of merchantability or fitness for a particular purpose.
• Guarantees that the Services will be uninterrupted, error-free, or free of harmful components.
• Accuracy or completeness of AI-generated outputs or analytics.

AI-generated insights and recommendations are intended to support human decision-making and should not be treated as definitive medical, legal, or policy advice. Final decisions remain the responsibility of qualified professionals.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, TheVitals.ai and its officers, directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services, including but not limited to loss of data, loss of revenue, or loss of goodwill.

Our total cumulative liability for any claims arising under these Terms shall not exceed the amount paid by you to TheVitals.ai in the 12 months preceding the claim.`,
  },
  {
    title: "10. Indemnification",
    body: `You agree to indemnify, defend, and hold harmless TheVitals.ai and its affiliates, officers, and employees from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:

• Your use of or inability to use the Services.
• Your violation of these Terms.
• Your infringement of any third-party rights, including intellectual property or privacy rights.
• Any data or content you submit through the Services.`,
  },
  {
    title: "11. Termination",
    body: `We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.

Upon termination, your right to use the Services will immediately cease. Provisions of these Terms that by their nature should survive termination (including intellectual property, disclaimers, limitation of liability, and indemnification) shall continue to apply.`,
  },
  {
    title: "12. Governing Law and Dispute Resolution",
    body: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising under or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation.

If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.`,
  },
  {
    title: "13. Changes to These Terms",
    body: `We may revise these Terms from time to time. When we make material changes, we will update the "Last updated" date at the top of this page. Your continued use of the Services after the effective date of any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: "14. Contact Us",
    body: `If you have any questions about these Terms of Service, please contact us at:

Email: info@thevitals.ai
Phone: +91 89789 29292
Address: TheVitals.ai, Hyderabad, Telangana, India`,
  },
];

const TermsOfService = () => {
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
              Terms of <span className="text-gradient">Service</span>
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
              Please read these Terms of Service carefully before using the TheVitals.ai website or
              platform. These Terms constitute a legally binding agreement between you and
              TheVitals.ai governing your access to and use of our Services.
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

export default TermsOfService;
