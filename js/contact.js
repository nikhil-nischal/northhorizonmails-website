/* ════════════════════════════════════════════
   CONTACT.JS — Shared contact source of truth
════════════════════════════════════════════ */

const CONTACT_EMAIL = 'info@northhorizonmails.com';
const CONTACT_WHATSAPP_NUMBER = '919031501050';

const CONTACT = {
  email: {
    label: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    copyText: CONTACT_EMAIL,
  },
  whatsapp: {
    label: 'WhatsApp',
    href: `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`,
  },
};
