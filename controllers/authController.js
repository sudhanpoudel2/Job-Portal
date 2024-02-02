import { User } from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //validation

    if (!name) {
      next("name is required"); // yo garda sajilo hunchha dherai
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

    //token auth

    const token = user.createJwt();

    return res.status(201).send({
      success: true,
      message: "User created sucessfully",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
