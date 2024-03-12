const request = require('supertest');
const app = require('../app');


test('GET /cities debe retornar status 200', async () => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
});

test('POST /cities debe crear una ciudad', async () => {
    const body = {
        name: "Quito",
        country: "Ecuador",
        isCapital: true,
    }
    const res = await request(app).post('/cities').send(body);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(body.name);
});
