import { packages } from "@/app/data/menu";

export default function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-14 border-b border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-white">Packages</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/20"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {packages.slice(0, 4).map((pkg) => (
            <div
              key={pkg.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-5 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-white/40"></div>

              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
              </div>

              <ul className="space-y-2 text-sm leading-6 text-stone-400">
                <li>• {pkg.skewers}</li>
                <li>• {pkg.time}</li>
                <li>• Setup + breakdown included</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="w-full md:w-[calc((100%-1.5rem)/2)]">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-white/40"></div>

              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{packages[4].name}</h3>
              </div>

              <ul className="space-y-2 text-sm leading-6 text-stone-400">
                <li>• {packages[4].skewers}</li>
                <li>• {packages[4].time}</li>
                <li>• Setup + breakdown included</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-stone-300">
          Please inquire for pricing and menu details.
        </p>
      </div>
    </section>
  );
}