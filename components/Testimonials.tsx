"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Director of E-Commerce",
    company: "Aura Cosmetics",
    review: "Codeplex Studio completely rebuilt our Shopify store. Our site speed increased by 40%, and we saw a direct 22% increase in sales conversion in the first month. Their headless development capability is outstanding.",
    rating: 5,
    initials: "SJ",
    color: "from-brand-blue to-brand-cyan",
  },
  {
    name: "Marcus Vance",
    role: "Founder",
    company: "FinFlow SaaS",
    review: "The team delivered our custom SaaS billing platform exactly on schedule. Their architectural blueprints, Next.js optimization, and API speed are top-tier. Communication was flawless throughout.",
    rating: 5,
    initials: "MV",
    color: "from-brand-purple to-brand-blue",
  },
  {
    name: "Elena Rostova",
    role: "VP of Growth",
    company: "Apex Solutions",
    review: "Their HubSpot integration and custom CRM automation pipelines revolutionized our lead capturing systems. We went from messy manual sheets to structured, high-value dashboards in weeks.",
    rating: 5,
    initials: "ER",
    color: "from-success to-brand-cyan",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-bg-darker overflow-hidden border-t border-white/5">
      {/* Background ambient decorations */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
          >
            What Our Partners <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Say About Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            We build long-term relationships based on transparency, high-quality development, and business ROI.
          </motion.p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gsap-cards-container">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/15 transition-all relative flex flex-col justify-between group gsap-card-item"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 pointer-events-none group-hover:text-brand-blue/10 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4.5 h-4.5 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>

                {/* Review Copy */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light italic mb-8">
                  &ldquo;{test.review}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-4">
                {/* Custom Avatar Initial Circle */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${test.color} flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-md`}>
                  {test.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5 font-medium">
                    {test.role}, <span className="text-text-secondary">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
