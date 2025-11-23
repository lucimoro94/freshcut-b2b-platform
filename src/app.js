const express = require('express');
const path = require('path');
const app = express();

// Middleware for reading JSON and serve static file
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Mock Database
const users = [];

// Base route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'active', system: 'FreshCut B2B' });
});

// FEATURE: User Registration Endpoint
app.post('/api/register', (req, res) => {
    const { username, password, role } = req.body;

    // 1. Input validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // 2. Duplication check
    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({ error: 'User already exists' });
    }

    // 3. User creation
    const newUser = { id: users.length + 1, username, password, role: role || 'buyer' };
    users.push(newUser);

    console.log(`New user registered: ${username} (${newUser.role})`);
    
    res.status(201).json({ 
        message: 'Registration successful', 
        user: { id: newUser.id, username: newUser.username, role: newUser.role } 
    });
});

module.exports = app;