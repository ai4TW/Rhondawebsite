import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Avera Lending LLC — Up to 100% Funding for Fix & Flips",
  description:
    "Private money lending for real estate investors. Up to 100% funding for fix & flips, bridge loans, rentals, and joint ventures. You bring the deal; we bring the money.",
  openGraph: {
    title: "Avera Lending LLC — Up to 100% Funding for Fix & Flips",
    description:
      "You bring the deal; we bring the money. Private money lending for real estate investors nationwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
