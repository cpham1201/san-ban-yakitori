import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 pb-24 text-center sm:pt-4 sm:pb-28">
        <Image
          src="/logo2.png"
          alt="San Ban Yakitori"
          width={190}
          height={190}
          className="object-contain"
          priority
        />

        <p className="mt-8 max-w-xl text-xl leading-snug font-medium text-white sm:mt-10 sm:text-2xl">
          Japanese yakitori grilled over binchotan charcoal
          <br />
          <span className="text-white">
            Served fresh at your next event
          </span>
        </p>
      </div>
    </section>
  );
}