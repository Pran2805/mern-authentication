import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import eye from "../assets/eye.png";
import eyeC from "../assets/eyeC.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogIn from "../LogInPage/LogIn";

function SignIn() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(eyeC);
  const [showPassword, setShowPassword] = useState(password);

  const Navigate = useNavigate();

  const eyeChange = (event) => {
    event.preventDefault();
    if (image === eye) {
      setShowPassword(!showPassword);
      setImage(eyeC);
    } else {
      setShowPassword(!showPassword);
      setImage(eye);
    }
  };

  const registerUser = (event) => {
    event.preventDefault();
    // console.log(email, username, password);
    axios
      .post("http://localhost:8000/api/v1/user/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error while connecting to backend", error.message);
      });
  };

  return (
    <>
      <div id="container">
        <form method="post">
          <h2>Sign In</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <div className="flex">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
              <button id="eye" role="button" onClick={eyeChange}>
                <img src={image} alt="Show/Hide password" />
              </button>
            </div>
          </div>

          <button role="submit" id="button" onClick={registerUser}>
            Sign In
          </button>
          <div className="login">
            If you have an account,
            <Link id="sendLogin" to="/login">
              login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
