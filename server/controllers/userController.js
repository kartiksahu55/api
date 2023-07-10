import User from "../models/userModel.js";
import emailValidator from "email-validator";
import bcrypt from "bcrypt";

// ******User sign-up route******
const userSignUp = async (req, res) => {
  try {
    const { name, username, bio, email, password } = req.body;

    console.log(name);

    // Check if all required fields are provided
    if (!name || !username || !bio || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //Validate Email address
    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Check if email already exists
    const checkDuplicate = await User.findOne({ email });
    if (checkDuplicate && checkDuplicate.username) {
      return res.status(400).json({
        success: false,
        message: "Email Id already exist",
      });
    }

    const user = new User(req.body);
    const doc = await user.save();

    return res.status(201).json({
      success: true,
      data: doc,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Username already exist",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ******User login route******
const userLogIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    //Validate Email Id and Password
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!user || !validPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credential",
      });
    }

    //Create Token and store it to browser cookie
    const token = user.jwtToken();

    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ******Fetch user details route******
const fetchUser = async (req, res) => {
  try {
    const userId = req.userPayload.id;

    const user = await User.findById({ _id: userId });
    user.password = undefined;

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return (
      res.status(401),
      json({
        success: false,
        message: error.message,
      })
    );
  }
};

// ******User logout route******
const logOut = async (req, res) => {
  try {
    const cookieOption = {
      expires: new Date(),
      httpOnly: true,
    };

    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {}
};

export default {
  userSignUp, // User sign-up route
  userLogIn, // User login route
  fetchUser, // Fetch user details route
  logOut, // User logout route
};

// This module exports functions for user sign-up, login, fetching user details, and logout.