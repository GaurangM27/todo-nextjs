import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email Required"],
  },
  password: {
    type: String,
    required: [true, "Password Required"],
  },
  about: String,
});

export const User =
  mongoose.models.Users || mongoose.model("Users", userSchema);
