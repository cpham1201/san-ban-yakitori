import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      eventDate,
      guestCount,
      eventType,
      message,
    } = body;

    if (!name || !email || !phone || !eventDate || !guestCount || !eventType || !message) {
      return NextResponse.json(
        { error: "Please fill out all fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "San Ban Yakitori <onboarding@resend.dev>",
      to: process.env.BOOKING_TO_EMAIL || "bookings@sanbanyakitori.com",
      subject: `New San Ban Yakitori Inquiry from ${name}`,
      replyTo: email,
      text: `
New booking inquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Event Date: ${eventDate}
Guest Count: ${guestCount}
Event Type: ${eventType}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry email error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}