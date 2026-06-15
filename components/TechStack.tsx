"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Server, Database, Store, Cloud } from "lucide-react";

const techCategories = [
  {
    icon: LayoutGrid,
    title: "Frontend Development",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 border-brand-blue/20",
    techs: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 border-brand-purple/20",
    techs: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "WebSockets", "Microservices"],
  },
  {
    icon: Database,
    title: "Database & Storage",
    color: "text-success",
    bg: "bg-success/10 border-success/20",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis Caching", "Supabase", "Prisma ORM"],
  },
  {
    icon: Store,
    title: "CMS & Platforms",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10 border-brand-cyan/20",
    techs: ["Shopify Plus", "WordPress", "HubSpot CRM", "Headless CMS", "WooCommerce", "Sanity.io"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 border-brand-blue/20",
    techs: ["AWS", "Vercel", "DigitalOcean", "Docker Containers", "CI/CD Sprints", "Cloudflare DNS"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-28 bg-bg-dark overflow-hidden border-t border-white/5">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Our Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
          >
            Our Modern <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Technology Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            We choose fast, secure, and reliable tools that scale with your application demand.
          </motion.p>
        </div>

        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 gsap-cards-container">
          {techCategories.map((category, idx) => {
            const IconComp = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all duration-300 group gsap-card-item"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-lg ${category.bg} text-white flex items-center justify-center`}>
                      <IconComp className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-bg-darker border border-white/5 text-text-secondary hover:border-brand-blue/30 hover:text-white transition-all cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
