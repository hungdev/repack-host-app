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

  // Nếu đã có reducers được thêm trước khi store khởi tạo, sử dụng chúng
  const rootReducer =
    Object.keys(storeManager.reducers).length > 0
      ? combineReducers(storeManager.reducers)
      : () => ({});

  storeManager.store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  console.log(
    '✅ Store initialized with reducers:',
    Object.keys(storeManager.reducers),
  );
  return storeManager.store;
};

// Thêm reducer
export const addReducer = (name: string, reducer: Reducer): void => {
  storeManager.reducers[name] = reducer;

  // Nếu store đã được khởi tạo, replace reducer ngay lập tức
  if (storeManager.store) {
    storeManager.store.replaceReducer(combineReducers(storeManager.reducers));
    console.log(`✅ Added reducer: ${name} (store updated)`);
  } else {
    console.log(
      `✅ Added reducer: ${name} (will be applied when store initializes)`,
    );
  }
};

// Xóa reducer
export const removeReducer = (name: string): void => {
  delete storeManager.reducers[name];

  if (storeManager.store) {
    const newRootReducer =
      Object.keys(storeManager.reducers).length > 0
        ? combineReducers(storeManager.reducers)
        : () => ({});
    storeManager.store.replaceReducer(newRootReducer);
    console.log(`🗑️ Removed reducer: ${name}`);
  }
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
