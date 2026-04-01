"use client";

import Image from "next/image";
import { menuA, menuB, type MenuItem } from "@/app/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-stone-500">
            No image
          </div>
        )}
      </div>

      <div className="p-3 sm:p-5">
        <h3 className="text-sm font-semibold leading-snug text-white sm:text-lg">
          {item.name}
        </h3>
      </div>
    </div>
  );
}

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="scroll-mt-20 border-t border-white/10 bg-white/5"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Menu</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/20" />
        </div>

        <div className="space-y-14">
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Menu A</h3>
            </div>
            <MenuGrid items={menuA} />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Menu B</h3>
            </div>
            <MenuGrid items={menuB} />
          </div>
        </div>
      </div>
    </section>
  );
}