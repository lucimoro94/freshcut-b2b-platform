const request = require('supertest');
const app = require('../src/app');

describe('FreshCut B2B Platform - Final System Tests', () => {
    
    let buyerId;
    let orderId;

    // --- 1. SYSTEM HEALTH ---
    it('GET /api/health should return system status', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('active');
    });

    // --- 2. AUTHENTICATION FLOW ---
    it('POST /api/register should register a new Buyer', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ username: 'test_buyer', password: 'password123', role: 'buyer' });
        
        expect(res.statusCode).toEqual(201);
        expect(res.body.user).toHaveProperty('id');
        // Store ID for subsequent tests
        buyerId = res.body.user.id; 
    });

    it('POST /api/login should authenticate the user', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ username: 'test_buyer', password: 'password123' });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Login successful');
    });

    it('POST /api/login should reject invalid credentials', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ username: 'test_buyer', password: 'WRONG_PASSWORD' });
        
        expect(res.statusCode).toEqual(401);
    });

    // --- 3. PRODUCT CATALOG ---
    it('GET /api/products should return the catalog', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('POST /api/products should allow Supplier to add a product', async () => {
        const newProduct = {
            name: 'Test Orchid',
            price: 50.00,
            category: 'Flowers'
        };
        
        const res = await request(app)
            .post('/api/products')
            .send(newProduct);
            
        expect(res.statusCode).toEqual(201);
        expect(res.body.product.name).toEqual('Test Orchid');
    });

    // --- 4. ORDER PROCESSING (B2B LIFECYCLE) ---
    it('POST /api/orders should place an order for the Buyer', async () => {
        const orderData = {
            items: [{ id: 1, name: 'Red Roses', price: 45.00 }],
            total: 45.00,
            userId: buyerId,
            username: 'test_buyer'
        };

        const res = await request(app).post('/api/orders').send(orderData);
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('orderId');
        // Store Order ID for status update tests
        orderId = res.body.orderId; 
    });

    it('GET /api/orders should return order history for Buyer', async () => {
        const res = await request(app)
            .get(`/api/orders?role=buyer&userId=${buyerId}`);
        
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        // Verify the order created previously is present
        expect(res.body[0].id).toEqual(orderId);
    });

    it('PUT /api/orders/:id should allow Supplier to update status', async () => {
        const res = await request(app)
            .put(`/api/orders/${orderId}`)
            .send({ status: 'Processing' });
            
        expect(res.statusCode).toEqual(200);
        expect(res.body.order.status).toEqual('Processing');
    });
});