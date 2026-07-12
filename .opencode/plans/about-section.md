# About Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an About section with bio + skills content on the left side and a 3D Lanyard badge component on the right side.

**Architecture:** Split layout with text content on the left and an interactive 3D Lanyard component (from React Bits) on the right. The Lanyard uses Three.js physics simulation with a swinging badge card.

**Tech Stack:** React, Three.js, @react-three/fiber, @react-three/drei, @react-three/rapier, meshline

## Global Constraints
- Use existing CSS patterns (Space Grotesk for body, Montserrat for headings)
- Maintain dark theme consistency with Hero section
- Section must have `id="about"` for header navigation smooth scroll
- Lanyard component uses TypeScript + CSS variant (TS-CSS)

---

## File Structure

| File | Purpose |
|------|---------|
| `src/components/Lanyard/Lanyard.tsx` | Lanyard 3D component |
| `src/components/Lanyard/Lanyard.css` | Lanyard styles |
| `src/components/Lanyard/card.glb` | 3D card model (from React Bits) |
| `src/components/Lanyard/lanyard.png` | Lanyard texture (from React Bits) |
| `src/components/About.tsx` | About section with split layout |
| `src/components/About.css` | About section styles |
| `src/App.tsx` | Import and render About component |

---

### Task 1: Install Lanyard Dependencies

**Files:**
- Modify: `package.json`

**Interfaces:**
- Consumes: None
- Produces: All required packages installed

- [ ] **Step 1: Install Three.js fiber and drei**

Run: `npm install @react-three/fiber @react-three/drei three`
Expected: Packages added to dependencies

- [ ] **Step 2: Install Rapier physics engine**

Run: `npm install @react-three/rapier`
Expected: Package added to dependencies

- [ ] **Step 3: Install meshline for rope rendering**

Run: `npm install meshline`
Expected: Package added to dependencies

- [ ] **Step 4: Install TypeScript types**

Run: `npm install -D @types/three`
Expected: Types added to devDependencies

- [ ] **Step 5: Verify all dependencies**

Run: `npm ls @react-three/fiber @react-three/drei @react-three/rapier meshline three`
Expected: All packages listed without errors

---

### Task 2: Download Lanyard Assets

**Files:**
- Create: `src/components/Lanyard/card.glb`
- Create: `src/components/Lanyard/lanyard.png`

**Interfaces:**
- Consumes: None
- Produces: Asset files ready for component

- [ ] **Step 1: Create Lanyard directory**

Run: `mkdir -p src/components/Lanyard`

- [ ] **Step 2: Download card.glb from React Bits repo**

Download from: `https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/tailwind/Components/Lanyard/card.glb`
Save to: `src/components/Lanyard/card.glb`

- [ ] **Step 3: Download lanyard.png from React Bits repo**

Download from: `https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/tailwind/Components/Lanyard/lanyard.png`
Save to: `src/components/Lanyard/lanyard.png`

---

### Task 3: Create Lanyard Component

**Files:**
- Create: `src/components/Lanyard/Lanyard.tsx`
- Create: `src/components/Lanyard/Lanyard.css`

**Interfaces:**
- Consumes: card.glb, lanyard.png, Three.js dependencies
- Produces: `<Lanyard />` component with props for customization

- [ ] **Step 1: Create Lanyard.css**

```css
.lanyard-wrapper {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transform-origin: center;
}
```

- [ ] **Step 2: Create Lanyard.tsx**

Copy the full Lanyard component source from React Bits. The component features:
- 3D physics-based swinging badge card
- Interactive dragging with realistic inertial motion
- Customizable front/back images for the card
- Custom lanyard texture and width

- [ ] **Step 3: Update asset imports**

Ensure imports point to local assets:
```tsx
import cardGLB from './card.glb';
import lanyard from './lanyard.png';
```

- [ ] **Step 4: Verify component compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

---

### Task 4: Create About Component

**Files:**
- Create: `src/components/About.tsx`
- Create: `src/components/About.css`

**Interfaces:**
- Consumes: Lanyard component
- Produces: `<About />` section with id="about"

- [ ] **Step 1: Create About.css with split layout**

```css
.about {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: #0a0a0a;
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 120px 60px 60px;
  max-width: 1400px;
  margin: 0 auto;
  gap: 40px;
}

.about-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 550px;
}

.about-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin: 0;
  line-height: 1.1;
}

.about-title-accent {
  color: #a855f7;
}

.about-bio {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-bio p {
  font-family: 'Space Grotesk', monospace;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0;
}

.about-skills {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-skills-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.skill-item {
  font-family: 'Space Grotesk', monospace;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
}

.skill-item:hover {
  background: rgba(168, 85, 247, 0.15);
  border-color: rgba(168, 85, 247, 0.3);
  transform: translateY(-2px);
}

.about-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}

@media (max-width: 1024px) {
  .about-container {
    flex-direction: column;
    padding: 100px 30px 60px;
    text-align: center;
  }

  .about-left {
    max-width: 100%;
    align-items: center;
  }

  .about-title {
    font-size: 3rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .about-right {
    min-height: 400px;
    width: 100%;
  }
}
```

- [ ] **Step 2: Create About.tsx with split layout**

```tsx
import Lanyard from './Lanyard/Lanyard';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">
            ABOUT <span className="about-title-accent">ME</span>
          </h2>

          <div className="about-bio">
            <p>
              I'm a passionate web developer and IT specialist who thrives on
              creating seamless digital experiences. With a love for both
              technology and adventure, I bring a unique perspective to every
              project.
            </p>
            <p>
              From building responsive web applications to solving complex
              technical challenges, I'm always exploring new ways to push
              boundaries and deliver exceptional results.
            </p>
          </div>

          <div className="about-skills">
            <h3 className="about-skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item">React / TypeScript</div>
              <div className="skill-item">Node.js / Express</div>
              <div className="skill-item">Python / Django</div>
              <div className="skill-item">PostgreSQL / MongoDB</div>
              <div className="skill-item">Docker / Kubernetes</div>
              <div className="skill-item">AWS / Cloud Services</div>
              <div className="skill-item">CI/CD Pipelines</div>
              <div className="skill-item">REST APIs / GraphQL</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <Lanyard
            position={[0, 0, 30]}
            gravity={[0, -40, 0]}
            fov={20}
            transparent={true}
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify component compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

---

### Task 5: Integrate About Section into App

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: About component
- Produces: Updated App with About section rendered

- [ ] **Step 1: Import and add About to App.tsx**

```tsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="app" style={{ overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Verify build passes**

Run: `npx vite build`
Expected: Build succeeds without errors

- [ ] **Step 3: Test in browser**

Run: `npm run dev`
Expected: About section visible below Hero, Lanyard animating on right side, smooth scroll from header

---

### Task 6: Final Commit

**Files:**
- All files from previous tasks

**Interfaces:**
- Consumes: All previous tasks
- Produces: Committed changes

- [ ] **Step 1: Stage all changes**

Run: `git add -A`

- [ ] **Step 2: Commit**

Run: `git commit -m "feat: add About section with Lanyard component"`

- [ ] **Step 3: Verify build one more time**

Run: `npx vite build`
Expected: Clean build, no warnings
