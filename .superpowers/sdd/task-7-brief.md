### Task 7: Polish and Test

**Files:**
- Modify: `src/index.css`, `src/App.css`

**Interfaces:**
- Consumes: All previous components

- [ ] **Step 1: Add smooth scroll to HTML**

```css
/* src/index.css */
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Verify build passes**

Run `npx vite build` to ensure the project builds without errors.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: polish landing page and test interactions"
```
