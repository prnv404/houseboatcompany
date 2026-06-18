@AGENTS.md

# Houseboat Company — Tourism Website

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Design Philosophy

The north star: **make the visitor feel like the trip has already begun.**

### Immersion First

The visitor should feel transported before they read a word. Hero visuals (video or high-res photography) set the emotional tone immediately. Every design decision serves the fantasy of being there.

### Clarity of Action

The path from inspiration to booking must be frictionless. One clear CTA per screen, no competing priorities. Tourism sites often fail by being visually stunning but functionally confusing — don't be one of them.

### Trust Through Texture

Real photos over stock. Real guest reviews. Real pricing upfront. Travelers are making high-consideration purchases. Authenticity in imagery and copy converts better than polished abstraction.

### Mobile as Primary

Most travelers research on phones in fragmented moments. Design for thumb-reach, fast load times, and scannable content. Desktop is the enhancement, not the default.

### Destination-Led Hierarchy

Lead with place, experience, and mood — not the brand. The brand fades into the background and lets the destination do the selling. A stunning backwater sunset matters more than a logo.

### Speed is UX

Tourism sites are notoriously bloated. A 3-second load on mobile kills conversions. Optimize aggressively: lazy load images, serve next-gen formats (AVIF/WebP), minimize render-blocking resources.

### Structured for Discovery

Visitors often don't know exactly what they want. Guide exploration through filters, curated collections, and contextual recommendations.

### Emotional + Rational Balance

Hook with emotion (visuals, storytelling, aspiration), close with logic (pricing, inclusions, cancellation policy, FAQ). Do both well.

### Consistency of Voice

Whether it's a button label, a 404 page, or a booking confirmation — the tone should feel like a knowledgeable local friend: warm, specific, never corporate.

## Code Guidelines

- Prefer Server Components by default; only use `"use client"` when interactivity requires it
- Use `next/image` with AVIF/WebP for all imagery — never raw `<img>` tags
- Keep components small and composable; one responsibility per file
- All interactive elements must be accessible (keyboard navigable, proper ARIA attributes, sufficient contrast)
- Design mobile-first: start with the smallest viewport, layer up with responsive utilities
- Lazy load anything below the fold
- Keep the page lightweight — question every dependency before adding it
