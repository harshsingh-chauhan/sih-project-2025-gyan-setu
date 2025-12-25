# API Contracts: Core MVP

## Authentication

### POST /api/auth/login
- **Request**: `{ phone: string, pin: string }`
- **Response**: `{ user: User, token: string }`
- **Error**: `401 Unauthorized` (triggers exponential backoff on client)

### POST /api/auth/register
- **Request**: `{ name: string, phone: string, pin: string, role: string }`
- **Response**: `{ user: User, token: string }`

## Content Management

### GET /api/lessons
- **Query**: `grade=8&lang=pa`
- **Response**: `Array<LessonMetadata>`
- **Note**: Used for browsing catalog when online.

### GET /api/lessons/{id}
- **Response**: `FullLessonDetail`
- **Note**: Fetch full content for download.

## Synchronization

### POST /api/sync
- **Request**: `{ last_sync_token: string, local_progress: Array<ProgressUpdate> }`
- **Response**: `{ server_changes: Array<ProgressUpdate>, new_sync_token: string }`
- **Logic**: Implements Cumulative Merge on the server and returns missing updates to the client.
