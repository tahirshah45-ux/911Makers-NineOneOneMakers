/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Repository: IndustrySolutionRepository
 * =============================================================================
 * Implements IIndustrySolutionRepository from Core layer.
 * In production, this would fetch from Payload CMS.
 * Currently uses mock data for demonstration.
 */

import type {
  IIndustrySolutionRepository
} from '@/core/interfaces';
import type {
  IndustrySolution,
  IndustryType
} from '@/core/entities/IndustrySolution';

// Mock data - in production, replace with Payload CMS queries
import { INDUSTRY_SOLUTIONS, getSolutionBySlug, getSolutionByIndustry } from '@/core/entities/IndustrySolution';

/**
 * Industry Solution Repository Implementation
 */
export class IndustrySolutionRepository implements IIndustrySolutionRepository {

  /**
   * Get all solutions
   */
  getAll(): IndustrySolution[] {
    return INDUSTRY_SOLUTIONS;
  }

  /**
   * Get solution by ID
   */
  getById(id: string): IndustrySolution | null {
    return INDUSTRY_SOLUTIONS.find(s => s.id === id) || null;
  }

  /**
   * Get solution by slug
   */
  getBySlug(slug: string): IndustrySolution | null {
    return getSolutionBySlug(slug) || null;
  }

  /**
   * Get solution by industry type
   */
  getByIndustryType(type: IndustryType): IndustrySolution | null {
    return getSolutionByIndustry(type) || null;
  }

  /**
   * Get only active solutions
   */
  getActive(): IndustrySolution[] {
    return INDUSTRY_SOLUTIONS.filter(s => s.isActive);
  }

  // Future: Add database methods when Payload is connected
  // async findAll(): Promise<IndustrySolution[]> {
  //   const response = await fetch('/api/industries');
  //   return response.json();
  // }
}

// Export singleton instance
export const industrySolutionRepository = new IndustrySolutionRepository();