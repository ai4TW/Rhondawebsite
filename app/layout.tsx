import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://avera-lending.com"),
  title: "Avera Lending LLC — Up to 100% Funding for Fix & Flips",
  description:
    "Private money lending for real estate investors. Up to 100% funding for fix & flips, bridge loans, rentals, and joint ventures. You bring the deal; we bring the money.",
  keywords: [
    "private money lender",
    "fix and flip loans",
    "hard money lender",
    "real estate investor financing",
    "bridge loans",
    "joint venture funding",
    "Avera Lending",
    "Rhonda Avera",
  ],
  openGraph: {
    title: "Avera Lending LLC — Up to 100% Funding for Fix & Flips",
    description:
      "You bring the deal; we bring the money. Private money lending for real estate investors nationwide.",
    type: "website",
    images: ["/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avera Lending LLC — Up to 100% Funding for Fix & Flips",
    description:
      "You bring the deal; we bring the money. Private money lending for real estate investors nationwide.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#c04108",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Avera Lending LLC",
  description:
    "Private money lender for real estate investors. Up to 100% funding for fix & flips, joint ventures, bridge loans, and rental properties.",
  url: "https://avera-lending.com",
  telephone: "+1-912-927-1200",
  email: "rhonda@avera-lending.com",
  areaServed: "US",
  founder: { "@type": "Person", name: "Rhonda Avera" },
  serviceType: [
    "Private Money Lending",
    "Fix and Flip Loans",
    "Joint Venture Funding",
    "Bridge Loans",
    "Rental Loans",
    "Commercial Loans",
    "Ground-up Construction Loans",
    "Proof of Funds Letters",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
