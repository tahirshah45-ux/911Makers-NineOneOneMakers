/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Adapters Index
 * =============================================================================
 * Re-exports all external service adapters.
 */

export {
  EmailServiceAdapter,
  emailServiceAdapter,
  type EmailOptions,
  type EmailTemplate,
  type EmailResult,
  type IEmailServiceAdapter
} from './EmailServiceAdapter';

export {
  WhatsAppServiceAdapter,
  whatsAppServiceAdapter,
  type WhatsAppMessage,
  type WhatsAppResult,
  type IWhatsAppServiceAdapter
} from './WhatsAppServiceAdapter';

export {
  StripePaymentAdapter,
  stripePaymentAdapter,
  type PaymentIntent,
  type PaymentResult,
  type Customer,
  type IPaymentAdapter
} from './StripePaymentAdapter';