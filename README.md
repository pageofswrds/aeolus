# Tauri + React + Typescript
Aeolus is the greek god of the winds and air. I have no idea how relevant this is, I just thought it sounded cool. lol. I am curious about exploring emergent behaviour in complex systems. No idea how this will take shape, but it will probably involve agent based models and some sort of simulation. 

### Quick command reference:

```bash
  # Development
  pnpm tauri dev                 # macOS desktop
  pnpm tauri ios dev             # iOS
  pnpm tauri ios dev --open      # iOS with Xcode
  pnpm tauri android dev         # Starts dev server + Android emulator
  pnpm tauri android dev --open  # Also opens Android Studio


  # Building
  pnpm tauri build               # macOS
  pnpm tauri ios build           # iOS
  pnpm tauri android build       # Android

  # Installing packages
  pnpm add <package-name>        # Add dependency
  pnpm add -D <package-name>     # Add dev dependency
  pnpm install                   # Install all dependencies
```

### Quick Tips:

 1. Always use pnpm in this project (not npm) to avoid conflicts
 2. The pnpm-lock.yaml file should be committed to git (like package-lock.json)
 3. If you see commands in docs using npm, just replace with pnpm:
 - npm install → pnpm install
 - npm add → pnpm add
 - npm run → pnpm (you can skip "run")

---

## Developing in Tauri
Aeolus is built with Tauri 2.x, enabling true cross-platform development from a single codebase. The Rust (WASM) backend lets us write our application once and run it everywhere.

The same React components render on both platforms, automatically adapting to the available screen real estate. We use standard web responsive design techniques to adapt the UI across platforms:
 - CSS media queries for screen size adaptations
 - Flexbox and CSS Grid for flexible layouts
 - Mobile-first design principles
 - Viewport units (vh, vw) for proportional sizing

All development happens in the main project directory:
 - **Frontend:** `src/` contains our React + TypeScript UI components
 - **Backend:** `src-tauri/src/` contains Rust code for system-level operations
 - **Configuration:** `src-tauri/tauri.conf.json` defines app-wide settings
 - The iOS project is generated (in src-tauri/gen/ios/).
 - The Android project is generated (in src-tauri/gen/android/).


### Mental Model
1. Write code in your main project (src/ and src-tauri/src/).
2. Don't edit code in Xcode/Android Studio - they're just viewers.
3. Always use the CLI to run - don't build directly from Xcode/Android Studio without the dev server running.


### Asset Management
Assets work identically across all platforms (macOS, iOS, Android) in Tauri. There are three types:

 - **Code Assets (`src/assets/`):** Import directly in React components. Vite processes and optimizes these during build.

```jsx
import logo from "./assets/logo.svg";
<img src={logo} />
```

- **Static Assets (public/):** Reference with absolute paths starting with /. These are copied as-is without processing.

```jsx
<img src="/icon.png" />
```

- **App Icons (src-tauri/icons/):** Platform-specific icons for home screen/dock. Generate all sizes from one source:

```bash
pnpm tauri icon path/to/icon.png
```

All runtime assets (images, fonts, videos) are bundled by Vite into dist/, then packaged into each platform's app. No platform-specific asset handling is needed - your React code and file structure remain identical across all targets.


### Components & Styles
We are using tailwind. I love tailwind. That is all x