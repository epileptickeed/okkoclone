import React, { createContext, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSearchActive } from '../redux/Slices/Nav/NavSlices';
import { ContextType } from './Types';

const Context = createContext({} as ContextType);

type ChildrenType = {
  children: React.ReactNode;
};

export const MainContext = ({ children }: ChildrenType) => {
  const dispatch = useDispatch();
  const searchActive = useSelector((state: RootState) => state.nav.searchActive);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleInputVisible = () => {
    dispatch(setSearchActive(!searchActive));
    setTimeout(() => {
      inputRef.current?.focus();
      console.log(inputRef);
    }, 50);
  };

  return (
    <Context.Provider
      value={{
        handleInputVisible,
        searchActive,
        setSearchActive,
        dispatch,
        inputRef,
      }}>
      {children}
    </Context.Provider>
  );
};

export const UseMainContext = () => {
  return useContext(Context);
};
