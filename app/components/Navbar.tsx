import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="San Bn Yakitori logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            San Bạn Yakitori
          </span>
        </a>

        <div className="flex gap-6 text-sm text-stone-300">
          <a href="#menu" className="transition hover:text-white">
            Menu
          </a>
          <a href="#contact" className="transition hover:text-white">
            Book
          </a>
          <a
            href="https://www.instagram.com/sanbanyakitori"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}