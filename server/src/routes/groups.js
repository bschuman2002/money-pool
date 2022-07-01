const express = require("express");
const router = express.Router();
const { index } = require("../controllers/groups");

router.get("/groups", index);

module.exports = router;
