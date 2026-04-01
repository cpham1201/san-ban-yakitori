import { Instagram, Mail, Phone } from "lucide-react";
import InquiryForm from "../InquiryForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-14 border-b border-white/10 bg-[#0a0a0a]"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="mb-10">
          <p className="px-2 text-[1rem] leading-snug text-white sm:px-0 sm:text-lg">
            <span className="whitespace-nowrap">
              Interested in having San Bạn Yakitori at your event?
            </span>
          </p>

          <p className="mt-3 text-sm text-stone-300">
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
  );
}