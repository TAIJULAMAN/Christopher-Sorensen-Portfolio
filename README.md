## Christopher Sorensen — Portfolio (React + Vite + Tailwind)

Simple, fast portfolio site built with React and Vite, styled with Tailwind CSS v4, and ready for SPA deployment on Vercel.

---

### Tech Stack
- **Build tool**: `vite`
- **UI**: `react`, `react-dom`
- **Styling**: `tailwindcss` v4 via `@tailwindcss/vite`
- **Routing**: `react-router-dom` (available in deps)
- **Linting**: `eslint` with React Hooks and React Refresh plugins


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
