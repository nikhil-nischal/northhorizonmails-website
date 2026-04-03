/* ════════════════════════════════════════════
   APP.JS — All interactive behaviour
   Reads from CONFIG (config.js) for settings.
════════════════════════════════════════════ */

const CHECK_ICON_MARKUP =
  '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5l2 2 4-4"/></svg>';

const STAR_MARKUP = '★★★★★';

function clearChildren(element) {
  if (!element) return;
  while (element.firstChild) element.removeChild(element.firstChild);
}

function setText(element, value) {
  if (element && value != null) element.textContent = value;
  return element;
}

function setLink(element, link) {
  if (!element || !link) return element;
  if (link.label != null) element.textContent = link.label;
  if (link.href) element.href = link.href;
  return element;
}

function delayClass(index) {
  const delays = ['', 'd1', 'd2', 'd3'];
  return delays[index % delays.length];
}

function sectionIdForContentKey(key) {
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

function applySectionVisibility(content) {
  Object.keys(content).forEach((key) => {
    const sectionId = sectionIdForContentKey(key);
    const sectionContent = content[key];

    if (!sectionId || !sectionContent || !Object.prototype.hasOwnProperty.call(sectionContent, 'visible')) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) return;
    section.style.display = sectionContent.visible ? '' : 'none';
  });
}

function createNavListItem(link) {
  const item = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.textContent = link.label;
  item.appendChild(anchor);
  return item;
}

function createMobileNavLink(link) {
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.textContent = link.label;
  return anchor;
}

function createTrustLogo(logo, index) {
  const element = document.createElement(logo.href ? 'a' : 'div');
  const classes = ['trust-logo', 'fi'];
  const delay = delayClass(index);
  if (delay) classes.push(delay);

  element.className = classes.join(' ');
  if (logo.href) {
    element.href = logo.href;
    element.target = '_blank';
    element.rel = 'noreferrer';
  }

  if (logo.src) {
    const image = document.createElement('img');
    image.src = logo.src;
    image.alt = logo.alt || logo.label || 'Trusted brand';
    element.appendChild(image);
  } else {
    const label = document.createElement('span');
    label.className = 'trust-logo-text';
    label.textContent = logo.label || logo.alt || '';
    element.appendChild(label);
  }

  return element;
}

function createCheckIcon() {
  const icon = document.createElement('span');
  icon.className = 'chk';
  icon.innerHTML = CHECK_ICON_MARKUP;
  return icon;
}

function stripePaymentConfig(planId) {
  const links = globalThis.PAYMENT_LINKS;
  if (!links) return null;
  const config = links[planId];
  if (!config?.buyButtonId || !config?.publishableKey) return null;
  return config;
}

function contactConfig() {
  return globalThis.CONTACT || null;
}

function applySharedContactDetails() {
  const contact = contactConfig();
  if (!contact) return;

  document.querySelectorAll('[data-contact-email]').forEach((element) => {
    if (contact.email?.href) element.href = contact.email.href;
    if (contact.email?.label) element.textContent = contact.email.label;
    if (contact.email?.copyText) {
      element.dataset.copyText = contact.email.copyText;
      element.dataset.defaultLabel = contact.email.label;
      element.dataset.copyOnly = 'true';
    }
  });

  document.querySelectorAll('[data-contact-whatsapp]').forEach((element) => {
    if (contact.whatsapp?.href) element.href = contact.whatsapp.href;
    if (contact.whatsapp?.label) element.textContent = contact.whatsapp.label;
  });
}

async function copyText(text) {
  if (!text) return false;

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      // Fall through to the legacy copy path below.
    }
  }

  const input = document.createElement('input');
  input.value = text;
  input.setAttribute('readonly', '');
  input.style.position = 'absolute';
  input.style.left = '-9999px';
  document.body.appendChild(input);
  input.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (_) {
    copied = false;
  }

  document.body.removeChild(input);
  return copied;
}

function createPricingCard(plan, index) {
  const card = document.createElement('div');
  const classes = ['card', 'fi'];
  const delay = delayClass(index);
  if (delay) classes.push(delay);
  if (plan.featured) classes.push('featured');

  card.className = classes.join(' ');
  card.dataset.plan = plan.id;

  if (plan.featured) {
    const pill = document.createElement('span');
    pill.className = 'popular-pill';
    pill.textContent = plan.badge || 'Most Popular';
    card.appendChild(pill);
  }

  const label = document.createElement('p');
  label.className = 'plan-label';
  label.textContent = plan.label;
  card.appendChild(label);

  const price = document.createElement('p');
  price.className = 'plan-price';
  price.textContent = plan.price;
  if (String(plan.price).toLowerCase() === 'custom') {
    price.style.fontSize = '32px';
  }
  card.appendChild(price);

  if (plan.note) {
    const note = document.createElement('p');
    note.className = 'plan-note';
    note.textContent = plan.note;
    card.appendChild(note);
  }

  const period = document.createElement('p');
  period.className = 'plan-period';
  period.textContent = plan.period;
  card.appendChild(period);

  const hasFeatures = plan.uniqueFeatures?.length || plan.features?.length;
  if (hasFeatures) {
    const divider = document.createElement('div');
    divider.className = 'c-div';
    card.appendChild(divider);

    const features = document.createElement('ul');
    features.className = 'plan-feats';

    if (plan.uniqueFeatures?.length) {
      plan.uniqueFeatures.forEach((feature) => {
        const item = document.createElement('li');
        item.className = 'feat-unique';
        const chk = createCheckIcon();
        chk.classList.add('chk-unique');
        item.appendChild(chk);
        item.appendChild(document.createTextNode(feature));
        features.appendChild(item);
      });
    }

    if (plan.features?.length) {
      plan.features.forEach((feature) => {
        const item = document.createElement('li');
        item.appendChild(createCheckIcon());
        item.appendChild(document.createTextNode(feature));
        features.appendChild(item);
      });
    }

    card.appendChild(features);
  }

  const paymentConfig = stripePaymentConfig(plan.id);

  if (paymentConfig) {
    const payment = document.createElement('div');
    payment.className = 'plan-payment';

    const stripeButton = document.createElement('stripe-buy-button');
    stripeButton.setAttribute('buy-button-id', paymentConfig.buyButtonId);
    stripeButton.setAttribute('publishable-key', paymentConfig.publishableKey);
    payment.appendChild(stripeButton);

    card.appendChild(payment);
  } else {
    const button = document.createElement('a');
    button.className = `btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`;
    button.href = plan.cta?.href || '#';
    button.textContent = plan.cta?.label || 'Learn More';
    if (plan.cta?.copyText) {
      button.dataset.copyText = plan.cta.copyText;
      button.dataset.defaultLabel = plan.cta.label || 'Learn More';
      button.dataset.copyOnly = plan.cta.copyOnly ? 'true' : 'false';
    }
    card.appendChild(button);
  }

  if (plan.ctaTag) {
    const ctaTag = document.createElement('p');
    ctaTag.className = 'plan-cta-tag';
    ctaTag.textContent = plan.ctaTag;
    card.appendChild(ctaTag);
  }

  return card;
}

function bestForCopy(text) {
  return String(text || '').replace(/^Best for:\s*/iu, '');
}

function createPricingGuideCard(plan, index) {
  const card = document.createElement('div');
  const classes = ['pricing-fit-card', 'fi'];
  const delay = delayClass(index);
  if (delay) classes.push(delay);
  if (plan.featured) classes.push('featured');
  card.className = classes.join(' ');

  const label = document.createElement('p');
  label.className = 'pricing-fit-label';
  label.textContent = plan.label;
  card.appendChild(label);

  const body = document.createElement('p');
  body.className = 'pricing-fit-copy';
  body.textContent = bestForCopy(plan.bestFor);
  card.appendChild(body);

  return card;
}

function comparisonColumnLabel(plan) {
  if (!plan) return '';
  const label = plan.label.replace(/\s+(License|Plan)$/u, '');
  return `${label} (${plan.price}/mo)`;
}

function createBodyContent(value) {
  if (Array.isArray(value)) {
    const ul = document.createElement('ul');
    value.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    return ul;
  }
  const p = document.createElement('p');
  p.textContent = value ?? '';
  return p;
}

function applyHomeContent() {
  const content = globalThis.CONTENT;
  if (!content) return;
  if (!document.getElementById('hero')) return;

  applySectionVisibility(content);

  const { navbar, hero, trust, problem, included, howItWorks, pricing, comparison, guarantee, testimonials, faq, finalCta, footer } = content;

  if (navbar) {
    setText(document.querySelector('#navbar .nav-logo .logo-top'), navbar.logoTop);
    setText(document.querySelector('#navbar .nav-logo .logo-bottom'), navbar.logoBottom);
    setLink(document.querySelector('#navbar .nav-cta'), navbar.cta);

    const navLinks = document.querySelector('#navbar .nav-links');
    if (navLinks) {
      clearChildren(navLinks);
      navbar.links.forEach((link) => navLinks.appendChild(createNavListItem(link)));
    }

    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
      clearChildren(mobileNav);
      navbar.links.forEach((link) => mobileNav.appendChild(createMobileNavLink(link)));

      const cta = document.createElement('a');
      cta.className = 'btn btn-primary';
      cta.href = navbar.cta?.href || '#';
      cta.textContent = navbar.cta?.label || 'Get Started';
      mobileNav.appendChild(cta);
    }
  }

  if (hero) {
    const badge = document.querySelector('#hero .hero-badge');
    if (badge && hero.badge != null) {
      const dot = badge.querySelector('.hero-dot')?.cloneNode(true) || document.createElement('span');
      dot.className = 'hero-dot';
      badge.replaceChildren(dot, document.createTextNode(hero.badge));
    }

    setText(document.querySelector('#hero h1'), hero.headline);
    setText(document.querySelector('#hero .hero-sub'), hero.subheadline);

    const heroCtas = document.querySelectorAll('#hero .hero-ctas a');
    setLink(heroCtas[0], hero.primaryCta);
    setLink(heroCtas[1], hero.secondaryCta);
  }

  if (trust) {
    setText(document.querySelector('#trust .trust-label'), trust.label);

    const logos = document.querySelector('#trust .trust-logos');
    if (logos) {
      clearChildren(logos);

      const trustLogos = Array.isArray(trust.logos) ? trust.logos : [];
      logos.style.display = trustLogos.length > 0 ? '' : 'none';

      trustLogos.forEach((logo, index) => {
        logos.appendChild(createTrustLogo(logo, index));
      });
    }
  }

  if (problem) {
    const container = document.querySelector('#problem .problem-inner');
    if (container) {
      clearChildren(container);

      const tag = document.createElement('span');
      tag.className = 'tag fi';
      tag.textContent = problem.tag;
      container.appendChild(tag);

      const heading = document.createElement('h2');
      heading.className = 'fi d1';
      heading.textContent = problem.headline;
      container.appendChild(heading);

      const problemList = document.createElement('ul');
      problemList.className = 'problem-bullets fi d1';
      problem.body.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        problemList.appendChild(li);
      });
      container.appendChild(problemList);

      const closer = document.createElement('p');
      closer.className = 'problem-closer fi d3';
      closer.textContent = problem.closer;
      container.appendChild(closer);
    }
  }

  if (included) {
    setText(document.querySelector('#included .included-hd .tag'), included.tag);
    setText(document.querySelector('#included .included-hd h2'), included.headline);

    const pillars = document.querySelector('#included .pillars');
    const pillarIcons = Array.from(document.querySelectorAll('#included .pillar .p-icon'));

    if (pillars) {
      clearChildren(pillars);

      included.pillars.forEach((pillar, index) => {
        const item = document.createElement('div');
        const classes = ['pillar', 'fi'];
        const delay = delayClass(index);
        if (delay) classes.push(delay);
        item.className = classes.join(' ');

        if (pillarIcons.length > 0) {
          item.appendChild(pillarIcons[index % pillarIcons.length].cloneNode(true));
        }

        const title = document.createElement('h3');
        if (pillar.badge) {
          title.appendChild(document.createTextNode(`${pillar.title} `));
          const badge = document.createElement('span');
          badge.className = 'pillar-badge';
          badge.textContent = pillar.badge;
          title.appendChild(badge);
        } else {
          title.textContent = pillar.title;
        }
        item.appendChild(title);

        item.appendChild(createBodyContent(pillar.body));

        pillars.appendChild(item);
      });
    }
  }

  if (howItWorks) {
    setText(document.querySelector('#how-it-works .how-hd .tag'), howItWorks.tag);
    setText(document.querySelector('#how-it-works .how-hd h2'), howItWorks.headline);

    const timeline = document.querySelector('#how-it-works .timeline-bar');
    if (timeline) {
      clearChildren(timeline);
      howItWorks.timeline.forEach((item, index) => {
        const step = document.createElement('div');
        step.className = `tl-step${item.highlight ? ' tl-live' : ''}`;

        const number = document.createElement('span');
        number.className = 'tl-n';
        number.textContent = item.n;
        step.appendChild(number);

        const label = document.createElement('span');
        label.className = 'tl-l';
        label.textContent = item.l;
        step.appendChild(label);

        timeline.appendChild(step);

        if (index < howItWorks.timeline.length - 1) {
          const arrow = document.createElement('span');
          arrow.className = 'tl-arrow';
          arrow.textContent = '——';
          timeline.appendChild(arrow);
        }
      });
    }

    const steps = document.querySelector('#how-it-works .steps');
    if (steps) {
      clearChildren(steps);
      howItWorks.steps.forEach((step, index) => {
        const item = document.createElement('div');
        const classes = ['step', 'fi'];
        const delay = delayClass(index);
        if (delay) classes.push(delay);
        item.className = classes.join(' ');

        const number = document.createElement('div');
        number.className = 'step-n';
        number.textContent = step.n;
        item.appendChild(number);

        const body = document.createElement('div');
        body.className = 'step-body';

        const title = document.createElement('h3');
        title.textContent = step.title;
        body.appendChild(title);

        body.appendChild(createBodyContent(step.body));

        item.appendChild(body);
        steps.appendChild(item);
      });
    }

    setText(document.querySelector('#how-it-works .steps-note'), howItWorks.note);
  }

  if (pricing) {
    setText(document.querySelector('#pricing .pricing-hd .tag'), pricing.tag);
    setText(document.querySelector('#pricing .pricing-hd h2'), pricing.headline);
    setText(document.querySelector('#pricing .pricing-sub'), pricing.subheadline);

    const cards = document.querySelector('#pricing .cards');
    if (cards) {
      clearChildren(cards);
      pricing.plans.forEach((plan, index) => cards.appendChild(createPricingCard(plan, index)));
    }

    const pricingContainer = document.querySelector('#pricing .container');
    const pricingAddons = document.querySelector('#pricing .pricing-addons');
    let pricingFit = document.querySelector('#pricing .pricing-fit');
    let pricingFitHeader;
    let pricingFitTag;
    let pricingFitHeadline;
    let pricingFitGrid;

    if (pricingContainer && pricingAddons && !pricingFit) {
      pricingFit = document.createElement('div');
      pricingFit.className = 'pricing-fit fi';

      pricingFitHeader = document.createElement('div');
      pricingFitHeader.className = 'pricing-fit-hd';

      pricingFitTag = document.createElement('p');
      pricingFitTag.className = 'pricing-fit-tag';
      pricingFitHeader.appendChild(pricingFitTag);

      pricingFitHeadline = document.createElement('h3');
      pricingFitHeadline.className = 'pricing-fit-headline';
      pricingFitHeader.appendChild(pricingFitHeadline);

      pricingFitGrid = document.createElement('div');
      pricingFitGrid.className = 'pricing-fit-grid';

      pricingFit.appendChild(pricingFitHeader);
      pricingFit.appendChild(pricingFitGrid);
      pricingContainer.insertBefore(pricingFit, pricingAddons);
    } else if (pricingFit) {
      pricingFitHeader = pricingFit.querySelector('.pricing-fit-hd');
      pricingFitTag = pricingFit.querySelector('.pricing-fit-tag');
      pricingFitHeadline = pricingFit.querySelector('.pricing-fit-headline');
      pricingFitGrid = pricingFit.querySelector('.pricing-fit-grid');
    }

    if (pricingFitTag) {
      setText(pricingFitTag, pricing.bestForSection?.tag || 'Quick guide');
    }

    if (pricingFitHeadline) {
      setText(
        pricingFitHeadline,
        pricing.bestForSection?.headline || 'Choose the plan that matches how you send.'
      );
    }

    if (pricingFitGrid) {
      clearChildren(pricingFitGrid);
      pricing.plans
        .filter((plan) => plan.id !== 'custom' && plan.bestFor)
        .forEach((plan, index) => {
          pricingFitGrid.appendChild(createPricingGuideCard(plan, index));
        });
    }

    const addonCards = document.querySelectorAll('#pricing .addon-card');
    if (addonCards[0]) {
      setText(addonCards[0].querySelector('.addon-body h4'), pricing.volumeBonus?.title);
      setText(addonCards[0].querySelector('.addon-body p'), pricing.volumeBonus?.body);
    }

    if (addonCards[1]) {
      setText(addonCards[1].querySelector('.addon-body h4'), pricing.guaranteeAddon?.title);

      const body = addonCards[1].querySelector('.addon-body p');
      const detailsLink = body?.querySelector('a')?.cloneNode(true);
      if (body) {
        const copy = (pricing.guaranteeAddon?.body || '').replace(/\s*Details below\.?$/iu, '');
        clearChildren(body);
        body.appendChild(document.createTextNode(copy));

        if (detailsLink) {
          body.appendChild(document.createTextNode(' '));
          body.appendChild(detailsLink);
        }
      }
    }
  }

  if (comparison) {
    setText(document.querySelector('#comparison .comp-hd .tag'), comparison.tag);
    setText(document.querySelector('#comparison .comp-hd h2'), comparison.headline);

    const normalPlan = pricing?.plans?.find((plan) => plan.id === 'normal');
    const premiumPlan = pricing?.plans?.find((plan) => plan.id === 'premium');
    const theadRow = document.querySelector('#comparison .ctbl thead tr');
    const tbody = document.querySelector('#comparison .ctbl tbody');

    if (theadRow) {
      clearChildren(theadRow);

      const corner = document.createElement('th');
      theadRow.appendChild(corner);

      const normalHeading = document.createElement('th');
      normalHeading.className = 'col-normal';
      normalHeading.textContent = comparisonColumnLabel(normalPlan);
      theadRow.appendChild(normalHeading);

      const premiumHeading = document.createElement('th');
      premiumHeading.className = 'col-premium';
      premiumHeading.textContent = comparisonColumnLabel(premiumPlan);
      theadRow.appendChild(premiumHeading);
    }

    if (tbody) {
      clearChildren(tbody);
      comparison.rows.forEach((row) => {
        const tr = document.createElement('tr');

        const feature = document.createElement('td');
        feature.textContent = row.feature;
        tr.appendChild(feature);

        const normal = document.createElement('td');
        normal.textContent = row.normal;
        tr.appendChild(normal);

        const premium = document.createElement('td');
        premium.textContent = row.premium;
        tr.appendChild(premium);

        tbody.appendChild(tr);
      });
    }

    const recommendations = document.querySelector('#comparison .comp-reco');
    if (recommendations) {
      clearChildren(recommendations);
      comparison.recommendations.forEach((recommendation) => {
        const card = document.createElement('div');
        card.className = 'reco-card';

        const label = document.createElement('p');
        label.className = 'reco-label';
        label.textContent = recommendation.label;
        card.appendChild(label);

        const body = document.createElement('p');
        body.textContent = recommendation.body;
        card.appendChild(body);

        recommendations.appendChild(card);
      });
    }
  }

  if (guarantee) {
    setText(document.querySelector('#guarantee .g-hd .tag'), guarantee.tag);
    setText(document.querySelector('#guarantee .g-hd h2'), guarantee.headline);
    setText(document.querySelector('#guarantee .g-subhead'), guarantee.subheadline);
    setText(document.querySelector('#guarantee .g-left > p:nth-of-type(1)'), guarantee.intro);
    setText(document.querySelector('#guarantee .g-left > p:nth-of-type(2)'), guarantee.conditionsIntro);
    setText(document.querySelector('#guarantee .g-result'), guarantee.result);

    const conditions = document.querySelector('#guarantee .g-conditions');
    if (conditions) {
      clearChildren(conditions);
      guarantee.conditions.forEach((condition, index) => {
        const item = document.createElement('div');
        item.className = 'g-cond';

        const number = document.createElement('span');
        number.className = 'g-num';
        number.textContent = String(index + 1);
        item.appendChild(number);

        item.appendChild(document.createTextNode(condition));
        conditions.appendChild(item);
      });
    }

    const boxes = document.querySelectorAll('#guarantee .g-box');
    if (boxes[0]) {
      setText(boxes[0].querySelector('h3'), guarantee.whyTitle);
      const whyEl = boxes[0].querySelector('p');
      if (Array.isArray(guarantee.why)) {
        const ul = createBodyContent(guarantee.why);
        if (whyEl) whyEl.replaceWith(ul); else boxes[0].appendChild(ul);
      } else {
        setText(whyEl, guarantee.why);
      }
    }
    if (boxes[1]) {
      setText(boxes[1].querySelector('h3'), guarantee.timingTitle);
      setText(boxes[1].querySelector('p'), guarantee.timing);
    }

    setText(document.querySelector('#guarantee .g-disclaimer'), guarantee.disclaimer);
  }

  if (testimonials) {
    setText(document.querySelector('#testimonials .t-hd .tag'), testimonials.tag);
    setText(document.querySelector('#testimonials .t-hd h2'), testimonials.headline);

    const grid = document.querySelector('#testimonials .t-grid');
    if (grid) {
      clearChildren(grid);

      testimonials.items.forEach((item, index) => {
        const card = document.createElement('div');
        const classes = ['t-card', 'fi'];
        const delay = delayClass(index);
        if (delay) classes.push(delay);
        card.className = classes.join(' ');

        const photo = document.createElement('div');
        photo.className = 't-photo';
        if (item.photo) {
          photo.style.backgroundImage = `url("${item.photo}")`;
          photo.style.backgroundSize = 'cover';
          photo.style.backgroundPosition = 'center';
          photo.style.backgroundColor = 'transparent';
        }
        card.appendChild(photo);

        const stars = document.createElement('div');
        stars.className = 't-stars';
        STAR_MARKUP.split('').forEach((star) => {
          const node = document.createElement('span');
          node.className = 't-star';
          node.textContent = star;
          stars.appendChild(node);
        });
        card.appendChild(stars);

        const quote = document.createElement('p');
        quote.className = 't-quote';
        quote.textContent = item.quote.startsWith('"') ? item.quote : `"${item.quote}"`;
        card.appendChild(quote);

        const name = document.createElement('p');
        name.className = 't-name';
        name.textContent = item.name;
        card.appendChild(name);

        const role = document.createElement('p');
        role.className = 't-role';
        role.textContent = item.role;
        card.appendChild(role);

        grid.appendChild(card);
      });
    }
  }

  if (faq) {
    setText(document.querySelector('#faq .faq-hd .tag'), faq.tag);
    setText(document.querySelector('#faq .faq-hd h2'), faq.headline);

    const list = document.querySelector('#faq .faq-list');
    if (list) {
      clearChildren(list);

      faq.items.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';

        const question = document.createElement('button');
        question.className = 'faq-q';
        question.type = 'button';
        question.appendChild(document.createTextNode(item.q));

        const icon = document.createElement('span');
        icon.className = 'faq-ico';
        icon.textContent = '+';
        question.appendChild(icon);
        faqItem.appendChild(question);

        const answer = document.createElement('div');
        answer.className = 'faq-a';
        answer.textContent = item.a;
        faqItem.appendChild(answer);

        list.appendChild(faqItem);
      });
    }
  }

  if (finalCta) {
    setText(document.querySelector('#final-cta h2'), finalCta.headline);
    setText(document.querySelector('#final-cta .final-sub'), finalCta.subheadline);
    setLink(document.querySelector('#final-cta .btn'), finalCta.cta);

    const notes = document.querySelector('#final-cta .final-note');
    if (notes) {
      clearChildren(notes);
      finalCta.notes.forEach((note) => {
        const item = document.createElement('span');
        item.textContent = note;
        notes.appendChild(item);
      });
    }
  }

  if (footer) {
    setText(document.querySelector('#footer .footer-logo .logo-top'), footer.logoTop);
    setText(document.querySelector('#footer .footer-logo .logo-bottom'), footer.logoBottom);

    const footerLinks = document.querySelector('#footer .footer-links');
    if (footerLinks) {
      clearChildren(footerLinks);
      footer.links.forEach((link) => footerLinks.appendChild(createNavListItem(link)));
    }

    const footerContact = document.querySelector('#footer .footer-contact');
    if (footerContact) {
      clearChildren(footerContact);

      const label = document.createElement('span');
      label.className = 'footer-contact-label';
      label.textContent = 'Contact';
      footerContact.appendChild(label);

      const links = document.createElement('div');
      links.className = 'footer-contact-links';

      const email = document.createElement('a');
      email.className = 'footer-contact-email';
      email.href = footer.contact.href;
      email.textContent = footer.contact.label;
      if (footer.contact.copyText) {
        email.dataset.copyText = footer.contact.copyText;
        email.dataset.defaultLabel = footer.contact.label;
        email.dataset.copyOnly = 'true';
      }
      links.appendChild(email);

      if (footer.whatsapp?.href) {
        const whatsapp = document.createElement('a');
        whatsapp.className = 'footer-contact-whatsapp';
        whatsapp.href = footer.whatsapp.href;
        whatsapp.target = '_blank';
        whatsapp.rel = 'noreferrer';
        whatsapp.textContent = footer.whatsapp.label || 'WhatsApp';
        links.appendChild(whatsapp);
      }

      footerContact.appendChild(links);
    }

    const legalLinks = document.querySelector('#footer .footer-legal');
    if (legalLinks) {
      clearChildren(legalLinks);
      footer.legal.forEach((link) => legalLinks.appendChild(createNavListItem(link)));
    }

    setText(document.querySelector('#footer .footer-copy'), footer.copyright);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applySharedContactDetails();

  // ── 1. Apply homepage content source of truth ──
  applyHomeContent();

  // ── 2. Apply config: testimonials visibility ──
  const config = globalThis.CONFIG;
  if (config && !config.showTestimonials) {
    const t = document.getElementById('testimonials');
    if (t) t.style.display = 'none';
  }

  // ── 3. Apply Stripe links from config ────────
  if (config?.stripeLinks) {
    Object.entries(config.stripeLinks).forEach(([plan, url]) => {
      const card = document.querySelector(`[data-plan="${plan}"]`);
      if (card && url && url !== '#') {
        const btn = card.querySelector('.btn');
        if (btn) btn.href = url;
      }
    });
  }

  // ── 4. Navbar scroll shadow ──────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── 5. Mobile hamburger menu ─────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar?.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── 6. FAQ accordion ─────────────────────────
  document.querySelectorAll('.faq-q').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── 7. Scroll fade-in (IntersectionObserver) ─
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('.fi').forEach((el) => observer.observe(el));

  // ── 8. Smooth scroll for all anchor links ────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
        10
      ) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── 9. Copy configured contact values on click ─
  document.querySelectorAll('a[data-copy-text]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const text = anchor.dataset.copyText;
      if (!text) return;
      if (anchor.dataset.copyOnly === 'true') e.preventDefault();

      copyText(text).then((copied) => {
        if (!copied) return;

        const defaultLabel = anchor.dataset.defaultLabel || anchor.textContent || 'Contact Us';
        anchor.textContent = 'Email Copied';

        window.setTimeout(() => {
          anchor.textContent = defaultLabel;
        }, 1600);
      });
    });
  });
});
