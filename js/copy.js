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
    "US-based Microsoft tenants. DNS fully configured. Connected directly into your Instantly account. Launch-ready in 24-48 hours. Add our deliverability guarantee and if it doesn't perform, we refund 50%.",

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
// WHAT'S INCLUDED — 7 PILLARS
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

  pillar3_title: "White-Glove Setup",
  pillar3_body:
    "We don't send you credentials and say good luck. We connect every inbox directly into your Instantly or Plusvibe account. You open your sending tool and your inboxes are there, ready to warm up. No manual imports. No SMTP headaches. Contact us if you need setup for other platforms.",

  pillar4_title: "Free Domain Replacement",
  pillar4_body:
    "Domain gets burned? We replace it. No extra charge. No questions. Operators scale aggressively and we built our system to handle that reality.",

  pillar5_title: "15+ Sending Tool Compatibility",
  pillar5_body:
    "Instantly, Smartlead, Salesforge, or any SMTP-compatible platform. White-glove setup is available for Instantly and Plusvibe. Contact us to add other tools.",

  pillar6_title: "Deliverability Guarantee",
  pillar6_badge: "$10/domain add-on",
  pillar6_body:
    "Follow our system. Verified domains, 2-week warmup, recommended sending limits, clean copy. If deliverability still doesn't perform, we refund 50% of your domain costs. No other provider offers this. We do because we trust our infrastructure.",

  pillar7_title: "Flexible Inbox Counts",
  pillar7_body:
    "Not every campaign needs 99 inboxes. Choose 25, 49, 74, or 99 mailboxes/domain based on your volume needs. Scale up or down as your campaigns evolve.",
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

  step2_title: "We build your infrastructure (24-48 hrs)",
  step2_body:
    "We provision individual US Microsoft tenants, configure all DNS authentication, and connect your inboxes directly into your Instantly or Plusvibe account. You do nothing.",

  step3_title: "Warmup (1 week)",
  step3_body:
    "Your inboxes warm for 7 days using recommended settings. Domains build sender reputation the right way. No shortcuts, no tricks.",

  step4_title: "Launch (Week 2)",
  step4_body:
    "You're live. Fully configured Outlook inboxes. Bulletproof Microsoft Azure infrastructure. Sending from primary, not promo, not spam.",

  note:
    "Most operators order on Monday and are warming up by Wednesday. By week 2, campaigns are live and landing replies. If you add the Deliverability Guarantee, warmup extends to 2 weeks with launch in week 3 instead of week 2 to ensure maximum inbox placement.",
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
    "Deliverability Guarantee Add-On — $10/domain/month",
  guarantee_body:
    "Add to any plan. Requires 2-week warmup (launch in week 3 instead of week 2). If deliverability doesn't perform after following our system, we refund 50% of your domain costs.",
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
    "Add the Deliverability Guarantee to any plan for $10/domain/month.",

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
    "Follow every step. If deliverability still doesn't perform, we refund 50% of your domain costs.",

  why_title: "Why we can offer this",
  why_body:
    "Individual US-based Microsoft tenants. Azure infrastructure. Bulletproof IP reputation. SPF, DKIM, DMARC configured by us. We control the setup end-to-end, so we stand behind it end-to-end.",

  timing_title: "Note on timing",
  timing_body:
    "The guarantee requires a 2-week warmup instead of the standard 1 week. This extra week ensures your domains build maximum sender reputation before you launch. You go live in week 3 instead of week 2.",

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
  a1:  "Fully configured Microsoft Outlook inboxes on individual US-based tenants. DNS records set up. Inboxes connected into your Instantly or Plusvibe account. Ready to warm up within 24-48 hours.",

  q2:  "Can I choose how many inboxes I want per domain?",
  a2:  "Yes. Every plan lets you choose 25, 49, 74, or 99 mailboxes/domain. Pick based on your campaign volume needs.",

  q3:  "Can I use my own domains?",
  a3:  "Yes. Bring your own or purchase our verified domains. The deliverability guarantee requires our verified domains.",

  q4:  "How many cold emails can I send per inbox per day?",
  a4:  "Normal: 4-5 per inbox/day. Premium: 8-10 per inbox/day. Stay within these to protect reputation and maximize inbox placement.",

  q5:  "What's the difference between Normal and Premium?",
  a5:  "Both run on US-based Microsoft Azure infrastructure with bulletproof IP reputation. Premium uses a higher-tier Microsoft license on separate infrastructure that most cold emailers don't use. That means cleaner IP pools, less spam association, higher deliverability, and more sends per inbox per day. If you're targeting high-value ICPs, Premium is worth it.",

  q6:  "I use Smartlead, not Instantly. Will this work?",
  a6:  "Yes. Our inboxes work with any SMTP-compatible tool. Instantly, Smartlead, Salesforge, and 15+ others. White-glove setup (we connect it for you) is available for Instantly and Plusvibe. For other tools, we provide SMTP credentials. Contact us if you need white-glove setup for a different platform.",

  q7:  "What happens if a domain gets burned?",
  a7:  "Free replacement. No charge. We swap it out and reconfigure everything.",

  q8:  "How does the guarantee work exactly?",
  a8:  "$10/domain/month add-on. Use our verified domains, warm for 2 weeks (instead of the standard 1 week), launch in week 3, stay in suggested limits, keep copy clean. If deliverability doesn't perform, 50% refund on domain costs.",

  q9:  "How fast can I start sending?",
  a9:  "Without guarantee: Order today, inboxes configured in 24-48 hours, warm for 1 week, launch in week 2. With guarantee: Same setup, but warmup extends to 2 weeks, launch in week 3.",

  q10: "Is there a minimum commitment?",
  a10: "No contracts. Month-to-month. Cancel anytime.",

  q11: "How does \"Buy 11, get 12\" work?",
  a11: "For every 11 domains you purchase, you get one free. Simple volume reward for operators scaling up.",

  q12: "What makes you different from other inbox providers?",
  a12: "Three things. One, we set up everything inside your Instantly or Plusvibe account. You don't touch DNS or import credentials manually. Two, free domain replacement if anything burns. Three, we're the only provider that offers a deliverability guarantee backed by a 50% refund. Nobody else puts their money on the line.",
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
    "24-48 hour setup",
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
