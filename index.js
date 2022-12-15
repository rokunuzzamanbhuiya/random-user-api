const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/v1/user.route");

const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello Express! All are Okay!");
});

app.listen(port, () => {
  console.log(`Port is running: http://localhost:${port}/`);
});
