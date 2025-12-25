# Data Model: Core MVP

## User Entity
Represents the authenticated student or teacher.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary Key |
| name | String | Full name |
| phone | String | Unique phone number (Login ID) |
| pin_hash | String | 4-digit PIN (Hashed) |
| role | Enum | 'student' | 'teacher' |
| language | Enum | 'pa' | 'hi' | 'en' |
| sync_token | String | Last successful sync anchor |

## Lesson Entity
Represents educational content.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary Key |
| title | Object | { pa, hi, en } strings |
| content | Object | { pa, hi, en } structured JSON/HTML |
| media | Array | List of { type: 'video'|'image', url, size } |
| subject | String | e.g., 'Mathematics' |
| grade | Integer | e.g., 8 |
| last_accessed | Timestamp | Used for LRU cleanup |
| download_status | Enum | 'not_downloaded' | 'pending' | 'downloaded' |

## Progress Entity
Tracks user interaction with lessons.

| Field | Type | Description |
|-------|------|-------------|
| user_id | UUID | Foreign Key |
| lesson_id | UUID | Foreign Key |
| status | Enum | 'not_started' | 'in_progress' | 'completed' |
| score | Integer | Highest quiz score achieved |
| events | Array | List of { type: 'complete'|'attempt', timestamp } for Cumulative Merge |
| last_synced | Timestamp | Server timestamp of last sync |
