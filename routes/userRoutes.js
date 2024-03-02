const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
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
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

module.exports = router;
