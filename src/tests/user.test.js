const request = require('supertest');
const app = require('../app');

let id;
let token;

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

test("POST /users/login debe retornar un usuario y un token", async () => {
    const body = {
        email: "test@gmail.com",
        password: "test1234",
    }
    const res = await request(app).post('/users/login').send(body);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(body.email);
});

test("POST /users/login con credenciales incorrectas debe retornar error", async () => {
    const body = {
        email: "test-incorrecto@gmail.com",
        password: "test1234-incorrecto",
    }
    const res = await request(app).post('/users/login').send(body);
    expect(res.status).toBe(401);
});

test('GET /users debe retornar status 200', async () => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('PUT /users/:id debe actualizar un usuario', async () => {
    const body = {
        name: "test updated",
    }
    const res = await request(app)
        .put(`/users/${id}`)
        .send(body)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
});

test('DELETE /users/:id debe eliminar un usuario', async () => {
    const res = await request(app)
        .delete(`/users/${id}`)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(204);
});
