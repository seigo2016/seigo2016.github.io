# Toolchain and Dependencies Upgrade Design

## Goal

Modernize the portfolio build and deployment stack, remove unused or deprecated packages, and upgrade all maintained dependencies while preserving the generated site.

## Approach

The upgrade is split into independently verifiable layers. First, declare Node.js 22.20 or newer as the project runtime and update GitHub Actions to Node 24-based releases where available. Keep pnpm on major version 10 because the repository's build-script allowlist is stored in `package.json` using the pnpm 10 configuration format.

Second, reduce the dependency surface before major upgrades. Replace `node-fetch` with Node's built-in `fetch`, remove unused DOM testing packages, and remove React, Radix UI, Lucide, and the Astro React integration if repository-wide import checks confirm they are unused. This avoids upgrading packages that do not contribute to the site.

Third, upgrade all remaining direct dependencies to their latest releases, including Astro 7, Tailwind CSS, TypeScript, Sharp, and related integrations. Regenerate the pnpm lockfile under Node 22 and pnpm 10. Address migration errors at their source rather than suppressing diagnostics.

## Verification

Each layer must pass a clean pnpm install and `pnpm build`. Final verification also includes `pnpm outdated`, `pnpm audit`, a scan for deprecated lockfile entries, `git diff --check`, and inspection of the complete diff. Existing content-loader and inline-script hints may be handled if the update makes a safe, behavior-preserving correction obvious.
