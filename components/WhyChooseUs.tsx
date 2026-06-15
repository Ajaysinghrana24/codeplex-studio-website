"use client";

import { motion } from "framer-motion";
import { Cpu, Clock, TrendingUp, Headphones, ShieldCheck, Briefcase } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    description: "We build with Next.js 15, React, Tailwind, and Node.js. No outdated codebases — only modern frameworks.",
    items: ["React 19 & Next.js App Router", "TypeScript Type Safety", "Tailwind CSS v4 Utilities"],
    color: "from-brand-blue to-brand-cyan",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Time-to-market is critical. We work in sprints, using CI/CD pipelines to ship reliable builds quickly.",
    items: ["Agile Development Sprints", "Continuous Deployment Integration", "Clear Milestones & Deadlines"],
    color: "from-brand-cyan to-brand-purple",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Your product must grow with your business. We architect systems that scale to handle millions of pageviews.",
    items: ["Serverless & Cloud Optimization", "Headless Commerce Architectures", "Optimized Database Queries"],
    color: "from-brand-purple to-brand-blue",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "We are an extension of your team. You get a direct Slack channel with your developers and project managers.",
    items: ["Direct Slack Communication Channel", "Weekly Interactive Updates", "Post-Launch Code Support"],
    color: "from-success to-brand-cyan",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Protecting user data is our top priority. We implement encryption, secure headers, and strict authentication.",
    items: ["OAuth 2.0 & Token Auth", "SSL/TLS Security Standards", "Automated Dependency Auditing"],
    color: "from-brand-blue to-brand-purple",
  },
  {
    icon: Briefcase,
    title: "Business-Focused Dev",
    description: "We don't just write code. We focus on business goals, customer acquisition funnels, and marketing setups.",
    items: ["Conversion Funnel Engineering", "HubSpot & CRM Integration", "Google Analytics & Event Tracking"],
    color: "from-brand-cyan to-brand-blue",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-28 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

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
            Why Partner With Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
          >
            Enterprise-Grade Development <br className="hidden sm:inline" />
            Tailored For <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Your Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            We adhere to strict quality standards, clean code architecture, and high communication frequency.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gsap-cards-container">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative group p-8 rounded-2xl bg-bg-darker/70 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 gsap-card-item"
              >
                {/* Glowing border effects (using a gradient bg that glows on hover) */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 via-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-bg-darker rounded-[15px] z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-gradient-to-r ${feat.color}`}>
                      <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed font-light mb-6">
                    {feat.description}
                  </p>

                  {/* Checked items list */}
                  <ul className="space-y-3 mt-auto">
                    {feat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs text-text-secondary font-medium">
                        {/* Custom Animated Check SVG */}
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-success/20 flex items-center justify-center text-success">
                          <svg
                            className="w-2.5 h-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                          >
                            <motion.path
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 + itemIdx * 0.05 }}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
