import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE ORDER
router.post("/", protect, async (req, res) => {
  const order = await Order.create({
    ...req.body,
    user: req.user.id
  });

  res.json(order);
});

// GET USER ORDERS
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});

export default router;