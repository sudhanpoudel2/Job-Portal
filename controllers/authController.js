import { User } from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validation

    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "please provide name" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "please provide email" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "please provide password" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "email already register please login",
      });
    }

    const user = await User.create({ name, email, password });
    return res.status(201).send({
      success: true,
      message: "User created sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in register controller",
      success: false,
      error,
    });
  }
};
