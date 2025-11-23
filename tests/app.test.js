const request = require('supertest');
const app = require('../src/app');

describe('FreshCut Full System Tests', () => {
    
    // Health Check
    it('GET /api/health should return 200', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
    });

    // Registration
    it('POST /api/register should create user', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ username: 'final_test', password: '123' });
        expect(res.statusCode).toEqual(201);
    });

    // Catalog
    it('GET /api/products should return products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    // --- NEW: Order Processing Tests ---
    it('POST /api/orders should place an order', async () => {
        const orderData = {
            items: [{ id: 1, name: 'Rose', price: 45 }],
            total: 45
        };
        const res = await request(app).post('/api/orders').send(orderData);
        
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toContain('Order placed');
        expect(res.body).toHaveProperty('orderId');
    });

    it('POST /api/orders should fail if cart is empty', async () => {
        const res = await request(app).post('/api/orders').send({ items: [] });
        expect(res.statusCode).toEqual(400);
    });
});