"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code2, Menu, X, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
        : "bg-transparent py-6"
        }`}
    >
      <div className="w-full max-w-[85%] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#385bb0] to-[#6d8acb] flex items-center justify-center shadow-lg shadow-[#385bb0]/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-[#385bb0] transition-colors duration-300">
              Codeplex<span className="text-zinc-650 font-normal">Studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-zinc-900 hover:text-[#385bb0] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#385bb0]"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#385bb0] hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#385bb0] hover:after:w-full after:transition-all after:duration-300"
            >
              Case Studies
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#385bb0] hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
          </nav>

          {/* Desktop Outline Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="h-[48px] px-6 inline-flex items-center justify-center border border-[#385bb0] text-sm font-bold text-[#385bb0] hover:text-white hover:bg-[#385bb0] rounded-full transition-all duration-300 active:scale-95 shadow-sm shadow-[#385bb0]/10"
            >
              Contact Now
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-zinc-650 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 transition-all duration-300 ease-in-out shadow-lg ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          }`}
        id="mobile-menu"
      >
        <div className="px-6 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-900 hover:text-[#385bb0] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
          <div className="pt-4 border-t border-zinc-200">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="h-[48px] px-6 flex w-full items-center justify-center border border-[#385bb0] text-sm font-bold text-[#385bb0] hover:text-white hover:bg-[#385bb0] rounded-full transition-all"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
