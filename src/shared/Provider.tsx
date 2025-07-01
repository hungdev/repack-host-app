import React from 'react';
import {Provider} from 'react-redux';
import {getStore} from './sharedStore';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({children}) => {
  const store = getStore();
  return <Provider store={store}>{children}</Provider>;
};
