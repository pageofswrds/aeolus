# Tauri + React + Typescript
Aeolus is the greek god of the winds and air. I have no idea how relevant this is, I just thought it sounded cool. lol. I am curious about exploring emergent behaviour in complex systems. No idea how this will take shape, but it will probably involve agent based models and some sort of simulation. 


### Quick command reference:

```bash
  # Development
  pnpm tauri dev              # macOS desktop
  pnpm tauri ios dev          # iOS
  pnpm tauri ios dev --open   # iOS with Xcode

  # Building
  pnpm tauri build            # macOS
  pnpm tauri ios build        # iOS

  # Installing packages
  pnpm add <package-name>     # Add dependency
  pnpm add -D <package-name>  # Add dev dependency
  pnpm install                # Install all dependencies
```

### Quick Tips:

1. Always use pnpm in this project (not npm) to avoid conflicts
2. The pnpm-lock.yaml file should be committed to git (like package-lock.json)
3. If you see commands in docs using npm, just replace with pnpm:
- npm install → pnpm install
- npm add → pnpm add
- npm run → pnpm (you can skip "run")