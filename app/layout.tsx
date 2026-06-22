import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/header";
import GtagClickTracker from "./components/gtag-click-tracker";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HouseBoatCompany — Luxury Houseboat Experiences",
  description:
    "Discover the backwaters aboard handcrafted luxury houseboats. Cruise through palm-lined canals, savor authentic cuisine, and wake up to golden sunrises on the water.",
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
        <Header />
        <GtagClickTracker />
        {children}
      </body>
    </html>
  );
}
