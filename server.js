
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

//import db connection
const connectDB = require("./db");

const app = express();

app.use(express.json({ extended: false }));

// connect db
connectDB();

// Basic test route
app.get("/", (req, res) => {
  res.send("Starthub app!");
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `Server is up and running on port:${port}`
  );
});
