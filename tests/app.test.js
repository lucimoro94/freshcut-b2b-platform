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
        buyerId = res.body.user.id; 
    });

    it('POST /api/login should authenticate the user', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ username: 'test_buyer', password: 'password123' });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Login successful');
    });

    // --- 3. PRODUCT CATALOG & SEARCH ---
    it('GET /api/products should return the catalog', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('GET /api/products?search=rose should filter products', async () => {
        const res = await request(app).get('/api/products?search=rose');
        expect(res.statusCode).toEqual(200);
        // Should find "Red Roses"
        expect(res.body[0].name.toLowerCase()).toContain('rose');
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

    // --- 4. MAINTENANCE: DELETE PRODUCT ---
    it('DELETE /api/products/:id should allow Supplier to remove a product', async () => {
        // First create a product to delete
        const createRes = await request(app)
            .post('/api/products')
            .send({ name: 'To Delete', price: 10, category: 'Test' });
        
        const productId = createRes.body.product.id;

        // Then delete it
        const deleteRes = await request(app).delete(`/api/products/${productId}`);
        expect(deleteRes.statusCode).toEqual(200);
        expect(deleteRes.body.message).toContain('deleted');
    });

    // --- 5. ORDER PROCESSING ---
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
        orderId = res.body.orderId; 
    });

    it('PUT /api/orders/:id should allow Supplier to update status', async () => {
        const res = await request(app)
            .put(`/api/orders/${orderId}`)
            .send({ status: 'Processing' });
            
        expect(res.statusCode).toEqual(200);
        expect(res.body.order.status).toEqual('Processing');
    });
});