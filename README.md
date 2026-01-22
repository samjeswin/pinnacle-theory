# Pinnacle Theory - Professional Finance Website

A complete, professional multi-page website for Pinnacle Theory, a premium finance company specializing in property loans and insurance services.

## 🚀 Features

- **Multi-page Website**: Home, About, Services, Partners, Contact, Privacy, Terms
- **Premium UI/UX**: Finance-grade design with Deep Blue, Gold, and White color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Animated counters
  - EMI Calculator
  - Testimonials slider
  - Partner banks carousel
  - Smooth scroll animations
  - Hover effects and micro-interactions
- **Contact Form**: Integrated with FormSubmit (free email service)
- **Google Maps**: Embedded map for location
- **Sticky CTA Buttons**: Quick access to Apply, WhatsApp, and Call

## 📁 Project Structure

```
/pinnacle-theory
├── index.html          # Home page (Landing page)
├── about.html          # About Us page
├── services.html       # Services page
├── partners.html       # Partner Banks page
├── contact.html        # Contact page with form
├── privacy.html        # Privacy Policy
├── terms.html          # Terms & Conditions
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
└── images/
    ├── logo.png        # Company logo (add your logo here)
    ├── banks/          # Bank logos (optional)
    └── icons/          # Icon images (optional)
```

## 🎨 Design Features

- **Color Palette**: Deep Blue (#001f5f), Gold (#d4af37), White
- **Typography**: Modern, clean sans-serif fonts
- **Animations**: Smooth fade-in, scroll animations, hover effects
- **Glassmorphism**: Modern card designs with shadows
- **Preloader**: Professional loading animation

## 📱 Pages Overview

### Home Page (index.html)
- Hero section with CTAs
- Animated counters (Happy Customers, Loans Disbursed, etc.)
- Why Choose Us section
- Services overview
- Loan process timeline
- EMI Calculator
- Testimonials slider
- Partner banks carousel

### About Page (about.html)
- Company introduction
- Vision & Mission
- Core values
- Trust & transparency
- Corporate storytelling

### Services Page (services.html)
- Property Loans (Home Loan, LAP, Balance Transfer, Top-Up)
- Insurance (Life, Health, General)
- Detailed eligibility and documents
- Service benefits

### Partners Page (partners.html)
- All partner banks and NBFCs
- Benefits of partnerships
- How it works

### Contact Page (contact.html)
- Contact form (sends to samjeswin9821@gmail.com)
- Contact information
- Google Maps embed
- FAQ section

## 🔧 Setup Instructions

1. **Add Logo**: Place your logo image as `images/logo.png`
   - Recommended size: 200x200px or larger
   - Format: PNG with transparent background

2. **Update Contact Information**:
   - Edit phone numbers in `contact.html` and `js/script.js`
   - Update WhatsApp number in `js/script.js` (function `openWhatsApp()`)
   - Update email addresses if needed

3. **Google Maps**:
   - The map is currently set to Mumbai, Maharashtra
   - To change location, update the iframe src in `contact.html`
   - Get embed code from: https://www.google.com/maps

4. **Contact Form**:
   - Currently uses FormSubmit (free service)
   - Form submissions go to: samjeswin9821@gmail.com
   - No additional setup required

5. **Bank Logos** (Optional):
   - Add bank logo images to `images/banks/` folder
   - Update HTML to use actual images instead of placeholders

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #001f5f;
    --deep-blue: #003366;
    --gold: #d4af37;
    /* ... */
}
```

### Content
- All content is in HTML files - easy to edit
- Update text, numbers, and information as needed
- Modify counter targets in `index.html` (data-target attribute)

### JavaScript
- EMI Calculator: Fully functional
- Form submission: Uses FormSubmit API
- Animations: Intersection Observer API
- All code is commented for easy understanding

## 🚀 Deployment

1. Upload all files to your web hosting
2. Ensure folder structure is maintained
3. Test all pages and forms
4. Verify contact form submission
5. Check mobile responsiveness

## 📧 Contact Form Setup

The contact form uses FormSubmit (free service):
- No API keys required
- Sends emails to: samjeswin9821@gmail.com
- Works immediately after deployment
- Alternative: Can be switched to EmailJS if preferred

## ⚠️ Important Notes

- Replace placeholder phone numbers with actual numbers
- Add actual logo image to `images/logo.png`
- Update Google Maps location if needed
- Test all forms before going live
- Ensure all links work correctly

## 📄 License

This website is created for Pinnacle Theory. All rights reserved.

## 🆘 Support

For any issues or questions:
- Email: samjeswin9821@gmail.com
- Check code comments for guidance
- Review browser console for errors

---

**Built with**: HTML5, CSS3, JavaScript (Vanilla)
**No frameworks or libraries required** - Pure, clean code!
