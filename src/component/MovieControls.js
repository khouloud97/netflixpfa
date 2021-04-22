/** @format */

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({ type, movie }) => {
	const {
		removeMovieFromfavouritemovies,
		addMovieToWatched,
		moveTofavouritemovies,
		removeFromWatched,
	} = useContext(GlobalContext);

	return (
		<div className='inner-card-controls'>
			{type === 'favouritemovies' && (
				<>
					<button
						className='ctrl-btn'
						onClick={() => removeMovieFromfavouritemovies(movie.id)}>
						<i className='fa-fw fa fa-times'></i>
					</button>
				</>
			)}

			{type === 'watched' && (
				<>
					<button
						className='ctrl-btn'
						onClick={() => moveTofavouritemovies(movie)}>
						<i className='fas fa-heart'></i>
					</button>

					<button
						className='ctrl-btn'
						onClick={() => removeFromWatched(movie.id)}>
						<i className='fa-fw fa fa-times'></i>
					</button>
				</>
			)}
		</div>
	);
};
export default MovieControls;
/**      <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fas fa-check-double"></i>
          </button>
 */
