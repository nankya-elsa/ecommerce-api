const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const User = require("../users/user.model");
const Product = require("../products/product.model");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
});

// An order belongs to a user and a product
Order.belongsTo(User, { foreignKey: "userId" });
Order.belongsTo(Product, { foreignKey: "productId" });

module.exports = Order;
