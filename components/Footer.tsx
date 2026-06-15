"use client";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Work Sprints", href: "#" },
      { name: "Legal Info", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "Shopify E-Commerce", href: "#services" },
      { name: "WordPress Premium", href: "#services" },
      { name: "SaaS Application Dev", href: "#services" },
      { name: "HubSpot & CRM Dev", href: "#services" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "Enterprise CRM", href: "#projects" },
      { name: "Luxury Shopify Plus", href: "#projects" },
      { name: "SaaS Collaboration Board", href: "#projects" },
      { name: "Corporate Redesigns", href: "#projects" },
      { name: "Integration Systems", href: "#projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Technical Blog", href: "#" },
      { name: "API Integrations docs", href: "#" },
      { name: "System Uptime Uti", href: "#" },
      { name: "Free Performance Audits", href: "#" },
      { name: "Partnership Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-darker pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Intro column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent font-black">Codeplex</span>
              <span className="font-light text-zinc-300">Studio</span>
            </a>
            <p className="mt-4 text-xs md:text-sm text-text-muted leading-relaxed max-w-sm font-light">
              We design, build, and support enterprise-grade software products, high-converting storefronts, and automated pipelines. Let&apos;s make something remarkable.
            </p>
            {/* Social media icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-text-muted hover:text-brand-blue hover:bg-white/10 transition-all flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-text-muted hover:text-brand-blue hover:bg-white/10 transition-all flex items-center justify-center" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-text-muted hover:text-brand-blue hover:bg-white/10 transition-all flex items-center justify-center" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-text-muted hover:text-brand-blue hover:bg-white/10 transition-all flex items-center justify-center" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Directory Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
                  {group.title}
                </h4>
                <nav className="flex flex-col gap-3">
                  {group.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.href}
                      className="text-xs md:text-sm text-text-muted hover:text-white transition-colors font-light"
                    >
                      {group.title === "Services" || group.title === "Projects" ? (
                        <span>{link.name}</span>
                      ) : (
                        link.name
                      )}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-light">
            &copy; 2026 Codeplex Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
