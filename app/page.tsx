"use client";

import Navbar from "./components/Navbar";
import PackagesSection from "./components/home/PackagesSection";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import MenuSection from "./components/home/MenuSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
        <HeroSection />
        <AboutSection />
        <PackagesSection />
        <MenuSection />
        <ContactSection />
      </main>
    </>
  );
}
