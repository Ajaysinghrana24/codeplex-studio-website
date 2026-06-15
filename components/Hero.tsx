"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, ShoppingBag, BarChart3, Database, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-bg-darker">
      {/* 1. Animated Code-Inspired Backgrounds */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Floating Glowing Gradients */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gsap-hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Empowering Digital Evolution
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gsap-hero-fade text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white"
          >
            Building Digital <br />
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Experiences</span> <br className="hidden sm:inline" />
            That Drive Growth
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gsap-hero-fade mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-light"
          >
            We help startups, businesses, and enterprises create powerful websites, Shopify stores, CRM systems, and scalable digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gsap-hero-fade mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-brand rounded-full font-semibold text-white shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 active:scale-95 transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* Right Side: Modern Dashboard Illustration Cards */}
        <div className="lg:col-span-5 relative w-full max-w-[500px] h-[480px] flex items-center justify-center scale-90 sm:scale-100 lg:scale-95 xl:scale-105 origin-center transition-transform mx-auto lg:mx-0 mt-8 lg:mt-0">
          {/* Background Ambient Circle for Dashboard */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-brand-blue/15 filter blur-3xl pointer-events-none" />

          {/* Card 1: Website Development (Top Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-0 left-2 w-56 sm:w-64 glass-card p-4 rounded-2xl shadow-2xl border-white/10 hover:border-brand-blue/30 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-brand-blue/20 text-brand-blue">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-text-secondary">Web App Dev</span>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="font-mono text-[10px] text-zinc-400 leading-normal space-y-1">
              <p className="text-brand-cyan">const codeplex = &#123;</p>
              <p className="pl-3">speed: <span className="text-brand-purple">&quot;99&quot;</span>,</p>
              <p className="pl-3">tech: <span className="text-brand-purple">&quot;Next.js&quot;</span>,</p>
              <p className="pl-3">seo: <span className="text-brand-purple">&quot;Optimized&quot;</span></p>
              <p className="text-brand-cyan">&#125;;</p>
            </div>
          </motion.div>

          {/* Card 2: Shopify E-Commerce (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-8 right-2 w-52 sm:w-60 glass-card p-4 rounded-2xl shadow-2xl border-white/10 hover:border-brand-cyan/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-brand-cyan/20 text-brand-cyan">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-text-secondary">Shopify Commerce</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-black tracking-tight text-white">$14,285</span>
              <span className="ml-2 text-[10px] font-bold text-success bg-success/10 px-1.5 py-0.5 rounded-full">+48.2%</span>
            </div>
            <p className="text-[10px] text-text-muted mt-1">Total revenue today</p>
          </motion.div>

          {/* Card 3: HubSpot / CRM Automation (Center Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-12 left-2 w-52 sm:w-60 glass-card p-4 rounded-2xl shadow-2xl border-white/10 hover:border-brand-purple/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-brand-purple/20 text-brand-purple">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-text-secondary">CRM & Automation</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-text-muted">Marketing Funnel</span>
                <span className="text-white font-medium">Active</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-gradient-brand"
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-text-muted">
                <span>Leads Captured: 1,280</span>
                <span className="text-brand-purple font-semibold">95% score</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Analytics Dashboard (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 60 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-2 right-2 w-56 sm:w-64 glass-card p-4 rounded-2xl shadow-2xl border-white/10 hover:border-brand-blue/30 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-success/20 text-success">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-text-secondary">Real-Time Analytics</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                Live
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-16 pt-2">
              {[30, 45, 25, 60, 50, 75, 40, 90, 65, 80].map((val, idx) => (
                <div key={idx} className="flex-1 bg-white/5 rounded-t h-full flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 1, delay: 0.8 + idx * 0.05 }}
                    className="w-full bg-gradient-to-t from-brand-blue to-brand-cyan rounded-t"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-2.5 text-[9px] text-text-muted">
              <span>08:00 AM</span>
              <span>10:00 PM</span>
            </div>
          </motion.div>

          {/* Card 5: Central Branding / Hub widget (Center Overlapping) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute z-10 w-36 sm:w-44 glass-card p-3 rounded-2xl border-brand-blue/40 shadow-2xl bg-bg-darker/90 text-center flex flex-col items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white mb-2 shadow-lg shadow-brand-blue/20">
              <Layers className="w-4.5 h-4.5" />
            </div>
            <h4 className="text-xs font-bold text-white">Codeplex Engine</h4>
            <p className="text-[9px] text-success font-medium mt-0.5 flex items-center gap-1 justify-center">
              <CheckCircle2 className="w-2.5 h-2.5" />
              Connected & Scaled
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
