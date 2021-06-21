const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//import db connection
const connectDB = require("./db");

// import routes
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// connect db
connectDB();

// routes
app.use(projectRoutes);
app.use('/api/auth', userRoutes);

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `Server is up and running on port:${port}`
  );
});
