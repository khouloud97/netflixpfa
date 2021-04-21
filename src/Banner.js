import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import "./Row";

export function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                       "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
        backgroundPosition: "",
      }}
    >
      <div className="banner_contents">
        {/* title */}

        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">
            {" "}
            Vote average : {movie.vote_average}{" "}
          </button>
        </div>
        {/* div 2 butt */}

        {/*  desc */}
        <h1 className="banner_discription">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}
export default Banner;
