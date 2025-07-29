// server.js
require('dotenv').config();
const express = require('express');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(ClerkExpressWithAuth());

// Example protected route
app.get('/api/protected', (req, res) => {
  const { userId } = req.auth;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.json({ message: `Hello, user ${userId}` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
