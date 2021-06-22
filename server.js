const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//import db connection
const connectDB = require('./db');
// import error middlewares
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// connect db
connectDB();

// api routes
app.use('/api/v1', require('./routes/index.routes'));

app.get('/', (req, res) => {
  res.send('API IS RUNNING 🚨 🚨 🚨');
});
// error middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port:${port}`);
});
