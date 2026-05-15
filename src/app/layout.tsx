import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/presentation/components/Navbar";
import { Footer } from "@/presentation/components/Footer";
import { WhatsAppButton } from "@/presentation/components/WhatsAppButton";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "911MAKERS | Premium Digital Growth Partner",
    template: "%s | 911MAKERS",
  },
  description:
    "Complete Branding + Premium Websites + Automation + Ongoing Growth Support for small businesses in the USA. Starting from $1,199. Based in Pakistan, serving globally.",
  keywords: [
    "digital marketing",
    "web development",
    "branding agency",
    "small business growth",
    "USA market",
    "automation",
    "SEO",
    "premium website design",
  ],
  authors: [{ name: "911MAKERS" }],
  creator: "911MAKERS",
  publisher: "911MAKERS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://911makers.com"),
  openGraph: {
    title: "911MAKERS | Premium Digital Growth Partner",
    description:
      "Complete Branding + Premium Websites + Automation + Ongoing Growth Support for small businesses in the USA. Starting from $1,199.",
    url: "https://911makers.com",
    siteName: "911MAKERS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "911MAKERS - Premium Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "911MAKERS | Premium Digital Growth Partner",
    description:
      "Complete Branding + Premium Websites + Automation + Ongoing Growth Support. Starting from $1,199.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans bg-background-primary text-foreground-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}