import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanbanyakitori.com"),
  title: "San Ban Yakitori",
  description:
    "Japanese charcoal-grilled yakitori for pop-ups, private events, and catering.",
  openGraph: {
    title: "San Ban Yakitori",
    description:
      "Japanese charcoal-grilled yakitori for pop-ups, private events, and catering.",
    url: "https://sanbanyakitori.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0c0a09] text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}