"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a project take?",
    answer: "It depends on the complexity of the project. A custom corporate website typically takes 3-4 weeks, whereas complex SaaS dashboard applications or full-scale multi-vendor e-commerce marketplaces take 8-12 weeks.",
  },
  {
    question: "Do you provide support?",
    answer: "Yes, we provide comprehensive monthly support and maintenance packages. This includes uptime monitoring, database optimizations, minor feature expansions, security checks, and priority bug resolution.",
  },
  {
    question: "Can you redesign existing websites?",
    answer: "Absolutely. We perform comprehensive SEO, performance, and accessibility audits, draft mockups in Figma, and build the revised site on modern tech stacks (e.g. Next.js) to preserve your current organic search rankings.",
  },
  {
    question: "Do you build Shopify stores?",
    answer: "Yes, we build custom Shopify stores, Shopify Plus configurations, headless storefronts via Shopify Storefront APIs, custom theme coding, and public or custom Shopify app integrations.",
  },
  {
    question: "Do you provide HubSpot services?",
    answer: "Yes, we build HubSpot CMS websites, configure custom HubSpot templates, sync third-party systems via HubSpot APIs, set up marketing pipelines, and code automated email templates.",
  },
  {
    question: "What industries do you work with?",
    answer: "We partner with brands across high-growth spaces, including B2B SaaS platforms, Luxury E-Commerce companies, Fintech firms, Venture Capital funds, and Corporate Professional Services.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-28 bg-bg-dark overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-white gsap-heading-fade"
          >
            Frequently Asked <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Questions</span>
          </motion.h2>
        </div>

        {/* FAQ list Accordion */}
        <div className="space-y-4 gsap-cards-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 gsap-card-item"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span className="text-base md:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-cyan" : ""
                    }`}
                  />
                </button>

                {/* Animated Body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 ml-8 border-t border-white/5 pt-4">
                        <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
