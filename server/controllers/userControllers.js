const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      success: true,
      message: "All Users",
      total: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Cannot Get Users",
      error,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)
    const user = await User.findOne({_id : id});
    // const user = await User.findById(id);
    console.log(user)
    if (!user)
      res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    res.status(200).send({
      success: true,
      message: "User Found",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Cannot Get Users",
      error,
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { id } = req.params;
    let user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "User Updated Successully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updating User",
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user)
      res.status(404).send({
        success: false,
        message: "User not Found",
      });
    res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WWhile Deleting User",
    });
  }
};

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };
