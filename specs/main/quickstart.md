# Quickstart: Core MVP Development

## Prerequisites
- Node.js 22+
- npm 10+
- Modern Browser (Chrome/Edge recommended for PWA testing)

## Local Setup
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Initialize the local database:
   - The app uses `Dexie.js` which initializes IndexedDB on first run in the browser.
3. Start the development server:
   ```bash
   npm run dev
   ```

## Key Development Commands
- `npm run lint`: Check for type errors and linting issues.
- `npm run test`: Run Vitest unit tests.
- `npm run build`: Build the PWA for production.
- `npm run preview`: Preview the production build locally.

## Deployment Instructions (PWA)

### Building for Production
The application is built using Vite and configured as a PWA using `vite-plugin-pwa`.
```bash
npm run build
```
This generates a `dist/` folder containing static assets and the service worker configuration (`sw.js`).

### Deploying to Static Hosting
The `dist/` folder can be deployed to any static hosting provider (Vercel, Netlify, Firebase Hosting, GitHub Pages).
- **Vercel**: Connect your repo and set Output Directory to `dist`.
- **Netlify**: Drag and drop the `dist` folder or connect your repo.
- **GitHub Pages**: Use `gh-pages` to publish the `dist` folder.

**Note**: Ensure your server serves `sw.js` with the correct MIME type and `Cache-Control: no-cache` headers for updates to propagate immediately.

## Sync Testing Guide

### Scenario 1: Offline Progress Tracking (Cumulative Merge)
1. **Login** and navigate to a lesson.
2. **Go Offline**:
   - Open Chrome DevTools (`F12`).
   - Go to the **Network** tab.
   - Change throttling to **Offline**.
3. **Complete Content**:
   - Finish a quiz or mark a lesson as complete.
   - Verify the "Sync Status" indicator (top right) shows "Offline".
4. **Reconnect**:
   - Change throttling back to **No throttling**.
   - Watch the "Sync Status" indicator change to "Syncing..." then "Synced".
5. **Verify**:
   - Check the `pendingSync` table in IndexedDB (Application tab -> Storage -> IndexedDB -> GyanSetuDB). It should be empty after sync.
   - Check the `progress` table to ensure the new status is recorded.

### Scenario 2: Manual Downloads & LRU Eviction
1. **Download**:
   - Click the download button on a Lesson Card.
   - Verify the progress bar and "Offline Ready" badge.
   - Check Storage Usage in the "Downloads" page or component.
2. **Offline Access**:
   - Go Offline (Network tab).
   - Refresh the page.
   - Click "Start Learning" on the downloaded lesson. It should load instantly from the Cache Storage.
3. **LRU Cleanup**:
   - Download multiple lessons until nearing the 500MB limit (mock this by lowering the limit in `cache.service.ts` temporarily if needed).
   - Verify that the least recently accessed lesson is removed when the limit is exceeded.

## Troubleshooting

### Resetting Local Environment
If you encounter stale data or schema conflicts during development:
1. Open DevTools -> **Application**.
2. Go to **Storage**.
3. Click **Clear site data** (ensure "Unregister service workers" is checked).
4. Reload the page.

### Debugging Service Workers
- **Update on Reload**: Check "Update on reload" in the Application -> Service Workers tab to bypass the service worker cache during development.
- **Console Logs**: Look for "Workbox" logs in the console to trace caching strategies.