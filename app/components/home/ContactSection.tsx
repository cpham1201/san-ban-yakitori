import { Instagram, Mail, Phone } from "lucide-react";
import InquiryForm from "../InquiryForm";
import Reveal from "../Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-14 border-t border-white/10 bg-black"
    >
      <div className="mx-auto grid max-w-6xl gap-9 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="rounded-lg border border-white/10 bg-white/[0.025] p-5 sm:p-6">
          <p className="text-lg leading-snug text-white sm:text-xl">
            Interested in having San Bạn Yakitori at your event?
          </p>

          <p className="mt-4 text-base leading-7 text-stone-300">
            Send us an inquiry and we&apos;ll get back to you shortly.
          </p>

          <div className="mt-8 hidden gap-3 sm:flex">
            <a
              href="https://instagram.com/sanbanyakitori"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/25 p-4 text-white transition hover:border-white hover:bg-white hover:text-black"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>

            <a
              href="mailto:bookings@sanbanyakitori.com"
              className="rounded-full border border-white/25 p-4 text-white transition hover:border-white hover:bg-white hover:text-black"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

            <a
              href="sms:17147469119?body=Hi, I'm interested in booking San Ban Yakitori for an event."
              className="rounded-full border border-white/25 p-4 text-white transition hover:border-white hover:bg-white hover:text-black"
              aria-label="Text message"
            >
              <Phone size={22} />
            </a>
          </div>

        </Reveal>

        <Reveal delay={120}>
          <div>
            <InquiryForm />

            <div className="mt-8 flex justify-center gap-3 sm:hidden">
              <a
                href="https://instagram.com/sanbanyakitori"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 p-4 text-white transition hover:border-white hover:bg-white hover:text-black"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>

              <a
                href="mailto:bookings@sanbanyakitori.com"
                className="rounded-full border border-white/25 p-4 text-white transition hover:border-white hover:bg-white hover:text-black"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              <a
                href="sms:17147469119?body=Hi, I'm interested in booking San Ban Yakitori for an event."
                className="rounded-full border border-white/25 p-4 text-white transition hover:border-white hover:bg-white hover:text-black"
                aria-label="Text message"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
