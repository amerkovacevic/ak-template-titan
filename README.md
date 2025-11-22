# Titan Construction

A professional, robust construction company website template built with React, Vite, and TailwindCSS.

**Best for:** Construction companies, contractors, builders, renovation specialists

## What makes it different:

- **Interactive before/after project slider** with drag-to-compare functionality
- **Detailed case study modals** for each project
- **Comprehensive services grid** with feature lists
- **Trust-focused guarantee blocks** (Quality, On-Time, Budget, Warranty)
- **Certification badges** showcasing credentials and accreditations
- **Professional quote CTA** with multiple contact options
- **Deep charcoal backgrounds** with yellow accent buttons
- **Robust grid layouts** for portfolio and services
- **Fully responsive design** optimized for all devices
- **Professional trust-focused styling** throughout

**Style:** Bold, professional, trust-focused with deep charcoal backgrounds and vibrant yellow accents

## Features

- ✅ React 18 with Vite for fast development
- ✅ TailwindCSS for styling
- ✅ Interactive before/after image slider
- ✅ Project portfolio with case study details
- ✅ Services showcase with guarantee blocks
- ✅ Certification badges section
- ✅ Quote request modal form
- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Accessible navigation
- ✅ SEO-friendly structure

## Getting Started

### Installation

1. Navigate to the template directory:
```bash
cd ak-template-titan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Customization

### Colors

The template uses deep charcoal backgrounds and yellow accent colors. You can customize these in `tailwind.config.js`:

```js
colors: {
  charcoal: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
    dark: '#0f0f0f',
  },
  yellow: {
    accent: '#FFD700',
    'accent-dark': '#FFC107',
    'accent-light': '#FFE082',
  },
}
```

### Content

Update the content in `src/data.js`:
- Projects (with before/after images, descriptions, features)
- Services (with descriptions and feature lists)
- Certifications (badges and descriptions)
- Guarantees (trust indicators)

### Images

Replace placeholder images with your own. The template uses Unsplash images as placeholders. Update the image URLs in:
- `src/data.js` (project before/after images)
- `src/components/Hero.jsx` (hero background)

### Contact Information

Update contact details in:
- `src/components/Header.jsx` (phone, email)
- `src/components/Footer.jsx` (address, hours, contact info)
- `src/components/QuoteCTA.jsx` (contact options)

## Components

- **Header**: Fixed navigation with mobile menu
- **Hero**: Full-screen hero with stats and CTAs
- **ProjectPortfolio**: Interactive before/after slider with project details
- **CaseStudy**: Detailed project case study modal
- **Services**: Services grid with guarantee blocks
- **Certifications**: Certification badges and trust indicators
- **QuoteCTA**: Call-to-action section with contact options
- **Footer**: Comprehensive footer with links and contact info
- **QuoteModal**: Quote request form modal

## Deployment

The template is configured for Firebase Hosting. To deploy:

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

Make sure you have Firebase CLI installed and are logged in.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See LICENSE file for details.
