"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";

const testimonials = [
  {
    quote:
      "San Ban was a highlight of our engagement party. Guests loved the food, and watching everything grilled live made the night feel special.",
    event: "Engagement party",
    location: "Orange County",
  },
  {
    quote:
      "The skewers were amazing, but the live grill setup made it even better. Everyone kept talking about the food and the whole experience.",
    event: "Engagement party",
    location: "Orange County",
  },
  {
    quote:
      "The food was incredible and brought us right back to Japan. Every skewer tasted fresh, smoky, and full of flavor.",
    event: "Private event",
    location: "Orange County",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <Reveal className="md:hidden">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035]">
            <figure className="flex min-h-[17.5rem] flex-col justify-center px-5 py-6 text-center">
              <blockquote
                key={activeTestimonial.quote}
                className="status-card text-[1.12rem] font-semibold leading-8 text-white"
              >
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm leading-6 text-stone-400">
                <span className="block font-semibold text-stone-200">
                  {activeTestimonial.event}
                </span>
                <span>{activeTestimonial.location}</span>
              </figcaption>
            </figure>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={`${testimonial.event}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-7 bg-white"
                        : "w-2 bg-white/25"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  {activeIndex + 1} / {testimonials.length}
                </span>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition active:bg-white active:text-black"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition active:bg-white active:text-black"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="hidden gap-3 sm:gap-4 md:grid md:grid-cols-3 md:items-start">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.event}-${index}`}
              delay={index * 80}
              className={index === 1 ? "md:mt-8" : index === 2 ? "md:mt-3" : ""}
            >
              <figure className="group relative flex h-full min-h-[11rem] flex-col justify-between overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] sm:min-h-[12rem] sm:rounded-[1.75rem] sm:p-6 md:min-h-0">
                <span
                  className="absolute right-4 top-3 text-4xl leading-none text-white/[0.08] transition group-hover:text-white/[0.14] sm:right-5 sm:top-4 sm:text-5xl"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
                <blockquote className="relative text-[0.92rem] leading-6 text-stone-100 sm:text-lg sm:leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs leading-5 text-stone-400 sm:mt-6 sm:text-sm sm:leading-6">
                  <span className="block font-semibold text-stone-200">
                    {testimonial.event}
                  </span>
                  <span>{testimonial.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
