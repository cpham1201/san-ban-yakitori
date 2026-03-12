import Navbar from "./components/Navbar";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import InquiryForm from "./components/InquiryForm";

export default function HomePage() {
  const packages = [
    {
      name: "Package A",
      price: "$1,100",
      skewers: "200 skewers",
      time: "2 hours of live grilling service",
    },
    {
      name: "Package B",
      price: "$1,600",
      skewers: "300 skewers",
      time: "2 hours of live grilling service",
    },
    {
      name: "Package C",
      price: "$2,100",
      skewers: "500 skewers",
      time: "2–3 hours of live grilling service",
    },
    {
      name: "Package D",
      price: "$2,600",
      skewers: "700 skewers",
      time: "2–3 hours of live grilling service",
    },
    {
      name: "Package E",
      price: "$3,600",
      skewers: "1000 skewers",
      time: "3+ hours of live grilling service",
    },
  ];

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
        <section id="#" className="border-b border-white/10 bg-black">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-24 text-center">

            <Image
              src="/logo.png"
              alt="San Ban Yakitori"
              width={260}
              height={260}
              className="mb-2 object-contain"
            />

            <p className="max-w-xl text-xl text-stone-300">
              Japanese yakitori grilled over binchotan charcoal, served fresh at your next event.
            </p>

            <div className="flex gap-6">
              <a
                href="#menu"
                className="rounded-full border border-white/40 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
              >
                View Menu
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/40 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
              >
                Inquire
              </a>
            </div>

          </div>
        </section>


        {/* ABOUT */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">

            <h2 className="text-3xl font-semibold">
              Yakitori Over Fire 🍢🔥
            </h2>

            <div className="mx-auto mt-4 mb-8 h-px w-16 bg-white/20"></div>

            <p className="mx-auto max-w-xl leading-7 text-stone-300">
              San Bạn Yakitori is three friends with a shared passion for grilling
              delicious yakitori over charcoal and bringing people together through food. 
            </p>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-300">
              We&apos;re a pop-up catering service serving the Orange County area,
              perfect for private events, parties, and special gatherings.
            </p>

          </div>
        </section>


              {/* PACKAGES */}
        <section id="packages" className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold">Packages</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-white/20"></div>
            </div>

            {/* Top 4 packages */}
            <div className="grid gap-6 md:grid-cols-2">
              {packages.slice(0, 4).map((pkg) => (
                <div
                  key={pkg.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="mb-5 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-white/40"></div>

                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <span className="text-lg font-semibold text-white">{pkg.price}</span>
                  </div>

                  <ul className="space-y-2 text-sm leading-6 text-stone-400">
                    <li>• {pkg.skewers}</li>
                    <li>• {pkg.time}</li>
                    <li>• Setup + breakdown included</li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Centered last package, same size */}
            <div className="mt-6 flex justify-center">
              <div className="w-full md:w-[calc((100%-1.5rem)/2)]">
                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="mb-5 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-white/40"></div>

                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{packages[4].name}</h3>
                    <span className="text-lg font-semibold text-white">{packages[4].price}</span>
                  </div>

                  <ul className="space-y-2 text-sm leading-6 text-stone-400">
                    <li>• {packages[4].skewers}</li>
                    <li>• {packages[4].time}</li>
                    <li>• Setup + breakdown included</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-stone-400">
              Guests choose 70% of skewers from Menu A and 30% from Menu B.
            </p>
          </div>
        </section>


        {/* MENU */}
        <section id="menu" className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-20">

            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold">
                Menu
              </h2>

              <div className="mx-auto mt-4 h-px w-16 bg-white/20"></div>
            </div>


            <div className="mx-auto max-w-xl space-y-12 text-left">

              {/* MENU A */}
              <div>
                <h3 className="mb-4 text-xl font-semibold tracking-wide">
                  Menu A
                </h3>

                <div className="mb-6 h-px w-12 bg-white/20"></div>

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
                <h3 className="mb-4 text-xl font-semibold tracking-wide">
                  Menu B
                </h3>

                <div className="mb-6 h-px w-12 bg-white/20"></div>

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
        <section id="contact" className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">

            <div className="mb-10 text-center">
              <p className="text-lg font-medium text-white">
                Interested in having San Ban Yakitori at your event?
              </p>

              <p className="mt-2 text-sm text-stone-400">
                Send us an inquiry and we’ll get back to you shortly.
              </p>
            </div>

            <InquiryForm />

            <div className="mt-10 flex justify-center gap-6">

              <a
                href="https://instagram.com/sanbanyakitori"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
              >
                <Instagram size={22} />
              </a>

              <a
                href="mailto:bookings@sanbanyakitori.com"
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
              >
                <Mail size={22} />
              </a>

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