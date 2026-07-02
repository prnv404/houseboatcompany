import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/header";
import GtagClickTracker from "./components/gtag-click-tracker";
import JsonLd from "./components/json-ld";
import {
  BRAND,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  LOCALE,
  organizationJsonLd,
  websiteJsonLd,
} from "./lib/seo";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Alleppey Houseboat Booking — Luxury Kerala Backwater Cruises | HouseBoat Company",
    template: `%s | ${BRAND}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Alleppey houseboat",
    "Alappuzha houseboat booking",
    "Kerala backwater cruise",
    "luxury houseboat Kerala",
    "private houseboat Alleppey",
    "overnight houseboat stay",
    "Vembanad Lake cruise",
    "shikara ride Alleppey",
    "shared houseboat Kerala",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  category: "travel",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title:
      "Alleppey Houseboat Booking — Luxury Kerala Backwater Cruises",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: LOCALE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Alleppey Houseboat Booking — Luxury Kerala Backwater Cruises",
    description: SITE_DESCRIPTION,
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
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18106309279"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18106309279');
          `}
        </Script>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3f794072-b47d-429b-81df-619859e35d50"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <GtagClickTracker />
        {children}
      </body>
    </html>
  );
}
