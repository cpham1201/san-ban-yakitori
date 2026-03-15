import type { Metadata } from "next";
import "./globals.css";

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
    siteName: "San Ban Yakitori",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "San Ban Yakitori",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Ban Yakitori",
    description:
      "Japanese charcoal-grilled yakitori for pop-ups, private events, and catering.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}