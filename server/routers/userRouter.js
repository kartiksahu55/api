import express from "express";
import userController from "../controllers/userController.js";
import jwtAuthToken from "../middlewares/jwtAuthUser.js";

const userRouter = express.Router();

userRouter
  .post("/signup", userController.userSignUp) // User sign-up route
  .post("/login", userController.userLogIn) // User login route
  .get("/", jwtAuthToken, userController.fetchUser) // Fetch user details route
  .get("/logout", jwtAuthToken, userController.logOut); // User logout route

export default userRouter;

// This router handles user-related routes such as sign-up, login, fetching user details, and logout.
// The routes are mapped to their respective controller functions and include JWT authentication middleware.
