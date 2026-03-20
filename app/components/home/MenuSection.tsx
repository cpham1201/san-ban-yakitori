"use client";

import Image from "next/image";
import { menuA, menuB, type MenuItem } from "@/app/data/menu";

type MenuSectionProps = {
  onSelectItem: (item: MenuItem) => void;
};

type MenuCardProps = {
  item: MenuItem;
  onSelectItem: (item: MenuItem) => void;
};

function MenuCard({ item, onSelectItem }: MenuCardProps) {
  const isClickable = Boolean(item.image);

  return (
    <button
      type="button"
      onClick={() => {
        if (isClickable) onSelectItem(item);
      }}
      disabled={!isClickable}
      className={`group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 ${
        isClickable
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] active:scale-[0.99]"
          : "cursor-default"
      }`}
      aria-label={isClickable ? `View ${item.name}` : item.name}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.02]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-stone-500">
            No image
          </div>
        )}

        {isClickable && (
          <div className="absolute bottom-3 right-3 md:hidden">
            <span className="rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              View
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {item.name}
        </h3>

        {item.description && (
          <p className="mt-2 text-sm leading-6 text-stone-400">
            {item.description}
          </p>
        )}
      </div>
    </button>
  );
}

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  return (
    <section
      id="menu"
      className="scroll-mt-20 border-t border-white/10 bg-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold">Menu</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/20"></div>
        </div>

        <div className="space-y-16">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Menu A</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menuA.map((item) => (
                <MenuCard
                  key={item.name}
                  item={item}
                  onSelectItem={onSelectItem}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Menu B</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {menuB.map((item) => (
                <MenuCard
                  key={item.name}
                  item={item}
                  onSelectItem={onSelectItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}