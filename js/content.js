/* ════════════════════════════════════════════
   CONTENT.JS — All site copy, section by section
   Edit this file to update any text on the page.
   Each key maps to a section of the site.

   SECTION VISIBILITY:
   Each section has a `visible: true` flag.
   Set it to `false` to hide that section entirely.
   The navbar and footer cannot be hidden.
════════════════════════════════════════════ */

const CONTENT_CONTACT_EMAIL = typeof CONTACT !== 'undefined' ? CONTACT.email : null;
const CONTENT_CONTACT_WHATSAPP = typeof CONTACT !== 'undefined' ? CONTACT.whatsapp : null;

const CONTENT = {

  // ── NAVBAR ──────────────────────────────────
  navbar: {
    logoTop:    'North Horizon',
    logoBottom: 'Mails',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing',      href: '#pricing' },
      { label: 'Guarantee',    href: '#guarantee' },
      { label: 'FAQ',          href: '#faq' },
    ],
    cta: { label: 'Get Started', href: '#pricing' },
  },

  // ── HERO ────────────────────────────────────
  hero: {
    visible:     true,
    badge:       'The only Outlook provider that guarantees deliverability',
    headline:    'Outlook inboxes that land in primary or we pay you back.',
    subheadline: 'US-based Microsoft tenants. Aged domain sourcing. DNS fully configured. Connected directly into your Instantly account. Launch-ready within 48 hours. Add our deliverability guarantee and if it doesn\'t perform, we refund 50%.',
    primaryCta:   { label: 'Get Started',          href: '#pricing'      },
    secondaryCta: { label: 'See How It Works ↓',   href: '#how-it-works' },
  },

  // ── TRUST BAR ───────────────────────────────
  trust: {
    visible: false,
    label: 'Powering outbound for cold email operators sending at scale',
    logos: [
      // Example:
      { label: 'Instantly', href: 'https://instantly.ai' },
      { alt: 'Smartlead', src: 'images/smartlead.svg', href: 'https://www.smartlead.ai' },
    ],
  },

  // ── THE PROBLEM ─────────────────────────────
  problem: {
    visible:  true,
    tag:       'The problem',
    headline:  'You already know how this goes.',
    body: [
      'Credentials in a spreadsheet. Hours of DNS setup. Records wrong. You fix them. You warmup. You launch — and land in spam.',
      'Support takes 48 hours to respond. Deliverability is your problem. You eat the cost and move to the next provider. Same thing happens.',
      'Your inbox provider has zero stake in whether your campaigns actually work.',
    ],
    closer: 'We built NorthHorizonMails to fix that.',
  },

  // ── WHAT'S INCLUDED ─────────────────────────
  included: {
    visible:  true,
    tag:      "What's included",
    headline: 'Everything configured. Nothing left for you to figure out.',
    pillars: [
      {
        title: 'Individual US Microsoft Tenants',
        body:  [
          'Not shared tenants. Not recycled IPs.',
          'Dedicated US-based Microsoft 365 tenant on Azure per domain.',
          'Bulletproof IP reputation from day one.',
        ],
      },
      {
        title: 'Complete DNS & Authentication',
        body:  [
          'SPF, DKIM, and DMARC fully configured before delivery.',
          "You don't touch a single DNS record.",
          "One wrong record kills deliverability — we don't leave that to chance.",
        ],
      },
      {
        title: 'Aged Domain Support',
        body:  [
          'We source 10+ year aged domains with a 10+ infrastructure score.',
          'Cleaner deliverability foundation from day one.',
        ],
      },
      {
        title: 'Within 48-Hour Delivery',
        body:  [
          'Tenants provisioned, DNS configured, inboxes connected within 48 hours.',
          'You order, we build, you warm up.',
        ],
      },
      {
        title: 'Free Domain Replacement',
        body:  [
          'Domain gets burned? We replace it.',
          'No extra charge. No questions asked.',
        ],
      },
      {
        title: '15+ Sending Tool Compatibility',
        body:  [
          'Works with Instantly, Smartlead, Salesforge, and any SMTP platform.',
          'White-glove setup available for Instantly and Plusvibe.',
        ],
      },
      {
        title: 'Custom Profile Pictures',
        body:  [
          'Set real profile pictures on every mailbox',
          'Emails with profile photos look human and build trust',
          'Higher open rates and reply rates',
        ],
      },
      {
        title: 'Mailbox Access',
        body:  [
          'Access your mailboxes to reply directly from the inbox',
          "Useful when earlier conversations aren't accessible in your email outreach software",
        ],
      },
      {
        title: 'Deliverability Guarantee',
        badge: '$5/domain add-on',
        body:  [
          'Follow our system — verified domains, 2-week warmup, clean copy.',
          'Available on orders of 6 or more domains, with the guarantee valid only during week 3.',
          "If deliverability still doesn't perform in week 3, request your refund and we refund 50% of the subscription fees.",
        ],
      },
    ],
  },

  // ── HOW IT WORKS ────────────────────────────
  howItWorks: {
    visible:  true,
    tag:      'How it works',
    headline: 'Order today. Sending by week 2.',
    timeline: [
      { n: 'Day 1',   l: 'Order'       },
      { n: 'Day 2–3', l: 'Setup ready' },
      { n: 'Week 0',  l: 'Warmup'      },
      { n: 'Week 1',  l: 'Sending live', highlight: true },
    ],
    steps: [
      {
        n:     '1',
        title: 'Pick your plan',
        body:  [
          'Choose Normal, Premium, or Mixed.',
          'Select domain count and mailboxes per domain (25, 49, 74, or 99).',
        ],
      },
      {
        n:     '2',
        title: 'We build your infrastructure (within 48 hrs)',
        body:  [
          'Individual US Microsoft tenants provisioned, DNS fully configured.',
          'Inboxes connected directly into your Instantly or Plusvibe account.',
        ],
      },
      {
        n:     '3',
        title: 'Warmup (Week 0)',
        body:  [
          '7 days of warmup using recommended settings.',
          'Domains build sender reputation the right way — no shortcuts.',
        ],
      },
      {
        n:     '4',
        title: 'Launch (Week 1)',
        body:  [
          'Fully configured Outlook inboxes on Microsoft Azure.',
          'Sending from primary — not promo, not spam.',
        ],
      },
    ],
    note: "Most operators order on Friday and are warming up by Monday. Warmups are complete by Week 0. Campaigns are live in Week 1.",
  },

  // ── PRICING ─────────────────────────────────
  pricing: {
    visible:      true,
    tag:          'Pricing',
    headline:     'Simple pricing. No hidden fees. Choose your inbox count.',
    subheadline:  'Complete setup included. DNS, authentication, Instantly or Plusvibe connection. Every plan. Every domain. Choose 25, 49, 74, or 99 mailboxes/domain.',

    // ORDER: Normal → Mixed → Premium → Custom
    plans: [
      {
        id:       'normal',
        label:    'Normal License',
        price:    '$45',
        note:     'All Outlook licenses',
        period:   'per domain every 4 weeks',
        uniqueFeatures: [
          '4-5 cold emails safely per inbox/day',
        ],
        features: [
          '25, 49, 74, or 99 Mailboxes/domain',
          '500+ emails/day sending volume per domain',
          'Complete Technical Setup (SPF, DKIM, DMARC)',
          'Free Domain Replacement',
          'Aged Domain Sourcing Available',
          'Individual US Microsoft Tenants',
          'Mailbox access to reply directly',
          '15+ Sending Tool Integration',
        ],
        ctaTag:    'Best for volume campaigns',
        ctaDetail: 'Built for operators who care most about keeping cost per lead low while staying on the same Azure-backed setup.',
        cta:     { label: 'Order Normal', href: '#' },
      },
      {
        id:       'premium',
        label:    'Premium License',
        price:    '$65',
        note:     'All Premium Outlook licenses',
        period:   'per domain every 4 weeks',
        featured: true,
        uniqueFeatures: [
          '8-10 cold emails safely per inbox/day',
          'Higher-quality license less used by cold emailers',
        ],
        features: [
          '25, 49, 74, or 99 Mailboxes/domain',
          '800+ emails/day sending volume per domain',
          'Complete Technical Setup (SPF, DKIM, DMARC)',
          'Free Domain Replacement',
          'Aged Domain Sourcing Available',
          'Individual US Microsoft Tenants',
          'Mailbox access to reply directly',
          '15+ Sending Tool Integration',
        ],
        ctaTag:    'Best for high-value ICP campaigns',
        ctaDetail: 'Premium runs on higher-quality Microsoft infrastructure that fewer cold emailers use, giving you cleaner sending conditions and stronger inbox placement.',
        cta:     { label: 'Order Premium', href: '#' },
      },
      {
        id:       'mixed',
        label:    'Mixed License',
        price:    '$55',
        period:   'per domain every 4 weeks',
        note:     '50% Normal + 50% Premium licenses',
        uniqueFeatures: [
          '4-5 cold emails safely per inbox/day',
        ],
        features: [
          '25, 49, 74, or 99 Mailboxes/domain (split between Normal and Premium)',
          '500+ emails/day sending volume per domain',
          'Complete Technical Setup (SPF, DKIM, DMARC)',
          'Free Domain Replacement',
          'Aged Domain Sourcing Available',
          'Individual US Microsoft Tenants',
          'Mailbox access to reply directly',
          '15+ Sending Tool Integration',
        ],
        ctaTag:    'Best of both in one domain',
        ctaDetail: 'Designed for operators who want both volume and deliverability quality without splitting across separate domains.',
        cta:     { label: 'Order Mixed', href: '#' },
      },
      {
        id:       'custom',
        label:    'Custom Plan',
        price:    'Custom',
        period:   'For operators managing 100+ domains',
        features: [],
        ctaTag:    'Best for large-scale campaigns',
        ctaDetail: 'For agencies and operators running 100+ domains or managing multi-client sending at scale.',
        cta:     {
          label: 'Contact Us',
          href: CONTENT_CONTACT_EMAIL?.href || '#',
          copyText: CONTENT_CONTACT_EMAIL?.copyText,
          copyOnly: true,
        },
      },
    ],

    volumeBonus: {
      title: 'Volume Bonus: Buy 11, get 1 FREE',
      body:  'Running at scale? Every 11 domains you purchase comes with a free one. Simple volume reward for operators scaling up.',
    },
    guaranteeAddon: {
      title: 'Deliverability Guarantee Add-On — $5/domain one-time',
      body:  'Add to any plan. Available on orders of 6 or more domains. Requires a full 2-week warmup, applies only during week 3, and refund requests must be submitted in week 3 after all criteria are met. Details below.',
    },
  },

  // ── COMPARISON ──────────────────────────────
  comparison: {
    visible:  true,
    tag:      'Choosing a license',
    headline: "Not sure which license? Here's the honest breakdown.",
    rows: [
      { feature: 'Mailbox options',           normal: '25, 49, 74, or 99',                          premium: '25, 49, 74, or 99' },
      { feature: 'Cost per inbox (at 99)',    normal: '~$0.45',                                     premium: '~$0.66' },
      { feature: 'Cold sends per inbox/day',  normal: '3–5',                                        premium: '8–10' },
      { feature: 'Warmup time',               normal: '3–5 days',                                   premium: '3–5 days' },
      { feature: 'Deliverability',            normal: 'Good',                                       premium: 'Excellent' },
      { feature: 'Spam filter intelligence',  normal: 'High',                                       premium: 'Highest (strictest)' },
      { feature: 'Infrastructure',            normal: 'Microsoft Azure',                            premium: 'Separate premium Microsoft infrastructure' },
      { feature: 'IP Reputation',             normal: 'Bulletproof',                               premium: 'Bulletproof' },
      { feature: 'IP Pool Quality',           normal: 'Standard',                                   premium: 'Cleaner, less crowded, and less used by cold emailers' },
      { feature: 'Best for',                  normal: 'Budget volume plays',                        premium: 'Trusted high-value sends' },
    ],
    recommendations: [
      {
        label: 'Go Premium if…',
        body:  'Deliverability quality matters more than cost. Cleaner infrastructure, fewer cold emailers, stronger inbox placement.',
      },
      {
        label: 'Go Normal if…',
        body:  'Volume campaigns where cost per lead is the priority. Same Azure infrastructure, same DNS setup, same support.',
      },
      {
        label: 'Go Mixed if…',
        body:  'Want both volume and quality in one domain? Go Mixed.',
      },
    ],
  },

  // ── GUARANTEE ───────────────────────────────
  guarantee: {
    visible:     true,
    tag:         'The guarantee',
    headline:    "We built infrastructure we're willing to bet on.",
    subheadline: 'Add the Deliverability Guarantee to any plan for a one-time $5/domain. Available on orders of 6 or more domains.',
    intro:       "Every inbox provider tells you their infrastructure is solid. We're the only one that puts money behind it.",
    conditionsIntro: 'The conditions are straightforward:',
    conditions: [
      'Use our verified domains (purchased alongside your inboxes)',
      'Warm up for 2 full weeks using our recommended settings',
      'Launch your campaign in week 3',
      'Stay within suggested daily sending limits',
      'No spam trigger words in your copy',
    ],
    result:     'Follow every step. If deliverability still does not perform during week 3, submit your request and we refund 50% of the subscription fees.',
    whyTitle:   'Why we can offer this',
    why: [
      'Individual US-based Microsoft tenants on Azure.',
      'Bulletproof IP reputation, configured before delivery.',
      'SPF, DKIM, DMARC set up by us — not you.',
      'We control the setup end-to-end, so we stand behind it end-to-end.',
    ],
    timingTitle:'Note on timing',
    timing:     'The guarantee requires a 2-week warmup instead of the standard 1 week. You launch in week 3, the guarantee applies only during that week, and refund requests must be submitted in week 3 after all criteria are met.',
    disclaimer: 'This guarantee is for operators who follow the system. If you send 50 emails per inbox on day one with a subject line that says "ACT NOW!!!" that\'s not an infrastructure problem. We guarantee the foundation. You bring the discipline.',
  },

  // ── TESTIMONIALS ────────────────────────────
  testimonials: {
    visible:  false,
    tag:      'From operators who switched',
    headline: 'They tried other providers first. Then they found us.',
    items: [
      {
        quote: 'Testimonial quote placeholder. Replace with a real quote from a verified customer who switched to NorthHorizonMails.',
        name:  'Name Placeholder',
        role:  'Title · Company Name',
        photo: null, // Replace with image URL e.g. 'images/avatar-1.jpg'
      },
      {
        quote: 'Testimonial quote placeholder. Replace with a real quote from a verified customer who switched to NorthHorizonMails.',
        name:  'Name Placeholder',
        role:  'Title · Company Name',
        photo: null,
      },
      {
        quote: 'Testimonial quote placeholder. Replace with a real quote from a verified customer who switched to NorthHorizonMails.',
        name:  'Name Placeholder',
        role:  'Title · Company Name',
        photo: null,
      },
    ],
  },

  // ── FAQ ─────────────────────────────────────
  faq: {
    visible:  true,
    tag:      'FAQ',
    headline: 'Answers before you ask.',
    items: [
      {
        q: 'What do I actually receive after ordering?',
        a: 'Fully configured Microsoft Outlook inboxes on individual US-based tenants. DNS records set up. Inboxes connected into your Instantly or Plusvibe account. Ready to warm up within 48 hours.',
      },
      {
        q: 'Can I choose how many inboxes I want per domain?',
        a: 'Yes. Every plan lets you choose 25, 49, 74, or 99 mailboxes/domain. Pick based on your campaign volume needs.',
      },
      {
        q: 'Can I use my own domains?',
        a: 'Yes. Bring your own or purchase our verified domains. The deliverability guarantee requires our verified domains.',
      },
      {
        q: 'Can I set profile pictures on the mailboxes?',
        a: 'Yes. Every mailbox comes with the ability to set a custom profile picture. This makes your outreach look more human and increases open and reply rates.',
      },
      {
        q: 'Can I log into the mailboxes directly?',
        a: "Yes. You get mailbox access to reply to emails directly from the inbox. This is especially helpful when earlier conversations aren't accessible in your outreach software.",
      },
      {
        q: 'How many cold emails can I send per inbox per day?',
        a: 'Normal: 4-5 per inbox/day. Premium: 8-10 per inbox/day. Stay within these to protect reputation and maximize inbox placement.',
      },
      {
        q: "What's the difference between Normal and Premium?",
        a: "Both run on US-based Microsoft Azure infrastructure with bulletproof IP reputation. Premium uses a higher-tier Microsoft license on separate infrastructure that most cold emailers don't use. That means cleaner IP pools, less spam association, higher deliverability, and more sends per inbox per day. If you're targeting high-value ICPs, Premium is worth it.",
      },
      {
        q: 'I use Smartlead, not Instantly. Will this work?',
        a: 'Yes. Our inboxes work with any SMTP-compatible tool. Instantly, Smartlead, Salesforge, and 15+ others. White-glove setup (we connect it for you) is available for Instantly and Plusvibe. For other tools, we provide SMTP credentials. Contact us if you need white-glove setup for a different platform.',
      },
      {
        q: 'What happens if a domain gets burned?',
        a: 'Free replacement. No charge. We swap it out and reconfigure everything.',
      },
      {
        q: 'How does the guarantee work exactly?',
        a: '$5/domain one-time add-on. Available on orders of 6 or more domains. Use our verified domains, warm for 2 weeks, launch in week 3, stay in suggested limits, and keep copy clean. The guarantee applies only during week 3, and refund requests must be submitted that same week after all criteria are met.',
      },
      {
        q: 'How fast can I start sending?',
        a: 'Without guarantee: Order today, inboxes configured within 48 hours, warm for 1 week, launch in week 2. With guarantee: Same setup, but warmup extends to 2 weeks, launch happens in week 3, and the guarantee window applies only in that week.',
      },
      {
        q: 'Is there a minimum commitment?',
        a: 'No contracts. Month-to-month. Cancel anytime.',
      },
      {
        q: 'How does "Buy 11, get 12" work?',
        a: 'For every 11 domains you purchase, you get one free. Simple volume reward for operators scaling up.',
      },
      {
        q: 'What makes you different from other inbox providers?',
        a: "Three things. One, we set up everything inside your Instantly or Plusvibe account. You don't touch DNS or import credentials manually. Two, free domain replacement if anything burns. Three, we're the only provider that offers a deliverability guarantee backed by a 50% refund. Nobody else puts their money on the line.",
      },
    ],
  },

  // ── FINAL CTA ───────────────────────────────
  finalCta: {
    visible:     true,
    headline:    "Stop gambling on infrastructure that doesn't guarantee anything.",
    subheadline: "Premium Outlook inboxes. White-glove setup. The only provider willing to refund you if deliverability doesn't perform.",
    cta:   { label: 'Get Started', href: '#pricing' },
    notes: ['Within 48 hours', 'No contracts', 'Cancel anytime'],
  },

  // ── FOOTER ──────────────────────────────────
  footer: {
    logoTop:    'North Horizon',
    logoBottom: 'Mails',
    links: [
      { label: 'How It Works', href: '#how-it-works'  },
      { label: 'Pricing',      href: '#pricing'       },
      { label: 'Guarantee',    href: 'guarantee.html' },
      { label: 'FAQ',          href: '#faq'           },
    ],
    contact: {
      label:    CONTENT_CONTACT_EMAIL?.label || '',
      href:     CONTENT_CONTACT_EMAIL?.href || '#',
      copyText: CONTENT_CONTACT_EMAIL?.copyText,
    },
    whatsapp: {
      label: CONTENT_CONTACT_WHATSAPP?.label || 'WhatsApp',
      href:  CONTENT_CONTACT_WHATSAPP?.href || '#',
    },
    legal: [
      { label: 'Terms of Service', href: 'terms.html'   },
      { label: 'Privacy Policy',   href: 'privacy.html' },
      { label: 'Refund Policy',    href: 'refund.html'  },
    ],
    copyright: '© 2026 NorthHorizonMails. All rights reserved.',
  },

};

globalThis.CONTENT = CONTENT;

function contentSectionId(key) {
  const ids = {
    hero: 'hero',
    trust: 'trust',
    problem: 'problem',
    included: 'included',
    howItWorks: 'how-it-works',
    pricing: 'pricing',
    comparison: 'comparison',
    guarantee: 'guarantee',
    testimonials: 'testimonials',
    faq: 'faq',
    finalCta: 'final-cta',
  };

  return ids[key];
}

function syncContentVisibility(content) {
  Object.keys(content).forEach((key) => {
    const sectionId = contentSectionId(key);
    const sectionContent = content[key];

    if (!sectionId || !sectionContent || !Object.prototype.hasOwnProperty.call(sectionContent, 'visible')) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) return;

    section.hidden = !sectionContent.visible;
    section.style.display = sectionContent.visible ? '' : 'none';
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => syncContentVisibility(CONTENT), { once: true });
  } else {
    syncContentVisibility(CONTENT);
  }
}
