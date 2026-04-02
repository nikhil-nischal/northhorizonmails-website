/* ════════════════════════════════════════════
   PAYMENT-LINKS.JS — Stripe buy button config
   Add one block per license. If a plan has both
   values below, the pricing card renders the
   Stripe buy button directly on the homepage.
════════════════════════════════════════════ */

const PAYMENT_LINKS = {
  normal: {
    buyButtonId: 'buy_btn_1THjXH3tg3mEQejNCULsQdnM',
    publishableKey: 'pk_live_51S0OHL3tg3mEQejNLa44wWx0hdihd7EM6ELxXv2ZxdzqfJI58jzxPaI5xKBFRccLNMlfwPQYsSqUKECa6K2w4I2800vueLokCP',
  },

  mixed: {
    buyButtonId: 'buy_btn_1THjXH3tg3mEQejNCULsQdnM',
    publishableKey: 'pk_live_51S0OHL3tg3mEQejNLa44wWx0hdihd7EM6ELxXv2ZxdzqfJI58jzxPaI5xKBFRccLNMlfwPQYsSqUKECa6K2w4I2800vueLokCP',
  },

  premium: {
    buyButtonId: 'buy_btn_1THjXH3tg3mEQejNCULsQdnM',
    publishableKey: 'pk_live_51S0OHL3tg3mEQejNLa44wWx0hdihd7EM6ELxXv2ZxdzqfJI58jzxPaI5xKBFRccLNMlfwPQYsSqUKECa6K2w4I2800vueLokCP',
  },

  custom: {
    buyButtonId: '',
    publishableKey: '',
  },
};

globalThis.PAYMENT_LINKS = PAYMENT_LINKS;
