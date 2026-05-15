import {
  Hero,
  IndustryGrid,
  SocialProof,
  ServicesSection,
  WhyChooseUs,
  TestimonialsSection,
  ProcessSection,
  CTASection,
} from "@/presentation/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Website Design for Small Business USA | 911MAKERS",
  description: "Get a premium, high-converting website for your small business. Starting at $1,199. We serve business owners across California, Texas, New York, Florida, and all 50 states. Professional branding, SEO, and growth strategies included.",
  keywords: [
    "premium website design small business USA",
    "small business website development",
    "professional branding services USA",
    "tax office website design",
    "restaurant website development",
    "CPA website design California",
    "small business SEO services",
    "digital marketing for small business",
  ],
  metadataBase: new URL("https://911makers.com"),
  openGraph: {
    title: "Premium Website Design for Small Business USA | 911MAKERS",
    description: "Get a premium, high-converting website for your small business. Starting at $1,199. We serve business owners across California, Texas, New York, Florida, and all 50 states.",
    url: "https://911makers.com",
    siteName: "911MAKERS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "911MAKERS - Premium Website Design for Small Business USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Website Design for Small Business USA | 911MAKERS",
    description: "Get a premium, high-converting website for your small business. Starting at $1,199.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://911makers.com",
  },
};

export default function HomePage() {
  // Enhanced JSON-LD for LocalBusiness + Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "911MAKERS",
    "url": "https://911makers.com",
    "description": "Premium Digital Growth Partner for small businesses in the USA. Specialized in website design, branding, and digital marketing.",
    "telephone": "+1-555-911-0000",
    "email": "hello@911makers.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK",
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States",
    },
    "serviceType": [
      "Website Design",
      "Brand Identity",
      "E-Commerce Development",
      "SEO Services",
      "Digital Marketing",
    ],
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/911makers",
      "https://www.instagram.com/911makers",
      "https://www.linkedin.com/company/911makers",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <IndustryGrid />
      <SocialProof />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}