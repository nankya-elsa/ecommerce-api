const Order = require("./order.model");
const User = require("../users/user.model");
const Product = require("../products/product.model");

// GET all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Product, attributes: ["id", "name", "price"] },
      ],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one order
const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Product, attributes: ["id", "name", "price"] },
      ],
    });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST - create an order
const createOrder = async (req, res) => {
  try {
    const product = await Product.findByPk(req.body.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const totalPrice = product.price * req.body.quantity;

    const order = await Order.create({
      userId: req.body.userId,
      productId: req.body.productId,
      quantity: req.body.quantity,
      totalPrice: totalPrice,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT - update order status
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await order.update({ status: req.body.status });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllOrders, getOneOrder, createOrder, updateOrderStatus };
