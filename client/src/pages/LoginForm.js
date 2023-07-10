import React, { useState } from "react";
import "./Login_Sugnup__Form.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const userLoginHandler = async (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:5000/api/login",
        {
          username: user,
          password: pass,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        alert(`${res.data.data.name}, Successfully Loged In`);
        console.log(res);
        setIsLoginSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  // Navigate to user page after successful login
  if (isLoginSuccessful) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <section id="form_container">
        <h2>Instagram Login</h2>

        <form onSubmit={userLoginHandler} className="form">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            required
            onChange={(e) => setUser(e.target.value)}
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit" class="submtBtn">
            Log In
          </button>
        </form>

        <a class="signup_and_login" href="./signUp.html">
          Sign Up
        </a>
      </section>
      
    </main>
  );
};

export default LoginForm;
