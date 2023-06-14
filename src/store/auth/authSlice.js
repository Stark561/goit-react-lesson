import { createSlice } from '@reduxjs/toolkit';
import { getUserNameAsynk, logInAsynk } from './authOperations';

const initialState = {
  islogIn: false,
  token: '',
  name: '',
  erorMessage: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logInAsynk.fulfilled, (state, { payload }) => {
        state.token = payload.access_token;
        state.islogIn = true;
        state.loading = false;
      })
      .addCase(logInAsynk.pending, state => {
        state.loading = true;
      })
      .addCase(logInAsynk.rejected, (state, { error: { message } }) => {
        state.erorMessage = message;
      })
      .addCase(getUserNameAsynk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
      });
  },
});

export const authReducer = authSlice.reducer;
