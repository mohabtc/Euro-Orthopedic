# Euro Orthopedic Design Guidelines

## Design Philosophy
**Core Principle**: Apple's minimalist aesthetic - obsessive attention to detail, premium feel, elegant simplicity. Every element must breathe sophistication, white space, and refined functionality.

## Color Palette
- **Primary Background**: #FFFFFF (pure white)
- **Secondary Background**: #FAFAFA (subtle grey for section variation)
- **Primary Text**: #1d1d1f (near-black)
- **Accent/Links/CTAs**: #0066cc (vibrant blue)
- **Secondary Elements**: #86868b (medium grey)

## Typography
- **Font Family**: Inter (web font via CDN)
- **Headings (H1, H2)**: Inter, font-weight: 600-700, large impactful sizes, slight negative letter-spacing for premium compact look
- **Body Text**: Inter, font-weight: 400, 17-18px on desktop for comfortable reading
- **Principle**: Pristine hierarchy, generous line-height, Apple-like precision

## Iconography
- **Style**: Outline-only SVG icons, minimalist and clean
- **Sources**: High-quality SVG icons for shipping, warranty, carbon fiber, accessibility concepts
- **Treatment**: Consistent stroke width, align with text baseline

## Layout & Spacing
- **Grid System**: Strict, deliberate spacing - never random
- **Spacing Scale**: Use generous 24px+ spacing units
- **White Space**: Extensive breathing room is mandatory - key to premium feel
- **Containers**: Wide margins, purposeful padding creating clean, ordered appearance

## Animations & Interactions
- **Scroll-Triggered Animations**: Primary animation pattern - elements fade in with subtle upward slide as user scrolls (fade-in + slide-up)
- **Timing**: Subtle and elegant, never flashy (0.3s ease transitions)
- **Hover States**: Smooth transitions on all interactive elements (buttons, links)
- **Videos**: Autoplay, loop, muted for background/hero sections
- **Principle**: Enhance experience without distraction, Apple's magic touch

## Component Specifications

### Fixed Header
- Slim bar, white semi-transparent background becoming opaque on scroll
- Left: Euro Orthopedic logo (minimalist text/simple icon)
- Center: Menu links (OrthoCarbon Pro I | Nuestra Filosofía | Soporte)
- Right: Blue pill-shaped CTA button "Solicitar llamada"

### Hero Sections
- **Homepage**: Full-screen autoplay video (cinematic product showcase - carbon fiber macro, urban movement)
- **Sales Page**: Large hero image with massive headline and product shot
- Text overlay: white text on video/dark backgrounds, centered alignment

### Product Showcases
- Sticky product image while descriptive text scrolls and changes
- Studio-lit photography on white/light grey backgrounds
- Macro detail shots showing craftsmanship

### Grid Layouts
- 3-column philosophy grid with macro images + short text
- Benefits carousel/slides with full-screen cards
- Testimonial cards on light grey background

### CTAs & Forms
- **Buttons**: Pill-shaped, blue background (#0066cc), white text
- **Modal Forms**: Centered overlay, darkened background, ultra-clean design
- **Fields**: Name, phone, privacy checkbox with legal link
- **Submit**: "Enviar y recibir llamada" button

### Footer
- Dark background (#1d1d1f), white/light grey text
- Multi-column structure: Productos, La Empresa, Soporte, Legal
- Social media icons, contact information

### Chatbot Widget
- Blue bubble icon, fixed bottom-right corner
- Clean chat window with welcoming automated message
- Rule-based responses for common questions

## Images
**Critical Visual Assets Required:**

1. **Homepage Hero**: Full-screen cinematic video - macro carbon fiber textures, polished wheel metal, joystick details, urban environment shots showing wheelchair movement
2. **Product Hero**: Spectacular studio-lit OrthoCarbon Pro I on white/light grey background
3. **Philosophy Grid**: 
   - Extreme macro: carbon fiber texture
   - Close-up: joystick with perfect lighting
   - Detail shot: folding mechanism precision
4. **Sales Page Images**:
   - Woman lifting folded wheelchair single-handed, smiling
   - 3-second folding animation/video
   - Carbon fiber close-up with "40% lighter" graphic overlay
5. **Pack Libertad**: High-quality product shots of wheelchair, cushion, bag, charger
6. **Media Logos**: Forbes, El País, WIRED, TechCrunch (greyscale)

## Page-Specific Design

### Homepage (/)
- Hero video → Sticky product showcase → 3-column philosophy grid → Media recognition → Footer
- Scroll-driven narrative revealing product features progressively

### Sales Page (/carbon)
- Hero with massive headline + CTA → Problem narrative (scrolling story) → Benefits carousel → Testimonials → Pack offer → Technical specs FAQ → Footer
- Long-form persuasive flow, Apple aesthetic meets conversion psychology

### Thank You Page (/gracias)
- Minimalist: Large checkmark icon, personalized confirmation, call instructions
- Clean, centered layout on white background

### Legal Pages
- Simple text layouts maintaining header/footer consistency
- Readable typography, proper spacing for long-form legal content

## Responsive Behavior
- Mobile: Stack columns, larger touch targets, simplified navigation
- Tablet: 2-column grids where appropriate
- Desktop: Full layout glory with all animations and spacing
- Maintain Apple's attention to typography scaling across breakpoints