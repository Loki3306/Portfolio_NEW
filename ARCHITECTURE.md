# Portfolio System Architecture

## Technologies
- **Framework**: Next.js 14/15 (App Router, static exports or serverless)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js & React Three Fiber (R3F) + Drei

## Directory Structure
```text
Portfolio_NEW/
├── public/                 # Static assets (PDFs, images)
├── src/
│   ├── app/                # Next.js App Router (Layouts, Global CSS, Main page)
│   │   ├── globals.css     # Global styles & design system tokens
│   │   ├── layout.tsx      # Main layout wrapper and providers
│   │   └── page.tsx        # Portfolio Single-Page entry point
│   ├── components/
│   │   ├── scene/          # R3F Canvas and 3D scenes / visualizers
│   │   │   └── HeroScene.tsx
│   │   └── ui/             # Reusable visual UI components (buttons, navbar, marquee)
│   │       └── Navbar.tsx
│   ├── hooks/              # Custom React hooks (scroll, resize, performance monitors)
│   └── utils/              # Helper functions & data models
```

## Styling & Design Tokens (Tailwind + HSL)
- Use standard HSL Tailwind configs to allow fine-grained opacity adjustments.
- High-contrast premium dark theme:
  - Background: `hsl(240, 10%, 4%)` (Deep neutral obsidian)
  - Text: `hsl(0, 0%, 98%)` (Crisp off-white)
  - Borders: `hsl(240, 5%, 12%)` (Subtle divider border)
  - Accent colors: HSL blues/purples with low saturation for the premium Stripe-like look.

## Graphics & 3D Guidelines
- **R3F Canvases**: Absolute positioned, overlays, bounded wrappers to prevent layout shifting.
- **Performance**:
  - Instanced rendering for particles.
  - Turn off shadows or postprocessing unless essential.
  - Pause scene rendering when the section goes off-screen (Intersection Observer).
