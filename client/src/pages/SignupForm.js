import React, { useState } from "react";
import "./Login_Sugnup__Form.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const SignupForm = () => {
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

  const signUp = async (userData) => {
    axios
      .post("http://localhost:5000/api/signup", userData)
      .then((res) => {
        alert(
          `Account has been created successfully: ${res.data.data.username}`
        );
        setIsSignUpSuccessful(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      bio: event.target.bio.value,
    };
    signUp(userData);
  };

  if (isSignUpSuccessful) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <section id="form_container">
        <h2>Instagram SignUp</h2>

        <form className="form" onSubmit={formSubmitHandler}>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
            minlength="6"
            maxlength="50"
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
            minlength="8"
          />
          <label for="bio">Bio</label>
          <input type="text" id="bio" name="bio" placeholder="Enter your Bio" />
          <button type="submit" class="submtBtn">
            Sign Up
          </button>
        </form>

        <a class="signup_and_login logIn" href="./logIn.html">
          Log In
        </a>
      </section>
    </main>
  );
};

export default SignupForm;
