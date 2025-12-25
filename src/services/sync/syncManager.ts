import { db } from '../storage/dexie.db';
import { syncService } from '../api/sync.service';
import type { Progress, CompletionEvent } from '../../types';

export const syncManager = {
  /**
   * Orchestrates the sync process.
   */
  async performSync(userId: string, token: string, lastSyncToken: string) {
    try {
      // 1. Get local progress that hasn't been synced or has new events
      // For MVP, we'll just send all local progress and let the server handle it,
      // or we can filter by some flag. For now, let's get all progress for this user.
      const localProgress = await db.progress
        .where('userId')
        .equals(userId)
        .toArray();

      // 2. Call sync API
      const response = await syncService.sync({
        lastSyncToken,
        localProgress,
      }, token);

      // 3. Merge server changes into local DB
      for (const serverItem of response.serverChanges) {
        const localItem = await db.progress.get([userId, serverItem.lessonId]);
        
        if (localItem) {
          const merged = this.mergeProgress(localItem, serverItem);
          await db.progress.put(merged);
        } else {
          await db.progress.put(serverItem);
        }
      }

      return response.newSyncToken;
    } catch (error) {
      console.error('Sync failed:', error);
      throw error;
    }
  },

  /**
   * Implements Cumulative Merge logic for lesson progress.
   */
  mergeProgress(local: Progress, server: Progress): Progress {
    const combinedEvents = this.mergeEvents(
      local.completionEvents || [],
      server.completionEvents || []
    );

    const status = (local.status === 'completed' || server.status === 'completed') 
      ? 'completed' 
      : (local.status === 'in_progress' || server.status === 'in_progress') 
        ? 'in_progress' 
        : 'not_started';

    return {
      ...server,
      userId: local.userId, // Ensure we keep correct ID
      status,
      lastAccessed: Math.max(local.lastAccessed, server.lastAccessed),
      quizScore: Math.max(local.quizScore || 0, server.quizScore || 0),
      completionEvents: combinedEvents,
    };
  },

  /**
   * Helper to merge arrays of completion events by taking the union based on timestamp.
   */
  mergeEvents(local: CompletionEvent[], server: CompletionEvent[]): CompletionEvent[] {
    const eventMap = new Map<number, CompletionEvent>();
    
    [...local, ...server].forEach(event => {
      eventMap.set(event.completedAt, event);
    });

    return Array.from(eventMap.values()).sort((a, b) => b.completedAt - a.completedAt);
  }
};