"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#385bb0] py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-[15px] md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* LEFT COLUMN: Large Typography Graphic */}
        <div className="flex justify-center lg:justify-end lg:pr-16 relative">
          <div className="relative flex flex-col items-center lg:items-start select-none">

            {/* The Big Number */}
            <div className="relative inline-block">
              <span className="text-[180px] sm:text-[220px] lg:text-[280px] font-black leading-[0.8] text-[#f6c845] tracking-tighter drop-shadow-xl">
                10
              </span>

              {/* Overlay Text */}
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[-15%] bg-[#385bb0] px-3 py-1 lg:px-4 lg:py-2 border-2 border-[#f6c845] rounded-md shadow-lg transform rotate-[-2deg]">
                <span className="text-white text-sm lg:text-base font-bold tracking-widest uppercase whitespace-nowrap">
                  Years of Experience
                </span>
              </div>
            </div>

            {/* Bottom Text replacing 'JOHN SMITH' */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white/10 tracking-[0.1em] uppercase mt-2 lg:mt-[-10px] z-0 ml-0 lg:ml-[-40px]">
              CODEPLEX
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-xl mx-auto lg:mx-0">

          {/* Sparkle Icon & Heading Row */}
          <div className="flex items-center gap-4 mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f6c845] animate-pulse">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
              <path d="M20.5 4.5L21.5 7.5L24.5 8.5L21.5 9.5L20.5 12.5L19.5 9.5L16.5 8.5L19.5 7.5L20.5 4.5Z" fill="currentColor" />
              <path d="M4.5 3.5L5 5.5L7 6L5 6.5L4.5 8.5L4 6.5L2 6L4 5.5L4.5 3.5Z" fill="currentColor" />
            </svg>
            <h3 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-none">
              About us
            </h3>
            <span className="hidden sm:block w-24 h-[2px] bg-white/40 ml-4 rounded-full"></span>
          </div>

          {/* Description */}
          <p className="text-white/80 text-[16px] leading-relaxed mb-10">
            We are a dedicated team of digital creators, blending innovation with strategy to build custom web experiences. You can express your brand's unique identity however you want. We customize our approach from scratch, providing an immersive digital library at your disposal.
          </p>

          {/* Actions & Signature */}
          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12 w-full justify-center lg:justify-start">

            <Link
              href="#about"
              className="h-[54px] px-8 inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-[#385bb0] font-bold rounded-full transition-all duration-300 shadow-xl active:scale-95 text-base group"
            >
              <span>Read More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Signature Font Graphic */}
            <div className="font-serif italic text-3xl text-white/90 transform -rotate-2">
              Codeplex Studio
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
