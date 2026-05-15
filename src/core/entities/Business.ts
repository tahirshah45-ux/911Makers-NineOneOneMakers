/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: Business
 * =============================================================================
 * Represents a business client that seeks digital growth services.
 * This is the primary entity in our domain model.
 */

export type BusinessType =
  | 'tax_office'
  | 'restaurant'
  | 'clinic_salon'
  | 'clothing_brand'
  | 'delivery'
  | 'corporate'
  | 'other';

export type BusinessSize =
  | 'startup'        // Just starting out
  | 'small'          // 1-10 employees
  | 'medium'         // 11-50 employees
  | 'enterprise';    // 50+ employees

export interface Business {
  /** Unique identifier */
  id: string;

  /** Business name */
  name: string;

  /** Owner/contact person name */
  ownerName: string;

  /** Contact email */
  email: string;

  /** Contact phone */
  phone: string;

  /** Business type/industry */
  type: BusinessType;

  /** Company size */
  size: BusinessSize;

  /** Current website URL (if exists) */
  website?: string;

  /** Business description */
  description?: string;

  /** Current challenges */
  challenges: string[];

  /** Budget range */
  budgetRange?: string;

  /** Creation timestamp */
  createdAt: Date;

  /** Last update timestamp */
  updatedAt: Date;
}

/**
 * Factory function to create a new Business entity
 */
export function createBusiness(data: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>): Business {
  const now = new Date();
  return {
    ...data,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Business entity validation rules
 */
export const BusinessValidation = {
  requiredFields: ['name', 'ownerName', 'email', 'phone', 'type'] as const,
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneMinLength: 10,
} as const;