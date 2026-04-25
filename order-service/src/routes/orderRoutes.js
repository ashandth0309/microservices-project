const router = require("express").Router();
const axios = require("axios");
const { USER_URL, PRODUCT_URL } = require("../config");

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Place an order (integrates User & Product services)
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64f123abc1234567890
 *               productId:
 *                 type: string
 *                 example: 64f456def4567890123
 *     responses:
 *       200:
 *         description: Order placed successfully
 *       404:
 *         description: User or Product not found
 *       500:
 *         description: Server error
 */
router.post("/order", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Call User Service
    const userResponse = await axios.get(
      `${USER_URL}/api/user/${userId}`
    );

    // Call Product Service
    const productResponse = await axios.get(
      `${PRODUCT_URL}/api/products/${productId}`
    );

    // Combine results
    res.json({
      message: "Order placed successfully",
      user: userResponse.data,
      product: productResponse.data,
    });

  } catch (err) {
    console.error(err.message);

    if (err.response && err.response.status === 404) {
      return res.status(404).json({ message: "User or Product not found" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;