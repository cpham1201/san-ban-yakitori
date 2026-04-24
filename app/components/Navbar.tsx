"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Instagram, Menu, X } from "lucide-react";

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
        const headerHeight = menuRef.current?.offsetHeight ?? 0;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top,
          behavior: "smooth",
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
      className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/logo2.png"
            alt="San Ban Yakitori"
            width={28}
            height={28}
            className="h-9 w-6 object-contain"
          />
          <span className="text-xs font-semibold tracking-[0.16em] text-white sm:text-sm">
            SAN BẠN YAKITORI
          </span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-sm text-stone-300 md:flex">
            <button
              type="button"
              onClick={() => handleNavClick("packages")}
              className="transition hover:text-white"
            >
              Packages
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("menu")}
              className="transition hover:text-white"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="transition hover:text-white"
            >
              Inquire
            </button>
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
            className="rounded-md p-1 text-stone-300 transition hover:text-white active:scale-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/45 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-500 ease-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-5 text-stone-200">
          <button
            onClick={() => handleNavClick("packages")}
            className="group flex min-h-14 items-center justify-between border-b border-white/10 px-1 text-left text-lg transition hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/35"
          >
            <span>Packages</span>
            <ChevronRight
              size={20}
              className="text-stone-500 transition group-hover:translate-x-1 group-hover:text-white"
            />
          </button>
          <button
            onClick={() => handleNavClick("menu")}
            className="group flex min-h-14 items-center justify-between border-b border-white/10 px-1 text-left text-lg transition hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/35"
          >
            <span>Menu</span>
            <ChevronRight
              size={20}
              className="text-stone-500 transition group-hover:translate-x-1 group-hover:text-white"
            />
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="group flex min-h-14 items-center justify-between px-1 text-left text-lg transition hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/35"
          >
            <span>Inquire</span>
            <ChevronRight
              size={20}
              className="text-stone-500 transition group-hover:translate-x-1 group-hover:text-white"
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
