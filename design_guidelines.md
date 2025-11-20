# Design Guidelines: Build & Sell Apps on Whop Documentation

## Design Approach
**Reference-Based:** Notion-style documentation aesthetic with clean, minimal design patterns from Linear and Stripe for visual refinement.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- Background: 0 0% 100% (pure white)
- Surface: 240 20% 98% (soft off-white)
- Sidebar: 245 25% 97% (subtle blue-gray tint)
- Primary: 245 70% 62% (pastel blue for CTAs and links)
- Secondary: 270 65% 70% (soft purple for accents)
- Text Primary: 240 10% 15% (near black)
- Text Secondary: 240 6% 45% (medium gray)
- Border: 240 10% 90% (light gray)
- Code Block BG: 245 30% 95% (light blue-gray)

**Gradient Accents:**
- Hero/Section: 245 70% 92% → 270 60% 94% (pastel blue to purple)
- Hover States: 245 65% 88% → 270 55% 90%

### B. Typography
- **Font Family:** Inter (primary) with Poppins (headings)
- **Headings:** Poppins, font-semibold to font-bold
  - H1: text-4xl md:text-5xl, leading-tight
  - H2: text-3xl md:text-4xl, leading-snug
  - H3: text-2xl, leading-normal
- **Body:** Inter, text-base, leading-relaxed
- **Code/Prompts:** Font mono, text-sm

### C. Layout System
**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24

**Grid Structure:**
- Desktop: Fixed sidebar (280px) + main content (max-w-4xl mx-auto)
- Tablet: Collapsible sidebar with overlay
- Mobile: Full-width with hamburger menu

**Containers:**
- Content sections: px-6 md:px-12, py-12 md:py-20
- Code blocks: p-4 md:p-6, rounded-xl
- Cards: p-6, rounded-2xl

### D. Component Library

**Sidebar Navigation:**
- Fixed position on desktop (h-screen, overflow-y-auto)
- Sticky header with logo/brand
- Section groups with subtle dividers
- Active state: bg-primary/10, border-l-4 border-primary
- Hover: bg-surface transition-colors

**Content Cards:**
- Rounded-2xl, border border-border
- Subtle shadow: shadow-sm hover:shadow-md transition
- White background with optional gradient overlays
- Generous padding (p-6 md:p-8)

**Copy-to-Clipboard Elements:**
- Positioned absolute top-4 right-4 within code blocks
- Icon button with bg-white/80 backdrop-blur-sm
- Success state: green checkmark with fade animation
- Smooth hover scale: hover:scale-105

**Code/Prompt Blocks:**
- Monospace font on pastel background
- Syntax highlighting with muted colors
- Border-l-4 with color-coded borders (blue for prompts, purple for code)
- Pre-wrap text for readability

**Step Cards:**
- Large emoji/icon on the left (text-4xl)
- Title, description, and action elements
- Progress indicator or step number
- CTA button at bottom

**Buttons:**
- Primary: bg-primary, text-white, rounded-lg, px-6 py-3
- Secondary: border-2 border-primary, text-primary with backdrop-blur if over images
- Hover: subtle lift (hover:-translate-y-0.5) and brightness increase

### E. Animations
**Minimal & Purposeful:**
- Smooth scrolling: scroll-behavior: smooth
- Fade-in on scroll for content cards (opacity + translateY)
- Copy button success animation (scale + opacity)
- Sidebar toggle: slide-in/out transition
- Hover states: 200ms ease-in-out transitions
- NO decorative animations or unnecessary motion

## Page-Specific Guidelines

**Hero Section:**
- Full-width gradient background (pastel blue-purple)
- Centered content, max-w-3xl
- Large heading (text-5xl md:text-6xl) in Poppins
- Subtitle with feature highlights
- Primary CTA ("Start Building") and secondary ("Watch Demo")
- Decorative element: subtle grid pattern or geometric shapes

**Documentation Content:**
- Clear hierarchy with H2 for main steps
- Inline code styling for technical terms
- Step-by-step numbered progression
- Resource links with hover underline
- Generous whitespace between sections

**Footer:**
- Simple, centered layout
- "Made by [Name]" with social links
- Resource quick links
- Subtle top border only

## Images
- **Hero Section:** Abstract illustration of app building/coding workflow (pastel color scheme matching brand) positioned on right side of hero content
- **Step Cards:** Icon-style illustrations for each step (lightbulb for ideas, code brackets for building, cloud for hosting, money/cart for selling)
- **Background Elements:** Subtle dotted grid pattern or geometric shapes in very light opacity

## Responsive Behavior
- **Desktop (1024px+):** Fixed sidebar, spacious content
- **Tablet (768-1023px):** Overlay sidebar, adjusted spacing
- **Mobile (<768px):** Hamburger menu, stacked layout, full-width cards, larger touch targets (min-h-12 for buttons)

## Accessibility
- WCAG AA contrast ratios maintained
- Focus states: ring-2 ring-primary ring-offset-2
- Keyboard navigation for sidebar and copy buttons
- Semantic HTML structure (nav, main, article, aside)