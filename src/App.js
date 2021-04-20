import React, { useEffect } from "react";
import "./App.css";
import { Homescreen } from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFavourites from "./AddFavourites";
import { Loginscreen } from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profilescreen from "./screens/ProfileScreen";
import Serach from "./Serach";
import Forgotpassword from "./screens/Forgotpassword";

export function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logout
        dispatch(logout());
      }
    });

    return unsbscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Switch>
            <Route exact path="/">
              <Loginscreen />
            </Route>
            <Route path="/Forgotpassword">
              <Forgotpassword />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <Homescreen />
            </Route>

            <Route path="/Profilescreen">
              <Profilescreen />
            </Route>

            <Route path="/Serach">
              <Serach />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
