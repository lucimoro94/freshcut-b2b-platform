const request = require('supertest');
const app = require('../src/app');

describe('FreshCut API Tests', () => {
    
    // --- Health Check Tests ---
    it('GET /api/health should return system status', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('active');
    });

    // --- Registration Tests ---
    it('POST /api/register should create a new user', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ username: 'catalog_tester', password: '123', role: 'buyer' });
        expect(res.statusCode).toEqual(201);
    });

    // --- Catalog Tests (NEW) ---
    it('GET /api/products should return a list of products', async () => {
        const res = await request(app).get('/api/products');
        
        // Check status code
        expect(res.statusCode).toEqual(200);
        
        // Check that body is an array
        expect(Array.isArray(res.body)).toBeTruthy();
        
        // Check that we have at least one product
        expect(res.body.length).toBeGreaterThan(0);
        
        // Check structure of the first product
        const product = res.body[0];
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('price');
    });
});