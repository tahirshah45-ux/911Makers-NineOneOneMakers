/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Main Index
 * =============================================================================
 * The Core layer contains:
 * - Entities: Business, IndustrySolution, Service, Lead, PricingPackage, Testimonial
 * - Interfaces: Repository contracts for data access
 * - Value Objects: (can be added as needed)
 *
 * This layer has NO dependencies on external frameworks or databases.
 * It is pure TypeScript representing business concepts.
 */

// Entities
export * from './entities';

// Interfaces (Repository contracts)
export * from './interfaces';

/**
 * Core Layer Dependencies:
 * - NONE (pure domain logic)
 *
 * Layer Dependencies:
 * Layer 1 (Core) -> Layer 2 (Infrastructure): Core defines interfaces, Infrastructure implements them
 * Layer 2 (Infrastructure) -> Layer 3 (Application): Infrastructure provides data to Application
 * Layer 3 (Application) -> Layer 4 (Presentation): Application provides data to Presentation
 */