"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise CRM Platform",
    description: "High-performance business operations platform managing leads routing, team assignments, contact pipelines, and custom event tracking.",
    tags: ["SaaS", "CRM System"],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Tailwind"],
    gradient: "from-brand-blue/30 via-brand-cyan/20 to-transparent",
    mockupType: "crm",
  },
  {
    title: "Luxury Shopify Store",
    description: "Bespoke storefront experience built on Shopify Plus, with custom headless search, real-time variant caching, and immersive product pages.",
    tags: ["E-Commerce", "Headless Shopify"],
    tech: ["Shopify Plus", "React", "GraphQL", "Tailwind"],
    gradient: "from-brand-cyan/30 via-brand-purple/20 to-transparent",
    mockupType: "ecommerce",
  },
  {
    title: "SaaS Dashboard Application",
    description: "Collaborative project planner containing real-time workspace syncing, dynamic Kanban boards, lead scoring algorithms, and analytics exports.",
    tags: ["SaaS Product", "Productivity"],
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    gradient: "from-brand-purple/30 via-brand-blue/20 to-transparent",
    mockupType: "dashboard",
  },
  {
    title: "Corporate Website Redesign",
    description: "Modern enterprise branding platform for a leading venture capital firm, fully optimized for Web Vitals (99+ score) and Google crawl index.",
    tags: ["Enterprise Web", "SEO / Speed"],
    tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    gradient: "from-brand-blue/30 via-success/15 to-transparent",
    mockupType: "corporate",
  },
  {
    title: "HubSpot Automation System",
    description: "Complex workflow integration syncing marketing pipelines, lead qualifiers, contact events, and live agent portals between client systems.",
    tags: ["HubSpot API", "Integration"],
    tech: ["HubSpot Dev", "Node.js", "AWS Lambda", "API Sync"],
    gradient: "from-brand-purple/30 via-brand-cyan/25 to-transparent",
    mockupType: "automation",
  },
  {
    title: "Multi-Vendor Marketplace",
    description: "Comprehensive retail engine supporting automatic seller commission calculations, merchant dashboard portal, and Stripe Connect payouts.",
    tags: ["Marketplace", "Payment Flow"],
    tech: ["Next.js", "Express", "Stripe API", "PostgreSQL"],
    gradient: "from-success/20 via-brand-blue/20 to-transparent",
    mockupType: "marketplace",
  },
];

// Simulated dashboard mockup components in SVG format to look premium
const ProjectMockup = ({ type }: { type: string }) => {
  if (type === "crm") {
    return (
      <svg className="w-full h-full opacity-80" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="12" fill="#0A0F1D" stroke="#1E293B" strokeWidth="2" />
        <rect x="20" y="20" width="80" height="200" rx="12" fill="#0D1527" stroke="#1E293B" />
        <circle cx="45" cy="45" r="10" fill="#3B82F6" />
        <rect x="35" y="70" width="50" height="8" rx="4" fill="#1E293B" />
        <rect x="35" y="90" width="50" height="8" rx="4" fill="#1E293B" />
        <rect x="35" y="110" width="50" height="8" rx="4" fill="#1E293B" />
        <rect x="120" y="40" width="240" height="40" rx="8" fill="#0D1527" stroke="#1E293B" />
        <rect x="135" y="52" width="100" height="16" rx="4" fill="#3B82F6" fillOpacity="0.2" />
        <rect x="120" y="100" width="110" height="100" rx="8" fill="#0D1527" stroke="#1E293B" />
        <rect x="245" y="100" width="115" height="100" rx="8" fill="#0D1527" stroke="#1E293B" />
        <circle cx="175" cy="150" r="25" fill="#1E293B" />
        <circle cx="175" cy="150" r="25" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="120 40" />
      </svg>
    );
  }
  if (type === "ecommerce") {
    return (
      <svg className="w-full h-full opacity-80" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="12" fill="#0E121E" stroke="#1E293B" strokeWidth="2" />
        <rect x="40" y="40" width="140" height="160" rx="8" fill="#090D16" stroke="#1E293B" />
        <circle cx="110" cy="100" r="30" fill="#06B6D4" fillOpacity="0.2" />
        <rect x="60" y="150" width="100" height="10" rx="5" fill="#1E293B" />
        <rect x="60" y="170" width="60" height="8" rx="4" fill="#1E293B" />
        <rect x="200" y="40" width="160" height="35" rx="6" fill="#090D16" stroke="#1E293B" />
        <rect x="200" y="85" width="160" height="35" rx="6" fill="#090D16" stroke="#1E293B" />
        <rect x="200" y="130" width="160" height="35" rx="6" fill="#090D16" stroke="#1E293B" />
        <circle cx="220" cy="57" r="8" fill="#06B6D4" />
        <circle cx="220" cy="102" r="8" fill="#8B5CF6" />
        <circle cx="220" cy="147" r="8" fill="#3B82F6" />
      </svg>
    );
  }
  if (type === "dashboard") {
    return (
      <svg className="w-full h-full opacity-80" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="12" fill="#090C15" stroke="#1E293B" strokeWidth="2" />
        <rect x="40" y="40" width="320" height="30" rx="6" fill="#0E1220" stroke="#1E293B" />
        <circle cx="55" cy="55" r="5" fill="#3B82F6" />
        <rect x="75" y="51" width="120" height="8" rx="4" fill="#1E293B" />
        <rect x="40" y="85" width="150" height="115" rx="8" fill="#0E1220" stroke="#1E293B" />
        <rect x="205" y="85" width="155" height="115" rx="8" fill="#0E1220" stroke="#1E293B" />
        <path d="M55 170 L90 130 L120 150 L170 110" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="170" cy="110" r="4" fill="#8B5CF6" />
        <rect x="220" y="105" width="120" height="8" rx="4" fill="#1E293B" />
        <rect x="220" y="125" width="100" height="8" rx="4" fill="#1E293B" />
        <rect x="220" y="145" width="80" height="8" rx="4" fill="#1E293B" />
      </svg>
    );
  }
  // Fallback representation
  return (
    <svg className="w-full h-full opacity-80" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="360" height="200" rx="12" fill="#0A0A0E" stroke="#1E293B" strokeWidth="2" />
      <path d="M40 160 L120 100 L200 130 L300 60 L360 90" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="300" cy="60" r="6" fill="#06B6D4" />
      <circle cx="120" cy="100" r="6" fill="#8B5CF6" />
    </svg>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-bg-darker overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[130px] pointer-events-none" />

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
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
          >
            Products Crafted With <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Precision & Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            Explore our showcase of digital systems designed to solve business problems and perform flawlessly.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 gsap-cards-container">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300 gsap-card-item"
            >
              {/* Card Header Illustration Placeholder */}
              <div className="relative h-56 bg-bg-dark border-b border-white/5 overflow-hidden flex items-center justify-center p-6">
                {/* Glowing light behind preview */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${proj.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`} />
                
                {/* Embedded SVG device mockup */}
                <div className="w-full max-w-sm h-full flex items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-500">
                  <ProjectMockup type={proj.mockupType} />
                </div>

                {/* Tag Overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Info Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-blue transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-3 leading-relaxed font-light">
                    {proj.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/5 text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project button link */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors"
                  >
                    View Project Details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="p-1.5 rounded-full bg-white/5 text-text-muted group-hover:bg-brand-blue/15 group-hover:text-white transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
