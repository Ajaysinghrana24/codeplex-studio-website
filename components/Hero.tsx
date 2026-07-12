"use client";

import Link from "next/link";
import { Send, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-0 select-none">
      <div className="w-full max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: INTRO CONTENT (7/12 parts) ================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Main Large Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-[#1d233b] mb-4 leading-none select-none">
            Codeplex Studio👋
          </h1>

          {/* Underline & Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-[2px] bg-[#1d233b]" />
            <span className="text-lg sm:text-xl font-semibold text-[#1d233b] tracking-wide">
              Creative Digital Developers
            </span>
          </div>

          {/* Description Paragraph (exactly 16px) */}
          <p className="text-zinc-650 text-[16px] mb-10 max-w-xl leading-relaxed">
            We are a creative digital agency based in India, passionate and dedicated to building custom web products, Shopify storefronts, and premium UI designs.
          </p>

          {/* Action Buttons (12px round = rounded-xl) */}
          <div className="flex flex-row items-center gap-8 mb-16 flex-wrap">
            <Link
              href="#contact"
              className="h-[48px] px-7 inline-flex items-center justify-center gap-3 bg-[#385bb0] hover:bg-[#1d233b] text-white font-bold rounded-full transition-all duration-300 shadow-md shadow-[#385bb0]/10 active:scale-95 text-sm group"
            >
              <span>Say Hello</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-3 text-[#1d233b] hover:text-[#385bb0] font-bold transition-colors text-sm sm:text-base group"
            >
              <span>My Works</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Follow Us On Row */}
          <div className="flex items-center gap-5">
            <span className="text-sm font-bold text-[#1d233b] uppercase tracking-wider">Follow us on:</span>
            <div className="flex gap-3">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#edf0f6] text-[#1d233b] hover:bg-[#385bb0] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Behance"
              >
                <span className="text-sm font-bold font-serif leading-none mt-[-2px]">Bē</span>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#edf0f6] text-[#1d233b] hover:bg-[#385bb0] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Dribbble"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.39c-.085-.24-.415-1.07-.97-1.85a18.36 18.36 0 0 0-4.71-3.69 22.38 22.38 0 0 0-3.32-6.19c-.31.06-.61.12-.91.2a24.1 24.1 0 0 1 3.25 5.92 19.34 19.34 0 0 1-5.63 1.3 22.75 22.75 0 0 0-2.8-5.37A10.15 10.15 0 0 0 2.21 9.5c.34.05 1.55.19 3.27.09a24 24 0 0 1 5.09 5.86 17.5 17.5 0 0 1-6.7 1.83c-.02.13-.03.26-.03.4a10.05 10.05 0 0 0 7.84 9.8 19.8 19.8 0 0 0 1.63-5.26 21 21 0 0 0 6.64 1.13c.7 0 1.34-.05 1.94-.13a10.04 10.04 0 0 0 2.28-7.91zM9.46 21.84a17.9 17.9 0 0 1-1.39-4.8 15.6 15.6 0 0 0 5.48-1.57 20 20 0 0 1 1.09 5.56 10.07 10.07 0 0 0-5.18.81zm9.35-3.32a19.78 19.78 0 0 0-1.04-4.82 22.42 22.42 0 0 1 4.14-.14 10.03 10.03 0 0 0-3.1 4.96z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#edf0f6] text-[#1d233b] hover:bg-[#385bb0] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: (5/12 parts - Empty for now) ================= */}
        <div className="lg:col-span-5 flex justify-center items-center h-[350px] sm:h-[400px] lg:h-[450px] w-full mt-8 lg:mt-0 select-none overflow-visible">
          {/* We will build this next step */}
        </div>

      </div>
    </section>
  );
}
