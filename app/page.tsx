import Navbar from "./components/Navbar";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

export default function HomePage() {
  const menuA = [
    "Negima (Chicken Thigh & Japanese Scallion)",
    "Tsukune (Chicken Meatball)",
    "Chicken Heart",
    "Chicken Gizzard",
    "Mushroom",
    "Cherry Tomatoes",
    "Shishito Peppers",
  ];

  const menuB = [
    "Top Sirloin Beef Cubes",
    "Pork Belly",
    "Bacon-Wrapped Shishito Peppers",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        {/* HERO */}
        <section className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pt-16 pb-24 text-center">

            <Image
              src="/logo.png"
              alt="San Ban Yakitori"
              width={260}
              height={260}
              className="object-contain mb-4"
            />

            <p className="max-w-xl text-lg text-stone-300">
              Japanese yakitori, grilled over binchotan charcoal and served fresh at your next event.
            </p>

            <div className="flex gap-4">
              <a
                href="#menu"
                className="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
              >
                View Menu
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-white"
              >
                Book an Event
              </a>
            </div>

          </div>
        </section>


        {/* ABOUT */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Yakitori. Fire. Simplicity.
          </h2>

          <p className="text-stone-300 leading-7">
            San Ban Yakitori specializes in charcoal grilled Japanese skewers
            served fresh off the grill. Perfect for private events, pop-ups,
            parties, and intimate gatherings throughout Orange County.
          </p>
        </section>


        {/* YAKITORI MENU */}
        <section
          id="menu"
          className="border-t border-white/10 bg-white/5"
        >
          <div className="mx-auto max-w-3xl px-6 py-20">

            <div className="text-center mb-14">
              <h2 className="text-3xl font-semibold">
                Yakitori Menu
              </h2>
            </div>


            <div className="mx-auto max-w-xl space-y-12 text-left">

              {/* MENU A */}
              <div>
                <h3 className="text-xl font-semibold tracking-wide mb-4">
                  Menu A
                </h3>

                <div className="h-px w-12 bg-white/20 mb-6"></div>

                <ul className="space-y-3 text-stone-300">
                  {menuA.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              {/* MENU B */}
              <div>
                <h3 className="text-xl font-semibold tracking-wide mb-4">
                  Menu B
                </h3>

                <div className="h-px w-12 bg-white/20 mb-6"></div>

                <ul className="space-y-3 text-stone-300">
                  {menuB.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="border-t border-stone-800 bg-stone-900/50">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">

            <p className="text-lg text-stone-300 leading-relaxed max-w-xl mx-auto">
              Please inquire by email, Instagram DM, or text for pop-ups, private events, and gatherings. We look forward to serving you and your guests!
            </p>

            <div className="mt-10 flex justify-center gap-6">

              {/* Instagram */}
              <a
                href="https://instagram.com/sanbanyakitori"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
              >
                <Instagram size={22} />
              </a>

              {/* Email */}
              <a
                href="mailto:bookings@sanbanyakitori.com"
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
              >
                <Mail size={22} />
              </a>

              {/* Text Message */}
              <a
                href="sms:17147469119?body=Hi, I'm interested in booking San Ban Yakitori for an event."
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={22} />
              </a>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}