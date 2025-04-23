"use client";

// Import des composants
import {
  Hero,
  About,
  Testimonials,
  Formations,
  Contact,
  Footer,
} from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Formations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
