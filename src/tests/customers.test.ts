// tests/customers.test.ts
import request from "supertest";
import app from "../app"; // Ensure this path is correct based on your project structure

describe("GET /customers", () => {
  it("should return status 200 and a list of customers", async () => {
    const res = await request(app).get("/customers");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
