### Task 1: Initialize React + Vite + TypeScript Project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/App.css`

**Interfaces:**
- Produces: Vite project scaffold with React + TypeScript

- [ ] **Step 1: Create project with Vite**

Run:
```bash
npm create vite@latest . -- --template react-ts
```

Expected: Vite scaffolds React + TypeScript project in current directory

- [ ] **Step 2: Install dependencies**

Run:
```bash
npm install
```

Expected: `node_modules` created, project runs with `npm run dev`

- [ ] **Step 3: Verify project runs**

Run:
```bash
npm run dev
```

Expected: Dev server starts on `http://localhost:5173`

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: initialize React + Vite + TypeScript project"
```
