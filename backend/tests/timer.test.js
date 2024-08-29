const request = require("supertest");
const app = require("../server");
const Timer = require("../models/Timer");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

describe("Timer routes", () => {
  let token;
  let userId;

  beforeAll(async () => {
    const user = new User({
      email: "test@example.com",
      password: "hashedpassword",
      role: 1,
    });
    await user.save();
    userId = user._id;
    token = jwt.sign({ userId }, "your_jwt_secret");
  });

  it("should create a timer", async () => {
    const res = await request(app)
      .post("/api/timers/create")
      .send({ time: 123456 })
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.time).toBe(123456);
  });

  it("should get the best time", async () => {
    await new Timer({ user_id: userId, time: 500 }).save();
    const res = await request(app)
      .get("/api/timers/best-time")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.time).toBe(500);
  });
});
