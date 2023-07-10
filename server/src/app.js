import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "../routers/userRouter.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// ********Middleware Insertion*********
// Parse incoming JSON data
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// Enable CORS
app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);

// Routes
app.use("/api", userRouter);

export default app;

// This is the main Express application file.
// It sets up the Express app, loads environment variables using dotenv, and defines necessary middleware.
// The JSON body parser, cookie parser, and CORS middleware are added.
// The user router is mounted at the "/api" base URL.
// The app instance is exported to be used in other files.
