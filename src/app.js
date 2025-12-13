const express = require('express');
const path = require('path');
const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// --- DATA PERSISTENCE LAYER (In-Memory) ---
const users = [];
const products = [
    { id: 1, name: 'Red Roses (Batch of 50)', price: 45.00, category: 'Flowers', image: 'https://placehold.co/200x150?text=Roses' },
    { id: 2, name: 'Tulips Mixed Colors', price: 30.00, category: 'Flowers', image: 'https://placehold.co/200x150?text=Tulips' },
    { id: 3, name: 'Sunflower Seeds (Bulk)', price: 12.50, category: 'Seeds', image: 'https://placehold.co/200x150?text=Seeds' }
];
const orders = [];

// --- API ROUTES ---

// System Health Check
app.get('/api/health', (req, res) => res.status(200).json({ status: 'active' }));

// --- AUTHENTICATION ---

// User Registration
app.post('/api/register', (req, res) => {
    const { username, password, role } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing credentials' });
    }
    
    if (users.find(u => u.username === username)) {
        return res.status(409).json({ error: 'User already exists' });
    }
    
    const newUser = { 
        id: users.length + 1, 
        username, 
        password, 
        role: role || 'buyer' 
    };
    
    users.push(newUser);
    res.status(201).json({ message: 'Registration successful', user: newUser });
});

// User Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.status(200).json({ message: 'Login successful', user });
});

// --- PRODUCT MANAGEMENT ---

// Retrieve Product Catalog (Supports Search)
app.get('/api/products', (req, res) => {
    const { search } = req.query;
    
    if (search) {
        // Filter products by name (case-insensitive)
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(search.toLowerCase())
        );
        return res.status(200).json(filtered);
    }
    
    res.status(200).json(products);
});

// Add New Product (Supplier Only)
app.post('/api/products', (req, res) => {
    const { name, price, category, image } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ error: 'Invalid product data' });
    }
    
    const newProduct = {
        id: products.length + 1,
        name, 
        price: parseFloat(price), 
        category, 
        image: image || 'https://placehold.co/200x150?text=New+Item'
    };
    
    products.push(newProduct);
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

// Delete Product (Supplier Only)
app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    
    // Remove product from the array
    products.splice(index, 1);
    res.status(200).json({ message: 'Product deleted successfully' });
});

// --- ORDER MANAGEMENT ---

// Create New Order
app.post('/api/orders', (req, res) => {
    const { items, total, userId, username } = req.body;
    
    if (!items || items.length === 0) {
        return res.status(400).json({ error: 'Cannot process empty order' });
    }

    const newOrder = {
        id: orders.length + 1,
        items, 
        total, 
        userId, 
        username,
        date: new Date(),
        status: 'New'
    };
    
    orders.push(newOrder);
    res.status(201).json({ message: 'Order placed successfully', orderId: newOrder.id });
});

// Retrieve Orders (RBAC)
app.get('/api/orders', (req, res) => {
    const { userId, role } = req.query;
    
    if (role === 'supplier') {
        return res.status(200).json(orders);
    } else {
        const myOrders = orders.filter(o => o.userId == userId);
        return res.status(200).json(myOrders);
    }
});

// Update Order Status
app.put('/api/orders/:id', (req, res) => {
    const { status } = req.body;
    const order = orders.find(o => o.id == req.params.id);
    
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    
    order.status = status;
    res.status(200).json({ message: 'Order status updated', order });
});

module.exports = app;