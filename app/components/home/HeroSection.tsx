import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto flex min-h-[66svh] max-w-6xl flex-col items-center justify-center px-5 pb-14 pt-8 text-center sm:min-h-[66svh] sm:px-6 sm:py-14">
        <Image
          src="/logo2.png"
          alt="San Ban Yakitori"
          width={150}
          height={263}
          className="hero-reveal h-64 w-auto object-contain sm:h-80"
          priority
        />

        <p className="hero-reveal mt-8 max-w-[calc(100vw-2.5rem)] text-[clamp(1rem,2.35vw,1.6rem)] font-medium leading-snug text-white sm:mt-10">
          <span className="whitespace-nowrap">
            Japanese yakitori grilled over binchotan charcoal
          </span>
          <br />
          <span className="text-white">
            Served fresh at your next event
          </span>
        </p>
      </div>
    </section>
  );
}
