import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GSAPAnimations from "@/components/GSAPAnimations";

export default function Home() {
  return (
    <>
      <GSAPAnimations />
      {/* Sticky header navbar */}
      <Navbar />
      
      {/* Single scroll landing container */}
      <main className="flex-grow">
        {/* Hero Banner Grid & Illustration Cards */}
        <Hero />
        
        {/* Animated Performance Stats */}
        <Stats />
        
        {/* Services Showcase Panel */}
        <Services />
        
        {/* Why Choose Us capabilities */}
        <WhyChooseUs />
        
        {/* Interactive project cases */}
        <Projects />
        
        {/* 5-step development roadmap */}
        <Process />
        
        {/* Categorized Tech Tools Badges */}
        <TechStack />
        
        {/* Reviews star feedback */}
        <Testimonials />
        
        {/* Mission, Vision & values details */}
        <About />
        
        {/* Accordions FAQ panels */}
        <FAQ />
        
        {/* Large visual final CTA */}
        <FinalCTA />
        
        {/* Contact budget form */}
        <Contact />
      </main>

      {/* Directory & Social media links footer */}
      <Footer />
    </>
  );
}
