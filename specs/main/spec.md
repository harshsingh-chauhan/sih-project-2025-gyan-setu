# Gyan Setu - Feature Specification

## Overview
Gyan Setu is an offline-first digital learning platform for rural students. This specification covers the core MVP features including authentication, content delivery, and progress tracking.

## Functional Requirements
- Student registration and login (Phone + PIN).
- Offline lesson viewing (Text, Image, Video) via user-initiated downloads.
- Interactive quizzes with local evaluation.
- Progress tracking and synchronization.
- Language selection (Punjabi, Hindi, English) with instant UI hot-reloading.

## Data Model
- **User**: ID, Name, Phone (Unique), PIN (Hashed), Role (Student/Teacher), Language Preference.
- **Lesson**: ID, Title, Content (JSON/HTML), Media URLs, Subject, Grade, DownloadStatus (Not Downloaded, Pending, Downloaded).
- **Progress**: UserID, LessonID, Status (Not Started, In Progress, Completed), LastAccessed, QuizScore.

## Non-Functional Requirements
- **Offline-First**: App must work without internet after initial sync.
- **Performance**: Initial load < 5s on 2G.
- **Accessibility**: WCAG 2.1 AA.
- **Storage**: Limit local content to 500MB with LRU cleanup.

## Edge Cases
- Syncing during intermittent connectivity.
- **Storage full scenarios**: Use LRU (Least Recently Used) auto-deletion to free space for new content.
- **Invalid PIN attempts**: Temporary lockout with exponential backoff after 3 failed attempts.
- **Sync Conflict Resolution**: Use Cumulative Merge to combine progress from multiple devices (e.g., keep completions for different lessons).
- **Manual Downloads**: Explicit user action required to initiate media/lesson downloads.
- **Language Switching**: Instant hot-reload of UI and content without losing progress or session state.

## Clarifications
### Session 2025-12-25
- Q: Sync Conflict Resolution → A: Cumulative Merge (combine progress from all devices).
- Q: Automatic Content Cleanup → A: LRU Auto-delete (automatically remove least recently used content when limit reached).
- Q: PIN Lockout Policy → A: Temporary Lockout (exponential backoff after repeated failures).
- Q: Media Download Strategy → A: On-Demand (user manually clicks to download specific lessons).
- Q: Localization Toggle Behavior → A: Instant Hot-Reload (update UI/content text immediately without navigation).
