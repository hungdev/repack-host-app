import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  apiData: null,
  token: null,
  user: null,
};

export const fetchData = createAsyncThunk('data/fetch', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return response.json();
});

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  //
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.apiData = action.payload;
      })
      .addCase(fetchData.rejected, state => {
        state.status = 'failed';
      });
  },
});

// Action creators are generated for each case reducer function
export const {setToken, setUser} = rootSlice.actions;

export default rootSlice.reducer;
