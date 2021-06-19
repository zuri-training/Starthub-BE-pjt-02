const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

//import db connection
const connectDB = require("./db");

// import routes
const projectRoute = require('./routes/projectRoute')

const app = express();

app.use(express.json({ extended: false }));

// connect db
connectDB();

// routes
app.use(projectRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `Server is up and running on port:${port}`
  );
});
