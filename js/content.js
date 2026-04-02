/* ════════════════════════════════════════════
   CONTENT.JS — All site copy, section by section
   Edit this file to update any text on the page.
   Each key maps to a section of the site.

   SECTION VISIBILITY:
   Each section has a `visible: true` flag.
   Set it to `false` to hide that section entirely.
   The navbar and footer cannot be hidden.
════════════════════════════════════════════ */

const CONTACT_EMAIL = CONTACT.email;
const CONTACT_WHATSAPP = CONTACT.whatsapp;

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
    subheadline: 'US-based Microsoft tenants. DNS fully configured. Connected directly into your Instantly account. Launch-ready in 24-48 hours. Add our deliverability guarantee and if it doesn\'t perform, we refund 50%.',
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
      'You buy inboxes from a reseller. You get SMTP credentials in a spreadsheet. You spend two hours configuring DNS yourself. Half the records are wrong. You fix them. You start warmup. A week later you launch and half your emails land in spam.',
      'You reach out to support. They take 48 hours to reply. They tell you deliverability is your responsibility. You eat the cost. You find another provider. Same thing happens again.',
      "The problem isn't your copy. It's not your sending tool. It's that your inbox provider has zero stake in whether your campaigns actually work.",
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
        body:  'Not shared tenants. Not recycled IPs. Every domain gets its own dedicated US-based Microsoft 365 tenant running on Azure infrastructure. Bulletproof IP reputation from day one.',
      },
      {
        title: 'Complete DNS & Authentication',
        body:  "SPF. DKIM. DMARC. All configured before your inboxes reach you. You don't touch a single DNS record. We handle it because one wrong record kills deliverability and we don't leave that to chance.",
      },
      {
        title: 'White-Glove Setup',
        body:  "We don't send you credentials and say good luck. We connect every inbox directly into your Instantly or Plusvibe account. You open your sending tool and your inboxes are there, ready to warm up. No manual imports. No SMTP headaches. Contact us if you need setup for other platforms.",
      },
      {
        title: 'Free Domain Replacement',
        body:  'Domain gets burned? We replace it. No extra charge. No questions. Operators scale aggressively and we built our system to handle that reality.',
      },
      {
        title: 'Aged Domain Support',
        body:  'Need stronger domain quality from day one? We help you source 10+ year aged domains with a 10+ infrastructure score, giving you a cleaner foundation for deliverability.',
      },
      {
        title: '15+ Sending Tool Compatibility',
        body:  'Instantly, Smartlead, Salesforge, or any SMTP-compatible platform. White-glove setup is available for Instantly and Plusvibe. Contact us to add other tools.',
      },
      {
        title: 'Deliverability Guarantee',
        badge: '$10/domain add-on',
        body:  "Follow our system. Verified domains, 2-week warmup, recommended sending limits, clean copy. If deliverability still doesn't perform, we refund 50% of your domain costs. No other provider offers this. We do because we trust our infrastructure.",
      },
      {
        title: 'Flexible Inbox Counts',
        body:  'Not every campaign needs 99 inboxes. Choose 25, 49, 74, or 99 mailboxes/domain based on your volume needs. Scale up or down as your campaigns evolve.',
      },
      {
        title: 'Buy 11, Get 1 Free',
        body:  'Scaling volume? For every 11 domains you buy, we add 1 more at no extra cost. Simple pricing for operators growing fast.',
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
      { n: 'Week 1',  l: 'Warmup'      },
      { n: 'Week 2',  l: 'Sending live', highlight: true },
    ],
    steps: [
      {
        n:     '1',
        title: 'Pick your plan',
        body:  'Choose Normal, Premium, or Mixed. Select how many domains you need and how many mailboxes/domain (25, 49, 74, or 99).',
      },
      {
        n:     '2',
        title: 'We build your infrastructure (24-48 hrs)',
        body:  'We provision individual US Microsoft tenants, configure all DNS authentication, and connect your inboxes directly into your Instantly or Plusvibe account. You do nothing.',
      },
      {
        n:     '3',
        title: 'Warmup (1 week)',
        body:  'Your inboxes warm for 7 days using recommended settings. Domains build sender reputation the right way. No shortcuts, no tricks.',
      },
      {
        n:     '4',
        title: 'Launch (Week 2)',
        body:  "You're live. Fully configured Outlook inboxes. Bulletproof Microsoft Azure infrastructure. Sending from primary, not promo, not spam.",
      },
    ],
    note: "Most operators order on Friday and are warming up by Monday. By next monday, campaigns are live and landing replies.",
  },

  // ── PRICING ─────────────────────────────────
  pricing: {
    visible:      true,
    tag:          'Pricing',
    headline:     'Simple pricing. No hidden fees. Choose your inbox count.',
    subheadline:  'Complete setup included. DNS, authentication, Instantly or Plusvibe connection. Every plan. Every domain. Choose 25, 49, 74, or 99 mailboxes/domain.',
    bestForSection: {
      tag:      'Quick guide',
      headline: 'Choose the plan that matches how you send.',
    },

    // ORDER: Normal → Mixed → Premium → Custom
    plans: [
      {
        id:       'normal',
        label:    'Normal License',
        price:    '$45',
        note:     '100% Normal licenses',
        period:   'per domain every 4 weeks',
        features: [
          '25, 49, 74, or 99 Mailboxes/domain',
          '4-5 cold emails safely per inbox/day',
          '500+ emails/day sending volume per domain',
          'Complete Technical Setup (SPF, DKIM, DMARC)',
          'Free Domain Replacement',
          'Individual US Microsoft Tenants',
          '15+ Sending Tool Integration',
        ],
        bestFor: 'Best for: Volume campaigns where cost per lead matters most',
        cta:     { label: 'Order Normal', href: '#' },
      },
      {
        id:       'mixed',
        label:    'Mixed License',
        price:    '$55',
        period:   'per domain every 4 weeks',
        note:     '50% Normal + 50% Premium licenses',
        features: [
          '25, 49, 74, or 99 Mailboxes/domain (split between Normal and Premium)',
          '500+ emails/day sending volume per domain',
          'Complete Technical Setup (SPF, DKIM, DMARC)',
          'Free Domain Replacement',
          'Individual US Microsoft Tenants',
          '15+ Sending Tool Integration',
        ],
        bestFor: 'Best for: Operators who want both volume and quality in one domain',
        cta:     { label: 'Order Mixed', href: '#' },
      },
      {
        id:       'premium',
        label:    'Premium License',
        price:    '$65',
        note:     '100% Premium licenses',
        period:   'per domain every 4 weeks',
        featured: true,
        features: [
          '25, 49, 74, or 99 Mailboxes/domain',
          '8-10 cold emails safely per inbox/day',
          '500+ emails/day sending volume per domain',
          'Complete Technical Setup (SPF, DKIM, DMARC)',
          'Free Domain Replacement',
          'Individual US Microsoft Tenants',
          'Separate premium Microsoft infrastructure with higher-quality licensing',
          '15+ Sending Tool Integration',
        ],
        bestFor: 'Best for: High-value campaigns where deliverability quality matters most. Premium runs on separate, higher-quality Microsoft infrastructure that far fewer cold emailers use, giving you cleaner sending conditions and stronger inbox placement.',
        cta:     { label: 'Order Premium', href: '#' },
      },
      {
        id:       'custom',
        label:    'Custom Plan',
        price:    'Custom',
        period:   'For operators managing 100+ domains',
        features: [],
        bestFor: 'Best for: Agencies running large-scale multi-client campaigns',
        cta:     {
          label: 'Contact Us',
          href: CONTACT_EMAIL.href,
          copyText: CONTACT_EMAIL.copyText,
          copyOnly: true,
        },
      },
    ],

    volumeBonus: {
      title: 'Volume Bonus: Buy 11, get 1 FREE',
      body:  'Running at scale? Every 11 domains you purchase comes with a free one. Simple volume reward for operators scaling up.',
    },
    guaranteeAddon: {
      title: 'Deliverability Guarantee Add-On — $10/domain every 4 weeks',
      body:  "Add to any plan. Requires 2-week warmup (launch in week 3 instead of week 2). If deliverability doesn't perform after following our system, we refund 50% of your domain costs. Details below.",
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
        body:  "Go Premium when deliverability quality matters more than lowest-cost volume. It runs on separate, higher-quality Microsoft infrastructure that far fewer cold emailers use, which means cleaner sending conditions, better inbox placement, and stronger reply potential.",
      },
      {
        label: 'Go Normal if…',
        body:  'Running broad volume campaigns where cost per lead is king? Go Normal. Same bulletproof Azure infrastructure, same DNS setup, same support.',
      },
      {
        label: 'Go Mixed if…',
        body:  'Want both in one domain? Go Mixed.',
      },
    ],
  },

  // ── GUARANTEE ───────────────────────────────
  guarantee: {
    visible:     true,
    tag:         'The guarantee',
    headline:    "We built infrastructure we're willing to bet on.",
    subheadline: 'Add the Deliverability Guarantee to any plan for $10/domain every 4 weeks.',
    intro:       "Every inbox provider tells you their infrastructure is solid. We're the only one that puts money behind it.",
    conditionsIntro: 'The conditions are straightforward:',
    conditions: [
      'Use our verified domains (purchased alongside your inboxes)',
      'Warm up for 2 full weeks using our recommended settings',
      'Launch your campaign in week 3',
      'Stay within suggested daily sending limits',
      'No spam trigger words in your copy',
    ],
    result:     "Follow every step. If deliverability still doesn't perform, we refund 50% of your domain costs.",
    whyTitle:   'Why we can offer this',
    why:        'Individual US-based Microsoft tenants. Azure infrastructure. Bulletproof IP reputation. SPF, DKIM, DMARC configured by us. We control the setup end-to-end, so we stand behind it end-to-end.',
    timingTitle:'Note on timing',
    timing:     'The guarantee requires a 2-week warmup instead of the standard 1 week. This extra week ensures your domains build maximum sender reputation before you launch. You go live in week 3 instead of week 2.',
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
        a: 'Fully configured Microsoft Outlook inboxes on individual US-based tenants. DNS records set up. Inboxes connected into your Instantly or Plusvibe account. Ready to warm up within 24-48 hours.',
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
        a: "$10/domain every 4 weeks add-on. Use our verified domains, warm for 2 weeks (instead of the standard 1 week), launch in week 3, stay in suggested limits, keep copy clean. If deliverability doesn't perform, 50% refund on domain costs.",
      },
      {
        q: 'How fast can I start sending?',
        a: 'Without guarantee: Order today, inboxes configured in 24-48 hours, warm for 1 week, launch in week 2. With guarantee: Same setup, but warmup extends to 2 weeks, launch in week 3.',
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
    notes: ['24-48 hour setup', 'No contracts', 'Cancel anytime'],
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
      label:    CONTACT_EMAIL.label,
      href:     CONTACT_EMAIL.href,
      copyText: CONTACT_EMAIL.copyText,
    },
    whatsapp: {
      label: CONTACT_WHATSAPP.label,
      href:  CONTACT_WHATSAPP.href,
    },
    legal: [
      { label: 'Terms of Service', href: 'terms.html'   },
      { label: 'Privacy Policy',   href: 'privacy.html' },
      { label: 'Refund Policy',    href: 'refund.html'  },
    ],
    copyright: '© 2026 NorthHorizonMails. All rights reserved.',
  },

};
