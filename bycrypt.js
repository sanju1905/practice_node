const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory user database (replace this with a database in a real application)
const users = [];

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username is already taken
        if (users.some(user => user.username === username)) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        // Hash and salt the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

        // Save the user to the database (in-memory in this example)
        users.push({ username, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Authenticate a user
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user in the database
        const user = users.find(user => user.username === username);

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Compare the provided password with the stored hashed password using bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
