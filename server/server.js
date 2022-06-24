const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./src/configs/config.env" });
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const dbo = require("./db/conn");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
