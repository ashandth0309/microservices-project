const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");
require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
app.use("/api", require("./routes/orderRoutes"));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root route (to avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Order Service is running 🚀");
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});