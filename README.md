## Christopher Sorensen — Portfolio (React + Vite + Tailwind)

Simple, fast portfolio site built with React and Vite, styled with Tailwind CSS v4, and ready for SPA deployment on Vercel.

---

### Tech Stack
- **Build tool**: `vite`
- **UI**: `react`, `react-dom`
- **Styling**: `tailwindcss` v4 via `@tailwindcss/vite`
- **Routing**: `react-router-dom` (available in deps)
- **Linting**: `eslint` with React Hooks and React Refresh plugins

### Prerequisites
- Node.js (recent LTS recommended)
- PNPM/NPM/Yarn (examples use NPM)

### Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start dev server**
   ```bash
   npm run dev
   ```
   Vite will print a local URL to preview the app.

3. **Build for production**
   ```bash
   npm run build
   ```
   Output is generated to the `dist/` directory.

4. **Preview production build**
   ```bash
   npm run preview
   ```

### NPM Scripts
- **dev**: start Vite dev server
- **build**: production build
- **preview**: preview the production build locally
- **lint**: run ESLint across the project

### Project Structure
```
.
├─ index.html                # Vite entry; mounts React at #root
├─ vite.config.js            # Tailwind v4 plugin configured
├─ eslint.config.js          # ESLint config (JS/JSX, hooks, refresh)
├─ vercel.json               # SPA rewrites for Vercel
├─ public/                   # Static assets (served as-is)
│  ├─ logo.png, hero.png, ...
├─ src/
│  ├─ main.jsx               # React/Vite bootstrap
│  ├─ App.jsx                # Root component
│  ├─ index.css              # Tailwind entry + global styles
│  ├─ App.css                # Component-scoped styles
│  ├─ assets/                # Local images/assets
│  ├─ components/            # UI components
│  └─ common/                # Shared helpers/constants
└─ dist/                     # Production build output (generated)
```

### Tailwind CSS
- Tailwind v4 is enabled via the Vite plugin in `vite.config.js`:
  ```js
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({ plugins: [tailwindcss()] })
  ```
- Use utility classes directly in JSX. Global styles live in `src/index.css` and `src/App.css`.

### Routing
- `react-router-dom` is included as a dependency. If you add routes, Vercel is already configured for SPA rewrites (see below).

### Linting
```bash
npm run lint
```
Rules are defined in `eslint.config.js` (JS/JSX, React Hooks, and React Refresh).

### Deployment (Vercel)
- The repo includes `vercel.json` with SPA rewrites:
  ```json
  {
    "rewrites": [ { "source": "/(.*)", "destination": "/" } ]
  }
  ```
- Build command: `npm run build`
- Output directory: `dist/`
- For static hosting, ensure your platform serves `index.html` for unknown routes.

### License
Not specified.