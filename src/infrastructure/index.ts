/**
 * =============================================================================
 * LAYER 2: INFRASTRUCTURE
 * Main Index
 * =============================================================================
 * The Infrastructure layer contains:
 * - Payload CMS Configuration (collections for content management)
 * - Repository Implementations (implement Core layer interfaces)
 * - External Service Adapters (Email, WhatsApp, Payment providers)
 *
 * Dependencies:
 * - Depends on: Layer 1 (Core) - uses interfaces and entities
 * - Used by: Layer 3 (Application) - provides data access
 */

// Repositories
export * from './repositories';

// Adapters
export * from './adapters';

// Payload CMS - uncomment when dependencies are installed
// export { default as payloadConfig } from './payload/config';
// export * from './payload/config/collections';

/**
 * Infrastructure Layer Dependencies:
 * Layer 1 (Core) -> Layer 2 (Infrastructure): Core defines interfaces, Infrastructure implements
 * Layer 2 (Infrastructure) -> Layer 3 (Application): Infrastructure provides data to Application
 *
 * External Dependencies (Prepared for):
 * - MongoDB (via Payload CMS)
 * - Email Provider (SendGrid/Mailgun - placeholder)
 * - WhatsApp Provider (Twilio - placeholder)
 * - Payment Provider (Stripe - placeholder)
 */