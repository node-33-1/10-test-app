const request = require('supertest');
const app = require('../app');

let id;

test('GET /users debe retornar status 200', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /users debe crear un usuario', async () => { 
    const body = {
        email: "test@gmail.com",
        name: "test",
        password: "test1234",
    }
    const res = await request(app).post('/users').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(body.name);
    expect(res.body.id).toBeDefined();
});

test('PUT /users/:id debe actualizar un usuario', async () => {
    const body = {
        name: "test updated",
    }
    const res = await request(app).put(`/users/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
});

test('DELETE /users/:id debe eliminar un usuario', async () => {
    const res = await request(app).delete(`/users/${id}`);
    expect(res.status).toBe(204);
});
