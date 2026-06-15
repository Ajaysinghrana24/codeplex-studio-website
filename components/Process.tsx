"use client";

import { motion } from "framer-motion";
import { Search, Compass, Palette, Code, Ship } from "lucide-react";

const steps = [
  {
    icon: Search,
    stepNum: "01",
    title: "Discovery & Alignment",
    description: "We deep-dive into your business goals, target audience, technical requirements, and existing bottlenecks. We align on scope, budget, and project metrics.",
    color: "text-brand-blue",
    border: "border-brand-blue/30",
    shadow: "shadow-brand-blue/10",
  },
  {
    icon: Compass,
    stepNum: "02",
    title: "Strategy & Architecture",
    description: "We create a technical blueprint. This includes database schemas, API routes, third-party integrations, CMS architectures, and user flow maps.",
    color: "text-brand-cyan",
    border: "border-brand-cyan/30",
    shadow: "shadow-brand-cyan/10",
  },
  {
    icon: Palette,
    stepNum: "03",
    title: "UI/UX Design Prototypes",
    description: "We design high-fidelity Figma screens with interactive prototypes. We establish custom components, typography, layout, and smooth micro-interactions.",
    color: "text-brand-purple",
    border: "border-brand-purple/30",
    shadow: "shadow-brand-purple/10",
  },
  {
    icon: Code,
    stepNum: "04",
    title: "Engineering & Iteration",
    description: "Our engineers write clean, typed, modular code using Next.js, TypeScript, and Tailwind CSS. We perform frequent sprints and deploy to staging links.",
    color: "text-success",
    border: "border-success/30",
    shadow: "shadow-success/10",
  },
  {
    icon: Ship,
    stepNum: "05",
    title: "Launch & Optimization",
    description: "We run final speed audits, verify responsiveness, perform security sweeps, set up SEO tags, and publish your site with monthly ongoing support.",
    color: "text-brand-blue",
    border: "border-brand-blue/30",
    shadow: "shadow-brand-blue/10",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-bg-darker overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
          >
            Our Proven <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Development Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            From initial kickoff meeting to final deployment, we guide you through each step of development.
          </motion.p>
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Central Line (Hidden on Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 transform md:-translate-x-1/2 z-0">
            {/* Animated glowing overlay line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-brand origin-top"
            />
          </div>

          {/* Timeline steps */}
          <div className="space-y-16 gsap-cards-container">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${isEven ? "md:flex-row" : "md:flex-row-reverse"} w-full`}>
                  {/* Step Card (Detail content side) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-[42%] ml-16 md:ml-0 glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 shadow-lg relative group transition-all gsap-card-item"
                  >
                    {/* Glowing highlight */}
                    <div className={`absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-brand opacity-60 group-hover:opacity-100 transition-opacity`} />

                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-xs font-black uppercase tracking-wider text-brand-cyan">
                        Phase {step.stepNum}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed font-light">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Bullet Center Indicator */}
                  <div className="absolute left-0 md:left-1/2 top-4 md:top-auto transform md:-translate-x-1/2 md:-translate-y-0 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className={`w-16 h-16 rounded-full bg-bg-darker border-2 ${step.border} flex items-center justify-center text-white shadow-xl ${step.shadow} hover:scale-110 transition-transform`}
                    >
                      <IconComp className={`w-6 h-6 ${step.color}`} />
                    </motion.div>
                  </div>

                  {/* Empty side placeholder to balance grid (Only visible on md+ screen) */}
                  <div className="hidden md:block w-[42%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
