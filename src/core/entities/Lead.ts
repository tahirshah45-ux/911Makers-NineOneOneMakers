/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: Lead
 * =============================================================================
 * Represents a potential client (lead) who has shown interest in services.
 * Leads are captured through contact forms, growth audits, etc.
 */

export type LeadSource =
  | 'contact_form'     // General contact form
  | 'growth_audit'    // Free growth audit form
  | 'pricing_page'    // Pricing page inquiry
  | 'industry_page'   // Industry-specific page
  | 'organic';         // Direct/organic traffic

export type LeadStatus =
  | 'new'              // Just captured
  | 'contacted'        // Initial contact made
  | 'qualified'       // Qualified as potential client
  | 'proposal'        // Proposal sent
  | 'won'             // Converted to client
  | 'lost';           // Not interested

export type LeadQuality =
  | 'cold'            // Low intent
  | 'warm'            // Some interest
  | 'hot';            // High intent, ready to buy

export interface Lead {
  /** Unique identifier */
  id: string;

  /** Personal information */
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  /** Company information */
  companyName?: string;
  website?: string;

  /** Lead source */
  source: LeadSource;

  /** Industry interest */
  industryInterest?: string;

  /** Service interest */
  serviceInterest?: string;

  /** Budget range */
  budgetRange?: string;

  /** Message/inquiry content */
  message?: string;

  /** Current status */
  status: LeadStatus;

  /** Lead quality rating */
  quality: LeadQuality;

  /** Internal notes */
  notes?: string;

  /** Assigned team member */
  assignedTo?: string;

  /** Follow-up date */
  followUpDate?: Date;

  /** Timestamps */
  createdAt: Date;
  updatedAt: Date;
  convertedAt?: Date;
}

/**
 * Create a new lead from raw form data
 */
export function createLead(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  source: LeadSource;
  industryInterest?: string;
  serviceInterest?: string;
  budgetRange?: string;
  message?: string;
}): Lead {
  const now = new Date();

  return {
    ...data,
    id: crypto.randomUUID(),
    status: 'new',
    quality: 'warm', // Default to warm for new leads
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Update lead status
 */
export function updateLeadStatus(lead: Lead, status: LeadStatus): Lead {
  const updated = { ...lead, status, updatedAt: new Date() };

  if (status === 'won') {
    updated.convertedAt = new Date();
  }

  return updated;
}

/**
 * Determine lead quality based on budget and message
 */
export function assessLeadQuality(budgetRange?: string, message?: string): LeadQuality {
  if (!budgetRange && !message) return 'cold';

  // High budget indicates hot lead
  const highBudgetRanges = ['10000+', '5000-10000'];
  if (budgetRange && highBudgetRanges.includes(budgetRange)) {
    return 'hot';
  }

  // Has clear message indicates warm/hot
  if (message && message.length > 50) {
    return 'warm';
  }

  return 'cold';
}

/**
 * Lead validation rules
 */
export const LeadValidation = {
  requiredFields: ['firstName', 'lastName', 'email', 'phone', 'source'] as const,
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneMinLength: 10,
} as const;

/**
 * Get status color for UI
 */
export function getStatusColor(status: LeadStatus): string {
  const colors: Record<LeadStatus, string> = {
    new: '#3B82F6',       // Blue
    contacted: '#F59E0B', // Amber
    qualified: '#10B981', // Green
    proposal: '#8B5CF6', // Purple
    won: '#22C55E',      // Green
    lost: '#EF4444',     // Red
  };
  return colors[status];
}

/**
 * Lead source labels
 */
export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  contact_form: 'Contact Form',
  growth_audit: 'Growth Audit',
  pricing_page: 'Pricing Page',
  industry_page: 'Industry Page',
  organic: 'Direct/Organic',
};