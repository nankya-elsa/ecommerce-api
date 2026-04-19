const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./modules/users/user.routes");
const productRoutes = require("./modules/products/product.routes");
const orderRoutes = require("./modules/orders/order.routes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Start server and connect to database
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");

    await sequelize.sync({ force: false });
    console.log("Database synced!");

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.log("Error starting server:", error);
  }
};

start();
