# Domain Powers - Official Corporate Website (Next.js Hybrid)

[![Industrial Engineering](https://img.shields.io/badge/Engineering-Industrial%20Power-E31E24)](https://domainpowers.in)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20(App%20Router)%20%2B%20React%2019%20%2B%20Framer%20Motion-black)](https://nextjs.org)

A high-performance, SEO-optimized web application for **Domain Powers**, India's leading manufacturer of Automatic Power Factor Correction (APFC) panels. This project was migrated from a Vite-based single-page application to a modern Next.js 15+ structure using the App Router.

---

## 🏗️ Architecture & Core Components

- **Frontend:** Next.js (App Router) for Server-Side Rendering (SSR) and Client-Side dynamic features.
- **Styling:** Modular Vanilla CSS with a centralized global design system (`src/app/globals.css`).
- **Animations:** Advanced scroll-reveal and micro-interactions powered by `framer-motion`.
- **Navigation:** Intelligent sticky Navbar with a categorized **Mega Dropdown** using Next.js client-side routing.
- **Data Management:** Hybrid approach using local JSON data for products and Sanity CMS for engineering insights (blog).

## ✨ Key Features

- **Technical Product Catalogue:** Comprehensive listing of specialized industrial solutions including LT/HT APFC Panels, Hybrid SVG Systems, and Motor Control Centers.
- **Next.js Metadata API:** Fully optimized SEO metadata for all pages, enhancing search engine visibility for industrial engineering keywords.
- **Industrial Design System:** A precise Red (#E31E24), Carbon Black (#0F0F0F), and Pure White palette reflecting corporate identity.
- **Technical Excellence Section:** High-contrast display of core engineering capabilities (Thyristor switching, RS-485/GSM monitoring).
- **Responsive Engineering:** Fully optimized for Mobile, Tablet, and Desktop with specific industrial grid layouts.
- **Engineering Blog (Sanity CMS):** A dedicated section for technical case studies and industrial insights managed through headless CMS.

## 🚀 Technical Implementation Details

### Next.js Migration
- Transitioned from `react-router-dom` to Next.js App Router.
- Assets consolidated in the `public/public` directory for optimized delivery.
- Component-level hydration using `'use client'` for interactive elements like sliders and animations.

### Asset Optimization
- Filenames sanitized to use underscores for reliable loading across all browsers and server environments.
- Modularized global styles to ensure consistent design across server-rendered pages.

## 📁 Project Structure

```bash
/
├── public/assets/      # Official branding and high-res technical renders
├── src/
│   ├── app/            # Next.js App Router (Layouts, Pages, Styles)
│   ├── components/     # Modular UI components (Navbar, Stats, Hero)
│   ├── data/           # Centralized product and service definitions
│   └── lib/            # Sanity CMS client and utility functions
├── sanity-studio/      # Local Sanity CMS studio for blog content management
└── package.json        # Next.js scripts and technical dependencies
```

## 🛠️ Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Local Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Start Production Server:**
   ```bash
   npm run start
   ```

---

*Precision-engineered by Domain Powers Technical Team. Migrated to Next.js for superior performance and SEO.*
