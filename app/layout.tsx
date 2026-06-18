import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

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
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
