const router = require("express").Router();
const Product = require("../models/Product");

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get products
 */
router.get("/products", async (req, res) => {
  res.json(await Product.find());
});

router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send("Product added");
});

router.get("/products/:id", async (req, res) => {
  res.json(await Product.findById(req.params.id));
});

module.exports = router;