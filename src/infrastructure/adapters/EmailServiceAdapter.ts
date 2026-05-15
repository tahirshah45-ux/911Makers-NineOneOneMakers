/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Adapter: EmailServiceAdapter
 * =============================================================================
 * Handles all email communications.
 * Currently placeholder - integrates with SendGrid, Mailgun, etc. in production.
 */

export interface EmailOptions {
  to: string;
  subject: string;
  body: string;
  html?: string;
  from?: string;
  replyTo?: string;
}

export interface EmailTemplate {
  name: string;
  variables: Record<string, string>;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Email Service Adapter Interface
 * Prepared for integration with email providers
 */
export interface IEmailServiceAdapter {
  send(options: EmailOptions): Promise<EmailResult>;
  sendTemplate(template: EmailTemplate, options: Omit<EmailOptions, 'subject' | 'body'>): Promise<EmailResult>;
  sendBulk(recipients: string[], options: Omit<EmailOptions, 'to'>): Promise<EmailResult[]>;
}

/**
 * Email Service Adapter Implementation
 * Currently uses console logging - replace with actual provider in production
 */
export class EmailServiceAdapter implements IEmailServiceAdapter {
  private apiKey: string;
  private fromAddress: string;
  private fromName: string;

  constructor(config: { apiKey: string; fromAddress: string; fromName: string }) {
    this.apiKey = config.apiKey;
    this.fromAddress = config.fromAddress;
    this.fromName = config.fromName;
  }

  /**
   * Send single email
   */
  async send(options: EmailOptions): Promise<EmailResult> {
    // In production, integrate with SendGrid, AWS SES, Mailgun, etc.
    // For now, simulate success
    console.log('📧 Sending email:', {
      from: `${this.fromName} <${this.fromAddress}>`,
      to: options.to,
      subject: options.subject,
    });

    // Simulate API call
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', { ... });

    return {
      success: true,
      messageId: `msg_${Date.now()}`,
    };
  }

  /**
   * Send email with template
   */
  async sendTemplate(template: EmailTemplate, options: Omit<EmailOptions, 'subject' | 'body'>): Promise<EmailResult> {
    const templateBodies: Record<string, { subject: string; body: string }> = {
      'lead-notification': {
        subject: 'New Lead Received - 911MAKERS',
        body: `Hello,\n\nA new lead has been submitted.\n\nName: ${template.variables.name}\nEmail: ${template.variables.email}\nIndustry: ${template.variables.industry}\n\nView in dashboard for details.`,
      },
      'welcome': {
        subject: 'Welcome to 911MAKERS',
        body: `Hi ${template.variables.name},\n\nThank you for your interest in 911MAKERS. We'll be in touch shortly!\n\nBest regards,\nThe 911MAKERS Team`,
      },
      'follow-up': {
        subject: 'Following up on your inquiry',
        body: `Hi ${template.variables.name},\n\nJust wanted to follow up on your recent inquiry. We're here to help!\n\nBest regards,\nThe 911MAKERS Team`,
      },
    };

    const templateData = templateBodies[template.name];
    if (!templateData) {
      return { success: false, error: 'Template not found' };
    }

    return this.send({
      ...options,
      subject: templateData.subject,
      body: templateData.body,
    });
  }

  /**
   * Send bulk emails
   */
  async sendBulk(recipients: string[], options: Omit<EmailOptions, 'to'>): Promise<EmailResult[]> {
    const results: EmailResult[] = [];

    for (const recipient of recipients) {
      const result = await this.send({ ...options, to: recipient });
      results.push(result);
    }

    return results;
  }
}

// Export singleton with default config
export const emailServiceAdapter = new EmailServiceAdapter({
  apiKey: process.env.EMAIL_API_KEY || '',
  fromAddress: 'hello@911makers.com',
  fromName: '911MAKERS',
});