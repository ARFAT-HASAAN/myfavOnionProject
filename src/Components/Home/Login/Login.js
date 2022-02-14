import React from "react";
import "./Regester.css";
import logo from "../../../images/logo2.png";
const Login = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formSection">
          <span className="imgContaner">
            {" "}
            <img src={logo} alt="" />{" "}
          </span>

          <form action="">
            <input
              placeholder="Email"
              type="email"
              name="Email"
              id="useremail"
            />{" "}
            <br />
            <input
              placeholder="Password"
              type="password"
              name="Password"
              id="userpass"
            ></input>{" "}
            <br />
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
