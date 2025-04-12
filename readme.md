**This is the file structure for a basic Express server. This example includes error handling and demonstrates modularity.", "fileTree": {"app.js": {"file": {"contents": "const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes'); // Import routes

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
     console.error(err.stack);
 res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});"}}}, "routes.js": {"file": {"contents": "const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
     res.json({ message: 'Welcome to the API!' });
});

// Example route with error handling
router.get('/test', (req, res, next) => {
     try {
     // Simulate an error
 if (true) {
     const error = new Error('Something went wrong');
 error.status = 500; // Set the status code  throw error; // Throw the error to be caught by the error handling middleware  }
 res.json({ message: 'Test route success!' });
 } catch (error) {
     next(error); // Pass the error to the next middleware
 }
});

module.exports = router;"}}, "package.json": {"file": {"contents": "{
     \"name\": \"express-server\",
 \"version\": \"1.0.0\",
 \"description\": \"A basic Express server\",
 \"main\": \"app.js\",
 \"scripts\": {
     \"start\": \"node app.js\"
 },
 \"dependencies\": {
     \"express\": \"^4.18.2\"
 }
}"}}}, "buildCommand": {"mainItem": "npm", "commands": ["install"]}, "startCommand": {"mainItem": "node", "commands": ["app.js"]}}}# AICHATAPPWITHINBUILTWEBCONTAINER
**# 🤖 AI-Driven Real-Time Chat App

A full-stack, real-time chat application enhanced with **AI capabilities**, powered by **WebSockets**, **WebContainers**, and **Gemini AI**. Designed for seamless developer collaboration, AI assistance, and live code execution — all in the browser.

---

## ✨ Features

- **🔁 Real-Time Chat with WebSockets**
  - Fast, two-way messaging powered by `Socket.IO`.
  - Project-based rooms for scoped discussions.

- **🤖 Gemini AI Integration**
  - Mention `@ai` in any message to trigger intelligent responses.
  - Supports summarizing, code generation, Q&A, and more.
  - Powered by Google’s **Gemini AI**.

- **🧪 WebContainers for In-Browser Code Execution**
  - Users can run and share code in real-time.
  - Fully sandboxed development environment inside the chat.

- **🔐 JWT Authentication**
  - Secure access using JSON Web Tokens.
  - Token validation over WebSocket handshake.

---

## 🛠️ Tech Stack

| Layer          | Tech                                      |
|----------------|-------------------------------------------|
| Frontend       | React / Next.js, Tailwind CSS             |
| Backend        | Node.js, Express.js                       |
| Realtime Layer | Socket.IO                                 |
| AI Engine      | Gemini AI API (Google)                    |
| Code Sandbox   | WebContainers (e.g., StackBlitz Runtime)  |
| Database       | MongoDB, Mongoose                         |
| Auth           | JWT                                       |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/parasohri/ai-chat-app.git
cd ai-chat-app
# 🤖 AI-Driven Real-Time Chat App

A full-stack, real-time chat application enhanced with **AI capabilities**, powered by **WebSockets**, **WebContainers**, and **Gemini AI**. Designed for seamless developer collaboration, AI assistance, and live code execution — all in the browser.

---

## ✨ Features

- **🔁 Real-Time Chat with WebSockets**
  - Fast, two-way messaging powered by `Socket.IO`.
  - Project-based rooms for scoped discussions.

- **🤖 Gemini AI Integration**
  - Mention `@ai` in any message to trigger intelligent responses.
  - Supports summarizing, code generation, Q&A, and more.
  - Powered by Google’s **Gemini AI**.

- **🧪 WebContainers for In-Browser Code Execution**
  - Users can run and share code in real-time.
  - Fully sandboxed development environment inside the chat.

- **🔐 JWT Authentication**
  - Secure access using JSON Web Tokens.
  - Token validation over WebSocket handshake.

---

## 🛠️ Tech Stack

| Layer          | Tech                                      |
|----------------|-------------------------------------------|
| Frontend       | React, Tailwind CSS             |
| Backend        | Node.js, Express.js                       |
| Realtime Layer | Socket.IO                                 |
| AI Engine      | Gemini AI API (Google)                    |
| Code Sandbox   | WebContainers   |
| Database       | MongoDB, Mongoose                         |
| Auth           | JWT                                       |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone  https://github.com/parasohri/AICHATAPPWITHINBUILTWEBCONTAINER.git
📸 Demo Video
📺 Watch a full walkthrough here:https://youtu.be/G-3mRiZSLCk
watch till end

