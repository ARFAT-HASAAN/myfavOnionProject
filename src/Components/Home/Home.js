import React from "react";
import Manubar from "../Home/Navbar/Manubar";
import Banner from "./Banner/Banner";
import BreakFast from "./BreakFast/BreakFast";
import Feature from "./Feature/Feature";
import Inventory from "./inventory/Inventory";
import ItemNav from "./item/ItemNav";
import Items from "./item/Items";
import Login from "./Login/Login";
import Regester from "./Login/Regester";

// import { Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ItemNav></ItemNav>
      <Feature></Feature>
      <Regester></Regester>
      <Login></Login>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
