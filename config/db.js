const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Mongodb connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};

module.exports = connectDB;
