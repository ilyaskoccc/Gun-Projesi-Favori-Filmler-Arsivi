export const NEXT_MOVIE = 'NEXT_MOVIE';
export const ADD_MOVIE_TO_FAVS = 'ADD_MOVIE_TO_FAVS';
export const REMOVE_MOVIE_TO_FAVS = 'REMOVE_MOVIE_TO_FAVS';
export const PREV_MOVIE = 'PREV_MOVIE';

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const addMovieToFavs = () => {
  return { type: ADD_MOVIE_TO_FAVS };
};

export const removeMovieToFavs = (id) => {
  return { type: REMOVE_MOVIE_TO_FAVS, payload: id };
};

export const prevMovie = () => {
  return { type: PREV_MOVIE };
};
