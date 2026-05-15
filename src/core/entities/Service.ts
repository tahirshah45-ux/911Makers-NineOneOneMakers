/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: Service
 * =============================================================================
 * Represents a digital service offered by 911MAKERS.
 * Services are the building blocks of solutions we provide to clients.
 */

export type ServiceCategory =
  | 'branding'        // Brand identity, logos, visual design
  | 'website'         // Web development, e-commerce
  | 'automation'      // Business process automation
  | 'growth';         // Marketing, SEO, lead generation

export type ServiceLevel =
  | 'basic'           // Starter package
  | 'professional'    // Standard package
  | 'premium';        // Full-featured package

export interface Service {
  /** Unique identifier */
  id: string;

  /** Service name */
  name: string;

  /** Short description for cards */
  shortDescription: string;

  /** Full description */
  description: string;

  /** Category */
  category: ServiceCategory;

  /** Icon identifier */
  icon: string;

  /** Service level */
  level: ServiceLevel;

  /** Key deliverables */
  deliverables: string[];

  /** Starting price */
  startingPrice: number;

  /** Price type: one-time or monthly */
  pricingType: 'one_time' | 'monthly';

  /** Whether service is currently offered */
  isActive: boolean;

  /** Display order */
  displayOrder: number;
}

/**
 * Predefined services offered by 911MAKERS
 */
export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    shortDescription: 'Memorable logos and brand guidelines',
    description: 'Complete brand development including logo design, color palette, typography, and brand guidelines that make your business unforgettable.',
    category: 'branding',
    icon: 'Palette',
    level: 'professional',
    deliverables: [
      'Logo Design (Primary + Variations)',
      'Color Palette Creation',
      'Typography Selection',
      'Brand Guidelines Document',
      'Business Card Design',
    ],
    startingPrice: 499,
    pricingType: 'one_time',
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 'premium-websites',
    name: 'Premium Websites',
    shortDescription: 'High-converting, SEO-optimized sites',
    description: 'High-converting, SEO-optimized websites built with cutting-edge technology. Fast, beautiful, and designed to generate leads.',
    category: 'website',
    icon: 'Globe',
    level: 'professional',
    deliverables: [
      'Custom Design (Unique to you)',
      'Mobile Responsive Layout',
      'SEO Optimization',
      'Fast Loading Speed',
      'CMS Integration',
    ],
    startingPrice: 1299,
    pricingType: 'one_time',
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 'ecommerce-solutions',
    name: 'E-Commerce Solutions',
    shortDescription: 'Powerful online stores',
    description: 'Full-featured online stores with secure payments, inventory management, and seamless user experience to boost your sales.',
    category: 'website',
    icon: 'ShoppingCart',
    level: 'premium',
    deliverables: [
      'Product Management System',
      'Secure Payment Processing',
      'Inventory Tracking',
      'Mobile-Optimized Store',
      'Analytics Dashboard',
    ],
    startingPrice: 1699,
    pricingType: 'one_time',
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 'business-automation',
    name: 'Business Automation',
    shortDescription: 'Streamline operations, save time',
    description: 'Streamline your operations with automated workflows, CRM integration, and smart scheduling that saves time and reduces errors.',
    category: 'automation',
    icon: 'Workflow',
    level: 'professional',
    deliverables: [
      'Workflow Automation',
      'CRM Integration',
      'Email Automation',
      'Appointment Scheduling',
      'Lead Management System',
    ],
    startingPrice: 799,
    pricingType: 'one_time',
    isActive: true,
    displayOrder: 4,
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    shortDescription: 'Drive qualified leads',
    description: 'Strategic marketing campaigns across Google, Facebook, Instagram, and more to drive qualified leads and maximize ROI.',
    category: 'growth',
    icon: 'TrendingUp',
    level: 'professional',
    deliverables: [
      'Google Ads Management',
      'Social Media Marketing',
      'Content Strategy',
      'Email Campaigns',
      'Analytics & Monthly Reporting',
    ],
    startingPrice: 599,
    pricingType: 'monthly',
    isActive: true,
    displayOrder: 5,
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    shortDescription: 'Dominate search results',
    description: 'Dominate search results with technical SEO, content optimization, and local SEO strategies that bring organic traffic.',
    category: 'growth',
    icon: 'Search',
    level: 'professional',
    deliverables: [
      'Technical SEO Audit',
      'Local SEO Setup',
      'Content Optimization',
      'Link Building',
      'Rank Tracking Dashboard',
    ],
    startingPrice: 449,
    pricingType: 'monthly',
    isActive: true,
    displayOrder: 6,
  },
];

/**
 * Get all active services
 */
export function getActiveServices(): Service[] {
  return SERVICES.filter(s => s.isActive).sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get services by category
 */
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter(s => s.category === category && s.isActive);
}

/**
 * Get service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(s => s.id === id);
}

/**
 * Get service category label
 */
export function getCategoryLabel(category: ServiceCategory): string {
  const labels: Record<ServiceCategory, string> = {
    branding: 'Branding',
    website: 'Websites',
    automation: 'Automation',
    growth: 'Growth',
  };
  return labels[category];
}