const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/dashboard", authMiddleware, userController.getUser);

module.exports = router;
