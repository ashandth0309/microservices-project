const swaggerJsdoc = require("swagger-jsdoc");

module.exports = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "User Service API", version: "1.0.0" }
  },
  apis: [process.cwd() + "./src/routes/*.js"]
});

