# shadcn/ui Migration Guide

## Overview

This guide documents how to migrate shadcn/ui components to our semantic color system. Our system uses prefixed semantic names (`tx-`, `bg-`, `ic-`, `bd-`) instead of shadcn's default color tokens.

## Color System Philosophy

### Primitive Colors (Base Layer)
Located in `src/index.css`:
- `--dark-900`, `--dark-800`, `--dark-700` - Text/icon colors
- `--light-100`, `--light-200`, `--light-300`, `--light-600` - Background/border colors
- `--brand` - Brand accent color

### Semantic Mappings (Usage Layer)
Defined in `tailwind.config.ts`:
- **Text colors** (`tx-`): For all text content
- **Icon colors** (`ic-`): For icons and decorative elements
- **Background colors** (`bg-`): For surfaces, cards, buttons
- **Border colors** (`bd-`): For borders, dividers, outlines

---

## Migration Mapping Table

### Text Colors

| shadcn Token | Semantic Equivalent | Usage |
|--------------|-------------------|-------|
| `text-foreground` | `text-tx-primary` | Primary body text |
| `text-muted-foreground` | `text-tx-secondary` | Secondary/helper text |
| `text-primary` | `text-tx-brand` | Brand-colored text |
| `text-primary-foreground` | `text-tx-button` | Text on dark backgrounds |
| `text-destructive` | `text-tx-primary` (or create `tx-error`) | Error text |
| `text-accent-foreground` | `text-tx-primary` | Text on accent backgrounds |

### Background Colors

| shadcn Token | Semantic Equivalent | Usage |
|--------------|-------------------|-------|
| `bg-background` | `bg-bg` or `bg-bg-base` | Page background |
| `bg-card` | `bg-bg-card` | Card backgrounds |
| `bg-primary` | `bg-bg-button` | Primary button background |
| `bg-secondary` | `bg-bg-secondary` | Secondary surfaces |
| `bg-accent` | `bg-bg-hover` | Hover states |
| `bg-muted` | `bg-bg-secondary` | Muted backgrounds |
| `bg-destructive` | `bg-bg-button` (or create `bg-error`) | Error backgrounds |
| `hover:bg-accent` | `hover:bg-bg-hover` | Hover states |
| `hover:bg-primary/90` | `hover:bg-bg-button-hover` | Button hover |

### Border Colors

| shadcn Token | Semantic Equivalent | Usage |
|--------------|-------------------|-------|
| `border-border` | `border-bd-base` | Default borders |
| `border-input` | `border-bd-primary` | Input field borders |
| `border-primary` | `border-bd-brand` | Brand-colored borders |
| `hover:border-primary` | `hover:border-bd-brand-hover` | Hover states |

### Special Cases

| shadcn Token | Semantic Equivalent | Notes |
|--------------|-------------------|-------|
| `ring-ring` | `ring-ring` | Keep as-is (compatibility) |
| `bg-popover` | `bg-bg-card` | Treat as elevated card |
| `text-card-foreground` | `text-tx-primary` | Same as body text |

---

## Migration Protocol

### When Adding New shadcn/ui Components

Follow these steps:

1. **Install the component**
   ```bash
   pnpx shadcn@latest add [component-name]
   ```

2. **Review the generated code**
   - Open the new component file in `src/components/ui/`
   - Identify all color classes (text-, bg-, border-)

3. **Apply the mapping**
   - Use the table above to find semantic equivalents
   - Replace shadcn tokens with semantic names
   - Refer to `button.tsx` as the reference example

4. **Handle edge cases** (see protocol below)

5. **Test thoroughly**
   - Test in light mode
   - Test in dark mode (add `className="dark"` to `<html>` tag)
   - Verify all interactive states (hover, active, disabled)

---

## Edge Case Handling Protocol

### Case 1: No Direct Semantic Mapping

**Example:** shadcn uses `bg-popover` but we don't have `bg-popover`

**Decision tree:**
1. Is this a new semantic need? (e.g., floating elements need distinct background)
   - **YES** → Add to color system in `tailwind.config.ts`
   - **NO** → Map to closest existing semantic color

2. If mapping to existing color:
   - Elevated surfaces → use `bg-bg-card`
   - Interactive elements → use `bg-bg-hover`
   - Disabled states → use `bg-bg-disabled`

**Document the decision:**
```typescript
// In component file
// Migration note: popover uses bg-card (elevated surface)
className="bg-bg-card"
```

### Case 2: Component-Specific Colors

**Example:** Chart colors, syntax highlighting, data visualization

**Solution:** Keep in a separate namespace
```typescript
// tailwind.config.ts
colors: {
  chart: {
    1: "hsl(220 70% 50%)",
    2: "hsl(160 60% 45%)",
    3: "hsl(30 80% 55%)",
  }
}
```

**Rationale:** Data viz colors are not semantic—they're functional. Keep them separate.

### Case 3: Destructive/Error States

**Current approach:** Use `text-tx-primary` for error text

**Future consideration:** Add error semantic colors if needed frequently
```typescript
tx: {
  error: "hsl(0 70% 50%)",
  success: "hsl(140 60% 45%)",
  warning: "hsl(40 80% 50%)",
}
```

**Decision:** Add only when you need 3+ components using error states

### Case 4: Ring/Focus Colors

**Solution:** Keep compatibility mappings
```typescript
// Already in config
input: "hsl(var(--light-600) / 0.2)",
ring: "hsl(var(--brand) / 0.5)",
```

**Rationale:** Focus rings are a unique UI pattern, not strictly semantic

---

## Migration Examples

### Before (shadcn default)
```tsx
const buttonVariants = cva(
  "bg-primary text-primary-foreground hover:bg-primary/90"
)
```

### After (semantic system)
```tsx
const buttonVariants = cva(
  "bg-bg-button text-tx-button hover:bg-bg-button-hover"
)
```

---

### Before (shadcn card)
```tsx
<div className="bg-card text-card-foreground border-border">
  <h3 className="text-foreground">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### After (semantic system)
```tsx
<div className="bg-bg-card text-tx-primary border-bd-card">
  <h3 className="text-tx-primary">Title</h3>
  <p className="text-tx-secondary">Description</p>
</div>
```

---

### Before (shadcn input)
```tsx
<input className="border-input bg-background text-foreground" />
```

### After (semantic system)
```tsx
<input className="border-bd-primary bg-bg text-tx-primary" />
```

---

## Adding New Semantic Colors

If you identify a genuine new semantic need:

### 1. Add primitive (if needed)
```css
/* src/index.css */
:root {
  --success: 140 60% 45%;
  --error: 0 70% 50%;
}
```

### 2. Add semantic mapping
```typescript
// tailwind.config.ts
tx: {
  error: "hsl(var(--error) / 0.9)",
  success: "hsl(var(--success) / 0.9)",
}
```

### 3. Document in this guide
Update the mapping tables above

### 4. Update button.tsx (if applicable)
Add new variant showcasing the pattern

---

## Quick Reference: Opacity Levels

Our semantic system uses consistent opacity levels:

| State | Text | Icon | Background | Border |
|-------|------|------|------------|--------|
| Primary | 100% | 90% | 100% | 15% |
| Secondary | 70% | 60% | 3% | 8% |
| Tertiary | 50% | 40% | - | - |
| Disabled | 22% | 15% | 4% | 5% |
| Hover | - | - | 12% | 17% |
| Pressed | - | - | 15% | 18% |

When creating new semantic colors, follow these opacity patterns for consistency.

---

## Testing Checklist

When migrating a component:

- [ ] Light mode: All states render correctly
- [ ] Dark mode: All states render correctly
- [ ] Hover states work
- [ ] Active/pressed states work
- [ ] Disabled states work
- [ ] Focus rings are visible
- [ ] Text is readable on all backgrounds
- [ ] Colors match design intent

---

## Maintainer Notes

**Last updated:** Initial creation
**Components migrated:** Button
**Pending additions:** None yet

When you migrate a component, add it to the list below:

### Migrated Components
- ✅ `button.tsx` - All variants using semantic system

### Components TODO
- [ ] Input
- [ ] Card
- [ ] Dialog
- [ ] Select
- [ ] Dropdown Menu
- [ ] (Add as needed)

---

## Questions?

If you encounter a case not covered in this guide:

1. Check `button.tsx` for similar patterns
2. Refer to `tailwind.config.ts` to see all available semantic colors
3. Follow the edge case protocol above
4. Document your decision in the component file
5. Update this guide if it's a pattern others will encounter
