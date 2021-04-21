import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Add from "./component/Add";
import Watched from "./component/Watched";
import "./component/Add.css";
import Favouritemovies from "./component/Favouritemovies";
import Header from "./component/Header";
import { Homescreen } from "./screens/HomeScreen";

function Searchtest() {
  return (
    <div className="ok">
      <GlobalProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/Add">
              <Add />
            </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>
            <Route path="/favouritemovies">
              <Favouritemovies />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default Searchtest;
