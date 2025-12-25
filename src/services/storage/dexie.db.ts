import Dexie, { type Table } from 'dexie';

export interface User {
  id: string;
  name: string;
  phone: string;
  pin_hash: string;
  role: 'student' | 'teacher';
  language: 'pa' | 'hi' | 'en';
  sync_token?: string;
}

export interface Lesson {
  id: string;
  title: {
    pa: string;
    hi: string;
    en: string;
  };
  content: {
    pa: unknown;
    hi: unknown;
    en: unknown;
  };
  media: Array<{
    type: 'video' | 'image';
    url: string;
    size: number;
  }>;
  subject: string;
  grade: number;
  last_accessed: number; // Timestamp for LRU
  download_status: 'not_downloaded' | 'pending' | 'downloaded';
}

export interface Progress {
  user_id: string;
  lesson_id: string;
  status: 'not_started' | 'in_progress' | 'completed';
  score: number;
  events: Array<{
    type: 'complete' | 'attempt';
    timestamp: number;
  }>;
  last_synced?: number;
}

export interface OfflineQueueItem {
  id?: number;
  type: 'progress_sync' | 'profile_update';
  data: unknown;
  timestamp: number;
}

export class GyanSetuDatabase extends Dexie {
  users!: Table<User>;
  lessons!: Table<Lesson>;
  progress!: Table<Progress>;
  offline_queue!: Table<OfflineQueueItem>;

  constructor() {
    super('GyanSetuDB');
    this.version(1).stores({
      users: 'id, &phone',
      lessons: 'id, last_accessed, subject, grade',
      progress: '[user_id+lesson_id], user_id, lesson_id',
      offline_queue: '++id, timestamp'
    });
  }
}

export const db = new GyanSetuDatabase();
