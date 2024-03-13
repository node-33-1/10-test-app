const request = require('supertest');
const app = require('../app');

let id = 0;

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
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(body.name);
});

test('GET /cities/:id debe traer una ciudad por id', async () => {
    const res = await request(app).get(`/cities/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBeDefined();
});

test('PUT /cities/:id debe actualizar una ciudad', async () => {
    const body = {
        name: "Quito D.C. actualizada"
    }
    const res = await request(app).put(`/cities/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
});

test('DELETE /cities/:id debe eliminar una ciudad', async () => {
    const res = await request(app).delete(`/cities/${id}`);
    expect(res.status).toBe(204);
});

