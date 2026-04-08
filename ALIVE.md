# Application Status

## Current State
Single-page portfolio website built with React, TypeScript, and Vite.

## Architecture
- **Framework**: React 18 + Vite + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query (TanStack Query)
- **UI Components**: Radix UI + shadcn/ui

## Project Structure
```
src/
├── pages/           # Page components
│   ├── Index.tsx    # Main portfolio landing page
│   └── NotFound.tsx # 404 error page
├── components/      # Reusable UI components
│   └── ui/          # shadcn/ui components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── App.tsx          # Root component with routing
├── main.tsx         # Application entry point
└── index.css        # Global styles and design tokens
```

## Pages
- `/` - Portfolio landing page with hero, work, about, and contact sections
- `/*` - 404 Not Found page

## Design System
Color palette using HSL format with semantic tokens:
- Background: Soft off-white (#f6f6f4)
- Foreground: Near-black (#0a0a0a)
- Typography: System font stack

## Development
- **Start**: `bun run dev`
- **Build**: `bun run build`
- **Preview**: `bun run preview`

## Features
- Sticky navigation header
- Smooth scroll anchor links
- Responsive layout
- Fixed info label
- Hover effects on interactive elements

## Last Updated
2025-01-01
