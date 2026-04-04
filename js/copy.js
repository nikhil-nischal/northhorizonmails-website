/* ════════════════════════════════════════════════════════
   COPY.JS — All site copy, section by section
   This is the single source of truth for every word
   on the site. Edit here, nowhere else.

   HOW TO USE:
   Each section is clearly labelled. Find the section,
   edit the string. Arrays use one line per item.
   Do not change variable names — only the text inside
   quotes.
════════════════════════════════════════════════════════ */


// ─────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────

const COPY_NAVBAR = {
  logoLine1:  "North Horizon",
  logoLine2:  "Mails",
  navLinks: [
    "How It Works",
    "Pricing",
    "Guarantee",
    "FAQ",
  ],
  ctaButton:  "Get Started",
};


// ─────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────

const COPY_HERO = {
  badge:
    "The only Outlook provider that guarantees deliverability",

  headline:
    "Outlook inboxes that land in primary or we pay you back.",

  subheadline:
    "US-based Microsoft tenants. DNS fully configured. Connected directly into your Instantly account. Launch-ready within 48 hours. Add our deliverability guarantee and if it doesn't perform, we refund 50%.",

  primaryCta:   "Get Started",
  secondaryCta: "See How It Works ↓",
};


// ─────────────────────────────────────────────────────
// TRUST BAR
// ─────────────────────────────────────────────────────

const COPY_TRUST = {
  label:
    "Powering outbound for cold email operators sending at scale",

  // Replace null with image paths or logo URLs when ready
  // e.g. "images/logo-company-1.svg"
  logos: [null, null, null, null, null],
};


// ─────────────────────────────────────────────────────
// THE PROBLEM
// ─────────────────────────────────────────────────────

const COPY_PROBLEM = {
  sectionTag: "The problem",

  headline:
    "You already know how this goes.",

  paragraph1:
    "You buy inboxes from a reseller. You get SMTP credentials in a spreadsheet. You spend two hours configuring DNS yourself. Half the records are wrong. You fix them. You start warmup. A week later you launch and half your emails land in spam.",

  paragraph2:
    "You reach out to support. They take 48 hours to reply. They tell you deliverability is your responsibility. You eat the cost. You find another provider. Same thing happens again.",

  paragraph3:
    "The problem isn't your copy. It's not your sending tool. It's that your inbox provider has zero stake in whether your campaigns actually work.",

  closingLine:
    "We built NorthHorizonMails to fix that.",
};


// ─────────────────────────────────────────────────────
// WHAT'S INCLUDED — 9 PILLARS
// ─────────────────────────────────────────────────────

const COPY_INCLUDED = {
  sectionTag: "What's included",

  headline:
    "Everything configured. Nothing left for you to figure out.",

  pillar1_title: "Individual US Microsoft Tenants",
  pillar1_body:
    "Not shared tenants. Not recycled IPs. Every domain gets its own dedicated US-based Microsoft 365 tenant running on Azure infrastructure. Bulletproof IP reputation from day one.",

  pillar2_title: "Complete DNS & Authentication",
  pillar2_body:
    "SPF. DKIM. DMARC. All configured before your inboxes reach you. You don't touch a single DNS record. We handle it because one wrong record kills deliverability and we don't leave that to chance.",

  pillar3_title: "Aged Domain Support",
  pillar3_body:
    "Need stronger domain quality from day one? We help you source 10+ year aged domains with a 10+ infrastructure score, giving you a cleaner foundation for deliverability.",

  pillar4_title: "Within 48-Hour Delivery",
  pillar4_body:
    "Tenants provisioned, DNS configured, inboxes connected within 48 hours. You order, we build, you warm up.",

  pillar5_title: "Free Domain Replacement",
  pillar5_body:
    "Domain gets burned? We replace it. No extra charge. No questions. Operators scale aggressively and we built our system to handle that reality.",

  pillar6_title: "15+ Sending Tool Compatibility",
  pillar6_body:
    "Instantly, Smartlead, Salesforge, or any SMTP-compatible platform. White-glove setup is available for Instantly and Plusvibe. Contact us to add other tools.",

  pillar7_title: "Custom Profile Pictures",
  pillar7_body:
    "Set real profile pictures on every mailbox. Emails with profile photos look human and build trust. Higher open rates and reply rates.",

  pillar8_title: "Mailbox Access",
  pillar8_body:
    "Access your mailboxes to reply directly from the inbox. Useful when earlier conversations aren't accessible in your email outreach software.",

  pillar9_title: "Deliverability Guarantee",
  pillar9_badge: "$5/domain add-on",
  pillar9_body:
    "Follow our system. Verified domains, 2-week warmup, week-3-only guarantee window, recommended sending limits, clean copy. Available on orders of 6 or more domains. If deliverability still doesn't perform in week 3, request your refund that week and we refund 50% of the subscription fees we charged.",
};


// ─────────────────────────────────────────────────────
// HOW IT WORKS — 4 STEPS
// ─────────────────────────────────────────────────────

const COPY_HOW_IT_WORKS = {
  sectionTag: "How it works",

  headline:
    "Order today. Sending by week 2.",

  // Timeline bar labels (Day 1 → Week 2)
  timeline_day1_label:   "Order",
  timeline_day23_label:  "Setup ready",
  timeline_week1_label:  "Warmup",
  timeline_week2_label:  "Sending live",  // highlighted in blue

  step1_title: "Pick your plan",
  step1_body:
    "Choose Normal, Premium, or Mixed. Select how many domains you need and how many mailboxes/domain (25, 49, 74, or 99).",

  step2_title: "We build your infrastructure (within 48 hrs)",
  step2_body:
    "We provision individual US Microsoft tenants, configure all DNS authentication, and connect your inboxes directly into your Instantly or Plusvibe account. You do nothing.",

  step3_title: "Warmup (1 week)",
  step3_body:
    "Your inboxes warm for 7 days using recommended settings. Domains build sender reputation the right way. No shortcuts, no tricks.",

  step4_title: "Launch (Week 2)",
  step4_body:
    "You're live. Fully configured Outlook inboxes. Bulletproof Microsoft Azure infrastructure. Sending from primary, not promo, not spam.",

  note:
    "Most operators order on Monday and are warming up by Wednesday. Without the guarantee, campaigns are live in week 2. With the guarantee, warmup extends to 2 full weeks, launch happens in week 3, and the refund window applies only during that week.",
};


// ─────────────────────────────────────────────────────
// PRICING — 4 PLANS
// ─────────────────────────────────────────────────────

const COPY_PRICING = {
  sectionTag: "Pricing",

  headline:
    "Simple pricing. No hidden fees. Choose your inbox count.",

  subheadline:
    "Complete setup included. DNS, authentication, Instantly or Plusvibe connection. Every plan. Every domain. Choose 25, 49, 74, or 99 mailboxes/domain.",

  // ── Plan 1: Normal ──────────────────────────────
  normal_label:   "Normal License",
  normal_price:   "$45",
  normal_period:  "per domain / month",
  normal_features: [
    "25, 49, 74, or 99 Mailboxes/domain",
    "4-5 cold emails safely per inbox/day",
    "500+ emails/day sending volume per domain",
    "Complete Technical Setup (SPF, DKIM, DMARC)",
    "Free Domain Replacement",
    "Individual US Microsoft Tenants",
    "15+ Sending Tool Integration",
    "Intercom Chat Support",
  ],
  normal_bestFor:
    "Best for: Volume campaigns where cost per lead matters most",
  normal_cta: "Order Normal",

  // ── Plan 2: Mixed ───────────────────────────────
  mixed_label:   "Mixed License",
  mixed_price:   "$55",
  mixed_period:  "per domain / month",
  mixed_note:    "50 Normal + 50 Premium Outlook licenses",
  mixed_features: [
    "25, 49, 74, or 99 Mailboxes/domain (split between Normal and Premium)",
    "500+ emails/day sending volume per domain",
    "Complete Technical Setup (SPF, DKIM, DMARC)",
    "Free Domain Replacement",
    "Individual US Microsoft Tenants",
    "15+ Sending Tool Integration",
    "Intercom Chat Support",
  ],
  mixed_bestFor:
    "Best for: Operators who want both volume and quality in one domain",
  mixed_cta: "Order Mixed",

  // ── Plan 3: Premium (Most Popular) ─────────────
  premium_label:      "Premium License",
  premium_badge:      "Most Popular",
  premium_price:      "$65",
  premium_period:     "per domain / month",
  premium_features: [
    "25, 49, 74, or 99 Mailboxes/domain",
    "8-10 cold emails safely per inbox/day",
    "500+ emails/day sending volume per domain",
    "Complete Technical Setup (SPF, DKIM, DMARC)",
    "Free Domain Replacement",
    "Individual US Microsoft Tenants",
    "Premium infrastructure with higher-tier Microsoft licensing",
    "15+ Sending Tool Integration",
    "Intercom Chat Support",
  ],
  premium_bestFor:
    "Best for: High-value ICP campaigns where every reply matters. Premium runs on a separate, higher-quality Microsoft infrastructure that most cold emailers never use, which means cleaner IP pools, less spam association, and better inbox placement.",
  premium_cta: "Order Premium",

  // ── Plan 4: Custom ──────────────────────────────
  custom_label:   "Custom Plan",
  custom_price:   "Custom",
  custom_period:  "For operators managing 100+ domains",
  custom_features: [
    "25, 49, 74, or 99 Mailboxes/domain",
    "Custom volume configuration",
    "Complete Technical Setup",
    "Free Domain Replacement",
    "Individual US Microsoft Tenants",
    "15+ Sending Tool Integration",
    "Dedicated Account Manager",
    "Slack 1:1 Support",
  ],
  custom_bestFor:
    "Best for: Agencies running large-scale multi-client campaigns",
  custom_cta: "Contact Us",

  // ── Add-on cards ────────────────────────────────
  volumeBonus_title:
    "Volume Bonus: Buy 11, get 12",
  volumeBonus_body:
    "Running at scale? Every 11 domains you purchase comes with a free one. Simple volume reward for operators scaling up.",

  guarantee_title:
    "Deliverability Guarantee Add-On — $5/domain one-time",
  guarantee_body:
    "Add to any plan. Available on orders of 6 or more domains. Requires a full 2-week warmup, applies only during week 3, and refund requests must be submitted in week 3 after all criteria are met.",
};


// ─────────────────────────────────────────────────────
// NORMAL vs PREMIUM COMPARISON TABLE
// ─────────────────────────────────────────────────────

const COPY_COMPARISON = {
  sectionTag: "Choosing a license",

  headline:
    "Not sure which license? Here's the honest breakdown.",

  // Table rows: [feature label, normal value, premium value]
  tableRows: [
    ["Mailbox options",           "25, 49, 74, or 99",                     "25, 49, 74, or 99"],
    ["Cost per inbox (at 99)",    "~$0.45",                                "~$0.66"],
    ["Cold sends per inbox/day",  "3–5",                                   "8–10"],
    ["Warmup time",               "3–5 days",                              "3–5 days"],
    ["Deliverability",            "Good",                                  "Excellent"],
    ["Spam filter intelligence",  "High",                                  "Highest (strictest)"],
    ["Infrastructure",            "Microsoft Azure",                       "Microsoft Azure (higher-tier)"],
    ["IP Reputation",             "Bulletproof",                           "Bulletproof"],
    ["IP Pool Quality",           "Standard",                              "Cleaner, less saturated by cold emailers"],
    ["Best for",                  "Budget volume plays",                   "Trusted high-value sends"],
  ],

  reco_premium_label: "Go Premium if…",
  reco_premium_body:
    "Sending to mid-market or enterprise ICPs where reply quality matters? Go Premium. The infrastructure is a different, higher-quality Microsoft license that most cold emailers don't use, which means you're sending from cleaner IP pools with less spam history. Your emails land where they should.",

  reco_normal_label: "Go Normal if…",
  reco_normal_body:
    "Running broad volume campaigns where cost per lead is king? Go Normal. Same bulletproof Azure infrastructure, same DNS setup, same support.",

  reco_mixed_label: "Go Mixed if…",
  reco_mixed_body:
    "Want both in one domain? Go Mixed.",
};


// ─────────────────────────────────────────────────────
// THE GUARANTEE
// ─────────────────────────────────────────────────────

const COPY_GUARANTEE = {
  sectionTag: "The guarantee",

  headline:
    "We built infrastructure we're willing to bet on.",

  subheadline:
    "Add the Deliverability Guarantee to any plan for a one-time $5/domain. Available on orders of 6 or more domains.",

  intro:
    "Every inbox provider tells you their infrastructure is solid. We're the only one that puts money behind it.",

  conditionsIntro:
    "The conditions are straightforward:",

  conditions: [
    "Use our verified domains (purchased alongside your inboxes)",
    "Warm up for 2 full weeks using our recommended settings",
    "Launch your campaign in week 3",
    "Stay within suggested daily sending limits",
    "No spam trigger words in your copy",
  ],

  result:
    "Follow every step. If deliverability still doesn't perform during week 3, submit your request that same week and we refund 50% of the subscription fees we charged.",

  why_title: "Why we can offer this",
  why_body:
    "Individual US-based Microsoft tenants. Azure infrastructure. Bulletproof IP reputation. SPF, DKIM, DMARC configured by us. We control the setup end-to-end, so we stand behind it end-to-end.",

  timing_title: "Note on timing",
  timing_body:
    "The guarantee requires a 2-week warmup instead of the standard 1 week. You launch in week 3, the guarantee applies only during that week, and refund requests must be submitted in week 3 after all criteria are met.",

  disclaimer:
    "This guarantee is for operators who follow the system. If you send 50 emails per inbox on day one with a subject line that says \"ACT NOW!!!\" that's not an infrastructure problem. We guarantee the foundation. You bring the discipline.",
};


// ─────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────

const COPY_TESTIMONIALS = {
  sectionTag: "From operators who switched",

  headline:
    "They tried other providers first. Then they found us.",

  // Each testimonial: replace placeholder text with real quotes.
  // photo: replace null with image path, e.g. "images/avatar-1.jpg"
  testimonial1_quote:
    "Testimonial quote placeholder. Replace with a real quote from a verified customer who switched to NorthHorizonMails.",
  testimonial1_name:  "Name Placeholder",
  testimonial1_role:  "Title · Company Name",
  testimonial1_photo: null,

  testimonial2_quote:
    "Testimonial quote placeholder. Replace with a real quote from a verified customer who switched to NorthHorizonMails.",
  testimonial2_name:  "Name Placeholder",
  testimonial2_role:  "Title · Company Name",
  testimonial2_photo: null,

  testimonial3_quote:
    "Testimonial quote placeholder. Replace with a real quote from a verified customer who switched to NorthHorizonMails.",
  testimonial3_name:  "Name Placeholder",
  testimonial3_role:  "Title · Company Name",
  testimonial3_photo: null,
};


// ─────────────────────────────────────────────────────
// FAQ — 12 QUESTIONS
// ─────────────────────────────────────────────────────

const COPY_FAQ = {
  sectionTag: "FAQ",

  headline:
    "Answers before you ask.",

  q1:  "What do I actually receive after ordering?",
  a1:  "Fully configured Microsoft Outlook inboxes on individual US-based tenants. DNS records set up. Inboxes connected into your Instantly or Plusvibe account. Ready to warm up within 48 hours.",

  q2:  "Can I choose how many inboxes I want per domain?",
  a2:  "Yes. Every plan lets you choose 25, 49, 74, or 99 mailboxes/domain. Pick based on your campaign volume needs.",

  q3:  "Can I use my own domains?",
  a3:  "Yes. Bring your own or purchase our verified domains. The deliverability guarantee requires our verified domains.",

  q4:  "Can I set profile pictures on the mailboxes?",
  a4:  "Yes. Every mailbox comes with the ability to set a custom profile picture. This makes your outreach look more human and increases open and reply rates.",

  q5:  "Can I log into the mailboxes directly?",
  a5:  "Yes. You get mailbox access to reply to emails directly from the inbox. This is especially helpful when earlier conversations aren't accessible in your outreach software.",

  q6:  "How many cold emails can I send per inbox per day?",
  a6:  "Normal: 4-5 per inbox/day. Premium: 8-10 per inbox/day. Stay within these to protect reputation and maximize inbox placement.",

  q7:  "What's the difference between Normal and Premium?",
  a7:  "Both run on US-based Microsoft Azure infrastructure with bulletproof IP reputation. Premium uses a higher-tier Microsoft license on separate infrastructure that most cold emailers don't use. That means cleaner IP pools, less spam association, higher deliverability, and more sends per inbox per day. If you're targeting high-value ICPs, Premium is worth it.",

  q8:  "I use Smartlead, not Instantly. Will this work?",
  a8:  "Yes. Our inboxes work with any SMTP-compatible tool. Instantly, Smartlead, Salesforge, and 15+ others. White-glove setup (we connect it for you) is available for Instantly and Plusvibe. For other tools, we provide SMTP credentials. Contact us if you need white-glove setup for a different platform.",

  q9:  "What happens if a domain gets burned?",
  a9:  "Free replacement. No charge. We swap it out and reconfigure everything.",

  q10: "How does the guarantee work exactly?",
  a10: "$5/domain one-time add-on. Available on orders of 6 or more domains. Use our verified domains, warm for 2 weeks, launch in week 3, stay in suggested limits, and keep copy clean. The guarantee applies only during week 3, and refund requests must be submitted that same week after all criteria are met.",

  q11: "How fast can I start sending?",
  a11: "Without guarantee: Order today, inboxes configured within 48 hours, warm for 1 week, launch in week 2. With guarantee: Same setup, but warmup extends to 2 weeks, launch happens in week 3, and the guarantee window applies only in that week.",

  q12: "Is there a minimum commitment?",
  a12: "No contracts. Month-to-month. Cancel anytime.",

  q13: "How does \"Buy 11, get 12\" work?",
  a13: "For every 11 domains you purchase, you get one free. Simple volume reward for operators scaling up.",

  q14: "What makes you different from other inbox providers?",
  a14: "Three things. One, we set up everything inside your Instantly or Plusvibe account. You don't touch DNS or import credentials manually. Two, free domain replacement if anything burns. Three, we're the only provider that offers a deliverability guarantee backed by a 50% refund. Nobody else puts their money on the line.",
};


// ─────────────────────────────────────────────────────
// FINAL CTA
// ─────────────────────────────────────────────────────

const COPY_FINAL_CTA = {
  headline:
    "Stop gambling on infrastructure that doesn't guarantee anything.",

  subheadline:
    "Premium Outlook inboxes. White-glove setup. The only provider willing to refund you if deliverability doesn't perform.",

  ctaButton: "Get Started",

  trustNotes: [
    "Within 48 hours",
    "No contracts",
    "Cancel anytime",
  ],
};


// ─────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────

const COPY_FOOTER = {
  logoLine1: "North Horizon",
  logoLine2: "Mails",

  navLinks: [
    "How It Works",
    "Pricing",
    "Guarantee",
    "FAQ",
  ],

  contactLabel: CONTACT.email.label,

  legalLinks: [
    "Terms of Service",
    "Privacy Policy",
    "Refund Policy",
  ],

  copyright: "© 2026 NorthHorizonMails. All rights reserved.",
};
