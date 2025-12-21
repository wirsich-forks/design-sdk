# DESIGN SDK

> Build a single app that supports all figma, sketch and bridged.

A mid wrapper for building consistant figma &amp; sketch &amp; reflection plugin, with single api reference

> Powers [Grida Figma Assistant](https://github.com/gridaco/assistant)

## Features

- mocks desing platform environment - faster development.
- single api reference - write once, run everywhere.
- reflect standard in the box - based on [reflect](https://reflect-ui.com) DSL, develop with unified api structure.
- UI support - different ui feedback features by platform such as notify (figma) is supported by ui library
- OOP Based design access objects
- General UI Related utilities in the box
- Testing supported
- Provides Web based development environment

## Tech Stack

- **Package Manager**: pnpm (monorepo workspace)
- **Build Tool**: tsup
- **Test Framework**: vitest
- **TypeScript**: ^5.3.3
- **Monorepo**: Turborepo
- **CI/CD**: GitHub Actions with Changesets for automated publishing

## Packages & Usage

```sh
pnpm add @design-sdk/<package>
```

**Packages**

- figma
  - figma-remote
  - figma-url
- sketch

## Are you looking for universal design converter?

Take a look at [design-file-converter](https://github.com/gridaco/design-file-converter)

## Sketch reference

- https://developer.sketch.com/plugins/javascript-api
- https://developer.sketch.com/reference/api/

## Figma reference

- https://www.figma.com/plugin-docs/api/

## Development

### Setup

```sh
pnpm install
```

### Build

```sh
pnpm build
```

### Test

```sh
pnpm test
```

### Typecheck

```sh
pnpm typecheck
```

### Watch Mode

```sh
pnpm dev
```

## Publishing

This repository uses [Changesets](https://github.com/changesets/changesets) for version management and automated publishing.

1. Create a changeset: `pnpm changeset`
2. Version packages: `pnpm version` (or let CI handle it)
3. Publish: `pnpm release` (or let CI handle it)

Changesets automatically create version bump PRs and publish to npm when merged to main.
