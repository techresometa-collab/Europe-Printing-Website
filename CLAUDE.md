# Crafty Printing Website – Claude Reference

## Project Overview
React (Vite) SPA for **Crafty**, a professional printing company based in Portugal serving European clients. Frontend-only (no backend yet). 5 pages, bilingual EN/PT, responsive, light theme.

---

## Site Structure

```
Crafty Printing Website
│
├── / (Home)
│   ├── HeroCarousel       – 4 auto-rotating slides with prev/next arrows + dots
│   ├── Services Preview   – Grid of 4 featured service cards with WhatsApp CTAs
│   ├── Products Carousel  – 10 products in a sliding carousel (arrow + dot nav)
│   └── Footer
│
├── /about (About Us)
│   ├── Page Hero Banner
│   ├── About Business     – Text + studio photo
│   ├── Stats Row          – 15+ yrs | 2000+ clients | 12k+ projects | 98% satisfaction
│   ├── Founder Section    – Photo + bio (João Silva)
│   ├── Vision & Mission   – Two-column cards (blue + gold)
│   ├── Values Grid        – 4 value cards
│   └── Footer
│
├── /services (Services)
│   ├── Page Hero Banner
│   ├── Services Grid      – All 8 services with full details + WhatsApp CTA per card
│   ├── General CTA Banner – "Don't see what you need?" → WhatsApp
│   └── Footer
│
├── /gallery (Gallery)
│   ├── Page Hero Banner
│   ├── Category Filters   – All, Cards, Banners, T-Shirts, Flyers, Packaging, Invitations
│   ├── Image Grid         – 16 items, filterable, click → Lightbox (prev/next/close)
│   └── Footer
│
└── /contact (Contact Us)
    ├── Page Hero Banner
    ├── Business Info      – Phone, Email, Address, Hours + WhatsApp CTA
    ├── Contact Form       – Name, Email, Phone, Service (select), Message
    │                        → submits to Google Apps Script → Google Sheets
    ├── Google Maps Embed
    └── Footer
```

---

## Architecture Graph

```
src/
├── main.jsx               Entry point (createRoot)
├── App.jsx                BrowserRouter + Routes + LanguageProvider + Navbar + LanguageModal
│
├── context/
│   └── LanguageContext.jsx  useState(language) | localStorage | t = translations[lang]
│
├── translations/
│   ├── en.js              All English strings (nav, hero, services, products, about, contact, footer)
│   └── pt.js              All Portuguese strings (mirrors en.js structure exactly)
│
├── data/
│   ├── services.js        8 services: id, name{en,pt}, description{en,pt}, whatsappMsg{en,pt}, etc.
│   ├── products.js        10 products: id, name{en,pt}, price, whatsappMsg{en,pt}
│   └── gallery.js         16 gallery items: id, category, src, thumb, label{en,pt}
│                          + GALLERY_CATEGORIES constant
│
├── components/
│   ├── Icons.jsx          Pure SVG icon components (no external icon library)
│   ├── Navbar.jsx         Fixed navbar: Logo | Nav links (hover underline) | Lang toggle | CTA button
│   │                      Mobile: hamburger → slide-down menu
│   ├── Footer.jsx         4-column: Brand | Quick Links | Services | Contact Info
│   ├── LanguageModal.jsx  First-visit language picker modal (EN 🇬🇧 / PT 🇵🇹)
│   ├── HeroCarousel.jsx   Full-viewport carousel: auto-play 5.5s, arrows, dot indicators
│   ├── ServiceCard.jsx    Card: image + icon + title + description + [details] + WhatsApp btn
│   ├── ProductCarousel.jsx Horizontal sliding carousel with prev/next arrows + dots
│   └── ScrollToTop.jsx    Scrolls to top on route change
│
└── pages/
    ├── Home.jsx           HeroCarousel + Services section + ProductCarousel + Footer
    ├── AboutUs.jsx        Hero + About + Stats + Founder + Vision/Mission + Values + Footer
    ├── Services.jsx       Hero + All ServiceCards (showDetails=true) + CTA banner + Footer
    ├── Gallery.jsx        Hero + Filter buttons + Image grid + Lightbox modal + Footer
    └── ContactUs.jsx      Hero + Info panel + Contact form (GSheets) + Map + Footer
```

---

## Design System

### Colors (CSS Custom Properties – `src/index.css :root`)
| Variable | Value | Usage |
|---|---|---|
| `--color-primary` | `#1A56DB` | **UPDATE when logo received** |
| `--color-primary-hover` | `#1648C9` | Button hover |
| `--color-primary-light` | `#EBF5FF` | Backgrounds, badges |
| `--color-primary-dark` | `#1E3A8A` | Dark areas, hero gradient |
| `--color-secondary` | `#F59E0B` | Accent / hero badge / mission card |
| `--color-whatsapp` | `#25D366` | WhatsApp buttons |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-secondary` | `#F8FAFC` | Alternate section background |
| `--color-text` | `#0F172A` | Body text |
| `--color-text-muted` | `#64748B` | Secondary/muted text |

### Fonts
- **Headings:** Poppins (400–900) – loaded from Google Fonts
- **Body:** Inter (300–700) – loaded from Google Fonts

### Spacing / Layout
- Tailwind CSS for layout, spacing, sizing
- CSS custom properties for ALL color values (no Tailwind color classes)
- `--navbar-height: 72px` – used for page padding and scroll margins

---

## Key Configuration

| File | Purpose |
|---|---|
| `.env` | Local dev env vars (WhatsApp #, Google Script URL, email, address) |
| `.env.example` | Template – commit this, NOT `.env` |
| `public/_headers` | HTTP security headers (Netlify/CF Pages) |
| `public/_redirects` | SPA fallback redirect |

### Environment Variables
```
VITE_GOOGLE_SCRIPT_URL   – Google Apps Script Web App URL for form → Sheets
VITE_WHATSAPP_NUMBER     – WhatsApp number without + (e.g. 351912345678)
VITE_BUSINESS_EMAIL      – Shown on contact page + footer
VITE_BUSINESS_PHONE      – Display format (+351 ...)
VITE_BUSINESS_ADDRESS    – Full address string
VITE_MAPS_EMBED_URL      – Google Maps iframe src URL
```

---

## To-Do / Customisation Checklist

- [ ] Replace business name "Crafty" → actual name (global search & replace)
- [ ] Update `--color-primary` and variants in `src/index.css :root` when logo is received
- [ ] Replace placeholder images with real product/studio photos
- [ ] Update `VITE_WHATSAPP_NUMBER` with the real business number
- [ ] Set up Google Apps Script (see comment at top of `src/pages/ContactUs.jsx`)
- [ ] Fill `VITE_GOOGLE_SCRIPT_URL` in `.env`
- [ ] Update founder name, bio, photo in `src/translations/en.js` and `pt.js`
- [ ] Update business stats in `src/pages/AboutUs.jsx` (STATS constant)
- [ ] Update `VITE_MAPS_EMBED_URL` with actual business location
- [ ] Add social media links in `src/components/Footer.jsx`
- [ ] Add `public/og-image.jpg` (1200×630px) for social sharing preview

---

## Security Measures Implemented
1. **Input sanitisation** – strips `<>` and control characters, hard-caps at 2000 chars
2. **Client-side validation** – name, email (regex), message (min length) with ARIA error messages
3. **No `dangerouslySetInnerHTML`** anywhere
4. **WhatsApp URLs** – all messages are `encodeURIComponent()`-encoded
5. **localStorage** – only accepts `'en'` or `'pt'`, guards against injection
6. **HTTP security headers** – X-Frame-Options, CSP, CORS, XSS protection
7. **`rel="noopener noreferrer"`** on all `target="_blank"` links
8. **env variables** – sensitive config kept in `.env`, never in source
9. **Google Apps Script** – no API key in browser, form posts to script URL
10. **`maxLength`** on all form inputs

---

## Running Locally
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Building for Production
```bash
npm run build
# Output: dist/
```
