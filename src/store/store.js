import {configureStore} from '@reduxjs/toolkit';

// import authReducer from 'AuthMiniApp/authSlice';
import rootSlice from './rootSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    root: rootSlice,
  },
});
