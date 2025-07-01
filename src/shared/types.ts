import {Reducer} from '@reduxjs/toolkit';
export interface AppReducer {
  name: string;
  reducer: Reducer;
}

export interface StoreConfig {
  name: string;
  reducer: Reducer;
  initialState?: any;
}
