import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);


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
              <a href="tel:+918978929292" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary flex-shrink-0" />
                +91 89789 29292
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

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <FacebookIcon />
            </a>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
