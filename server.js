// server.js - The main application file

// 1. Import necessary libraries
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
// const { GoogleGenAI } = require('@google/genai'); // Uncomment this when you add the AI code

const app = express();
const PORT = process.env.PORT || 3000;

// Set a simple HTML page for the root route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Simple Proxy & AI</title></head>
    <body>
        <h1>Welcome to Your Proxy App</h1>
        <p>Your app is running! You need to add the proxy and AI logic here.</p>
        <p>The Gemini API Key is available in the server environment as: \${process.env.GEMINI_API_KEY ? 'Set' : 'Not Set'}</p>

        <h2>Proxy Test:</h2>
        <form action="/proxy-route" method="get">
            <input name="url" placeholder="Enter a URL to proxy" required>
            <button type="submit">Go</button>
        </form>

        <h2>AI Test:</h2>
        </body>
    </html>
  `);
});


// 2. Proxy Setup (Basic Example)
// You would use the URL from the form above to dynamically set the target
app.use('/proxy-route', createProxyMiddleware({ 
    target: 'https://www.google.com', // A default target for testing
    changeOrigin: true,
    pathRewrite: {
        '^/proxy-route': '', // Remove the '/proxy-route' prefix
    },
    logger: console 
}));


// 3. AI Logic Placeholder (You will develop this later)
app.get('/ai-chat', (req, res) => {
    // This is where the code to talk to the Gemini API would go
    res.json({ message: "AI chat endpoint is working!", status: "Ready for code" });
});


// Vercel deployment requires the server to be exported, not just listened to.
module.exports = app; 
// If running locally, you would use: app.listen(PORT, () => console.log(...))
