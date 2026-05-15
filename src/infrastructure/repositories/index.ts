/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Repositories Index
 * =============================================================================
 * Re-exports all repository implementations.
 */

import { industrySolutionRepository, IndustrySolutionRepository } from './IndustrySolutionRepository';
import { serviceRepository, ServiceRepository } from './ServiceRepository';
import { pricingRepository, PricingRepository } from './PricingRepository';
import { testimonialRepository, TestimonialRepository } from './TestimonialRepository';
import { leadRepository, LeadRepository } from './LeadRepository';

export { industrySolutionRepository, IndustrySolutionRepository };
export { serviceRepository, ServiceRepository };
export { pricingRepository, PricingRepository };
export { testimonialRepository, TestimonialRepository };
export { leadRepository, LeadRepository };

// Backward compatibility aliases (for legacy use cases)
export const industryRepository = industrySolutionRepository;
export const serviceRepositoryV2 = serviceRepository;
export const pricingRepositoryV2 = pricingRepository;
export const testimonialRepositoryV2 = testimonialRepository;
export const contactRepository = leadRepository;