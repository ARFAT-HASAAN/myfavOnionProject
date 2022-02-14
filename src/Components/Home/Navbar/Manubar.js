import React from "react";
import logo from "../../../images/logo2.png";
import "./Manubar.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Manubar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="Navlogo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <i class="fa-solid fa-dolly"></i>
            </Nav.Link>
            <Link to={"/items"}>items</Link>
            <Nav.Link className="fw-bold mx-4" href="#features">
              Login
            </Nav.Link>
            <button className="btn">Sign up</button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Manubar;
