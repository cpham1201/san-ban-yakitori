"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/gallery/_DSC0771.jpg", alt: "San Ban Yakitori team at the grill" },
  { src: "/gallery/_DSC0996.jpg", alt: "Yakitori grilling over flame and smoke" },
  { src: "/gallery/_DSC0748.jpg", alt: "Guests enjoying yakitori" },
  { src: "/gallery/_DSC0660.jpg", alt: "Charcoal glowing in the grill" },
  { src: "/gallery/_DSC0984.jpg", alt: "Yakitori grilling over fire" },
  { src: "/gallery/_DSC0888.jpg", alt: "Yakitori served from the grill" },
  { src: "/gallery/_DSC1129.jpg", alt: "Yakitori over charcoal smoke" },
  { src: "/gallery/_DSC0810.jpg", alt: "Skewers over the charcoal grill" },
  { src: "/gallery/_DSC0816.jpg", alt: "Yakitori grilling at an event" },
  { src: "/gallery/_DSC0930.jpg", alt: "Cherry tomatoes served from the grill" },
];

export default function AboutSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isGalleryPausedRef = useRef(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGalleryVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      }
    );

    observer.observe(gallery);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || !isGalleryVisible) {
      return;
    }

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (shouldReduceMotion.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      if (isGalleryPausedRef.current) {
        return;
      }

      const firstCard = gallery.querySelector<HTMLElement>("[data-gallery-card]");
      if (!firstCard) {
        return;
      }

      const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap || "0");
      const step = firstCard.offsetWidth + gap;
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      const nextScroll = gallery.scrollLeft + step >= maxScroll - 4 ? 0 : gallery.scrollLeft + step;

      gallery.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
    }, 3800);

    return () => {
      window.clearInterval(interval);
    };
  }, [isGalleryVisible]);

  return (
    <section className="bg-[#080808]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="hero-reveal">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mx-auto max-w-xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Built Around Yakitori
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300 md:mx-auto sm:text-[1.05rem]">
              San Bạn Yakitori is three friends with a shared passion for grilling
              delicious yakitori over charcoal and bringing people together
              through food.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300 md:mx-auto sm:text-[1.05rem]">
              We&apos;re a pop-up catering service serving Orange County and surrounding areas,
              offering authentic yakitori to private events, parties, and special gatherings.
            </p>
          </div>
        </div>

        <div className="hero-reveal">
          <div
            ref={galleryRef}
            className="gallery-scroll -mx-5 mt-10 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:gap-4 sm:px-6 md:mt-12"
            onPointerDown={() => {
              isGalleryPausedRef.current = true;
            }}
            onPointerUp={() => {
              window.setTimeout(() => {
                isGalleryPausedRef.current = false;
              }, 2200);
            }}
            onPointerCancel={() => {
              isGalleryPausedRef.current = false;
            }}
            onMouseEnter={() => {
              isGalleryPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isGalleryPausedRef.current = false;
            }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.src}
                data-gallery-card
                className="relative aspect-[4/3] w-[42vw] flex-none snap-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] sm:w-[48vw] md:w-[31%]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 31vw, (min-width: 640px) 48vw, 42vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
