# Implementation Plan: Core MVP Foundation

**Branch**: `main` | **Date**: 2025-12-25 | **Spec**: [specs/main/spec.md](spec.md)
**Input**: Feature specification from `/specs/main/spec.md`

## Summary
Implement the core foundation of Gyan Setu, focusing on an offline-first architecture that supports student authentication, manual content downloads (up to 500MB), interactive lesson viewing with multilingual hot-reloading, and synchronized progress tracking using a cumulative merge strategy.

## Technical Context

**Language/Version**: TypeScript 5.3 / React 19  
**Primary Dependencies**: React Router 7, Zustand 5, Dexie.js 4, Workbox 7, Tailwind CSS 4, DaisyUI 5, Lucide React  
**Storage**: IndexedDB (via Dexie.js) for lessons/progress, LocalStorage for session tokens  
**Testing**: Vitest, React Testing Library  
**Target Platform**: Progressive Web App (PWA) optimized for low-end Android devices (Chrome/Edge)  
**Project Type**: Web Application  
**Performance Goals**: First Contentful Paint < 2s on 3G, Initial load < 5s on 2G, Offline startup < 1s  
**Constraints**: 500MB local storage limit with LRU cleanup, WCAG 2.1 AA compliance, Offline-first  
**Scale/Scope**: MVP phase covering Auth, Lesson Catalog, Viewer, Quizzes, and Sync Manager

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

1. **Offline-First Excellence**: [PASS] Dexie.js 4 chosen for robust IndexedDB management. All core features will be designed to work without network.
2. **Atomic Design & Modularity**: [PASS] Project already follows Atoms/Molecules/Organisms structure. New components will strictly adhere to this.
3. **Accessibility & Inclusion**: [PASS] DaisyUI provides accessible foundations. Multilingual hot-reloading is a core requirement.
4. **Synchronized Progress**: [PASS] Cumulative Merge strategy defined in spec for conflict resolution.
5. **Type-Safe & Scalable**: [PASS] Strict TypeScript usage in existing codebase; will be maintained.

## Project Structure

### Documentation (this feature)

```text
specs/main/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── components/          # Atomic Design structure
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── layouts/
│   └── pages/
├── hooks/               # useOfflineSync, useContentDownload, useMultilingual
├── services/
│   ├── api/             # Auth, Content, Sync services
│   ├── storage/         # dexie.db.ts, cache.service.ts
│   └── sync/            # syncManager.ts
├── store/               # Zustand stores (useAuthStore, useProgressStore)
├── types/               # Shared TypeScript interfaces
└── utils/               # formatters, validators, lru-cleanup
```

**Structure Decision**: Web application structure following Atomic Design principles for UI and a service-based architecture for storage and synchronization.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |