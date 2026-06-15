"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-darker/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.03)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Text Branding */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple bg-clip-text text-transparent font-black">Codeplex</span>
            <span className="font-light text-zinc-300">Studio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-purple group-hover:from-brand-blue group-hover:via-brand-cyan group-hover:to-brand-purple hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
            >
              <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-bg-darker rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-text-secondary hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-bg-darker/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col gap-6 text-center mt-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-text-secondary hover:text-white hover:scale-105 transition-all py-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 items-center"
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-sm py-4 px-6 bg-gradient-brand rounded-full text-center font-semibold text-white shadow-lg hover:shadow-brand-blue/25 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
