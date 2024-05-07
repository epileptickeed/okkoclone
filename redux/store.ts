import { configureStore } from '@reduxjs/toolkit';
import movieSlices from './Slices/Movie/movieSlices';
import NavSlices from './Slices/Nav/NavSlices';
import InputSlice from './Slices/InputSlice';

export const store = configureStore({
  reducer: {
    movies: movieSlices,
    nav: NavSlices,
    input: InputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
