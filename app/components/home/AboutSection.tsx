"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current;
    if (!gallery) {
      return;
    }

    const firstCard = gallery.querySelector<HTMLElement>("[data-gallery-card]");
    const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap || "0");
    const step = firstCard ? firstCard.offsetWidth + gap : gallery.clientWidth * 0.8;

    isGalleryPausedRef.current = true;
    gallery.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      isGalleryPausedRef.current = false;
    }, 1800);
  }

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
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-[4.5rem]">
        <div className="hero-reveal">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mx-auto max-w-xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
              Built Around Yakitori
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300 md:mx-auto sm:text-[1.05rem]">
              San Bạn Yakitori is a pop-up catering service from three friends{" "}
              <br className="hidden md:block" />
              who love bringing people together over charcoal-grilled skewers.{" "}
              <br className="hidden md:block" />
              Serving birthdays, private events, and celebrations across OC, LA,
              and nearby areas.
            </p>
          </div>
        </div>

        <div className="hero-reveal relative">
          <button
            type="button"
            onClick={() => scrollGallery(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur transition hover:border-white/45 hover:bg-white hover:text-black md:flex"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => scrollGallery(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur transition hover:border-white/45 hover:bg-white hover:text-black md:flex"
            aria-label="Scroll gallery right"
          >
            <ChevronRight size={22} />
          </button>

          <div className="relative">
            <div
              ref={galleryRef}
              className="gallery-scroll -mx-5 mt-8 flex cursor-grab select-none snap-x gap-3 overflow-x-auto px-5 pb-2 active:cursor-grabbing sm:-mx-6 sm:gap-4 sm:px-6 md:mt-10 lg:-mx-8 lg:px-8"
              onPointerDown={(event) => {
                const gallery = galleryRef.current;
                if (!gallery) {
                  return;
                }

                isGalleryPausedRef.current = true;
                dragStateRef.current = {
                  isDragging: true,
                  startX: event.clientX,
                  scrollLeft: gallery.scrollLeft,
                };
                gallery.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const gallery = galleryRef.current;
                const dragState = dragStateRef.current;
                if (!gallery || !dragState.isDragging) {
                  return;
                }

                event.preventDefault();
                gallery.scrollLeft = dragState.scrollLeft - (event.clientX - dragState.startX);
              }}
              onPointerUp={(event) => {
                const gallery = galleryRef.current;
                dragStateRef.current.isDragging = false;
                gallery?.releasePointerCapture(event.pointerId);
                window.setTimeout(() => {
                  isGalleryPausedRef.current = false;
                }, 2200);
              }}
              onPointerCancel={() => {
                dragStateRef.current.isDragging = false;
                isGalleryPausedRef.current = false;
              }}
              onMouseEnter={() => {
                isGalleryPausedRef.current = true;
              }}
              onMouseLeave={() => {
                dragStateRef.current.isDragging = false;
                isGalleryPausedRef.current = false;
              }}
              onWheel={(event) => {
                const gallery = galleryRef.current;
                if (!gallery || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                  return;
                }

                const maxScroll = gallery.scrollWidth - gallery.clientWidth;
                if (maxScroll <= 0) {
                  return;
                }

                event.preventDefault();
                gallery.scrollLeft += event.deltaY;
              }}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  data-gallery-card
                  className="relative aspect-[4/3] w-[42vw] flex-none snap-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] sm:w-[48vw] md:w-[36%] lg:w-[30%]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    draggable={false}
                    className="pointer-events-none object-cover"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 36vw, (min-width: 640px) 48vw, 42vw"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
