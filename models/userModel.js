import mongoose, { Schema } from "mongoose";
import validator from "validator";

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

export const User = mongoose.model("User", userSchema);