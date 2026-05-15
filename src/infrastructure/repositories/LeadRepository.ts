/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Repository: LeadRepository
 * =============================================================================
 * Implements ILeadRepository from Core layer.
 * Handles lead data from form submissions.
 */

import type { ILeadRepository } from '@/core/interfaces';
import type { Lead, LeadSource, LeadStatus } from '@/core/entities/Lead';
import { createLead, updateLeadStatus, assessLeadQuality } from '@/core/entities/Lead';

/**
 * In-memory storage for leads (replace with database in production)
 */
const leadsStorage: Map<string, Lead> = new Map();

/**
 * Lead Repository Implementation
 */
export class LeadRepository implements ILeadRepository {

  /**
   * Get all leads
   */
  async getAll(): Promise<Lead[]> {
    return Array.from(leadsStorage.values());
  }

  /**
   * Get lead by ID
   */
  async getById(id: string): Promise<Lead | null> {
    return leadsStorage.get(id) || null;
  }

  /**
   * Get leads by status
   */
  async getByStatus(status: LeadStatus): Promise<Lead[]> {
    return Array.from(leadsStorage.values()).filter(l => l.status === status);
  }

  /**
   * Get leads by source
   */
  async getBySource(source: LeadSource): Promise<Lead[]> {
    return Array.from(leadsStorage.values()).filter(l => l.source === source);
  }

  /**
   * Create new lead
   */
  async create(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lead> {
    const lead = createLead({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName,
      website: data.website,
      source: data.source,
      industryInterest: data.industryInterest,
      serviceInterest: data.serviceInterest,
      budgetRange: data.budgetRange,
      message: data.message,
    });

    // Assess quality based on budget and message
    const quality = assessLeadQuality(data.budgetRange, data.message);
    lead.quality = quality;

    leadsStorage.set(lead.id, lead);
    return lead;
  }

  /**
   * Update lead
   */
  async update(id: string, data: Partial<Lead>): Promise<Lead | null> {
    const existing = leadsStorage.get(id);
    if (!existing) return null;

    const updated = {
      ...existing,
      ...data,
      updatedAt: new Date()
    };

    leadsStorage.set(id, updated);
    return updated;
  }

  /**
   * Update lead status
   */
  async updateStatus(id: string, status: LeadStatus): Promise<Lead | null> {
    const existing = leadsStorage.get(id);
    if (!existing) return null;

    const updated = updateLeadStatus(existing, status);
    leadsStorage.set(id, updated);
    return updated;
  }

  /**
   * Delete lead
   */
  async delete(id: string): Promise<boolean> {
    return leadsStorage.delete(id);
  }

  /**
   * Get leads due for follow-up
   */
  async getLeadsForFollowUp(): Promise<Lead[]> {
    const now = new Date();
    return Array.from(leadsStorage.values()).filter(lead => {
      if (!lead.followUpDate) return false;
      return new Date(lead.followUpDate) <= now &&
             (lead.status === 'new' || lead.status === 'contacted');
    });
  }

  /**
   * Get lead count by status
   */
  async getCountByStatus(): Promise<Record<LeadStatus, number>> {
    const leads = Array.from(leadsStorage.values());
    return leads.reduce((acc, lead) => {
      acc[lead.status] = (acc[lead.status] || 0) + 1;
      return acc;
    }, {} as Record<LeadStatus, number>);
  }
}

// Export singleton instance
export const leadRepository = new LeadRepository();