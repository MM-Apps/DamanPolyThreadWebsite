# Daman Polythread — Modern B2B Website Redesign Concept

A modern, high-performance B2B manufacturing website concept for **Daman Polythread Ltd.**, an established Indian manufacturer and global exporter of high-tenacity polypropylene multifilament yarn, industrial bag closing thread, and narrow woven technical webbings.

---

## 1. Visual Design System

* **Brand Direction:** Confident, technical, established industrial manufacturing aesthetic.
* **Color Palette:**
  * **Primary (Industrial Navy):** `#10243A`
  * **Manufacturing Gold (Accent):** `#D9A441`
  * **Base (Soft White):** `#F3F5F7`
  * **Surface (Pure White):** `#FFFFFF`
  * **Secondary Text (Slate Gray):** `#586575`
* **Typography:**
  * **Headings:** Manrope (Weights: 600, 700, 800)
  * **Body:** Inter (Weights: 400, 500, 600)
* **Design Principles:**
  * Grounded in authentic manufacturing data and authentic product imagery.
  * Direct, prominent B2B calls-to-action (Request for Quotation / Sample Spool Requests).
  * 100% responsive across desktop, tablet, and mobile breakpoints.

---

## 2. Technology Stack

* **Frontend:** React 19 + TypeScript
* **Build Tool:** Vite 8
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
* **Routing:** React Router v7 (`react-router-dom`)
* **Icons:** Lucide React
* **Testing:** Vitest
* **Deployment Target:** Static build on cPanel / Apache shared hosting

---

## 3. Page Structure

1. **Home (`/`):** Hero section with authentic capacity statistics (10,000 MT/year), core product category showcase, in-house manufacturing capabilities (Spinning, Texturizing, Twisting, Winding, Needle Looms), industries served, and quality testing lab overview.
2. **Products & Specs (`/products`):** Interactive product line selector, technical parameter tables (Denier range 200–6,000, Tenacity up to 8.0 g/d, raw materials, plys), salient features, and authentic application galleries.
3. **About & Infrastructure (`/about`):** Corporate milestones (Pioneered HT PPMF yarn in India in 2000; commissioned 8th spinning line in 2014), corporate mission & vision, authentic factory photo tour, and dual-hub presence (Mumbai Commercial HQ + Daman Manufacturing Plant).
4. **Contact & RFQ (`/contact`):** Interactive request for quotation & sample request form with client-side validation, direct Mumbai and Daman plant addresses, telephone numbers, and email routing.

---

## 4. Local Development

### Prerequisites
* Node.js v18+ (tested on Node.js v26.8.1)
* npm v9+

### Commands

```bash
# Navigate to the Proposed directory
cd Proposed

# Install dependencies
npm install

# Start local development server (HMR enabled)
npm run dev

# Run automated tests
npm test

# Build production-ready static assets
npm run build

# Preview production build locally
npm run preview
```

The production output is generated in `dist/`.

---

## 5. Deployment Procedure (cPanel / Apache Hosting)

1. Run the production build:
   ```bash
   npm run build
   ```
2. Open your hosting control panel (cPanel File Manager) or connect via SFTP.
3. Upload the **contents** of `Proposed/dist/` into your web document root (typically `public_html/` or a subdomain folder like `preview.yourdomain.com/`).
4. Ensure the `.htaccess` file from `dist/.htaccess` is uploaded into the same root folder to handle React Router client-side routing:

```apache
Options -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ index.html [L]
```

5. Test direct navigation and refreshing on `/`, `/products`, `/about`, and `/contact`.

---

## 6. Pre-Meeting Pitch Strategy

* **Positioning:** Present this website as an independent redesign concept to demonstrate digital capabilities and explore commercial requirements.
* **Integrity:** All technical specifications (denier ranges, tenacity, trademarks, factory capacity) are derived from authentic company publications.
* **Original Live Site:** Kept completely untouched in `Current/`.
