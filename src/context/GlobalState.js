import React, {createContext, useReducer, useEffect
} from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favouritemovies: localStorage.getItem("favouritemovies")
    ? JSON.parse(localStorage.getItem("favouritemovies"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};



// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouritemovies", JSON.stringify(state.favouritemovies));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieTofavouritemovies = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_favouritemovies", payload: movie });
  };

  const removeMovieFromfavouritemovies = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_favouritemovies", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveTofavouritemovies = (movie) => {
    dispatch({ type: "MOVE_TO_favouritemovies", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouritemovies: state.favouritemovies,
        watched: state.watched,
        addMovieTofavouritemovies,
        removeMovieFromfavouritemovies,
        addMovieToWatched,
        moveTofavouritemovies,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
