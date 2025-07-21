// index.js

const express = require('express');
const app = express();

// Use environment variable or default to 0011
const PORT = 8080;

// Root endpoint
app.get('/', (req, res) => {
  res.send('App deployed successfully via CI/CD on EC2!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

