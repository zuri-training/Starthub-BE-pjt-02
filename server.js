const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

//import db connection
const connectDB = require("./db");

// import routes
const projectRoutes = require('./routes/projectRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// connect db
connectDB();

// routes
app.use("/auth", authRoutes)
app.use(projectRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `Server is up and running on port:${port}`
  );
});
