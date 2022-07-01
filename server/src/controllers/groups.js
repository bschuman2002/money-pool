const Group = require("../models/group");

const index = async (req, res) => {
  const groups = await Group.find();

  res.json({
    groups: groups,
  });
};

module.exports = {
  index: index,
};
