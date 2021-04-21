import React from "react";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
 import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData(); 
  }, [fetchUrl]);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=3cfebd9a527d380aa8187dcd2e5f5786`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };
  return (
    <>
      <div className="row">
        <h2> {title} </h2>
        <div className="row_posters">
          {/*  several row__poster*/}
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
/*   {movies.map((movie) => (
           
              <div className="overlay" key={movie.id}>
                <div className="title" key={movie.id}>
                  {movie.title}
                </div>
                <div className="rating" key={movie.id}>
                  {movie.vote_average}
                </div>
              </div>
        
          ))}*/
/* Superposition et changement background et texte au survol */
