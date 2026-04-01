"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleNavClick(sectionId: string) {
    setIsOpen(false);

    // wait for menu animation to finish before scrolling
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200); // tweak if needed
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logo2.png"
            alt="San Ban Yakitori"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-xs font-semibold tracking-[0.18em] text-white sm:text-sm sm:tracking-widest">
            SAN BẠN YAKITORI
          </span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
            <a href="#packages" className="transition hover:text-white">
              Packages
            </a>
            <a href="#menu" className="transition hover:text-white">
              Menu
            </a>
            <a href="#contact" className="transition hover:text-white">
              Inquire
            </a>
            <a
              href="https://instagram.com/sanbanyakitori"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </nav>

          {/* Mobile Instagram */}
          <a
            href="https://instagram.com/sanbanyakitori"
            target="_blank"
            rel="noreferrer"
            className="text-stone-300 transition hover:text-white md:hidden"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-stone-300 transition hover:text-white active:scale-90 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 text-sm text-stone-300">
          <button
            onClick={() => handleNavClick("packages")}
            className="rounded-md px-2 py-3 text-left transition hover:bg-white/5 hover:text-white"
          >
            Packages
          </button>
          <button
            onClick={() => handleNavClick("menu")}
            className="rounded-md px-2 py-3 text-left transition hover:bg-white/5 hover:text-white"
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="rounded-md px-2 py-3 text-left transition hover:bg-white/5 hover:text-white"
          >
            Inquire
          </button>
        </nav>
      </div>
    </header>
  );
}