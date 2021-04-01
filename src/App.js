import React, { useEffect } from "react";
import "./App.css";
import { Homescreen } from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Loginscreen } from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profilescreen from "./screens/ProfileScreen";
import Serach from "./Serach ";
import Searchmovies from "./SearchMovies";

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
          <Loginscreen />
        ) : (
          <Switch>
            <Router exact path="/">
              <Homescreen />
            </Router>

            <Route path="/profile" component={Profilescreen}>
              <Profilescreen />
            </Route>

            <Route path="/search" component={Searchmovies}>
              <Serach />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
