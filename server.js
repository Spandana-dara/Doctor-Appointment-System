const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//configure dotenv
dotenv.config();

//connect to db
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
