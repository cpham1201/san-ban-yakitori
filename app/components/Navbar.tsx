"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="San Ban Yakitori"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-xs font-semibold tracking-[0.18em] text-white sm:text-sm sm:tracking-widest">
            SAN BAN YAKITORI
          </span>
        </a>

        <div className="flex items-center gap-4">
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

          <a
            href="https://instagram.com/sanbanyakitori"
            target="_blank"
            rel="noreferrer"
            className="text-stone-300 transition hover:text-white md:hidden"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-stone-300 transition hover:text-white md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="flex flex-col px-4 py-4 text-sm text-stone-300">
            <a
              href="#packages"
              onClick={closeMenu}
              className="py-3 transition hover:text-white"
            >
              Packages
            </a>
            <a
              href="#menu"
              onClick={closeMenu}
              className="py-3 transition hover:text-white"
            >
              Menu
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3 transition hover:text-white"
            >
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}