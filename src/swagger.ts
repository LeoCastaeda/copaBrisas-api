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
  },
  apis: ["./src/routes/*.ts"], // Aquí indicarás dónde están los archivos con los comentarios para generar la doc
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
