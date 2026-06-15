"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

const servicesList = [
  "Web Development",
  "Shopify Development",
  "WordPress Development",
  "CRM Solutions",
  "HubSpot Development",
  "SaaS Applications",
  "UI/UX Design",
  "API Integration",
  "E-Commerce Development",
  "SEO Optimization",
  "Website Maintenance",
  "Performance Optimization",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-bg-darker overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text & Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4"
              >
                Get In Touch
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white gsap-heading-fade"
              >
                Let&apos;s Build <br />
                Your <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Digital Future</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-muted mt-6 text-sm md:text-base leading-relaxed font-light"
              >
                Ready to take your project to the next level? Share your scope requirements with us. Our technical architects will review your request and schedule a consultation within 24 hours.
              </motion.p>
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-12 space-y-6 gsap-cards-container">
              
              {/* Card 1: Email */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-dark border border-white/5 hover:border-brand-blue/30 transition-all group gsap-card-item"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Email Address
                  </h4>
                  <a href="mailto:hello@codeplexstudio.com" className="text-sm font-bold text-white hover:text-brand-blue transition-colors mt-0.5 block">
                    hello@codeplexstudio.com
                  </a>
                </div>
              </motion.div>

              {/* Card 2: Phone */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-dark border border-white/5 hover:border-brand-cyan/30 transition-all group gsap-card-item"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Phone Support
                  </h4>
                  <a href="tel:+15550192834" className="text-sm font-bold text-white hover:text-brand-cyan transition-colors mt-0.5 block">
                    +1 (555) 019-2834
                  </a>
                </div>
              </motion.div>

              {/* Card 3: Location */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-dark border border-white/5 hover:border-brand-purple/30 transition-all group gsap-card-item"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Studio Location
                  </h4>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    San Francisco, California, USA
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Contact Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-blue focus:bg-white/10 text-white placeholder-text-muted outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-blue focus:bg-white/10 text-white placeholder-text-muted outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company input */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-blue focus:bg-white/10 text-white placeholder-text-muted outline-none transition-all text-sm"
                        />
                      </div>

                      {/* Service select */}
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 focus:border-brand-blue focus:bg-white/10 text-white outline-none transition-all text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select a service...</option>
                          {servicesList.map((s, idx) => (
                            <option key={idx} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project budget select */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 focus:border-brand-blue focus:bg-white/10 text-white outline-none transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Select budget range...</option>
                        {budgetRanges.map((b, idx) => (
                          <option key={idx} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message input */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Message Scope <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project deliverables, timeline, or dependencies..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-blue focus:bg-white/10 text-white placeholder-text-muted outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-brand rounded-xl font-bold text-white shadow-lg hover:shadow-brand-blue/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Scope...
                        </>
                      ) : (
                        <>
                          Send Project Inquiry
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/15 border border-success/35 text-success flex items-center justify-center mb-6 shadow-lg shadow-success/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Thank You!
                    </h3>
                    <p className="text-text-muted mt-3 max-w-sm leading-relaxed font-light text-sm">
                      We have received your project inquiry. A technical architect from Codeplex Studio will review your specs and follow up in your inbox within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2.5 border border-white/10 rounded-full text-xs font-semibold text-text-secondary hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
                    >
                      Inquire another project
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
