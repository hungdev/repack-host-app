import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';

// Type cho RootState - có thể extend
export interface RootState {
  [key: string]: any;
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();
