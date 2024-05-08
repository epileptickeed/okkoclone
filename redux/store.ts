import { configureStore } from '@reduxjs/toolkit';
import movieSlices from './Slices/Movie/movieSlices';
import NavSlices from './Slices/Nav/NavSlices';

export const store = configureStore({
  reducer: {
    movies: movieSlices,
    nav: NavSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
