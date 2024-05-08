import { ActionCreatorWithPayload, UnknownAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

export type ContextType = {
  searchActive: boolean;
  dispatch: Dispatch<UnknownAction>;
  setSearchActive: ActionCreatorWithPayload<any, 'nav/setSearchActive'>;

  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleInputVisible: () => void;
};
