# Projects Section — Design Spec

## Overview
Add a full-viewport Projects section (`#projects`) after the About section, showcasing 4 projects in a 2×2 glassmorphism card grid over an interactive LiquidEther fluid-simulation background.

## Background
- Use the `LiquidEther` component (React Bits) as a full-viewport background
- Colors: `['#5227FF', '#FF9FFC', '#B497CF']` — matching portfolio's purple/pink accent palette
- Interactive: mouse/touch moves the fluid; auto-demo when idle
- `three` dependency already installed

## Layout
- Section id: `projects`, full viewport height, position relative
- Title: "PROJECTS" in Montserrat (white, 4rem, matching About section heading)
- 2×2 responsive card grid → 1 column on mobile (≤1024px)

## Cards (Glassmorphism)
- Background: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`, radius `16px`
- Padding: `32px`
- Content per card: title (Montserrat, white), description (Space Grotesk), tech tags (purple pills), links (GitHub/Demo icons)
- Hover: `translateY(-4px)` + border glow transition

## Project Data

| # | Title | Description | Tech Stack | Links |
|---|-------|-------------|------------|-------|
| 1 | Pickle Turf | Pickleball court booking & reservation system with inventory management and automated revenue tracking | Django, PostgreSQL, Vercel | GitHub, Live Demo |
| 2 | 7 Evelyn | E-commerce platform for selling products and goods | Django, PostgreSQL, Vercel | GitHub, Live Demo |
| 3 | PeerHelp | Campus help webapp with geotracker, real-time chat, and points-based system | Django, PostgreSQL, Vercel | GitHub, Live Demo |
| 4 | Client Portfolio | Personal portfolio website for freelance client | Astro | GitHub, Live Demo |

## New Files
1. `src/components/LiquidEther/LiquidEther.tsx` + `LiquidEther.css`
2. `src/components/Projects.tsx` + `Projects.css`

## Modified Files
1. `src/App.tsx` — add `<Projects />` after `<About />`

## Dependencies
- `three` — already installed; no new packages needed

## Animations
- Cards fade-in/slide-up on scroll into view (via `motion`)
- LiquidEther pauses when section is not visible (built-in IntersectionObserver)

## Responsive
- Desktop (>1024px): 2×2 grid
- Mobile (≤1024px): single column
