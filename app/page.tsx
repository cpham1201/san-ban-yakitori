"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { menuA, menuB, type MenuItem, type SelectedItem } from "./data/menu";
import MenuItemModal from "./components/home/MenuItemModal";
import PackagesSection from "./components/home/PackagesSection";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import MenuSection from "./components/home/MenuSection";

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  function closeModal() {
    setSelectedItem(null);
    setImageLoaded(false);
  }

  function openMenuItem(item: MenuItem) {
    if (!item.image) return;

    setImageLoaded(false);
    setSelectedItem({
      name: item.name,
      description: item.description || "",
      image: item.image,
    });
  }

  useEffect(() => {
    const imagesToPreload = [
      ...menuA
        .filter((item) => item.clickable && item.image)
        .map((item) => item.image as string),
      ...menuB
        .filter((item) => item.clickable && item.image)
        .map((item) => item.image as string),
    ];

    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <AboutSection />
        <PackagesSection />
        <MenuSection onSelectItem={openMenuItem} />
        <ContactSection />
      </main>

      <MenuItemModal
        selectedItem={selectedItem}
        imageLoaded={imageLoaded}
        onClose={closeModal}
        onImageLoad={() => setImageLoaded(true)}
      />
    </>
  );
}