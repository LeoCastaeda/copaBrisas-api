// src/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Copabrisas",
      version: "1.0.0",
      description: "Documentación de la API Copabrisas",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {
        Customer: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              example: "c1234567-89ab-4cde-f012-3456789abcde",
            },
            name: {
              type: "string",
              example: "Leo Castañeda",
            },
            phone: {
              type: "string",
              example: "654321987",
            },
            email: {
              type: "string",
              format: "email",
              example: "leo@example.com",
            },
          },
        },
        CustomerInput: {
          type: "object",
          required: ["name", "phone", "email"],
          properties: {
            name: {
              type: "string",
              example: "Leo Castañeda",
            },
            phone: {
              type: "string",
              example: "654321987",
            },
            email: {
              type: "string",
              format: "email",
              example: "leo@example.com",
            },
          },
        },
        Vehicle: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            plate: {
              type: "string",
              example: "ABC1234",
            },
            brand: {
              type: "string",
              example: "Toyota",
            },
            model: {
              type: "string",
              example: "Corolla",
            },
            customerId: {
              type: "integer",
              example: 1,
            },
          },
        },
        VehicleInput: {
          type: "object",
          required: ["plate", "brand", "model", "customerId"],
          properties: {
            plate: {
              type: "string",
              example: "ABC1234",
            },
            brand: {
              type: "string",
              example: "Toyota",
            },
            model: {
              type: "string",
              example: "Corolla",
            },
            customerId: {
              type: "integer",
              example: 1,
            },
          },
        },
        Service: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Cambio de parabrisas",
            },
            price: {
              type: "number",
              example: 150.0,
            },
            duration: {
              type: "integer",
              example: 60,
            },
          },
        },
        ServiceInput: {
          type: "object",
          required: ["name", "price", "duration"],
          properties: {
            name: {
              type: "string",
              example: "Cambio de parabrisas",
            },
            price: {
              type: "number",
              example: 150.0,
            },
            duration: {
              type: "integer",
              example: 60,
            },
          },
        },
        City: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Barcelona",
            },
          },
        },
        CityInput: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              example: "Barcelona",
            },
          },
        },
        Booking: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            date: {
              type: "string",
              format: "date-time",
              example: "2025-07-15T10:00:00.000Z",
            },
            customerId: { type: "integer", example: 1 },
            cityId: { type: "integer", example: 1 },
            serviceId: { type: "integer", example: 1 },
            vehicleId: { type: "integer", example: 1 },
            status: { type: "string", example: "confirmed" },
            customer: {
              type: "object",
              properties: {
                id: { type: "integer", example: 1 },
                name: { type: "string", example: "Carlos Mendoza" },
                phone: { type: "string", example: "123456789" },
                email: { type: "string", example: "carlos@example.com" },
                createdAt: {
                  type: "string",
                  format: "date-time",
                  example: "2025-07-15T11:05:39.000Z",
                },
              },
            },
            
          },
        },
        BookingInput: {
          type: "object",
          required: ["date", "customerId", "cityId", "serviceId", "vehicleId"],
          properties: {
            date: {
              type: "string",
              format: "date-time",
              example: "2025-07-15T10:00:00.000Z",
            },
            customerId: { type: "integer", example: 1 },
            cityId: { type: "integer", example: 1 },
            serviceId: { type: "integer", example: 1 },
            vehicleId: { type: "integer", example: 1 },
            status: { type: "string", example: "confirmed" },
          },
        },
        Review: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            content: {
              type: "string",
              example: "Muy buen servicio",
              description: "Comentario del cliente sobre el servicio recibido",
            },
            rating: {
              type: "integer",
              minimum: 1,
              maximum: 5,
              example: 4,
              description: "Calificación del servicio de 1 a 5",
            },
            customerId: {
              type: "integer",
              example: 1,
              description: "ID del cliente que realiza la reseña",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2025-07-15T23:42:04.921Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2025-07-15T23:50:00.000Z",
            },
            customer: {
              type: "object",
              description: "Datos del cliente que hizo la reseña",
              properties: {
                id: { type: "integer", example: 1 },
                name: { type: "string", example: "Carlos Mendoza" },
                phone: { type: "string", example: "123456789" },
                email: { type: "string", example: "carlos@example.com" },
                createdAt: {
                  type: "string",
                  format: "date-time",
                  example: "2025-07-15T11:05:39.000Z",
                },
              },
            },
          },
        },
        ReviewInput: {
          type: "object",
          required: ["content", "rating", "customerId"],
          properties: {
            content: {
              type: "string",
              example: "Muy buen servicio",
              description: "Comentario del cliente",
            },
            rating: {
              type: "integer",
              minimum: 1,
              maximum: 5,
              example: 4,
              description: "Calificación del servicio",
            },
            customerId: {
              type: "integer",
              example: 1,
              description: "ID del cliente que realiza la reseña",
            },
          },
        },
        ReviewUpdateInput: {
          type: "object",
          properties: {
            content: {
              type: "string",
              example: "Servicio rápido y amable",
            },
            rating: {
              type: "integer",
              minimum: 1,
              maximum: 5,
              example: 5,
            },
            customerId: {
              type: "integer",
              example: 1,
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

