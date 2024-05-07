import { createSlice } from '@reduxjs/toolkit';

export type MovieType = {
  moviesData: any[];
};

const initialState: MovieType = {
  moviesData: [],
};

export const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesData = action.payload;
    },
  },
});

export const { setMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
