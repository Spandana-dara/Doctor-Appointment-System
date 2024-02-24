const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

//create rest object
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
