# Deepak's Portfolio

A personal developer portfolio built with React, TypeScript, and Tailwind CSS. Focuses on backend systems, cloud architecture, and full-stack engineering.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Testing:** Vitest + Testing Library, Playwright (E2E)

## Sections

- **Hero** — Intro with role and focus areas
- **About** — Background in backend, distributed systems, and cloud
- **Tech Stack** — Frontend, backend, and DevOps tools
- **What I Do** — Core services and capabilities
- **Projects** — Selected projects (Nexus DB, Aether UI, CloudPulse, ByteForge CLI)
- **Terminal** — Interactive terminal-style component
- **Contact** — Email, GitHub, and LinkedIn links

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [bun](https://bun.sh/) or npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch
```

## Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── ui/           # Reusable UI components (shadcn/ui)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route-level pages
└── main.tsx          # App entry point
```
