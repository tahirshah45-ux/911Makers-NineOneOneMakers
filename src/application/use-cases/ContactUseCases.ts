import type { Lead, LeadSource } from "@/core";
import { leadRepository } from "@/infrastructure";

/**
 * Contact form submission data
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  industry?: string;
  budget?: string;
  message: string;
  service?: string;
}

/**
 * Lead capture form data (for growth audit)
 */
export interface LeadCaptureData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;
  industry: string;
  challenge: string;
}

export class SubmitLeadUseCase {
  async execute(data: LeadCaptureData): Promise<{ success: boolean; message: string }> {
    try {
      const lead = await leadRepository.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        website: data.website,
        source: 'growth_audit' as LeadSource,
        industryInterest: data.industry,
        message: data.challenge,
        status: 'new',
        quality: 'warm',
      });

      return {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
      };
    } catch (error) {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  }
}

export class SubmitContactFormUseCase {
  async execute(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      const lead = await leadRepository.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        source: 'contact_form' as LeadSource,
        industryInterest: data.industry,
        budgetRange: data.budget,
        message: data.message,
        serviceInterest: data.service,
        status: 'new',
        quality: 'warm',
      });

      return {
        success: true,
        message: "Message sent! We'll get back to you soon.",
      };
    } catch (error) {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  }
}

export const submitLeadUseCase = new SubmitLeadUseCase();
export const submitContactFormUseCase = new SubmitContactFormUseCase();