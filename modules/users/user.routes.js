const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("./user.controller");

router.get("/", getAllUsers);
router.post("/", createUser);

module.exports = router;
