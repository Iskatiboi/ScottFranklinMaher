### Task 3: Install shadcn/ui and Add Liquid Metal Button

**Files:**
- Create: `components.json`, `src/lib/utils.ts`, `src/components/ui/liquid-metal-button.tsx`

**Interfaces:**
- Produces: `LiquidMetalButton` component for use in Hero

- [ ] **Step 1: Install shadcn/ui dependencies**

Run:
```bash
npm install tailwind-merge class-variance-authority clsx
npm install -D @types/node
```

Expected: shadcn dependencies installed

- [ ] **Step 2: Initialize shadcn/ui**

Run:
```bash
npx shadcn@latest init
```

Select:
- TypeScript: Yes
- Style: Default
- Base color: Neutral
- CSS file: `src/index.css`
- Tailwind config: `tailwind.config.js` (if asked)
- Components alias: `@/components`
- Utils alias: `@/lib/utils`

- [ ] **Step 3: Configure path aliases in tsconfig.json**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

- [ ] **Step 4: Add Liquid Metal Button**

Run:
```bash
npx shadcn@latest add https://www.vengenceui.com/r/liquid-metal.json
```

Expected: `src/components/ui/liquid-metal-button.tsx` created

- [ ] **Step 5: Verify component imports correctly**

Check that `src/components/ui/liquid-metal-button.tsx` exists and exports the button component.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add shadcn/ui with liquid metal button"
```
