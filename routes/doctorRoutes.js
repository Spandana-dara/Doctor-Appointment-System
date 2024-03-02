const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController } = require("../controllers/doctorController");

const router = express.Router();

// Get doctor
router.get("getDoctorInfo", authMiddleware, getDoctorInfoController);

module.exports = router;
