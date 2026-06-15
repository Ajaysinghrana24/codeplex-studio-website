"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Heart, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-bg-darker overflow-hidden border-t border-white/5">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Who We Are Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4"
            >
              Who We Are
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
            >
              Driving Innovation Through <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Strategic Engineering</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white mt-6 text-lg md:text-xl font-medium leading-relaxed"
            >
              We combine creativity, strategy, and technology to help businesses build exceptional digital experiences that generate measurable results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-muted mt-4 text-sm md:text-base leading-relaxed font-light"
            >
              At Codeplex Studio, we believe code is a vehicle for growth. We partner closely with corporate leaders and startup founders to conceptualize, wireframe, engineer, and deploy applications that capture value and support operations at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-cyan transition-colors group"
              >
                Learn more about our engagement terms
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Mission, Vision, and Values Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6 gsap-cards-container">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all flex gap-5 items-start gsap-card-item"
            >
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Rocket className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed font-light">
                  To craft performance-driven, accessible, and secure software applications that solve business bottlenecks, automate labor-heavy procedures, and empower internal teams.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all flex gap-5 items-start gsap-card-item"
            >
              <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <Eye className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Our Vision
                </h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed font-light">
                  To be recognized globally as the premier technological blueprint and engineering partner, helping startups accelerate to market and helping enterprises rebuild for speed.
                </p>
              </div>
            </motion.div>

            {/* Core Values Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-purple/30 transition-all flex gap-5 items-start gsap-card-item"
            >
              <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Heart className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Our Core Values
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 text-xs text-text-secondary font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    Engineering Precision
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    Absolute Transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    Customer Autonomy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Continuous Innovation
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
