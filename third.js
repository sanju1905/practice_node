const express = require('express');
const app = express();

const papa = [
  {
    name: "Sanjay",
    email: "Sanju@gmail.com"
  }
];

// Parse JSON bodies
app.use(express.json());

// Create a route for the root path
app.get('/', (req, res) => {
  res.json(papa);
});

// Create a route for the /profile path
app.get('/profile', (req, res) => {
  res.json(papa);
});

// Start the server on port 6002
app.listen(6002, () => {
  console.log('Server listening on port 6002');
});
