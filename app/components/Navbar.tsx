import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="San Ban Yakitori"
            width={28}
            height={28}
          />
          <span className="text-sm font-semibold tracking-widest">
            SAN BAN YAKITORI
          </span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm text-stone-300">

          <a
            href="#packages"
            className="transition hover:text-white"
          >
            Packages
          </a>

          <a
            href="#menu"
            className="transition hover:text-white"
          >
            Menu
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Inquire
          </a>

          <a
            href="https://instagram.com/sanbanyakitori"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <Instagram size={18} />
          </a>

        </nav>
      </div>
    </header>
  );
}