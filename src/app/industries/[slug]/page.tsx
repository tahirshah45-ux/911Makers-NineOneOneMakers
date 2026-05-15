import { Metadata } from "next";
import { getIndustryBySlugUseCase, getIndustryPricingUseCase } from "@/application";
import { IndustryPageClient } from "./IndustryPageClient";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

// SEO-optimized metadata for each industry
export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlugUseCase.execute(slug);

  if (!industry) {
    return { title: "Industry Not Found | 911MAKERS" };
  }

  // Industry-specific metadata with keywords
  const metadataMap: Record<string, { title: string; description: string; keywords: string[] }> = {
    tax: {
      title: "Tax Office Website Design & CPA Website Development | 911MAKERS",
      description: "Premium website design for tax offices and CPAs in USA. Attract more clients with professional websites starting at $1,299. Serving California, Texas, New York, Florida and all 50 states. Includes client portal, online scheduling, and SEO optimization.",
      keywords: [
        "tax office website design",
        "CPA website development",
        "accounting firm website",
        "tax preparation website",
        "CPA website California",
        "accountant website design Texas",
        "bookkeeper website USA",
        "tax professional web design",
      ],
    },
    restaurant: {
      title: "Restaurant Website Development | 911MAKERS",
      description: "Stunning restaurant websites with online reservations and ordering. Starting at $1,599. Get more tables filled with professional website design for restaurants in California, Texas, New York, Florida and across USA.",
      keywords: [
        "restaurant website development",
        "restaurant web design USA",
        "restaurant online ordering website",
        "restaurant reservation system",
        "food business website",
        "cafe website design",
      ],
    },
    clinic: {
      title: "Clinic & Salon Website Design | Medical & Beauty Website Development",
      description: "Professional websites for clinics, dental practices, and beauty salons. Starting at $1,499. Get more appointments with elegant, conversion-optimized websites serving all 50 states.",
      keywords: [
        "clinic website design",
        "dental website development",
        "salon website design",
        "medical spa website",
        "beauty salon web design",
        "healthcare website USA",
      ],
    },
    clothing: {
      title: "Clothing Brand E-Commerce Website Development | 911MAKERS",
      description: "Professional e-commerce websites for clothing brands and fashion businesses. Starting at $1,699. Beautiful online stores that sell. Serving clothing brands across all 50 US states.",
      keywords: [
        "clothing brand website",
        "fashion e-commerce development",
        "apparel website design",
        "online store for clothing brand",
        "fashion business website USA",
      ],
    },
    delivery: {
      title: "Delivery Business Website Development | 911MAKERS",
      description: "Modern websites for delivery services and logistics companies. Starting at $1,599. Real-time tracking, driver management, and customer portals. Serving delivery businesses across USA.",
      keywords: [
        "delivery service website",
        "logistics website development",
        "courier website design",
        "delivery company web design",
        "trucking company website USA",
      ],
    },
    corporate: {
      title: "Corporate Website Design | Business Website Development",
      description: "Professional corporate websites that generate leads. Starting at $1,199. Establish authority and grow your business with premium website design for corporations, agencies, and B2B companies.",
      keywords: [
        "corporate website design",
        "business website development",
        "B2B website design",
        "professional corporate web design",
        "company website USA",
      ],
    },
  };

  const seo = metadataMap[slug] || {
    title: `${industry.displayName} Solutions | 911MAKERS`,
    description: `${industry.description} Starting from $${industry.startingPrice}. Get a professional website for your ${industry.displayName.toLowerCase()} business.`,
    keywords: [industry.displayName, "website design", "small business USA"],
  };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: "en_US",
      url: `https://911makers.com/industries/${slug}`,
    },
    alternates: {
      canonical: `https://911makers.com/industries/${slug}`,
    },
  };
}

// Generate static params for all industries
export async function generateStaticParams() {
  return [
    { slug: "tax" },
    { slug: "restaurant" },
    { slug: "clinic" },
    { slug: "clothing" },
    { slug: "delivery" },
    { slug: "corporate" },
  ];
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlugUseCase.execute(slug);
  const pricingArray = getIndustryPricingUseCase.execute(slug);
  const pricing = pricingArray[0];

  return <IndustryPageClient industry={industry} pricing={pricing} slug={slug} />;
}