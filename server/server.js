const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));

const dbo = require("./db/conn");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
  });
  console.log(`App listening on port ${port}`);
});
