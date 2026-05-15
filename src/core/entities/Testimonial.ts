/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: Testimonial
 * =============================================================================
 * Represents a client testimonial/review.
 * Used for social proof on the website.
 */

import { IndustryType } from './IndustrySolution';

export interface Testimonial {
  /** Unique identifier */
  id: string;

  /** Client name */
  clientName: string;

  /** Company name */
  companyName: string;

  /** Client role/title */
  role: string;

  /** Testimonial content */
  content: string;

  /** Rating (1-5 stars) */
  rating: number;

  /** Industry the client belongs to */
  industry: IndustryType;

  /** Industry display name */
  industryDisplay: string;

  /** Avatar URL (optional) */
  avatarUrl?: string;

  /** Is this featured on homepage */
  isFeatured: boolean;

  /** Display order */
  displayOrder: number;

  /** Creation date */
  createdAt: Date;
}

/**
 * Predefined testimonials
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'James Wilson',
    companyName: 'Wilson Tax Services',
    role: 'Owner',
    content: '911MAKERS transformed our online presence completely. Our website now generates 3x more leads than before. The team understood exactly what tax professionals need.',
    rating: 5,
    industry: 'tax_office',
    industryDisplay: 'Tax',
    isFeatured: true,
    displayOrder: 1,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'testimonial-2',
    clientName: 'Maria Garcia',
    companyName: 'Bella Italia Ristorante',
    role: 'Owner',
    content: 'Our restaurant website is absolutely stunning! Reservations have increased by 40% since launch. The online ordering system is a game-changer for our business.',
    rating: 5,
    industry: 'restaurant',
    industryDisplay: 'Restaurant',
    isFeatured: true,
    displayOrder: 2,
    createdAt: new Date('2024-02-20'),
  },
  {
    id: 'testimonial-3',
    clientName: 'Dr. Sarah Chen',
    companyName: 'Radiance Dental Clinic',
    role: 'Practice Owner',
    content: 'Professional, timely, and incredibly talented. Our new website has transformed how patients perceive our clinic. Booking appointments has never been easier.',
    rating: 5,
    industry: 'clinic_salon',
    industryDisplay: 'Clinic',
    isFeatured: true,
    displayOrder: 3,
    createdAt: new Date('2024-03-10'),
  },
  {
    id: 'testimonial-4',
    clientName: 'Michael Brown',
    companyName: 'Urban Threads',
    role: 'Founder',
    content: 'Our e-commerce sales doubled within the first month! The team built exactly what we needed - a beautiful, fast, and user-friendly online store.',
    rating: 5,
    industry: 'clothing_brand',
    industryDisplay: 'Clothing',
    isFeatured: true,
    displayOrder: 4,
    createdAt: new Date('2024-04-05'),
  },
  {
    id: 'testimonial-5',
    clientName: 'Robert Taylor',
    companyName: 'Swift Deliveries',
    role: 'CEO',
    content: 'The delivery tracking system they built is incredible. Customers love being able to track their orders in real-time. Highly recommend!',
    rating: 5,
    industry: 'delivery',
    industryDisplay: 'Delivery',
    isFeatured: true,
    displayOrder: 5,
    createdAt: new Date('2024-05-12'),
  },
  {
    id: 'testimonial-6',
    clientName: 'Jennifer Adams',
    companyName: 'Adams Manufacturing',
    role: 'Marketing Director',
    content: 'Our corporate website now accurately represents our company\'s scale and professionalism. Lead quality has improved significantly.',
    rating: 5,
    industry: 'corporate',
    industryDisplay: 'Corporate',
    isFeatured: true,
    displayOrder: 6,
    createdAt: new Date('2024-06-18'),
  },
];

/**
 * Get all featured testimonials
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return TESTIMONIALS
    .filter(t => t.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get testimonials by industry
 */
export function getTestimonialsByIndustry(industry: IndustryType): Testimonial[] {
  return TESTIMONIALS.filter(t => t.industry === industry);
}

/**
 * Get testimonial by ID
 */
export function getTestimonialById(id: string): Testimonial | undefined {
  return TESTIMONIALS.find(t => t.id === id);
}

/**
 * Get random testimonial
 */
export function getRandomTestimonial(): Testimonial {
  const featured = getFeaturedTestimonials();
  return featured[Math.floor(Math.random() * featured.length)];
}

/**
 * Get average rating
 */
export function getAverageRating(): number {
  const total = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((total / TESTIMONIALS.length) * 10) / 10;
}

/**
 * Render star rating as string
 */
export function renderStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '☆'.repeat(emptyStars);
}