const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api", require("./routes/orderRoutes"));

app.listen(3002, () => console.log("Order Service running"));