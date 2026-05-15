/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Adapter: WhatsAppServiceAdapter
 * =============================================================================
 * Handles WhatsApp communications.
 * Currently placeholder - integrates with Twilio WhatsApp, MessageBird, etc. in production.
 */

export interface WhatsAppMessage {
  to: string;
  body: string;
  mediaUrl?: string;
}

export interface WhatsAppResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * WhatsApp Service Adapter Interface
 * Prepared for integration with WhatsApp business APIs
 */
export interface IWhatsAppServiceAdapter {
  send(message: WhatsAppMessage): Promise<WhatsAppResult>;
  sendTemplate(templateName: string, phone: string, variables: Record<string, string>): Promise<WhatsAppResult>;
  sendBatch(messages: WhatsAppMessage[]): Promise<WhatsAppResult[]>;
}

/**
 * WhatsApp Service Adapter Implementation
 * Currently uses console logging - replace with actual provider in production
 */
export class WhatsAppServiceAdapter implements IWhatsAppServiceAdapter {
  private accountSid: string;
  private authToken: string;
  private fromNumber: string;

  constructor(config: { accountSid: string; authToken: string; fromNumber: string }) {
    this.accountSid = config.accountSid;
    this.authToken = config.authToken;
    this.fromNumber = config.fromNumber;
  }

  /**
   * Format phone number for WhatsApp
   */
  private formatPhoneNumber(phone: string): string {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');
    // Add country code if not present (assume Pakistan +92)
    if (!digits.startsWith('92') && digits.length === 10) {
      return `92${digits}`;
    }
    return digits;
  }

  /**
   * Send single WhatsApp message
   */
  async send(message: WhatsAppMessage): Promise<WhatsAppResult> {
    const formattedPhone = this.formatPhoneNumber(message.to);

    console.log('📱 Sending WhatsApp message:', {
      from: this.fromNumber,
      to: formattedPhone,
      body: message.body,
      media: message.mediaUrl || 'none',
    });

    // In production, integrate with Twilio WhatsApp API:
    // const client = require('twilio')(this.accountSid, this.authToken);
    // await client.messages.create({
    //   body: message.body,
    //   from: `whatsapp:${this.fromNumber}`,
    //   to: `whatsapp:${formattedPhone}`
    // });

    return {
      success: true,
      messageId: `wa_${Date.now()}`,
    };
  }

  /**
   * Send template message
   */
  async sendTemplate(templateName: string, phone: string, variables: Record<string, string>): Promise<WhatsAppResult> {
    const templates: Record<string, { body: string }> = {
      'lead-notification': {
        body: `Hello! A new lead has submitted a request on 911MAKERS.\n\nName: ${variables.name}\nPhone: ${variables.phone}\n\nReply to connect!`,
      },
      'welcome': {
        body: `Hi ${variables.name}! Welcome to 911MAKERS! 🎉\n\nWe're excited to help you grow your business online. What's your main goal?`,
      },
      'follow-up': {
        body: `Hi ${variables.name}! Just checking in 👋\n\nDid you have any questions about our services? We're here to help!`,
      },
    };

    const template = templates[templateName];
    if (!template) {
      return { success: false, error: 'Template not found' };
    }

    return this.send({
      to: phone,
      body: template.body,
    });
  }

  /**
   * Send batch messages
   */
  async sendBatch(messages: WhatsAppMessage[]): Promise<WhatsAppResult[]> {
    const results: WhatsAppResult[] = [];

    for (const message of messages) {
      const result = await this.send(message);
      results.push(result);
    }

    return results;
  }
}

// Export singleton with default config
export const whatsAppServiceAdapter = new WhatsAppServiceAdapter({
  accountSid: process.env.TWILIO_ACCOUNT_SID || '',
  authToken: process.env.TWILIO_AUTH_TOKEN || '',
  fromNumber: process.env.WHATSAPP_FROM_NUMBER || '+15551234567',
});