/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Repository: ServiceRepository
 * =============================================================================
 * Implements IServiceRepository from Core layer.
 */

import type { IServiceRepository } from '@/core/interfaces';
import type { Service, ServiceCategory } from '@/core/entities/Service';

// Mock data - in production, replace with Payload CMS queries
import { SERVICES, getActiveServices, getServicesByCategory, getServiceById } from '@/core/entities/Service';

/**
 * Service Repository Implementation
 */
export class ServiceRepository implements IServiceRepository {

  /**
   * Get all services
   */
  getAll(): Service[] {
    return SERVICES;
  }

  /**
   * Get service by ID
   */
  getById(id: string): Service | null {
    return getServiceById(id) || null;
  }

  /**
   * Get services by category
   */
  getByCategory(category: ServiceCategory): Service[] {
    return getServicesByCategory(category);
  }

  /**
   * Get active services only
   */
  getActive(): Service[] {
    return getActiveServices();
  }

  /**
   * Get services grouped by category
   */
  getGroupedByCategory(): Record<ServiceCategory, Service[]> {
    const categories: ServiceCategory[] = ['branding', 'website', 'automation', 'growth'];
    return categories.reduce((acc, cat) => {
      acc[cat] = getServicesByCategory(cat);
      return acc;
    }, {} as Record<ServiceCategory, Service[]>);
  }
}

// Export singleton instance
export const serviceRepository = new ServiceRepository();