import {
  configureStore,
  combineReducers,
  Store,
  Reducer,
} from '@reduxjs/toolkit';

interface StoreManager {
  store: Store | null;
  reducers: Record<string, Reducer>;
}

const storeManager: StoreManager = {
  store: null,
  reducers: {},
};

// Khởi tạo store
export const initStore = (): Store => {
  if (storeManager.store) return storeManager.store;

  storeManager.store = configureStore({
    reducer: () => ({}), // reducer rỗng ban đầu
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return storeManager.store;
};

// Thêm reducer
export const addReducer = (name: string, reducer: Reducer): void => {
  storeManager.reducers[name] = reducer;
  storeManager.store?.replaceReducer(combineReducers(storeManager.reducers));
  console.log(`✅ Added reducer: ${name}`);
};

// Xóa reducer
export const removeReducer = (name: string): void => {
  delete storeManager.reducers[name];
  storeManager.store?.replaceReducer(combineReducers(storeManager.reducers));
  console.log(`🗑️ Removed reducer: ${name}`);
};

// Lấy store
export const getStore = (): Store => {
  return storeManager.store || initStore();
};

// Debug: xem các reducer hiện tại
export const getReducerNames = (): string[] => {
  return Object.keys(storeManager.reducers);
};

// Lấy tất cả reducers hiện tại
export const getReducers = (): Record<string, Reducer> => {
  return {...storeManager.reducers};
};

// Check xem store đã được khởi tạo chưa
export const isStoreInitialized = (): boolean => {
  return storeManager.store !== null;
};
