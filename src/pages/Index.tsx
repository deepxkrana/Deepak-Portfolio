import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Certifications from "@/components/sections/Certifications";
import Terminal from "@/components/sections/Terminal";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Terminal />
      <About />
      <Contact />
      <footer className="py-12 border-t border-border text-center font-mono text-[10px] text-muted-foreground uppercase tracking-[0.5em]">
        Deepak Rana © 2026 // All rights reserved
      </footer>
    </main>
  );
};

export default Index;
