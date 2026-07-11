### Task 4: Create Header Component

**Files:**
- Create: `src/components/Header.tsx`, `src/components/Header.css`

**Interfaces:**
- Produces: `Header` component with Mac-style centered nav

- [ ] **Step 1: Create Header component**

```tsx
// src/components/Header.tsx
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#about" className="header-link">About</a>
        <a href="#projects" className="header-link">Projects</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Create Header styles**

```css
/* src/components/Header.css */
.header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 12px 32px;
}

.header-nav {
  display: flex;
  gap: 32px;
  align-items: center;
}

.header-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;
}

.header-link:hover {
  opacity: 0.7;
}
```

- [ ] **Step 3: Update App to use Header + clean up default template**

```tsx
// src/App.tsx
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Verify Header renders**

Run `npm run dev` and check header appears centered at top of page.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Mac-style Header component"
```
