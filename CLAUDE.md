# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses pnpm as the package manager:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site with type checking (`astro check && astro build`)
- `pnpm preview` - Preview built site locally
- `astro check` - Run TypeScript type checking

## Architecture

This is a personal portfolio site built with Astro, React, and Tailwind CSS. The site is structured as a single-page application with modular components.

### Core Structure
- **Single Page App**: All content is rendered on `src/pages/index.astro`
- **Component-Based**: Portfolio sections are split into dedicated Astro components in `src/components/`
- **Static Site**: Builds to `dist/` for deployment to GitHub Pages at seigo2016.com

### Key Components
The main page (`src/pages/index.astro`) imports and renders these components in order:
1. Header - Navigation and branding
2. Profile - Personal introduction
3. Skills - Technical skills showcase
4. Achievements - Notable accomplishments
5. Works - Professional work experience
6. Projects - Personal projects
7. Articles - Blog posts/articles

### Styling System
- **Tailwind CSS**: Primary styling framework with custom design system
- **CSS Variables**: Theme colors defined in Layout.astro using HSL variables
- **shadcn/ui**: Component library integrated (components.json present)
- **Radix UI**: Base components for complex UI elements
- **Japanese Font**: Noto Sans JP Variable for Japanese text support

### Asset Management
- Static assets in `public/` directory
- Images organized in `public/images/` with subdirectories for content and logos
- All images optimized as WebP format where possible

## Technology Stack
- **Framework**: Astro with React integration
- **Styling**: Tailwind CSS + shadcn/ui components
- **Typography**: Noto Sans JP Variable, FontAwesome icons
- **Deployment**: Static site generation for GitHub Pages