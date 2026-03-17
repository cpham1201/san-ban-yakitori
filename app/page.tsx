"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { Instagram, Mail, Phone, X } from "lucide-react";
import InquiryForm from "./components/InquiryForm";

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<null | {
    name: string;
    description: string;
    image: string;
  }>(null);

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
    {
      name: "Negima (Chicken Thigh & Japanese Scallion)",
      clickable: true,
      description:
        "Juicy chicken thigh and Japanese scallion grilled over charcoal.",
      image: "/negima.jpg",
    },
    { name: "Tsukune (Chicken Meatball)", clickable: false },
    { name: "Chicken Heart", clickable: false },
    { name: "Chicken Gizzard", clickable: false },
    { name: "Mushroom", clickable: false },
    { name: "Cherry Tomatoes", clickable: false },
    { name: "Shishito Peppers", clickable: false },
  ];

  const menuB = [
    { name: "Top Sirloin Beef Cubes" },
    { name: "Pork Belly" },
    { name: "Bacon-Wrapped Shishito Peppers" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="border-b border-white/10 bg-black">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-24 pt-12 text-center">
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

            <div className="flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6">
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

        {/* ABOUT */}
        <section className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold">Yakitori Over Fire</h2>
            <div className="mx-auto mb-8 mt-4 h-px w-16 bg-white/20"></div>

            <p className="mx-auto max-w-xl leading-7 text-stone-300">
              San Bạn Yakitori is three friends with a shared passion for grilling delicious
              yakitori over charcoal and bringing people together through food. 🍢🔥
            </p>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-300">
              We&apos;re a pop-up catering service serving the Orange County area, perfect for
              private events, parties, and special gatherings.
            </p>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold">Catering Packages</h2>
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
              <h2 className="text-3xl font-semibold">Yakitori Menu</h2>
              <div className="mx-auto mt-4 h-px w-16 bg-white/20"></div>
            </div>

            <div className="mx-auto max-w-xl space-y-12 text-left">
              <div>
                <h3 className="mb-4 text-xl font-semibold tracking-wide">Menu A</h3>
                <div className="mb-6 h-px w-12 bg-white/20"></div>

                <ul className="space-y-3 text-stone-300">
                  {menuA.map((item) => (
                    <li key={item.name}>
                      {item.clickable ? (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedItem({
                              name: item.name,
                              description: item.description || "",
                              image: item.image || "",
                            })
                          }
                          className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left transition-all duration-150 active:scale-[0.98] active:bg-white/[0.06] hover:bg-white/[0.04]"
                        >
                          <span className="text-white">•</span>
                          <span className="transition group-hover:translate-x-1">
                            {item.name}
                          </span>
                        </button>
                      ) : (
                        <div className="flex gap-2 px-1 py-1">
                          <span className="text-white">•</span>
                          <span>{item.name}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold tracking-wide">Menu B</h3>
                <div className="mb-6 h-px w-12 bg-white/20"></div>

                <ul className="space-y-3 text-stone-300">
                  {menuB.map((item) => (
                    <li key={item.name} className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>{item.name}</span>
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
                Send us an inquiry and we&apos;ll get back to you shortly.
              </p>
            </div>

            <InquiryForm />

            <div className="mt-10 flex justify-center gap-6">
              <a
                href="https://instagram.com/sanbanyakitori"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>

              <a
                href="mailto:bookings@sanbanyakitori.com"
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              <a
                href="sms:17147469119?body=Hi, I'm interested in booking San Ban Yakitori for an event."
                className="rounded-full border border-white/30 p-4 text-white transition hover:bg-white hover:text-black"
                aria-label="Text message"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/60 p-2 text-white transition hover:bg-white hover:text-black"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="border-t border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white">{selectedItem.name}</h3>
              <p className="mt-3 leading-7 text-stone-300">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}