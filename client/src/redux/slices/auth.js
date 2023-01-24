import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
  const res = await axios.post('http://localhost:5000/login', params);
  return res.data;
});

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    [fetchAuth.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
  },
});

export const selectIsAutn = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
