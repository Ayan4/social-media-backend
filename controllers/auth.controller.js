const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(404).json({ success: false, message: "user not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword &&
      res.status(400).json({ success: false, message: "wrong password" });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
