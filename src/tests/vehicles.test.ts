import request from "supertest";
import app from "../app";
import prisma from "../prisma/client";

describe("GET /vehicles", () => {
  beforeAll(async () => {
    // Limpiar dependencias
    await prisma.booking.deleteMany();
    await prisma.vehicle.deleteMany();
    await prisma.customer.deleteMany();

    // Crear cliente necesario para el vehicle
    const customer = await prisma.customer.create({
      data: {
        name: "Juan Pérez",
        email: "juan@example.com",
        phone: "123456789",
      },
    });

    // Crear vehículo con relación válida
    await prisma.vehicle.create({
      data: {
        plate: "ABC1234",
        brand: "Toyota",
        model: "Corolla",
        customerId: customer.id,
      },
    });
  });

  it("should return status 200 and a list of vehicles", async () => {
    const res = await request(app).get("/vehicles");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);

    const vehicle = res.body[0];
    expect(vehicle).toHaveProperty("id");
    expect(vehicle).toHaveProperty("plate");
    expect(vehicle).toHaveProperty("brand");
    expect(vehicle).toHaveProperty("model");
    expect(vehicle).toHaveProperty("customerId");
  });

  afterAll(async () => {
    await prisma.booking.deleteMany();
    await prisma.vehicle.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.$disconnect();
  });
});
