//require packages

const express = require("express");
const app = express();

// basic route test
app.get('/', (req, res) => res.send('Hello'));

// create port
const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server running on ${port}`));