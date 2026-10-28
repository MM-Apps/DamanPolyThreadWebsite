# Daman Polythread Proposed Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance, premium B2B manufacturing website concept for Daman Polythread in `Proposed/` using React, Vite, TypeScript, Tailwind CSS, and React Router, utilizing authentic assets from `Current/` without altering `Current/`.

**Architecture:** Client-side React 19 SPA configured with Vite and Tailwind CSS. Structured data objects (`src/data/products.ts`, `src/data/company.ts`) drive presentational components (`SiteHeader`, `SiteFooter`, `ProductCard`, `ProductGrid`, `CapabilitySection`, `ContactForm`). Production builds to static `dist/` ready for cPanel/Apache deployment with `.htaccess`.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS v4 / v3, React Router v7 / v6, Lucide React, Vitest.

**Spec:** `DAMAN_POLYTHREAD_REDESIGN_PLAN.md` and `C:\Users\mm\AppData\Local\Temp\handoff-damanpolythread-website.md`

## Global Constraints

- Never modify anything in `Current/`.
- All development and build artifacts must reside inside `Proposed/`.
- Colors: Primary Industrial Navy (`#10243A`), Soft White (`#F3F5F7`), Manufacturing Gold (`#D9A441`), Pure White (`#FFFFFF`), Slate Gray (`#586575`).
- Typography: Manrope for headings and Inter for body text.
- Commit frequently in small, logical, self-contained chunks after every verified milestone.
- Product information, denier ranges, tenacity, and certifications must be authentic to Daman Polythread's actual operations.

## Review Focus

1. **Routing and Refresh Behavior**: Direct refresh on `/products`, `/about`, `/contact` must resolve cleanly via `.htaccess` in production and Vite dev server in local testing.
2. **Asset Path Resolution**: All authentic images copied from `Current/` into `Proposed/public/images/` must resolve properly with relative paths and correct aspect ratios.
3. **Data Accuracy**: Technical specifications (PP Multifilament Yarn, Bag Closing Thread, Non-Woven Fabrics) must accurately reflect the mirror content without invented data.
4. **Responsive Layouts**: Header navigation, product grids, technical spec tables, and contact form must adapt gracefully across mobile (375px), tablet (768px), and desktop (1280px+).
5. **Interactive Prototype States**: Contact/RFQ form must provide clear user feedback, client-side validation, and prototype state indicator without broken network submissions.

---

### Task 1: Project Scaffolding, Design Tokens & Foundation

**Files:**
- Create: `Proposed/package.json`
- Create: `Proposed/tsconfig.json`
- Create: `Proposed/tsconfig.app.json`
- Create: `Proposed/tsconfig.node.json`
- Create: `Proposed/vite.config.ts`
- Create: `Proposed/index.html`
- Create: `Proposed/src/main.tsx`
- Create: `Proposed/src/App.tsx`
- Create: `Proposed/src/styles/index.css`
- Create: `Proposed/public/.htaccess`

**Interfaces:**
- Produces: Base Vite + React + TypeScript + Tailwind application running locally and compiling cleanly to `dist/`.

- [ ] **Step 1: Initialize Vite React TypeScript project inside `Proposed/`**
- [ ] **Step 2: Install dependencies (`react-router-dom`, `lucide-react`, Tailwind CSS packages)**
- [ ] **Step 3: Configure Tailwind design tokens (Industrial Navy `#10243A`, Gold `#D9A441`, Soft White `#F3F5F7`, Slate Gray `#586575`, Manrope/Inter fonts)**
- [ ] **Step 4: Create base HTML shell with Google Fonts and meta tags**
- [ ] **Step 5: Verify build succeeds (`npm run build`)**
- [ ] **Step 6: Commit changes**

```bash
git add Proposed/
git commit -m "feat(proposed): scaffold React TypeScript Vite foundation with design tokens"
```

---

### Task 2: Asset Migration & Authentic Data Modeling

**Files:**
- Create: `Proposed/public/images/logo.png`
- Create: `Proposed/public/images/products/*`
- Create: `Proposed/public/images/factory/*`
- Create: `Proposed/public/images/infra/*`
- Create: `Proposed/src/types/index.ts`
- Create: `Proposed/src/data/products.ts`
- Create: `Proposed/src/data/company.ts`

**Interfaces:**
- Consumes: Static imagery from `Current/`
- Produces: Strongly typed data models:
  - `Product`: id, name, slug, category, shortDescription, fullDescription, specifications (denier, tenacity, filaments, colors), applications, features, image
  - `CompanyInfo`: name, taglines, stats, milestones, infrastructure, certifications, addresses, contacts

- [ ] **Step 1: Copy authentic images from `Current/` into organized folders in `Proposed/public/images/`**
- [ ] **Step 2: Define TypeScript interfaces in `Proposed/src/types/index.ts`**
- [ ] **Step 3: Extract authentic product data from `Current/DamanPolyThreadCurrent/damanpolythread.com/en/*.html` into `src/data/products.ts`**
- [ ] **Step 4: Extract authentic company profile, history, infrastructure, and contact info into `src/data/company.ts`**
- [ ] **Step 5: Verify types and compilation (`npm run build`)**
- [ ] **Step 6: Commit changes**

```bash
git add Proposed/public/images/ Proposed/src/types/ Proposed/src/data/
git commit -m "feat(proposed): migrate authentic assets and create typed data models"
```

---

### Task 3: Core UI Primitives & Layout Components

**Files:**
- Create: `Proposed/src/components/ui/Button.tsx`
- Create: `Proposed/src/components/ui/SectionHeading.tsx`
- Create: `Proposed/src/components/ui/Badge.tsx`
- Create: `Proposed/src/components/layout/SiteHeader.tsx`
- Create: `Proposed/src/components/layout/SiteFooter.tsx`
- Create: `Proposed/src/components/layout/Layout.tsx`

**Interfaces:**
- Consumes: `src/data/company.ts`, `lucide-react`
- Produces:
  - `Button`: variant ('primary' | 'secondary' | 'outline' | 'gold'), size, href/onClick, icon
  - `SectionHeading`: eyebrow, title, subtitle, centered/left
  - `SiteHeader`: responsive navigation bar, mobile menu drawer, active route indicators, Quote CTA button
  - `SiteFooter`: company summary, quick links, product catalog links, contact details, copyright

- [ ] **Step 1: Build `Button`, `Badge`, and `SectionHeading` components**
- [ ] **Step 2: Build `SiteHeader` with desktop navigation, mobile drawer toggle, and Quote CTA**
- [ ] **Step 3: Build `SiteFooter` with authentic contact details, office addresses, and ISO credentials**
- [ ] **Step 4: Create `Layout` wrapper component incorporating Header and Footer**
- [ ] **Step 5: Verify build compiles cleanly**
- [ ] **Step 6: Commit changes**

```bash
git add Proposed/src/components/
git commit -m "feat(proposed): implement reusable UI primitives and SiteHeader/SiteFooter layout"
```

---

### Task 4: Product Cards, Grid & Specialized Components

**Files:**
- Create: `Proposed/src/components/products/ProductCard.tsx`
- Create: `Proposed/src/components/products/ProductGrid.tsx`
- Create: `Proposed/src/components/products/SpecTable.tsx`
- Create: `Proposed/src/components/home/HeroSection.tsx`
- Create: `Proposed/src/components/home/CapabilitiesSection.tsx`
- Create: `Proposed/src/components/home/QualityBanner.tsx`
- Create: `Proposed/src/components/ui/QuoteCTA.tsx`

**Interfaces:**
- Consumes: `Product`, `CompanyInfo`, `Button`, `SectionHeading`
- Produces: Interactive and presentational components for the homepage and product catalog.

- [ ] **Step 1: Build `ProductCard` with hover elevation, key specs pills, category badge, and detail link**
- [ ] **Step 2: Build `ProductGrid` with filter by category (All, PP Yarn, Bag Closing Thread, Non-Woven)**
- [ ] **Step 3: Build `SpecTable` for clear industrial specification display (denier, tenacity, elongation, etc.)**
- [ ] **Step 4: Build Homepage `HeroSection` with bold industrial typography, hero badges, quick enquiry CTAs, and background styling**
- [ ] **Step 5: Build `CapabilitiesSection` showcasing spinning, texturizing, twisting, winding, and needle punching**
- [ ] **Step 6: Build `QualityBanner` and reusable `QuoteCTA` banner**
- [ ] **Step 7: Verify build succeeds**
- [ ] **Step 8: Commit changes**

```bash
git add Proposed/src/components/
git commit -m "feat(proposed): implement product grid, spec tables, hero, and capability sections"
```

---

### Task 5: Pages Implementation & React Router Integration

**Files:**
- Create: `Proposed/src/pages/HomePage.tsx`
- Create: `Proposed/src/pages/ProductsPage.tsx`
- Create: `Proposed/src/pages/AboutPage.tsx`
- Create: `Proposed/src/pages/ContactPage.tsx`
- Modify: `Proposed/src/App.tsx`

**Interfaces:**
- Consumes: All UI, layout, and domain components; React Router DOM
- Produces: 4 full responsive pages:
  - `/`: Home (Hero, Product Highlights, Manufacturing Capabilities, Industries, Quality Assurance, Quote CTA)
  - `/products`: Products Catalog (Category Filter, Detailed Specs, Applications, Download Data Sheet CTA)
  - `/about`: About Us (Company Profile, Mission, Infrastructure Tour, Machinery, ISO Standards, Global Reach)
  - `/contact`: Contact & RFQ (Direct Contact Details, Plant Location, Interactive RFQ/Sample Request Form)

- [ ] **Step 1: Implement `HomePage.tsx` integrating all hero and showcase sections**
- [ ] **Step 2: Implement `ProductsPage.tsx` with dynamic category filtering and technical specifications**
- [ ] **Step 3: Implement `AboutPage.tsx` detailing infrastructure, plant machinery, quality lab, and certifications**
- [ ] **Step 4: Implement `ContactPage.tsx` with interactive enquiry form, product selection, and location details**
- [ ] **Step 5: Connect all routes in `App.tsx` with ScrollToTop on navigation**
- [ ] **Step 6: Verify build succeeds**
- [ ] **Step 7: Commit changes**

```bash
git add Proposed/src/pages/ Proposed/src/App.tsx
git commit -m "feat(proposed): implement Home, Products, About, and Contact pages with client routing"
```

---

### Task 6: Testing, Responsive Verification & Deployment Prep

**Files:**
- Create: `Proposed/tests/navigation.spec.ts` (or unit test `src/data/products.test.ts`)
- Create: `Proposed/public/.htaccess`
- Create: `Proposed/README.md`

**Interfaces:**
- Produces:
  - Fully verified application tested in dev and production build modes
  - Clean `.htaccess` rewrite configuration for Apache/cPanel
  - Setup and deployment documentation in `Proposed/README.md`

- [ ] **Step 1: Test dev server launch and verify page rendering and client-side navigation**
- [ ] **Step 2: Verify responsive layouts across mobile (375px), tablet (768px), and desktop (1280px)**
- [ ] **Step 3: Run production build `npm run build` and verify `dist/` bundle**
- [ ] **Step 4: Test preview mode `npm run preview`**
- [ ] **Step 5: Write `Proposed/README.md` with build, run, and cPanel deployment instructions**
- [ ] **Step 6: Final verification and commit**

```bash
git add Proposed/
git commit -m "feat(proposed): add .htaccess, deployment documentation, and verify production build"
```
