"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { SelectedItem } from "@/app/data/menu";

type MenuItemModalProps = {
  selectedItem: SelectedItem | null;
  imageLoaded: boolean;
  onClose: () => void;
  onImageLoad: () => void;
};

export default function MenuItemModal({
  selectedItem,
  imageLoaded,
  onClose,
  onImageLoad,
}: MenuItemModalProps) {
  if (!selectedItem) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/60 p-2 text-white transition hover:bg-white hover:text-black"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="relative min-h-[320px] w-full overflow-hidden bg-black px-4 pb-4 pt-16 sm:min-h-[480px] sm:px-6 sm:pb-6">
          <div
            className={`absolute inset-0 bg-white/[0.03] transition-opacity duration-200 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          <div className="relative z-10 flex min-h-[280px] items-center justify-center sm:min-h-[420px]">
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={900}
              height={1200}
              priority
              className={`h-auto max-h-[55svh] w-auto max-w-full rounded-xl object-contain transition-all duration-300 sm:max-h-[65svh] ${
                imageLoaded
                  ? "scale-100 opacity-100"
                  : "scale-[0.985] opacity-0"
              }`}
              onLoad={onImageLoad}
            />
          </div>
        </div>

        <div className="border-t border-white/10 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            {selectedItem.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-stone-300 sm:text-base sm:leading-7">
            {selectedItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}