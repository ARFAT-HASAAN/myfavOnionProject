// import { Link, NavLink } from "react-router-dom";
import "./ItemsNav.css";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import BreakFast from "../BreakFast/BreakFast";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";

const ItemNav = () => {
  const { url, path } = useRouteMatch();
  return (
    <div className="container">
      <div className="itemsContainer">
        <Link to={`${url}/Breakfast`}>
          {" "}
          <button className="itemBtn"> Breakfast </button>
        </Link>{" "}
        <Link to={`${url}/lunch`}>
          <button className="itemBtn">Lunch </button>
        </Link>
        <Link to={`${url}/dinner`}>
          <button className="itemBtn"> Dinner</button>{" "}
        </Link>
      </div>

      <div className="container">
        <Switch>
          <Route exact path={path}>
            <BreakFast></BreakFast>
          </Route>
          <Route path={`${path}/Breakfast`}>
            <BreakFast></BreakFast>
          </Route>
          <Route path={`${path}/lunch`}>
            <Lunch></Lunch>
          </Route>
          <Route path={`${path}/dinner`}>
            <Dinner></Dinner>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ItemNav;
