const express = require('express');
const path = require('path');
const app = express();

// Middleware for JSON parsing and static files
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// --- MOCK DATABASES ---

// Users Data (In-memory)
const users = [];

// Products Data (In-memory catalog for FreshCut)
const products = [
    { id: 1, name: 'Red Roses (Batch of 50)', price: 45.00, category: 'Flowers', image: 'https://placehold.co/200x150?text=Roses' },
    { id: 2, name: 'Tulips Mixed Colors', price: 30.00, category: 'Flowers', image: 'https://placehold.co/200x150?text=Tulips' },
    { id: 3, name: 'Organic Fertilizer (10kg)', price: 25.50, category: 'Supplies', image: 'https://placehold.co/200x150?text=Fertilizer' },
    { id: 4, name: 'Sunflower Seeds (Bulk)', price: 12.00, category: 'Seeds', image: 'https://placehold.co/200x150?text=Seeds' }
];

// --- ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'active', system: 'FreshCut B2B' });
});

// FEATURE 1: User Registration
app.post('/api/register', (req, res) => {
    const { username, password, role } = req.body;

    // Input Validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Check for duplicates
    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({ error: 'User already exists' });
    }

    // Create User
    const newUser = { id: users.length + 1, username, password, role: role || 'buyer' };
    users.push(newUser);
    
    res.status(201).json({ 
        message: 'Registration successful', 
        user: { id: newUser.id, username: newUser.username, role: newUser.role } 
    });
});

// FEATURE 2: Product Catalog
app.get('/api/products', (req, res) => {
    // Return the list of products
    res.status(200).json(products);
});

module.exports = app;