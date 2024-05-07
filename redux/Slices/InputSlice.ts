import { createSlice } from '@reduxjs/toolkit';

type InputType = {
  inputRef: null;
};

const initialState: InputType = {
  inputRef: null,
};

export const InputSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    focusInput: (state) => {
      if (state.inputRef) {
        state.inputRef.focus();
      }
    },
  },
});

export const { focusInput } = InputSlice.actions;
export default InputSlice.reducer;
