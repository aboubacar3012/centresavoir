"use client";

// Import des composants
import {
  Hero,
  About,
  Testimonials,
  Formations,
  Contact,
  Footer,
  ParticlesBackground,
} from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Le composant ParticlesBackground est maintenant correctement intégré */}
      <ParticlesBackground className="z-0 opacity-25" />
      
      <Hero />
      <About />
      <Formations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
