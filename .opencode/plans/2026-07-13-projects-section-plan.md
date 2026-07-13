# Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Projects section with interactive LiquidEther background and 2×2 glassmorphism card grid.

**Architecture:** A new full-viewport section with a Three.js-based fluid simulation (LiquidEther) as background, with semi-transparent glass cards floating above it. Project data is a typed array for easy modification. Cards animate into view using `motion`.

**Tech Stack:** React, TypeScript, Three.js (fluid sim), motion (animations), react-icons (GitHub link icon)

## Global Constraints
- All new components follow existing patterns: separate `.tsx` + `.css` files, Montserrat headings, Space Grotesk body text
- Path alias `@/` maps to `src/`
- Use `cn()` from `@/lib/utils` for class merges where needed
- No new npm dependencies — `three` and `motion` already installed

---
### Task 1: LiquidEther Component

**Files:**
- Create: `src/components/LiquidEther/LiquidEther.tsx`
- Create: `src/components/LiquidEther/LiquidEther.css`

**Interfaces:**
- Consumes: none
- Produces: `<LiquidEther>` component with props: `colors`, `mouseForce`, `cursorSize`, `resolution`, `dt`, `BFECC`, `isViscous`, `viscous`, `iterationsViscous`, `iterationsPoisson`, `isBounce`, `autoDemo`, `autoSpeed`, `autoIntensity`, `takeoverDuration`, `autoResumeDelay`, `autoRampDuration`, `className`, `style`

- [ ] **Step 1: Create directory and CSS file**

Create `src/components/LiquidEther/` directory.

Write `src/components/LiquidEther/LiquidEther.css`:
```css
.liquid-ether-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  touch-action: none;
}
```

- [ ] **Step 2: Create LiquidEther.tsx component**

Write `src/components/LiquidEther/LiquidEther.tsx` with the full component source provided during brainstorming (the complete 400+ line Three.js fluid simulation with advection, viscosity, pressure solvers, BFECC, auto-driver, IntersectionObserver pause, and ResizeObserver).

Key structure:
```tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = ['#5227FF', '#FF9FFC', '#B497CF'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}) {
  const mountRef = useRef(null);
  // ... full fluid simulation with CommonClass, MouseClass, AutoDriver,
  //     ShaderPass, Advection, ExternalForce, Viscous, Divergence,
  //     Poisson, Pressure, Simulation, Output, WebGLManager
  // ... IntersectionObserver pause/resume
  // ... ResizeObserver
  // ... cleanup on unmount

  return <div ref={mountRef} className={`liquid-ether-container ${className || ''}`} style={style} />;
}
```

(The complete source was provided during brainstorming — copy verbatim, with the component placed inside `src/components/LiquidEther/LiquidEther.tsx`.)

---
### Task 2: Projects Section Component

**Files:**
- Create: `src/components/Projects.tsx`
- Create: `src/components/Projects.css`

**Interfaces:**
- Consumes: `LiquidEther` from `@/components/LiquidEther/LiquidEther`
- Produces: `<Projects />` section component with `id="projects"`

- [ ] **Step 1: Create Projects.css**

Write `src/components/Projects.css`:
```css
.projects {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.projects-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.projects-overlay {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
}

.projects-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin: 0 0 48px 0;
  line-height: 1.1;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 900px;
  width: 100%;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.4);
}

.project-card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
}

.project-card-desc {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.2);
  color: #a855f7;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.project-link {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
}

.project-link:hover {
  color: #a855f7;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }

  .projects-title {
    font-size: 3rem;
    margin-bottom: 32px;
  }

  .projects-overlay {
    padding: 80px 30px 40px;
    justify-content: flex-start;
  }
}
```

- [ ] **Step 2: Create Projects.tsx**

Write `src/components/Projects.tsx`:
```tsx
import { motion } from 'motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import LiquidEther from './LiquidEther/LiquidEther';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Pickle Turf',
    description:
      'Pickleball court booking & reservation system with inventory management and automated revenue tracking.',
    tags: ['Django', 'PostgreSQL', 'Vercel'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: '7 Evelyn',
    description:
      'E-commerce platform for selling products and goods.',
    tags: ['Django', 'PostgreSQL', 'Vercel'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'PeerHelp',
    description:
      'Campus help webapp with geotracker, real-time chat, and points-based system for connecting students.',
    tags: ['Django', 'PostgreSQL', 'Vercel'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Client Portfolio',
    description:
      'Personal portfolio website for a freelance client.',
    tags: ['Astro'],
    githubUrl: '#',
    demoUrl: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-bg">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      <div className="projects-overlay">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          PROJECTS
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.15,
                ease: 'easeOut',
              }}
            >
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={16} /> GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---
### Task 3: Wire into App.tsx

**Files:**
- Modify: `src/App.tsx` — add `<Projects />` after `<About />`

**Interfaces:**
- Consumes: `Projects` from `@/components/Projects`
- Produces: rendered Projects section in the page

- [ ] **Step 1: Edit App.tsx**

Add import and render:

```tsx
import Projects from './components/Projects';

function App() {
  return (
    <div className="app" style={{ overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: TypeScript compiles without errors, Vite builds successfully.
