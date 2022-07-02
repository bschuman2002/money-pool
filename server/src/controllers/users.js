const User = require("../models/user");

const userGroups = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const groups = user.groups;

    res.json({ groups });
  } catch (err) {
    res.json({ err: "No user found" });
  }
};

module.exports = {
  userGroups: userGroups,
};
