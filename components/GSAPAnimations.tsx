"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || initialized.current) return;
    initialized.current = true;

    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // 1. HERO TEXT REVEAL — Character split animation
    // ==========================================
    const heroTexts = document.querySelectorAll(".gsap-hero-fade");
    heroTexts.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.3 + idx * 0.15,
          ease: "power3.out",
        }
      );
    });

    // ==========================================
    // 2. SECTION HEADING REVEALS — Split word slide up
    // ==========================================
    const headings = document.querySelectorAll(".gsap-heading-fade");
    headings.forEach((heading) => {
      // Wrap each word in a span for word-level animation
      const text = heading.textContent || "";
      const words = text.split(" ");

      // Only do word-split on headings that don't contain HTML children
      if (heading.children.length === 0 || heading.querySelectorAll("span, br").length > 0) {
        // For complex HTML headings, just do a smooth reveal
        gsap.fromTo(
          heading,
          { opacity: 0, y: 50, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // ==========================================
    // 3. CARD CONTAINER STAGGER — Slide up with stagger + scale
    // ==========================================
    const containers = document.querySelectorAll(".gsap-cards-container");
    containers.forEach((container) => {
      const cards = container.querySelectorAll(".gsap-card-item");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // ==========================================
    // 4. PARALLAX FLOATING BACKGROUNDS
    // ==========================================
    const blurBGs = document.querySelectorAll("[class*='blur-[']");
    blurBGs.forEach((bg) => {
      gsap.to(bg, {
        y: () => gsap.utils.random(-40, 40),
        x: () => gsap.utils.random(-20, 20),
        ease: "none",
        scrollTrigger: {
          trigger: bg.parentElement || bg,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    // ==========================================
    // 5. SECTION ENTRANCE — Full section fade + slide
    // ==========================================
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      // Animate section label/badge
      const badges = section.querySelectorAll("[class*='tracking-wider'][class*='uppercase']");
      badges.forEach((badge) => {
        gsap.fromTo(
          badge,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: badge,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Animate description paragraphs
      const descriptions = section.querySelectorAll(".text-text-muted, .text-text-secondary");
      descriptions.forEach((desc) => {
        if (desc.closest(".gsap-cards-container") || desc.closest(".gsap-card-item")) return;
        gsap.fromTo(
          desc,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: desc,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    // ==========================================
    // 6. HORIZONTAL SLIDE-IN — For about / contact side panels
    // ==========================================
    const slideLeftEls = document.querySelectorAll(".gsap-slide-left");
    slideLeftEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const slideRightEls = document.querySelectorAll(".gsap-slide-right");
    slideRightEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // ==========================================
    // 7. NAVBAR LOGO ENTRANCE
    // ==========================================
    gsap.fromTo(
      "header a:first-child",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.1, ease: "power2.out" }
    );

    // Desktop nav links stagger
    const navLinks = document.querySelectorAll("header nav a");
    if (navLinks.length > 0) {
      gsap.fromTo(
        navLinks,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }

    // CTA button entrance
    const ctaBtn = document.querySelector("header .hidden.lg\\:block a");
    if (ctaBtn) {
      gsap.fromTo(
        ctaBtn,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" }
      );
    }

    // ==========================================
    // 8. STAT COUNTER ANIMATION
    // ==========================================
    const statNumbers = document.querySelectorAll("[class*='text-4xl'][class*='font-black'][class*='bg-gradient-to-r']");
    statNumbers.forEach((statEl) => {
      const text = statEl.textContent || "";
      const numericMatch = text.match(/(\d+)/);
      if (numericMatch) {
        const target = parseInt(numericMatch[1], 10);
        const suffix = text.replace(numericMatch[0], "");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: statEl,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            (statEl as HTMLElement).textContent = Math.floor(obj.val) + suffix;
          },
        });
      }
    });

    // ==========================================
    // 9. TIMELINE VERTICAL LINE GLOW PULSE
    // ==========================================
    const timelineLines = document.querySelectorAll("[class*='bg-gradient-brand'][class*='origin-top']");
    timelineLines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: line.parentElement || line,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1,
          },
        }
      );
    });

    // ==========================================
    // 10. FOOTER ENTRANCE
    // ==========================================
    const footer = document.querySelector("footer");
    if (footer) {
      const footerChildren = footer.querySelectorAll(":scope > div > div > *");
      gsap.fromTo(
        footerChildren,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // ==========================================
    // 11. GLASS CARD HOVER GLOW PULSE (Magnetic feel)
    // ==========================================
    const glassCards = document.querySelectorAll(".glass-card");
    glassCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // ==========================================
    // 12. CTA BUTTONS PULSE ANIMATION
    // ==========================================
    const ctaButtons = document.querySelectorAll("[class*='bg-gradient-brand'][class*='rounded-full']");
    ctaButtons.forEach((btn) => {
      // Only for main CTA buttons, not tiny elements
      if ((btn as HTMLElement).offsetWidth > 100) {
        gsap.fromTo(
          btn,
          { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.3)" },
          {
            boxShadow: "0 0 20px 4px rgba(59, 130, 246, 0)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }
    });

    // Clean up triggers and listeners on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return null;
}
