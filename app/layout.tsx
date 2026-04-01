import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

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
    <html lang="en" className={serif.variable}>
      <body className={`${serif.className} bg-black text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}