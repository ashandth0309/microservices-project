const router = require("express").Router();
const axios = require("axios");

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Place order
 */
router.post("/order", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await axios.get(`${process.env.USER_URL}/api/user/${userId}`);
    const product = await axios.get(`${process.env.PRODUCT_URL}/api/products/${productId}`);

    res.json({ user: user.data, product: product.data });
  } catch {
    res.status(500).send("Error");
  }
});

module.exports = router;