const express = require("express");
const { userGroups } = require("../controllers/users");
const router = express.Router();

router.get("/user/:username/groups", userGroups);

module.exports = router;
