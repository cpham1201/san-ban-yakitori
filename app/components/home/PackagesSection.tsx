"use client";

import {
  experiences,
  sharedExperienceIncludes,
  skewerOptions,
} from "@/app/data/menu";
import Reveal from "../Reveal";

export default function PackagesSection() {
  function handleExperienceRequest(experienceName: string) {
    window.dispatchEvent(
      new CustomEvent("sanban:select-experience", {
        detail: `${experienceName} - Not sure yet`,
      })
    );
  }

  return (
    <section id="experiences" className="scroll-mt-14 border-y border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            Choose Your Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-7 text-stone-300 sm:text-base">
            Select the experience that best fits your event.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-white/25"></div>
        </Reveal>

        <Reveal delay={80} className="mx-auto mb-9 max-w-3xl sm:mb-12">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] px-5 py-3.5 sm:px-6 sm:py-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Every experience includes
            </p>
            <p className="mt-3 flex flex-col items-center gap-1 text-center text-[0.95rem] font-semibold leading-6 text-stone-200 sm:mt-4 sm:block sm:leading-7">
              {sharedExperienceIncludes.map((item, index) => (
                <span key={item} className="whitespace-nowrap">
                  {index > 0 ? (
                    <span className="hidden sm:inline"> • </span>
                  ) : null}
                  {item}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <div className="grid items-center gap-5 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <Reveal key={experience.name} delay={index * 70}>
              <article
                className={`group relative flex h-full flex-col rounded-lg border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                  experience.mostPopular
                    ? "z-10 border-white/45 bg-white/[0.095] shadow-2xl shadow-black/60 lg:scale-[1.05]"
                    : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex min-h-9 items-start justify-between gap-4 border-b border-white/10 pb-3.5 sm:pb-4">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {experience.name}
                  </h3>
                  {experience.mostPopular ? (
                    <span className="rounded-full border border-white/25 bg-white px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-black sm:px-3 sm:py-1 sm:text-[0.68rem] sm:tracking-[0.12em]">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-3.5 flex-1 text-[0.95rem] leading-7 text-stone-300 sm:mt-4 sm:text-base">
                  {experience.description}
                </p>

                <div className="mt-3 text-[0.95rem] leading-6 text-stone-300 sm:mt-3.5">
                  <p>{experience.selectionDescription}</p>
                  <p className="mt-1 whitespace-nowrap text-[0.68rem] italic leading-5 text-stone-500 min-[390px]:text-[0.72rem] sm:text-xs xl:text-sm">
                    {experience.approximateMix}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Highlights
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-6 text-stone-300 sm:mt-2.5 sm:space-y-2">
                    {experience.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3.5 sm:mt-5 sm:pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Starting at
                  </p>
                  <p className="mt-1.5 text-4xl font-semibold leading-none text-white">
                    {experience.prices[200]}
                  </p>
                </div>

                <ul className="mt-3 divide-y divide-white/10 border-y border-white/10 text-[0.92rem] text-stone-200">
                  {skewerOptions.map((skewers) => (
                    <li
                      key={skewers}
                      className="flex items-center justify-between gap-4 py-2"
                    >
                      <span className="font-medium text-stone-100">
                        {skewers.toLocaleString()} Skewers
                      </span>
                      <span className="font-semibold text-white">
                        {experience.prices[skewers]}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => handleExperienceRequest(experience.name)}
                  className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-center text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-0.5 ${
                    experience.mostPopular
                      ? "bg-white text-black hover:bg-stone-200"
                      : "border border-white/35 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  Request {experience.name}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-xs leading-5 text-stone-500">
            Starting prices are based on Orange County events. Final pricing may
            vary depending on location and custom requests.
          </p>
          <p className="mt-3 text-[0.95rem] font-semibold leading-7 text-stone-200">
            Need more than 1,000 skewers or a custom menu? Contact us for a custom
            proposal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
