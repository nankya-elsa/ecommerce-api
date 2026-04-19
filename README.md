# Ecommerce API

A REST API for an ecommerce platform built with Node.js, Express, Sequelize and SQLite.

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - ORM for database management
- **SQLite** - Database
- **Swagger** - API documentation

## Project Structure

```
ecommerce-api/
├── config/
│   └── database.js
├── modules/
│   ├── users/
│   │   ├── user.model.js
│   │   ├── user.controller.js
│   │   └── user.routes.js
│   ├── products/
│   │   ├── product.model.js
│   │   ├── product.controller.js
│   │   └── product.routes.js
│   └── orders/
│       ├── order.model.js
│       ├── order.controller.js
│       └── order.routes.js
├── docs/
│   └── swagger.yaml
├── server.js
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Running the server

```bash
node server.js
```

### API Documentation

Once the server is running, visit:

```
http://localhost:3000/api-docs
```

## API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Get all users |
| POST | /api/users | Create a new user |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get one product |
| POST | /api/products | Create a new product |
| PUT | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/orders | Get all orders |
| GET | /api/orders/:id | Get one order |
| POST | /api/orders | Create a new order |
| PUT | /api/orders/:id | Update order status |
