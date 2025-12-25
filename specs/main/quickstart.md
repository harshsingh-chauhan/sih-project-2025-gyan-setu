# Quickstart: Core MVP Development

## Prerequisites
- Node.js 22+
- npm 10+

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
- `npm run storybook`: View components in isolation.

## Troubleshooting Offline Sync
- Use Chrome DevTools -> Application -> IndexedDB to inspect local data.
- Use Network tab with "Offline" throttling to test PWA capabilities.
- Clear Site Data to reset the local environment.
