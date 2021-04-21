import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { MovieCard } from "./MovieCard"

export const Favouritemovies = () => {
  const { favouritemovies } = useContext(GlobalContext)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Favourite Movies </h1>

          <span className="count-pill">
            {favouritemovies.length}
            {favouritemovies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {favouritemovies.length > 0 ? (
          <div className="movie-grid">
            {favouritemovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="favouritemovies" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  )
}
export default Favouritemovies;
