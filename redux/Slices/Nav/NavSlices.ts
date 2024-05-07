import { createSlice } from '@reduxjs/toolkit';

export type NavType = {
  searchActive: boolean;
};

const initialState: NavType = {
  searchActive: false,
};

export const NavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setSearchActive: (state, action) => {
      state.searchActive = action.payload;
    },
  },
});

export const { setSearchActive } = NavSlice.actions;
export default NavSlice.reducer;
