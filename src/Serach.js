import React from "react";
import Nav from "./Nav";
import Searchmovies from "./SearchMovies";
 import "./Serach.css";
function Serach() {
  return (
    <div className="loginScreen ">
      <Nav />
      <h1 className="tt">
        {" "}
        Search{" "}
        <span>
          {" "}
          <Searchmovies />
        </span>
      </h1>
    </div>
  );
}
export default Serach;
