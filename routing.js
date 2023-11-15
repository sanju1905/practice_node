const express = require('express');
const app = express();

// Create a route for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a route for the /home path
app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

// Create a route for the /profile path
app.get('/profile', (req, res) => {
  res.send('This is your profile page!');
});

// Start the server on port 6001
app.listen(6001, () => {
  console.log('Server listening on port 6001');
});