//require packages

const express = require("express");
const mongoose = require('mongoose');

//import db connection
const connectDB = require("./db");

const app = express();

// connect db
connectDB();


// basic route test
app.get('/', (req, res) => res.send('Hello'));

// create port
const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server running on ${port}`));