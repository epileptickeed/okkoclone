import React, { createContext, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSearchActive } from '../redux/Slices/Nav/NavSlices';
import { ContextType } from './Types';
import { focusInput } from '../redux/Slices/InputSlice';

const Context = createContext({} as ContextType);

type ChildrenType = {
  children: React.ReactNode;
};

export const MainContext = ({ children }: ChildrenType) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchActive = useSelector((state: RootState) => state.nav.searchActive);
  //   const InputSlice = useSelector((state: RootState) => state.input.inputRef);

  const handleInputVisible = () => {
    dispatch(setSearchActive(!searchActive));
    dispatch(focusInput());
  };

  return (
    <Context.Provider
      value={{
        handleInputVisible,
        searchActive,
        dispatch,

        inputRef,
      }}>
      {children};
    </Context.Provider>
  );
};

export const UseMainContext = () => {
  return useContext(Context);
};
