import React from "react";
import "./Regester.css";
import logo from "../../../images/logo2.png";

const Regester = () => {
  return (
    <div className="formContainer">
      <div className="formSection">
        <span className="imgContaner">
          {" "}
          <img src={logo} alt="" />{" "}
        </span>

        <form action="">
          <input placeholder="Name" type="text" /> <br />
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
          <input
            placeholder="Confirm Password"
            type="text"
            name=""
            id=""
          />{" "}
          <br />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default Regester;
