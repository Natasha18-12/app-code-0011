const express = require('express');
const app = express();
const port = 0011;

app.get('/', (req, res) => {
  res.send('Hello from my Node.js app!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
