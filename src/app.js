const express = require('express');
const path = require('path');
const app = express();

// Middleware for JSON parsing and static files
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// --- MOCK DATABASES ---

// Users Data
const users = [];

// Products Data
const products = [
    { id: 1, name: 'Red Roses (Batch of 50)', price: 45.00, category: 'Flowers', image: 'https://placehold.co/200x150?text=Roses' },
    { id: 2, name: 'Tulips Mixed Colors', price: 30.00, category: 'Flowers', image: 'https://placehold.co/200x150?text=Tulips' },
    { id: 3, name: 'Organic Fertilizer (10kg)', price: 25.50, category: 'Supplies', image: 'https://placehold.co/200x150?text=Fertilizer' },
    { id: 4, name: 'Sunflower Seeds (Bulk)', price: 12.00, category: 'Seeds', image: 'https://placehold.co/200x150?text=Seeds' }
];

// Orders Data (New)
const orders = [];

// --- ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'active', system: 'FreshCut B2B' });
});

// FEATURE 1: User Registration
app.post('/api/register', (req, res) => {
    const { username, password, role } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Missing credentials' });
    
    const userExists = users.find(u => u.username === username);
    if (userExists) return res.status(409).json({ error: 'User already exists' });

    const newUser = { id: users.length + 1, username, password, role: role || 'buyer' };
    users.push(newUser);
    res.status(201).json({ message: 'Registration successful', user: { username: newUser.username } });
});

// FEATURE 2: Product Catalog
app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

// FEATURE 3 & 4: Order Processing
app.post('/api/orders', (req, res) => {
    const { items, total } = req.body;

    // Validate Order
    if (!items || items.length === 0) {
        return res.status(400).json({ error: 'Cannot place an empty order' });
    }

    // Create Order
    const newOrder = {
        id: orders.length + 1,
        items,
        total,
        date: new Date(),
        status: 'Pending'
    };
    
    orders.push(newOrder);
    console.log(`Order #${newOrder.id} placed. Total: $${total}`);

    res.status(201).json({ message: 'Order placed successfully', orderId: newOrder.id });
});

module.exports = app;