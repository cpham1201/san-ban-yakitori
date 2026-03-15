import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanbanyakitori.com"),
  title: "San Ban Yakitori",
  description:
    "Japanese binchotan charcoal-grilled yakitori for pop-ups, private events, and catering.",
  openGraph: {
    title: "San Ban Yakitori",
    description:
      "Japanese binchotan charcoal-grilled yakitori for pop-ups, private events, and catering.",
    url: "https://www.sanbanyakitori.com",
    siteName: "San Ban Yakitori",
    images: [
      {
        url: "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "San Ban Yakitori",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}