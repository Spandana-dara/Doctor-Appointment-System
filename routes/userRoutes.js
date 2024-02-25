const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

//routes
//login
router.post("/login", loginController);

//register
router.post("/register", registerController);

// Auth
router.post("/getUserData", authMiddleware, authController);

module.exports = router;
