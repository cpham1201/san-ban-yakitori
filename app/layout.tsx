import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = "https://sanbanyakitori.com";
const siteName = "San Ban Yakitori";
const siteDescription =
  "Japanese yakitori catering for private events, parties, pop-ups, and special gatherings in Orange County and surrounding Southern California areas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "San Ban Yakitori | Yakitori Catering in Orange County",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "48x48 32x32 16x16",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "San Ban Yakitori | Yakitori Catering in Orange County",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/gallery/_DSC0996.jpg",
        width: 1200,
        height: 800,
        alt: "Yakitori grilling over flame and smoke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Ban Yakitori | Yakitori Catering in Orange County",
    description: siteDescription,
    images: ["/gallery/_DSC0996.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Caterer",
  "@id": `${siteUrl}/#business`,
  name: siteName,
  url: siteUrl,
  email: "bookings@sanbanyakitori.com",
  description: siteDescription,
  image: [
    `${siteUrl}/logo2.png`,
    `${siteUrl}/gallery/_DSC0996.jpg`,
    `${siteUrl}/gallery/_DSC0771.jpg`,
    `${siteUrl}/gallery/_DSC0888.jpg`,
  ],
  logo: `${siteUrl}/logo2.png`,
  sameAs: ["https://instagram.com/sanbanyakitori"],
  servesCuisine: ["Japanese", "Yakitori"],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Orange County, CA",
    },
    {
      "@type": "AdministrativeArea",
      name: "Southern California",
    },
  ],
  serviceType: [
    "Yakitori catering",
    "Japanese catering",
    "Private event catering",
    "Pop-up catering",
    "Party catering",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Yakitori Catering Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Yakitori catering for private events",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Japanese charcoal-grilled skewers for parties and pop-ups",
        },
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "bookings@sanbanyakitori.com",
    contactType: "booking inquiries",
    areaServed: "US-CA",
    availableLanguage: ["English"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
