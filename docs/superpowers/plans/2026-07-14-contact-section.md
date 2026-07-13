# Contact Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the "Let's Work Together" Contact section as the final CTA of the portfolio.

**Architecture:** 5 focused components in `src/components/Contact/`, each with its own CSS. Background uses CSS-only floating orbs (no JS cost). Glassmorphism cards with purple accents match existing portfolio patterns. All animations via `motion`.

**Tech Stack:** React 19, motion 12, react-icons/fi, CSS modules pattern, glassmorphism, Space Grotesk + Montserrat fonts.

## Global Constraints
- Dark background `#0a0a0a`, purple accent `#a855f7`, white text
- All animations respect `prefers-reduced-motion`
- Follow existing project patterns: separate CSS files, no Tailwind inline styles for component styling
- 100vh scroll-snap section matching Hero/About/Projects
- Email: scottfranklinmaher@gmail.com, GitHub: https://github.com/Iskatiboi

---

### Task 1: Toast component

**Files:**
- Create: `src/components/Contact/Toast.tsx`
- Create: `src/components/Contact/Toast.css`

**Interfaces:**
- Produces: `<Toast show={boolean} message={string} icon={ReactNode?} onDismiss={fn} />`

- [ ] **Step 1: Create directory and Toast.tsx**

```tsx
import { motion, AnimatePresence } from 'motion/react';
import { FiCheck } from 'react-icons/fi';
import { useEffect } from 'react';

interface ToastProps {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
  onDismiss: () => void;
}

export default function Toast({ show, message, icon, onDismiss }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onDismiss, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {icon || <FiCheck size={16} />}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Create Toast.css**

```css
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  background: rgba(34, 197, 94, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}
```

- [ ] **Step 3: Create directory**

Run: `New-Item -ItemType Directory -Path "src/components/Contact" -Force`

---

### Task 2: AvailabilityCard component

**Files:**
- Create: `src/components/Contact/AvailabilityCard.tsx`
- Create: `src/components/Contact/AvailabilityCard.css`

**Interfaces:**
- Produces: `<AvailabilityCard />` — self-contained, no props needed

- [ ] **Step 1: Create AvailabilityCard.tsx**

```tsx
import { FiMapPin, FiClock } from 'react-icons/fi';
import './AvailabilityCard.css';

export default function AvailabilityCard() {
  return (
    <div className="availability-card">
      <div className="availability-status">
        <span className="availability-dot" />
        <span className="availability-label">Available for Opportunities</span>
      </div>
      <p className="availability-text">
        Open to software engineering roles, internships, freelance web development projects, and collaborations.
      </p>
      <div className="availability-meta">
        <span className="availability-meta-item">
          <FiMapPin size={14} /> Philippines
        </span>
        <span className="availability-meta-item">
          <FiClock size={14} /> Usually replies within 24 hours
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create AvailabilityCard.css**

```css
.availability-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(34, 197, 94, 0.15);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.availability-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.availability-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
  flex-shrink: 0;
}

.availability-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;
}

.availability-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin: 0;
}

.availability-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.availability-meta-item {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 6px;
}
```

---

### Task 3: ContactCard component

**Files:**
- Create: `src/components/Contact/ContactCard.tsx`
- Create: `src/components/Contact/ContactCard.css`

**Interfaces:**
- Produces: `<ContactCard icon title description buttonLabel href? onCopy? index? />`

- [ ] **Step 1: Create ContactCard.tsx**

```tsx
import { motion } from 'motion/react';
import './ContactCard.css';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  onCopy?: () => void;
  index?: number;
}

export default function ContactCard({
  icon,
  title,
  description,
  buttonLabel,
  href,
  onCopy,
  index = 0,
}: ContactCardProps) {
  const handleClick = () => {
    if (onCopy) {
      onCopy();
    } else if (href) {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  const isCopy = !!onCopy;

  return (
    <motion.div
      className="contact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.15,
        ease: 'easeOut',
      }}
    >
      <div className="contact-card-icon">{icon}</div>
      <h3 className="contact-card-title">{title}</h3>
      <p className="contact-card-desc">{description}</p>
      <button
        className="contact-card-btn"
        onClick={handleClick}
        {...(isCopy ? {} : { role: 'link' })}
      >
        {buttonLabel}
      </button>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create ContactCard.css**

```css
.contact-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 280px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.15);
}

.contact-card-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(168, 85, 247, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a855f7;
  flex-shrink: 0;
}

.contact-card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.contact-card-desc {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
}

.contact-card-btn {
  align-self: flex-start;
  margin-top: 4px;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid rgba(168, 85, 247, 0.4);
  background: transparent;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.contact-card-btn:hover {
  background: rgba(168, 85, 247, 0.15);
  border-color: #a855f7;
}

.contact-card-btn:focus-visible {
  outline: 2px solid #a855f7;
  outline-offset: 2px;
}

@media (max-width: 1024px) {
  .contact-card {
    width: 100%;
    max-width: 400px;
  }
}
```

---

### Task 4: CTABanner component

**Files:**
- Create: `src/components/Contact/CTABanner.tsx`
- Create: `src/components/Contact/CTABanner.css`

- [ ] **Step 1: Create CTABanner.tsx**

```tsx
import { LiquidMetalButton } from '@/components/ui/liquid-metal';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="cta-text">
        <h3 className="cta-heading">Have an idea or opportunity?</h3>
        <p className="cta-sub">Let's build something amazing together.</p>
      </div>
      <a href="mailto:scottfranklinmaher@gmail.com" className="cta-link">
        <LiquidMetalButton
          metalConfig={{
            colorBack: '#a855f7',
            colorTint: '#d8b4fe',
            speed: 0.5,
            distortion: 0.15,
          }}
        >
          Let's Connect
        </LiquidMetalButton>
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Create CTABanner.css**

```css
.cta-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  margin-top: auto;
  border-top: 1px solid rgba(168, 85, 247, 0.15);
}

.cta-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cta-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.cta-sub {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.cta-link {
  text-decoration: none;
}

@media (max-width: 1024px) {
  .cta-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
```

---

### Task 5: Contact section wrapper

**Files:**
- Create: `src/components/Contact/Contact.tsx`
- Create: `src/components/Contact/Contact.css`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Contact.tsx**

```tsx
import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { FiMail, FiGithub } from 'react-icons/fi';
import AvailabilityCard from './AvailabilityCard';
import ContactCard from './ContactCard';
import CTABanner from './CTABanner';
import Toast from './Toast';
import './Contact.css';

const EMAIL = 'scottfranklinmaher@gmail.com';

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    setShowToast(true);
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="contact-heading">Let's Work Together</h2>
          <p className="contact-subtitle">
            Whether you're looking for a developer, have a project in mind, or
            simply want to connect, I'd love to hear from you. I'm always open
            to new opportunities, collaborations, and exciting challenges.
          </p>
        </motion.div>

        <div className="contact-content">
          <div className="contact-left">
            <AvailabilityCard />
          </div>
          <div className="contact-right">
            <ContactCard
              icon={<FiMail size={18} />}
              title="Email"
              description="The best way to reach me for opportunities or project inquiries."
              buttonLabel="Send an Email"
              href={`mailto:${EMAIL}`}
              onCopy={handleCopyEmail}
              index={0}
            />
            <ContactCard
              icon={<FiGithub size={18} />}
              title="GitHub"
              description="Explore my projects, open-source contributions, and development journey."
              buttonLabel="View GitHub"
              href="https://github.com/Iskatiboi"
              index={1}
            />
          </div>
        </div>

        <CTABanner />
      </div>

      <Toast
        show={showToast}
        message="Email copied to clipboard!"
        onDismiss={() => setShowToast(false)}
      />
    </section>
  );
}
```

- [ ] **Step 2: Create Contact.css**

```css
.contact {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #0a0a0a;
  scroll-snap-align: start;
}

.contact::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent 70%);
  filter: blur(80px);
  top: -10%;
  left: -5%;
  z-index: 0;
  pointer-events: none;
}

.contact::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 159, 252, 0.1), transparent 70%);
  filter: blur(80px);
  bottom: -5%;
  right: -5%;
  z-index: 0;
  pointer-events: none;
}

.contact-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 70px 60px 24px;
}

.contact-header {
  margin-bottom: 16px;
}

.contact-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin: 0 0 8px 0;
  line-height: 1.1;
}

.contact-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
  max-width: 600px;
}

.contact-content {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
  align-items: start;
}

.contact-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
}

@media (max-width: 1024px) {
  .contact-inner {
    padding: 70px 20px 16px;
  }

  .contact-heading {
    font-size: 2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-right {
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact::before,
  .contact::after {
    animation: none;
  }

  .contact-card {
    transition: none;
  }

  .contact-card:hover {
    transform: none;
  }
}
```

- [ ] **Step 3: Modify App.tsx**

Add import and component after Projects:

```tsx
import Contact from './components/Contact/Contact';
```

Insert `<Contact />` after `<Projects />` in the JSX.

---

### Task 6: Responsive polish & accessibility

**Files:**
- Modify: `src/components/Contact/Contact.css` (already includes responsive rules from Task 5)

- [ ] **Step 1: Verify responsive breakpoints** — check all rules at 1024px and below
- [ ] **Step 2: Verify `prefers-reduced-motion`** — confirm orb animations and card transitions are disabled
- [ ] **Step 3: Run build** — `npm run build` to verify no errors

---

## Self-Review

- Spec coverage: All requirements covered — heading/subtitle, two-column layout, availability card with green dot/location/reply time, email + github contact cards, copy-to-clipboard with toast, CTA banner with LiquidMetalButton, floating orbs, scroll-snap, responsive, accessibility, prefers-reduced-motion. ✅
- Placeholders: None. All code is complete and concrete. ✅
- Types consistent: Toast props, ContactCard props, availability card — all used consistently across tasks. ✅
