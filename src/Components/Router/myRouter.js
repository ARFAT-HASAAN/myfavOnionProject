import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BreakFast from "../Home/BreakFast/BreakFast";
import Dinner from "../Home/Dinner/Dinner";
import Home from "../Home/Home";
import ItemNav from "../Home/item/ItemNav";
import Items from "../Home/item/Items";
import Lunch from "../Home/Lunch/Lunch";

const myRouter = () => {
  return (
    <div>
      {/* <Router>
        <Home></Home>
        <Switch>
          <Route path={"/Home"}>
            <Home></Home>
          </Route>
          <Route path={"/items"}>
            <ItemNav></ItemNav>
          </Route>
          <Route path={"/breakfast"}>
            <BreakFast></BreakFast>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
};

export default myRouter;
