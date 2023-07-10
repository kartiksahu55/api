import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";
import { Navigate } from "react-router";

const User = () => {
  const [login, setLogin] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const sendRequestWithCookie = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/", {
          withCredentials: true,
        });
        // Process the response data
        console.log(response.data.data);
        setUserData(response.data.data);
        setIsLogedIn(true);
      } catch (error) {
        // Handle the error
        console.error(error);
        setIsLogedIn(false);
      }
    };

    sendRequestWithCookie();
  }, []);

  if (login) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="user_Page">
        {isLogedIn && (
          <div className="user_login_true user_align">
            <img
              src="https://www.nspackaging.com/wp-content/uploads/sites/4/2020/05/eye-4063134_1920-740x520.jpg"
              alt="user"
            />
            <h3>{userData.username}</h3>
            <h6>{userData.bio}</h6>
            <p>{userData.email}</p>
            <p>{userData.createdAt}</p>
          </div>
        )}
        {/* LogedIn User Data */}
        {!isLogedIn && (
          <div className="user_align">
            <h2>
              Welcome To <strong>Instagram</strong> <br /> Please LogIn
            </h2>
            <button className="user_logIn_btn" onClick={() => setLogin(true)}>
              LogIn
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
