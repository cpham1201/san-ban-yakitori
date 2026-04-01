import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="border-t border-white/10 bg-white/5">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
            <Image
              src="/ban.jpg"
              alt="San Ban Yakitori team grilling over charcoal"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Yakitori Over Fire
          </h2>
          <div className="mx-auto mb-8 mt-4 h-px w-16 bg-white/20"></div>

          <p className="mx-auto max-w-2xl leading-8 text-stone-300">
            San Bạn Yakitori is three friends with a shared passion for grilling
            delicious yakitori over charcoal and bringing people together
            through food.
          </p>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-stone-300">
            We&apos;re a pop-up catering service serving Orange County and surrounding areas,
            offering authentic yakitori to private events, parties, and special gatherings.
          </p>
        </div>
      </div>
    </section>
  );
}