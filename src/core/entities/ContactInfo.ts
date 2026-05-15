/**
 * =============================================================================
 * LAYER 1: CORE (DOMAIN)
 * Entity: ContactInfo
 * =============================================================================
 * Contains contact information for the business.
 * This is static information used across the website.
 */

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  workingHours: string;
}

/**
 * Company contact information
 */
export const contactInfo: ContactInfo = {
  email: 'hello@911makers.com',
  phone: '+1 (555) 911-MAKER',
  whatsapp: '+92 300 1234567',
  address: 'Lahore, Pakistan (Serving USA Market)',
  workingHours: 'Mon-Fri: 9AM - 7PM EST',
};

/**
 * Budget range options for lead forms
 */
export const budgetRanges = [
  { label: 'Under $1,000', value: 'under-1000' },
  { label: '$1,000 - $2,500', value: '1000-2500' },
  { label: '$2,500 - $5,000', value: '2500-5000' },
  { label: '$5,000 - $10,000', value: '5000-10000' },
  { label: '$10,000+', value: '10000+' },
] as const;

/**
 * Industry options for lead forms
 */
export const industryOptions = [
  { label: 'Tax Office', value: 'tax_office' },
  { label: 'Restaurant', value: 'restaurant' },
  { label: 'Clinic & Salon', value: 'clinic_salon' },
  { label: 'Clothing Brand', value: 'clothing_brand' },
  { label: 'Delivery Business', value: 'delivery' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Other', value: 'other' },
] as const;

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Generate mailto link
 */
export function getMailtoLink(subject?: string): string {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${contactInfo.email}${params}`;
}

/**
 * Generate WhatsApp link
 */
export function getWhatsAppLink(message?: string): string {
  const phone = contactInfo.whatsapp.replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${phone}${text}`;
}