"use client";

import Image from "next/image";
import { menuA, menuB, type MenuItem } from "@/app/data/menu";
import Reveal from "../Reveal";

type MenuCardProps = {
  item: MenuItem;
};

function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-stone-500">
            No image
          </div>
        )}
      </div>

      <div className="flex min-h-28 flex-1 items-center p-4 sm:min-h-24">
        <h3 className="text-[0.95rem] font-semibold leading-snug text-white sm:text-base">
          {item.name}
        </h3>
      </div>
    </div>
  );
}

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.name} delay={index * 45} className="h-full">
          <MenuCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="scroll-mt-20 bg-[#050505]"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="mb-9 text-center sm:mb-12">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">Menu</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/25" />
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <div className="mb-4 border-b border-white/10 pb-3">
              <h3 className="text-lg font-semibold text-white">Menu A</h3>
            </div>
            <MenuGrid items={menuA} />
          </Reveal>

          <Reveal>
            <div className="mb-4 border-b border-white/10 pb-3">
              <h3 className="text-lg font-semibold text-white">Menu B</h3>
            </div>
            <MenuGrid items={menuB} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
