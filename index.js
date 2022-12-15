const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Express! All are Okay!");
});

app.listen(port, () => {
  console.log(`Port is running: http://localhost:${port}/`);
});
