import React, { useState, useEffect } from "react";
import "./StudentLogin.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../providers/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState("");

  const dispatch = useDispatch();
  const handleLogin = async (event) => {
    event.preventDefault();

    setloading(true);
    console.warn("data", username, password);
    try {
      let res = await axios.post(
        "https://juit-webkiosk-api.onrender.com/v1.0/login",
        { username, password }
      );
      let resData = await axios.post(
        "https://juit-webkiosk-api.onrender.com/v1.0/personalDetails",
        { username, password }
      );
      // console.log(resData);
      if (res.data.success === true) {
        setloading(false);
        navigate("/studentDashboard");
        dispatch(
          login({
            Course: resData.data.Course,
            Email: resData.data.Email,
            FathersName: resData.data.FathersName,
            Mobile: resData.data.Mobile,
            Name: resData.data.Name,
            ParentMobile: resData.data.ParentMobile,
            Rollno: resData.data.Rollno,
            Semester: resData.data.Semester,
            address: resData.data.address,
            percentage10: resData.data.percentage10,
            percentage12: resData.data.percentage12,
          })
        );
        // console.log(res);
      } else {
        console.log("login not valid");
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <h1>Please wait...</h1>
          <div className="ring"> </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="container1">
              <div className="leftContainer">
                <div className="WelcomeText">
                  <b> Welcome to JUIT Dispensary !</b>
                </div>
                <div className="IfCompany">
                  <button
                    onClick={() => {
                      navigate(`/adminLogin`);
                    }}
                  >
                    {" "}
                    Click here if you are an Admin !
                  </button>
                </div>
                <div>
                  <b>Student Login</b>
                </div>

                <form action="/" method="post" id="form">
                  <div className="EmailInput">
                    <input
                      id="EmailInput"
                      type="text"
                      name="rollno"
                      className="login-input"
                      placeholder="Enter Your Roll Number"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <b>
                      <script></script>
                    </b>
                  </div>

                  <div className="PasswordInput">
                    <input
                      id="PasswordInput"
                      name="password"
                      type="password"
                      className="login-input"
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="loginButton">
                    <button
                      onClick={handleLogin}
                      id="LoginButton"
                      className="login-input"
                    >
                      Login
                    </button>
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
        </>
      )}
    </>
  );
}

export default Login;
