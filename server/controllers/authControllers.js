const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hash,
    });
    await user.save();
    res.status(201).send({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ message: "Invalid Email" });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword)
      return res.status(404).send({ message: "Invalid Password" });
    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.PRIVATE_KEY
    );
    res.status(200).send({
        success : true,
        message : "Logged In Successfully",
        user : user,
        token : token
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success : false,
        message : "Invalid Credentials, Enter Correct Email and Password"
    })
  }
};

module.exports = { signUp, logIn };
