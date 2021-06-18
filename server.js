const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Starthub app!");
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(
    `Server is up and running on port:${port} in ${NODE_ENV} mode...`
  );
});
