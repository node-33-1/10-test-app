const request = require('supertest');
const app = require('../app');

let id = 0;

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
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(body.name);
});

test("GET /products/:id debe traer un producto por id", async () => {
    const res = await request(app).get(`/products/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBeDefined();
});

test("PUT /products/:id debe actualizar un producto", async () => {
    const body = {
        name: "Playstation 10 actualizada",
    }
    const res = await request(app).put(`/products/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
});

test("DELETE /products/:id debe eliminar un producto", async () => {
    const res = await request(app).delete(`/products/${id}`);
    expect(res.status).toBe(204);
});
