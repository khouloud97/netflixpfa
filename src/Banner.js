import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

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

  function truncate(string, n) {
    return string > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                       "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}

        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play </button>
          <button className="banner_button"> My List</button>
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
