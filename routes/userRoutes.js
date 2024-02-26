const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
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

// Apply doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifications router
router.post(
  "/get-all-notifications",
  authMiddleware,
  getAllNotificationController
);

module.exports = router;
