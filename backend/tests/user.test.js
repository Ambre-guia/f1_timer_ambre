const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

describe('User routes', () => {
  let token;

  beforeAll(async () => {
    const user = new User({
      email: 'test@example.com',
      password: 'hashedpassword',
      role: 1,
    });
    await user.save();
    token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
  });

  it('should get user dashboard', async () => {
    const res = await request(app)
      .get('/api/users/dashboard')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe('test@example.com');
  });
});
