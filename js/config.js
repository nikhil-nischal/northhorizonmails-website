/* ════════════════════════════════════════════
   CONFIG.JS — Feature flags and settings
   Edit this file to toggle sections and set
   Stripe payment links.
════════════════════════════════════════════ */

const CONFIG = {

  // ── Section visibility ──────────────────────
  // Set to false to hide a section entirely.
  showTestimonials: true,

  // ── Stripe payment links ────────────────────
  // Replace '#' with your actual Stripe payment links.
  stripeLinks: {
    normal:  '#',   // e.g. 'https://buy.stripe.com/...'
    mixed:   '#',
    premium: '#',
    custom:  '#',   // contact link for custom plan
  },

  // ── Support / contact ───────────────────────
  supportEmail: typeof CONTACT !== 'undefined' ? CONTACT.email.label : 'info@northhorizonmails.com',

};
