const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./src/configs/config.env" });
const bodyParser = require("body-parser");
const dbo = require("./db/conn");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const port = process.env.PORT || 3000;

const sessions = require("./src/routes/sessions");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json(), urlEncodedParser);

// Routes
app.use(sessions);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
