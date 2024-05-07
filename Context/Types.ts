import { ActionCreatorWithPayload, UnknownAction } from '@reduxjs/toolkit';
import React, { Dispatch } from 'react';

export type ContextType = {
  searchActive: boolean;
  dispatch: Dispatch<UnknownAction>;
  setSearchActive: ActionCreatorWithPayload<any, 'nav/setSearchActive'>;

  inputRef: React.MutableRefObject<null>;
  handleInputVisible: () => void;
};
