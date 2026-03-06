# 🏆 Kudos Board — Debug Exercise

Welcome! This is a small employee recognition app (a "Kudos Board") with a React frontend and Node.js/Express backend. The app lets teammates send and view recognition messages with points.

## The Scenario

A junior developer submitted this feature, and QA has flagged several issues. Your job is to find and fix the bugs. You're encouraged to **use whatever AI tools you normally work with** (Claude, Cursor, Copilot, etc.) — we want to see your real workflow.

## Setup

**Prerequisites:** Node.js 18+

```bash
# Terminal 1 — Start the API server
cd server
npm install --registry https://registry.npmjs.org
npm start

# Terminal 2 — Start the React frontend
cd client
npm install --registry https://registry.npmjs.org
npm run dev
```

The API runs on `http://localhost:3001` and the frontend on `http://localhost:3000`.

## Project Structure

```
server/
  index.js        Express API routes
  data.js         Mock data layer (simulates a database)

client/src/
  App.jsx         Main app with tab navigation
  api.js          API helper functions
  components/
    KudosFeed.jsx     Recognition feed with search
    SendKudos.jsx     Form to send kudos
    Leaderboard.jsx   Points leaderboard table
```

## What We're Looking For

- How you approach diagnosing unfamiliar code
- How you use AI tools in your debugging workflow
- Whether you verify your fixes actually work
- How you communicate your thought process

Good luck! 🎉
