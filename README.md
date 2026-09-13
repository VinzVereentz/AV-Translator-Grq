# AV Translator Groq Backend

Deploy this folder to a server/platform that supports Node.js. Set `GROQ_API_KEY` as a server secret; never put it in Flutter or GitHub source.

Endpoints:
- POST `/translate` JSON `{ "text": "...", "model": "llama-3.3-70b-versatile" }`

Install: `npm install`
Run: `npm start`
