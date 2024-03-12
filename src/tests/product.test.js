const request = require('supertest');
const app = require('../app');

test("GET /products debe retornar status 200", async () => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
});

test("POST /products debe crear un producto", async () => {
    const body = {
        name: "Playstation 10",
        price: 500,
        category: "videojuegos",
    }
    const res = await request(app).post('/products').send(body);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(body.name);
});
