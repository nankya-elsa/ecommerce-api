const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrderStatus,
} = require("./order.controller");

router.get("/", getAllOrders);
router.get("/:id", getOneOrder);
router.post("/", createOrder);
router.put("/:id", updateOrderStatus);

module.exports = router;
