import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <Link to="/">
            <img
              className="nav_logo"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/157181232_260601775599893_4404483419325055995_n.png?_nc_cat=102&ccb=1-3&_nc_sid=f79d6e&_nc_ohc=XrMKlKV7EwEAX-LV-Ms&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=72feb42faa0fdd193470e1be64cb72b5&oe=60A4DB67"
              alt=""
            />
          </Link>
          <div className="brand">
            <Link to="/Add">Search </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/favouritemovies">Favourite movies</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
