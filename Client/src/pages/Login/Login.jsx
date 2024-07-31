import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import eye from "../assets/eye.png";
import eyeC from "../assets/eyeC.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(eyeC);
  const [showPassword, setShowPassword] = useState(password);

  const navigate = useNavigate();

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

  const loginUser = (event) => {
    event.preventDefault();
    // console.log(username, password);

    axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
          username,
          password
        }
      )
      .then((res) => {
        // console.log(res);
        alert(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error while connecting to backend", error.message);
      });
  };

  return (
    <>
      <div id="container">
        <form method="post">
          <h2>LogIn</h2>
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

          <button role="submit" id="button" onClick={loginUser}>
            Sign In
          </button>
          <div className="signin">
            Create an account,
            <Link id="sendSignIn" to="/signin">
              sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
