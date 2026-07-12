"use client";

import Link from "next/link";
import { Send, ArrowUpRight, ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

const socialLinks = [
  {
    name: "Behance",
    url: "https://behance.net",
    borderColor: "#1769ff",
    icon: (
      <span className="text-sm font-bold font-serif leading-none mt-[-2px] text-[#1769ff]">Bē</span>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    borderColor: "#0a66c2",
    icon: (
      <svg className="w-5 h-5 fill-[#0a66c2]" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    borderColor: "#c13584",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-[#c13584]" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  }
];

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
            <div className="flex items-center gap-2">
              <span className="relative text-base font-bold text-[#1d233b] tracking-wide inline-block">
                <span className="relative z-10">Follow us on</span>
                <span className="absolute bottom-[2px] left-0 right-0 h-[8px] bg-[#fbe790]/80 z-0 rounded-[1px]" />
              </span>
              <ArrowRight className="w-[18px] h-[18px] text-[#1d233b]" />
            </div>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-sm"
                  style={{
                    border: `1.5px solid ${item.borderColor}`,
                    borderRadius: "50% 50% 50% 0px",
                  }}
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: (5/12 parts) ================= */}
        <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0 select-none overflow-visible">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
}
