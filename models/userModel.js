import mongoose, { Schema } from "mongoose";
import validator, { isJWT } from "validator";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({
  path: "",
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "firstname is required"],
    },
    lastName: {
      type: String,
      //   required: [true, "lastname is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validator: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Passcode is required"],
      minlength: [6, "passwoed length should be minimum 6 character"],
    },
    location: {
      type: String,
      default: "Nepal",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//jwt
userSchema.methods.createJwt = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const User = mongoose.model("User", userSchema);
