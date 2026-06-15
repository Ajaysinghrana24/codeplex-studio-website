"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "100+",
    label: "Projects Delivered",
    description: "Enterprise software, ecommerce storefronts, and custom SaaS platforms.",
    highlight: "from-brand-blue to-brand-cyan",
  },
  {
    number: "50+",
    label: "Happy Clients",
    description: "Startups, scaleups, and established brands worldwide.",
    highlight: "from-brand-cyan to-brand-purple",
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "Delivering cutting-edge solutions using modern technical frameworks.",
    highlight: "from-brand-purple to-brand-blue",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Highly rated partnerships based on communication, quality, and support.",
    highlight: "from-success to-brand-cyan",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-bg-dark border-y border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-bg-darker/60 border border-white/5 hover:border-white/10 transition-all flex flex-col group overflow-hidden"
            >
              {/* Decorative side accent bar */}
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Glowing corner on hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:bg-brand-blue/10 transition-all duration-300" />

              {/* Number */}
              <h3 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.highlight} bg-clip-text text-transparent tracking-tight`}>
                {stat.number}
              </h3>

              {/* Label */}
              <h4 className="text-white text-lg font-bold mt-4 tracking-tight">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
