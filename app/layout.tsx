import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "San Ban Yakitori",
  description: "Japanese charcoal-grilled yakitori for pop-ups, private events, and catering.",
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