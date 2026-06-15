"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 bg-bg-darker overflow-hidden border-t border-white/5">
      {/* Glow decorations behind container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Banner box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-brand rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col items-center text-center shadow-2xl"
        >
          {/* Glass Overlay Pattern */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Glowing particle circles */}
          <div className="absolute top-6 left-12 w-24 h-24 rounded-full bg-white/10 blur-xl animate-pulse" />
          <div className="absolute bottom-6 right-16 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Build <br />
              Something Amazing?
            </h2>
            <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed font-light">
              Let&apos;s transform your ideas into a powerful digital product. Partner with Codeplex Studio for custom engineering, Shopify scale, CRM automations, and enterprise web solutions.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <a
                href="#contact"
                className="px-8 py-4 bg-bg-darker rounded-full font-bold text-white hover:bg-black transition-all shadow-xl hover:shadow-black/30 w-full sm:w-auto text-center flex items-center justify-center gap-2 group active:scale-95"
              >
                Start Project
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <Calendar className="w-4.5 h-4.5" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
