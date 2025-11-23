const request = require('supertest');
const app = require('../src/app');

describe('System Health Check', () => {
    it('GET / should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toContain('FreshCut');
    });
});