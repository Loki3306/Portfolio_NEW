# Architectural Decision Records (ADR)

## ADR 1: Next.js App Router & Src Directory
- **Status**: Accepted
- **Context**: Need a robust React framework with good build-time optimization, path aliasing, and ease of routing.
- **Decision**: Initialize with Next.js App Router and a `src/` directory layout. This isolates core source code from configuration files in the root.

## ADR 2: Dark Theme Minimal & High-Contrast Design System
- **Status**: Accepted
- **Context**: Standard portfolios often look template-driven or game-like (cyberpunk). The goal is a premium, Linear/OpenAI-like engineering aesthetic.
- **Decision**: Force global dark theme with HSL variable controls. Use crisp borders, wide layouts, and heavy padding instead of multi-colored graphics.

## ADR 3: React Three Fiber (R3F) for Three.js Graphics
- **Status**: Accepted
- **Context**: Writing raw imperative WebGL or Three.js can become verbose and difficult to bind with React component lifecycles.
- **Decision**: Use React Three Fiber and `@react-three/drei` for declarative WebGL management. Restrict 3D visualization only to the Hero section and systems architecture to ensure premium load times and 60 FPS performance.

## ADR 4: Framer Motion for Micro-Animations
- **Status**: Accepted
- **Context**: Standard CSS animations can be limiting for interactive scroll tracking, layouts transitions, and custom slide effects.
- **Decision**: Utilize Framer Motion for physics-based layout-preserving transitions and page scroll tracking.
