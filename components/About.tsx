"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#385bb0] pt-12 pb-4 lg:pt-20 lg:pb-10 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-[15px] md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* LEFT COLUMN: Unique Premium Graphic */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mr-auto flex justify-center items-center">

          {/* Abstract Background Blurs */}
          <div className="absolute top-[15%] left-[15%] w-64 h-64 bg-[#f6c845] rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[15%] right-[15%] w-64 h-64 bg-[#1d233b] rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>

          {/* The Big Stroke Number (Background) */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <span className="text-[250px] sm:text-[350px] font-black text-transparent opacity-20" style={{ WebkitTextStroke: '4px rgba(255,255,255,0.8)' }}>
              10
            </span>
          </div>

          {/* Foreground Glassmorphism Card */}
          <div className="relative z-10 w-full max-w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#f6c845] flex items-center justify-center shadow-lg shadow-[#f6c845]/30">
                <svg className="w-6 h-6 text-[#1d233b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className="text-white font-bold tracking-widest uppercase text-sm">Experience</span>
            </div>

            <h3 className="text-6xl font-black text-white mb-2 tracking-tighter">10<span className="text-[#f6c845]">+</span></h3>
            <p className="text-white/80 font-medium text-lg leading-snug">Years of shaping digital products and leading innovation.</p>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=11" alt="client" className="w-10 h-10 rounded-full border-2 border-[#385bb0] bg-zinc-200 object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="client" className="w-10 h-10 rounded-full border-2 border-[#385bb0] bg-zinc-300 object-cover" />
                <img src="https://i.pravatar.cc/100?img=33" alt="client" className="w-10 h-10 rounded-full border-2 border-[#385bb0] bg-zinc-400 object-cover" />
                <div className="w-10 h-10 rounded-full border-2 border-[#385bb0] bg-white flex items-center justify-center text-xs font-bold text-[#385bb0]">+1k</div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-xl">150+</div>
                <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">Projects</div>
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <div className="absolute top-[5%] right-[-5%] sm:right-0 bg-[#1d233b] border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-bounce shadow-black/40 z-20" style={{ animationDuration: '3s' }}>
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-white text-sm font-bold whitespace-nowrap">100% Success</span>
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
              About Us
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
              className="h-[48px] px-7 inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-[#385bb0] font-bold rounded-full transition-all duration-300 shadow-xl active:scale-95 text-sm group"
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
