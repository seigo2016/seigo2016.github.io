# Toolchain and Dependencies Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the Node.js, GitHub Actions, Astro, Tailwind, TypeScript, and package dependency stack while removing unused deprecated dependencies.

**Architecture:** Apply the migration in three isolated layers: runtime/CI metadata, dependency cleanup, and remaining major upgrades. Validate every layer with the repository's real static-site build so migration failures remain attributable to one change set.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, pnpm, Node.js, GitHub Actions

### Task 1: Modernize runtime and Actions

**Files:**
- Modify: `package.json`
- Modify: `.github/workflows/deploy.yml`
- Create: `.node-version`

1. Add Node `>=22.20.0 <25` and pnpm 10 metadata to `package.json`.
2. Add `.node-version` with Node 22.
3. Upgrade `actions/checkout` and `withastro/action` to current Node 24-based majors, explicitly building with Node 22.
4. Run `pnpm build`; expect exit code 0.

### Task 2: Remove unused and deprecated packages

**Files:**
- Modify: `src/components/Articles.astro`
- Modify: `src/components/Media.astro`
- Modify: `astro.config.mjs`
- Modify: `tsconfig.json`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

1. Remove the `node-fetch` imports so Node's global `fetch` is used.
2. Remove unused React integration/configuration and unused direct packages confirmed by import scans.
3. Regenerate the lockfile with pnpm 10.
4. Run `pnpm build`; expect exit code 0.

### Task 3: Upgrade maintained dependencies

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify migration-affected source/config files only when required

1. Upgrade every remaining direct dependency to its latest release using pnpm 10.
2. Run `pnpm build` to expose migration failures.
3. Apply the smallest migration changes required by Astro 7, Tailwind, and TypeScript.
4. Re-run `pnpm build`; expect exit code 0 and no errors.

### Task 4: Final dependency and repository verification

**Files:**
- Modify only files required to resolve verified findings

1. Run a clean frozen-lockfile install.
2. Run `pnpm build`.
3. Run `pnpm outdated`; expect no direct dependencies behind latest unless documented.
4. Run `pnpm audit` and inspect deprecated lockfile entries.
5. Run `git diff --check`, inspect `git diff`, and summarize residual warnings and risks.
