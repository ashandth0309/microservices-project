const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register user
 */
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User registered");
});

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login user
 */
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

module.exports = router;