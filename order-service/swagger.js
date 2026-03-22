const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

module.exports = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Order Service API", version: "1.0.0" }
  },
  apis: [path.join(__dirname, "./src/routes/*.js")]
});