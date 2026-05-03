import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[66svh] overflow-hidden border-b border-white/10 bg-black sm:min-h-[76svh]">
      <Image
        src="/hero-yakitori-fire.jpg"
        alt="Yakitori grilling over open flame at a San Ban Yakitori event"
        fill
        className="object-cover object-[48%_center] saturate-[1.18] contrast-[1.08] brightness-[1.08] sm:object-[50%_center]"
        sizes="100vw"
        quality={92}
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/25 to-black/10" />

      <div className="relative mx-auto flex min-h-[66svh] max-w-6xl items-end px-5 pb-8 pt-20 sm:min-h-[76svh] sm:px-6 sm:pb-14 lg:pb-16">
        <div className="max-w-2xl text-left">
          <h1 className="hero-reveal mt-4 text-4xl font-semibold leading-[1.05] text-white [text-shadow:0_2px_18px_rgb(0_0_0_/_0.55)] sm:text-6xl lg:text-7xl">
            <span className="block">Live Yakitori</span>
            <span className="block whitespace-nowrap">Grilled Over Fire</span>
          </h1>

          <p className="hero-reveal mt-5 max-w-[21rem] text-base leading-7 text-stone-100 [text-shadow:0_2px_14px_rgb(0_0_0_/_0.55)] sm:mt-6 sm:max-w-xl sm:text-xl sm:leading-8">
            <span className="block sm:inline">
              Authentic Japanese yakitori grilled fresh
            </span>{" "}
            <span className="block sm:inline">
              for birthdays, private events, and special
            </span>{" "}
            <span className="block sm:inline">
              celebrations across OC, LA, and nearby areas.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
