const request = require('supertest');
const app = require('../src/app');

describe('FreshCut API Tests', () => {
    
    // Test Health Check
    it('GET /api/health should return system status', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('active');
    });

    // Test Registration Success
    it('POST /api/register should create a new user', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ 
                username: 'testflorist', 
                password: 'securepass', 
                role: 'buyer' 
            });
        
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual('Registration successful');
        expect(res.body.user.username).toEqual('testflorist');
    });

    // Test Registration Failure
    it('POST /api/register should fail without password', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({ username: 'baduser' });
        
        expect(res.statusCode).toEqual(400);
    });
});