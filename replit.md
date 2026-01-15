# Euro Orthopedic - OrthoCarbon Pro I Marketing Website

## Overview

A sophisticated multi-page web experience for Euro Orthopedic's OrthoCarbon Pro I electric wheelchair. Designed with a minimalist, Apple-inspired philosophy, the site features choreographed scroll-triggered animations, contact modals, a rule-based chatbot assistant, a thank-you page, and legal pages. The project emphasizes premium aesthetics, generous white space, and a fluid user experience, aiming to be the best website in its category.

## User Preferences

**Communication Style:** Lenguaje simple y cotidiano  
**Design Philosophy:** Estética minimalista inspirada en Apple con obsesiva atención al detalle

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for UI
- Vite for building and development
- Wouter for client-side routing
- React Query for server state management

**UI Component System:**
- Shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom theming
- Inter font family (400, 600, 700 weights)
- Custom CSS variables for theming

**Design System:**
- **Color Palette:** Euro Blue (#0066cc) for primary actions, near-black (#1d1d1f) for text, pure white (#FFFFFF) and subtle grey (#FAFAFA) for backgrounds, accent grey (#86868b) for secondary text.
- **Typography:** Inter font, 16px base size, clear hierarchy.
- **Spacing:** Generous white space using 24px+ units.
- **Animations:** Scroll-activated fade-in and slide-up effects with 0.3s-0.8s ease transitions.
- **Icons:** Lucide React for outline SVG icons.

**State Management:**
- React Query for asynchronous server state.
- React hooks (useState, useEffect, useRef) for local component state.
- React Hook Form with Zod validation for form state.
- Intersection Observer API for scroll-triggered animations.

**Animation System:**
- **IntersectionObserver:** Used across main pages with thresholds (0.15-0.2) and root margins ("0px 0px -80px 0px") for optimal activation.
- **Timing Functions:** cubic-bezier(0.4, 0, 0.2, 1) for smooth transitions.
- **Choreographed Delays:** 100ms, 150ms, 200ms, 250ms, 300ms, 400ms, 500ms, 700ms.
- **Custom Keyframes:** `fadeInUp`, `fadeIn`, `scaleIn`, `modalSlideIn`, `modalFadeIn`.

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript.
- RESTful API design for contact form submissions and chatbot interactions.

**API Endpoints:**
- `POST /api/contact`: Handles contact form submissions with Zod validation.
- `POST /api/chatbot`: Provides rule-based chatbot responses to keywords (e.g., peso, carbon, plegar, pack, garantía, batería, precio).

**Data Validation:**
- Zod schemas for runtime type validation.
- Drizzle-zod integration for database schema validation.

### Data Storage

**Current Implementation:**
- In-memory storage (`MemStorage`) for development, with an `IStorage` interface for future interchangeability.

**Schema Design (shared/schema.ts):**
- Tables include `users` (id, username, password) and `contact_submissions` (id, name, phone, createdAt).
- UUIDs for primary keys, auto-generated timestamps.

## Application Pages

- **Homepage (`/`):** Hero section with video, product showcase, philosophy grid, media recognition, and expert validation with video testimonials.
- **Sales Page (`/carbon`):** Key page with a compelling hero, problem narrative, a "Traditional vs. OrthoCarbon Pro I" comparison section, benefits carousel, customer testimonials, "Pack Libertad Total" offer, and an FAQ accordion.
- **Thank You Page (`/gracias?name={name}`):** Personalized confirmation with next steps and contact information.
- **Legal Pages:** `/privacidad`, `/terminos`, `/envios` for privacy policy, terms and conditions, and shipping/returns policy.

## Key Components

- **Header:** Fixed position, logo, navigation links, primary "Solicitar llamada" CTA (opens contact modal), scroll-based opacity transition, backdrop blur.
- **Footer:** Company info, product links, social icons, legal links, contact info, responsive grid.
- **Contact Modal:** Two-field form (Name, Phone), privacy policy checkbox, Zod validation with React Hook Form, API submission (`/api/contact`), loading state, error handling, redirects to thank you page on success, custom `modalSlideIn` animation.
- **Chatbot Widget:** Fixed bottom-right position, opens with welcome message, rule-based responses via `/api/chatbot`, loading state, error handling, `scaleIn` animation for opening.

## External Dependencies

- **UI Component Libraries:** Radix UI, Shadcn/ui, Lucide React.
- **Styling & Design:** Tailwind CSS, class-variance-authority, clsx, tailwind-merge.
- **Form Management:** React Hook Form, @hookform/resolvers, Zod.
- **Database & ORM (Future):** Drizzle ORM, @neondatabase/serverless, drizzle-zod.
- **Build & Development Tools:** Vite, esbuild, tsx, PostCSS, Autoprefixer.