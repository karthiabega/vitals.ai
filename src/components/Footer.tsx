import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const solutionLinks = [
  { label: "Disease Classification", slug: "disease-classification" },
  { label: "Early Detection", slug: "early-detection" },
  { label: "Medication Adherence", slug: "medication-adherence" },
  { label: "Intelligent Data Pipelines", slug: "intelligent-data-pipelines" },
  { label: "Model Building with AI", slug: "model-building-with-ai" },
  { label: "Agentic AI Workflows", slug: "agentic-ai-workflows" },
];

const platformLinks = [
  { label: "Agentic AI", href: "/#platform" },
  { label: "APHOP", href: "/#solutions" },
  { label: "Consortium", href: "/#consortium" },
  { label: "Case Studies", href: "/#case-study" },
];

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <Logo className="mb-5" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5">
              Architecting sovereign AI infrastructure for India's public health and
              governance ecosystem.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a href="mailto:info@thevitals.ai" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary flex-shrink-0" />
                info@thevitals.ai
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary flex-shrink-0" />
                +91 98765 43210
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5">Platform</h4>
            <ul className="flex flex-col gap-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5">Solutions</h4>
            <ul className="flex flex-col gap-2.5">
              {solutionLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    to={`/solutions/${link.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Ready to transform public health infrastructure for your state?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} TheVitals.ai — All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
