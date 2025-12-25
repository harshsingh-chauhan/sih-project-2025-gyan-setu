# Research: Core MVP Foundation

## Offline Storage & Sync (Dexie.js 4)

**Decision**: Use Dexie.js 4 with an `offline_queue` table and a `last_accessed` index on the `lessons` table.
**Rationale**: Dexie provides a clean Promise-based API for IndexedDB. The `last_accessed` index is critical for implementing the LRU (Least Recently Used) cleanup required by the spec.
**Alternatives considered**: 
- Raw IndexedDB: Too verbose and error-prone.
- LocalForage: Good for key-value, but Dexie's querying capabilities are better for structured content like lessons and quizzes.

## Media Caching Strategy (Workbox 7)

**Decision**: Use a "Cache-First" strategy for lesson assets but trigger downloads manually via the Cache API in the `useContentDownload` hook.
**Rationale**: Service workers can intercept requests, but the "Download" button in the UI should explicitly populate the cache. Workbox's `CacheableResponsePlugin` will ensure we don't cache partial or failed downloads.
**Alternatives considered**: 
- Pre-caching all content: Rejected because rural users have limited data and storage. Spec requires "manual downloads".

## Sync Conflict Resolution: Cumulative Merge

**Decision**: Progress records will store an array of "completion_events" with timestamps. The merge logic will simply take the union of all events.
**Rationale**: In a learning context, if Lesson A is finished on Device 1 and Lesson B on Device 2, the user has completed both. Cumulative merge preserves all progress without data loss.
**Alternatives considered**:
- Last Write Wins: Could lose progress if a device with an older timestamp but more completed lessons syncs later.

## Multilingual Hot-Reloading

**Decision**: Use `react-i18next` for UI text and structured JSON objects for lesson content, where keys are language codes.
**Rationale**: `react-i18next` handles instant UI updates. Having lesson content structured as `{ "pa": "...", "hi": "...", "en": "..." }` allows for seamless switching within the `LessonViewer` without extra network/DB fetches.
**Alternatives considered**:
- Fetching different lesson files per language: Too slow and requires network or extra storage.
