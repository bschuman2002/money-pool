const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  groups: [{ groupId: ObjectId, groupName: String }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
