const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const register = async (req, res) => {
  const user = req.body;

  try {
    const takenUsername = await User.findOne({
      username: user.username.toLowerCase(),
    });
    const takenEmail = await User.findOne({ email: user.email.toLowerCase() });

    if (takenUsername || takenEmail) {
      res.json({ message: "Username or email has already been taken" });
    } else {
      user.password = await bcrypt.hash(req.body.password, 10);

      const dbUser = new User({
        username: user.username,
        email: user.email.toLowerCase(),
        password: user.password,
      });

      dbUser.save();
      res.json({ message: "Success" });
    }
  } catch (err) {
    res.json({ message: "Missing username, email, or password field" });
  }
};

const login = (req, res) => {
  const userLoggingIn = req.body;
  User.findOne({ username: userLoggingIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({
        message: "Invalid username or password",
      });
    }
    bcrypt
      .compare(userLoggingIn.password, dbUser.password)
      .then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbUser._id,
            username: dbUser.username,
          };
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 86400 },
            (err, token) => {
              if (err) {
                return res.json({ message: err });
              }
              return res.json({
                message: "Success",
                token: "Bearer" + token,
              });
            }
          );
        } else {
          return res.json({ message: "Invalid username or password" });
        }
      });
  });
};

module.exports = {
  register: register,
  login: login,
};
