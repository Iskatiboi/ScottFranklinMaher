### Task 5: Create Hero Component with Video Background

**Files:**
- Create: `src/components/Hero.tsx`, `src/components/Hero.css`

**Interfaces:**
- Consumes: `LiquidMetalButton` from `@/components/ui/liquid-metal`
- Produces: `Hero` component with video background and text overlay

- [ ] **Step 1: Create Hero component**

```tsx
// src/components/Hero.tsx
import { LiquidMetalButton } from '@/components/ui/liquid-metal';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-name">SCOTT MAHER</h1>
          <p className="hero-roles">Web Developer · IT Specialist · Adventurer</p>
        </div>
        
        <div className="hero-right">
          <div className="hero-phrases">
            <p>Passionate about creating seamless digital experiences</p>
            <p>Turning complex problems into simple solutions</p>
            <p>Always exploring, always learning</p>
            <p>Let's build something great together</p>
          </div>
          <a href="#projects">
            <LiquidMetalButton>View My Work →</LiquidMetalButton>
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Hero styles**

```css
/* src/components/Hero.css */
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 80px;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-left {
  flex: 0 0 40%;
}

.hero-name {
  font-size: 4.5rem;
  font-weight: 800;
  color: white;
  letter-spacing: -2px;
  line-height: 1;
  margin: 0 0 16px 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.hero-roles {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 2px;
  margin: 0;
}

.hero-right {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero-phrases {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-phrases p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}
```

- [ ] **Step 3: Update App to include Hero**

```tsx
// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Hero component with video background"
```
