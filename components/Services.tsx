"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  ShoppingBag, 
  Globe, 
  Database, 
  Workflow, 
  Layers, 
  Palette, 
  Link2, 
  CreditCard, 
  TrendingUp, 
  Settings, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with Next.js, React, and TypeScript. Scalable architectures designed for speed.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 border-brand-blue/20",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "High-converting Shopify Plus stores. Custom themes, app integrations, and headless commerce solutions.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10 border-brand-cyan/20",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Premium enterprise WordPress websites with custom blocks, secure architectures, and blazing-fast loading speeds.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 border-brand-purple/20",
  },
  {
    icon: Database,
    title: "CRM Solutions",
    description: "Tailored CRM configurations, custom features, dashboard analytics, and direct workflows mapped to your sales pipelines.",
    color: "text-success",
    bg: "bg-success/10 border-success/20",
  },
  {
    icon: Workflow,
    title: "HubSpot Development",
    description: "HubSpot template development, pipeline automation, custom integrations, API sync, and tracking dashboards.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 border-brand-blue/20",
  },
  {
    icon: Layers,
    title: "SaaS Applications",
    description: "End-to-end software development from ideation and wireframing to production deployment and database scaling.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 border-brand-purple/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning Figma designs, wireframes, user flow mapping, conversion rate optimization, and brand assets.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10 border-brand-cyan/20",
  },
  {
    icon: Link2,
    title: "API Integration",
    description: "Secure third-party API configurations, webhooks, microservices, and database synchronizations.",
    color: "text-success",
    bg: "bg-success/10 border-success/20",
  },
  {
    icon: CreditCard,
    title: "E-Commerce Development",
    description: "Custom headless ecommerce setups, secure checkout pathways, Stripe/Braintree setups, and product analytics.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 border-brand-blue/20",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Technical search engine optimization, semantic code markup, structure data patterns, and content speed improvements.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10 border-brand-cyan/20",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Proactive uptime monitoring, core updates, security firewalls, monthly checkups, and priority code updates.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 border-brand-purple/20",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximize Core Web Vitals. Code splitting, asset optimization, script lazy loading, and caching setups.",
    color: "text-success",
    bg: "bg-success/10 border-success/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
} as const;

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-bg-darker overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight gsap-heading-fade"
          >
            Digital Services Designed <br className="hidden sm:inline" />
            For <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent">Maximum Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            We combine engineering excellence with strategic design to build products that deliver business metrics.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gsap-cards-container"
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-start relative group gsap-card-item"
              >
                {/* Icon Container */}
                <div className={`p-3 rounded-xl ${service.bg} mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className={`w-6 h-6 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed font-light flex-1">
                  {service.description}
                </p>

                {/* subtle border line animation */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
