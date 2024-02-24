const userModel = require("../models/userModel");
const bcrypt = require("bycrypt.js");

const registerController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = () => {};

module.exports = { loginController, registerController };
