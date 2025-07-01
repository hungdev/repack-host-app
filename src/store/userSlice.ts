import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addReducer} from '../shared';

interface UserState {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: 'John Doe',
  email: 'john@example.com',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.name = '';
      state.email = '';
    },
    updateProfile: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

// Thêm vào shared store ngay khi khởi tạo
addReducer('user', userSlice.reducer);

export const {setUser, login, logout, updateProfile} = userSlice.actions;
export default userSlice;
export type {UserState};
