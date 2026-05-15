/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Repository: TestimonialRepository
 * =============================================================================
 * Implements ITestimonialRepository from Core layer.
 */

import type { ITestimonialRepository } from '@/core/interfaces';
import type { Testimonial } from '@/core/entities/Testimonial';
import type { IndustryType } from '@/core/entities/IndustrySolution';

// Mock data - in production, replace with Payload CMS queries
import {
  TESTIMONIALS,
  getFeaturedTestimonials,
  getTestimonialsByIndustry,
  getTestimonialById,
  getRandomTestimonial,
  getAverageRating
} from '@/core/entities/Testimonial';

/**
 * Testimonial Repository Implementation
 */
export class TestimonialRepository implements ITestimonialRepository {

  /**
   * Get all testimonials
   */
  getAll(): Testimonial[] {
    return TESTIMONIALS;
  }

  /**
   * Get testimonial by ID
   */
  getById(id: string): Testimonial | null {
    return getTestimonialById(id) || null;
  }

  /**
   * Get featured testimonials
   */
  getFeatured(): Testimonial[] {
    return getFeaturedTestimonials();
  }

  /**
   * Get testimonials by industry
   */
  getByIndustry(industry: IndustryType): Testimonial[] {
    return getTestimonialsByIndustry(industry);
  }

  /**
   * Get random testimonial
   */
  getRandom(): Testimonial | null {
    return getRandomTestimonial();
  }

  /**
   * Get average rating
   */
  getAverageRating(): number {
    return getAverageRating();
  }

  /**
   * Get total count
   */
  getCount(): number {
    return TESTIMONIALS.length;
  }
}

// Export singleton instance
export const testimonialRepository = new TestimonialRepository();