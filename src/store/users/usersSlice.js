import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteUserThunk, getUsersThunk } from './usersOperations';

const handleGetUsersFulfilled = (state, { payload }) => {
  console.log(payload);
  state.users = payload;
  //   state.totalUsers = payload.total;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getUsersThunk.fulfilled, handleGetUsersFulfilled)

      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('/rejected');
      }, handleRejected),
});

export const usersReducer = usersSlice.reducer;
