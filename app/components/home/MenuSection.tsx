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
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] active:scale-[0.98]"
          : "cursor-default"
      }`}
      aria-label={isClickable ? `View ${item.name}` : item.name}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-stone-500">
            No image
          </div>
        )}

        {/* Mobile View badge */}
        {isClickable && (
          <div className="absolute bottom-2 right-2 md:hidden">
            <span className="rounded-full border border-white/15 bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              View
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="p-3 sm:p-5">
        <h3 className="text-sm font-semibold leading-snug text-white sm:text-lg">
          {item.name}
        </h3>
      </div>
    </button>
  );
}

function MenuGrid({
  items,
  onSelectItem,
}: {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}) {
  const evenItems = items.slice(0, items.length - (items.length % 2));
  const hasOdd = items.length % 2 === 1;
  const lastItem = items[items.length - 1];

  return (
    <>
      {/* Desktop + Tablet (normal grid) */}
      <div className="hidden md:grid grid-cols-2 gap-3 lg:grid-cols-4">
        {items.map((item) => (
          <MenuCard
            key={item.name}
            item={item}
            onSelectItem={onSelectItem}
          />
        ))}
      </div>

      {/* Mobile (custom handling) */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {evenItems.map((item) => (
          <MenuCard
            key={item.name}
            item={item}
            onSelectItem={onSelectItem}
          />
        ))}
      </div>

      {/* Mobile centered last item */}
      {hasOdd && (
        <div className="mt-3 flex justify-center md:hidden">
          <div className="w-1/2">
            <MenuCard item={lastItem} onSelectItem={onSelectItem} />
          </div>
        </div>
      )}
    </>
  );
}

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  return (
    <section
      id="menu"
      className="scroll-mt-20 border-t border-white/10 bg-black"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Menu</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/20" />
        </div>

        <div className="space-y-14">
          {/* Menu A */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Menu A</h3>
            </div>

            <MenuGrid items={menuA} onSelectItem={onSelectItem} />
          </div>

          {/* Menu B */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Menu B</h3>
            </div>

            <MenuGrid items={menuB} onSelectItem={onSelectItem} />
          </div>
        </div>
      </div>
    </section>
  );
}