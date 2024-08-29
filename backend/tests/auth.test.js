const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('Auth routes', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'password', role: 1 });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User created');
  });

  it('should login a user', async () => {
    await new User({
      email: 'test@example.com',
      password: 'hashedpassword',
      role: 1,
    }).save();
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
