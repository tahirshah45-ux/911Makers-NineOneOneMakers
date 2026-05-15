/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Repository: PricingRepository
 * =============================================================================
 * Implements IPricingRepository from Core layer.
 */

import type { IPricingRepository } from '@/core/interfaces';
import type { PricingPackage, PackageTier } from '@/core/entities/PricingPackage';
import type { IndustryType } from '@/core/entities/IndustrySolution';

// Mock data - in production, replace with Payload CMS queries
import {
  PRICING_PACKAGES,
  getPackageById,
  getPackagesByIndustry,
  getPopularPackages
} from '@/core/entities/PricingPackage';

/**
 * Pricing Package Repository Implementation
 */
export class PricingRepository implements IPricingRepository {

  /**
   * Get all packages
   */
  getAll(): PricingPackage[] {
    return PRICING_PACKAGES;
  }

  /**
   * Get package by ID
   */
  getById(id: string): PricingPackage | null {
    return getPackageById(id) || null;
  }

  /**
   * Get packages by industry
   */
  getByIndustry(industry: IndustryType): PricingPackage[] {
    return getPackagesByIndustry(industry);
  }

  /**
   * Get packages by tier
   */
  getByTier(tier: PackageTier): PricingPackage[] {
    return PRICING_PACKAGES.filter(p => p.tier === tier && p.isActive);
  }

  /**
   * Get popular packages
   */
  getPopular(): PricingPackage[] {
    return getPopularPackages();
  }

  /**
   * Get active packages only
   */
  getActive(): PricingPackage[] {
    return PRICING_PACKAGES.filter(p => p.isActive);
  }

  /**
   * Get all packages with their solution details
   * (Joins pricing with industry solution data)
   */
  getAllWithSolutions(): Array<PricingPackage & { solution: any }> {
    return PRICING_PACKAGES.map(pkg => ({
      ...pkg,
      solution: getPackageById(pkg.solutionId)
    })).filter(p => p.isActive);
  }
}

// Export singleton instance
export const pricingRepository = new PricingRepository();