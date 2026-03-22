const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");
require("dotenv").config();
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

const app = express();
app.use(express.json());

// Routes
app.use("/api", require("./routes/orderRoutes"));

// Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl: CSS_URL,
  })
);

// Root route (to avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Order Service is running 🚀");
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});