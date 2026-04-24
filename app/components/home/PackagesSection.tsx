import { packages } from "@/app/data/menu";
import Reveal from "../Reveal";

export default function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-14 border-y border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <Reveal className="mb-9 text-center sm:mb-12">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">Packages</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/25"></div>
        </Reveal>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-5">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 70}>
              <div className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4 sm:mb-6">
                  <h3 className="text-[0.82rem] font-semibold text-white sm:text-sm">
                    {pkg.name}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-[0.7rem] font-semibold text-stone-200 sm:h-8 sm:w-8 sm:text-xs">
                    {index + 1}
                  </span>
                </div>

                <p className="text-lg font-semibold leading-none text-white sm:text-xl">
                  {pkg.skewers}
                </p>

                <ul className="mt-4 flex flex-1 flex-col justify-end space-y-2 text-[0.88rem] leading-6 text-stone-300 sm:mt-5 sm:space-y-3 sm:text-sm">
                  <li>{pkg.time}</li>
                  <li>Setup + breakdown included</li>
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-8 text-center text-sm text-stone-300">
          Please inquire for pricing and menu details.
        </Reveal>
      </div>
    </section>
  );
}
