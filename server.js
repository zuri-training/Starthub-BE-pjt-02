
const express = require('express');
const userRouter = require('./routes/intern');
const dotenv = require('dotenv');
dotenv.config();

//import db connection
const connectDB = require('./db');

const app = express();

app.use(express.json({ extended: false }));
app.use(userRouter)

// connect db
connectDB();



const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `Server is up and running on port:${port}`
  );
});
