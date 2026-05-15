"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator, Utensils, Heart, ShoppingBag, Truck, Building2, Check, ArrowRight, Clock, RefreshCw,
  Star, Shield, Headphones, Globe, Target, TrendingUp, MapPin, Phone, Mail, ChevronDown, Users, Award, CheckCircle,
  Palette, BarChart3, Calendar, CreditCard, UtensilsCrossed, Sparkles, Package, MessageSquare
} from "lucide-react";
import { Button } from "@/presentation/components";
import type { IndustrySolution, PricingPackage } from "@/core";
import { useState } from "react";

interface IndustryPageClientProps {
  industry: IndustrySolution | null;
  pricing: PricingPackage | undefined;
  slug: string;
}

// Shared US cities across all industries
const usCities = [
  "New York", "Los Angeles", "Houston", "Chicago", "Miami",
  "Dallas", "Philadelphia", "Atlanta", "Phoenix", "San Diego",
  "San Francisco", "Boston", "Austin", "Seattle", "Denver"
];

// Industry-specific content
const industryContent: Record<string, {
  heroBadge: string;
  heroTitle: string[];
  heroSubtitle: string;
  citiesLabel: string;
  problems: { problem: string; solution: string; stat: string }[];
  benefits: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; metric: string }[];
  features: { name: string; description: string; benefit: string }[];
  faqs: { question: string; answer: string }[];
  serviceName: string;
  serviceDescription: string;
  jsonLd: any;
}> = {
  tax: {
    heroBadge: "Website Design for Tax Professionals",
    heroTitle: ["Professional Website Design for CPAs, Accountants & Tax Professionals", "Serving New York, Houston, Chicago, Miami & All 50 States"],
    heroSubtitle: "Stop losing clients to outdated websites and big chain tax services. Get a premium, high-converting website that builds trust, saves you time, and helps you attract more clients in New York, Los Angeles, Dallas, Atlanta, and across the USA.",
    citiesLabel: "Proudly serving tax offices and CPA firms in:",
    problems: [
      { problem: "Clients Can't Find You Online", solution: "We optimize your website for local SEO so you appear in 'tax office near me' searches in your city.", stat: "97% of consumers search for local businesses online" },
      { problem: "Outdated Website Hurts Your Credibility", solution: "A professional, modern website builds trust and makes you look established and reliable.", stat: "75% of consumers judge a business by their website design" },
      { problem: "Too Much Time Spent on Phone Calls", solution: "Online appointment scheduling and client portals save hours every week.", stat: "Small businesses waste 120+ hours annually on scheduling calls" },
      { problem: "Losing Clients to Big Chain Tax Services", solution: "Stand out with premium branding and a website that showcases your expertise.", stat: "Personal touch wins 60% of clients over big chains" },
    ],
    benefits: [
      { icon: Target, title: "Rank Higher in Google", desc: "SEO-optimized websites that appear in 'CPA near me' and 'tax office [city]' searches.", metric: "+180% More Online Visibility" },
      { icon: Clock, title: "Save 10+ Hours Every Week", desc: "Automated scheduling, client portals, and document uploads mean less phone time.", metric: "10-15 hrs saved weekly" },
      { icon: Shield, title: "Build Trust & Credibility", desc: "Professional design that makes clients feel confident choosing you.", metric: "+47% Client Trust Score" },
      { icon: TrendingUp, title: "Convert More Visitors to Clients", desc: "High-converting design that turns visitors into paying clients.", metric: "2.8x More Leads" },
    ],
    features: [
      { name: "Professional Client Portal", description: "Secure area for clients to access documents 24/7", benefit: "Clients feel secure and valued" },
      { name: "Online Appointment Scheduling", description: "Let clients book consultations directly from your website", benefit: "Reduce phone tag by 80%" },
      { name: "Secure Document Upload", description: "Encrypted file sharing for tax documents", benefit: "HIPAA-compliant and safe" },
      { name: "Tax Calculator Integration", description: "Interactive tax estimation tools", benefit: "Increases time on site by 3x" },
      { name: "Local SEO Optimization", description: "Appear in 'tax office [city]' searches", benefit: "Rank #1 in your local area" },
      { name: "Mobile-Responsive Design", description: "Perfect experience on phones and tablets", benefit: "65% of searches happen on mobile" },
      { name: "Client Testimonials Section", description: "Showcase reviews to build trust", benefit: "+34% conversion rate increase" },
      { name: "Email Marketing Integration", description: "Newsletter signups and automated follow-ups", benefit: "Generate 25% more repeat business" },
    ],
    faqs: [
      { question: "How much does a professional tax office website cost?", answer: "Our professional tax office websites start at $1,299 for the Starter Package and $1,999 for the Professional Package. This includes custom design, client portal, appointment scheduling, SEO optimization, and mobile-responsive design. We offer payment plans and custom packages." },
      { question: "How long does it take to build a CPA website?", answer: "Most tax office websites are completed within 3-4 weeks for the Starter Package and 4-5 weeks for the Professional Package. This includes design, development, content integration, SEO setup, and training." },
      { question: "Will my tax office website appear in Google searches?", answer: "Yes! All our packages include basic SEO optimization. We optimize for keywords like 'tax office [your city]', 'CPA near me', 'accounting firm [your state]'. We'll also help set up Google Business Profile." },
      { question: "Can I integrate my tax software with the website?", answer: "We can integrate with most popular tax software solutions including QuickBooks, Drake Software, Lacerte, and ProConnect. We'll discuss your specific software during consultation." },
      { question: "Do you serve CPAs in all US states?", answer: "Absolutely! We work with tax professionals across all 50 states, including California, Texas, New York, Florida, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, Michigan, and all others." },
      { question: "Can clients schedule appointments directly from my website?", answer: "Yes! Our online appointment scheduling system allows clients to book consultations directly from your website, 24/7. This reduces phone tag significantly." },
      { question: "Is the client portal secure?", answer: "Security is our top priority. Our client portals use bank-level encryption (256-bit SSL) to protect sensitive financial documents and are compliant with data protection regulations." },
      { question: "What if I need changes after launch?", answer: "Every package includes revisions (3 for Starter, 5 for Professional) and free support after launch (1 month for Starter, 3 months for Professional). We also offer affordable maintenance plans." },
      { question: "Can I update the website content myself?", answer: "Yes! We build with easy-to-use CMS so you can update prices, service offerings, blog posts without coding knowledge. We provide training after launch." },
      { question: "Do you offer branding services for tax offices?", answer: "Yes! Our Professional Package includes professional logo design, brand color palette, typography selection, and brand guidelines." },
    ],
    serviceName: "Professional Tax Office Website Design",
    serviceDescription: "Premium website design for CPAs, accountants, and tax professionals in the USA. Starting at $1,299 with client portal, appointment scheduling, and local SEO.",
    jsonLd: {
      "@type": "Service",
      "name": "Professional Tax Office Website Design",
      "description": "Premium website design for CPAs, accountants, and tax professionals in the USA. Starting at $1,299 with client portal, appointment scheduling, and local SEO.",
      "provider": { "@type": "Organization", "name": "911MAKERS", "url": "https://911makers.com", "description": "Premium Digital Growth Partner for small businesses in the USA" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tax Office Website Packages",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Office Starter Package" }, "price": "1299", "priceCurrency": "USD" },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Office Professional Package" }, "price": "1999", "priceCurrency": "USD" }
        ]
      },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "50", "bestRating": "5" }
    },
  },
  restaurant: {
    heroBadge: "Website Design for Restaurants & Food Businesses",
    heroTitle: ["Stunning Restaurant Websites That Fill Tables", "Serving New York, Los Angeles, Houston, Miami & All 50 States"],
    heroSubtitle: "Turn hungry visitors into loyal customers with a beautiful, high-converting restaurant website. Get online ordering, reservations, menu management, and SEO that makes your restaurant easy to find in your city and beyond.",
    citiesLabel: "Proudly serving restaurants, cafes, and food businesses in:",
    problems: [
      { problem: "Missing Out on Online Orders", solution: "Add seamless online ordering and delivery integration to capture every hungry customer.", stat: "65% of diners prefer restaurants with online ordering" },
      { problem: "Outdated Menu Hurts Sales", solution: "Easy-to-update menus that showcase your dishes with beautiful photos and descriptions.", stat: "Food photos increase order value by 30%" },
      { problem: "No Online Reservations", solution: "Let customers book tables directly from your website, 24/7, no phone needed.", stat: "80% of diners prefer online reservations" },
      { problem: "Customers Can't Find You Online", solution: "Local SEO so you appear in 'best restaurant near me' searches.", stat: "90% of customers use search to find restaurants" },
    ],
    benefits: [
      { icon: Utensils, title: "More Online Orders", desc: "Seamless ordering system that turns visitors into customers.", metric: "+65% Order Volume" },
      { icon: Calendar, title: "Automated Reservations", desc: "Let customers book tables 24/7 without staff involvement.", metric: "Save 15+ hrs weekly" },
      { icon: Palette, title: "Mouth-Watering Design", desc: "Beautiful visuals that make your food look irresistible.", metric: "+40% Engagement" },
      { icon: Target, title: "Rank Higher Locally", desc: "Appear in 'restaurant [city]' and 'best food near me' searches.", metric: "+200% Local Traffic" },
    ],
    features: [
      { name: "Online Ordering System", description: "Full ordering and payment integration", benefit: "Capture 65% more orders" },
      { name: "Table Reservation System", description: "Real-time availability and booking", benefit: "80% prefer online booking" },
      { name: "Dynamic Menu Management", description: "Easy updates, seasonal items, photos", benefit: "Keep menu fresh effortlessly" },
      { name: "Photo Gallery", description: "Professional food photography showcase", benefit: "+30% order value" },
      { name: "Google Business Integration", description: "Appear in maps and local search", benefit: "+200% local visibility" },
      { name: "Multi-Location Support", description: "Manage multiple restaurant locations", benefit: "One dashboard for all" },
      { name: "Customer Reviews Display", description: "Showcase Yelp, Google reviews", benefit: "+25% trust factor" },
      { name: "Events & Private Dining", description: "Promote special events and private parties", benefit: "New revenue stream" },
    ],
    faqs: [
      { question: "How much does a restaurant website cost?", answer: "Our restaurant websites start at $1,599 for the Essential Package and $2,299 for the Premium Package. This includes custom design, online ordering, reservation system, menu management, and local SEO." },
      { question: "Can I take orders directly through my website?", answer: "Yes! Our fully integrated online ordering system lets customers browse your menu, customize orders, and pay directly on your website. No middleman fees." },
      { question: "Can customers make reservations online?", answer: "Absolutely! The reservation system shows real-time table availability and lets customers book 24/7. It syncs with your existing reservation system." },
      { question: "Can I update my menu myself?", answer: "Yes! Our easy CMS lets you add items, change prices, update daily specials, and add mouth-watering photos without any technical knowledge." },
      { question: "Will my restaurant appear in Google searches?", answer: "Yes! We optimize for local SEO including 'restaurant [your city]', 'best [cuisine] near me', and set up Google Business Profile for maximum visibility." },
      { question: "Do you work with food trucks and pop-ups?", answer: "Yes! We create mobile-friendly websites for food trucks, pop-ups, ghost kitchens, and delivery-only concepts." },
      { question: "Can I show my social media content?", answer: "Yes! We can integrate your Instagram feed to show your latest dishes and keep content fresh automatically." },
      { question: "Do you offer photo services?", answer: "Yes! Our premium packages include professional food photography to make your dishes look absolutely delicious." },
      { question: "Can I track analytics?", answer: "Yes! Full analytics dashboard showing orders, reservations, traffic sources, popular items, and revenue." },
      { question: "Do you integrate with delivery apps?", answer: "Yes! We can integrate with DoorDash, Uber Eats, Grubhub, or link to all your delivery partners." },
    ],
    serviceName: "Restaurant Website Design",
    serviceDescription: "Stunning restaurant websites with online ordering and reservations. Starting at $1,599.",
    jsonLd: {
      "@type": "Service",
      "name": "Restaurant Website Design",
      "description": "Stunning restaurant websites with online ordering and reservations. Starting at $1,599.",
      "provider": { "@type": "Organization", "name": "911MAKERS", "url": "https://911makers.com" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Restaurant Website Packages",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant Essential Package" }, "price": "1599", "priceCurrency": "USD" },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant Premium Package" }, "price": "2299", "priceCurrency": "USD" }
        ]
      },
    },
  },
  clinic: {
    heroBadge: "Website Design for Clinics, Spas & Salons",
    heroTitle: ["Professional Websites for Healthcare & Beauty Businesses", "Serving New York, Los Angeles, Miami, Dallas & All 50 States"],
    heroSubtitle: "Attract more patients and clients with a beautiful, professional website. Online booking, patient portals, and local SEO that makes your clinic or salon easy to find and trust.",
    citiesLabel: "Proudly serving clinics, dental practices, medical spas, and salons in:",
    problems: [
      { problem: "Missing Online Appointments", solution: "Let clients book 24/7 directly from your website without phone tag.", stat: "72% of patients prefer online booking" },
      { problem: "No Online Presence", solution: "Professional website that builds trust and credibility instantly.", stat: "80% of patients research online before booking" },
      { problem: "Losing to Big Chains", solution: "Stand out with premium branding and testimonials that showcase your expertise.", stat: "Personal care wins 68% of clients" },
      { problem: "Paperwork Overload", solution: "Online intake forms and patient portals reduce administrative burden.", stat: "Digital intake saves 5+ hours daily" },
    ],
    benefits: [
      { icon: Calendar, title: "Automated Online Booking", desc: "Clients book appointments 24/7 without calling.", metric: "+45% Bookings" },
      { icon: Shield, title: "Build Patient Trust", desc: "Professional design that makes your practice look established.", metric: "+52% Trust Score" },
      { icon: TrendingUp, title: "More First-Time Patients", desc: "Local SEO that drives new patients to your practice.", metric: "+180% New Patients" },
      { icon: Clock, title: "Reduce Administrative Work", desc: "Online forms and automated reminders save staff time.", metric: "Save 10+ hrs weekly" },
    ],
    features: [
      { name: "Online Booking System", description: "Real-time appointment scheduling", benefit: "Book 24/7 automatically" },
      { name: "Patient Portal", description: "Secure access to records and history", benefit: "Reduce phone calls by 60%" },
      { name: "Online Forms", description: "Digital intake and health history", benefit: "Save 5+ hrs daily" },
      { name: "Before/After Gallery", description: "Showcase treatment results", benefit: "+35% conversion rate" },
      { name: "Staff Profiles", description: "Build trust with team bios", benefit: "Personal connection wins clients" },
      { name: "Service Menu", description: "List treatments with pricing", benefit: "Transparent pricing = trust" },
      { name: "Local SEO", description: "Appear in 'clinic [city]' searches", benefit: "Rank #1 locally" },
      { name: "Patient Reviews", description: "Display testimonials and reviews", benefit: "+40% new patients" },
    ],
    faqs: [
      { question: "How much does a clinic or salon website cost?", answer: "Our clinic and salon websites start at $1,499 for the Starter Package and $2,199 for the Professional Package. Includes custom design, online booking, patient portal, local SEO, and mobile-responsive layout." },
      { question: "Can patients book appointments online?", answer: "Yes! Our integrated booking system shows real-time availability and lets patients book 24/7. It syncs with your existing calendar or practice management software." },
      { question: "Is the patient portal secure?", answer: "Absolutely! We use 256-bit encryption and are HIPAA-compliant where required. Patient data is fully protected." },
      { question: "Can I show before and after photos?", answer: "Yes! Our before/after gallery is perfect for medical spas, dermatologists, plastic surgeons, and salons. These galleries dramatically increase conversion rates." },
      { question: "Will my clinic appear in local searches?", answer: "Yes! We optimize for 'clinic [your city]', 'spa near me', 'salon [neighborhood]', and set up Google Business Profile for local map visibility." },
      { question: "Can patients fill out forms online?", answer: "Yes! Digital intake forms let patients complete paperwork before their appointment, saving your staff hours every day." },
      { question: "Do you work with medical spas and wellness centers?", answer: "Yes! We have extensive experience with med spas, wellness centers, acupuncture, chiropractic, physical therapy, and holistic health practices." },
      { question: "Can I manage multiple locations?", answer: "Yes! Multi-location support lets you manage all your clinics or salons from one dashboard with location-specific content." },
      { question: "Can I update my services and pricing?", answer: "Yes! The easy CMS lets you add services, update prices, add new treatments, and manage special offers without any technical knowledge." },
      { question: "Do you offer branding for salons?", answer: "Yes! Our Professional Package includes logo design, brand colors, and complete brand guidelines for a cohesive, premium look." },
    ],
    serviceName: "Clinic & Salon Website Design",
    serviceDescription: "Professional websites for clinics, dental practices, and beauty salons. Starting at $1,499.",
    jsonLd: {
      "@type": "Service",
      "name": "Clinic & Salon Website Design",
      "description": "Professional websites for clinics, dental practices, and beauty salons. Starting at $1,499.",
      "provider": { "@type": "Organization", "name": "911MAKERS", "url": "https://911makers.com" },
      "areaServed": { "@type": "Country", "name": "United States" },
    },
  },
  clothing: {
    heroBadge: "E-Commerce for Clothing Brands & Fashion Businesses",
    heroTitle: ["Premium E-Commerce Websites That Actually Sell", "Serving Fashion Brands in New York, Los Angeles, Miami & All 50 States"],
    heroSubtitle: "Beautiful online stores that turn visitors into buyers. From custom design to checkout optimization, we create fashion e-commerce experiences that drive sales and build your brand.",
    citiesLabel: "Proudly serving clothing brands, fashion retailers, and apparel businesses in:",
    problems: [
      { problem: "Low Conversion Rates", solution: "Optimized checkout and product pages that actually convert visitors to buyers.", stat: "Average e-commerce conversion is 2.5%, we target 4%+" },
      { problem: "Unprofessional Store Design", solution: "Premium, fashion-forward design that matches your brand quality.", stat: "68% of users judge brand by website quality" },
      { problem: "Poor Mobile Experience", solution: "Flawless mobile shopping that captures the 70% of traffic on phones.", stat: "70% of fashion e-commerce is mobile" },
      { problem: "No SEO Visibility", solution: "Fashion-optimized SEO that drives organic traffic to your store.", stat: "Fashion brands need SEO to compete" },
    ],
    benefits: [
      { icon: TrendingUp, title: "Higher Conversions", desc: "Optimized paths from browse to checkout.", metric: "2x Average Conversion" },
      { icon: Palette, title: "Fashion-Forward Design", desc: "Premium visuals that match your brand.", metric: "Professional look = trust" },
      { icon: Globe, title: "Mobile-Optimized", desc: "Perfect shopping experience on every device.", metric: "70% mobile traffic captured" },
      { icon: Target, title: "Fashion SEO", desc: "Rank for style, brand, and product searches.", metric: "+150% Organic Traffic" },
    ],
    features: [
      { name: "Custom Product Pages", description: "Beautiful layouts with zoom, size guides, reviews", benefit: "Reduce returns by 25%" },
      { name: "Streamlined Checkout", description: "One-page checkout with multiple payment options", benefit: "Cart abandonment under 60%" },
      { name: "Size Guide Integration", description: "Help customers find the right fit", benefit: "40% fewer returns" },
      { name: "Inventory Management", description: "Real-time stock tracking", benefit: "Never oversell" },
      { name: "Fashion Blogging", description: "Content marketing for SEO", benefit: "Drive organic traffic" },
      { name: "Email Capture", description: "Pop-ups and exit intents for list building", benefit: "Build repeat buyers" },
      { name: "Social Media Integration", description: "Instagram shopping, lookbooks", benefit: "Social commerce" },
      { name: "Analytics Dashboard", description: "Track sales, traffic, and customers", benefit: "Data-driven growth" },
    ],
    faqs: [
      { question: "How much does a clothing brand e-commerce website cost?", answer: "Our e-commerce websites start at $1,699 for the Starter Store and $2,499 for the Professional Store. Includes custom design, product catalog, checkout optimization, payment integration, and basic SEO." },
      { question: "What payment methods can I accept?", answer: "We integrate all major payment gateways including credit cards, PayPal, Apple Pay, Google Pay, and Afterpay/Klarna for flexible payments." },
      { question: "Can I add unlimited products?", answer: "Yes! Our e-commerce platform supports unlimited products, variants (size, color), and inventory management." },
      { question: "Will my store be mobile-friendly?", answer: "Absolutely! We design mobile-first since 70% of fashion shopping happens on phones. Every element is optimized for touch and small screens." },
      { question: "Can I sell on Instagram and Facebook?", answer: "Yes! We can integrate Instagram Shopping and Facebook Catalog so you can sell directly through social media." },
      { question: "How do I handle returns and exchanges?", answer: "We can build a dedicated returns portal where customers can initiate returns, print labels, and track refund status." },
      { question: "Can I offer discounts and promotions?", answer: "Yes! Full promotional tools including discount codes, seasonal sales, free shipping thresholds, and email pop-ups." },
      { question: "Will my clothing store rank in Google?", answer: "Yes! We optimize for fashion-related keywords, product schema, image SEO, and technical SEO. We also provide ongoing SEO services." },
      { question: "Can I track inventory in real-time?", answer: "Yes! Real-time inventory management shows stock levels, alerts for low stock, and syncs across all sales channels." },
      { question: "Do you offer branding for new fashion brands?", answer: "Yes! Complete branding packages include logo design, color palette, typography, brand guidelines, and custom graphics for your store." },
    ],
    serviceName: "Clothing Brand E-Commerce",
    serviceDescription: "Professional e-commerce websites for clothing brands. Starting at $1,699.",
    jsonLd: {
      "@type": "Service",
      "name": "Clothing Brand E-Commerce",
      "description": "Professional e-commerce websites for clothing brands. Starting at $1,699.",
      "provider": { "@type": "Organization", "name": "911MAKERS", "url": "https://911makers.com" },
      "areaServed": { "@type": "Country", "name": "United States" },
    },
  },
  delivery: {
    heroBadge: "Website Design for Delivery & Logistics Companies",
    heroTitle: ["Modern Websites for Delivery Services & Logistics", "Serving Delivery Businesses in Houston, Dallas, Atlanta & All 50 States"],
    heroSubtitle: "Professional websites that showcase your fleet, build trust with shippers, and help you win more contracts. Real-time tracking, driver portals, and B2B-focused design that converts.",
    citiesLabel: "Proudly serving delivery services, logistics companies, and trucking businesses in:",
    problems: [
      { problem: "Can't Showcase Fleet & Capabilities", solution: "Professional website that displays your vehicles, coverage area, and services.", stat: "72% of B2B buyers research online first" },
      { problem: "Losing to Established Competitors", solution: "Premium branding and social proof that builds trust quickly.", stat: "Professional image wins 2x more contracts" },
      { problem: "No Lead Capture System", solution: "Quote request forms that turn website visitors into leads.", stat: "B2B websites need clear CTAs" },
      { problem: "No Online Presence", solution: "Local and national SEO to be found by businesses needing delivery.", stat: "85% of logistics searches happen online" },
    ],
    benefits: [
      { icon: Truck, title: "Win More Contracts", desc: "Professional image that builds instant trust.", metric: "2x More B2B Leads" },
      { icon: Globe, title: "National Reach", desc: "SEO that targets businesses nationwide.", metric: "+200% National Traffic" },
      { icon: Target, title: "Get Found Locally", desc: "Appear in 'delivery service [city]' searches.", metric: "Rank #1 locally" },
      { icon: BarChart3, title: "Showcase Capabilities", desc: "Fleet photos, service areas, certifications.", metric: "Build credibility" },
    ],
    features: [
      { name: "Service Area Maps", description: "Interactive maps showing coverage", benefit: "Instant credibility" },
      { name: "Fleet Showcase", description: "Professional vehicle photography", benefit: "Show reliability" },
      { name: "Quote Request Forms", description: "Automated lead capture", benefit: "Never miss a lead" },
      { name: "Service List", description: "Full breakdown of capabilities", benefit: "Clear value proposition" },
      { name: "Certifications Display", description: "Show licenses, insurance, DOT numbers", benefit: "Build trust instantly" },
      { name: "Testimonials", description: "Client reviews and case studies", benefit: "Social proof wins" },
      { name: "Local SEO", description: "Target 'delivery [city]'", benefit: "Rank in local searches" },
      { name: "Lead Management", description: "CRM integration for quotes", benefit: "Track every lead" },
    ],
    faqs: [
      { question: "How much does a delivery company website cost?", answer: "Our delivery service websites start at $1,599 for the Essential Package and $2,299 for the Professional Package. Includes custom design, service showcase, quote forms, fleet gallery, and local/national SEO." },
      { question: "Can I showcase my fleet on the website?", answer: "Yes! We can create a professional fleet showcase with photos, vehicle types, capacities, and capabilities to demonstrate your reliability." },
      { question: "Can businesses request quotes online?", answer: "Absolutely! Automated quote request forms capture lead details, shipping needs, and contact information. Leads go directly to your email or CRM." },
      { question: "Will my delivery service appear in Google?", answer: "Yes! We optimize for local search ('delivery service [city]') and national keywords ('logistics company USA', 'freight services'). We also set up Google Business Profile." },
      { question: "Can I show my service area?", answer: "Yes! Interactive maps can display your coverage area, service lanes, and hub locations across the USA." },
      { question: "Do you work with trucking companies?", answer: "Yes! We have experience with all types of delivery businesses including trucking, courier services, last-mile delivery, LTL shipping, and freight forwarders." },
      { question: "Can I display certifications and licenses?", answer: "Yes! We can prominently display DOT numbers, MC numbers, insurance certificates, and industry certifications to build trust with shippers." },
      { question: "Can I add a driver portal?", answer: "Yes! We can build a password-protected portal where drivers can access routes, documents, and updates." },
      { question: "Will the website work on mobile?", answer: "Yes! All our websites are fully responsive. Many shippers and drivers research on phones, so mobile is essential." },
      { question: "Do you offer ongoing SEO services?", answer: "Yes! We offer monthly SEO packages to continuously improve rankings and drive more traffic to your website." },
    ],
    serviceName: "Delivery Business Website Design",
    serviceDescription: "Modern websites for delivery services and logistics companies. Starting at $1,599.",
    jsonLd: {
      "@type": "Service",
      "name": "Delivery Business Website Design",
      "description": "Modern websites for delivery services and logistics companies. Starting at $1,599.",
      "provider": { "@type": "Organization", "name": "911MAKERS", "url": "https://911makers.com" },
      "areaServed": { "@type": "Country", "name": "United States" },
    },
  },
  corporate: {
    heroBadge: "Website Design for Corporate & B2B Businesses",
    heroTitle: ["Professional Corporate Websites That Generate Leads", "Serving Businesses in New York, Chicago, San Francisco & All 50 States"],
    heroSubtitle: "Authority-building corporate websites that establish your company as an industry leader. Lead generation, thought leadership content, and B2B-focused design that converts visitors into clients.",
    citiesLabel: "Proudly serving corporations, agencies, and B2B businesses in:",
    problems: [
      { problem: "Outdated Corporate Image", solution: "Modern, professional design that shows you're established and trustworthy.", stat: "75% of B2B buyers judge companies by website" },
      { problem: "No Lead Generation", solution: "Strategic CTAs and forms that turn visitors into qualified leads.", stat: "B2B sites need 6+ CTAs per page" },
      { problem: "No Thought Leadership", solution: "Blog and content integration that showcases your expertise.", stat: "Companies that blog get 67% more leads" },
      { problem: "Poor SEO Rankings", solution: "B2B SEO strategy that targets your industry keywords.", stat: "75% of B2B buyers start with search" },
    ],
    benefits: [
      { icon: Building2, title: "Establish Authority", desc: "Professional design that positions you as industry leader.", metric: "2x Credibility" },
      { icon: Target, title: "Generate Quality Leads", desc: "Conversion-optimized pages with strategic CTAs.", metric: "3x More Leads" },
      { icon: TrendingUp, title: "Showcase Expertise", desc: "Case studies, testimonials, and thought leadership.", metric: "67% more leads" },
      { icon: Globe, title: "B2B SEO Mastery", desc: "Rank for industry-specific keywords.", metric: "+150% Organic Traffic" },
    ],
    features: [
      { name: "Lead Capture Forms", description: "Strategic contact and quote forms", benefit: "Never miss a lead" },
      { name: "Service Pages", description: "Detailed solutions with clear CTAs", benefit: "Guide visitors to action" },
      { name: "Case Studies", description: "Showcase successful projects", benefit: "Build credibility" },
      { name: "Team/About Pages", description: "Introduce leadership and company story", benefit: "Humanize your brand" },
      { name: "Industry Blog", description: "Thought leadership content", benefit: "SEO and authority" },
      { name: "Client Logos", description: "Showcase trusted companies", benefit: "Social proof wins" },
      { name: "Whitepapers/Resources", description: "Gated content for lead capture", benefit: "Nurture prospects" },
      { name: "Analytics & Goals", description: "Track conversions and ROI", benefit: "Data-driven growth" },
    ],
    faqs: [
      { question: "How much does a corporate website cost?", answer: "Our corporate websites start at $1,199 for the Essential Package and $1,999 for the Professional Package. Includes custom design, lead generation optimization, SEO setup, and mobile-responsive layout." },
      { question: "Will my corporate website generate leads?", answer: "Yes! Every page is designed with strategic CTAs, contact forms, and conversion paths. We optimize for B2B lead generation best practices." },
      { question: "Can you include a blog for thought leadership?", answer: "Absolutely! A blog is essential for B2B SEO and establishing authority. We can set up an easy-to-manage blog with SEO-optimized templates." },
      { question: "Will my company rank in Google?", answer: "Yes! We optimize for B2B keywords, set up proper schema, and ensure technical SEO is solid. For competitive keywords, we recommend ongoing SEO services." },
      { question: "Can I display case studies and testimonials?", answer: "Yes! Case studies and client testimonials are crucial for B2B. We'll create dedicated sections to showcase your success stories." },
      { question: "Do you work with B2B SaaS companies?", answer: "Yes! We have experience with SaaS, professional services, manufacturing, consulting, and all B2B sectors." },
      { question: "Can I integrate with my CRM?", answer: "Yes! We can connect forms to Salesforce, HubSpot, Zoho, or any other CRM to track leads automatically." },
      { question: "Will the website be professional and modern?", answer: "Yes! We create sophisticated, modern corporate designs that establish credibility. We avoid flashy trends in favor of timeless professionalism." },
      { question: "Can I add a resources section with whitepapers?", answer: "Yes! Gated content (whitepapers, ebooks) is excellent for lead capture. Visitors exchange contact info to download." },
      { question: "Do you offer ongoing maintenance?", answer: "Yes! We offer maintenance plans for security updates, content changes, and ongoing improvements. Most corporate clients opt for monthly support." },
    ],
    serviceName: "Corporate Website Design",
    serviceDescription: "Professional corporate websites that generate leads. Starting at $1,199.",
    jsonLd: {
      "@type": "Service",
      "name": "Corporate Website Design",
      "description": "Professional corporate websites that generate leads. Starting at $1,199.",
      "provider": { "@type": "Organization", "name": "911MAKERS", "url": "https://911makers.com" },
      "areaServed": { "@type": "Country", "name": "United States" },
    },
  },
};

// FAQ Component - uses content based on page slug
function FAQSection({ slug }: { slug: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const content = industryContent[slug];
  if (!content) return null;

  const faqTitles: Record<string, string> = {
    tax: "Frequently Asked Questions About Tax Office Websites",
    restaurant: "Frequently Asked Questions About Restaurant Websites",
    clinic: "Frequently Asked Questions About Clinic & Salon Websites",
    clothing: "Frequently Asked Questions About Clothing Brand E-Commerce",
    delivery: "Frequently Asked Questions About Delivery Service Websites",
    corporate: "Frequently Asked Questions About Corporate Websites",
  };

  return (
    <section className="py-24 bg-background-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Expert Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mt-4 mb-4">
            {faqTitles[slug] || "Frequently Asked Questions"}
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Everything you need to know about professional website design for your industry across the USA.
          </p>
        </motion.div>

        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-background-primary border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-foreground-primary font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-foreground-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryPageClient({ industry, pricing, slug }: IndustryPageClientProps) {
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground-primary mb-4">Industry Not Found</h1>
          <Link href="/industries">
            <Button variant="secondary">View All Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  const content = industryContent[slug] || industryContent.tax;

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(content.jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div>
        {/* HERO SECTION */}
        <section className="py-24 bg-background-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: `${industry.accentColor}20` }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: `${industry.accentColor}15`, color: industry.accentColor }}>
                {content.heroBadge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground-primary leading-tight">
                {content.heroTitle[0]}
                <br />
                <span className="text-gradient">{content.heroTitle[1]}</span>
              </h1>
              <p className="text-foreground-secondary max-w-3xl mx-auto text-lg mb-6 leading-relaxed">
                {content.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group" style={{ backgroundColor: industry.accentColor }}>
                    Get Your Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/growth-audit">
                  <Button variant="secondary" size="lg">Get Free Website Audit</Button>
                </Link>
              </div>
              <p className="text-foreground-tertiary">
                Starting from <span className="text-accent font-semibold text-xl">${industry.startingPrice.toLocaleString()}</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* CITIES WE SERVE */}
        <section className="py-8 bg-background-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-foreground-tertiary text-sm mb-4">
              {content.citiesLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {usCities.map((city) => (
                <span key={city} className="px-3 py-1 bg-background-primary border border-border rounded-full text-xs text-foreground-secondary">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-24 bg-background-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mt-4 mb-4">
                Why Businesses Like Yours Are Losing Clients
              </h2>
              <p className="text-foreground-secondary max-w-3xl mx-auto">
                Every day you wait is a client lost to competitors with better websites. Here's what we see across the USA.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.problems.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="bg-background-secondary border border-border rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-primary mb-2">{item.problem}</h3>
                      <p className="text-foreground-secondary text-sm mb-3">{item.solution}</p>
                      <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                        <span className="text-xs text-accent font-medium">{item.stat}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SOLUTION / BENEFITS */}
        <section className="py-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                Our Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mt-4 mb-4">
                How 911MAKERS Helps Your Industry Win More Clients
              </h2>
              <p className="text-foreground-secondary max-w-3xl mx-auto">
                We don't just build websites. We create digital growth engines that help businesses across America attract more clients and save time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.benefits.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="bg-background-primary border border-border/60 rounded-2xl p-8 text-center hover:border-accent/80 hover:shadow-[0_8px_30px_rgba(255,215,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <span style={{ color: industry.accentColor }}><item.icon className="w-8 h-8" /></span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground-primary mb-3">{item.title}</h3>
                  <p className="text-foreground-secondary text-sm mb-6">{item.desc}</p>
                  <div className="px-3 py-2 bg-accent/10 rounded-lg">
                    <span className="text-accent font-bold text-sm">{item.metric}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED FEATURES */}
        <section className="py-24 bg-background-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                Everything Included
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mt-4 mb-4">
                Professional Features Built for Your Industry
              </h2>
              <p className="text-foreground-secondary max-w-3xl mx-auto">
                Every feature designed to help you attract more clients, save time, and grow your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-6 p-8 bg-background-secondary border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${industry.accentColor}15` }}>
                    <Check className="w-5 h-5" style={{ color: industry.accentColor }} />
                  </div>
                  <div>
                    <h4 className="text-foreground-primary font-semibold mb-2">{feature.name}</h4>
                    <p className="text-foreground-secondary text-sm mb-2">{feature.description}</p>
                    <span className="text-xs text-accent font-medium">✓ {feature.benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        {pricing && (
          <section className="py-24 bg-background-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          className="bg-background-primary border-2 rounded-3xl overflow-hidden" style={{ borderColor: industry.accentColor }}>
                {pricing.isPopular && (
                  <div className="text-center py-3 text-sm font-semibold text-black" style={{ backgroundColor: industry.accentColor }}>
                    Most Popular Choice
                  </div>
                )}
                <div className="p-8 md:p-12 text-center border-b border-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-primary mb-4">{pricing.name}</h2>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-5xl md:text-6xl font-bold" style={{ color: industry.accentColor }}>
                      ${pricing.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-foreground-tertiary text-lg">Starting from</span>
                  </div>
                  <p className="text-foreground-secondary mt-4">
                    Complete website package with all essential features for {pricing.deliveryTime}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 p-6 bg-background-secondary/50 border-b border-border">
                  <div className="flex items-center gap-2 text-foreground-secondary">
                    <Clock className="w-5 h-5" style={{ color: industry.accentColor }} />
                    <span>{pricing.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-secondary">
                    <RefreshCw className="w-5 h-5" style={{ color: industry.accentColor }} />
                    <span>{pricing.revisions} Revisions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-secondary">
                    <Headphones className="w-5 h-5" style={{ color: industry.accentColor }} />
                    <span>{pricing.supportDuration} Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-secondary">
                    <CheckCircle className="w-5 h-5" style={{ color: industry.accentColor }} />
                    <span>100% Satisfaction</span>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <ul className="space-y-4">
                    {pricing.features.map((feature: any) => (
                      <li key={feature.name || feature} className="flex items-center gap-3 text-foreground-secondary">
                        <Check className="w-5 h-5 flex-shrink-0" style={{ color: industry.accentColor }} />
                        {feature.name || feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-border bg-background-secondary/30">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button variant="primary" size="lg" className="w-full" style={{ backgroundColor: industry.accentColor }}>
                        Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/growth-audit" className="flex-1">
                      <Button variant="secondary" size="lg" className="w-full">Get Free Audit</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* SOCIAL PROOF */}
        <section className="py-24 bg-background-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground-primary mb-4">
                Trusted by Businesses Across America
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Businesses Served" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "2.8x", label: "Average Lead Increase" },
                { value: "4.9/5", label: "Average Rating" },
              ].map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-background-secondary border border-border rounded-2xl">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground-primary">{stat.value}</div>
                  <div className="text-foreground-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQSection slug={slug} />

        {/* CTA SECTION */}
        <section className="py-24 bg-background-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-6">
                Ready to Dominate Your Market in {usCities.slice(0, 3).join(", ")} & Beyond?
              </h2>
              <p className="text-foreground-secondary text-lg mb-8">
                Join 50+ businesses who have transformed their online presence with 911MAKERS.
                <br />
                <span className="text-accent font-semibold">
                  Starting from ${industry.startingPrice.toLocaleString()} - No hidden costs - 100% Satisfaction Guarantee
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Your Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/growth-audit">
                  <Button variant="secondary" size="lg">Get Free Website Audit</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}