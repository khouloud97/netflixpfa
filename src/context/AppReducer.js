/** @format */

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case 'ADD_MOVIE_TO_favouritemovies':
			return {
				...state,
				favouritemovies: [action.payload, ...state.favouritemovies],
			};
		case 'REMOVE_MOVIE_FROM_favouritemovies':
			return {
				...state,
				favouritemovies: state.favouritemovies.filter(
					(movie) => movie.id !== action.payload
				),
			};
		case 'ADD_MOVIE_TO_WATCHED':
			return {
				...state,
				favouritemovies: state.favouritemovies.filter(
					(movie) => movie.id !== action.payload.id
				),
				watched: [action.payload, ...state.watched],
			};
		case 'MOVE_TO_favouritemovies':
			return {
				...state,
				watched: state.watched.filter(
					(movie) => movie.id !== action.payload.id
				),
				favouritemovies: [action.payload, ...state.favouritemovies],
			};
		case 'REMOVE_FROM_WATCHED':
			return {
				...state,
				watched: state.watched.filter((movie) => movie.id !== action.payload),
			};
		default:
			return state;
	}
};
