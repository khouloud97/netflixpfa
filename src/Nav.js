import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import Profilescreen from "./screens/ProfileScreen";
import { Link } from "react-router-dom";

export function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    //   return () => {
    // window.removeAllListeners("scroll");
    //  };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav_logo"
        src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/157181232_260601775599893_4404483419325055995_n.png?_nc_cat=102&ccb=1-3&_nc_sid=f79d6e&_nc_ohc=XrMKlKV7EwEAX-LV-Ms&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=72feb42faa0fdd193470e1be64cb72b5&oe=60A4DB67"
        alt=""
      />
      <button
        onClick={() => {
          return history.push("/Serach");
        }}
        className="btn"
      >
        Search
      </button>

      <Link to="/Profilescreen">
        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Nav;
