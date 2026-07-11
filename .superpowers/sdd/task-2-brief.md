### Task 2: Install and Configure Tailwind CSS

**Files:**
- Create: `tailwind.config.js`, `postcss.config.js`, `src/index.css`
- Modify: `src/App.css`

**Interfaces:**
- Produces: Tailwind CSS configured and ready for use

- [ ] **Step 1: Install Tailwind CSS**

Run:
```bash
npm install -D tailwindcss @tailwindcss/vite
```

Expected: Tailwind CSS and Vite plugin installed

- [ ] **Step 2: Configure Vite for Tailwind**

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 3: Create Tailwind config**

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 4: Create PostCSS config**

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 5: Update index.css with Tailwind imports**

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 6: Clean up App.css**

Remove default Vite styles from `src/App.css`, keep minimal reset.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: configure Tailwind CSS"
```
