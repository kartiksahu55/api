import mongoose from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Required"],
    },
    username: {
      type: String,
      required: [true, "Username Required"],
      unique: [true, "Username should be unique"],
      trim: true,
    },
    bio: {
      type: String,
      required: [true, "Bio Required"],
    },
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: [true, "Email should be unique"],
      minlength: [6, "Minimun email length is 6 Characters"],
      maxlength: [50, "Maximun email length is 50 Characters"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password Required"],
      minlength: [8, "Minimum password length is 8 characters"],
    },
  },
  { timestamps: true }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    const password = this.password;
    const salt = 10;
    this.password = await bcrypt.hash(password, salt);
    next();
  } catch (error) {
    console.log(error.message);
    next();
  }
});

// Define methods on the user schema
userSchema.methods = {
  // Generate a JWT token for the user
  jwtToken() {
    return JWT.sign(
      { id: this._id, username: this.username },
      process.env.SECRET_TOKEN,
      { expiresIn: "24h" }
    );
  },
};

export default mongoose.model("User", userSchema);

// This module exports the Mongoose model for the user, with the user schema defining the fields and validations.
// It includes pre-save middleware to hash the password before saving it to the database.
// It also defines a method to generate a JWT token for the user.
// The module is named "User" and can be imported in other files to interact with the user collection in MongoDB.