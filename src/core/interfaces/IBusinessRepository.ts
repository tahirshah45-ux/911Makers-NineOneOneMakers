/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Repository Interfaces
 * =============================================================================
 * These interfaces define the contract for data access.
 * Implementation will be in Layer 2 (Infrastructure).
 */

import type { Business, BusinessType, BusinessSize } from '../entities/Business';
import type { IndustrySolution, IndustryType } from '../entities/IndustrySolution';
import type { Service, ServiceCategory } from '../entities/Service';
import type { Lead, LeadSource, LeadStatus } from '../entities/Lead';
import type { PricingPackage, PackageTier } from '../entities/PricingPackage';
import type { Testimonial } from '../entities/Testimonial';

/**
 * Business Repository Interface
 * Contract for accessing and manipulating Business entities
 */
export interface IBusinessRepository {
  /** Get all businesses */
  getAll(): Promise<Business[]>;

  /** Get business by ID */
  getById(id: string): Promise<Business | null>;

  /** Get businesses by type */
  getByType(type: BusinessType): Promise<Business[]>;

  /** Get businesses by size */
  getBySize(size: BusinessSize): Promise<Business[]>;

  /** Create new business */
  create(business: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>): Promise<Business>;

  /** Update business */
  update(id: string, data: Partial<Business>): Promise<Business | null>;

  /** Delete business */
  delete(id: string): Promise<boolean>;
}

/**
 * Industry Solution Repository Interface
 */
export interface IIndustrySolutionRepository {
  /** Get all solutions */
  getAll(): IndustrySolution[];

  /** Get solution by ID */
  getById(id: string): IndustrySolution | null;

  /** Get solution by slug */
  getBySlug(slug: string): IndustrySolution | null;

  /** Get solution by industry type */
  getByIndustryType(type: IndustryType): IndustrySolution | null;

  /** Get active solutions */
  getActive(): IndustrySolution[];
}

/**
 * Service Repository Interface
 */
export interface IServiceRepository {
  /** Get all services */
  getAll(): Service[];

  /** Get service by ID */
  getById(id: string): Service | null;

  /** Get services by category */
  getByCategory(category: ServiceCategory): Service[];

  /** Get active services */
  getActive(): Service[];
}

/**
 * Lead Repository Interface
 */
export interface ILeadRepository {
  /** Get all leads */
  getAll(): Promise<Lead[]>;

  /** Get lead by ID */
  getById(id: string): Promise<Lead | null>;

  /** Get leads by status */
  getByStatus(status: LeadStatus): Promise<Lead[]>;

  /** Get leads by source */
  getBySource(source: LeadSource): Promise<Lead[]>;

  /** Create new lead */
  create(lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lead>;

  /** Update lead */
  update(id: string, data: Partial<Lead>): Promise<Lead | null>;

  /** Update lead status */
  updateStatus(id: string, status: LeadStatus): Promise<Lead | null>;

  /** Delete lead */
  delete(id: string): Promise<boolean>;

  /** Get leads for follow-up */
  getLeadsForFollowUp(): Promise<Lead[]>;
}

/**
 * Pricing Package Repository Interface
 */
export interface IPricingRepository {
  /** Get all packages */
  getAll(): PricingPackage[];

  /** Get package by ID */
  getById(id: string): PricingPackage | null;

  /** Get packages by industry */
  getByIndustry(industry: IndustryType): PricingPackage[];

  /** Get packages by tier */
  getByTier(tier: PackageTier): PricingPackage[];

  /** Get popular packages */
  getPopular(): PricingPackage[];

  /** Get active packages */
  getActive(): PricingPackage[];
}

/**
 * Testimonial Repository Interface
 */
export interface ITestimonialRepository {
  /** Get all testimonials */
  getAll(): Testimonial[];

  /** Get testimonial by ID */
  getById(id: string): Testimonial | null;

  /** Get featured testimonials */
  getFeatured(): Testimonial[];

  /** Get testimonials by industry */
  getByIndustry(industry: IndustryType): Testimonial[];

  /** Get random testimonial */
  getRandom(): Testimonial | null;
}