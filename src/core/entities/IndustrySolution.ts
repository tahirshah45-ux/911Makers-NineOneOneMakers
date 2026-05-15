/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: IndustrySolution
 * =============================================================================
 * Represents a tailored digital solution for a specific industry.
 * Each solution package addresses unique business challenges for that industry.
 */

export type IndustryType =
  | 'tax_office'
  | 'restaurant'
  | 'clinic_salon'
  | 'clothing_brand'
  | 'delivery'
  | 'corporate';

export interface IndustrySolution {
  /** Unique identifier */
  id: string;

  /** Industry type this solution targets */
  industryType: IndustryType;

  /** Display name (e.g., "Tax Office Authority") */
  displayName: string;

  /** Short slug for URLs (e.g., "tax") */
  slug: string;

  /** Icon identifier from icon set */
  icon: string;

  /** Package name */
  packageName: string;

  /** Brief description of the solution */
  description: string;

  /** Full detailed description */
  fullDescription: string;

  /** Key features included in this solution */
  features: SolutionFeature[];

  /** Starting price in USD */
  startingPrice: number;

  /** Color accent for this industry */
  accentColor: string;

  /** Estimated delivery time */
  deliveryTime: string;

  /** Number of revision rounds included */
  revisions: number;

  /** Is this package currently active/available */
  isActive: boolean;

  /** Order for display purposes */
  displayOrder: number;
}

export interface SolutionFeature {
  /** Feature name */
  name: string;

  /** Feature description */
  description?: string;

  /** Whether feature is included or add-on */
  isIncluded: boolean;
}

/**
 * Predefined industry solutions
 */
export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'tax-office-authority',
    industryType: 'tax_office',
    displayName: 'Tax Office Authority',
    slug: 'tax',
    icon: 'Calculator',
    packageName: 'Tax Office Authority Package',
    description: 'Professional websites for tax professionals and accounting firms.',
    fullDescription: 'Professional websites for tax professionals and accounting firms. Build trust and attract more clients with a polished online presence featuring client portals, appointment scheduling, and secure document management.',
    features: [
      { name: 'Client Portal', description: 'Secure area for clients to access documents', isIncluded: true },
      { name: 'Appointment Scheduling', description: 'Online booking system', isIncluded: true },
      { name: 'Document Upload', description: 'Secure file sharing', isIncluded: true },
      { name: 'Tax Calculator', description: 'Interactive tax estimation tool', isIncluded: true },
      { name: 'Secure Data Storage', description: 'Encrypted document storage', isIncluded: true },
    ],
    startingPrice: 1299,
    accentColor: '#FFD700',
    deliveryTime: '3-4 weeks',
    revisions: 3,
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 'restaurant-growth',
    industryType: 'restaurant',
    displayName: 'Restaurant Growth',
    slug: 'restaurant',
    icon: 'UtensilsCrossed',
    packageName: 'Restaurant Growth Package',
    description: 'Stunning restaurant websites with online reservations and menu management.',
    fullDescription: 'Stunning restaurant websites with online reservations, menu management, and SEO that brings hungry customers to your door. Showcase your ambiance and drive more reservations.',
    features: [
      { name: 'Online Reservations', description: 'Table booking system', isIncluded: true },
      { name: 'Menu Management', description: 'Easy menu updates', isIncluded: true },
      { name: 'Photo Gallery', description: 'Showcase dishes and ambiance', isIncluded: true },
      { name: 'Online Ordering', description: 'Direct food ordering', isIncluded: true },
      { name: 'Reviews Integration', description: 'Google and social reviews', isIncluded: true },
    ],
    startingPrice: 1599,
    accentColor: '#FF6B35',
    deliveryTime: '4-5 weeks',
    revisions: 3,
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 'clinic-salon-professional',
    industryType: 'clinic_salon',
    displayName: 'Clinic & Salon Professional',
    slug: 'clinic',
    icon: 'Stethoscope',
    packageName: 'Clinic & Salon Professional Package',
    description: 'Elegant websites for medical clinics, dental practices, and beauty salons.',
    fullDescription: 'Elegant websites for medical clinics, dental practices, and beauty salons. Showcase your services and book appointments effortlessly with professional online booking.',
    features: [
      { name: 'Online Booking', description: 'Appointment scheduling system', isIncluded: true },
      { name: 'Service Showcase', description: 'List all services and pricing', isIncluded: true },
      { name: 'Before/After Gallery', description: 'Transformation showcases', isIncluded: true },
      { name: 'Patient Forms', description: 'Digital intake forms', isIncluded: true },
      { name: 'Testimonials Section', description: 'Patient/client reviews', isIncluded: true },
    ],
    startingPrice: 1499,
    accentColor: '#10B981',
    deliveryTime: '4-5 weeks',
    revisions: 3,
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 'clothing-brand-ecommerce',
    industryType: 'clothing_brand',
    displayName: 'Clothing Brand E-Commerce',
    slug: 'clothing',
    icon: 'Shirt',
    packageName: 'Clothing Brand E-commerce Package',
    description: 'Powerful online stores for fashion brands with inventory management.',
    fullDescription: 'Powerful online stores for fashion brands. Showcase your collections, manage inventory, and process payments seamlessly with a beautiful, conversion-optimized store.',
    features: [
      { name: 'Product Catalog', description: 'Up to 100 products', isIncluded: true },
      { name: 'Size Guide', description: 'Interactive sizing', isIncluded: true },
      { name: 'Secure Checkout', description: 'PCI-compliant payments', isIncluded: true },
      { name: 'Inventory Management', description: 'Stock tracking', isIncluded: true },
      { name: 'Social Integration', description: 'Instagram shopping', isIncluded: true },
    ],
    startingPrice: 1699,
    accentColor: '#EC4899',
    deliveryTime: '5-6 weeks',
    revisions: 5,
    isActive: true,
    displayOrder: 4,
  },
  {
    id: 'delivery-business',
    industryType: 'delivery',
    displayName: 'Delivery Business',
    slug: 'delivery',
    icon: 'Truck',
    packageName: 'Delivery Business Package',
    description: 'Modern websites for delivery services with real-time tracking.',
    fullDescription: 'Modern websites for delivery services and logistics companies. Track orders, manage drivers, and keep customers informed with real-time tracking capabilities.',
    features: [
      { name: 'Order Tracking', description: 'Real-time tracking', isIncluded: true },
      { name: 'Driver Management', description: 'Driver dashboard', isIncluded: true },
      { name: 'Zone Coverage Map', description: 'Service area display', isIncluded: true },
      { name: 'Customer Portal', description: 'Delivery management', isIncluded: true },
      { name: 'Delivery Scheduling', description: 'Time slot booking', isIncluded: true },
    ],
    startingPrice: 1599,
    accentColor: '#3B82F6',
    deliveryTime: '4-5 weeks',
    revisions: 3,
    isActive: true,
    displayOrder: 5,
  },
  {
    id: 'corporate-industrial',
    industryType: 'corporate',
    displayName: 'Corporate & Industrial',
    slug: 'corporate',
    icon: 'Building2',
    packageName: 'Corporate & Industrial Package',
    description: 'Professional websites for corporations and industrial businesses.',
    fullDescription: 'Professional websites for corporations, factories, and industrial businesses. Establish authority and generate quality leads with a polished corporate presence.',
    features: [
      { name: 'Company Profile', description: 'About and history', isIncluded: true },
      { name: 'Project Showcase', description: 'Portfolio gallery', isIncluded: true },
      { name: 'Client Testimonials', description: 'Social proof', isIncluded: true },
      { name: 'Contact Management', description: 'Lead capture forms', isIncluded: true },
      { name: 'Lead Generation', description: 'CRM integration', isIncluded: true },
    ],
    startingPrice: 1199,
    accentColor: '#8B5CF6',
    deliveryTime: '3-4 weeks',
    revisions: 3,
    isActive: true,
    displayOrder: 6,
  },
];

/**
 * Get solution by slug
 */
export function getSolutionBySlug(slug: string): IndustrySolution | undefined {
  return INDUSTRY_SOLUTIONS.find(s => s.slug === slug);
}

/**
 * Get solution by industry type
 */
export function getSolutionByIndustry(industry: IndustryType): IndustrySolution | undefined {
  return INDUSTRY_SOLUTIONS.find(s => s.industryType === industry);
}