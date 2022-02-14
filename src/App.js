import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Manubar from "./Components/Home/Navbar/Manubar";
import ItemNav from "./Components/Home/item/ItemNav";

function App() {
  return (
    <div className="">
      <Router>
        <Manubar></Manubar>

        <Switch>
          <Route exact path={"/"}>
            <Home></Home>
          </Route>
          <Route path={"/home"}>
            <Home></Home>
          </Route>
          {/* <Route path={"/items"}>
            <ItemNav></ItemNav>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
