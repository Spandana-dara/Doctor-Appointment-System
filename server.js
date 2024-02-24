const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

// env config
dotenv.config();

//create rest object
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});

const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
  );
});
