import React, { useState } from "react";
import { Homescreen } from "./screens/HomeScreen";
import "./SearchMovies.css";
export function Searchmovies() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=3cfebd9a527d380aa8187dcd2e5f5786&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search Your Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small className="smalln">
                    RELEASE DATE: {movie.release_date}
                  </small>
                </p>
                <p>
                  <small className="smalln">RATING: {movie.vote_average}</small>
                </p>
                <p className="smalln">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default Searchmovies;
