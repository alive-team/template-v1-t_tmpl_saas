# Universal SaaS Landing Page Template

This is a fully responsive, customizable SaaS landing page that works for **any SaaS product**. Simply update the configuration object at the top of `src/pages/Index.tsx` with your product details.

## Quick Start

### 1. Open `src/pages/Index.tsx`

### 2. Find the `config` object (lines 4-26) and replace all placeholders:

```javascript
const config = {
  PRODUCT_NAME: 'Your Product Name',
  ONE_LINE_PITCH: 'A clear, compelling one-line description of what your product does',
  PRIMARY_BENEFIT: 'The main benefit users get from your product',
  TARGET_AUDIENCE: 'Who your product is designed for',

  FEATURE_1: {
    title: 'Feature Name',
    desc: 'Brief description of what this feature does'
  },
  FEATURE_2: {
    title: 'Feature Name',
    desc: 'Brief description of what this feature does'
  },
  FEATURE_3: {
    title: 'Feature Name',
    desc: 'Brief description of what this feature does'
  },
  FEATURE_4: {
    title: 'Feature Name',
    desc: 'Brief description of what this feature does'
  },

  PRIMARY_CTA_LABEL: 'Start Free Trial',
  SECONDARY_CTA_LABEL: 'Watch Demo',

  PRICING_TIERS: [
    {
      name: 'Starter',
      price: '$29',
      limit: 'For individuals',
      features: ['Feature A', 'Feature B', 'Feature C']
    },
    {
      name: 'Growth',
      price: '$99',
      limit: 'For small teams',
      features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
      highlight: true  // This plan will be highlighted/enlarged
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      limit: 'For large organizations',
      features: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E']
    },
  ],

  TESTIMONIALS: [
    {
      quote: 'A specific, genuine customer quote about how your product helped them',
      author: 'Customer Name',
      role: 'Their Job Title'
    },
    {
      quote: 'Another specific customer quote',
      author: 'Another Name',
      role: 'Another Job Title'
    },
    {
      quote: 'Third customer quote',
      author: 'Third Name',
      role: 'Another Job Title'
    },
  ],
};
```

## Page Sections

The landing page automatically includes these sections:

### **Navigation Bar**
- Fixed sticky navigation with smooth scrolling
- Logo with product name
- Links to: Product, Features, Demo, Pricing, Reviews, FAQ
- Primary CTA button

### **Hero Section**
- Compelling headline and subheading
- Two CTAs: Primary button (large) and secondary action (subtle link)
- App mockup showing desktop and mobile previews

### **Product Overview**
- Section explaining what your product is
- Who it's for and what problem it solves
- How it provides value

### **Features Section**
- Grid layout showing 4 features
- Each feature has an icon, title, and description
- Hover effects for better interactivity

### **Live Preview/Demo Section**
- Tabbed interface with "Overview", "Analytics", "Settings"
- Click tabs to switch between different views
- Shows what users can expect from your product

### **Pricing Section**
- 3 pricing tiers displayed in a card grid
- Monthly/Yearly toggle to show different pricing
- Middle tier is highlighted (set `highlight: true`)
- Each tier shows price, description, and feature list
- Primary CTA button on each card

### **Testimonials Section**
- Grid of customer testimonials
- Avatar placeholder (auto-generated from first letter)
- Customer name and role
- Smooth hover effects

### **FAQ Section**
- 6 common questions pre-filled (edit as needed)
- Simple Q&A format
- Clean, minimal styling
- Focused on onboarding, cancellation, integrations, security

### **Footer**
- Company name and tagline
- Link sections (Product, Resources, Legal)
- Social media buttons
- Copyright notice

## Customization Guide

### Colors
The template uses a neutral slate color palette (`slate-950`, `slate-600`, etc.). To change the accent color:

1. In VS Code, use Find & Replace (Ctrl+H)
2. Find: `slate-950` (for buttons and dark elements)
3. Replace with your brand color (e.g., `blue-950`, `indigo-950`)
4. Find: `slate-600` (for secondary text)
5. Replace with your lighter brand color

### Fonts
The template uses default system fonts (via Tailwind). To change fonts, edit `tailwind.config.js` or add font imports to `src/main.tsx`.

### App Mockups
The mockup areas in the Hero and Demo sections are placeholder grays. Replace with actual screenshots:

1. Take screenshots of your app
2. Convert to base64 or host on your own server
3. Replace the placeholder `<div>` with `<img src="...">` tags

### Custom Sections
You can add additional sections by:

1. Creating a new `<section>` with an `id` attribute
2. Adding a link in the navigation's `scrollToSection` buttons
3. Using the same styling patterns (max-width containers, centered text, etc.)

## FAQ Customization

The FAQ is pre-filled with generic SaaS questions. Edit the questions array around line 285-310 to match your product:

- "How long does it take to get started?"
- "Can I cancel my subscription anytime?"
- "What integrations does [PRODUCT_NAME] support?"
- "Is my data secure?"
- "Do you offer customer support?"
- "Can I import my existing data?"

## Best Practices

1. **One-line pitch:** Keep it clear and specific. Avoid buzzwords like "cutting-edge", "revolutionary", or "synergy".
2. **Features:** Be concrete. Instead of "Powerful", say "Real-time collaboration across 10,000+ users".
3. **Testimonials:** Use specific, genuine quotes. Include what they achieved.
4. **Pricing:** Show clear value. Be specific about limits and included features.
5. **Images:** Replace mockup placeholders with real product screenshots for maximum impact.

## Design Principles

- **Minimal & clean:** Lots of white space, neutral colors
- **Fast interactions:** Smooth transitions under 200ms
- **Responsive:** Works perfectly on mobile, tablet, desktop
- **No fluff:** No fake dashboards, big gradients, or heavy illustrations
- **Quiet confidence:** The design should feel thoughtful, not "salesy"

## Development

- Framework: React + TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React (for Check, ArrowRight icons)
- No external API calls needed - fully static

## Example: Complete Config for a Fictional Product

```javascript
const config = {
  PRODUCT_NAME: 'DataFlow',
  ONE_LINE_PITCH: 'Transform raw data into actionable insights in minutes, not days',
  PRIMARY_BENEFIT: 'DataFlow eliminates manual data preparation, letting your team focus on analysis instead of cleanup',
  TARGET_AUDIENCE: 'Data teams at growing companies',

  FEATURE_1: {
    title: 'Auto-detect schema',
    desc: 'Automatically identifies data types, formats, and relationships'
  },
  FEATURE_2: {
    title: 'Real-time validation',
    desc: 'Spot errors before they hit your analytics pipeline'
  },
  FEATURE_3: {
    title: 'SQL-free transformations',
    desc: 'Visual editor means no coding required'
  },
  FEATURE_4: {
    title: 'Integrations built-in',
    desc: 'Connect Salesforce, Stripe, Intercom, and more'
  },

  PRIMARY_CTA_LABEL: 'Start Free Trial',
  SECONDARY_CTA_LABEL: 'See Demo',

  PRICING_TIERS: [
    {
      name: 'Starter',
      price: '$99',
      limit: 'Up to 10GB/month',
      features: ['Auto schema detection', 'Basic transformations', 'Email support']
    },
    {
      name: 'Professional',
      price: '$399',
      limit: 'Up to 500GB/month',
      features: ['Everything in Starter', 'Real-time validation', 'Custom transformations', 'Priority support', 'Team collaboration'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      limit: 'Unlimited',
      features: ['Everything in Professional', 'Dedicated account manager', 'Custom SLA', 'On-premise option']
    },
  ],

  TESTIMONIALS: [
    {
      quote: 'We went from spending 40% of our time cleaning data to 10%. DataFlow paid for itself in the first month.',
      author: 'Sarah Chen',
      role: 'VP Analytics at TechCorp'
    },
    {
      quote: 'Non-technical team members can now build data pipelines. It\'s incredibly intuitive.',
      author: 'Marcus Johnson',
      role: 'Data Engineering Lead at Startup Inc'
    },
    {
      quote: 'The real-time validation caught a major data issue that would have cost us thousands.',
      author: 'Elena Rodriguez',
      role: 'Data Director at Finance Co'
    },
  ],
};
```

## Support

For questions about customization, refer to the Tailwind CSS docs (styling) or React docs (component logic).
