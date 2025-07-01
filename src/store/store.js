import {configureStore} from '@reduxjs/toolkit';
import rootSlice from './rootSlice';

// Initial store without auth
const initialStore = configureStore({
  reducer: {
    root: rootSlice,
  },
});

// Function to add auth reducer dynamically
export const addAuthReducer = async () => {
  try {
    const authModule = await import('AuthMiniApp/authSlice');
    const authReducer = authModule.default;

    // Reconfigure store with auth reducer
    const newStore = configureStore({
      reducer: {
        auth: authReducer,
        root: rootSlice,
      },
      preloadedState: initialStore.getState(), // Preserve existing state
    });

    return newStore;
  } catch (error) {
    console.error('Failed to load auth reducer:', error);
    return initialStore;
  }
};

export const store = initialStore;
