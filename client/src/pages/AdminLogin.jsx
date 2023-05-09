import React, { useState } from "react";
import "./AdminLogin.css";
import Logo from "../assets/Logo.png";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";
import { login } from "../providers/userSlice";
import { useDispatch } from "react-redux";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(username, password);
      let resData = await axios.post("http://localhost:8080/loginAdmin", {
        email: username,
        password,
      });
      navigate("/adminDashboard");
      dispatch(
        login({
          name: resData.data.name,
          email: resData.data.email,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="container1">
        <div className="leftContainer">
          <div className="WelcomeText">
            <b> Welcome to JUIT Dispensary!</b>
          </div>
          <form action="/" method="post" id="form">
            <div className="EmailInput">
              <input
                id="EmailInput2"
                type="email"
                name="email"
                className="login-input"
                placeholder="Enter Your Email"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <b>
                <script></script>
              </b>
            </div>
            {/* <div className="PasswordHeading">
                                Password
                            </div> */}
            <div className="PasswordInput">
              <input
                id="PasswordInput2"
                name="password"
                type="password"
                className="login-input"
                placeholder="Enter Your Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="reset">
              <b> Reset Password</b>
            </div>
            <div className="loginButton">
              <button
                id="LoginButton"
                onClick={handleSubmit}
                className="login-input"
              >
                {/* <Link to="/CompanyDashboard" className="LoginLink"> */}
                {/* {" "} */}
                Login
                {/* </Link> */}
              </button>
            </div>
            <div className="SignUP">
              <div className="SignUpBtn">
                Dont have an account? Click here to sign up.
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container2">
        <div className="rightContainer">
          <div className="logoJUIT">
            <a href="https://www.juit.ac.in/">
              <img className="logoJUIT" id="logo" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="juit">
            <a className="juit1" href="https://www.juit.ac.in/">
              Jaypee University Of Information Technology
            </a>
          </div>
          <div className="approval">
            Approved by UGC under Section 2f of UGC Act
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
