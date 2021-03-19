import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import Searchmovies from "./SearchMovies";
export function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeAllListeners("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav_logo"
        src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.15752-9/157181232_260601775599893_4404483419325055995_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=GkaDz4PZvOEAX8DA1bl&_nc_ht=scontent.ftun6-1.fna&oh=4602938bbe85881c868b1aabe191d0a4&oe=60756D24"
        alt=""
      />

      <button
        onClick={() => {
          return history.push("/search");
        }}
        className="btn"
      >
        Search
      </button>
      <button className="btn"> Favourite</button>

      <img
        onClick={() => {
          return history.push("/profile");
        }}
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
