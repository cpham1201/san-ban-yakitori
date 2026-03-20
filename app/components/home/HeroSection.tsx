import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 pb-24 text-center sm:pt-4 sm:pb-28">
        <Image
          src="/logo2.png"
          alt="San Ban Yakitori"
          width={190}
          height={190}
          className="object-contain"
          priority
        />

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-300 sm:mt-10 sm:text-2xl">
          Japanese yakitori grilled over binchotan charcoal, served fresh at
          your next event.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col gap-4 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6">
          <a
            href="#menu"
            className="rounded-full border border-white/40 px-10 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
          >
            View Menu
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/40 px-10 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
          >
            Inquire
          </a>
        </div>
      </div>
    </section>
  );
}