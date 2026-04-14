import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const hashLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Consortium", href: "/#consortium" },
  { label: "Case Study", href: "/#case-study" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome    = location.pathname === "/";
  const isContact = location.pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const linkClass = (active: boolean) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      active
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const activeDot = (active: boolean) =>
    active ? (
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
    ) : null;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {hashLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={linkClass(isHome)}
            >
              {link.label}
              {activeDot(isHome)}
            </a>
          ))}
          <Link to="/contact" className={linkClass(isContact)}>
            Contact
            {activeDot(isContact)}
          </Link>
          <Link
            to="/contact"
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-glow ${
              isContact
                ? "bg-gradient-primary text-primary-foreground ring-2 ring-primary/40"
                : "bg-gradient-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {hashLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-medium transition-colors ${isHome ? "text-primary" : "text-foreground hover:text-primary"}`}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/contact"
                className={`font-medium transition-colors ${isContact ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
