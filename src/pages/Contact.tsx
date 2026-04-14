import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "Disease Classification",
  "Early Detection",
  "Medication Adherence",
  "Intelligent Data Pipelines",
  "Model Building with AI",
  "Agentic AI Workflows",
  "General Inquiry",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@thevitals.ai",
    href: "mailto:info@thevitals.ai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

const inputBase =
  "w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all duration-200";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Page Header ──────────────────────────────────────── */}
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
              Contact Us
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-5">
              Let's Build{" "}
              <span className="text-gradient">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform India's public health infrastructure? Our team of
              sovereign AI specialists is here to help design the right solution for your
              state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Body ─────────────────────────────────────── */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

            {/* Left: Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-6 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card mt-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">
                  Our Solutions
                </p>
                <div className="flex flex-col gap-2">
                  {serviceOptions.slice(0, 6).map((s) => {
                    const slug = s.toLowerCase().replace(/ /g, "-");
                    return (
                      <Link
                        key={s}
                        to={`/solutions/${slug}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowRight size={12} className="text-primary" />
                        {s}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-gradient-card p-8 md:p-10 shadow-card">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-5"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glow">
                      <CheckCircle size={40} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold">Message Received!</h2>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. Our team will get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", organization: "", email: "", phone: "", service: "", message: "" }); }}
                      className="mt-2 px-6 py-3 rounded-lg border border-border text-sm font-semibold hover:bg-secondary transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <h2 className="font-heading text-2xl font-bold mb-1">Send Us a Message</h2>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form below and we'll be in touch shortly.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ramesh Sharma"
                          className={inputBase}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Organization <span className="text-primary">*</span>
                        </label>
                        <input
                          name="organization"
                          required
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="State Health Department"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@organisation.gov.in"
                          className={inputBase}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Phone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Area of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="" disabled>Select a solution…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, state, and what outcomes you're aiming for…"
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
