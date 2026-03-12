"use client";

import { FormEvent, useState } from "react";

function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    if (name === "eventDate" && value && value < getTodayString()) {
      setStatus({
        type: "error",
        message: "Please select today or a future date.",
      });
      return;
    }

    setStatus({ type: null, message: "" });

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const today = getTodayString();

    if (form.eventDate && form.eventDate < today) {
      setStatus({
        type: "error",
        message: "Please select today or a future date.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Inquiry sent. We’ll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        guestCount: "",
        eventType: "",
        message: "",
      });

    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your inquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-2xl space-y-5 text-left"
    >

      {/* NAME / EMAIL */}
      <div className="grid gap-5 sm:grid-cols-2">

        <div className="min-w-0">
          <label className="mb-2 block text-sm text-stone-300">
            Name
          </label>

          <input
            name="name"
            value={form.name}
            onChange={updateField}
            required
            className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/40"
          />
        </div>

        <div className="min-w-0">
          <label className="mb-2 block text-sm text-stone-300">
            Email
          </label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
            className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/40"
          />
        </div>

      </div>


      {/* PHONE / DATE */}
      <div className="grid gap-5 sm:grid-cols-2">

        <div className="min-w-0">
          <label className="mb-2 block text-sm text-stone-300">
            Phone
          </label>

          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            required
            className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/40"
          />
        </div>

        <div className="min-w-0">

          <label className="mb-2 block text-sm text-stone-300">
            Event Date
          </label>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black">
            <input
              name="eventDate"
              type="date"
              min={getTodayString()}
              value={form.eventDate}
              onChange={updateField}
              required
              className="block h-[54px] w-full appearance-none bg-transparent px-4 py-3.5 text-white outline-none [color-scheme:dark]"
            />
          </div>

        </div>

      </div>


      {/* GUEST COUNT / EVENT TYPE */}
      <div className="grid gap-5 sm:grid-cols-2">

        <div className="min-w-0">

          <label className="mb-2 block text-sm text-stone-300">
            Guest Count
          </label>

          <input
            name="guestCount"
            type="number"
            min="1"
            value={form.guestCount}
            onChange={updateField}
            required
            className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/40"
          />

        </div>

        <div className="min-w-0">

          <label className="mb-2 block text-sm text-stone-300">
            Event Type
          </label>

          <div className="relative">

            <select
              name="eventType"
              value={form.eventType}
              onChange={updateField}
              required
              className="w-full appearance-none rounded-2xl border border-white/15 bg-black px-4 py-3.5 pr-10 text-white outline-none transition focus:border-white/40"
            >
              <option value="">Select one</option>
              <option>Birthday</option>
              <option>Corporate Event</option>
              <option>Wedding</option>
              <option>Engagement Party</option>
              <option>Private Party</option>
              <option>Other</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-stone-400">
              ▾
            </div>

          </div>

        </div>

      </div>


      {/* MESSAGE */}
      <div>

        <label className="mb-2 block text-sm text-stone-300">
          Tell us about your event
        </label>

        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={updateField}
          required
          className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3.5 text-white outline-none transition focus:border-white/40"
          placeholder="Location, event details, menu interest, or anything else you'd like us to know."
        />

      </div>


      {/* SUBMIT */}
      <div className="pt-4 text-center">

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full border border-white/40 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black disabled:opacity-50"
        >
          {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
        </button>

      </div>


      {status.type && (
        <p
          className={`text-center text-sm ${
            status.type === "success"
              ? "text-stone-300"
              : "text-red-400"
          }`}
        >
          {status.message}
        </p>
      )}

    </form>
  );
}