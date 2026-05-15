/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: PricingPackage
 * =============================================================================
 * Represents a pricing package for a specific solution.
 * Contains pricing details, features, and delivery information.
 */

import { IndustryType } from './IndustrySolution';

export type PackageTier =
  | 'starter'        // Basic features
  | 'professional'   // Standard features
  | 'enterprise';    // Full-featured

export interface PricingPackage {
  /** Unique identifier */
  id: string;

  /** Associated solution ID */
  solutionId: string;

  /** Package tier */
  tier: PackageTier;

  /** Package name */
  name: string;

  /** Industry type */
  industryType: IndustryType;

  /** Starting price in USD */
  startingPrice: number;

  /** Price display text */
  priceDisplay: string;

  /** Features included */
  features: PackageFeature[];

  /** Delivery time estimate */
  deliveryTime: string;

  /** Number of revision rounds */
  revisions: number;

  /** Support duration */
  supportDuration: string;

  /** Whether package is currently available */
  isActive: boolean;

  /** Is this the recommended package */
  isPopular: boolean;

  /** Display order */
  displayOrder: number;
}

export interface PackageFeature {
  /** Feature name */
  name: string;

  /** Whether it's included */
  isIncluded: boolean;

  /** Is it a highlight/featured feature */
  isHighlight?: boolean;
}

/**
 * Create a pricing package
 */
export function createPricingPackage(data: Omit<PricingPackage, 'id'>): PricingPackage {
  return {
    ...data,
    id: crypto.randomUUID(),
  };
}

/**
 * All pricing packages for all industries
 */
export const PRICING_PACKAGES: PricingPackage[] = [
  // Tax Office
  {
    id: 'tax-starter',
    solutionId: 'tax-office-authority',
    tier: 'starter',
    name: 'Tax Office Starter',
    industryType: 'tax_office',
    startingPrice: 1299,
    priceDisplay: 'Starting from $1,299',
    features: [
      { name: 'Custom Website Design', isIncluded: true },
      { name: 'Client Portal', isIncluded: true },
      { name: 'Appointment Scheduling', isIncluded: true },
      { name: 'Document Upload System', isIncluded: true },
      { name: 'Secure Contact Forms', isIncluded: true },
      { name: 'SEO Optimization', isIncluded: true },
      { name: 'Mobile Responsive', isIncluded: true },
      { name: '1 Month Support', isIncluded: true },
    ],
    deliveryTime: '3-4 weeks',
    revisions: 3,
    supportDuration: '1 month',
    isActive: true,
    isPopular: false,
    displayOrder: 1,
  },
  {
    id: 'tax-professional',
    solutionId: 'tax-office-authority',
    tier: 'professional',
    name: 'Tax Office Professional',
    industryType: 'tax_office',
    startingPrice: 1999,
    priceDisplay: 'Starting from $1,999',
    features: [
      { name: 'Everything in Starter', isIncluded: true, isHighlight: true },
      { name: 'Advanced Client Portal', isIncluded: true },
      { name: 'Tax Calculator Integration', isIncluded: true },
      { name: 'Email Marketing', isIncluded: true },
      { name: '3 Months Support', isIncluded: true },
      { name: 'Priority Revisions', isIncluded: true },
    ],
    deliveryTime: '4-5 weeks',
    revisions: 5,
    supportDuration: '3 months',
    isActive: true,
    isPopular: true,
    displayOrder: 2,
  },

  // Restaurant
  {
    id: 'restaurant-starter',
    solutionId: 'restaurant-growth',
    tier: 'starter',
    name: 'Restaurant Starter',
    industryType: 'restaurant',
    startingPrice: 1599,
    priceDisplay: 'Starting from $1,599',
    features: [
      { name: 'Stunning Visual Design', isIncluded: true },
      { name: 'Online Reservations System', isIncluded: true },
      { name: 'Menu Management', isIncluded: true },
      { name: 'Photo Gallery', isIncluded: true },
      { name: 'Online Ordering', isIncluded: true },
      { name: 'Google Business Integration', isIncluded: true },
      { name: 'SEO Optimization', isIncluded: true },
      { name: '1 Month Support', isIncluded: true },
    ],
    deliveryTime: '4-5 weeks',
    revisions: 3,
    supportDuration: '1 month',
    isActive: true,
    isPopular: false,
    displayOrder: 1,
  },
  {
    id: 'restaurant-professional',
    solutionId: 'restaurant-growth',
    tier: 'professional',
    name: 'Restaurant Professional',
    industryType: 'restaurant',
    startingPrice: 2499,
    priceDisplay: 'Starting from $2,499',
    features: [
      { name: 'Everything in Starter', isIncluded: true, isHighlight: true },
      { name: 'Full Online Ordering System', isIncluded: true },
      { name: 'POS Integration', isIncluded: true },
      { name: 'Loyalty Program', isIncluded: true },
      { name: 'Email & SMS Marketing', isIncluded: true },
      { name: '3 Months Support', isIncluded: true },
    ],
    deliveryTime: '5-6 weeks',
    revisions: 5,
    supportDuration: '3 months',
    isActive: true,
    isPopular: true,
    displayOrder: 2,
  },

  // Clinic & Salon
  {
    id: 'clinic-starter',
    solutionId: 'clinic-salon-professional',
    tier: 'starter',
    name: 'Clinic & Salon Starter',
    industryType: 'clinic_salon',
    startingPrice: 1499,
    priceDisplay: 'Starting from $1,499',
    features: [
      { name: 'Elegant Professional Design', isIncluded: true },
      { name: 'Online Booking System', isIncluded: true },
      { name: 'Service Showcase', isIncluded: true },
      { name: 'Before/After Gallery', isIncluded: true },
      { name: 'Patient Intake Forms', isIncluded: true },
      { name: 'Testimonials Section', isIncluded: true },
      { name: 'SEO Optimization', isIncluded: true },
      { name: '1 Month Support', isIncluded: true },
    ],
    deliveryTime: '4-5 weeks',
    revisions: 3,
    supportDuration: '1 month',
    isActive: true,
    isPopular: false,
    displayOrder: 1,
  },

  // Clothing Brand
  {
    id: 'clothing-starter',
    solutionId: 'clothing-brand-ecommerce',
    tier: 'starter',
    name: 'Clothing Brand Starter',
    industryType: 'clothing_brand',
    startingPrice: 1699,
    priceDisplay: 'Starting from $1,699',
    features: [
      { name: 'Full E-Commerce Store', isIncluded: true },
      { name: 'Product Catalog (up to 100)', isIncluded: true },
      { name: 'Secure Checkout', isIncluded: true },
      { name: 'Inventory Management', isIncluded: true },
      { name: 'Size Guide', isIncluded: true },
      { name: 'Order Management', isIncluded: true },
      { name: 'Analytics Dashboard', isIncluded: true },
      { name: '2 Month Support', isIncluded: true },
    ],
    deliveryTime: '5-6 weeks',
    revisions: 5,
    supportDuration: '2 months',
    isActive: true,
    isPopular: false,
    displayOrder: 1,
  },

  // Delivery Business
  {
    id: 'delivery-starter',
    solutionId: 'delivery-business',
    tier: 'starter',
    name: 'Delivery Business Starter',
    industryType: 'delivery',
    startingPrice: 1599,
    priceDisplay: 'Starting from $1,599',
    features: [
      { name: 'Modern Website Design', isIncluded: true },
      { name: 'Real-time Order Tracking', isIncluded: true },
      { name: 'Driver Management UI', isIncluded: true },
      { name: 'Zone Coverage Map', isIncluded: true },
      { name: 'Customer Dashboard', isIncluded: true },
      { name: 'Delivery Scheduling', isIncluded: true },
      { name: 'Quote Calculator', isIncluded: true },
      { name: '1 Month Support', isIncluded: true },
    ],
    deliveryTime: '4-5 weeks',
    revisions: 3,
    supportDuration: '1 month',
    isActive: true,
    isPopular: false,
    displayOrder: 1,
  },

  // Corporate
  {
    id: 'corporate-starter',
    solutionId: 'corporate-industrial',
    tier: 'starter',
    name: 'Corporate Starter',
    industryType: 'corporate',
    startingPrice: 1199,
    priceDisplay: 'Starting from $1,199',
    features: [
      { name: 'Professional Corporate Design', isIncluded: true },
      { name: 'Company Profile Pages', isIncluded: true },
      { name: 'Project Showcase', isIncluded: true },
      { name: 'Team Members Section', isIncluded: true },
      { name: 'Lead Generation Forms', isIncluded: true },
      { name: 'Client Testimonials', isIncluded: true },
      { name: 'SEO Optimization', isIncluded: true },
      { name: '1 Month Support', isIncluded: true },
    ],
    deliveryTime: '3-4 weeks',
    revisions: 3,
    supportDuration: '1 month',
    isActive: true,
    isPopular: false,
    displayOrder: 1,
  },
];

/**
 * Get package by ID
 */
export function getPackageById(id: string): PricingPackage | undefined {
  return PRICING_PACKAGES.find(p => p.id === id);
}

/**
 * Get packages by industry
 */
export function getPackagesByIndustry(industry: IndustryType): PricingPackage[] {
  return PRICING_PACKAGES
    .filter(p => p.industryType === industry && p.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get popular packages
 */
export function getPopularPackages(): PricingPackage[] {
  return PRICING_PACKAGES.filter(p => p.isPopular && p.isActive);
}

/**
 * Get tier display name
 */
export function getTierName(tier: PackageTier): string {
  const names: Record<PackageTier, string> = {
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
  };
  return names[tier];
}